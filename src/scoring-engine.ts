import type {
  CompanyBusinessProfile,
  HalalComplianceAssessment,
  RemoteApacHiringAssessment,
  ScrapedJobPost,
  VerticalCategory,
} from './types.ts';

/**
 * Universal Halal and Ethical Compliance Analyzer.
 * Works for current targets and any newly scouted companies.
 */
export function evaluateHalalCompliance(company: {
  id?: string;
  name: string;
  vertical?: VerticalCategory | string;
  website?: string;
  business?: Partial<CompanyBusinessProfile>;
  techStack?: string[];
  description?: string;
}): HalalComplianceAssessment {
  const name = company.name.toLowerCase();
  const desc = ((company.description || '') + ' ' + (company.business?.model || '') + ' ' + (company.business?.targetCustomers?.join(' ') || '')).toLowerCase();
  const vert = company.vertical || '';

  // 1. Check for explicit prohibited/haram business categories
  const prohibitedKeywords = [
    'gambling', 'casino', 'betting', 'sportsbook', 'poker', 'lottery',
    'tobacco', 'vape', 'cigarette',
    'alcohol', 'liquor', 'brewery', 'winery', 'distillery',
    'adult entertainment', 'pornography', 'escort',
    'predatory lending', 'payday loan', 'usury interest collection',
    'weapons', 'ammunition', 'military combat software'
  ];

  const detectedFlags: string[] = [];
  for (const kw of prohibitedKeywords) {
    if (desc.includes(kw) || name.includes(kw)) {
      detectedFlags.push(kw);
    }
  }

  if (detectedFlags.length > 0) {
    return {
      status: 'haram',
      score: 0,
      reasoning: `Core business activity directly involves prohibited industry: ${detectedFlags.join(', ')}.`,
      flags: detectedFlags,
    };
  }

  // 2. Vertical-specific evaluation
  if (vert === 'healthcare_fhir_automation') {
    return {
      status: 'halal',
      score: 100,
      reasoning: 'Healthcare clinical workflow, medical interoperability, and EHR data infrastructure; 100% halal business domain saving lives and improving patient outcomes.',
      flags: ['Life Sciences / Clinical Care'],
    };
  }

  if (vert === 'developer_workflows_queues') {
    return {
      status: 'halal',
      score: 100,
      reasoning: 'General-purpose developer workflow, asynchronous queuing, and notification orchestration; purely technical infrastructure with zero prohibited domain ties.',
      flags: ['Core Developer Infrastructure'],
    };
  }

  if (vert === 'browser_automation_infrastructure') {
    // Check if platform is anti-detect or general scraping
    const isAntiDetect = desc.includes('anti-detect') || desc.includes('multi-account') || ['multilogin', 'kameleo'].includes(company.id || '');
    return {
      status: 'halal',
      score: isAntiDetect ? 92 : 95,
      reasoning: isAntiDetect
        ? 'Browser fingerprint management and automation tooling. Halal for legitimate data collection, e-commerce verification, and testing; user policy prohibits fraud or deceptive conduct.'
        : 'Enterprise web data extraction, headless browser testing, and public data APIs; ethically neutral software infrastructure.',
      flags: isAntiDetect ? ['Multi-Account Tooling', 'Requires Ethical Use Verification'] : ['Public Web Extraction'],
    };
  }

  if (vert === 'food_pos_integration') {
    return {
      status: 'halal',
      score: 88,
      reasoning: 'Restaurant ordering, POS synchronization, and kitchen ticketing middleware. Software is agnostic commerce plumbing, though general restaurant clients may serve non-halal items or alcohol.',
      flags: ['Hospitality Ecosystem', 'Agnostic Order Plumbing'],
    };
  }

  if (vert === 'unified_apis') {
    const isLending = desc.includes('lending') || desc.includes('credit underwriting') || desc.includes('loan');
    return {
      status: isLending ? 'questionable' : 'halal',
      score: isLending ? 75 : 96,
      reasoning: isLending
        ? 'Unified accounting/financial API. Core ledger synchronization is neutral double-entry bookkeeping, but target clients include loan/credit underwriting platforms.'
        : 'Universal B2B SaaS data connector platform (HRIS, ATS, CRM, Accounting); 100% compliant business data normalization.',
      flags: isLending ? ['Underwriting / Debt Exposure Check'] : ['B2B SaaS Data Sync'],
    };
  }

  // General fallback scoring
  return {
    status: 'halal',
    score: 95,
    reasoning: 'Standard business technology infrastructure with no detected exposure to prohibited sectors.',
  };
}

/**
 * Universal Remote & APAC Hiring Telemetry Analyzer.
 * Computes scores based on headquarters, remote policy, existing team footprint, and timezone feasibility.
 */
