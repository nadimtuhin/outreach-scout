import { describe, expect, test } from 'bun:test';
import {
  countWords,
  formatFailureMode,
  generateSequenceForContact,
  generateTouch1,
  generateTouch2,
  generateTouch3,
  sanitizeNadimVoice,
  validateSequence,
  type SequenceGeneratorParams,
} from '../src/sequence-generator.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';
import type { ContactLead } from '../src/types.ts';

const SAMPLE_TARGET = TARGET_DOSSIERS[0]!;

const SAMPLE_CTO_CONTACT: Pick<ContactLead, 'name' | 'role' | 'angle'> = {
  name: 'Gavin Zhang',
  role: 'Co-founder & Engineering Lead',
  angle: 'cto_eng',
};

const SAMPLE_PRODUCT_CONTACT: Pick<ContactLead, 'name' | 'role' | 'angle'> = {
  name: 'Shabnam Ahmadisagheb',
  role: 'Product Lead, POS Integrations',
  angle: 'product_ops',
};

const SAMPLE_FOUNDER_CONTACT: Pick<ContactLead, 'name' | 'role' | 'angle'> = {
  name: 'Amin Yazdani',
  role: 'CEO & Co-founder',
  angle: 'founder_ceo',
};

describe('sequence-generator', () => {
  describe('word count ceilings', () => {
    test('CTO angle complies with word count limits', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      expect(seq.wordCounts.touch1).toBeLessThan(150);
      expect(seq.wordCounts.touch2).toBeLessThan(80);
      expect(seq.wordCounts.touch3).toBeLessThan(50);
      expect(countWords(seq.touch1)).toBe(seq.wordCounts.touch1);
      expect(countWords(seq.touch2)).toBe(seq.wordCounts.touch2);
      expect(countWords(seq.touch3)).toBe(seq.wordCounts.touch3);
    });

    test('Product angle complies with word count limits', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_PRODUCT_CONTACT);
      expect(seq.wordCounts.touch1).toBeLessThan(150);
      expect(seq.wordCounts.touch2).toBeLessThan(80);
      expect(seq.wordCounts.touch3).toBeLessThan(50);
    });

    test('Founder/CEO angle complies with word count limits', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_FOUNDER_CONTACT);
      expect(seq.wordCounts.touch1).toBeLessThan(150);
      expect(seq.wordCounts.touch2).toBeLessThan(80);
      expect(seq.wordCounts.touch3).toBeLessThan(50);
    });
  });

  describe('Nadim voice rules', () => {
    test('has zero em dashes or en dashes across all touches', () => {
      const angles: Array<Pick<ContactLead, 'name' | 'role' | 'angle'>> = [
        SAMPLE_CTO_CONTACT,
        SAMPLE_PRODUCT_CONTACT,
        SAMPLE_FOUNDER_CONTACT,
      ];

      for (const contact of angles) {
        const seq = generateSequenceForContact(SAMPLE_TARGET, contact);
        const allText = `${seq.touch1}\n${seq.touch2}\n${seq.touch3}`;
        expect(allText).not.toContain('\u2014'); // em dash
        expect(allText).not.toContain('\u2013'); // en dash
      }
    });

    test('has zero numbered lists across all touches', () => {
      const angles: Array<Pick<ContactLead, 'name' | 'role' | 'angle'>> = [
        SAMPLE_CTO_CONTACT,
        SAMPLE_PRODUCT_CONTACT,
        SAMPLE_FOUNDER_CONTACT,
      ];

      const numberedListRegex = /^\s*\d+[.)]\s+/m;
      for (const contact of angles) {
        const seq = generateSequenceForContact(SAMPLE_TARGET, contact);
        expect(numberedListRegex.test(seq.touch1)).toBe(false);
        expect(numberedListRegex.test(seq.touch2)).toBe(false);
        expect(numberedListRegex.test(seq.touch3)).toBe(false);
      }
    });

    test('Touch 2 avoids pleasantries and buzzwords', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      const lower = seq.touch2.toLowerCase();

      // No pleasantries
      expect(lower).not.toContain("hope you're");
      expect(lower).not.toContain('hope all is well');
      expect(lower).not.toContain('checking in');
      expect(lower).not.toContain('just following up');
      expect(lower).not.toContain('touch base');

      // No buzzwords
      expect(lower).not.toContain('synergy');
      expect(lower).not.toContain('cutting-edge');
      expect(lower).not.toContain('game-changing');
      expect(lower).not.toContain('revolutionary');
      expect(lower).not.toContain('streamline');
      expect(lower).not.toContain('leverage');
    });
  });

  describe('Touch content requirements', () => {
    test('Touch 1 contains proof URL, trial offer, and initial hook', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      expect(seq.touch1).toContain(SAMPLE_TARGET.architecture.candidateMatchingProofRepo);
      expect(seq.touch1.toLowerCase()).toContain('2-week trial');
      expect(seq.touch1).toContain(SAMPLE_TARGET.metadata.name);
    });

    test('Touch 2 contains concrete failure mode test case or architecture proof', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      expect(seq.touch2.toLowerCase()).toContain('test case');
      expect(seq.touch2).toContain(SAMPLE_TARGET.architecture.candidateMatchingProofRepo);
    });

    test('Touch 3 contains low-friction breakup language', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      const lower = seq.touch3.toLowerCase();
      expect(lower).toContain('no problem');
      expect(lower).toContain('offer stands');
    });
  });

  describe('all pipeline target dossiers', () => {
    test('every contact across all 12 targets produces a valid sequence', () => {
      let totalTested = 0;

      for (const target of TARGET_DOSSIERS) {
        for (const contact of target.contacts) {
          const seq = generateSequenceForContact(target, contact);
          const validation = validateSequence(seq);

          expect(validation.errors).toEqual([]);
          expect(validation.valid).toBe(true);
          expect(seq.wordCounts.touch1).toBeLessThan(150);
          expect(seq.wordCounts.touch2).toBeLessThan(80);
          expect(seq.wordCounts.touch3).toBeLessThan(50);

          totalTested++;
        }
      }

      expect(totalTested).toBeGreaterThanOrEqual(30);
    });
  });

  describe('signature overloads and parameter handling', () => {
    test('accepts single SequenceGeneratorParams object', () => {
      const params: SequenceGeneratorParams = {
        metadata: SAMPLE_TARGET.metadata,
        contact: SAMPLE_CTO_CONTACT,
        architecture: SAMPLE_TARGET.architecture,
        hiring: SAMPLE_TARGET.hiring,
      };

      const seq = generateSequenceForContact(params);
      expect(seq.wordCounts.touch1).toBeLessThan(150);
      expect(seq.wordCounts.touch2).toBeLessThan(80);
      expect(seq.wordCounts.touch3).toBeLessThan(50);
    });

    test('accepts target dossier and contact', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET, SAMPLE_CTO_CONTACT);
      expect(seq.touch1).toBeDefined();
      expect(seq.touch2).toBeDefined();
      expect(seq.touch3).toBeDefined();
    });

    test('accepts target dossier alone, defaulting to first contact', () => {
      const seq = generateSequenceForContact(SAMPLE_TARGET);
      expect(seq.touch1).toBeDefined();
      expect(seq.wordCounts.touch1).toBeLessThan(150);
    });
  });

  describe('helper utilities', () => {
    test('sanitizeNadimVoice replaces em dash and en dash', () => {
      const raw = 'Contract tests \u2014 fast \u2013 reliable \u2018single\u2019 \u201Cdouble\u201D';
      const clean = sanitizeNadimVoice(raw);
      expect(clean).not.toContain('\u2014');
      expect(clean).not.toContain('\u2013');
      expect(clean).toContain('Contract tests, fast - reliable');
      expect(clean).toContain("'single'");
      expect(clean).toContain('"double"');
    });

    test('formatFailureMode handles acronyms vs regular text', () => {
      expect(formatFailureMode('POS API rate limits.')).toBe('POS API rate limits');
      expect(formatFailureMode('FHIR bundle schema.')).toBe('FHIR bundle schema');
      expect(formatFailureMode('Modifier drift.')).toBe('modifier drift');
    });

    test('individual touch functions work directly', () => {
      const params: SequenceGeneratorParams = {
        metadata: SAMPLE_TARGET.metadata,
        contact: SAMPLE_CTO_CONTACT,
        architecture: SAMPLE_TARGET.architecture,
        hiring: SAMPLE_TARGET.hiring,
      };

      const t1 = generateTouch1(params);
      const t2 = generateTouch2(params);
      const t3 = generateTouch3(params);

      expect(countWords(t1)).toBeLessThan(150);
      expect(countWords(t2)).toBeLessThan(80);
      expect(countWords(t3)).toBeLessThan(50);
    });
  });
});
