import { afterEach, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import type { StoredTargetRow } from '../src/db.ts';
import {
  buildContactsCSV,
  buildContactsJSON,
  CSV_HEADERS,
  escapeCsvField,
  exportContactsCSV,
  exportContactsJSON,
  formatCsvRow,
  parseCliArgs,
} from '../src/exporter.ts';

function parseRFC4180Csv(text: string): string[][] {
  const records: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (i + 1 < text.length && text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        } else {
          inQuotes = false;
          i++;
          continue;
        }
      } else {
        field += char;
        i++;
        continue;
      }
    }

    if (char === '"') {
      inQuotes = true;
      i++;
    } else if (char === ',') {
      row.push(field);
      field = '';
      i++;
    } else if (char === '\r') {
      if (i + 1 < text.length && text[i + 1] === '\n') {
        i++;
      }
      row.push(field);
      field = '';
      records.push(row);
      row = [];
      i++;
    } else if (char === '\n') {
      row.push(field);
      field = '';
      records.push(row);
      row = [];
      i++;
    } else {
      field += char;
      i++;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    records.push(row);
  }

  return records;
}

const cleanupFiles: string[] = [];

afterEach(() => {
  for (const file of cleanupFiles) {
    if (existsSync(file)) {
      try {
        unlinkSync(file);
      } catch {
        // ignore
      }
    }
  }
  cleanupFiles.length = 0;
});

describe('CSV escaping rules (escapeCsvField)', () => {
  test('returns plain text unquoted', () => {
    expect(escapeCsvField('hello')).toBe('hello');
    expect(escapeCsvField('12345')).toBe('12345');
    expect(escapeCsvField('https://example.com')).toBe('https://example.com');
  });

  test('quotes field with comma', () => {
    expect(escapeCsvField('New York, NY')).toBe('"New York, NY"');
  });

  test('quotes field and doubles internal double quotes', () => {
    expect(escapeCsvField('He said "hello"')).toBe('"He said ""hello"""');
    expect(escapeCsvField('"completely quoted"')).toBe('"""completely quoted"""');
  });

  test('quotes field with newlines', () => {
    expect(escapeCsvField('line 1\nline 2')).toBe('"line 1\nline 2"');
    expect(escapeCsvField('line 1\r\nline 2')).toBe('"line 1\r\nline 2"');
  });

  test('quotes field with leading or trailing whitespace', () => {
    expect(escapeCsvField(' space-start')).toBe('" space-start"');
    expect(escapeCsvField('space-end ')).toBe('"space-end "');
  });

  test('handles null, undefined, and empty string', () => {
    expect(escapeCsvField(null)).toBe('');
    expect(escapeCsvField(undefined)).toBe('');
    expect(escapeCsvField('')).toBe('');
  });

  test('handles numbers and booleans', () => {
    expect(escapeCsvField(96)).toBe('96');
    expect(escapeCsvField(0)).toBe('0');
    expect(escapeCsvField(true)).toBe('true');
  });

  test('handles complex combined quotes, commas, and newlines', () => {
    const raw = 'Pitch: "Hello, friend"\nLet\'s talk, zero risk.';
    const escaped = escapeCsvField(raw);
    expect(escaped).toBe('"Pitch: ""Hello, friend""\nLet\'s talk, zero risk."');

    // Round-trip verification
    const parsed = parseRFC4180Csv(escaped);
    expect(parsed).toEqual([[raw]]);
  });
});

describe('formatCsvRow', () => {
  test('formats array of values with proper delimiters and escapes', () => {
    const row = formatCsvRow(['Acme, Inc.', 'Tech', 'He said "deal"', 100]);
    expect(row).toBe('"Acme, Inc.",Tech,"He said ""deal""",100');
  });
});

describe('CSV Headers', () => {
  test('matches exact required header names and order', () => {
    const expected: readonly string[] = [
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
    ];
    expect<readonly string[]>(CSV_HEADERS).toEqual(expected);
  });
});

