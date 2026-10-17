import { join } from 'node:path';
import { ScoutDatabase } from './db.ts';
import { exportMarkdownDocs } from './export-md.ts';
import { OpenTabsClient } from './opentabs-client.ts';
import { startDashboard } from './server.ts';
import { TARGET_DOSSIERS } from './targets-data.ts';

async function main(): Promise<void> {
  const isServer = process.argv.includes('--serve');
  const dbPath = join(import.meta.dir, '..', 'scout.sqlite');
  const docsDir = join(import.meta.dir, '..', 'docs');

  console.log('--- Outreach Scout: High-Leverage Pipeline ---');
  console.log(`Targets: ${TARGET_DOSSIERS.length} across 3 verticals`);

  // 1. Try querying OpenTabs for active research tabs
  const opentabs = new OpenTabsClient();
  try {
    const tabs = await opentabs.listTabs();
    console.log(`[OpenTabs] Connected. Found ${tabs.length} open browser tabs in Chrome.`);
  } catch {
    console.log('[OpenTabs] Local server offline or busy. Proceeding with verified target data.');
  }

  // 2. Seed SQLite database
  console.log('[SQLite] Initializing database and writing target dossiers...');
  const db = new ScoutDatabase(dbPath);
  db.seedTargets(TARGET_DOSSIERS);
  const rows = db.getAllTargets();
  console.log(`[SQLite] Seeded ${rows.length} targets successfully.`);
  db.close();

  // 3. Export Markdown Documentation
  console.log('[Markdown] Exporting skimmable documentation...');
  exportMarkdownDocs(TARGET_DOSSIERS, docsDir);
  console.log(`[Markdown] Saved dossiers to ${docsDir}`);

  // 4. Start local dashboard if requested or default
  if (isServer) {
    startDashboard(3033, dbPath);
  } else {
    console.log('\nPipeline ready.');
    console.log('To view local dashboard with zero-auth copy tools:');
    console.log('  bun run src/index.ts --serve\n');
  }
}

void main();
