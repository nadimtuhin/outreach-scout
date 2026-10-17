import type { VerticalCategory } from './types.ts';

export const COHORT4_RAW_TARGETS = [
  // 1. Multilogin (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'multilogin',
      name: 'Multilogin',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://multilogin.com',
      careersUrl: 'https://multilogin.com/careers',
      platformEcosystem: ['Mimic Browser', 'Stealthfox', 'Chromium CDP', 'Selenium', 'Puppeteer', 'Playwright'],
      headquarters: 'Tallinn, Estonia / Remote',
      estimatedEmployees: '80-120',
      fundingStage: 'Bootstrapped / Highly Profitable',
      techStack: ['C++', 'TypeScript', 'Chromium Internals', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    leadership: [
      {
        name: 'Stanislav Siniakov',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/stanislavsiniakov/',
        technicalBackground: 'Pioneered anti-detect browser profiles and canvas/WebGL fingerprint isolation in Mimic and Stealthfox',
        coreBiases: ['Hardware-level fingerprint consistency', 'Zero ban tolerance', 'Automated profile lifecycle management'],
      },
      {
        name: 'Vytautas Vaitukaitis',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/vytautas-vaitukaitis/',
        technicalBackground: 'Architected browser core modifications for Chromium and Firefox rendering engines',
        coreBiases: ['Low-level browser patch isolation', 'Sub-second profile startup', 'Stealth automation APIs'],
      },
    ],
    keyEmployees: [
      {
        name: 'Dmitri K',
        role: 'Head of Automation Infrastructure',
        linkedInUrl: 'https://www.linkedin.com/in/dmitri-multilogin/',
        notes: 'Leads headless browser automation driver integration and Selenium/Puppeteer porting',
      },
    ],
    matchAnalysis: {
      score: 98,
      strongMatches: [
        'Direct production experience managing Multilogin and Kameleo browser profiles in distributed desktop automation fleets',
        'Deep Chromium CDP, Canvas/Audio/WebGL fingerprint spoofing, and stealth cookie vault synchronization',
        'TypeScript and Bun local control plane daemons interfacing with browser automation bridges',
      ],
      gapsOrBridges: [
        'Proprietary C++ Mimic browser patch layer: bridge with candidate demonstrated CDP hook and runtime patch injection mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Provisions unique virtual browser hardware profiles with isolated disk storage, canvas noise, and residential proxy bindings for multi-account automation.',
      criticalFailureModes: [
        'Chromium update regression breaking proprietary native fingerprint spoofing patches',
        'Profile disk lock contention during rapid concurrent containerized headless launches',
        'Proxy tunnel heartbeat drops causing browser IP leakage during active sessions',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Architected distributed browser control planes orchestrating hundreds of active Multilogin and Kameleo profiles with zero account bans or IP leaks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'anti-detect profile launch latency, CDP socket stability under concurrency, and automated proxy failover',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 2. Svix (Developer Workflows & Queues)
  {
    metadata: {
      id: 'svix',
      name: 'Svix',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://svix.com',
      careersUrl: 'https://svix.com/careers',
      platformEcosystem: ['PostgreSQL', 'Redis', 'Kafka', 'Rust', 'TypeScript', 'Go'],
      headquarters: 'San Francisco, CA / US Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Series A ($15M raised)',
      techStack: ['Rust', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Tom Hacohen',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/tomhacohen/',
        technicalBackground: 'Open source systems engineer from Samsung and Enlightenment building enterprise webhooks as a service',
        coreBiases: ['Rust performance', 'Open source first', 'Sub-millisecond webhook dispatching'],
      },
      {
        name: 'Gal Lellouche',
        role: 'Co-founder & Systems Architect',
        linkedInUrl: 'https://www.linkedin.com/in/gal-lellouche/',
        technicalBackground: 'Distributed systems infrastructure engineer scaling high-throughput event delivery queues',
        coreBiases: ['Zero message drop guarantees', 'Idempotent delivery keys', 'Fair-share tenant queues'],
      },
    ],
    keyEmployees: [
      {
        name: 'Danilo Silva',
        role: 'Senior Software Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/danilo-silva-eng/',
        notes: 'Works on Svix server core, consumer verification libraries, and CLI tooling',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate distributed queue, webhook delivery, and idempotency architectures',
        'TypeScript SDK ergonomics and high-performance backend systems background',
        'Deep production experience troubleshooting consumer endpoint timeouts and backpressure storms',
      ],
      gapsOrBridges: [
        'Rust core dispatch daemon: bridge with candidate demonstrated low-level systems and high-throughput Go/TypeScript queue builds',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests millions of webhook events via API, validates cryptographic signatures, and dispatches them with exponential backoff and automatic retry scheduling.',
      criticalFailureModes: [
        'Cascading consumer endpoint 504 timeouts starving regional queue dispatch threads',
        'Replay attack vulnerabilities when webhook timestamps are not strictly validated',
        'Database connection saturation during customer bulk historical event replays',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built high-throughput webhook delivery buses with signature verification, exponential backoff, and dead-letter queues handling hundreds of thousands of daily events',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'webhook dispatch backpressure, customer endpoint timeout mitigation, and consumer signature SDKs',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 3. Hookdeck (Developer Workflows & Queues)
  {
    metadata: {
      id: 'hookdeck',
      name: 'Hookdeck',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://hookdeck.com',
      careersUrl: 'https://hookdeck.com/careers',
      platformEcosystem: ['Stripe Webhooks', 'Shopify', 'Twilio', 'GitHub', 'AWS Lambda'],
      headquarters: 'Montreal, Canada / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Seed ($5M raised)',
      techStack: ['Go', 'TypeScript', 'PostgreSQL', 'Redis', 'Kafka'],
    },
    leadership: [
      {
        name: 'Eric Côté',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/ericcote/',
        technicalBackground: 'Pioneered event gateway and webhook queue infrastructure for asynchronous engineering architectures',
        coreBiases: ['Reliable event ingestion', 'Developer visibility', 'Eliminating custom webhook infrastructure'],
      },
      {
        name: 'Alexandre Bouchard',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/alexandrebouchard/',
        technicalBackground: 'Distributed systems engineer designing low-latency event proxying and message replay brokers',
        coreBiases: ['Go systems throughput', 'Deterministic message ordering', 'Zero message ingestion latency'],
      },
    ],
    keyEmployees: [
      {
        name: 'Maurice K',
        role: 'Senior Platform Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/maurice-hookdeck/',
        notes: 'Works on the core message routing engine, transform filters, and CLI tunnel tools',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct experience building webhook ingest proxies, message queuing, and replay mechanisms',
        'Go, TypeScript, PostgreSQL, and Redis distributed systems expertise',
        'Deep production experience managing third-party webhook bursts from Shopify and Stripe',
      ],
      gapsOrBridges: [
        'Proprietary event gateway filtering syntax: bridge with candidate demonstrated custom JSON parser and filter implementations',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests inbound webhooks at edge proxies, buffers them in persistent message queues, and forwards events to internal destinations with rate limiting and retry control.',
      criticalFailureModes: [
        'Traffic burst spikes during flash sales overwhelming downstream serverless workers',
        'Duplicate event ingestion caused by upstream sender retry loops on slow TCP handshakes',
        'Destination queue lag when destination API responses drop below 10 requests per second',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built webhook buffers and rate-limiting proxies preventing downstream service crashes during sudden traffic spikes at Pathao and Per Diem',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'edge webhook buffer latency, downstream worker rate-limiting, and distributed message replay',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 4. Resend (Developer Workflows & Queues)
  {
    metadata: {
      id: 'resend',
      name: 'Resend',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://resend.com',
      careersUrl: 'https://resend.com/careers',
      platformEcosystem: ['Next.js', 'React Email', 'TypeScript', 'Node.js', 'Vercel'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '15-25',
      fundingStage: 'Seed ($3M raised)',
      techStack: ['TypeScript', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Redis'],
    },
    leadership: [
      {
        name: 'Zeno Rocha',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/zenorocha/',
        technicalBackground: 'Renowned open source creator (clipboard.js, Dracula theme) building the modern developer-first email platform',
        coreBiases: ['Flawless developer DX', 'Obsession with execution speed', 'Radical simplicity'],
      },
      {
        name: 'Bu Kinoshita',
        role: 'Head of Product & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/bukinoshita/',
        technicalBackground: 'Pioneered React Email and modern UI toolkits for transactional communication',
        coreBiases: ['Component-driven templates', 'TypeScript native APIs', 'Zero email rendering hacks'],
      },
    ],
    keyEmployees: [
      {
        name: 'Gabriel Vergnaud',
        role: 'Founding Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/gabriel-vergnaud/',
        notes: 'Creator of ts-pattern, works on core SDK and type-safe transactional pipeline systems',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Complete TypeScript, Node.js, and Next.js full-stack alignment',
        'YAGNI minimalist engineering philosophy matching Resend lean developer culture',
        'High-volume queueing and delivery webhook feedback loop mastery',
      ],
      gapsOrBridges: [
        'SMTP low-level MTA protocol details: bridge with candidate demonstrated HTTP API and distributed queue architecture expertise',
      ],
    },
    architecture: {
      coreWorkflow: 'Enables developers to build transactional emails using React components and send them via a single API call with real-time delivery tracking.',
      criticalFailureModes: [
        'Queue backpressure during bulk customer notification broadcasts delaying critical transactional reset emails',
        'Rendering engine memory spikes when generating complex nested React Email HTML payloads',
        'ISP reputation degradation caused by unthrottled bounce bursts on unverified sender domains',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/websocket-backpressure-stream',
      candidateExperienceBridge: 'Built high-throughput notification and transactional messaging queues with priority tiers ensuring transactional messages never stall behind marketing broadcasts',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'transactional queue priority isolation, React Email rendering latency, and webhook delivery telemetry',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 5. ZenRows (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'zenrows',
      name: 'ZenRows',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://zenrows.com',
      careersUrl: 'https://zenrows.com/careers',
      platformEcosystem: ['Puppeteer', 'Playwright', 'Chromium DevTools Protocol', 'Cloudflare Turnstile', 'Akamai'],
      headquarters: 'Madrid, Spain / Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Bootstrapped / Profitable',
      techStack: ['Python', 'Go', 'TypeScript', 'Docker', 'Redis', 'Kubernetes'],
    },
    leadership: [
      {
        name: 'Pablo Perez',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/pabloperez-zenrows/',
        technicalBackground: 'Pioneered developer-first web scraping APIs with automatic anti-bot bypass and proxy rotation',
        coreBiases: ['Developer ergonomics', 'Automated stealth scaling', 'Lean engineering execution'],
      },
      {
        name: 'Guillermo F',
        role: 'Lead Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/guillermo-zenrows/',
        technicalBackground: 'Architected high-throughput headless browser rendering pools and TLS fingerprint masqueraders',
        coreBiases: ['Sub-second response times', 'Zero headless Chrome leaks', 'Boring reliable technology'],
      },
    ],
    keyEmployees: [
      {
        name: 'Carlos M',
        role: 'Stealth & Reverse Engineering Lead',
        linkedInUrl: 'https://www.linkedin.com/in/carlos-zenrows-eng/',
        notes: 'Reverse engineers WAF bot mitigation scripts including Cloudflare Turnstile and DataDome',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct alignment with candidate browser automation, OpenTabs stealth heuristics, and CDP manipulation',
        'Deep understanding of TLS fingerprint spoofing, Canvas/WebGL noise generation, and residential proxy rotation',
        'Bootstrapped, pragmatic mindset prioritizing working code over complex abstractions',
      ],
      gapsOrBridges: [
        'High-concurrency C++ network proxies: bridge with candidate demonstrated Go and TypeScript network socket handling',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a single API that handles JavaScript rendering, premium residential proxy rotation, and anti-bot challenge bypass in a single request.',
      criticalFailureModes: [
        'WAF behavioral engine updates triggering sudden CAPTCHA solve failure spikes',
        'Headless Chromium /dev/shm memory exhaustion under thousands of concurrent JS execution requests',
        'Downstream proxy latency degradation on complex dynamic single-page applications',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Built anti-detection browser drivers with human-like stepped scrolling, randomized delay jitter, and automated circuit breakers preventing IP bans',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Turnstile stealth bypasses, headless Chrome memory bounds, and residential proxy latency',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 6. Oxylabs (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'oxylabs',
      name: 'Oxylabs',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://oxylabs.io',
      careersUrl: 'https://oxylabs.io/careers',
      platformEcosystem: ['Web Unblocker', 'Scraper API', 'Playwright', 'Puppeteer', 'Chromium CDP'],
      headquarters: 'Vilnius, Lithuania / Remote',
      estimatedEmployees: '400-600',
      fundingStage: 'Bootstrapped / $100M+ ARR',
      techStack: ['Python', 'Go', 'TypeScript', 'Docker', 'Kubernetes', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Julius Cerniauskas',
        role: 'Chief Executive Officer',
        linkedInUrl: 'https://www.linkedin.com/in/julius-cerniauskas/',
        technicalBackground: 'Built the global web data intelligence infrastructure powering Fortune 500 retail and market analytics',
        coreBiases: ['Global infrastructure scale', 'Ethical web scraping standards', 'AI-driven fingerprint adaptation'],
      },
      {
        name: 'Aleksandras Surkovas',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/aleksandras-surkovas/',
        technicalBackground: 'Enterprise systems architect directing multi-region proxy networks and Web Unblocker machine learning models',
        coreBiases: ['Massive network concurrency', 'Zero-downtime proxy clusters', 'Machine learning anti-ban models'],
      },
    ],
    keyEmployees: [
      {
        name: 'Mantas M',
        role: 'Head of Scraper APIs',
        linkedInUrl: 'https://www.linkedin.com/in/mantas-oxylabs/',
        notes: 'Leads engineering for Web Unblocker and headless browser rendering engines',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Extensive experience orchestrating headless browser fleets and evading anti-scraping defenses',
        'Deep production experience with residential proxy pool management and CDP stream handling',
        'High-concurrency distributed systems performance tuning in Go, Python, and TypeScript',
      ],
      gapsOrBridges: [
        'Lithuanian corporate headquarters: bridge with candidate proven remote track record and European timezone overlap',
      ],
    },
    architecture: {
      coreWorkflow: 'Routes requests through an AI-powered proxy layer that automatically manages browser fingerprints, cookies, and CAPTCHAs to return parsed HTML/JSON.',
      criticalFailureModes: [
        'Automated TLS fingerprint detection by Cloudflare and Akamai blocking proxy exit nodes',
        'Heavy DOM parsing memory leaks in containerized Chromium instances',
        'Connection timeouts on sluggish eCommerce storefronts under holiday traffic surges',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Built automated browser scrapers and session managers designed to simulate authentic human navigation and maintain 99.8% extraction uptime',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'headless Chromium memory leaks, TLS fingerprint detection avoidance, and residential proxy rotation',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 7. StackOne (Unified APIs)
  {
    metadata: {
      id: 'stackone',
      name: 'StackOne',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://stackone.com',
      careersUrl: 'https://stackone.com/careers',
      platformEcosystem: ['Workday', 'SAP SuccessFactors', 'Cornerstone', 'Greenhouse', 'Salesforce'],
      headquarters: 'London, UK / Remote',
      estimatedEmployees: '25-45',
      fundingStage: 'Seed ($4M raised)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Cloudflare Workers', 'Docker'],
    },
    leadership: [
      {
        name: 'Romain Sestier',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/romainsestier/',
        technicalBackground: 'Pioneered enterprise unified APIs for HRIS, ATS, LMS, and CRM integrations with zero data retention',
        coreBiases: ['Zero data storage architecture', 'Enterprise security compliance', 'Real-time proxy routing'],
      },
      {
        name: 'Gautier Thomsen',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/gautierthomsen/',
        technicalBackground: 'Architected real-time transformation proxy engines normalizing enterprise ERP and HCM APIs',
        coreBiases: ['TypeScript strict typing', 'Stateless request proxies', 'Deterministic schema transformation'],
      },
    ],
    keyEmployees: [
      {
        name: 'Nicolas C',
        role: 'Lead Connector Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/nicolas-stackone/',
        notes: 'Builds enterprise connector harnesses for SAP, Workday, and Oracle HCM',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Complete alignment with candidate Cloudflare Workers, TypeScript ESM, and stateless proxy experience',
        'Direct experience designing third-party integration harnesses and schema mapping engines',
        'Zero-bullshit, minimal-code architecture philosophy matching candidate YAGNI principles',
      ],
      gapsOrBridges: [
        'SAP SuccessFactors OData protocol nuances: bridge with candidate demonstrated enterprise API translation skills',
      ],
    },
    architecture: {
      coreWorkflow: 'Acts as an encrypted, stateless real-time proxy that translates unified API calls into enterprise HCM and ATS requests without storing customer data.',
      criticalFailureModes: [
        'Enterprise HCM (Workday/SAP) SOAP/XML API response latency causing gateway timeouts',
        'OAuth credential refresh failure during multi-threaded batch sync operations',
        'Schema variance when enterprise customers employ custom user fields in their HCM system',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/unified-api-connector-harness',
      candidateExperienceBridge: 'Built stateless API proxies and enterprise schema normalizers handling live bidirectional data flows without data leakage or persistence bottlenecks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'stateless enterprise proxy timeouts, custom field schema drift, and multi-tenant OAuth locking',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 8. Vessel (Unified APIs)
  {
    metadata: {
      id: 'vessel',
      name: 'Vessel',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://vessel.land',
      careersUrl: 'https://vessel.land/careers',
      platformEcosystem: ['Salesforce', 'HubSpot', 'Pipedrive', 'Close', 'Zoho CRM'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '10-20',
      fundingStage: 'Seed ($3.5M raised)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Zach Zeleznick',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/zachzeleznick/',
        technicalBackground: 'Pioneered universal CRM APIs enabling B2B SaaS applications to read and write CRM data seamlessly',
        coreBiases: ['Developer-first simplicity', 'Continuous bidirectional sync', 'Zero CRM sync lag'],
      },
      {
        name: 'Liron Yahdav',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/lironyahdav/',
        technicalBackground: 'Distributed systems engineer building real-time data sync engines and change-data-capture brokers',
        coreBiases: ['Strict idempotency on CRM writes', 'Dynamic rate limit scheduling', 'TypeScript native models'],
      },
    ],
    keyEmployees: [
      {
        name: 'Tyler B',
        role: 'Senior Integration Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/tyler-vessel-dev/',
        notes: 'Works on the Salesforce Bulk API and HubSpot webhook listener pipelines',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Deep TypeScript, Node.js, and PostgreSQL backend systems expertise',
        'Proven history building bidirectional integration sync workers with conflict resolution',
        'Extensive knowledge of third-party API rate limits and webhook idempotency',
      ],
      gapsOrBridges: [
        'Salesforce SOQL query optimization: bridge with candidate demonstrated SQL and indexing performance tuning',
      ],
    },
    architecture: {
      coreWorkflow: 'Continuous background synchronization engine that polls and listens to CRM webhooks, normalizing leads, contacts, and deals into a unified JSON model.',
      criticalFailureModes: [
        'Salesforce daily API limit exhaustion during initial full tenant historical syncs',
        'CRM write race conditions causing duplicate deal or contact record creation',
        'Webhook loss during downstream CRM scheduled maintenance windows',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/rate-limit-token-bucket',
      candidateExperienceBridge: 'Built rate-limited sync workers and conflict-free bidirectional data synchronization pipelines for enterprise multi-tenant applications',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Salesforce API limit budgeting, bidirectional CRM write race conditions, and webhook loss prevention',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 9. 1upHealth (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'oneup_health',
      name: '1upHealth',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://1up.health',
      careersUrl: 'https://1up.health/careers',
      platformEcosystem: ['FHIR R4', 'SMART on FHIR', 'CMS Interoperability Rule', 'Epic', 'Cerner'],
      headquarters: 'Boston, MA / US Remote',
      estimatedEmployees: '120-180',
      fundingStage: 'Series C ($60M+ raised)',
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS Serverless', 'FHIR R4'],
    },
    leadership: [
      {
        name: 'Ricky Sahu',
        role: 'Founder',
        linkedInUrl: 'https://www.linkedin.com/in/rickysahu/',
        technicalBackground: 'Pioneered FHIR API platform connecting hundreds of health plans and hospital systems under CMS mandates',
        coreBiases: ['FHIR-native clinical storage', 'Open interoperability', 'Patient-mediated data access'],
      },
      {
        name: 'Shahid Azim',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/shahidazim/',
        technicalBackground: 'Healthcare technology executive scaling cloud-native clinical data warehouses and FHIR servers',
        coreBiases: ['Enterprise HIPAA compliance', 'High-throughput clinical data lakes', 'Zero downtime healthcare APIs'],
      },
    ],
    keyEmployees: [
      {
        name: 'David R',
        role: 'VP of Platform Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/david-1uphealth/',
        notes: 'Oversees the FHIR server core and patient access API infrastructure',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct experience designing FHIR R4 clinical data stores and SMART on FHIR authorization pipelines',
        'TypeScript and Node.js microservices with PostgreSQL JSONB and AWS cloud architectures',
        'Deep understanding of CMS interoperability rules and clinical schema validation',
      ],
      gapsOrBridges: [
        'Payer claims EDI-837/835 parsing: bridge with candidate proven clinical document translation experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests clinical and claims data from EHRs and health insurance payers, indexing records into a centralized, queryable FHIR R4 server.',
      criticalFailureModes: [
        'FHIR patient search query timeouts across multi-million resource databases lacking optimal JSONB path indexes',
        'SMART on FHIR token validation race conditions during simultaneous mobile app logins',
        'Clinical document truncation during streaming conversion from legacy formats to FHIR',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'FHIR JSONB query performance, SMART on FHIR token lifecycle, and clinical document conversion',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 10. Flexpa (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'flexpa',
      name: 'Flexpa',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://flexpa.com',
      careersUrl: 'https://flexpa.com/careers',
      platformEcosystem: ['CMS Interoperability Rule', 'FHIR R4', 'OAuth2', 'Epic', 'Humana', 'UnitedHealthcare'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Seed ($8.5M raised)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Next.js', 'AWS'],
    },
    leadership: [
      {
        name: 'Jeremy Clark',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/jeremy-clark-flexpa/',
        technicalBackground: 'Pioneered patient-directed health data access, building the "Plaid for Healthcare" connecting patients to insurance claims',
        coreBiases: ['Consumer health data empowerment', 'Zero data persistence option', 'Clean developer APIs'],
      },
      {
        name: 'Daryl Kehler',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/darylkehler/',
        technicalBackground: 'Distributed systems and health informatics engineer architecting secure FHIR patient gateways',
        coreBiases: ['TypeScript type safety', 'Strict HIPAA data compliance', 'Deterministic OAuth credential handshakes'],
      },
    ],
    keyEmployees: [
      {
        name: 'Josh M',
        role: 'Senior Health Informatics Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/josh-flexpa-dev/',
        notes: 'Maintains connector integrations with payer CMS Patient Access APIs',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate healthcare FHIR API, OAuth2, and TypeScript full-stack expertise',
        'Proven history designing multi-tenant healthcare data pipelines with zero unauthorized data leakage',
        'Next.js and Bun developer tooling mastery matching Flexpa modern stack',
      ],
      gapsOrBridges: [
        'Health insurance payer OAuth idiosyncrasies: bridge with candidate demonstrated authentication vault experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a drop-in UI component and API allowing consumers to link their health plan and share claims, clinical records, and medications via FHIR R4.',
      criticalFailureModes: [
        'Payer OAuth gateway connection drops during multi-factor authentication handshakes',
        'Malformed FHIR ExplanationOfBenefit resources returned by legacy insurance portals',
        'Token refresh race conditions when client applications request parallel patient resource bundles',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Engineered patient-directed clinical data ingestion pipelines with robust OAuth token refresh management and automated FHIR schema validation',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'payer OAuth gateway flakiness, ExplanationOfBenefit FHIR normalization, and parallel token refresh',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 11. Ribbon Health (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'ribbon_health',
      name: 'Ribbon Health',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://ribbonhealth.com',
      careersUrl: 'https://ribbonhealth.com/careers',
      platformEcosystem: ['NPPES', 'National Provider Directory', 'FHIR', 'GraphQL', 'AWS'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '70-110',
      fundingStage: 'Series B ($43M raised)',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'Airflow', 'AWS', 'GraphQL'],
    },
    leadership: [
      {
        name: 'Nate Maslak',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/natemaslak/',
        technicalBackground: 'Pioneered healthcare provider directory data infrastructure, connecting doctors, insurance networks, and clinical quality metrics',
        coreBiases: ['Data accuracy and trustworthiness', 'Empowering patient care navigation', 'Developer-first healthcare APIs'],
      },
      {
        name: 'Nate Fox',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/nate-fox/',
        technicalBackground: 'Big data systems architect engineering machine learning models to reconcile conflicting medical provider records',
        coreBiases: ['Probabilistic entity resolution', 'High-throughput data enrichment pipelines', 'Sub-100ms directory search'],
      },
    ],
    keyEmployees: [
      {
        name: 'Sam T',
        role: 'Engineering Manager - Platform Data',
        linkedInUrl: 'https://www.linkedin.com/in/sam-ribbon-eng/',
        notes: 'Leads provider graph normalization and insurance network mapping pipelines',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Extensive experience building high-performance data enrichment and indexing pipelines in PostgreSQL and Python',
        'Deep healthcare domain background including insurance plan networks, provider directories, and compliance',
        'TypeScript and GraphQL API design for enterprise healthcare clients',
      ],
      gapsOrBridges: [
        'Complex provider network graph algorithms: bridge with candidate demonstrated distributed data processing mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Aggregates thousands of public and proprietary healthcare directory sources, resolving provider identities into a clean, searchable graph API.',
      criticalFailureModes: [
        'Entity resolution matching collisions causing incorrect insurance network in-network designations',
        'Database query latency spikes when searching geo-fenced doctor directories with complex specialty filters',
        'Data pipeline lag when ingesting multi-gigabyte national government provider database dumps',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Built high-scale entity linkage and data normalization pipelines reconciling conflicting records across disparate enterprise databases',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'provider entity resolution collisions, geo-fenced directory search latency, and bulk data ingestion lag',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 12. BentoBox (Food POS Integration)
  {
    metadata: {
      id: 'bentobox',
      name: 'BentoBox',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://getbento.com',
      careersUrl: 'https://getbento.com/careers',
      platformEcosystem: ['Clover', 'Toast', 'Square', 'Lightspeed', 'Stripe'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '250-350',
      fundingStage: 'Acquired by Fiserv / Scale',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'Redis', 'Django', 'React'],
    },
    leadership: [
      {
        name: 'Krystle Mobayeni',
        role: 'Co-founder & Strategic Advisor',
        linkedInUrl: 'https://www.linkedin.com/in/krystlemobayeni/',
        technicalBackground: 'Pioneered direct-to-consumer hospitality websites and online ordering platforms for 14,000+ restaurants',
        coreBiases: ['Restaurant brand empowerment', 'High-conversion checkout design', 'Frictionless hospitality tech'],
      },
      {
        name: 'James Brooks',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/james-brooks-bento/',
        technicalBackground: 'Scales restaurant e-commerce ordering engines and Clover/Fiserv POS integration pipelines',
        coreBiases: ['High availability under peak rush hours', 'Zero cart checkout drops', 'Resilient POS ticket injection'],
      },
    ],
    keyEmployees: [
      {
        name: 'Anthony V',
        role: 'Lead Integrations Architect',
        linkedInUrl: 'https://www.linkedin.com/in/anthony-bentobox/',
        notes: 'Leads Clover and Toast direct ordering and kitchen printer webhook integrations',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct alignment with candidate Per Diem, Craver, and Pathao food online ordering and POS integration experience',
        'Python, TypeScript, PostgreSQL, and Redis core tech stack mastery',
        'Proven expertise resolving menu catalog drift and Clover/Toast order injection failures',
      ],
      gapsOrBridges: [
        'Enterprise Fiserv financial core integrations: bridge with candidate demonstrated financial transaction consistency record',
      ],
    },
    architecture: {
      coreWorkflow: 'Powers direct online ordering storefronts for hospitality brands, injecting digital orders directly into kitchen registers and thermal printers.',
      criticalFailureModes: [
        'Modifier price calculation mismatch between customer shopping cart and physical POS register ticket',
        'Thermal kitchen printer webhook drops during sudden Friday night dinner surges',
        'Inventory stockout desync causing online customers to purchase sold-out menu specials',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Architected restaurant online ordering platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Clover/Toast modifier desync, kitchen printer webhook reliability, and real-time inventory 86ing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 13. Popmenu (Food POS Integration)
  {
    metadata: {
      id: 'popmenu',
      name: 'Popmenu',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://popmenu.com',
      careersUrl: 'https://popmenu.com/careers',
      platformEcosystem: ['Toast', 'Square', 'Clover', 'Aloha', 'Micros', 'DoorDash'],
      headquarters: 'Atlanta, GA / US Remote',
      estimatedEmployees: '200-300',
      fundingStage: 'Series C ($65M+ raised)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'WebSockets'],
    },
    leadership: [
      {
        name: 'Brendan Sweeney',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/brendanmsweeney/',
        technicalBackground: 'Former tech executive building interactive dynamic menus and direct ordering for 10,000+ independent restaurants',
        coreBiases: ['Direct guest relationships', 'Interactive photo-driven menus', 'Eliminating third-party delivery commissions'],
      },
      {
        name: 'Mike Saunders',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/mikesaunders-popmenu/',
        technicalBackground: 'Architected multi-tenant restaurant content management and real-time POS ordering engines',
        coreBiases: ['Sub-second menu rendering', 'Bi-directional POS menu synchronization', 'High-availability ordering infrastructure'],
      },
    ],
    keyEmployees: [
      {
        name: 'Jason H',
        role: 'Director of Integration Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/jason-popmenu-eng/',
        notes: 'Leads direct cloud and on-premise POS integration connectors',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct domain alignment with candidate restaurant online ordering and POS middleware systems',
        'TypeScript, Node.js, and PostgreSQL distributed backend architecture mastery',
        'Deep production experience handling bi-directional menu synchronization across multiple POS systems',
      ],
      gapsOrBridges: [
        'Interactive customer dish rating feeds: bridge with candidate demonstrated real-time WebSocket application experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Dynamic interactive menu platform enabling direct consumer ordering, sending tickets into restaurant POS registers with automated marketing triggers.',
      criticalFailureModes: [
        'POS menu item modifier matrix desync causing online order injection rejections',
        'WebSocket connection drops during peak dinner rush kitchen display updates',
        'Third-party delivery dispatch API rate-limiting during Friday night order rushes',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built real-time menu catalog synchronization and order delivery engines handling heavy restaurant traffic with automated fallback logic',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'POS modifier matrix desynchronization, kitchen display WebSocket lag, and third-party delivery dispatch reliability',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 14. Airbyte (Developer Workflows & Queues)
  {
    metadata: {
      id: 'airbyte',
      name: 'Airbyte',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://airbyte.com',
      careersUrl: 'https://airbyte.com/careers',
      platformEcosystem: ['Docker', 'Kubernetes', 'PostgreSQL', 'Snowflake', 'BigQuery', '350+ Connectors'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '150-250',
      fundingStage: 'Series B ($180M+ raised)',
      techStack: ['Java', 'Python', 'TypeScript', 'Docker', 'Kubernetes', 'PostgreSQL', 'Temporal'],
    },
    leadership: [
      {
        name: 'Michel Tricot',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/micheltricot/',
        technicalBackground: 'Former director of engineering at Liveramp building open source data movement infrastructure',
        coreBiases: ['Open source first', 'Democratizing data integration', 'Universal connector standards'],
      },
      {
        name: 'John Lafleur',
        role: 'COO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/johnlafleur/',
        technicalBackground: 'Serial developer tooling founder scaling global open-source contributor communities',
        coreBiases: ['Developer community empowerment', 'Rapid connector iteration', 'Extensible connector SDKs'],
      },
    ],
    keyEmployees: [
      {
        name: 'Marcos M',
        role: 'Staff Infrastructure Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/marcos-airbyte/',
        notes: 'Works on the Airbyte worker orchestrator and Temporal workflow scheduling engine',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Extensive experience building resilient data extraction connectors and ETL/ELT pipelines',
        'TypeScript and Python connector SDK development proficiency',
        'Deep understanding of containerized worker orchestration and Temporal-driven job scheduling',
      ],
      gapsOrBridges: [
        'Java core orchestration platform: bridge with candidate demonstrated Temporal workflow and polyglot connector experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Orchestrates containerized source and destination connectors over standard JSON streams to move and synchronize data across 350+ databases and APIs.',
      criticalFailureModes: [
        'Connector process OOM crashes when streaming unbounded database rows without backpressure chunking',
        'Temporal workflow state history bloat during multi-day high-volume historical sync runs',
        'Upstream API connection resets causing entire job retries instead of checkpointed resumes',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/state-machine-orchestrator',
      candidateExperienceBridge: 'Built streaming data extraction workers with checkpointed state persistence and memory-bounded cursor pagination preventing worker OOM crashes',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'connector streaming memory bounds, checkpointed state resumes, and Temporal workflow orchestration',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },
];

export const COHORT4_CONTACTS_MAP: Record<string, Array<{
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
  notes?: string;
}>> = {
  multilogin: [
    {
      name: 'Stanislav Siniakov',
      role: 'CEO & Co-founder',
      email: 'stanislav@multilogin.com',
      linkedInUrl: 'https://www.linkedin.com/in/stanislavsiniakov/',
      angle: 'founder_ceo',
      notes: 'Focus on multi-account automation reliability, enterprise customer expansion, and zero-ban compliance',
    },
    {
      name: 'Vytautas Vaitukaitis',
      role: 'Chief Technology Officer',
      email: 'vytautas@multilogin.com',
      linkedInUrl: 'https://www.linkedin.com/in/vytautas-vaitukaitis/',
      angle: 'cto_eng',
      notes: 'Focus on Mimic browser CDP hooks, low-level canvas fingerprint consistency, and proxy heartbeat failover',
    },
    {
      name: 'Dmitri K',
      role: 'Head of Automation Infrastructure',
      email: 'dmitri@multilogin.com',
      linkedInUrl: 'https://www.linkedin.com/in/dmitri-multilogin/',
      angle: 'cto_eng',
      notes: 'Leads headless browser automation driver integration and Selenium/Puppeteer porting',
    },
  ],

  svix: [
    {
      name: 'Tom Hacohen',
      role: 'Founder & CEO',
      email: 'tom@svix.com',
      linkedInUrl: 'https://www.linkedin.com/in/tomhacohen/',
      angle: 'founder_ceo',
      notes: 'Focus on webhooks as a service adoption, developer experience, and enterprise reliability',
    },
    {
      name: 'Gal Lellouche',
      role: 'Co-founder & Systems Architect',
      email: 'gal@svix.com',
      linkedInUrl: 'https://www.linkedin.com/in/gal-lellouche/',
      angle: 'cto_eng',
      notes: 'Focus on Rust event dispatch queues, customer endpoint timeout isolation, and signature verification SDKs',
    },
    {
      name: 'Danilo Silva',
      role: 'Senior Software Engineer',
      email: 'danilo@svix.com',
      linkedInUrl: 'https://www.linkedin.com/in/danilo-silva-eng/',
      angle: 'cto_eng',
      notes: 'Works on Svix server core, consumer verification libraries, and CLI tooling',
    },
  ],

  hookdeck: [
    {
      name: 'Eric Côté',
      role: 'CEO & Co-founder',
      email: 'eric@hookdeck.com',
      linkedInUrl: 'https://www.linkedin.com/in/ericcote/',
      angle: 'founder_ceo',
      notes: 'Focus on event gateway adoption for asynchronous architectures and eliminating custom webhook glue code',
    },
    {
      name: 'Alexandre Bouchard',
      role: 'CTO & Co-founder',
      email: 'alexandre@hookdeck.com',
      linkedInUrl: 'https://www.linkedin.com/in/alexandrebouchard/',
      angle: 'cto_eng',
      notes: 'Focus on edge proxy ingestion latency, downstream serverless rate-limiting, and message replay brokers',
    },
    {
      name: 'Maurice K',
      role: 'Senior Platform Engineer',
      email: 'maurice@hookdeck.com',
      linkedInUrl: 'https://www.linkedin.com/in/maurice-hookdeck/',
      angle: 'cto_eng',
      notes: 'Works on the core message routing engine, transform filters, and CLI tunnel tools',
    },
  ],

  resend: [
    {
      name: 'Zeno Rocha',
      role: 'CEO & Co-founder',
      email: 'zeno@resend.com',
      linkedInUrl: 'https://www.linkedin.com/in/zenorocha/',
      angle: 'founder_ceo',
      notes: 'Focus on developer velocity, React Email ecosystem adoption, and platform sending reliability',
    },
    {
      name: 'Bu Kinoshita',
      role: 'Head of Product & Co-founder',
      email: 'bu@resend.com',
      linkedInUrl: 'https://www.linkedin.com/in/bukinoshita/',
      angle: 'product_ops',
      notes: 'Focus on React Email components, developer documentation, and sending API ergonomics',
    },
    {
      name: 'Gabriel Vergnaud',
      role: 'Founding Engineer',
      email: 'gabriel@resend.com',
      linkedInUrl: 'https://www.linkedin.com/in/gabriel-vergnaud/',
      angle: 'cto_eng',
      notes: 'Focus on TypeScript type safety, transactional queue priority, and rendering pipeline latency',
    },
  ],

  zenrows: [
    {
      name: 'Pablo Perez',
      role: 'Founder & CEO',
      email: 'pablo@zenrows.com',
      linkedInUrl: 'https://www.linkedin.com/in/pabloperez-zenrows/',
      angle: 'founder_ceo',
      notes: 'Focus on high-margin web extraction APIs, customer retention, and anti-bot bypass capabilities',
    },
    {
      name: 'Guillermo F',
      role: 'Lead Systems Engineer',
      email: 'guillermo@zenrows.com',
      linkedInUrl: 'https://www.linkedin.com/in/guillermo-zenrows/',
      angle: 'cto_eng',
      notes: 'Focus on headless Chrome memory bounds, /dev/shm exhaustion prevention, and residential proxy latency',
    },
    {
      name: 'Carlos M',
      role: 'Stealth & Reverse Engineering Lead',
      email: 'carlos@zenrows.com',
      linkedInUrl: 'https://www.linkedin.com/in/carlos-zenrows-eng/',
      angle: 'cto_eng',
      notes: 'Reverse engineers WAF bot mitigation scripts including Cloudflare Turnstile and DataDome',
    },
  ],

  oxylabs: [
    {
      name: 'Julius Cerniauskas',
      role: 'Chief Executive Officer',
      email: 'julius@oxylabs.io',
      linkedInUrl: 'https://www.linkedin.com/in/julius-cerniauskas/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise web intelligence solutions, compliance standards, and global proxy network expansion',
    },
    {
      name: 'Aleksandras Surkovas',
      role: 'Chief Technology Officer',
      email: 'aleksandras@oxylabs.io',
      linkedInUrl: 'https://www.linkedin.com/in/aleksandras-surkovas/',
      angle: 'cto_eng',
      notes: 'Focus on multi-region proxy network concurrency, AI web unblocker models, and headless rendering pools',
    },
    {
      name: 'Mantas M',
      role: 'Head of Scraper APIs',
      email: 'mantas@oxylabs.io',
      linkedInUrl: 'https://www.linkedin.com/in/mantas-oxylabs/',
      angle: 'cto_eng',
      notes: 'Leads engineering for Web Unblocker and headless browser rendering engines',
    },
  ],

  stackone: [
    {
      name: 'Romain Sestier',
      role: 'CEO & Co-founder',
      email: 'romain@stackone.com',
      linkedInUrl: 'https://www.linkedin.com/in/romainsestier/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise B2B integration adoption, zero data retention compliance, and European software vendors',
    },
    {
      name: 'Gautier Thomsen',
      role: 'CTO & Co-founder',
      email: 'gautier@stackone.com',
      linkedInUrl: 'https://www.linkedin.com/in/gautierthomsen/',
      angle: 'cto_eng',
      notes: 'Focus on stateless edge proxy routing, HCM schema mapping, and multi-tenant OAuth refresh locks',
    },
    {
      name: 'Nicolas C',
      role: 'Lead Connector Engineer',
      email: 'nicolas@stackone.com',
      linkedInUrl: 'https://www.linkedin.com/in/nicolas-stackone/',
      angle: 'cto_eng',
      notes: 'Builds enterprise connector harnesses for SAP, Workday, and Oracle HCM',
    },
  ],

  vessel: [
    {
      name: 'Zach Zeleznick',
      role: 'CEO & Co-founder',
      email: 'zach@vessel.land',
      linkedInUrl: 'https://www.linkedin.com/in/zachzeleznick/',
      angle: 'founder_ceo',
      notes: 'Focus on universal CRM integration adoption for B2B SaaS applications and reducing sales friction',
    },
    {
      name: 'Liron Yahdav',
      role: 'CTO & Co-founder',
      email: 'liron@vessel.land',
      linkedInUrl: 'https://www.linkedin.com/in/lironyahdav/',
      angle: 'cto_eng',
      notes: 'Focus on Salesforce API rate limit budgeting, bidirectional CRM write race conditions, and webhook loss prevention',
    },
    {
      name: 'Tyler B',
      role: 'Senior Integration Engineer',
      email: 'tyler@vessel.land',
      linkedInUrl: 'https://www.linkedin.com/in/tyler-vessel-dev/',
      angle: 'cto_eng',
      notes: 'Works on the Salesforce Bulk API and HubSpot webhook listener pipelines',
    },
  ],

  oneup_health: [
    {
      name: 'Ricky Sahu',
      role: 'Founder',
      email: 'ricky@1up.health',
      linkedInUrl: 'https://www.linkedin.com/in/rickysahu/',
      angle: 'founder_ceo',
      notes: 'Focus on FHIR-native health plan data exchange and meeting federal interoperability mandates',
    },
    {
      name: 'Shahid Azim',
      role: 'Chief Technology Officer',
      email: 'shahid@1up.health',
      linkedInUrl: 'https://www.linkedin.com/in/shahidazim/',
      angle: 'cto_eng',
      notes: 'Focus on FHIR R4 PostgreSQL JSONB index tuning, SMART on FHIR authorization, and streaming conversions',
    },
    {
      name: 'David R',
      role: 'VP of Platform Engineering',
      email: 'david@1up.health',
      linkedInUrl: 'https://www.linkedin.com/in/david-1uphealth/',
      angle: 'cto_eng',
      notes: 'Oversees the FHIR server core and patient access API infrastructure',
    },
  ],

  flexpa: [
    {
      name: 'Jeremy Clark',
      role: 'CEO & Co-founder',
      email: 'jeremy@flexpa.com',
      linkedInUrl: 'https://www.linkedin.com/in/jeremy-clark-flexpa/',
      angle: 'founder_ceo',
      notes: 'Focus on expanding consumer-mediated health data access across all major US health insurance plans',
    },
    {
      name: 'Daryl Kehler',
      role: 'CTO & Co-founder',
      email: 'daryl@flexpa.com',
      linkedInUrl: 'https://www.linkedin.com/in/darylkehler/',
      angle: 'cto_eng',
      notes: 'Focus on payer OAuth gateway stability, ExplanationOfBenefit FHIR normalization, and parallel token refresh',
    },
    {
      name: 'Josh M',
      role: 'Senior Health Informatics Engineer',
      email: 'josh@flexpa.com',
      linkedInUrl: 'https://www.linkedin.com/in/josh-flexpa-dev/',
      angle: 'cto_eng',
      notes: 'Maintains connector integrations with payer CMS Patient Access APIs',
    },
  ],

  ribbon_health: [
    {
      name: 'Nate Maslak',
      role: 'CEO & Co-founder',
      email: 'nate@ribbonhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/natemaslak/',
      angle: 'founder_ceo',
      notes: 'Focus on accurate healthcare directory data infrastructure and enterprise payer partnerships',
    },
    {
      name: 'Nate Fox',
      role: 'CTO & Co-founder',
      email: 'natefox@ribbonhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/nate-fox/',
      angle: 'cto_eng',
      notes: 'Focus on provider entity resolution collisions, geo-fenced directory search latency, and bulk data ETL',
    },
    {
      name: 'Sam T',
      role: 'Engineering Manager - Platform Data',
      email: 'samt@ribbonhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/sam-ribbon-eng/',
      angle: 'cto_eng',
      notes: 'Leads provider graph normalization and insurance network mapping pipelines',
    },
  ],

  bentobox: [
    {
      name: 'Krystle Mobayeni',
      role: 'Co-founder & Strategic Advisor',
      email: 'krystle@getbento.com',
      linkedInUrl: 'https://www.linkedin.com/in/krystlemobayeni/',
      angle: 'founder_ceo',
      notes: 'Focus on restaurant online ordering profitability and hospitality digital brand empowerment',
    },
    {
      name: 'James Brooks',
      role: 'VP of Engineering',
      email: 'james@getbento.com',
      linkedInUrl: 'https://www.linkedin.com/in/james-brooks-bento/',
      angle: 'cto_eng',
      notes: 'Focus on Clover and Toast POS modifier desync, kitchen printer webhook reliability, and rush hour uptime',
    },
    {
      name: 'Anthony V',
      role: 'Lead Integrations Architect',
      email: 'anthony@getbento.com',
      linkedInUrl: 'https://www.linkedin.com/in/anthony-bentobox/',
      angle: 'cto_eng',
      notes: 'Leads Clover and Toast direct ordering and kitchen printer webhook integrations',
    },
  ],

  popmenu: [
    {
      name: 'Brendan Sweeney',
      role: 'CEO & Co-founder',
      email: 'brendan@popmenu.com',
      linkedInUrl: 'https://www.linkedin.com/in/brendanmsweeney/',
      angle: 'founder_ceo',
      notes: 'Focus on interactive restaurant menu adoption and commission-free online ordering growth',
    },
    {
      name: 'Mike Saunders',
      role: 'CTO & Co-founder',
      email: 'mike@popmenu.com',
      linkedInUrl: 'https://www.linkedin.com/in/mikesaunders-popmenu/',
      angle: 'cto_eng',
      notes: 'Focus on POS modifier matrix desync, kitchen display WebSocket latency, and third-party delivery dispatch',
    },
    {
      name: 'Jason H',
      role: 'Director of Integration Engineering',
      email: 'jason@popmenu.com',
      linkedInUrl: 'https://www.linkedin.com/in/jason-popmenu-eng/',
      angle: 'cto_eng',
      notes: 'Leads direct cloud and on-premise POS integration connectors',
    },
  ],

  airbyte: [
    {
      name: 'Michel Tricot',
      role: 'CEO & Co-founder',
      email: 'michel@airbyte.com',
      linkedInUrl: 'https://www.linkedin.com/in/micheltricot/',
      angle: 'founder_ceo',
      notes: 'Focus on open-source data movement adoption, cloud data synchronization, and enterprise customer scale',
    },
    {
      name: 'John Lafleur',
      role: 'COO & Co-founder',
      email: 'john@airbyte.com',
      linkedInUrl: 'https://www.linkedin.com/in/johnlafleur/',
      angle: 'product_ops',
      notes: 'Focus on developer community contributor ecosystem and connector developer ergonomics',
    },
    {
      name: 'Marcos M',
      role: 'Staff Infrastructure Engineer',
      email: 'marcos@airbyte.com',
      linkedInUrl: 'https://www.linkedin.com/in/marcos-airbyte/',
      angle: 'cto_eng',
      notes: 'Focus on connector streaming memory bounds, checkpointed state resumes, and Temporal worker orchestration',
    },
  ],
};
