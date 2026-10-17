import { describe, expect, test, beforeEach, afterEach } from 'bun:test';
import { ScoutDatabase } from '../src/db.ts';
import { BunQueue } from '../src/bun-queue.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';
import { unlinkSync } from 'node:fs';

const TEST_DB = 'test-queue.sqlite';

describe('BunQueue Architecture Tests', () => {
  let db: ScoutDatabase;
  let queue: BunQueue;

  beforeEach(() => {
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
    db = new ScoutDatabase(TEST_DB);
    db.seedTargets(TARGET_DOSSIERS);
    queue = new BunQueue(db, {
      minDelayMs: 10,
      maxDelayMs: 20,
    });
  });

  afterEach(() => {
    db.close();
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
  });

  test('enqueues a profiling job with SQLite persistence', async () => {
    const job = await queue.add('browserbase', 'profile_deep_dive', { custom: true });
    expect(job).toBeDefined();
    expect(job.id).toContain('job_');
    expect(job.targetId).toBe('browserbase');
    expect(job.status).toBe('waiting');

    const stats = queue.getStats();
    expect(stats.total).toBe(1);
    expect(stats.pending).toBe(1);
  });

  test('processes a job sequentially and stores deep profile', async () => {
    await queue.add('steel', 'profile_deep_dive');
    const processed = await queue.processNext();
    expect(processed).toBeDefined();
    expect(processed?.status).toBe('completed');
    expect(processed?.result?.success).toBe(true);

    const profile = db.getDeepProfile('steel');
    expect(profile).toBeDefined();
    expect(profile?.business.model).toContain('browser API');
    expect(profile?.blogs.length).toBeGreaterThan(0);
    expect(profile?.projects.length).toBeGreaterThan(0);
    expect(profile?.tastes.architecturalBiases.length).toBeGreaterThan(0);
  });

  test('bulk enqueues all 12 targets and drains queue', async () => {
    const targets = ['craver', 'hazlnut', 'itsacheckmate', 'chowly'];
    await queue.addBulk(targets);

    let drained = false;
    queue.on('drained', () => {
      drained = true;
    });

    await queue.start();
    expect(drained).toBe(true);

    const stats = queue.getStats();
    expect(stats.completed).toBe(4);
    expect(stats.pending).toBe(0);
  });

  test('pauses and resumes queue processing', async () => {
    await queue.add('browserless');
    queue.pause();
    expect(queue.getStats().isPaused).toBe(true);

    const processed = await queue.processNext();
    expect(processed).toBeNull();

    queue.resume();
    expect(queue.getStats().isPaused).toBe(false);
  });

  test('handles unknown target error gracefully with retry backoff', async () => {
    await queue.add('non-existent-company');
    const processed = await queue.processNext();
    expect(processed?.status).toBe('waiting');
    expect(processed?.attempts).toBe(1);
    expect(processed?.error).toContain('No profiling data configured');
  });
});
