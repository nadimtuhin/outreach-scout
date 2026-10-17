import type { ContactLead, TargetDossier, VerticalCategory } from './types.ts';
import { countWords, generateColdOutreach, generateTailoredPitchForContact } from './pitch-generator.ts';

const RAW_TARGETS = [
  // Vertical 1: Food POS & Ordering Integration
  {
    metadata: {
      id: 'craver',
      name: 'Craver',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://craverapp.com',
      careersUrl: 'https://craverapp.com/careers',
      platformEcosystem: ['Square', 'Toast', 'Clover', 'TouchBistro'],
      headquarters: 'Vancouver, BC / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Seed / Profitable Growth',
      techStack: ['Node.js', 'TypeScript', 'React Native', 'PostgreSQL', 'Redis'],
    },
    leadership: [
      {
        name: 'Amin Yazdani',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/aminyazdani/',
        technicalBackground: 'Software engineer turned founder; focused on independent restaurant margins and tech adoption',
        coreBiases: ['Self-serve customer onboarding', 'Zero downtime menu sync', 'Fast restaurant onboarding'],
      },
      {
        name: 'Gavin Zhang',
        role: 'Co-founder & Engineering Lead',
        linkedInUrl: 'https://www.linkedin.com/in/gavinzhang/',
        technicalBackground: 'Distributed systems and mobile architecture for POS integrations',
        coreBiases: ['Reliable POS polling', 'Webhook fault tolerance', 'Minimal mobile battery usage'],
      },
    ],
    keyEmployees: [
      {
        name: 'Saeed Golbabaei',
        role: 'Senior Software Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/saeed-golbabaei/',
        notes: 'Leads backend integrations and POS catalog pipelines',
      },
      {
        name: 'Hamed Esmaili',
        role: 'Mobile Team Lead',
        linkedInUrl: 'https://www.linkedin.com/in/hamed-esmaili/',
        notes: 'White-label React Native consumer apps',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Direct architectural parallel to Per Diem: POS catalog sync + mobile ordering queue',
        'Built high-throughput webhook idempotency engine at Pathao handling out-of-order events',
        'TypeScript/Node/PostgreSQL stack matches candidate 14-year core',
      ],
      gapsOrBridges: [
        'TouchBistro API specifics are proprietary: bridge by offering 2-day sandbox integration test',
        'Pacific Time base: bridge with candidate proven 4-hour US morning timezone overlap',
      ],
    },
    architecture: {
      coreWorkflow: 'Imports restaurant catalog from Square/Toast POS, syncs modifiers to branded mobile app, injects mobile orders directly into the kitchen POS ticket printer.',
      criticalFailureModes: [
        'Modifier and nested option schema drift during midday menu updates',
        'Out-of-order POS order status webhooks during rush hours',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/findable',
      candidateExperienceBridge: 'At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency POS webhooks and catalog sync',
    },
    hiring: {
      sourcingChannel: 'Direct founder outreach / GitHub OSS proof',
      interviewFormat: 'Sourcing chat (20 min) -> POS integration take-home -> Architecture review',
      painPointHook: 'Square and Toast menu catalog sync and nested modifier handling',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional POS catalog sync adapter or fixing webhook retry drift',
    },
  },
  {
    metadata: {
      id: 'hazlnut',
      name: 'Hazlnut',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://hazlnut.com',
      careersUrl: 'https://hazlnut.com/careers',
      platformEcosystem: ['Clover', 'Square', 'Toast'],
      headquarters: 'Jacksonville, FL / Remote',
      estimatedEmployees: '10-25',
      fundingStage: 'Venture Backed',
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'RabbitMQ'],
    },
    leadership: [
      {
        name: 'Steven Gonzalez',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/stevengonzalez/',
        technicalBackground: 'Product and enterprise merchant operations',
        coreBiases: ['Clean merchant onboarding', 'Fast transaction speed', 'Automated loyalty redemption'],
      },
      {
        name: 'Brad Hawkins',
        role: 'Co-founder & Product/Tech',
        linkedInUrl: 'https://www.linkedin.com/in/bradhawkins/',
        technicalBackground: 'POS systems integration, hardware printers, and payment flows',
        coreBiases: ['POS API rate-limit resilience', 'Clean payment callback state machines', 'Zero duplicate orders'],
      },
    ],
    keyEmployees: [
      {
        name: 'David Miller',
        role: 'Lead Systems Architect',
        linkedInUrl: 'https://www.linkedin.com/in/david-miller-pos/',
        notes: 'Oversees Clover App Market API sync and merchant payment webhooks',
      },
    ],
    matchAnalysis: {
      score: 92,
      strongMatches: [
        'Heavy Square and Clover webhook reliance matching candidate background',
        'Payment callback reconciliation with transactional outbox and zero double-charges',
        'Postgres and Redis queue tuning under spiky lunch/dinner order bursts',
      ],
      gapsOrBridges: [
        'Clover Semi-Integrated POS hardware protocol: bridge by highlighting backend cloud API focus',
        'Contractor bench model: offer part-time 15-20h trial to start without FTE commitment',
      ],
    },
    architecture: {
      coreWorkflow: 'Connects Clover and Square merchant registers to white-label apps and web checkout with automated loyalty calculation.',
      criticalFailureModes: [
        'POS API rate limits during synchronous multi-location catalog refreshes',
        'Duplicate order placement on network dropouts during card tokenization',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/findable',
      candidateExperienceBridge: 'I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication',
    },
    hiring: {
      sourcingChannel: 'Direct founder pitch citing real Clover/Square API failure modes',
      interviewFormat: 'Product/fit call -> Technical system design on POS webhooks -> Practical coding review',
      painPointHook: 'Clover and Square multi-location catalog sync and loyalty webhook latency',
      partTimeTrialProposal: 'Write an idempotent order dispatcher or optimize catalog diff sync under rate-limited endpoints',
    },
  },

  // Vertical 2: Healthcare Automation on EHR / SMART on FHIR
  {
    metadata: {
      id: 'metriport',
      name: 'Metriport',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://metriport.com',
      careersUrl: 'https://metriport.com/careers',
      platformEcosystem: ['Epic', 'Cerner', 'CommonWell Health Alliance', 'Carequality'],
      headquarters: 'San Francisco, CA / Remote (YC S22)',
      estimatedEmployees: '10-20',
      fundingStage: 'Seed (YC S22)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'FHIR R4'],
    },
    leadership: [
      {
        name: 'Colin Keany',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/colinkeany/',
        technicalBackground: 'Product and open source health infrastructure',
        coreBiases: ['Open source transparency', 'Developer ergonomics', 'Universal schema normalization'],
      },
      {
        name: 'Derya Cavdar',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/deryacavdar/',
        technicalBackground: 'Distributed systems, medical record exchange, large-scale data transformation',
        coreBiases: ['High-throughput stream processing', 'Deterministic FHIR parsing', 'Zero data corruption'],
      },
    ],
    keyEmployees: [
      {
        name: 'Marek B.',
        role: 'Senior Backend Engineer',
        linkedInUrl: 'https://www.linkedin.com/company/metriport/',
        notes: 'Remote contractor contributor on C-CDA XML stream transformation',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Open-source TypeScript repository where candidate can demonstrate immediate PR proof',
        'Clinical document normalization and FHIR R4 resource parsing matching Peyra experience',
        'Strict HIPAA compliance and synthetic test fixtures architecture',
      ],
      gapsOrBridges: [
        'Carequality network query certificates: bridge with candidate EHR REST/FHIR adapter proof',
        'Full-time open-source maintainer pace: offer targeted issue triage and parser fix PRs',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests clinical documents (C-CDA XML) from national healthcare networks and converts them into standardized, queryable FHIR R4 JSON resources.',
      criticalFailureModes: [
        'Memory exhaustion when parsing 100MB+ legacy C-CDA XML clinical files',
        'Schema discrepancies between Cerner and Epic FHIR allergy/medication bundles',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/findable',
      candidateExperienceBridge: 'In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses',
    },
    hiring: {
      sourcingChannel: 'GitHub contributions to their open-source repo or direct CTO email',
      interviewFormat: 'Open-source code discussion -> Practical data parsing challenge -> Culture/speed fit',
      painPointHook: 'C-CDA to FHIR R4 transformation pipeline and large document streaming',
      partTimeTrialProposal: 'Contribute a targeted parser optimization or FHIR resource validation suite on a 2-week trial',
    },
  },
  {
    metadata: {
      id: 'canvas_medical',
      name: 'Canvas Medical',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://canvasmedical.com',
      careersUrl: 'https://canvasmedical.com/careers',
      platformEcosystem: ['Epic', 'ONC Certified Health IT', 'SMART on FHIR'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '30-50',
      fundingStage: 'Series B ($40M+ raised)',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Kafka'],
    },
    leadership: [
      {
        name: 'Andrew Hines',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/andrew-hines/',
        technicalBackground: 'Health technology architect and digital health platform pioneer',
        coreBiases: ['Extensible clinical APIs', 'Audit log immutability', 'Developer-led healthcare'],
      },
      {
        name: 'Julian Malinak',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/julian-malinak/',
        technicalBackground: 'Enterprise scale distributed systems and HIPAA data governance',
        coreBiases: ['Guaranteed webhook delivery', 'Strict test coverage', 'Sub-100ms API responses'],
      },
    ],
    keyEmployees: [
      {
        name: 'Clara Wu',
        role: 'Staff Platform Engineer',
        linkedInUrl: 'https://www.linkedin.com/company/canvas-medical/',
        notes: 'Maintains Kafka event streaming pipeline for clinical chart updates',
      },
    ],
    matchAnalysis: {
      score: 88,
      strongMatches: [
        'Event-driven clinical protocol automation matching candidate distributed systems background',
        'TypeScript and Python polyglot pipeline expertise',
        'Deep understanding of clinical data audit trails and HIPAA compliance boundaries',
      ],
      gapsOrBridges: [
        'Company is Series B with formal hiring loops: bypass passive ATS via direct cold pitch to Julian Malinak',
        'ONC certification compliance: bridge by citing exact failure modes in webhook event ordering',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a programmable EHR platform where digital health companies deploy custom clinical plugins and event-driven automation directly into chart workflows.',
      criticalFailureModes: [
        'Webhook fan-out backpressure when clinical events spike during hospital shifts',
        'Concurrent charting update collisions without optimistic concurrency controls',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/findable',
      candidateExperienceBridge: 'I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation',
    },
    hiring: {
      sourcingChannel: 'Engineering blog comment / direct VP Eng cold outreach',
      interviewFormat: 'Architecture deep dive -> Distributed systems coding -> Executive alignment',
      painPointHook: 'FHIR webhook delivery reliability and clinical event plugin execution',
      partTimeTrialProposal: 'Build an integration test harness or asynchronous webhook delivery queue on a short contract',
    },
  },

  // Vertical 3: Browser Automation Infrastructure & Agentic Scraping
  {
    metadata: {
      id: 'browserbase',
      name: 'Browserbase',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://browserbase.com',
      careersUrl: 'https://browserbase.com/careers',
      platformEcosystem: ['Chromium', 'CDP', 'Playwright', 'Puppeteer'],
      headquarters: 'San Francisco, CA / Remote (YC W24)',
      estimatedEmployees: '5-15',
      fundingStage: 'Seed ($6M+ raised, YC W24)',
      techStack: ['TypeScript', 'Node.js', 'Go', 'Docker', 'Kubernetes', 'WebSockets'],
    },
    leadership: [
      {
        name: 'Paul Klein',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/paulrklein/',
        technicalBackground: 'Browser internals, Chromium CDP, and high-density container orchestration',
        coreBiases: ['Zero headless detection', 'Instant cold starts', 'Developer simplicity'],
      },
    ],
    keyEmployees: [
      {
        name: 'Alex Rivera',
        role: 'Founding Infrastructure Engineer',
        linkedInUrl: 'https://www.linkedin.com/company/browserbase/',
        notes: 'Maintains WebSocket connection proxy and Chromium process isolation',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Exact match with candidate LotForce background: multi-profile session persistence and anti-bot bypass',
        'Direct contributor to OpenTabs browser automation plugins and CDP automation protocols',
        'Deep experience with Chromium zombie process reaping and memory leak mitigation',
      ],
      gapsOrBridges: [
        'Kubernetes scale at hundreds of concurrent containers: bridge with candidate Docker/WSL2 and Linux daemon experience',
        'Y Combinator fast-paced seed environment: pitch immediate 15-20h/wk trial contract',
      ],
    },
    architecture: {
      coreWorkflow: 'Spins up ephemeral cloud browser instances over CDP/WebSockets for AI agents, handling session persistence, captcha solving, and proxy rotation.',
      criticalFailureModes: [
        'Chromium zombie processes and zombie tab memory leaks across long agent loops',
        'WebSocket proxy socket exhaustion when agents initiate hundreds of rapid CDP commands',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping',
    },
    hiring: {
      sourcingChannel: 'GitHub issues / direct founder message showing real Chromium/CDP edge-case fixes',
      interviewFormat: 'CDP architecture conversation (30 min) -> Hands-on debugging challenge -> Trial offer',
      painPointHook: 'CDP multiplexing stability and headless anti-fingerprinting',
      partTimeTrialProposal: 'Tackle a specific CDP session drop bug or proxy retry harness on a 2-week part-time sprint',
    },
  },
  {
    metadata: {
      id: 'steel',
      name: 'Steel',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://steel.dev',
      careersUrl: 'https://steel.dev/careers',
      platformEcosystem: ['Chromium', 'Playwright', 'Puppeteer', 'Docker'],
      headquarters: 'New York / Remote',
      estimatedEmployees: '5-10',
      fundingStage: 'Seed',
      techStack: ['TypeScript', 'Node.js', 'Docker', 'Redis', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Sean MacEachern',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/sean-maceachern/',
        technicalBackground: 'Full stack systems, browser automation, and AI agent developer tooling',
        coreBiases: ['Open source first', 'Low latency session startup', 'Realistic human session emulation'],
      },
    ],
    keyEmployees: [
      {
        name: 'Ryan K.',
        role: 'Core Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/company/steel-dev/',
        notes: 'Focuses on Playwright driver shims and CDP session recording',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Open-source browser automation core where candidate can submit direct pull requests',
        'Real-world stealth and bot detection evasion (Cloudflare Turnstile, fingerprinting) from OpenTabs work',
        'Lightweight Bun and TypeScript tooling architecture alignment',
      ],
      gapsOrBridges: [
        'Live screencast WebRTC streaming: bridge by showing deep CDP screencast and screenshot pipeline experience',
        'Small team with founder wearing all hats: propose self-directed backlog ticket execution on trial',
      ],
    },
    architecture: {
      coreWorkflow: 'Open-source browser automation platform for AI agents with built-in stealth, session recording, and live debugger views.',
      criticalFailureModes: [
        'Canvas and WebGL fingerprint discrepancies triggering bot gates',
        'Zombie Docker browser containers failing to release GPU/RAM allocations',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup',
    },
    hiring: {
      sourcingChannel: 'Direct founder outreach via GitHub or Twitter/Email with PR link',
      interviewFormat: 'Technical discussion on Chromium internals -> Code walkthrough -> Paid trial contract',
      painPointHook: 'Session cleanup and anti-bot fingerprint consistency in agent browser sessions',
      partTimeTrialProposal: 'Contribute a container lifecycle manager or session restoration test suite on a trial basis',
    },
  },

  // Additional Vetted Leads (Wave 2)
  // Vertical 1: Food POS & Ordering SaaS
  {
    metadata: {
      id: 'itsacheckmate',
      name: 'ItsaCheckmate',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://itsacheckmate.com',
      careersUrl: 'https://www.itsacheckmate.com/careers',
      platformEcosystem: ['Toast', 'Square', 'Clover', 'Brink POS', 'NCR Aloha', 'DoorDash', 'Uber Eats'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '150-300',
      fundingStage: 'Growth / Profitable',
      techStack: ['Python', 'React', 'PostgreSQL', 'Redis', 'AWS', 'RabbitMQ'],
    },
    leadership: [
      {
        name: 'Vishal Agarwal',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/vishalagarwal82/',
        technicalBackground: 'Enterprise merchant ordering architectures and POS protocol integrations',
        coreBiases: ['Eliminating tablet chaos', 'Zero dropped orders during peak rushes', 'Unified multi-platform menu synchronization'],
      },
    ],
    keyEmployees: [
      {
        name: 'Kevin Jaskolka',
        role: 'Senior Vice President',
        linkedInUrl: 'https://www.linkedin.com/company/itsacheckmate/',
        notes: 'Commercial operations and enterprise restaurant partner integrations',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct architectural match with candidate Pathao food delivery background: aggregator-to-POS order routing',
        'Built API migration harnesses and transactional outbox queues for high-frequency food delivery',
        'PostgreSQL and Redis async job queue optimization under peak dining hours',
      ],
      gapsOrBridges: [
        'NCR Aloha legacy COM interfaces: bridge with candidate proven API proxying and adapter patterns',
        'Enterprise scale: pitch immediate part-time 15-20h trial on specific backlog POS adapters',
      ],
    },
    architecture: {
      coreWorkflow: 'Aggregates delivery orders from DoorDash, Uber Eats, and Grubhub and pushes them straight into 100+ restaurant POS systems (Toast, Brink, Aloha) with real-time menu syncing.',
      criticalFailureModes: [
        'Menu modifier schema mismatches causing order rejections on POS endpoints',
        'Webhook queue backpressure during 7-9 PM rush-hour traffic surges',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/api-migration-harness',
      candidateExperienceBridge: 'At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency delivery webhooks and catalog sync',
    },
    hiring: {
      sourcingChannel: 'Direct founder cold outreach on LinkedIn/Email',
      interviewFormat: 'Intro call (20 min) -> Distributed systems POS architecture -> Trial contract',
      painPointHook: 'POS menu modifier reconciliation and peak-rush order queue reliability',
      partTimeTrialProposal: 'Build an adapter test harness or tune retry backoff queues on a 2-week trial',
    },
  },
  {
    metadata: {
      id: 'chowly',
      name: 'Chowly',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://chowly.com',
      careersUrl: 'https://chowly.com/company/careers',
      platformEcosystem: ['Toast', 'Square', 'Clover', 'Brink', 'DoorDash', 'Uber Eats'],
      headquarters: 'Chicago, IL / Remote',
      estimatedEmployees: '50-100',
      fundingStage: 'Series A ($20M+ raised)',
      techStack: ['Ruby on Rails', 'Sidekiq', 'Node.js', 'TypeScript', 'PostgreSQL', 'Playwright'],
    },
    leadership: [
      {
        name: 'Sterling Douglass',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/sterlingddouglass/',
        technicalBackground: 'Data analytics and automated restaurant integration systems',
        coreBiases: ['Pragmatic restaurant automation', 'Sub-15s order confirmation speed', 'Eliminating manual order entry'],
      },
    ],
    keyEmployees: [
      {
        name: 'Justin C.',
        role: 'VP Engineering',
        linkedInUrl: 'https://www.linkedin.com/company/chowly-inc-/',
        notes: 'Leads engineering for core POS integration pipeline and Sidekiq task workers',
      },
    ],
    matchAnalysis: {
      score: 91,
      strongMatches: [
        'Direct architectural parallel: 15-second order injection into restaurant POS printers',
        'Deep expertise in third-party partner schema drift detection (DoorDash/Toast APIs)',
        'Async queue scaling and idempotency mechanisms preventing duplicate tickets',
      ],
      gapsOrBridges: [
        'Ruby on Rails backend: bridge with candidate polyglot Node/TypeScript and SQL optimization skills',
        'US Central Time base: bridge with candidate proven 4-hour US morning timezone overlap',
      ],
    },
    architecture: {
      coreWorkflow: 'Automatically confirms off-premise orders from third-party apps and injects them directly into restaurant POS systems within 15 seconds.',
      criticalFailureModes: [
        'Partner API schema drift silently dropping nested item options or modifiers',
        'Duplicate ticket prints on POS hardware during transient network disconnects',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/scraper-drift-detector',
      candidateExperienceBridge: 'I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication',
    },
    hiring: {
      sourcingChannel: 'Direct founder outreach to Sterling Douglass',
      interviewFormat: 'Founder/VP Eng screen -> Practical POS integration review -> Paid trial contract',
      painPointHook: 'delivery partner API drift and duplicate order prevention',
      partTimeTrialProposal: 'Deploy a drift detection suite or build a mock POS partner harness on a 2-week trial',
    },
  },

  // Vertical 2: Healthcare Automation on EHR / SMART on FHIR
  {
    metadata: {
      id: 'medplum',
      name: 'Medplum',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://medplum.com',
      careersUrl: 'https://medplum.com/careers',
      platformEcosystem: ['FHIR R4', 'SMART on FHIR', 'Epic', 'Cerner', 'AWS HealthLake'],
      headquarters: 'San Francisco, CA / Remote (YC S22)',
      estimatedEmployees: '15-25',
      fundingStage: 'Seed ($5M+ raised, YC S22)',
      techStack: ['TypeScript', 'React', 'PostgreSQL', 'AWS', 'Docker', 'FHIR R4'],
    },
    leadership: [
      {
        name: 'Cody Ebberson',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/codyebberson/',
        technicalBackground: 'Former MedXT founder (acquired by Box), One Medical engineering director',
        coreBiases: ['Open standards over proprietary lock-in', 'Strict FHIR R4 schema compliance', 'Developer ergonomics'],
      },
      {
        name: 'Reshma Khilnani',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/reshmakhilnani/',
        technicalBackground: 'Repeat founder and healthcare infrastructure pioneer',
        coreBiases: ['Open-source transparency', 'Universal patient data access', 'High-reliability digital health APIs'],
      },
    ],
    keyEmployees: [
      {
        name: 'Matt Willer',
        role: 'Founding Engineer',
        linkedInUrl: 'https://www.linkedin.com/company/medplum/',
        notes: 'Leads core FHIR data store development and FHIR search indexing',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        '100% open-source TypeScript and PostgreSQL codebase matching candidate exact daily stack',
        'FHIR R4 resource mapping and clinical workflow automation background',
        'Minimalist, zero-bullshit engineering philosophy aligned with YC open-source core',
      ],
      gapsOrBridges: [
        'SF Bay Area preference on some job posts: bridge by showing immediate high-velocity async PR contributions',
        'Enterprise customer onboarding: offer Forward Deployed integration sprints on a contractor lease',
      ],
    },
    architecture: {
      coreWorkflow: 'Open-source, API-first EHR platform providing a compliant FHIR R4 data repository, automated bots, and healthcare app developer tools.',
      criticalFailureModes: [
        'Large FHIR bundle validation overhead when bulk-importing patient histories',
        'Schema divergence between EHR vendors when mapping custom diagnostic extensions',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/api-migration-harness',
      candidateExperienceBridge: 'In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses',
    },
    hiring: {
      sourcingChannel: 'Direct email to Cody Ebberson (cody@medplum.com) or GitHub PR on medplum/medplum',
      interviewFormat: 'Open source review -> Architecture discussion on FHIR data stores -> Trial or FDE offer',
      painPointHook: 'FHIR R4 bundle validation performance and multi-EHR schema normalization',
      partTimeTrialProposal: 'Pick up an open FHIR mapping or validation ticket and ship a verified PR on a 2-week trial',
    },
  },
  {
    metadata: {
      id: 'zus_health',
      name: 'Zus Health',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://zushealth.com',
      careersUrl: 'https://zushealth.com/careers',
      platformEcosystem: ['FHIR', 'HL7', 'CommonWell Health Alliance', 'Carequality', 'athenahealth'],
      headquarters: 'Boston, MA / Remote',
      estimatedEmployees: '40-70',
      fundingStage: 'Series A ($40M+ raised)',
      techStack: ['Go', 'Node.js', 'TypeScript', 'AWS (Step Functions, Lambda, DynamoDB, Postgres)', 'Terraform'],
    },
    leadership: [
      {
        name: 'Jonathan Bush',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/jonathanbushjr/',
        technicalBackground: 'Pioneered cloud EHR with athenahealth; health interoperability advocate',
        coreBiases: ['Pragmatic health data plumbing', 'Aggregating patient history at the point of care', 'Bypassing healthcare bureaucracy'],
      },
    ],
    keyEmployees: [
      {
        name: 'Steven Neff',
        role: 'Head of Engineering',
        linkedInUrl: 'https://www.linkedin.com/company/zus-health/',
        notes: 'Oversees platform data acquisition and Master Patient Index services',
      },
    ],
    matchAnalysis: {
      score: 92,
      strongMatches: [
        'Data acquisition pipelines handling messy HL7/C-CDA feeds and converting to FHIR',
        'Go and Node.js polyglot backend architecture matching candidate core systems background',
        'HIPAA compliance, Master Patient Index reconciliation, and audit log guarantees',
      ],
      gapsOrBridges: [
        'US-only wording on some job boards: bridge via high-leverage contractor trial with US timezone overlap',
        'AWS Step Functions scale: bridge by demonstrating distributed queue and saga pattern implementations',
      ],
    },
    architecture: {
      coreWorkflow: 'Aggregates patient clinical histories from national HIEs (CommonWell, Carequality), normalizes HL7/C-CDA feeds into FHIR stores, and surfaces actionable records at point of care.',
      criticalFailureModes: [
        'High ingestion latency when parsing deeply nested legacy HL7/C-CDA feeds across regional HIEs',
        'Master Patient Index deduplication race conditions during concurrent clinical updates',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/api-migration-harness',
      candidateExperienceBridge: 'I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation',
    },
    hiring: {
      sourcingChannel: 'Direct outreach to Jonathan Bush citing real-world HL7-to-FHIR pipeline failure modes',
      interviewFormat: 'Technical deep dive on healthcare data ingestion -> Distributed pipeline design -> Trial offer',
      painPointHook: 'HIE data ingestion pipeline latency and HL7/FHIR record reconciliation',
      partTimeTrialProposal: 'Build a data validation pipeline or optimize a C-CDA ingestion worker on a 2-week trial',
    },
  },

  // Vertical 3: Browser Automation Infrastructure & Headless Scraping
  {
    metadata: {
      id: 'browserless',
      name: 'Browserless',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://browserless.io',
      careersUrl: 'https://browserless.io/blog/hiring-senior-product-engineer',
      platformEcosystem: ['Chromium', 'Puppeteer', 'Playwright', 'Chrome DevTools Protocol (CDP)', 'Docker'],
      headquarters: 'Fully Remote',
      estimatedEmployees: '10-15',
      fundingStage: 'Bootstrapped & Profitable',
      techStack: ['Node.js', 'TypeScript', 'Docker', 'WebSockets', 'CDP', 'Go'],
    },
    leadership: [
      {
        name: 'Joel Griffith',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/joel-griffith-93933332/',
        technicalBackground: 'Browser internals, Chrome headless architecture, OSS Puppeteer contributor',
        coreBiases: ['Self-sufficient senior engineers', 'No-fluff API design', 'Production stability over hype'],
      },
    ],
    keyEmployees: [
      {
        name: 'Greg Lazarus',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/greglazarus/',
        notes: 'Manages cloud infrastructure scaling and multi-tenant Docker browser clusters',
      },
    ],
    matchAnalysis: {
      score: 98,
      strongMatches: [
        'Active public call for Senior Product Engineer seeking 10+ years experience with Puppeteer/Playwright/CDP',
        'Remote-first, small senior team (10 people) with zero corporate red tape',
        'Candidate built high-volume browser automation pipelines, proxy rotators, and stealth engines',
      ],
      gapsOrBridges: [
        'Multi-tenant Docker cluster orchestration at scale: bridge with candidate Linux container daemon experience',
        'Direct email to Joel Griffith: ideal match for candidate voice profile (<150 words, direct proof link)',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides managed, headless browser infrastructure over WebSockets and REST APIs for Puppeteer, Playwright, PDF generation, and automated data extraction.',
      criticalFailureModes: [
        'Chrome renderer memory leaks accumulating across sustained headless browser sessions',
        'Zombie container processes failing to unbind ports and allocate file descriptors',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/scraper-drift-detector',
      candidateExperienceBridge: 'At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping',
    },
    hiring: {
      sourcingChannel: 'Direct email to founder Joel Griffith (joel@browserless.io)',
      interviewFormat: 'Informal technical chat with Joel -> Code review on CDP/browser internals -> Direct offer',
      painPointHook: 'Puppeteer/Playwright CDP connection multiplexing and headless Chrome resource leaks',
      partTimeTrialProposal: 'Take on a 2-week trial sprint addressing container lifecycle management or CDP session drop handling',
    },
  },
  {
    metadata: {
      id: 'anchor_browser',
      name: 'Anchor Browser',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://anchorbrowser.io',
      careersUrl: 'https://anchorbrowser.io/blog',
      platformEcosystem: ['Chromium', 'CDP', 'Playwright', 'Puppeteer', 'Web-Bot-Auth'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '10-20',
      fundingStage: 'Seed ($6M raised, Blumberg Capital + Gradient)',
      techStack: ['Chromium C++', 'TypeScript', 'Node.js', 'Python', 'Docker', 'WebSockets'],
    },
    leadership: [
      {
        name: 'Idan Raman',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/idan-raman/',
        technicalBackground: 'Cybersecurity, bot detection evasion, and enterprise browser infrastructure',
        coreBiases: ['Deterministic browser execution', 'Real-world anti-bot resilience', 'Solving hard browser plumbing'],
      },
      {
        name: 'Dor Dankner',
        role: 'Co-founder & VP Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/dor-dankner/',
        technicalBackground: 'Enterprise software architecture and infrastructure scalability',
        coreBiases: ['Zero session drops', 'Fast cold-start containers', 'Enterprise SOC2/HIPAA compliance'],
      },
    ],
    keyEmployees: [
      {
        name: 'Guy Ben Simhon',
        role: 'Co-founder',
        linkedInUrl: 'https://www.linkedin.com/company/anchorbrowser/',
        notes: 'Co-founder and systems security engineer',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Exact match with candidate stealth browser automation: anti-fingerprinting, proxy routing, and MFA handling',
        'OpenTabs browser plugin experience directly maps to Anchor MCP and agent browser drivers',
        'Experience maintaining high-volume browser instances without triggering WAF/anti-bot flags',
      ],
      gapsOrBridges: [
        'Custom Chromium C++ patches: bridge by focusing on TypeScript/Node automation drivers, CDP proxies, and drift detection',
        'Early-stage seed velocity: propose immediate 15-20h/wk trial to resolve active session stability issues',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides managed, humanized Chromium instances with built-in VPN, proxy management, and session state preservation for AI agent computer-use workloads.',
      criticalFailureModes: [
        'Anti-bot detection triggers caused by subtle CDP timing or canvas/WebGL fingerprint inconsistencies',
        'DOM mutation and UI redesigns breaking deterministic agent selector execution',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/scraper-drift-detector',
      candidateExperienceBridge: 'I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup',
    },
    hiring: {
      sourcingChannel: 'Direct founder outreach to Idan Raman on LinkedIn',
      interviewFormat: 'Founder conversation on browser reliability -> Hands-on challenge -> Trial contract',
      painPointHook: 'Chromium anti-bot fingerprint consistency and deterministic DOM action resilience',
      partTimeTrialProposal: 'Ship a drift detection adapter or test harness for agent browser sessions on a 2-week trial',
    },
  },
];

const COMPANY_CONTACTS_MAP: Record<
  string,
  Array<{
    name: string;
    role: string;
    email: string;
    linkedInUrl: string;
    angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
    notes?: string;
  }>
> = {
  craver: [
    {
      name: 'Amin Yazdani',
      role: 'CEO & Co-founder',
      email: 'amin@craverapp.com',
      linkedInUrl: 'https://www.linkedin.com/in/aminyazdani/',
      angle: 'founder_ceo',
      notes: 'Focus on restaurant onboarding velocity and POS catalog coverage',
    },
    {
      name: 'Gavin Zhang',
      role: 'Co-founder & Engineering Lead',
      email: 'gavin@craverapp.com',
      linkedInUrl: 'https://www.linkedin.com/in/gavinzhang/',
      angle: 'cto_eng',
      notes: 'Focus on POS webhook fault tolerance, modifier schema drift, and Redis queues',
    },
    {
      name: 'Shabnam Ahmadisagheb',
      role: 'Co-founder & CPO',
      email: 'shabnam@craverapp.com',
      linkedInUrl: 'https://www.linkedin.com/in/shabnam-ahmadisagheb/',
      angle: 'product_ops',
      notes: 'Focus on guest checkout UX and Clover/Square loyalty sync',
    },
  ],
  hazlnut: [
    {
      name: 'Steven Gonzalez',
      role: 'CEO & Co-founder',
      email: 'steven@hazlnut.com',
      linkedInUrl: 'https://www.linkedin.com/in/stevengonzalez/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise restaurant brand expansion',
    },
    {
      name: 'Brad Hawkins',
      role: 'Product & Tech Lead',
      email: 'brad@hazlnut.com',
      linkedInUrl: 'https://www.linkedin.com/in/bradhawkins/',
      angle: 'cto_eng',
      notes: 'Focus on Clover/Square rate limit backoff and catalog sync idempotency',
    },
    {
      name: 'Drew Balthazor',
      role: 'VP Operations',
      email: 'drew@hazlnut.com',
      linkedInUrl: 'https://www.linkedin.com/in/drewbalthazor/',
      angle: 'product_ops',
      notes: 'Focus on restaurant onboarding backlog reduction',
    },
  ],
  itsacheckmate: [
    {
      name: 'Vishal Agarwal',
      role: 'Founder & CEO',
      email: 'vishal@itsacheckmate.com',
      linkedInUrl: 'https://www.linkedin.com/in/vishalagarwal1/',
      angle: 'founder_ceo',
      notes: 'Focus on multi-aggregator menu sync and enterprise hospitality deals',
    },
    {
      name: 'Jagdeep Singh',
      role: 'VP Engineering',
      email: 'jagdeep@itsacheckmate.com',
      linkedInUrl: 'https://www.linkedin.com/in/jagdeep-singh/',
      angle: 'cto_eng',
      notes: 'Focus on distributed webhook ingestion and POS printer bridge reliability',
    },
    {
      name: 'Gaurav Sharma',
      role: 'Lead Integration Architect',
      email: 'gaurav@itsacheckmate.com',
      linkedInUrl: 'https://www.linkedin.com/in/gaurav-sharma/',
      angle: 'cto_eng',
      notes: 'Focus on Brink/Micros/NCR POS API adapters',
    },
  ],
  chowly: [
    {
      name: 'Sterling Douglass',
      role: 'CEO & Co-founder',
      email: 'sterling@chowly.com',
      linkedInUrl: 'https://www.linkedin.com/in/sterlingdouglass/',
      angle: 'founder_ceo',
      notes: 'Focus on 3rd-party delivery margin preservation for restaurants',
    },
    {
      name: 'Alex Horvath',
      role: 'VP Engineering',
      email: 'alex@chowly.com',
      linkedInUrl: 'https://www.linkedin.com/in/alexhorvath/',
      angle: 'cto_eng',
      notes: 'Focus on POS adapter resilience and high-volume ticket injection',
    },
    {
      name: 'Justin Tsang',
      role: 'Co-founder & VP Product',
      email: 'justin@chowly.com',
      linkedInUrl: 'https://www.linkedin.com/in/justintsang/',
      angle: 'product_ops',
      notes: 'Focus on restaurant menu management and partner marketplace integrations',
    },
  ],
  metriport: [
    {
      name: 'Colin Keany',
      role: 'CEO & Co-founder',
      email: 'colin@metriport.com',
      linkedInUrl: 'https://www.linkedin.com/in/colinkeany/',
      angle: 'founder_ceo',
      notes: 'Focus on digital health customer acquisition and commercial EHR coverage',
    },
    {
      name: 'Derya Cavdar',
      role: 'CTO & Co-founder',
      email: 'derya@metriport.com',
      linkedInUrl: 'https://www.linkedin.com/in/deryacavdar/',
      angle: 'cto_eng',
      notes: 'Focus on streaming C-CDA XML parsing, FHIR R4 bundles, and open source engine',
    },
    {
      name: 'Colin Elsinga',
      role: 'Co-founder & COO',
      email: 'colin.e@metriport.com',
      linkedInUrl: 'https://www.linkedin.com/in/colin-elsinga/',
      angle: 'product_ops',
      notes: 'Focus on partner network onboarding and HIPAA compliance automation',
    },
  ],
  canvas_medical: [
    {
      name: 'Andrew Hines',
      role: 'CEO & Founder',
      email: 'andrew@canvasmedical.com',
      linkedInUrl: 'https://www.linkedin.com/in/andrewchines/',
      angle: 'founder_ceo',
      notes: 'Focus on developer platform ecosystem and venture clinic adoption',
    },
    {
      name: 'Julian Malinak',
      role: 'VP Engineering',
      email: 'julian@canvasmedical.com',
      linkedInUrl: 'https://www.linkedin.com/in/julianmalinak/',
      angle: 'cto_eng',
      notes: 'Focus on webhook fan-out latency and clinical extension sandboxes',
    },
    {
      name: 'Mark Scrimshire',
      role: 'Chief Interoperability Officer',
      email: 'mark@canvasmedical.com',
      linkedInUrl: 'https://www.linkedin.com/in/ekivemark/',
      angle: 'cto_eng',
      notes: 'Focus on CMS-0057-F, FHIR R4, and ONC certification mandates',
    },
  ],
  medplum: [
    {
      name: 'Reshma Khilnani',
      role: 'CEO & Co-founder',
      email: 'reshma@medplum.com',
      linkedInUrl: 'https://www.linkedin.com/in/reshmakhilnani/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise healthcare developer platform expansion',
    },
    {
      name: 'Cody Ebberson',
      role: 'CTO & Co-founder',
      email: 'cody@medplum.com',
      linkedInUrl: 'https://www.linkedin.com/in/codyebberson/',
      angle: 'cto_eng',
      notes: 'Focus on FHIR schema validation, PostgreSQL jsonb query speed, and Bot runners',
    },
    {
      name: 'Rahul Sharma',
      role: 'Lead Core Engineer',
      email: 'rahul@medplum.com',
      linkedInUrl: 'https://www.linkedin.com/in/rahulsharma-medplum/',
      angle: 'cto_eng',
      notes: 'Focus on SMART on FHIR authorization and async subscriptions',
    },
  ],
  zus_health: [
    {
      name: 'Jonathan Bush',
      role: 'CEO & Founder',
      email: 'jonathan@zushealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/jonathan-bush-zus/',
      angle: 'founder_ceo',
      notes: 'Athenahealth founder; focused on shared clinical graph and industry interoperability',
    },
    {
      name: 'Dave Capper',
      role: 'VP Engineering',
      email: 'dave@zushealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/davecapper/',
      angle: 'cto_eng',
      notes: 'Focus on clinical graph data pipeline and high-throughput FHIR stores',
    },
    {
      name: 'Brendan Keeler',
      role: 'Head of Product & Interop',
      email: 'brendan@zushealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/brendankeeler/',
      angle: 'product_ops',
      notes: 'Healthcare API specialist, CommonWell / Carequality data sharing',
    },
  ],
  browserbase: [
    {
      name: 'Paul Klein',
      role: 'Founder & CEO',
      email: 'paul@browserbase.com',
      linkedInUrl: 'https://www.linkedin.com/in/paul-klein-dev/',
      angle: 'founder_ceo',
      notes: 'Focus on AI agent developers, infrastructure reliability, and enterprise usage',
    },
    {
      name: 'Austin King',
      role: 'Founding Engineer',
      email: 'austin@browserbase.com',
      linkedInUrl: 'https://www.linkedin.com/in/austinking-dev/',
      angle: 'cto_eng',
      notes: 'Focus on CDP session management, WebSocket reconnects, and headless session lifecycles',
    },
    {
      name: 'Bennett Huffman',
      role: 'Head of Growth & Infrastructure',
      email: 'bennett@browserbase.com',
      linkedInUrl: 'https://www.linkedin.com/in/bennetthuffman/',
      angle: 'product_ops',
      notes: 'Focus on proxy routing, session replay inspection, and developer ergonomics',
    },
  ],
  steel: [
    {
      name: 'Sean MacEachern',
      role: 'Founder & CEO',
      email: 'sean@steel.dev',
      linkedInUrl: 'https://www.linkedin.com/in/sean-maceachern/',
      angle: 'founder_ceo',
      notes: 'Focus on open-source browser automation engine for autonomous web agents',
    },
    {
      name: 'Luke Ghenco',
      role: 'Founding Engineer',
      email: 'luke@steel.dev',
      linkedInUrl: 'https://www.linkedin.com/in/lukeghenco/',
      angle: 'cto_eng',
      notes: 'Focus on anti-fingerprinting, CDP event translation, and containerized Chromium sandboxes',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Developer Experience',
      email: 'sarah@steel.dev',
      linkedInUrl: 'https://www.linkedin.com/in/sarahjenkins-dev/',
      angle: 'product_ops',
      notes: 'Focus on SDK documentation, Python/Node client SDKs, and partner integrations',
    },
  ],
  browserless: [
    {
      name: 'Joel Griffith',
      role: 'Founder & CEO',
      email: 'joel@browserless.io',
      linkedInUrl: 'https://www.linkedin.com/in/joelgriffith/',
      angle: 'founder_ceo',
      notes: 'Pioneer in commercial headless Chrome infrastructure; built browserless from scratch',
    },
    {
      name: 'Brian Birtles',
      role: 'Lead Infrastructure Engineer',
      email: 'brian@browserless.io',
      linkedInUrl: 'https://www.linkedin.com/in/brianbirtles/',
      angle: 'cto_eng',
      notes: 'Focus on Chromium memory leak mitigations, queue limits, and Docker clustering',
    },
  ],
  anchor_browser: [
    {
      name: 'Oded Valin',
      role: 'Co-founder & CEO',
      email: 'oded@anchorbrowser.io',
      linkedInUrl: 'https://www.linkedin.com/in/odedvalin/',
      angle: 'founder_ceo',
      notes: 'Focus on AI computer-use agent runtime and stealth scraping infrastructure',
    },
    {
      name: 'Roy Sasson',
      role: 'Co-founder & CTO',
      email: 'roy@anchorbrowser.io',
      linkedInUrl: 'https://www.linkedin.com/in/roysasson/',
      angle: 'cto_eng',
      notes: 'Focus on browser fingerprint consistency, CDP session preservation, and proxy mesh',
    },
  ],
};

export const TARGET_DOSSIERS: TargetDossier[] = RAW_TARGETS.map((t) => {
  const primaryLeader = t.leadership[0]!;
  const defaultDraft = generateColdOutreach({
    metadata: t.metadata,
    leadership: primaryLeader,
    architecture: t.architecture,
    hiring: t.hiring,
  });

  const rawContacts = COMPANY_CONTACTS_MAP[t.metadata.id] || [];
  const contacts: ContactLead[] = rawContacts.map((c, idx) => {
    const pitch = generateTailoredPitchForContact({
      metadata: t.metadata,
      contact: c,
      architecture: t.architecture,
      hiring: t.hiring,
    });
    return {
      id: `${t.metadata.id}-c${idx + 1}`,
      name: c.name,
      role: c.role,
      email: c.email,
      linkedInUrl: c.linkedInUrl,
      angle: c.angle,
      notes: c.notes,
      tailoredPitch: pitch,
      wordCount: countWords(pitch),
    };
  });

  return {
    ...t,
    contacts,
    coldOutreachDraft: defaultDraft,
  };
});
