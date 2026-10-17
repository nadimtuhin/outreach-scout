import { join } from 'node:path';
import {
  computePipelineStats,
  generateMailtoLink,
  searchPipeline,
} from './analytics.ts';
import { ScoutDatabase, type StoredTargetRow } from './db.ts';

const dbPath = join(import.meta.dir, '..', 'scout.sqlite');
const db = new ScoutDatabase(dbPath);

interface ContactData {
  id: string;
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: string;
  notes?: string;
  tailoredPitch: string;
  wordCount: number;
}

function formatRow(t: StoredTargetRow): string {
  const match = JSON.parse(t.match_analysis || '{}') as { score?: number };
  const score = match.score ? `${match.score}%` : 'N/A';
  const contacts = JSON.parse(t.contacts || '[]') as ContactData[];
  const contactsCount = contacts.length > 0 ? `${contacts.length} leads` : '1 lead';
  return `[${t.id.padEnd(14)}] ${t.name.padEnd(16)} | ${t.vertical.padEnd(34)} | Match: ${score.padEnd(4)} | ${contactsCount.padEnd(7)} | Status: ${t.status}`;
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
  console.log('  bun run cli stats                    View pipeline metrics & distribution');
  console.log('  bun run cli search <query>           Search by company, tech, platform, contact');
  console.log('  bun run cli show <id>                View profile, contacts, and pitches');
  console.log('  bun run cli copy <id> [contact]      Copy pitch for target or specific contact to clipboard');
  console.log('  bun run cli mailto <id> [contact]    Generate mailto link for contact outreach');
  console.log('  bun run cli status <id> <state>      Update status (drafted, sent, replied, declined)\n');
}

function handleStats(): void {
  const all = db.getAllTargets();
  const stats = computePipelineStats(all);

  console.log('\n=================== OUTREACH PIPELINE STATS ===================');
  console.log(`Total Companies:     ${stats.totalCompanies}`);
  console.log(`Total Contacts:      ${stats.totalContacts}`);
  console.log(`Average Match Score: ${stats.averageMatchScore}%\n`);

  console.log('--- CONTACTS BY ANGLE ---');
  console.log(`  Founder / CEO:     ${stats.contactsByAngle.founder_ceo}`);
  console.log(`  CTO / Engineering: ${stats.contactsByAngle.cto_eng}`);
  console.log(`  Product / Ops:     ${stats.contactsByAngle.product_ops}`);
  for (const [angle, count] of Object.entries(stats.contactsByAngle)) {
    if (!['founder_ceo', 'cto_eng', 'product_ops'].includes(angle)) {
      console.log(`  ${angle}: ${count}`);
    }
  }

  console.log('\n--- STATUS BREAKDOWN ---');
  for (const [st, count] of Object.entries(stats.statusBreakdown)) {
    console.log(`  ${st.padEnd(16)}: ${count}`);
  }

  console.log('\n--- TOP PLATFORM ECOSYSTEMS ---');
  const sortedPlatforms = Object.entries(stats.platformDistribution).toSorted((a, b) => b[1] - a[1]);
  for (const [plat, count] of sortedPlatforms) {
    console.log(`  ${plat.padEnd(30)}: ${count}`);
  }
  console.log('===============================================================\n');
}

function handleSearch(query: string): void {
  const all = db.getAllTargets();
  const matched = searchPipeline(all, query);

  console.log('\n=================== SEARCH RESULTS ===================');
  console.log(`Query: "${query}" (Found ${matched.length} matches)\n`);

  if (matched.length === 0) {
    console.log('No matching companies, tech stacks, platforms, or contacts found.\n');
    return;
  }

  for (const r of matched) {
    console.log(formatRow(r));
  }
  console.log('\nCommands:');
  console.log('  bun run cli show <id>                View profile, contacts, and pitches');
  console.log('  bun run cli mailto <id> [contact]    Generate mailto link for contact outreach');
  console.log('  bun run cli copy <id> [contact]      Copy pitch for target or specific contact to clipboard\n');
}

