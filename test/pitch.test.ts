import { describe, expect, test } from 'bun:test';
import {
  countWords,
  generateColdOutreach,
  generateTailoredPitchForContact,
} from '../src/pitch-generator.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';

describe('Pitch Generator Component Unit Tests', () => {
  const sampleTarget = TARGET_DOSSIERS[0]!;

  test('countWords accurately counts non-empty whitespace separated words', () => {
    expect(countWords('hello world')).toBe(2);
    expect(countWords('  three   spaced   words  ')).toBe(3);
    expect(countWords('')).toBe(0);
  });

  test('generateColdOutreach complies with strict voice profile rules', () => {
    const pitch = generateColdOutreach({
      metadata: sampleTarget.metadata,
      leadership: sampleTarget.leadership[0]!,
      architecture: sampleTarget.architecture,
      hiring: sampleTarget.hiring,
    });

    const lines = pitch.split('\n');
    expect(lines[0]).toMatch(/^https?:\/\//); // Line 1: Bare proof URL
    expect(lines[1]).toContain('calendly.com/nadimtuhin/30min'); // Line 2: Bare Calendly URL

    // Length under 150 words
    const words = countWords(pitch);
    expect(words).toBeLessThan(150);
    expect(words).toBeGreaterThan(30);

    // No em dashes (\u2014) or en dashes (\u2013)
    expect(pitch).not.toContain('\u2014');
    expect(pitch).not.toContain('\u2013');

    // No numbered lists
    expect(/^\s*\d+[.)]\s+/m.test(pitch)).toBe(false);
  });

  test('generateTailoredPitchForContact generates role-distinct copy', () => {
    const ctoPitch = generateTailoredPitchForContact({
      metadata: sampleTarget.metadata,
      contact: { name: 'Gavin Zhang', role: 'CTO', angle: 'cto_eng' },
      architecture: sampleTarget.architecture,
      hiring: sampleTarget.hiring,
    });

    const founderPitch = generateTailoredPitchForContact({
      metadata: sampleTarget.metadata,
      contact: { name: 'Amin Yazdani', role: 'CEO', angle: 'founder_ceo' },
      architecture: sampleTarget.architecture,
      hiring: sampleTarget.hiring,
    });

    const productPitch = generateTailoredPitchForContact({
      metadata: sampleTarget.metadata,
      contact: { name: 'Shabnam Ahmadisagheb', role: 'CPO', angle: 'product_ops' },
      architecture: sampleTarget.architecture,
      hiring: sampleTarget.hiring,
    });

    // Pitches must be distinctly tailored
    expect(ctoPitch).not.toBe(founderPitch);
    expect(founderPitch).not.toBe(productPitch);

    // CTO pitch targets engineering failure modes
    expect(ctoPitch).toContain('engineering work');
    expect(ctoPitch).toContain('test suites');

    // Founder pitch targets backlog and revenue velocity
    expect(founderPitch).toContain('clears a backlog item');

    // Product pitch targets onboarding without support tickets
    expect(productPitch).toContain('product work');
    expect(productPitch).toContain('support tickets');

    // All must be under 150 words
    expect(countWords(ctoPitch)).toBeLessThan(150);
    expect(countWords(founderPitch)).toBeLessThan(150);
    expect(countWords(productPitch)).toBeLessThan(150);
  });

  test('every contact across all 12 targets adheres to word limits and formatting', () => {
    for (const target of TARGET_DOSSIERS) {
      for (const contact of target.contacts) {
        expect(contact.wordCount).toBeLessThan(150);
        expect(contact.wordCount).toBeGreaterThan(20);
        expect(contact.tailoredPitch).not.toContain('\u2014');
        expect(contact.tailoredPitch).not.toContain('\u2013');
        expect(/^\s*\d+[.)]\s+/m.test(contact.tailoredPitch)).toBe(false);
      }
    }
  });
});
