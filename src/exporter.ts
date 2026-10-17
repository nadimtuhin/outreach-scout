import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { ScoutDatabase, type StoredTargetRow } from './db.ts';

export const CSV_HEADERS = [
  'Company',
  'Vertical',
  'Website',
  'Careers',
  'Funding',
  'Score',
  'ContactName',
  'ContactRole',
  'ContactEmail',
  'LinkedIn',
  'Angle',
  'Touch1Pitch',
  'Status',
] as const;

export interface ExportContactItem {
  id: string;
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  linkedIn?: string;
  angle: string;
  notes?: string;
  tailoredPitch: string;
  touch1Pitch: string;
  wordCount: number;
}

export interface ExportTargetItem {
  id: string;
  company: string;
  vertical: string;
  website: string;
  careersUrl: string;
  careers: string;
  headquarters: string;
  estimatedEmployees: string;
  fundingStage: string;
  funding: string;
  score: number | null;
  status: string;
  platformEcosystem: string[];
  techStack: string[];
  matchAnalysis: {
    score?: number;
    strongMatches?: string[];
    gapsOrBridges?: string[];
  };
  contacts: ExportContactItem[];
}

export function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  const str = String(value);
  if (
    str.includes('"') ||
    str.includes(',') ||
    str.includes('\n') ||
    str.includes('\r') ||
    str.startsWith(' ') ||
    str.endsWith(' ')
  ) {
    return `"${str.replaceAll('"', '""')}"`;
  }
  return str;
}

export function formatCsvRow(fields: unknown[]): string {
  return fields.map((f) => escapeCsvField(f)).join(',');
}

function resolveDatabase(dbParam?: ScoutDatabase | string): { db: ScoutDatabase; shouldClose: boolean } {
  if (dbParam instanceof ScoutDatabase) {
    return { db: dbParam, shouldClose: false };
  }
  if (typeof dbParam === 'string') {
    return { db: new ScoutDatabase(dbParam), shouldClose: true };
  }
  const defaultPath = join(import.meta.dir, '..', 'scout.sqlite');
  return { db: new ScoutDatabase(defaultPath), shouldClose: true };
}

export function buildContactsCSV(dbOrTargets?: ScoutDatabase | StoredTargetRow[]): string {
  let targets: StoredTargetRow[];
  let shouldClose = false;
  let dbInstance: ScoutDatabase | null = null;

  if (Array.isArray(dbOrTargets)) {
    targets = dbOrTargets;
  } else {
    const resolved = resolveDatabase(dbOrTargets);
    dbInstance = resolved.db;
    shouldClose = resolved.shouldClose;
    targets = dbInstance.getAllTargets();
  }

  try {
    const rows: string[] = [CSV_HEADERS.join(',')];

    for (const t of targets) {
      let score = '';
      try {
        const match = JSON.parse(t.match_analysis || '{}') as { score?: number };
        if (typeof match.score === 'number') {
          score = String(match.score);
        }
      } catch {
        score = '';
      }

      let contacts: ExportContactItem[] = [];
      try {
        contacts = JSON.parse(t.contacts || '[]') as ExportContactItem[];
      } catch {
        contacts = [];
      }

      if (contacts.length === 0) {
        rows.push(
          formatCsvRow([
            t.name,
            t.vertical,
            t.website,
            t.careers_url,
            t.funding_stage,
            score,
            t.leader_name || '',
            '',
            '',
            '',
            '',
            t.draft_markdown || '',
            t.status,
          ])
        );
      } else {
        for (const c of contacts) {
          rows.push(
            formatCsvRow([
              t.name,
              t.vertical,
              t.website,
              t.careers_url,
              t.funding_stage,
              score,
              c.name || '',
              c.role || '',
              c.email || '',
              c.linkedInUrl || '',
              c.angle || '',
              c.tailoredPitch || '',
              t.status,
            ])
          );
        }
      }
    }

    return rows.join('\n') + '\n';
  } finally {
    if (shouldClose && dbInstance) {
      dbInstance.close();
    }
  }
}

export function exportContactsCSV(outputPath?: string, db?: ScoutDatabase | string): string {
  const resolved = resolveDatabase(db);
  try {
    const targets = resolved.db.getAllTargets();
    const csvContent = buildContactsCSV(targets);
    if (outputPath) {
      const dir = dirname(outputPath);
      if (dir && dir !== '.') {
        mkdirSync(dir, { recursive: true });
      }
      writeFileSync(outputPath, csvContent, 'utf-8');
    }
    return csvContent;
  } finally {
    if (resolved.shouldClose) {
      resolved.db.close();
    }
  }
}

