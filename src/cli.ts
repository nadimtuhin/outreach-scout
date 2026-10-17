import { join } from 'node:path';
import { ScoutDatabase, type StoredTargetRow } from './db.ts';

const dbPath = join(import.meta.dir, '..', 'scout.sqlite');
const db = new ScoutDatabase(dbPath);

function formatRow(t: StoredTargetRow): string {
  const match = JSON.parse(t.match_analysis || '{}') as { score?: number };
  const score = match.score ? `${match.score}%` : 'N/A';
  return `[${t.id.padEnd(14)}] ${t.name.padEnd(16)} | ${t.vertical.padEnd(34)} | Match: ${score.padEnd(4)} | Status: ${t.status.padEnd(8)} | Contact: ${t.leader_name}`;
}

function handleList(verticalFilter?: string): void {
  const all = db.getAllTargets();
  const rows = verticalFilter ? all.filter((r) => r.vertical.includes(verticalFilter)) : all;

  console.log('\n=================== OUTREACH SCOUT TARGET LEADS ===================');
  console.log(`Showing ${rows.length} targets (Database: scout.sqlite)\n`);

  for (const r of rows) {
    console.log(formatRow(r));
  }
  console.log('\nCommands:');
  console.log('  bun run cli show <id>         View full profile, match breakdown, and draft');
  console.log('  bun run cli copy <id>         Copy cold email draft to macOS clipboard');
  console.log('  bun run cli status <id> <st>  Update status (drafted, sent, replied, declined)\n');
}

function handleShow(targetId: string): void {
  const all = db.getAllTargets();
  const t = all.find((r) => r.id === targetId);

  if (!t) {
    console.error(`Target not found: ${targetId}`);
    process.exit(1);
  }

  const match = JSON.parse(t.match_analysis || '{}') as {
    score?: number;
    strongMatches?: string[];
    gapsOrBridges?: string[];
  };
  const employees = JSON.parse(t.key_employees || '[]') as Array<{
    name: string;
    role: string;
    linkedInUrl: string;
    notes?: string;
  }>;
  const platforms = (JSON.parse(t.platform_ecosystem || '[]') as string[]).join(', ');
  const stack = (JSON.parse(t.tech_stack || '[]') as string[]).join(', ');

  console.log('\n================================================================');
  console.log(`TARGET PROFILE: ${t.name.toUpperCase()} (${match.score ?? 0}% MATCH)`);
  console.log('================================================================');
  console.log(`Website:      ${t.website}`);
  if (t.careers_url) console.log(`Careers:      ${t.careers_url}`);
  console.log(`Headquarters: ${t.headquarters}`);
  console.log(`Team Size:    ${t.estimated_employees} employees`);
  console.log(`Funding:      ${t.funding_stage}`);
  console.log(`Platforms:    ${platforms}`);
  console.log(`Tech Stack:   ${stack}`);
  console.log(`Status:       ${t.status}`);

  console.log('\n--- MATCH BREAKDOWN ---');
  console.log('Strong Matches:');
  for (const s of match.strongMatches ?? []) {
    console.log(`  [+] ${s}`);
  }
  console.log('What Needs to Match / Bridge:');
  for (const g of match.gapsOrBridges ?? []) {
    console.log(`  [~] ${g}`);
  }

  console.log('\n--- KEY LEADS & PROFILES ---');
  console.log(`Primary Contact: ${t.leader_name}`);
  for (const emp of employees) {
    console.log(`  - ${emp.name} (${emp.role}) - ${emp.linkedInUrl}`);
    if (emp.notes) console.log(`    Note: ${emp.notes}`);
  }

  console.log('\n--- COLD EMAIL DRAFT (under 150 words) ---');
  console.log(t.draft_markdown);
  console.log('----------------------------------------------------------------');
  console.log(`Word count: ${t.word_count} words | Run 'bun run cli copy ${t.id}' to copy\n`);
}

async function handleCopy(targetId: string): Promise<void> {
  const all = db.getAllTargets();
  const t = all.find((r) => r.id === targetId);

  if (!t) {
    console.error(`Target not found: ${targetId}`);
    process.exit(1);
  }

  const proc = Bun.spawn(['pbcopy'], { stdin: 'pipe' });
  proc.stdin.write(t.draft_markdown);
  proc.stdin.flush();
  proc.stdin.end();
  await proc.exited;

  console.log(`\nCopied cold email draft for ${t.name} to clipboard.`);
  console.log(`Primary contact: ${t.leader_name}`);
  console.log(`Next step: paste into email or LinkedIn note, then run:`);
  console.log(`  bun run cli status ${t.id} sent\n`);
}

function handleStatus(targetId: string, newStatus: string): void {
  const all = db.getAllTargets();
  const t = all.find((r) => r.id === targetId);

  if (!t) {
    console.error(`Target not found: ${targetId}`);
    process.exit(1);
  }

  db.updateStatus(targetId, newStatus);
  console.log(`Updated status for ${t.name} to '${newStatus}'.`);
}

function main(): void {
  const args = process.argv.slice(2);
  const command = args[0] || 'list';

  switch (command) {
    case 'list': {
      handleList(args[1]);
      break;
    }
    case 'show': {
      if (!args[1]) {
        console.error('Usage: bun run cli show <target-id>');
        process.exit(1);
      }
      handleShow(args[1]);
      break;
    }
    case 'copy': {
      if (!args[1]) {
        console.error('Usage: bun run cli copy <target-id>');
        process.exit(1);
      }
      void handleCopy(args[1]);
      break;
    }
    case 'status': {
      if (!args[1] || !args[2]) {
        console.error('Usage: bun run cli status <target-id> <new-status>');
        process.exit(1);
      }
      handleStatus(args[1], args[2]);
      break;
    }
    default: {
      handleList();
      break;
    }
  }
}

main();
