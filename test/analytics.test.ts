import { describe, expect, test } from 'bun:test';
import {
  computePipelineStats,
  generateMailtoLink,
  searchPipeline,
} from '../src/analytics.ts';
import { ScoutDatabase, type StoredTargetRow } from '../src/db.ts';

function createMockRow(overrides: Partial<StoredTargetRow> = {}): StoredTargetRow {
  return {
    id: 'test-target',
    name: 'Test Company',
    vertical: 'food_pos_integration',
    website: 'https://test.example.com',
    careers_url: 'https://test.example.com/careers',
    headquarters: 'Remote',
    estimated_employees: '10-20',
    funding_stage: 'Seed',
    status: 'drafted',
    leader_name: 'Alice Founder',
    draft_markdown: 'Pitch text here',
    word_count: 50,
    platform_ecosystem: JSON.stringify(['Square', 'Toast']),
    tech_stack: JSON.stringify(['Node.js', 'TypeScript', 'PostgreSQL']),
    match_analysis: JSON.stringify({ score: 90 }),
    key_employees: JSON.stringify([]),
    contacts: JSON.stringify([
      {
        id: 'c1',
        name: 'Alice Founder',
        role: 'CEO',
        email: 'alice@test.example.com',
        linkedInUrl: 'https://linkedin.com/in/alice',
        angle: 'founder_ceo',
        tailoredPitch: 'Pitch 1',
        wordCount: 50,
      },
      {
        id: 'c2',
        name: 'Bob Builder',
        role: 'VP Eng',
        email: 'bob@test.example.com',
        linkedInUrl: 'https://linkedin.com/in/bob',
        angle: 'cto_eng',
        tailoredPitch: 'Pitch 2',
        wordCount: 60,
      },
      {
        id: 'c3',
        name: 'Carol Ops',
        role: 'Head of Product',
        email: 'carol@test.example.com',
        linkedInUrl: 'https://linkedin.com/in/carol',
        angle: 'product_ops',
        tailoredPitch: 'Pitch 3',
        wordCount: 55,
      },
    ]),
    ...overrides,
  };
}

describe('computePipelineStats', () => {
  test('returns zeros and empty records for empty rows array', () => {
    const stats = computePipelineStats([]);

    expect(stats.totalCompanies).toBe(0);
    expect(stats.totalContacts).toBe(0);
    expect(stats.contactsByAngle.founder_ceo).toBe(0);
    expect(stats.contactsByAngle.cto_eng).toBe(0);
    expect(stats.contactsByAngle.product_ops).toBe(0);
    expect(stats.averageMatchScore).toBe(0);
    expect(stats.statusBreakdown).toEqual({});
    expect(stats.platformDistribution).toEqual({});
  });

  test('accurately calculates metrics across multiple rows', () => {
    const row1 = createMockRow({
      id: 'target-1',
      name: 'Alpha Corp',
      status: 'drafted',
      match_analysis: JSON.stringify({ score: 90 }),
      platform_ecosystem: JSON.stringify(['Square', 'Toast']),
    });

    const row2 = createMockRow({
      id: 'target-2',
      name: 'Beta Corp',
      status: 'sent',
      match_analysis: JSON.stringify({ score: 80 }),
      platform_ecosystem: JSON.stringify(['Toast', 'Clover']),
      contacts: JSON.stringify([
        {
          id: 'b1',
          name: 'Dave Tech',
          role: 'CTO',
          email: 'dave@beta.com',
          angle: 'cto_eng',
        },
      ]),
    });

    const stats = computePipelineStats([row1, row2]);

    expect(stats.totalCompanies).toBe(2);
    expect(stats.totalContacts).toBe(4); // 3 from row1 + 1 from row2
    expect(stats.contactsByAngle.founder_ceo).toBe(1);
    expect(stats.contactsByAngle.cto_eng).toBe(2);
    expect(stats.contactsByAngle.product_ops).toBe(1);
    expect(stats.averageMatchScore).toBe(85);
    expect(stats.statusBreakdown).toEqual({
      drafted: 1,
      sent: 1,
    });
    expect(stats.platformDistribution).toEqual({
      Square: 1,
      Toast: 2,
      Clover: 1,
    });
  });

  test('handles malformed JSON and missing fields gracefully', () => {
    const row = createMockRow({
      match_analysis: 'not valid json',
      contacts: 'invalid contacts json',
      platform_ecosystem: 'invalid platform json',
      status: '',
    });

    const stats = computePipelineStats([row]);

    expect(stats.totalCompanies).toBe(1);
    expect(stats.totalContacts).toBe(0);
    expect(stats.averageMatchScore).toBe(0);
    expect(stats.statusBreakdown.unknown).toBe(1);
    expect(stats.contactsByAngle.founder_ceo).toBe(0);
  });
});

