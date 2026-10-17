import type {
  ArchitectureReverseEngineering,
  ContactLead,
  HiringPattern,
  OutreachSequence,
  TargetDossier,
  TargetMetadata,
} from './types.ts';
import { countWords, generateTailoredPitchForContact } from './pitch-generator.ts';

export type { OutreachSequence };

export interface SequenceGeneratorParams {
  metadata: TargetMetadata;
  contact: Pick<ContactLead, 'name' | 'role' | 'angle'> | ContactLead;
  architecture: ArchitectureReverseEngineering;
  hiring: HiringPattern;
}

export { countWords };

export function sanitizeNadimVoice(text: string): string {
  // Strip em dashes, en dashes, and curly punctuation
  return text
    .replace(/\s*[\u2014\u2015]\s*/g, ', ')
    .replace(/[\u2012\u2013]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[ \t]+/g, ' ')
    .replace(/ ,/g, ',');
}

export function formatFailureMode(mode: string): string {
  const trimmed = mode.trim().replace(/[.]+$/, '');
  // Preserve full acronyms like POS, FHIR, CDP
  if (/^[A-Z][a-z]/.test(trimmed)) {
    return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  }
  return trimmed;
}

export function generateTouch1(params: SequenceGeneratorParams): string {
  const pitch = generateTailoredPitchForContact({
    metadata: params.metadata,
    contact: params.contact,
    architecture: params.architecture,
    hiring: params.hiring,
  });
  return sanitizeNadimVoice(pitch);
}

export function generateTouch2(params: SequenceGeneratorParams): string {
  const { contact, architecture } = params;
  const firstName = contact.name.trim().split(' ')[0] ?? 'there';
  const proofUrl = process.env.PROOF_URL || architecture.candidateMatchingProofRepo;
  const senderName = process.env.SENDER_NAME || 'Nadim';

  const rawMode = architecture.criticalFailureModes[0] || 'integration edge cases';
  const failureMode = formatFailureMode(rawMode);

  let body = '';
  if (contact.angle === 'cto_eng') {
    body = `Hi ${firstName},

Put together a reproducible test case for ${failureMode}. Uses replay fixtures and deterministic retries to catch contract breaks before production.

Repo: ${proofUrl}

Happy to share the harness or run a benchmark on your endpoints if this is on your current sprint.

Best,
${senderName}`;
  } else if (contact.angle === 'product_ops') {
    body = `Hi ${firstName},

Mapped out an automated guard for ${failureMode}. Catches sync drops between third party endpoints before customers submit support tickets.

Proof repo: ${proofUrl}

Can set up a sandbox adapter in 2 days to test against your staging environment if this is on your roadmap.

Best,
${senderName}`;
  } else {
    // founder_ceo
    body = `Hi ${firstName},

Wrote an architecture breakdown for handling ${failureMode} without manual data fixes. Shows how we kept webhook ingestion at 99.9% uptime during peak order spikes.

Code proof: ${proofUrl}

Open to running a small 2-week trial on an open integration ticket if your engineering roadmap is tight.

Best,
${senderName}`;
  }

  return sanitizeNadimVoice(body);
}

export function generateTouch3(params: SequenceGeneratorParams): string {
  const { metadata, contact } = params;
  const firstName = contact.name.trim().split(' ')[0] ?? 'there';
  const senderName = process.env.SENDER_NAME || 'Nadim';
  const company = metadata.name;

  let body = '';
  if (contact.angle === 'cto_eng') {
    body = `Hi ${firstName},

If integration bandwidth is not a blocker right now, no problem.

If things change when you hit your next release milestone, the 2-week trial offer stands. Good luck shipping ${company}.

Best,
${senderName}`;
  } else if (contact.angle === 'product_ops') {
    body = `Hi ${firstName},

If partner onboarding is not a priority right now, no problem.

If the integration backlog grows when you hit your next cycle, the trial offer stands. Good luck with ${company}.

Best,
${senderName}`;
  } else {
    // founder_ceo
    body = `Hi ${firstName},

If this is not a priority right now, no problem at all.

If things change when you hit your next integration milestone, the 2-week trial offer stands. Good luck building ${company}.

Best,
${senderName}`;
  }

  return sanitizeNadimVoice(body);
}

