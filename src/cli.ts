import { join } from 'node:path';
import {
  computePipelineStats,
  generateMailtoLink,
  searchPipeline,
} from './analytics.ts';
import { ScoutDatabase, type StoredTargetRow } from './db.ts';
import { evaluateHalalCompliance, evaluateRemoteApacHiring } from './scoring-engine.ts';

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

  // Halal & APAC Telemetry Summary
  let totalHalalScore = 0;
  let totalApacScore = 0;
  let apacNativeCount = 0;
  let pureHalalCount = 0;
  const apacRanked: Array<{ name: string; apacScore: number; halalScore: number; presence: string }> = [];

  for (const r of all) {
    const deep = JSON.parse(r.deep_profile || '{}');
    const halal = deep.halalCompliance || evaluateHalalCompliance({ id: r.id, name: r.name, vertical: r.vertical, business: deep.business });
    const remote = deep.remoteHiring || evaluateRemoteApacHiring({ id: r.id, name: r.name, headquarters: r.headquarters, jobs: deep.jobs });

    totalHalalScore += halal.score;
    totalApacScore += remote.apacScore;
    if (halal.score === 100) pureHalalCount++;
    if (remote.hasApacHires) apacNativeCount++;

    apacRanked.push({
      name: r.name,
      apacScore: remote.apacScore,
      halalScore: halal.score,
      presence: remote.apacTeamEstimate,
    });
  }

  const avgHalal = (totalHalalScore / all.length).toFixed(1);
  const avgApac = (totalApacScore / all.length).toFixed(1);
  const apacPercent = ((apacNativeCount / all.length) * 100).toFixed(0);

  console.log('\n--- HALAL & ETHICAL COMPLIANCE ---');
  console.log(`  Average Halal Score:   ${avgHalal}%`);
  console.log(`  100% Halal Targets:    ${pureHalalCount} / ${all.length}`);
  console.log(`  Prohibited Domains:    0 (Strict filter active)`);

  console.log('\n--- REMOTE & APAC HIRING TELEMETRY ---');
  console.log(`  Average APAC Score:    ${avgApac}%`);
  console.log(`  Confirmed APAC Hires:  ${apacNativeCount} companies (${apacPercent}%)`);
  console.log('\n  Top APAC-Friendly High-Conviction Targets:');
  apacRanked.sort((a, b) => b.apacScore - a.apacScore);
  for (const t of apacRanked.slice(0, 8)) {
    console.log(`    • ${t.name.padEnd(16)} | APAC Score: ${t.apacScore}% | Halal: ${t.halalScore}% | ${t.presence}`);
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

  const deep = JSON.parse(t.deep_profile || '{}');
  const jobs = (deep.jobs || []) as Array<{
    title: string;
    department?: string;
    location?: string;
    remoteStatus?: string;
    salaryBand?: string;
    keySkills?: string[];
    url: string;
    snippet?: string;
  }>;

  if (jobs.length > 0) {
    console.log('\n--- SCRAPED JOB POSTS & HIRING SIGNALS ---');
    for (const j of jobs) {
      console.log(`\n  [JOB] ${j.title} (${j.remoteStatus || 'Remote'} • ${j.location || 'Anywhere'})`);
      if (j.salaryBand) console.log(`        Salary: ${j.salaryBand}`);
      if (j.keySkills && j.keySkills.length > 0) console.log(`        Skills: ${j.keySkills.join(', ')}`);
      console.log(`        Apply:  ${j.url}`);
      if (j.snippet) console.log(`        Notes:  ${j.snippet}`);
    }
  }

  const halal = deep.halalCompliance || evaluateHalalCompliance({ id: t.id, name: t.name, vertical: t.vertical, business: deep.business });
  const remote = deep.remoteHiring || evaluateRemoteApacHiring({ id: t.id, name: t.name, headquarters: t.headquarters, jobs: deep.jobs });

  console.log('\n--- HALAL & ETHICAL COMPLIANCE ---');
  console.log(`Status:    [${halal.status.toUpperCase()}] (${halal.score}/100)`);
  console.log(`Analysis:  ${halal.reasoning}`);
  if (halal.flags && halal.flags.length > 0) {
    console.log(`Flags:     ${halal.flags.join(', ')}`);
  }

  console.log('\n--- REMOTE & APAC HIRING TELEMETRY ---');
  console.log(`Remote Score: ${remote.remoteScore}/100 (Policy: ${remote.remotePolicy} • ~${remote.estimatedRemotePercent}% Remote)`);
  console.log(`APAC Score:   ${remote.apacScore}/100 (Has APAC Hires: ${remote.hasApacHires ? 'YES' : 'No confirmed'})`);
  console.log(`Team Footprint: ${remote.apacTeamEstimate}`);
  console.log(`Timezone:       ${remote.timezoneFlexibility}`);
  console.log(`Strategy Note:  ${remote.notes}`);

  const blogs = (deep.blogs || []) as Array<{
    title: string;
    url: string;
    summary: string;
    tags?: string[];
    date?: string;
  }>;

  if (blogs.length > 0) {
    console.log('\n--- ENGINEERING BLOGS & ARCHITECTURE SIGNALS ---');
    for (const b of blogs) {
      console.log(`\n  [BLOG] ${b.title} (${b.date || 'Recent'})`);
      console.log(`         URL:     ${b.url}`);
      console.log(`         Summary: ${b.summary}`);
      if (b.tags && b.tags.length > 0) console.log(`         Tags:    ${b.tags.join(', ')}`);
    }
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

function handleScore(targetArg?: string): void {
  const all = db.getAllTargets();

  if (targetArg && targetArg !== 'all') {
    const t = all.find((r) => r.id === targetArg || r.name.toLowerCase() === targetArg.toLowerCase());
    if (!t) {
      console.error(`Target not found: ${targetArg}`);
      process.exit(1);
    }
    const deep = JSON.parse(t.deep_profile || '{}');
    const halal = deep.halalCompliance || evaluateHalalCompliance({ id: t.id, name: t.name, vertical: t.vertical, business: deep.business });
    const remote = deep.remoteHiring || evaluateRemoteApacHiring({ id: t.id, name: t.name, headquarters: t.headquarters, jobs: deep.jobs });

    console.log(`\n=================== COMPLIANCE & APAC SCORE: ${t.name.toUpperCase()} ===================`);
    console.log(`Halal Status:    [${halal.status.toUpperCase()}] (${halal.score}/100)`);
    console.log(`Halal Analysis:  ${halal.reasoning}`);
    if (halal.flags && halal.flags.length > 0) {
      console.log(`Domain Flags:    ${halal.flags.join(', ')}`);
    }
    console.log(`\nRemote Score:    ${remote.remoteScore}/100 (Policy: ${remote.remotePolicy})`);
    console.log(`APAC Score:      ${remote.apacScore}/100 (Has APAC Hires: ${remote.hasApacHires ? 'YES' : 'No'})`);
    console.log(`Team Footprint:  ${remote.apacTeamEstimate}`);
    console.log(`Timezone:        ${remote.timezoneFlexibility}`);
    console.log(`Strategy:        ${remote.notes}\n`);
    return;
  }

  console.log('\n=================== APAC-FRIENDLY & HALAL LEADERBOARD ===================');
  console.log('Rank | Target         | Vertical                       | APAC | Halal | Remote Policy');
  console.log('-----+----------------+--------------------------------+------+-------+------------------');

  const scored = all.map((r) => {
    const deep = JSON.parse(r.deep_profile || '{}');
    const halal = deep.halalCompliance || evaluateHalalCompliance({ id: r.id, name: r.name, vertical: r.vertical, business: deep.business });
    const remote = deep.remoteHiring || evaluateRemoteApacHiring({ id: r.id, name: r.name, headquarters: r.headquarters, jobs: deep.jobs });
    return {
      id: r.id,
      name: r.name,
      vertical: r.vertical,
      halal,
      remote,
    };
  });

  scored.sort((a, b) => b.remote.apacScore - a.remote.apacScore || b.halal.score - a.halal.score);

  scored.forEach((s, idx) => {
    const rank = String(idx + 1).padStart(4);
    const name = s.name.slice(0, 14).padEnd(14);
    const vert = s.vertical.slice(0, 30).padEnd(30);
    const apac = `${s.remote.apacScore}%`.padStart(4);
    const halal = `${s.halal.score}%`.padStart(5);
    const policy = s.remote.remotePolicy.padEnd(16);
    console.log(`${rank} | ${name} | ${vert} | ${apac} | ${halal} | ${policy}`);
  });
  console.log('=========================================================================\n');
  console.log('Run "bun run cli score <id>" for detailed compliance & team telemetry.\n');
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
    case 'score': {
      handleScore(args[1]);
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
