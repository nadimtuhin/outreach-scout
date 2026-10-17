/* eslint-disable no-await-in-loop */
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { unlinkSync } from 'node:fs';
import { ScoutDatabase } from '../src/db.ts';
import { startDashboard } from '../src/server.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';

const TEST_PORT = 3199;
const TEST_DB = 'test-server.sqlite';
const BASE_URL = `http://localhost:${TEST_PORT}`;

describe('Dashboard Server & API End-to-End Tests', () => {
  beforeAll(async () => {
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
    const db = new ScoutDatabase(TEST_DB);
    db.seedTargets(TARGET_DOSSIERS);
    db.close();

    startDashboard(TEST_PORT, TEST_DB);

    // Wait for server to bind
    let ready = false;
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch(`${BASE_URL}/api/targets`);
        if (res.ok) {
          ready = true;
          break;
        }
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    if (!ready) throw new Error('Test server failed to start');
  });

  afterAll(() => {
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
  });

  test('GET / serves HTML with Master-Detail Silicon Valley UI and Scrape button', async () => {
    const res = await fetch(`${BASE_URL}/`);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');

    const html = await res.text();
    expect(html).toContain('Outreach Scout');
    expect(html).toContain('master-pane');
    expect(html).toContain('detail-pane');
    expect(html).toContain('btn-scrape');
    expect(html).toContain('Plus Jakarta Sans');
  });

  test('GET /api/targets returns full target dossiers with contacts', async () => {
    const res = await fetch(`${BASE_URL}/api/targets`);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('application/json');

    const data = (await res.json()) as Array<{ id: string; name: string; contacts: string }>;
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(TARGET_DOSSIERS.length);

    const first = data[0]!;
    expect(first.id).toBeDefined();
    expect(first.name).toBeDefined();

    const contacts = JSON.parse(first.contacts || '[]');
    expect(Array.isArray(contacts)).toBe(true);
    expect(contacts.length).toBeGreaterThanOrEqual(1);
  });

  test('POST /api/status updates target status successfully', async () => {
    const res = await fetch(`${BASE_URL}/api/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'craver', status: 'sent' }),
    });

    expect(res.status).toBe(200);
    const data = (await res.json()) as { ok: boolean };
    expect(data.ok).toBe(true);

    // Verify change persisted
    const listRes = await fetch(`${BASE_URL}/api/targets`);
    const list = (await listRes.json()) as Array<{ id: string; status: string }>;
    const craver = list.find((t) => t.id === 'craver');
    expect(craver?.status).toBe('sent');
  });

  test('POST /api/status returns 400 on missing parameters', async () => {
    const res = await fetch(`${BASE_URL}/api/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'craver' }), // missing status
    });

    expect(res.status).toBe(400);
  });

  test('POST /api/scrape triggers local pipeline re-seed and returns count', async () => {
    const res = await fetch(`${BASE_URL}/api/scrape`, {
      method: 'POST',
    });

    expect(res.status).toBe(200);
    const data = (await res.json()) as { ok: boolean; count: number; timestamp: string };
    expect(data.ok).toBe(true);
    expect(data.count).toBe(TARGET_DOSSIERS.length);
    expect(data.timestamp).toBeDefined();
  });

  test('POST /api/linkedin/follow validates parameters and returns status', async () => {
    const badRes = await fetch(`${BASE_URL}/api/linkedin/follow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    expect(badRes.status).toBe(400);

    const res = await fetch(`${BASE_URL}/api/linkedin/follow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://www.linkedin.com/in/test-profile/' }),
    });
    expect(res.status).toBe(200);
    const data = (await res.json()) as { ok: boolean; status: string };
    expect(data).toBeDefined();
    expect(['followed', 'already_following', 'follow_button_not_found', 'offline', 'error']).toContain(data.status);
  }, 15000);

  test('OPTIONS preflight returns permissive CORS headers', async () => {
    const res = await fetch(`${BASE_URL}/api/linkedin/follow`, {
      method: 'OPTIONS',
    });
    expect(res.status).toBe(200);
    expect(res.headers.get('access-control-allow-origin')).toBe('*');
  });

  test('GET /unknown-route returns 404', async () => {
    const res = await fetch(`${BASE_URL}/non-existent`);
    expect(res.status).toBe(404);
  });

  test('GET /api/projects returns list of projects including default', async () => {
    const res = await fetch(`${BASE_URL}/api/projects`);
    expect(res.status).toBe(200);
    const data = (await res.json()) as Array<{ id: string; name: string }>;
    expect(Array.isArray(data)).toBe(true);
    expect(data.some((p) => p.id === 'default')).toBe(true);
  });

  test('POST /api/projects creates and deletes a custom project', async () => {
    const newProj = {
      id: 'e2e-test-proj',
      name: 'E2E Test Campaign',
      description: 'Temporary campaign for test suite',
      createdAt: new Date().toISOString(),
      profile: {
        name: 'Tester',
        senderName: 'Test',
        headline: 'QA Lead',
        email: 'test@example.com',
        calendlyUrl: 'https://calendly.com/test/30min',
        location: 'Remote',
        timezone: 'UTC',
        experienceYears: 5,
        coreSkills: ['Testing', 'Playwright'],
        proofRepos: [],
      },
      rules: {
        targetVerticals: ['developer_workflows_queues'],
        targetTitles: ['CTO'],
        minHalalScore: 80,
        minRemoteScore: 70,
        minApacScore: 70,
        wordCountLimit: 150,
        voiceRules: {
          noEmDashes: true,
          noNumberedLists: true,
          bareProofUrlsOnTop: true,
          tone: 'direct',
        },
      },
    };

    const createRes = await fetch(`${BASE_URL}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProj),
    });
    expect(createRes.status).toBe(200);

    const listRes = await fetch(`${BASE_URL}/api/projects`);
    const list = (await listRes.json()) as Array<{ id: string }>;
    expect(list.some((p) => p.id === 'e2e-test-proj')).toBe(true);

    const delRes = await fetch(`${BASE_URL}/api/projects/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'e2e-test-proj' }),
    });
    expect(delRes.status).toBe(200);
  });
});
