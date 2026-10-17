import { describe, expect, test } from 'bun:test';

describe('CLI End-to-End Tests', () => {
  test('bun run cli list outputs formatted targets list', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'list'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain('OUTREACH SCOUT TARGET LEADS');
    expect(stdout).toContain('craver');
    expect(stdout).toContain('metriport');
    expect(stdout).toContain('browserbase');
  });

  test('bun run cli show <id> outputs full company profile, match breakdown, and contacts', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'show', 'craver'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain('TARGET PROFILE: CRAVER');
    expect(stdout).toContain('MATCH BREAKDOWN');
    expect(stdout).toContain('Strong Matches:');
    expect(stdout).toContain('TARGETED CONTACTS & PERSONA PITCHES');
    expect(stdout).toContain('Amin Yazdani');
    expect(stdout).toContain('amin@craverapp.com');
  });

  test('bun run cli copy <id> [contact] executes pbcopy and confirms copy', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'copy', 'craver', '1'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Copied tailored pitch for Amin Yazdani');
  });

  test('bun run cli status <id> <state> updates status successfully', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'status', 'craver', 'replied'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain("Updated status for Craver to 'replied'");
  });

  test('bun run cli stats outputs pipeline metrics', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'stats'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain('OUTREACH PIPELINE STATS');
    expect(stdout).toMatch(/Total Companies:\s+\d+/);
    expect(stdout).toContain('Total Contacts:');
  });

  test('bun run cli search <term> filters matching companies and platforms', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/cli.ts', 'search', 'fhir'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const stdout = await new Response(proc.stdout).text();
    const exitCode = await proc.exited;

    expect(exitCode).toBe(0);
    expect(stdout).toContain('SEARCH RESULTS');
    expect(stdout).toContain('Metriport');
  });
});