describe('exportContactsCSV from scout.sqlite', () => {
  test('exports valid RFC-4180 CSV with correct rows and columns', () => {
    const csv = exportContactsCSV();
    expect(typeof csv).toBe('string');
    expect(csv.length).toBeGreaterThan(0);

    const records = parseRFC4180Csv(csv.trim());

    // Header record
    const header = records[0];
    expect(header).toBeDefined();
    expect(header).toEqual([...CSV_HEADERS]);

    // Data rows
    expect(records.length).toBe(35); // 1 header + 34 contacts

    // Every record must have exactly 13 columns
    for (let i = 0; i < records.length; i++) {
      const rec = records[i];
      expect(rec?.length).toBe(13);
    }

    // Check specific contact
    const firstContactRow = records[1];
    expect(firstContactRow).toBeDefined();
    if (firstContactRow) {
      expect(firstContactRow[0]).toBe('Anchor Browser');
      expect(firstContactRow[1]).toBe('browser_automation_infrastructure');
      expect(firstContactRow[2]).toBe('https://anchorbrowser.io');
      expect(firstContactRow[3]).toBe('https://anchorbrowser.io/blog');
      expect(firstContactRow[4]).toContain('Seed ($6M raised');
      expect(firstContactRow[5]).toBe('96');
      expect(firstContactRow[6]).toBe('Idan Raman');
      expect(firstContactRow[7]).toBe('Co-Founder & CEO');
      expect(firstContactRow[8]).toBe('idan@anchorbrowser.io');
      expect(firstContactRow[9]).toBe('https://www.linkedin.com/in/idan-raman/');
      expect(firstContactRow[10]).toBe('founder_ceo');
      expect(firstContactRow[11]).toContain('Hi Idan');
      expect(firstContactRow[11]).toContain('\n'); // multi-line pitch preserved!
      expect(firstContactRow[12]).toBe('drafted');
    }
  });

  test('writes CSV to specified outputPath', () => {
    const tmpPath = join(import.meta.dir, 'test-contacts.csv');
    cleanupFiles.push(tmpPath);

    const returned = exportContactsCSV(tmpPath);
    expect(existsSync(tmpPath)).toBe(true);

    const onDisk = readFileSync(tmpPath, 'utf-8');
    expect(onDisk).toBe(returned);
    expect(onDisk).toContain('Anchor Browser');
  });
});

describe('exportContactsJSON from scout.sqlite', () => {
  test('generates clean nested JSON for CRM/Instantly/Lemlist import', () => {
    const jsonStr = exportContactsJSON();
    expect(typeof jsonStr).toBe('string');

    const data = JSON.parse(jsonStr) as Array<{
      id: string;
      company: string;
      vertical: string;
      website: string;
      careersUrl: string;
      fundingStage: string;
      score: number | null;
      status: string;
      platformEcosystem: string[];
      techStack: string[];
      contacts: Array<{
        id: string;
        name: string;
        role: string;
        email: string;
        linkedInUrl: string;
        angle: string;
        tailoredPitch: string;
        touch1Pitch: string;
        wordCount: number;
      }>;
    }>;

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(12);

    let totalContacts = 0;
    for (const target of data) {
      expect(typeof target.id).toBe('string');
      expect(typeof target.company).toBe('string');
      expect(typeof target.vertical).toBe('string');
      expect(typeof target.website).toBe('string');
      expect(Array.isArray(target.contacts)).toBe(true);
      expect(target.contacts.length).toBeGreaterThan(0);

      for (const contact of target.contacts) {
        expect(typeof contact.id).toBe('string');
        expect(typeof contact.name).toBe('string');
        expect(typeof contact.role).toBe('string');
        expect(typeof contact.email).toBe('string');
        expect(typeof contact.touch1Pitch).toBe('string');
        expect(contact.wordCount).toBeGreaterThan(0);
        totalContacts++;
      }
    }

    expect(totalContacts).toBe(34);
  });

  test('writes JSON to specified outputPath', () => {
    const tmpPath = join(import.meta.dir, 'test-contacts.json');
    cleanupFiles.push(tmpPath);

    const returned = exportContactsJSON(tmpPath);
    expect(existsSync(tmpPath)).toBe(true);

    const onDisk = readFileSync(tmpPath, 'utf-8');
    expect(onDisk).toBe(returned);
    expect(JSON.parse(onDisk)).toEqual(JSON.parse(returned));
  });
});

