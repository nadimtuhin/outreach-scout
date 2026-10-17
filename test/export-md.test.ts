import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { exportMarkdownDocs } from '../src/export-md.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';

const TEST_DOCS_DIR = join(import.meta.dir, 'test-docs');

describe('Markdown Exporter Component Unit Tests', () => {
  test('exports structured markdown dossiers with all sections', () => {
    try {
      rmSync(TEST_DOCS_DIR, { recursive: true, force: true });
    } catch {
      // ignore
    }

    exportMarkdownDocs(TARGET_DOSSIERS, TEST_DOCS_DIR);

    expect(existsSync(TEST_DOCS_DIR)).toBe(true);

    const files = [
      'food-pos-integration.md',
      'healthcare-fhir-automation.md',
      'browser-automation-infrastructure.md',
    ];

    for (const file of files) {
      const fullPath = join(TEST_DOCS_DIR, file);
      expect(existsSync(fullPath)).toBe(true);
      const content = readFileSync(fullPath, 'utf8');
      expect(content).toContain('Match Diagnosis');
      expect(content).toContain('Leadership');
      expect(content).toContain('Ready-to-Send Cold Email');
    }

    // Cleanup
    rmSync(TEST_DOCS_DIR, { recursive: true, force: true });
  });
});
