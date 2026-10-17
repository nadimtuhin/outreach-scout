import { join } from 'node:path';
import { ScoutDatabase } from './db.ts';

async function syncRemote(): Promise<void> {
  const dbPath = join(import.meta.dir, '..', 'scout.sqlite');
  const scratchpadDir = '/Users/nadimtuhin/opensource/scratchpad';
  const remoteOutreachDir = join(scratchpadDir, 'outreach');
  const remoteDataFile = join(remoteOutreachDir, 'data.json');

  console.log('[Sync] Reading local SQLite database...');
  const db = new ScoutDatabase(dbPath);
  const rows = db.getAllTargets();
  db.close();

  console.log(`[Sync] Loaded ${rows.length} targets. Formatting remote payload...`);

  const payload = {
    updatedAt: new Date().toISOString(),
    targets: rows.map((r) => {
      const match = JSON.parse(r.match_analysis || '{}') as {
        score?: number;
        strongMatches?: string[];
        gapsOrBridges?: string[];
      };
      const employees = JSON.parse(r.key_employees || '[]') as Array<{
        name: string;
        role: string;
        linkedInUrl: string;
        notes?: string;
      }>;
      const platforms = JSON.parse(r.platform_ecosystem || '[]') as string[];
      const stack = JSON.parse(r.tech_stack || '[]') as string[];

      return {
        id: r.id,
        name: r.name,
        vertical: r.vertical,
        website: r.website,
        careersUrl: r.careers_url,
        headquarters: r.headquarters,
        estimatedEmployees: r.estimated_employees,
        fundingStage: r.funding_stage,
        status: r.status,
        platformEcosystem: platforms,
        techStack: stack,
        primaryContactName: r.leader_name,
        coldOutreachDraft: r.draft_markdown,
        wordCount: r.word_count,
        matchAnalysis: match,
        keyEmployees: employees,
      };
    }),
  };

  await Bun.write(remoteDataFile, JSON.stringify(payload, null, 2));
  console.log(`[Sync] Written updated data to ${remoteDataFile}`);

  console.log('[Cloudflare] Deploying to Cloudflare Pages (scratchpad)...');
  const deployProc = Bun.spawn(
    [
      'npx',
      'wrangler',
      'pages',
      'deploy',
      scratchpadDir,
      '--project-name=scratchpad',
      '--branch=main',
      '--commit-dirty=true',
    ],
    {
      stdout: 'inherit',
      stderr: 'inherit',
    }
  );

  const exitCode = await deployProc.exited;
  if (exitCode !== 0) {
    console.error(`[Cloudflare] Deployment failed with exit code ${exitCode}`);
    process.exit(exitCode);
  }

  console.log('\n[Cloudflare] Deployment SUCCESS!');
  console.log('Live Remote Dashboard URLs:');
  console.log('  https://pad.nadimtuhin.com/outreach/');
  console.log('  https://scratchpad-8wa.pages.dev/outreach/\n');
}

void syncRemote();