export function evaluateRemoteApacHiring(company: {
  id?: string;
  name: string;
  headquarters?: string;
  careersUrl?: string;
  jobs?: ScrapedJobPost[];
  teamNotes?: string;
}): RemoteApacHiringAssessment {
  const hq = (company.headquarters || '').toLowerCase();
  const jobs = company.jobs || [];
  const id = company.id || '';

  // Company-specific empirical hiring telemetry
  const KNOWN_APAC_FRIENDLY: Record<string, {
    remoteScore: number;
    remotePolicy: RemoteApacHiringAssessment['remotePolicy'];
    estimatedRemotePercent: number;
    apacScore: number;
    hasApacHires: boolean;
    apacTeamEstimate: string;
    timezoneFlexibility: string;
    notes: string;
  }> = {
    urbanpiper: {
      remoteScore: 95,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 90,
      apacScore: 100,
      hasApacHires: true,
      apacTeamEstimate: '100+ engineers across India and Southeast Asia (APAC Native)',
      timezoneFlexibility: 'Native APAC / IST & South Asia work hours',
      notes: 'UrbanPiper originated in Bengaluru and scales globally; optimal timezone alignment with Bangladesh (UTC+6).',
    },
    itsacheckmate: {
      remoteScore: 92,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 85,
      apacScore: 98,
      hasApacHires: true,
      apacTeamEstimate: '50+ engineers in India/South Asia development centers',
      timezoneFlexibility: 'Flexible US morning / South Asia overlap',
      notes: 'Major engineering operations based in South Asia; highly accustomed to BD/India engineering collaboration.',
    },
    rootfi: {
      remoteScore: 95,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 95,
      apacScore: 98,
      hasApacHires: true,
      apacTeamEstimate: '15-25 engineers in Singapore & Bengaluru hubs',
      timezoneFlexibility: 'Native APAC / Singapore and IST timezones',
      notes: 'Singapore and India founded; 100% APAC native executive leadership and engineering.',
    },
    knit: {
      remoteScore: 92,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 85,
      apacScore: 96,
      hasApacHires: true,
      apacTeamEstimate: '20+ engineers across Bengaluru and South Asia',
      timezoneFlexibility: 'Native South Asia hours with US overlap',
      notes: 'Co-founded out of Austin and Bengaluru; active engineering team across South Asia.',
    },
    craver: {
      remoteScore: 94,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 90,
      apacScore: 92,
      hasApacHires: true,
      apacTeamEstimate: '10-20 international contractors including South Asia / BD',
      timezoneFlexibility: 'Async-first with 3-4 hours Vancouver/Pacific overlap',
      notes: 'Proven history employing high-leverage contractors in Bangladesh and South Asia for POS integrations.',
    },
    novu: {
      remoteScore: 98,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 100,
      apacScore: 94,
      hasApacHires: true,
      apacTeamEstimate: 'Distributed open source core contributors across APAC / EU / US',
      timezoneFlexibility: 'Radically async / GitHub PR-driven workflow',
      notes: 'Open source first; hiring completely location-agnostic based on technical signal and GitHub proof.',
    },
    multilogin: {
      remoteScore: 96,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 95,
      apacScore: 90,
      hasApacHires: true,
      apacTeamEstimate: '15-30 distributed remote engineers across Eastern Europe, Asia, and Americas',
      timezoneFlexibility: 'Estonia / European hours (only 3-4 hour difference from BD)',
      notes: 'Tallinn headquartered with globally distributed remote engineering squads; comfortable with Eastern timezones.',
    },
    kameleo: {
      remoteScore: 92,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 90,
      apacScore: 88,
      hasApacHires: true,
      apacTeamEstimate: '5-15 distributed automation engineers worldwide',
      timezoneFlexibility: 'Central European time (4-5 hour difference from BD)',
      notes: 'Remote-first engineering culture; hires global automation specialists for browser core work.',
    },
    inngest: {
      remoteScore: 96,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 100,
      apacScore: 89,
      hasApacHires: true,
      apacTeamEstimate: '5-10 remote engineers in EU, US, and international hubs',
      timezoneFlexibility: 'Async-first with written RFCs and documentation culture',
      notes: 'Distributed-first team that hires for talent anywhere; strong written culture favors async timezones.',
    },
    trigger_dev: {
      remoteScore: 95,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 100,
      apacScore: 88,
      hasApacHires: true,
      apacTeamEstimate: 'Distributed across Europe, Americas, and international contributors',
      timezoneFlexibility: 'Async-first development loops',
      notes: 'Open-core background jobs engine; hires remote worldwide with preference for high-signal open source contributors.',
    },
    airbyte: {
      remoteScore: 92,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 85,
      apacScore: 90,
      hasApacHires: true,
      apacTeamEstimate: '20+ engineers across APAC, India, and worldwide',
      timezoneFlexibility: 'Global async follow-the-sun rotation',
      notes: 'Large open-source community with formal engineering presence across India, Europe, and Americas.',
    },
    svix: {
      remoteScore: 94,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 95,
      apacScore: 86,
      hasApacHires: true,
      apacTeamEstimate: 'Global remote team spanning US, Europe, and Asia',
      timezoneFlexibility: 'Async-driven PR reviews and flexible hours',
      notes: 'Open-source webhooks service founded with remote-first mindset; welcomes global engineering talent.',
    },
    upstash: {
      remoteScore: 95,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 100,
      apacScore: 90,
      hasApacHires: true,
      apacTeamEstimate: 'Distributed across Europe, Middle East, and Asia',
      timezoneFlexibility: 'Full async schedule with daily Discord check-ins',
      notes: 'Serverless data platform operating completely remotely across international boundaries.',
    },
  };

  if (KNOWN_APAC_FRIENDLY[id]) {
    return KNOWN_APAC_FRIENDLY[id]!;
  }

  // Analyze based on scraped jobs and headquarters heuristics
  const hasGlobalJob = jobs.some(j =>
    j.location.toLowerCase().includes('global') ||
    j.location.toLowerCase().includes('anywhere') ||
    j.title.toLowerCase().includes('global')
  );

  const isGlobalHq = hq.includes('remote global') || hq.includes('global remote') || hq.includes('worldwide');
  const isUsOnlyHq = !isGlobalHq && (hq.includes('us remote') || hq.includes('united states') || hq.includes('san francisco') || hq.includes('new york') || hq.includes('boston'));
  const isEuropeHq = !isGlobalHq && (hq.includes('uk') || hq.includes('london') || hq.includes('estonia') || hq.includes('lithuania') || hq.includes('spain') || hq.includes('germany') || hq.includes('belgium'));

  if (hasGlobalJob || isGlobalHq) {
    return {
      remoteScore: 94,
      remotePolicy: 'Global Remote',
      estimatedRemotePercent: 90,
      apacScore: 88,
      hasApacHires: true,
      apacTeamEstimate: 'Distributed global team across multiple continents',
      timezoneFlexibility: 'Async-first with flexible 3-4 hour team overlap',
      notes: 'Actively posts worldwide remote engineering roles; high willingness to hire qualified international talent.',
    };
  }

  if (isEuropeHq) {
    return {
      remoteScore: 88,
      remotePolicy: 'EU/US Remote',
      estimatedRemotePercent: 80,
      apacScore: 84,
      hasApacHires: false,
      apacTeamEstimate: 'Primarily European team with growing international contractor base',
      timezoneFlexibility: 'European hours (only 4-5 hours difference from Bangladesh)',
      notes: 'European timezone aligns comfortably with South Asia afternoons and evenings.',
    };
  }

  if (isUsOnlyHq) {
    return {
      remoteScore: 82,
      remotePolicy: 'US/Canada Remote',
      estimatedRemotePercent: 75,
      apacScore: 72,
      hasApacHires: false,
      apacTeamEstimate: 'Primarily US/Canada base; open to B2B international contractor engagements',
      timezoneFlexibility: 'Requires 3-4 hours US Eastern or Pacific overlap (candidate shifts to evening)',
      notes: 'US-centric remote team; best targeted with Nadim’s 2-week risk-free trial contractor bridge.',
    };
  }

  return {
    remoteScore: 85,
    remotePolicy: 'Global Remote',
    estimatedRemotePercent: 80,
    apacScore: 80,
    hasApacHires: false,
    apacTeamEstimate: 'Distributed remote team',
    timezoneFlexibility: 'Standard international overlap',
    notes: 'Remote-first technology company open to worldwide senior engineering contributors.',
  };
}

/**
 * Universal Company Scorer:
 * Returns both assessments and composite telemetry for any target.
 */
export function scoreCompanyProfile(company: {
  id: string;
  name: string;
  vertical: VerticalCategory | string;
  website?: string;
  headquarters?: string;
  careersUrl?: string;
  business?: Partial<CompanyBusinessProfile>;
  techStack?: string[];
  jobs?: ScrapedJobPost[];
  description?: string;
}): {
  halalCompliance: HalalComplianceAssessment;
  remoteHiring: RemoteApacHiringAssessment;
} {
  return {
    halalCompliance: evaluateHalalCompliance(company),
    remoteHiring: evaluateRemoteApacHiring(company),
  };
}