describe('generateMailtoLink', () => {
  test('generates valid mailto URL with subject and body', () => {
    const link = generateMailtoLink(
      'lead@company.com',
      'Quick Question',
      'Hi Lead, saw your work on POS integration.'
    );

    expect(link).toBe(
      'mailto:lead@company.com?subject=Quick%20Question&body=Hi%20Lead%2C%20saw%20your%20work%20on%20POS%20integration.'
    );
  });

  test('properly encodes special characters, newlines, and ampersands', () => {
    const link = generateMailtoLink(
      '   founder@domain.io  ',
      'Trial & Partnership? (100% risk-free)',
      'Line 1\nLine 2 & Line 3 = 100%'
    );

    expect(link.startsWith('mailto:founder@domain.io?')).toBe(true);
    expect(link).toContain('subject=Trial%20%26%20Partnership%3F%20(100%25%20risk-free)');
    expect(link).toContain('body=Line%201%0ALine%202%20%26%20Line%203%20%3D%20100%25');
  });

  test('handles empty subject or empty body', () => {
    const noBody = generateMailtoLink('user@test.com', 'Subject only', '');
    expect(noBody).toBe('mailto:user@test.com?subject=Subject%20only');

    const noSubject = generateMailtoLink('user@test.com', '', 'Body only');
    expect(noSubject).toBe('mailto:user@test.com?body=Body%20only');

    const emptyBoth = generateMailtoLink('user@test.com', '', '');
    expect(emptyBoth).toBe('mailto:user@test.com');
  });
});

describe('searchPipeline', () => {
  const rowA = createMockRow({
    id: 'craver',
    name: 'Craver',
    platform_ecosystem: JSON.stringify(['Square', 'Toast']),
    tech_stack: JSON.stringify(['Node.js', 'TypeScript', 'React Native']),
    leader_name: 'Amin Yazdani',
    contacts: JSON.stringify([
      {
        id: 'c1',
        name: 'Amin Yazdani',
        email: 'amin@craverapp.com',
        role: 'CEO',
      },
      {
        id: 'c2',
        name: 'Gavin Zhang',
        email: 'gavin@craverapp.com',
        role: 'Engineering Lead',
      },
    ]),
  });

  const rowB = createMockRow({
    id: 'anchor-browser',
    name: 'Anchor Browser',
    platform_ecosystem: JSON.stringify(['Chromium', 'CDP', 'Playwright']),
    tech_stack: JSON.stringify(['Go', 'Docker', 'C++']),
    leader_name: 'Oded Valin',
    contacts: JSON.stringify([
      {
        id: 'b1',
        name: 'Oded Valin',
        email: 'oded@anchorbrowser.io',
        role: 'CEO',
      },
    ]),
  });

  const rows = [rowA, rowB];

  test('searches by company name', () => {
    const result = searchPipeline(rows, 'craver');
    expect(result.length).toBe(1);
    expect(result[0]?.id).toBe('craver');
  });

  test('searches by tech stack', () => {
    const result = searchPipeline(rows, 'React Native');
    expect(result.length).toBe(1);
    expect(result[0]?.id).toBe('craver');

    const goResult = searchPipeline(rows, 'docker');
    expect(goResult.length).toBe(1);
    expect(goResult[0]?.id).toBe('anchor-browser');
  });

  test('searches by platform ecosystem', () => {
    const result = searchPipeline(rows, 'Playwright');
    expect(result.length).toBe(1);
    expect(result[0]?.id).toBe('anchor-browser');

    const toastResult = searchPipeline(rows, 'toast');
    expect(toastResult.length).toBe(1);
    expect(toastResult[0]?.id).toBe('craver');
  });

  test('searches by contact name', () => {
    const result = searchPipeline(rows, 'gavin');
    expect(result.length).toBe(1);
    expect(result[0]?.id).toBe('craver');

    const odedResult = searchPipeline(rows, 'Oded');
    expect(odedResult.length).toBe(1);
    expect(odedResult[0]?.id).toBe('anchor-browser');
  });

  test('searches by contact email', () => {
    const result = searchPipeline(rows, 'oded@anchorbrowser.io');
    expect(result.length).toBe(1);
    expect(result[0]?.id).toBe('anchor-browser');
  });

  test('returns all rows for empty or whitespace query', () => {
    expect(searchPipeline(rows, '').length).toBe(2);
    expect(searchPipeline(rows, '   ').length).toBe(2);
  });

  test('returns empty array when no matches found', () => {
    const result = searchPipeline(rows, 'nonexistent query 12345');
    expect(result.length).toBe(0);
  });
});

describe('Integration with scout.sqlite', () => {
  test('computes valid stats for actual pipeline data', () => {
    const db = new ScoutDatabase('scout.sqlite');
    const rows = db.getAllTargets();
    expect(rows.length).toBeGreaterThan(0);

    const stats = computePipelineStats(rows);
    expect(stats.totalCompanies).toBe(12);
    expect(stats.totalContacts).toBe(34);
    expect(stats.contactsByAngle.founder_ceo).toBe(12);
    expect(stats.contactsByAngle.cto_eng).toBe(15);
    expect(stats.contactsByAngle.product_ops).toBe(7);
    expect(stats.averageMatchScore).toBeGreaterThan(90);
    const totalStatuses = Object.values(stats.statusBreakdown).reduce((a, b) => a + b, 0);
    expect(totalStatuses).toBe(12);
    expect(stats.platformDistribution.Toast).toBe(4);

    const searchMatches = searchPipeline(rows, 'Playwright');
    expect(searchMatches.length).toBeGreaterThanOrEqual(1);

    db.close();
  });
});