export function buildContactsJSON(dbOrTargets?: ScoutDatabase | StoredTargetRow[]): ExportTargetItem[] {
  let targets: StoredTargetRow[];
  let shouldClose = false;
  let dbInstance: ScoutDatabase | null = null;

  if (Array.isArray(dbOrTargets)) {
    targets = dbOrTargets;
  } else {
    const resolved = resolveDatabase(dbOrTargets);
    dbInstance = resolved.db;
    shouldClose = resolved.shouldClose;
    targets = dbInstance.getAllTargets();
  }

  try {
    const result: ExportTargetItem[] = [];

    for (const t of targets) {
      let matchAnalysis: { score?: number; strongMatches?: string[]; gapsOrBridges?: string[] } = {};
      try {
        matchAnalysis = JSON.parse(t.match_analysis || '{}');
      } catch {
        matchAnalysis = {};
      }

      let platformEcosystem: string[] = [];
      try {
        platformEcosystem = JSON.parse(t.platform_ecosystem || '[]');
      } catch {
        platformEcosystem = [];
      }

      let techStack: string[] = [];
      try {
        techStack = JSON.parse(t.tech_stack || '[]');
      } catch {
        techStack = [];
      }

      let rawContacts: ExportContactItem[] = [];
      try {
        rawContacts = JSON.parse(t.contacts || '[]') as ExportContactItem[];
      } catch {
        rawContacts = [];
      }

      let contacts: ExportContactItem[] = [];
      if (rawContacts.length === 0 && t.leader_name) {
        contacts = [
          {
            id: `${t.id}-primary`,
            name: t.leader_name,
            role: 'Primary Contact',
            email: '',
            linkedInUrl: '',
            linkedIn: '',
            angle: 'founder_ceo',
            tailoredPitch: t.draft_markdown || '',
            touch1Pitch: t.draft_markdown || '',
            wordCount: t.word_count || 0,
          },
        ];
      } else {
        contacts = rawContacts.map((c) => ({
          id: c.id,
          name: c.name,
          role: c.role,
          email: c.email,
          linkedInUrl: c.linkedInUrl,
          linkedIn: c.linkedInUrl,
          angle: c.angle,
          notes: c.notes,
          tailoredPitch: c.tailoredPitch,
          touch1Pitch: c.tailoredPitch,
          wordCount: c.wordCount,
        }));
      }

      result.push({
        id: t.id,
        company: t.name,
        vertical: t.vertical,
        website: t.website,
        careersUrl: t.careers_url,
        careers: t.careers_url,
        headquarters: t.headquarters,
        estimatedEmployees: t.estimated_employees,
        fundingStage: t.funding_stage,
        funding: t.funding_stage,
        score: typeof matchAnalysis.score === 'number' ? matchAnalysis.score : null,
        status: t.status,
        platformEcosystem,
        techStack,
        matchAnalysis,
        contacts,
      });
    }

    return result;
  } finally {
    if (shouldClose && dbInstance) {
      dbInstance.close();
    }
  }
}

export function exportContactsJSON(outputPath?: string, db?: ScoutDatabase | string): string {
  const resolved = resolveDatabase(db);
  try {
    const targets = resolved.db.getAllTargets();
    const data = buildContactsJSON(targets);
    const jsonContent = JSON.stringify(data, null, 2) + '\n';
    if (outputPath) {
      const dir = dirname(outputPath);
      if (dir && dir !== '.') {
        mkdirSync(dir, { recursive: true });
      }
      writeFileSync(outputPath, jsonContent, 'utf-8');
    }
    return jsonContent;
  } finally {
    if (resolved.shouldClose) {
      resolved.db.close();
    }
  }
}

interface CliOptions {
  format?: 'csv' | 'json' | 'all';
  output?: string;
  dbPath?: string;
  help?: boolean;
}

export function parseCliArgs(args: string[]): CliOptions {
  const options: CliOptions = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg.startsWith('--format=')) {
      const val = arg.slice('--format='.length).toLowerCase();
      if (val === 'csv' || val === 'json' || val === 'all') {
        options.format = val;
      } else {
        throw new Error(`Invalid format "${val}". Must be "csv", "json", or "all".`);
      }
    } else if (arg === '--format' || arg === '-f') {
      const val = args[++i]?.toLowerCase();
      if (val === 'csv' || val === 'json' || val === 'all') {
        options.format = val;
      } else {
        throw new Error(`Invalid format "${val ?? ''}". Must be "csv", "json", or "all".`);
      }
    } else if (arg.startsWith('--output=')) {
      options.output = arg.slice('--output='.length);
    } else if (arg === '--output' || arg === '-o' || arg === '--out') {
      options.output = args[++i];
    } else if (arg.startsWith('--db=')) {
      options.dbPath = arg.slice('--db='.length);
    } else if (arg === '--db') {
      options.dbPath = args[++i];
    }
  }
  return options;
}

function printHelp(): void {
  console.log(`Outreach Scout Exporter

Usage:
  bun run src/exporter.ts --format=csv   Export contacts to outreach-contacts.csv
  bun run src/exporter.ts --format=json  Export contacts to outreach-contacts.json
  bun run src/exporter.ts [options]

Options:
  --format, -f <csv|json|all>   Export format (default: csv)
  --output, -o <file>           Custom output file path
  --db <path>                   Path to scout.sqlite database
  --help, -h                    Show help message`);
}

if (import.meta.main) {
  try {
    const options = parseCliArgs(process.argv.slice(2));
    if (options.help) {
      printHelp();
      process.exit(0);
    }

    const format = options.format ?? 'csv';
    if (format === 'csv') {
      const outPath = options.output ?? 'outreach-contacts.csv';
      exportContactsCSV(outPath, options.dbPath);
      console.log(`Exported CSV to ${outPath}`);
    } else if (format === 'json') {
      const outPath = options.output ?? 'outreach-contacts.json';
      exportContactsJSON(outPath, options.dbPath);
      console.log(`Exported JSON to ${outPath}`);
    } else if (format === 'all') {
      const csvOut = options.output ?? 'outreach-contacts.csv';
      const jsonOut = 'outreach-contacts.json';
      exportContactsCSV(csvOut, options.dbPath);
      exportContactsJSON(jsonOut, options.dbPath);
      console.log(`Exported CSV to ${csvOut}`);
      console.log(`Exported JSON to ${jsonOut}`);
    }
  } catch (err) {
    console.error((err as Error).message);
    process.exit(2);
  }
}
