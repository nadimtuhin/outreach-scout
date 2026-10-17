export type VerticalCategory =
  | 'food_pos_integration'
  | 'healthcare_fhir_automation'
  | 'browser_automation_infrastructure';

export interface TargetMetadata {
  id: string;
  name: string;
  vertical: VerticalCategory;
  website: string;
  careersUrl: string;
  platformEcosystem: string[];
  headquarters: string;
  estimatedEmployees: string;
  fundingStage: string;
  techStack: string[];
}

export interface PersonProfile {
  name: string;
  role: string;
  email?: string;
  linkedInUrl: string;
  location?: string;
  notes?: string;
}

export interface LeadershipProfile extends PersonProfile {
  technicalBackground: string;
  coreBiases: string[];
}

export interface MatchAnalysis {
  score: number;
  strongMatches: string[];
  gapsOrBridges: string[];
}

export interface ArchitectureReverseEngineering {
  coreWorkflow: string;
  criticalFailureModes: string[];
  candidateMatchingProofRepo: string;
  candidateExperienceBridge: string;
}

export interface HiringPattern {
  sourcingChannel: string;
  interviewFormat: string;
  painPointHook: string;
  partTimeTrialProposal: string;
}

export interface OutreachSequence {
  touch1: string;
  touch2: string;
  touch3: string;
  wordCounts: {
    touch1: number;
    touch2: number;
    touch3: number;
  };
}

export interface ContactLead {
  id: string;
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
  notes?: string;
  tailoredPitch: string;
  wordCount: number;
  sequence?: OutreachSequence;
}

export interface TargetDossier {
  metadata: TargetMetadata;
  leadership: LeadershipProfile[];
  keyEmployees: PersonProfile[];
  contacts: ContactLead[];
  matchAnalysis: MatchAnalysis;
  architecture: ArchitectureReverseEngineering;
  hiring: HiringPattern;
  coldOutreachDraft: string;
}

export interface ScoutRunResult {
  vertical: VerticalCategory;
  targets: TargetDossier[];
}
