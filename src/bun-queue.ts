/* eslint-disable no-await-in-loop */
import { EventEmitter } from 'node:events';
import { randomUUID } from 'node:crypto';
import type { ScoutDatabase } from './db.ts';
import { CompanyProfiler } from './profiler.ts';
import type {
  QueueJobStatus,
  QueueStatusSummary,
  ScrapingJob,
} from './types.ts';

export interface BunQueueOptions {
  minDelayMs?: number;
  maxDelayMs?: number;
  concurrency?: number;
  maxAttempts?: number;
  circuitCooldownMs?: number;
}

export class BunQueue extends EventEmitter {
  private db: ScoutDatabase;
  private profiler: CompanyProfiler;
  private isProcessing = false;
  private isPaused = false;
  private shouldStop = false;
  private minDelayMs: number;
  private maxDelayMs: number;
  private maxAttempts: number;
  private circuitCooldownMs: number;
  private circuitCooldownUntil = 0;
  private sleepAbortController: AbortController | null = null;

  constructor(db: ScoutDatabase, options: BunQueueOptions = {}) {
    super();
    this.db = db;
    this.profiler = new CompanyProfiler();
    this.minDelayMs = options.minDelayMs ?? 2500;
    this.maxDelayMs = options.maxDelayMs ?? 5000;
    this.maxAttempts = options.maxAttempts ?? 3;
    // 30 minute default circuit cooldown
    this.circuitCooldownMs = options.circuitCooldownMs ?? 30 * 60 * 1000;
  }

