import { Database } from 'bun:sqlite';
import type { TargetDossier } from './types.ts';

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
        match_analysis, key_employees, contacts, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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

  close(): void {
    this.db.close();
  }
}