function handleMailto(targetId: string, contactArg?: string): void {
  const all = db.getAllTargets();
  const t = all.find((r) => r.id === targetId);

  if (!t) {
    console.error(`Target not found: ${targetId}`);
    process.exit(1);
  }

  const contacts = JSON.parse(t.contacts || '[]') as ContactData[];
  let targetContact: ContactData | undefined;

  if (contacts.length > 0) {
    if (contactArg) {
      const num = parseInt(contactArg, 10);
      if (!isNaN(num) && num >= 1 && num <= contacts.length) {
        targetContact = contacts[num - 1];
      } else {
        targetContact = contacts.find((c) => c.name.toLowerCase().includes(contactArg.toLowerCase()));
      }
    }
    if (!targetContact) {
      targetContact = contacts[0];
    }
  }

  const email = targetContact?.email;
  const contactName = targetContact?.name ?? t.leader_name;
  const body = targetContact?.tailoredPitch ?? t.draft_markdown;
  const subject = `Partnership / Engineering trial - ${t.name}`;

  if (!email) {
    console.error(`No email address available for ${contactName} at ${t.name}.`);
    process.exit(1);
  }

  const link = generateMailtoLink(email, subject, body);
  console.log('\n=================== MAILTO LINK ===================');
  console.log(`Recipient: ${contactName} <${email}>`);
  console.log(`Subject:   ${subject}`);
  console.log(`Link:\n${link}\n`);
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
  const contacts = JSON.parse(t.contacts || '[]') as ContactData[];
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

  console.log('\n--- TARGETED CONTACTS & PERSONA PITCHES ---');
  if (contacts.length === 0) {
    console.log(`Primary Contact: ${t.leader_name}`);
    console.log(`Pitch Draft (${t.word_count} words):\n${t.draft_markdown}\n`);
  } else {
    contacts.forEach((c, idx) => {
      console.log(`\n[${idx + 1}] ${c.name} (${c.role})`);
      console.log(`    Email:    ${c.email}`);
      console.log(`    LinkedIn: ${c.linkedInUrl}`);
      if (c.notes) console.log(`    Angle:    ${c.notes}`);
      if (c.email) {
        const mailto = generateMailtoLink(
          c.email,
          `Partnership / Engineering trial - ${t.name}`,
          c.tailoredPitch
        );
        console.log(`    Mailto:   ${mailto}`);
      }
      console.log(`    Pitch (${c.wordCount} words):\n`);
      console.log(
        c.tailoredPitch
          .split('\n')
          .map((line) => '      ' + line)
          .join('\n')
      );
    });
  }
  console.log('\n----------------------------------------------------------------');
  console.log(`Run 'bun run cli copy ${t.id} [contact-name-or-num]' to copy to clipboard`);
  console.log(`Run 'bun run cli mailto ${t.id} [contact-name-or-num]' to generate mailto link\n`);
}

async function handleCopy(targetId: string, contactArg?: string): Promise<void> {
  const all = db.getAllTargets();
  const t = all.find((r) => r.id === targetId);

  if (!t) {
    console.error(`Target not found: ${targetId}`);
    process.exit(1);
  }

  const contacts = JSON.parse(t.contacts || '[]') as ContactData[];
  let pitchToCopy = t.draft_markdown;
  let contactName = t.leader_name;

  if (contacts.length > 0) {
    if (contactArg) {
      const num = parseInt(contactArg, 10);
      let found: ContactData | undefined;
      if (!isNaN(num) && num >= 1 && num <= contacts.length) {
        found = contacts[num - 1];
      } else {
        found = contacts.find((c) => c.name.toLowerCase().includes(contactArg.toLowerCase()));
      }
      if (found) {
        pitchToCopy = found.tailoredPitch;
        contactName = `${found.name} (${found.role})`;
      } else {
        console.log(`Contact '${contactArg}' not matched, copying primary contact.`);
        const first = contacts[0];
        if (first) {
          pitchToCopy = first.tailoredPitch;
          contactName = `${first.name} (${first.role})`;
        }
      }
    } else {
      const first = contacts[0];
      if (first) {
        pitchToCopy = first.tailoredPitch;
        contactName = `${first.name} (${first.role})`;
      }
    }
  }

  const proc = Bun.spawn(['pbcopy'], { stdin: 'pipe' });
  proc.stdin.write(pitchToCopy);
  proc.stdin.flush();
  proc.stdin.end();
  await proc.exited;

  console.log(`\nCopied tailored pitch for ${contactName} at ${t.name} to clipboard.`);
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
    case 'stats': {
      handleStats();
      break;
    }
    case 'search': {
      if (!args[1]) {
        console.error('Usage: bun run cli search <query>');
        process.exit(1);
      }
      handleSearch(args.slice(1).join(' '));
      break;
    }
    case 'mailto': {
      if (!args[1]) {
        console.error('Usage: bun run cli mailto <target-id> [contact-name-or-num]');
        process.exit(1);
      }
      handleMailto(args[1], args[2]);
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
        console.error('Usage: bun run cli copy <target-id> [contact-name-or-num]');
        process.exit(1);
      }
      void handleCopy(args[1], args[2]);
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