describe('Fallback behavior with mock targets', () => {
  const mockTargetWithoutContacts: StoredTargetRow = {
    id: 'mock_target',
    name: 'Mock Corp, Inc.',
    vertical: 'food_pos_integration',
    website: 'https://mock.example.com',
    careers_url: 'https://mock.example.com/jobs',
    headquarters: 'Austin, TX',
    estimated_employees: '1-10',
    funding_stage: 'Bootstrapped',
    status: 'drafted',
    leader_name: 'Jane Doe',
    draft_markdown: 'Pitch with "quotes" and, commas\nand newlines',
    word_count: 8,
    platform_ecosystem: '["Toast"]',
    tech_stack: '["TypeScript"]',
    match_analysis: '{"score":85}',
    key_employees: '[]',
    contacts: '[]',
  };

  test('buildContactsCSV falls back to leader_name and draft_markdown when contacts empty', () => {
    const csv = buildContactsCSV([mockTargetWithoutContacts]);
    const records = parseRFC4180Csv(csv.trim());

    expect(records.length).toBe(2); // 1 header + 1 row
    const row = records[1];
    expect(row).toBeDefined();
    if (row) {
      expect(row[0]).toBe('Mock Corp, Inc.');
      expect(row[5]).toBe('85');
      expect(row[6]).toBe('Jane Doe');
      expect(row[11]).toBe('Pitch with "quotes" and, commas\nand newlines');
    }
  });

  test('buildContactsJSON creates primary contact when contacts array is empty', () => {
    const data = buildContactsJSON([mockTargetWithoutContacts]);
    expect(data.length).toBe(1);
    const target = data[0];
    expect(target?.contacts.length).toBe(1);
    expect(target?.contacts[0]?.name).toBe('Jane Doe');
    expect(target?.contacts[0]?.touch1Pitch).toBe('Pitch with "quotes" and, commas\nand newlines');
  });
});

describe('CLI argument parsing and execution', () => {
  test('parseCliArgs correctly extracts options', () => {
    expect(parseCliArgs(['--format=csv'])).toEqual({ format: 'csv' });
    expect(parseCliArgs(['--format', 'json'])).toEqual({ format: 'json' });
    expect(parseCliArgs(['-f', 'all', '--output', 'my-out.csv'])).toEqual({
      format: 'all',
      output: 'my-out.csv',
    });
    expect(parseCliArgs(['--help'])).toEqual({ help: true });
  });

  test('parseCliArgs throws error on invalid format', () => {
    expect(() => parseCliArgs(['--format=xml'])).toThrow('Invalid format "xml"');
  });

  test('running CLI with --format=csv produces outreach-contacts.csv', async () => {
    const outCsv = join(process.cwd(), 'outreach-contacts.csv');
    cleanupFiles.push(outCsv);

    const proc = Bun.spawn(['bun', 'run', 'src/exporter.ts', '--format=csv'], {
      stdout: 'pipe',
      stderr: 'pipe',
      cwd: process.cwd(),
    });

    const [stdout, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      proc.exited,
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Exported CSV to outreach-contacts.csv');
    expect(existsSync(outCsv)).toBe(true);
  });

  test('running CLI with --format=json produces outreach-contacts.json', async () => {
    const outJson = join(process.cwd(), 'outreach-contacts.json');
    cleanupFiles.push(outJson);

    const proc = Bun.spawn(['bun', 'run', 'src/exporter.ts', '--format=json'], {
      stdout: 'pipe',
      stderr: 'pipe',
      cwd: process.cwd(),
    });

    const [stdout, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      proc.exited,
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Exported JSON to outreach-contacts.json');
    expect(existsSync(outJson)).toBe(true);

    const content = readFileSync(outJson, 'utf-8');
    const parsed = JSON.parse(content) as unknown[];
    expect(parsed.length).toBe(12);
  });
});