  /**
   * Adds a profiling/scraping job to the SQLite-backed Bun queue
   */
  async add(
    targetId: string,
    taskType: ScrapingJob['taskType'] = 'profile_deep_dive',
    payload: Record<string, unknown> = {},
    options: { priority?: number; delayMs?: number } = {}
  ): Promise<ScrapingJob> {
    const id = `job_${Date.now()}_${randomUUID().slice(0, 8)}`;
    const now = new Date();
    const scheduledFor = options.delayMs
      ? new Date(now.getTime() + options.delayMs).toISOString()
      : now.toISOString();

    const job: ScrapingJob = {
      id,
      targetId,
      taskType,
      status: 'waiting',
      priority: options.priority ?? 0,
      attempts: 0,
      maxAttempts: this.maxAttempts,
      payload,
      scheduledFor,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    this.db.enqueueJob(job);
    this.emit('job:enqueued', job);
    return job;
  }

  /**
   * Bulk enqueues multiple targets atomically in a single transaction (fixes P6)
   */
  async addBulk(
    targetIds: string[],
    taskType: ScrapingJob['taskType'] = 'profile_deep_dive'
  ): Promise<ScrapingJob[]> {
    const now = new Date();
    const jobs: ScrapingJob[] = targetIds.map((targetId) => ({
      id: `job_${Date.now()}_${randomUUID().slice(0, 8)}`,
      targetId,
      taskType,
      status: 'waiting' as QueueJobStatus,
      priority: 0,
      attempts: 0,
      maxAttempts: this.maxAttempts,
      payload: {},
      scheduledFor: now.toISOString(),
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    }));

    this.db.enqueueJobsBatch(jobs);
    for (const job of jobs) {
      this.emit('job:enqueued', job);
    }
    return jobs;
  }

  /**
   * Processes the next waiting job in the queue using atomic RETURNING * (fixes R1)
   */
  async processNext(): Promise<ScrapingJob | null> {
    if (this.isPaused) return null;

    if (Date.now() < this.circuitCooldownUntil) {
      this.pause();
      return null;
    }

    // Atomic claim & attempt increment in one single SQLite statement (P1 / R1)
    const job = this.db.claimNextWaitingJob();
    if (!job) return null;

    this.emit('job:active', job);

    try {
      // Execute profiling task
      const profile = this.profiler.getProfile(job.targetId);

      // Persist deep profile to database
      this.db.updateDeepProfile(job.targetId, profile);

      const result = {
        success: true,
        targetId: job.targetId,
        business: profile.business.model,
        blogsCount: profile.blogs.length,
        projectsCount: profile.projects.length,
        tastesCount: profile.tastes.architecturalBiases.length,
        timestamp: new Date().toISOString(),
      };

      this.db.updateJobStatus(job.id, 'completed', result);
      const completedJob = this.db.getJob(job.id);
      if (completedJob) {
        this.emit('job:completed', completedJob, result);
      }
      return completedJob;
    } catch (err: unknown) {
      const rawErrorMsg = err instanceof Error ? err.message : String(err);
      const lowerError = rawErrorMsg.toLowerCase();

      // Case-insensitive circuit-breaker detection (P5 / R2)
      const isSecurityOrRateLimit =
        lowerError.includes('checkpoint') ||
        lowerError.includes('challenge') ||
        lowerError.includes('429') ||
        lowerError.includes('rate limit') ||
        lowerError.includes('too many requests') ||
        lowerError.includes('econnreset');

      if (isSecurityOrRateLimit) {
        this.circuitCooldownUntil = Date.now() + this.circuitCooldownMs;
        // Reschedule with 30m backoff instead of immediate retry loop (fixes R2)
        this.db.rescheduleJob(job.id, this.circuitCooldownMs, rawErrorMsg);
        this.pause();
        this.emit('circuit_breaker:tripped', {
          job,
          error: rawErrorMsg,
          cooldownMs: this.circuitCooldownMs,
        });
        return this.db.getJob(job.id);
      }

      // Standard error retry vs failure
      const nextStatus: QueueJobStatus = job.attempts >= job.maxAttempts ? 'failed' : 'waiting';
      this.db.updateJobStatus(job.id, nextStatus, undefined, rawErrorMsg);

      const failedJob = this.db.getJob(job.id);
      if (failedJob) {
        this.emit('job:failed', failedJob, rawErrorMsg);
      }
      return failedJob;
    }
  }

  /**
   * Interruptible sleep that resolves immediately on pause() or stop() (fixes R3)
   */
  private async interruptibleSleep(ms: number): Promise<void> {
    if (ms <= 0) return;
    this.sleepAbortController = new AbortController();
    const { signal } = this.sleepAbortController;

    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve();
      }, ms);

      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        resolve();
      });
    });
  }

  /**
   * Starts sequential worker processing with anti-detection jitter
   */
  async start(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.shouldStop = false;
    this.isPaused = false;

    this.emit('worker:started');

    while (!this.shouldStop && !this.isPaused) {
      const processedJob = await this.processNext();
      if (!processedJob) {
        // Only emit 'drained' if NOT paused and no waiting jobs remain (fixes P4)
        if (!this.isPaused && !this.db.getNextWaitingJob()) {
          this.emit('drained');
        }
        break;
      }

      if (this.shouldStop || this.isPaused) {
        break;
      }

      // Anti-detection jitter delay between jobs
      const delay =
        Math.floor(Math.random() * (this.maxDelayMs - this.minDelayMs + 1)) +
        this.minDelayMs;
      await this.interruptibleSleep(delay);
    }

    this.isProcessing = false;
    this.emit('worker:stopped');
  }

  /**
   * Pauses queue execution immediately interrupting any active jitter sleep (fixes R3)
   */
  pause(): void {
    this.isPaused = true;
    if (this.sleepAbortController) {
      this.sleepAbortController.abort();
      this.sleepAbortController = null;
    }
    this.emit('paused');
  }

  /**
   * Resumes queue execution
   */
  resume(): void {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.circuitCooldownUntil = 0; // manual resume clears circuit lock
    this.emit('resumed');
    if (!this.isProcessing) {
      void this.start();
    }
  }

  /**
   * Signals the worker to finish the current job and stop immediately
   */
  stop(): void {
    this.shouldStop = true;
    if (this.sleepAbortController) {
      this.sleepAbortController.abort();
      this.sleepAbortController = null;
    }
  }

  /**
   * Returns queue statistics without mutating DB response (fixes P7)
   */
  getStats(): QueueStatusSummary {
    const dbStats = this.db.getQueueStats();
    return {
      ...dbStats,
      isPaused: this.isPaused,
    };
  }

  /**
   * Lists queue jobs with optional status filter
   */
  listJobs(status?: string, limit = 50): ScrapingJob[] {
    return this.db.listQueueJobs(status, limit);
  }

  /**
   * Retries all failed jobs
   */
  retryFailed(): number {
    return this.db.retryFailedJobs();
  }

  /**
   * Clears all completed jobs
   */
  clearCompleted(): number {
    return this.db.clearCompletedJobs();
  }
}
