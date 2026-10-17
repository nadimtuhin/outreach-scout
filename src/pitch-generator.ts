import type {
  ArchitectureReverseEngineering,
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

export function generateColdOutreach(params: {
  metadata: TargetMetadata;
  leadership: LeadershipProfile;
  architecture: ArchitectureReverseEngineering;
  hiring: HiringPattern;
}): string {
  const { metadata, leadership, architecture, hiring } = params;

  const proofUrl = process.env.PROOF_URL || architecture.candidateMatchingProofRepo;
  const calendlyUrl = process.env.CALENDLY_URL || 'https://calendly.com/nadimtuhin/30min';
  const senderName = process.env.SENDER_NAME || 'Nadim';
  const firstName = leadership.name.split(' ')[0] ?? 'there';

  // Strictly follow ~/.hermes/learned_style/user_voice_profile.md
  // Line 1: Proof URL
  // Line 2: Calendly URL
  // Body: Concrete hook, real failure mode from experience, part-time trial pitch.
  // Under 150 words. Zero numbered lists. No em/en dashes.
  const modes = architecture.criticalFailureModes.slice(0, 2).map((m, idx) => {
    const trimmed = m.trim();
    if (idx > 0 && /^[A-Z][a-z]/.test(trimmed)) {
      return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
    }
    return trimmed;
  });
  const failureText = modes.join(' and ');

  const draft = `${proofUrl}
${calendlyUrl}

Hi ${firstName}, saw your work on ${metadata.name}'s ${hiring.painPointHook}.

${architecture.candidateExperienceBridge}. Handled ${failureText} in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
${senderName}`;

  return draft;
}
