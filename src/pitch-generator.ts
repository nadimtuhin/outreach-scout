import type {
  ArchitectureReverseEngineering,
  ContactLead,
  HiringPattern,
  LeadershipProfile,
  TargetMetadata,
} from './types.ts';

export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

export function generateTailoredPitchForContact(params: {
  metadata: TargetMetadata;
  contact: Pick<ContactLead, 'name' | 'role' | 'angle'>;
  architecture: ArchitectureReverseEngineering;
  hiring: HiringPattern;
}): string {
  const { metadata, contact, architecture, hiring } = params;

  const proofUrl = process.env.PROOF_URL || architecture.candidateMatchingProofRepo;
  const calendlyUrl = process.env.CALENDLY_URL || 'https://calendly.com/nadimtuhin/30min';
  const senderName = process.env.SENDER_NAME || 'Nadim';
  const firstName = contact.name.split(' ')[0] ?? 'there';

  const modes = architecture.criticalFailureModes.slice(0, 2).map((m, idx) => {
    const trimmed = m.trim();
    if (idx > 0 && /^[A-Z][a-z]/.test(trimmed)) {
      return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
    }
    return trimmed;
  });
  const failureText = modes.join(' and ');

  if (contact.angle === 'cto_eng') {
    return `${proofUrl}
${calendlyUrl}

Hi ${firstName}, saw your engineering work on ${metadata.name}'s ${hiring.painPointHook}.

${architecture.candidateExperienceBridge}. Handled ${failureText} with idempotent queues and automated test suites.

I have 15-20 hours a week open. I can pick up a thorny integration ticket or write an adapter harness on a 2-week trial contract so your core team stays focused.

If you want to check my repo or discuss failure modes, grab a time on Calendly.

Best,
${senderName}`;
  }

  if (contact.angle === 'product_ops') {
    return `${proofUrl}
${calendlyUrl}

Hi ${firstName}, saw your product work on ${metadata.name}'s customer onboarding and integration catalog.

${architecture.candidateExperienceBridge}. Handled ${failureText} to keep merchant and clinic data syncing without manual support tickets.

I have 15-20 hours a week open. I can build out the next partner adapter or clear pending integration requests on a 2-week trial contract.

If you want to unblock a roadmap item, grab a slot on Calendly.

Best,
${senderName}`;
  }

  // Default: Founder / CEO
  return `${proofUrl}
${calendlyUrl}

Hi ${firstName}, saw your work on ${metadata.name}'s ${hiring.painPointHook}.

${architecture.candidateExperienceBridge}. Handled ${failureText} in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
${senderName}`;
}

export function generateColdOutreach(params: {
  metadata: TargetMetadata;
  leadership: LeadershipProfile;
  architecture: ArchitectureReverseEngineering;
  hiring: HiringPattern;
}): string {
  return generateTailoredPitchForContact({
    metadata: params.metadata,
    contact: {
      name: params.leadership.name,
      role: params.leadership.role,
      angle: 'founder_ceo',
    },
    architecture: params.architecture,
    hiring: params.hiring,
  });
}
