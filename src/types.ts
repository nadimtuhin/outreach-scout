export type VerticalCategory =
  | 'food_pos_integration'
  | 'healthcare_fhir_automation'
  | 'browser_automation_infrastructure'
  | 'developer_workflows_queues'
  | 'unified_apis';

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

export interface CompanyBusinessProfile {
  model: string;
  pricing: string;
  targetCustomers: string[];
  keyClients: string[];
  revenueOrFunding: string;
}

export interface BlogArticleSignal {
  title: string;
  url: string;
  summary: string;
  tags: string[];
  date?: string;
}

export interface ProjectRepoSignal {
  name: string;
  url: string;
  starsOrDownloads?: string;
  techStack: string[];
  description: string;
}

export interface EngineeringTastes {
  architecturalBiases: string[];
  stackPreferences: string[];
  engineeringCulture: string[];
}

export interface ScrapedJobPost {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType?: string;
  remoteStatus: 'Remote' | 'Hybrid' | 'On-site';
  url: string;
  salaryBand?: string;
  postedDate?: string;
  keySkills: string[];
  snippet: string;
}

export interface CompanyDeepProfile {
  business: CompanyBusinessProfile;
  blogs: BlogArticleSignal[];
  projects: ProjectRepoSignal[];
  tastes: EngineeringTastes;
  jobs?: ScrapedJobPost[];
}

export type QueueJobStatus = 'waiting' | 'pending' | 'processing' | 'completed' | 'failed' | 'paused';

export interface ScrapingJob {
  id: string;
  targetId: string;
  taskType: 'profile_deep_dive' | 'blog_scrape' | 'employee_scrape' | 'projects_scrape' | 'job_posts_scrape';
  status: QueueJobStatus;
  priority: number;
  attempts: number;
  maxAttempts: number;
  payload: Record<string, unknown>;
  result?: Record<string, unknown>;
  error?: string;
  scheduledFor: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueueStatusSummary {
  total: number;
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  isPaused: boolean;
  currentJob?: ScrapingJob;
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
  deepProfile?: CompanyDeepProfile;
  jobs?: ScrapedJobPost[];
}

export interface ScoutRunResult {
  vertical: VerticalCategory;
  targets: TargetDossier[];
}
