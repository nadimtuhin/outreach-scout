import { Database } from 'bun:sqlite';
import type { CompanyDeepProfile, QueueJobStatus, QueueStatusSummary, ScrapingJob, TargetDossier } from './types.ts';

export interface StoredTargetRow {
  id: string;
  name: string;
  vertical: string;
  website: string;
  careers_url: string;
  headquarters: string;
  estimated_employees: string;
  funding_stage: string;
  status: string;
  leader_name: string;
  draft_markdown: string;
  word_count: number;
  platform_ecosystem: string;
  tech_stack: string;
  match_analysis: string;
  key_employees: string;
  contacts: string;
  deep_profile?: string;
  leadership?: string;
  architecture?: string;
}

export class ScoutDatabase {
  private db: Database;

  constructor(dbPath = 'scout.sqlite') {
    this.db = new Database(dbPath);
    this.initSchema();
  }

  private initSchema(): void {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS targets (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        vertical TEXT NOT NULL,
        website TEXT NOT NULL,
        careers_url TEXT NOT NULL DEFAULT '',
        platform_ecosystem TEXT NOT NULL,
        headquarters TEXT NOT NULL,
        estimated_employees TEXT NOT NULL,
        funding_stage TEXT NOT NULL,
        tech_stack TEXT NOT NULL,
        match_analysis TEXT NOT NULL DEFAULT '{}',
        key_employees TEXT NOT NULL DEFAULT '[]',
        contacts TEXT NOT NULL DEFAULT '[]',
        status TEXT NOT NULL DEFAULT 'drafted',
        created_at TEXT NOT NULL
      );
    `);

    // Migration in case table exists without new columns
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN careers_url TEXT NOT NULL DEFAULT ''");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN match_analysis TEXT NOT NULL DEFAULT '{}'");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN key_employees TEXT NOT NULL DEFAULT '[]'");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN contacts TEXT NOT NULL DEFAULT '[]'");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN deep_profile TEXT NOT NULL DEFAULT '{}'");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN leadership TEXT NOT NULL DEFAULT '[]'");
    } catch {
      // Column may already exist
    }
    try {
      this.db.run("ALTER TABLE targets ADD COLUMN architecture TEXT NOT NULL DEFAULT '{}'");
    } catch {
      // Column may already exist
    }

    this.db.run(`
      CREATE TABLE IF NOT EXISTS bun_queue_jobs (
        id TEXT PRIMARY KEY,
        target_id TEXT NOT NULL,
        task_type TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'waiting',
        priority INTEGER NOT NULL DEFAULT 0,
        attempts INTEGER NOT NULL DEFAULT 0,
        max_attempts INTEGER NOT NULL DEFAULT 3,
        payload TEXT NOT NULL DEFAULT '{}',
        result TEXT,
        error TEXT,
        scheduled_for TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS leadership (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        target_id TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        linkedin_url TEXT NOT NULL,
        technical_background TEXT NOT NULL,
        core_biases TEXT NOT NULL,
        FOREIGN KEY (target_id) REFERENCES targets (id)
      );
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS architecture (
        target_id TEXT PRIMARY KEY,
        core_workflow TEXT NOT NULL,
        critical_failure_modes TEXT NOT NULL,
        candidate_proof_repo TEXT NOT NULL,
        candidate_experience_bridge TEXT NOT NULL,
        FOREIGN KEY (target_id) REFERENCES targets (id)
      );
    `);

    this.db.run(`
      CREATE TABLE IF NOT EXISTS outreach (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        target_id TEXT NOT NULL,
        leader_name TEXT NOT NULL,
        draft_markdown TEXT NOT NULL,
        word_count INTEGER NOT NULL,
        status TEXT NOT NULL DEFAULT 'ready_to_send',
        notes TEXT,
        FOREIGN KEY (target_id) REFERENCES targets (id)
      );
    `);
  }

  seedTargets(dossiers: TargetDossier[]): void {
    const insertTarget = this.db.prepare(`
      INSERT OR REPLACE INTO targets (
        id, name, vertical, website, careers_url, platform_ecosystem,
        headquarters, estimated_employees, funding_stage, tech_stack,
        match_analysis, key_employees, contacts, deep_profile,
        leadership, architecture, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertLeadership = this.db.prepare(`
      INSERT INTO leadership (
        target_id, name, role, linkedin_url, technical_background, core_biases
      ) VALUES (?, ?, ?, ?, ?, ?)
    `);

    const insertArch = this.db.prepare(`
      INSERT OR REPLACE INTO architecture (
        target_id, core_workflow, critical_failure_modes,
        candidate_proof_repo, candidate_experience_bridge
      ) VALUES (?, ?, ?, ?, ?)
    `);

    const insertOutreach = this.db.prepare(`
      INSERT INTO outreach (
        target_id, leader_name, draft_markdown, word_count, status
      ) VALUES (?, ?, ?, ?, ?)
    `);

    const transaction = this.db.transaction((items: TargetDossier[]) => {
      for (const item of items) {
        insertTarget.run(
          item.metadata.id,
          item.metadata.name,
          item.metadata.vertical,
          item.metadata.website,
          item.metadata.careersUrl,
          JSON.stringify(item.metadata.platformEcosystem),
          item.metadata.headquarters,
          item.metadata.estimatedEmployees,
          item.metadata.fundingStage,
          JSON.stringify(item.metadata.techStack),
          JSON.stringify(item.matchAnalysis),
          JSON.stringify(item.keyEmployees),
          JSON.stringify(item.contacts),
          item.deepProfile ? JSON.stringify(item.deepProfile) : '{}',
          JSON.stringify(item.leadership || []),
          JSON.stringify(item.architecture || {}),
          new Date().toISOString()
        );

        this.db.run('DELETE FROM leadership WHERE target_id = ?', [item.metadata.id]);
        for (const leader of item.leadership) {
          insertLeadership.run(
            item.metadata.id,
            leader.name,
            leader.role,
            leader.linkedInUrl,
            leader.technicalBackground,
            JSON.stringify(leader.coreBiases)
          );
        }

        insertArch.run(
          item.metadata.id,
          item.architecture.coreWorkflow,
          JSON.stringify(item.architecture.criticalFailureModes),
          item.architecture.candidateMatchingProofRepo,
          item.architecture.candidateExperienceBridge
        );

        this.db.run('DELETE FROM outreach WHERE target_id = ?', [item.metadata.id]);
        const primaryLeader = item.leadership[0]?.name ?? 'Founder';
        const words = item.coldOutreachDraft.trim().split(/\s+/).length;
        insertOutreach.run(
          item.metadata.id,
          primaryLeader,
          item.coldOutreachDraft,
          words,
          'ready_to_send'
        );
      }
    });

    transaction(dossiers);
  }

  getAllTargets(): StoredTargetRow[] {
    return this.db
      .prepare(`
        SELECT 
          t.id, t.name, t.vertical, t.website, t.careers_url, t.headquarters,
          t.estimated_employees, t.funding_stage, t.status,
          t.platform_ecosystem, t.tech_stack, t.match_analysis, t.key_employees, t.contacts,
          t.deep_profile, t.leadership, t.architecture,
          o.leader_name, o.draft_markdown, o.word_count
        FROM targets t
        LEFT JOIN outreach o ON t.id = o.target_id
        ORDER BY t.vertical ASC, t.name ASC
      `)
      .all() as StoredTargetRow[];
  }

  updateStatus(targetId: string, status: string): void {
    this.db.run('UPDATE targets SET status = ? WHERE id = ?', [status, targetId]);
    this.db.run('UPDATE outreach SET status = ? WHERE target_id = ?', [status, targetId]);
  }

  updateDeepProfile(targetId: string, deepProfile: CompanyDeepProfile): void {
    this.db.run('UPDATE targets SET deep_profile = ? WHERE id = ?', [
      JSON.stringify(deepProfile),
      targetId,
    ]);
  }

  getDeepProfile(targetId: string): CompanyDeepProfile | null {
    const row = this.db
      .prepare('SELECT deep_profile FROM targets WHERE id = ?')
      .get(targetId) as { deep_profile?: string } | null;
    if (!row || !row.deep_profile || row.deep_profile === '{}') {
      return null;
    }
    try {
      return JSON.parse(row.deep_profile) as CompanyDeepProfile;
    } catch {
      return null;
    }
  }

  enqueueJob(job: ScrapingJob): void {
    this.db.run(
      `
      INSERT OR REPLACE INTO bun_queue_jobs (
        id, target_id, task_type, status, priority, attempts, max_attempts,
        payload, result, error, scheduled_for, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        job.id,
        job.targetId,
        job.taskType,
        job.status,
        job.priority,
        job.attempts,
        job.maxAttempts,
        JSON.stringify(job.payload ?? {}),
        job.result ? JSON.stringify(job.result) : null,
        job.error ?? null,
        job.scheduledFor,
        job.createdAt,
        job.updatedAt,
      ]
    );
  }

  enqueueJobsBatch(jobs: ScrapingJob[]): void {
    const insert = this.db.prepare(`
      INSERT OR REPLACE INTO bun_queue_jobs (
        id, target_id, task_type, status, priority, attempts, max_attempts,
        payload, result, error, scheduled_for, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const tx = this.db.transaction((batch: ScrapingJob[]) => {
      for (const job of batch) {
        insert.run(
          job.id,
          job.targetId,
          job.taskType,
          job.status,
          job.priority,
          job.attempts,
          job.maxAttempts,
          JSON.stringify(job.payload ?? {}),
          job.result ? JSON.stringify(job.result) : null,
          job.error ?? null,
          job.scheduledFor,
          job.createdAt,
          job.updatedAt
        );
      }
    });

    tx(jobs);
  }

  getJob(id: string): ScrapingJob | null {
    const row = this.db
      .prepare('SELECT * FROM bun_queue_jobs WHERE id = ?')
      .get(id) as Record<string, unknown> | null;
    if (!row) return null;
    return this.mapJobRow(row);
  }

  claimNextWaitingJob(): ScrapingJob | null {
    const now = new Date().toISOString();
    const row = this.db
      .prepare(`
        UPDATE bun_queue_jobs
        SET status = 'processing',
            attempts = attempts + 1,
            updated_at = ?
        WHERE id = (
          SELECT id FROM bun_queue_jobs
          WHERE status = 'waiting' AND scheduled_for <= ?
          ORDER BY priority DESC, created_at ASC
          LIMIT 1
        )
        RETURNING *
      `)
      .get(now, now) as Record<string, unknown> | null;
    if (!row) return null;
    return this.mapJobRow(row);
  }

  rescheduleJob(id: string, delayMs: number, errorMsg?: string): void {
    const now = new Date();
    const scheduledFor = new Date(now.getTime() + delayMs).toISOString();
    this.db.run(
      `
      UPDATE bun_queue_jobs
      SET status = 'waiting',
          scheduled_for = ?,
          error = ?,
          updated_at = ?
      WHERE id = ?
    `,
      [scheduledFor, errorMsg ?? null, now.toISOString(), id]
    );
  }

  getNextWaitingJob(): ScrapingJob | null {
    const now = new Date().toISOString();
    const row = this.db
      .prepare(`
        SELECT * FROM bun_queue_jobs
        WHERE status = 'waiting' AND scheduled_for <= ?
        ORDER BY priority DESC, created_at ASC
        LIMIT 1
      `)
      .get(now) as Record<string, unknown> | null;
    if (!row) return null;
    return this.mapJobRow(row);
  }

  updateJobStatus(
    id: string,
    status: QueueJobStatus,
    result?: Record<string, unknown>,
    error?: string
  ): void {
    const now = new Date().toISOString();
    this.db.run(
      `
      UPDATE bun_queue_jobs
      SET status = ?, result = ?, error = ?, updated_at = ?
      WHERE id = ?
    `,
      [
        status,
        result ? JSON.stringify(result) : null,
        error ?? null,
        now,
        id,
      ]
    );
  }

  incrementJobAttempts(id: string): void {
    this.db.run('UPDATE bun_queue_jobs SET attempts = attempts + 1, updated_at = ? WHERE id = ?', [
      new Date().toISOString(),
      id,
    ]);
  }

  getQueueStats(): QueueStatusSummary {
    const rows = this.db
      .prepare('SELECT status, COUNT(*) as count FROM bun_queue_jobs GROUP BY status')
      .all() as Array<{ status: string; count: number }>;

    let waiting = 0;
    let processing = 0;
    let completed = 0;
    let failed = 0;

    for (const r of rows) {
      if (r.status === 'waiting') waiting = r.count;
      else if (r.status === 'processing') processing = r.count;
      else if (r.status === 'completed') completed = r.count;
      else if (r.status === 'failed') failed = r.count;
    }

    const currentJobRow = this.db
      .prepare("SELECT * FROM bun_queue_jobs WHERE status = 'processing' LIMIT 1")
      .get() as Record<string, unknown> | null;

    return {
      total: waiting + processing + completed + failed,
      pending: waiting,
      processing,
      completed,
      failed,
      isPaused: false,
      currentJob: currentJobRow ? this.mapJobRow(currentJobRow) : undefined,
    };
  }

  listQueueJobs(status?: string, limit = 50): ScrapingJob[] {
    let rows: Array<Record<string, unknown>>;
    if (status) {
      rows = this.db
        .prepare('SELECT * FROM bun_queue_jobs WHERE status = ? ORDER BY created_at DESC LIMIT ?')
        .all(status, limit) as Array<Record<string, unknown>>;
    } else {
      rows = this.db
        .prepare('SELECT * FROM bun_queue_jobs ORDER BY created_at DESC LIMIT ?')
        .all(limit) as Array<Record<string, unknown>>;
    }
    return rows.map((r) => this.mapJobRow(r));
  }

  clearCompletedJobs(): number {
    const res = this.db.run("DELETE FROM bun_queue_jobs WHERE status = 'completed'");
    return res.changes;
  }

  retryFailedJobs(): number {
    const now = new Date().toISOString();
    const res = this.db.run(
      "UPDATE bun_queue_jobs SET status = 'waiting', attempts = 0, error = null, updated_at = ? WHERE status = 'failed'",
      [now]
    );
    return res.changes;
  }

  private mapJobRow(row: Record<string, unknown>): ScrapingJob {
    return {
      id: String(row.id),
      targetId: String(row.target_id),
      taskType: row.task_type as ScrapingJob['taskType'],
      status: row.status as QueueJobStatus,
      priority: Number(row.priority ?? 0),
      attempts: Number(row.attempts ?? 0),
      maxAttempts: Number(row.max_attempts ?? 3),
      payload: row.payload ? (JSON.parse(String(row.payload)) as Record<string, unknown>) : {},
      result: row.result ? (JSON.parse(String(row.result)) as Record<string, unknown>) : undefined,
      error: row.error ? String(row.error) : undefined,
      scheduledFor: String(row.scheduled_for),
      createdAt: String(row.created_at),
      updatedAt: String(row.updated_at),
    };
  }

  close(): void {
    this.db.close();
  }
}