// ponytail: static 3-touch cadence with day 0/4/8 timing; add dynamic schedule configuration if user needs custom delivery spacing.
export function generateSequenceForContact(
  targetOrParams: TargetDossier | SequenceGeneratorParams,
  contactLead?: Pick<ContactLead, 'name' | 'role' | 'angle'> | ContactLead
): OutreachSequence {
  let params: SequenceGeneratorParams;

  if (contactLead) {
    const target = targetOrParams as TargetDossier;
    params = {
      metadata: target.metadata,
      contact: contactLead,
      architecture: target.architecture,
      hiring: target.hiring,
    };
  } else if (
    'metadata' in targetOrParams &&
    'architecture' in targetOrParams &&
    'hiring' in targetOrParams &&
    'contact' in targetOrParams &&
    targetOrParams.contact
  ) {
    params = targetOrParams as SequenceGeneratorParams;
  } else if (
    'metadata' in targetOrParams &&
    'architecture' in targetOrParams &&
    'hiring' in targetOrParams &&
    'contacts' in targetOrParams
  ) {
    const target = targetOrParams as TargetDossier;
    const defaultContact = target.contacts[0] ?? {
      name: target.leadership[0]?.name ?? 'there',
      role: target.leadership[0]?.role ?? 'Founder',
      angle: 'founder_ceo' as const,
    };
    params = {
      metadata: target.metadata,
      contact: defaultContact,
      architecture: target.architecture,
      hiring: target.hiring,
    };
  } else {
    params = targetOrParams as SequenceGeneratorParams;
  }

  const touch1 = generateTouch1(params);
  const touch2 = generateTouch2(params);
  const touch3 = generateTouch3(params);

  return {
    touch1,
    touch2,
    touch3,
    wordCounts: {
      touch1: countWords(touch1),
      touch2: countWords(touch2),
      touch3: countWords(touch3),
    },
  };
}

export function generateSequencesForDossier(target: TargetDossier): Array<{
  contact: ContactLead;
  sequence: OutreachSequence;
}> {
  return target.contacts.map((c) => ({
    contact: c,
    sequence: generateSequenceForContact(target, c),
  }));
}

export function validateSequence(sequence: OutreachSequence): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const { touch1, touch2, touch3, wordCounts } = sequence;

  if (wordCounts.touch1 >= 150) {
    errors.push(`Touch 1 exceeds 150 words (${wordCounts.touch1} words)`);
  }
  if (wordCounts.touch2 >= 80) {
    errors.push(`Touch 2 exceeds 80 words (${wordCounts.touch2} words)`);
  }
  if (wordCounts.touch3 >= 50) {
    errors.push(`Touch 3 exceeds 50 words (${wordCounts.touch3} words)`);
  }

  const forbiddenDashRegex = /[\u2013\u2014]/;
  if (forbiddenDashRegex.test(touch1)) errors.push('Touch 1 contains forbidden em/en dash');
  if (forbiddenDashRegex.test(touch2)) errors.push('Touch 2 contains forbidden em/en dash');
  if (forbiddenDashRegex.test(touch3)) errors.push('Touch 3 contains forbidden em/en dash');

  const numberedListRegex = /^\s*\d+[.)]\s+/m;
  if (numberedListRegex.test(touch1)) errors.push('Touch 1 contains numbered list');
  if (numberedListRegex.test(touch2)) errors.push('Touch 2 contains numbered list');
  if (numberedListRegex.test(touch3)) errors.push('Touch 3 contains numbered list');

  return {
    valid: errors.length === 0,
    errors,
  };
}
