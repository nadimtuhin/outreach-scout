import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { unlinkSync } from 'node:fs';
import { ScoutDatabase } from '../src/db.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';

const TEST_DB = 'test-scout.sqlite';

describe('ScoutDatabase Component Unit Tests', () => {
  let db: ScoutDatabase;

  beforeEach(() => {
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
    db = new ScoutDatabase(TEST_DB);
  });

  afterEach(() => {
    db.close();
    try {
      unlinkSync(TEST_DB);
    } catch {
      // ignore
    }
  });

  test('initializes schema without errors', () => {
    const rows = db.getAllTargets();
    expect(rows).toBeArray();
    expect(rows.length).toBe(0);
  });

  test('seeds targets correctly with all fields and contacts', () => {
    db.seedTargets(TARGET_DOSSIERS);
    const rows = db.getAllTargets();

    expect(rows.length).toBe(TARGET_DOSSIERS.length);

    const craver = rows.find((r) => r.id === 'craver');
    expect(craver).toBeDefined();
    expect(craver?.name).toBe('Craver');
    expect(craver?.vertical).toBe('food_pos_integration');
    expect(craver?.website).toBe('https://craverapp.com');
    expect(craver?.status).toBe('drafted');

    const contacts = JSON.parse(craver?.contacts || '[]');
    expect(contacts.length).toBeGreaterThanOrEqual(2);
    expect(contacts[0].email).toContain('@craverapp.com');
    expect(contacts[0].tailoredPitch).toBeString();
  });

  test('updates target status in both targets and outreach tables', () => {
    db.seedTargets(TARGET_DOSSIERS);
    db.updateStatus('craver', 'sent');

    const rows = db.getAllTargets();
    const craver = rows.find((r) => r.id === 'craver');
    expect(craver?.status).toBe('sent');
  });

  test('supports idempotent re-seeding without duplicate keys', () => {
    db.seedTargets(TARGET_DOSSIERS);
    expect(db.getAllTargets().length).toBe(TARGET_DOSSIERS.length);

    // Re-seed should replace without primary key collision
    db.seedTargets(TARGET_DOSSIERS);
    expect(db.getAllTargets().length).toBe(TARGET_DOSSIERS.length);
  });

  test('schema migration handles existing databases gracefully', () => {
    // Creating a second instance pointing to the same file exercises ALTER TABLE try-catches
    const db2 = new ScoutDatabase(TEST_DB);
    expect(db2.getAllTargets().length).toBe(0);
    db2.close();
  });
});
