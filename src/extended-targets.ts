import type { VerticalCategory } from './types.ts';

export const EXTENDED_RAW_TARGETS = [
  // Vertical 1: Food POS & Restaurant Middleware
  {
    metadata: {
      id: 'deliverect',
      name: 'Deliverect',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://deliverect.com',
      careersUrl: 'https://deliverect.com/en-us/careers',
      platformEcosystem: ['Toast', 'Deliveroo', 'Uber Eats', 'Square', 'Lightspeed'],
      headquarters: 'Ghent, Belgium / US Remote',
      estimatedEmployees: '400-500',
      fundingStage: 'Series D ($65M+ ARR)',
      techStack: ['Node.js', 'TypeScript', 'Python', 'RabbitMQ', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Zhong Xu',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/zhongxu/',
        technicalBackground: 'Pioneered cloud POS and online delivery orchestration for 50,000+ restaurants globally',
        coreBiases: ['Unified restaurant operations', 'Zero duplicate orders', 'Fast partner onboarding'],
      },
      {
        name: 'Jan Hollez',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/janhollez/',
        technicalBackground: 'Architected global delivery normalization bus processing 100M+ orders',
        coreBiases: ['Distributed queue idempotency', 'Low latency ticket injection', 'Resilient POS proxies'],
      },
    ],
    keyEmployees: [
      {
        name: 'Ilja Theuwissen',
        role: 'Director of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/iljatheuwissen/',
        notes: 'Leads backend integrations and delivery channel connectors',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct architectural alignment with Per Diem and Pathao high-volume delivery webhook pipelines',
        'Proven expertise in RabbitMQ/Redis BullMQ distributed queue idempotency',
        'TypeScript and Node.js microservices processing millions of daily transactions',
      ],
      gapsOrBridges: [
        'European enterprise headquarters: bridge with candidate established US/EU timezone overlap',
        'Proprietary Lightspeed API nuances: bridge with 2-day sandbox adapter delivery',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests webhook orders from 100+ delivery aggregators, normalizes modifiers into canonical schema, and injects tickets into cloud & legacy POS systems.',
      criticalFailureModes: [
        'Aggregator order duplication on network retries during network blips',
        'Modifier matrix desynchronization causing kitchen ticket rejection',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built high-throughput delivery and POS webhook idempotency pipelines at Pathao handling 200k+ daily transactions with zero duplicate kitchen orders',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'high-throughput delivery aggregator integration and POS ticket reliability',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'omnivore',
      name: 'Omnivore',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://omnivore.io',
      careersUrl: 'https://omnivore.io/careers',
      platformEcosystem: ['NCR Aloha', 'Micros Simphony', 'POSitouch', 'Toast'],
      headquarters: 'Hayward, CA / Remote',
      estimatedEmployees: '50-100',
      fundingStage: 'Series A ($13M)',
      techStack: ['Go', 'Python', 'PostgreSQL', 'Redis', 'POS API'],
    },
    leadership: [
      {
        name: 'Dan Singer',
        role: 'CEO',
        linkedInUrl: 'https://www.linkedin.com/in/dan-singer-4a7b511/',
        technicalBackground: 'Enterprise restaurant tech leader connecting legacy point of sale to modern cloud apps',
        coreBiases: ['Enterprise POS stability', 'Real-time table status', 'Zero on-premise crashes'],
      },
    ],
    keyEmployees: [
      {
        name: 'Chris Burggren',
        role: 'VP Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/cburggren/',
        notes: 'Manages on-premise agent software and cloud POS bridge APIs',
      },
    ],
    matchAnalysis: {
      score: 93,
      strongMatches: [
        'Deep background with legacy Windows/COM POS protocols (Aloha/Micros) and cloud bridges',
        'Go and Python backend engineering for low-latency streaming endpoints',
        '14 years of production debugging and systems resilience',
      ],
      gapsOrBridges: [
        'On-premise agent testing constraints: bridge with automated mock harness in Docker',
      ],
    },
    architecture: {
      coreWorkflow: 'Connects on-premise Windows POS terminals (Aloha, Micros) to cloud ordering and loyalty apps via lightweight local listener agents.',
      criticalFailureModes: [
        'On-premise POS agent socket disconnects during network partitions',
        'Memory leaks in COM/OLE socket wrappers on legacy Windows registers',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Maintained rock-solid local agent daemons and remote cloud synchronizers with automatic reconnect backoff and zero memory growth',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'connecting legacy on-premise POS registers to modern cloud APIs',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'lunchbox',
      name: 'Lunchbox',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://lunchbox.io',
      careersUrl: 'https://lunchbox.io/careers',
      platformEcosystem: ['Toast', 'Brink POS', 'NCR Aloha', 'Square'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '150-250',
      fundingStage: 'Series B ($50M)',
      techStack: ['TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    leadership: [
      {
        name: 'Nabeel Alamgir',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/nabeelalamgir/',
        technicalBackground: 'Former restaurant busboy turned Bareburger CMO, then tech founder building restaurant first ordering platforms',
        coreBiases: ['Restaurant margin ownership', 'Frictionless guest re-ordering', 'Sub-second mobile checkout'],
      },
    ],
    keyEmployees: [
      {
        name: 'Mohit Kansal',
        role: 'Chief Product Officer',
        linkedInUrl: 'https://www.linkedin.com/in/mohit-kansal/',
        notes: 'Oversees product design, guest engagement systems, and enterprise POS catalog parity',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Direct match with candidate Next.js, TypeScript, and React Native mobile development background',
        'Experience building high-conversion multi-tenant digital ordering carts',
        'Proven history preventing kitchen ticket desync during flash sales',
      ],
      gapsOrBridges: [
        'Brink POS API nuances: bridge with candidate proven fast ramp-up on proprietary REST/SOAP POS specs',
      ],
    },
    architecture: {
      coreWorkflow: 'Powers white-label guest web & mobile ordering, catering portals, and loyalty engines integrated into enterprise POS backends.',
      criticalFailureModes: [
        'Real-time 86ing race conditions during meal rushes firing tickets for out-of-stock items',
        'Modifier pricing calculation mismatches between mobile cart and kitchen printer',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Designed resilient multi-tenant e-commerce and ordering engines with real-time inventory validation and zero discrepancy checkout',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'white-label restaurant ordering velocity and real-time POS menu synchronization',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'flybuy',
      name: 'Flybuy (Radius Networks)',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://flybuy.com',
      careersUrl: 'https://flybuy.com/careers',
      platformEcosystem: ['Toast', 'Olo', 'POS Webhooks', 'Apple CoreLocation'],
      headquarters: 'Washington, DC / Remote',
      estimatedEmployees: '80-120',
      fundingStage: 'Series B ($25M)',
      techStack: ['TypeScript', 'Node.js', 'Go', 'Redis', 'WebSocket'],
    },
    leadership: [
      {
        name: 'Marc Wallace',
        role: 'CEO & Co-Founder',
        linkedInUrl: 'https://www.linkedin.com/in/marc-wallace-130a052/',
        technicalBackground: 'Pioneered proximity technology, beacons, and location-based order handoff platforms',
        coreBiases: ['Accurate kitchen prep timing', 'Zero customer wait times', 'High device battery efficiency'],
      },
    ],
    keyEmployees: [
      {
        name: 'David Helms',
        role: 'Chief Product Officer',
        linkedInUrl: 'https://www.linkedin.com/in/david-helms-697960/',
        notes: 'Drives product architecture for curbside pickup, drive-thru tracking, and delivery dispatch',
      },
    ],
    matchAnalysis: {
      score: 93,
      strongMatches: [
        'Deep background in real-time geospatial tracking, Redis geohashes, and WebSockets from ride-sharing/logistics platforms',
        'Expertise in low-power mobile background telemetry algorithms',
        'High-concurrency Node.js and Go microservices',
      ],
      gapsOrBridges: [
        'Proprietary beacon hardware protocols: bridge with candidate extensive IoT and embedded systems experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Calculates dynamic customer ETA based on GPS telemetry, pacing kitchen ticket firing so orders are fresh when customers pull into curbside stalls.',
      criticalFailureModes: [
        'Mobile geofence bounce jitter causing false order firing before customer arrives',
        'WebSocket connection drops during cell tower handoffs losing live vehicle ETA coordinates',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built real-time geospatial driver and delivery dispatch platforms handling thousands of live concurrent GPS streams without server memory leaks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'real-time GPS geofencing and kitchen order pacing algorithms',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // Vertical 2: Healthcare FHIR & Clinical APIs
  {
    metadata: {
      id: 'redox',
      name: 'Redox Engine',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://redoxengine.com',
      careersUrl: 'https://redoxengine.com/careers',
      platformEcosystem: ['Epic Systems', 'Cerner / Oracle Health', 'SMART on FHIR', 'HL7 v2'],
      headquarters: 'Madison, WI / Remote',
      estimatedEmployees: '200-300',
      fundingStage: 'Series D ($100M+)',
      techStack: ['Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Kafka'],
    },
    leadership: [
      {
        name: 'Luke Bonney',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/lukebonney/',
        technicalBackground: 'Former Epic engineer who built universal healthcare data exchange bridging 5,000+ health system connections',
        coreBiases: ['Eliminating proprietary EHR silos', 'High compliance reliability', 'Fast digital health integration'],
      },
    ],
    keyEmployees: [
      {
        name: 'Niko Skievaski',
        role: 'Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/niko-skievaski/',
        notes: 'Co-founded Redox, championing open healthcare developer APIs and interoperability standards',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Deep healthcare data compliance and clinical workflow background',
        'Expertise in high-throughput Kafka and streaming data transformations',
        '14 years of distributed Node.js/TypeScript architecture',
      ],
      gapsOrBridges: [
        'Legacy MLLP socket protocol specifics: bridge with candidate background in raw TCP socket multiplexing',
      ],
    },
    architecture: {
      coreWorkflow: 'Normalizes inbound HL7 v2, C-CDA XML, and proprietary EHR protocols into clean JSON and FHIR resources for digital health apps.',
      criticalFailureModes: [
        'Multi-tenant message queue head-of-line blocking when hospital VPN tunnels drop',
        'Clinical data truncation during lossy HL7 v2 to FHIR R4 schema transformations',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/fhir-streaming-pipeline',
      candidateExperienceBridge: 'Built streaming clinical data adapters transforming multi-megabyte patient bundles into strict FHIR R4 resources with zero memory leaks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'universal EHR data normalization and high-availability clinical message queues',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'particle_health',
      name: 'Particle Health',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://particlehealth.com',
      careersUrl: 'https://particlehealth.com/careers',
      platformEcosystem: ['Carequality', 'CommonWell Health Alliance', 'FHIR R4', 'eHealth Exchange'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '50-80',
      fundingStage: 'Series B ($45M)',
      techStack: ['TypeScript', 'Go', 'PostgreSQL', 'GCP', 'Docker'],
    },
    leadership: [
      {
        name: 'Jason Freudenberg',
        role: 'CEO',
        linkedInUrl: 'https://www.linkedin.com/in/jason-freudenberg/',
        technicalBackground: 'Health tech executive scaling national patient record retrieval platforms',
        coreBiases: ['Complete patient chart visibility', 'Fast API response times', 'Rigorous HIPAA compliance'],
      },
    ],
    keyEmployees: [
      {
        name: 'Troy Bannister',
        role: 'Founder',
        linkedInUrl: 'https://www.linkedin.com/in/troy-bannister-a35b1335/',
        notes: 'Pioneered API-based access to national clinical networks for digital health innovators',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Proven mastery of Carequality and CommonWell record retrieval workflows',
        'Go and TypeScript systems engineering with PostgreSQL performance tuning',
        'Clinical record deduplication and master patient index algorithms',
      ],
      gapsOrBridges: [
        'Payer specific CMS-0057-F nuances: bridge with candidate comprehensive regulatory research',
      ],
    },
    architecture: {
      coreWorkflow: 'Orchestrates concurrent queries across 50,000 clinic gateways, aggregating scattered medical history into clean FHIR R4 records.',
      criticalFailureModes: [
        'Asynchronous patient record retrieval gateway timeouts on sluggish regional EMRs',
        'Demographic record mismatch causing duplicate patient profiles in aggregate clinical charts',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/fhir-streaming-pipeline',
      candidateExperienceBridge: 'Implemented asynchronous query orchestration and deterministic record linkage algorithms across heterogeneous clinical endpoints',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'national health record query orchestration and FHIR bundle aggregation',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'health_gorilla',
      name: 'Health Gorilla',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://healthgorilla.com',
      careersUrl: 'https://healthgorilla.com/careers',
      platformEcosystem: ['TEFCA QHIN', 'FHIR R4', 'Epic Systems', 'Athenahealth'],
      headquarters: 'Sunnyvale, CA / Remote',
      estimatedEmployees: '150-200',
      fundingStage: 'Series C ($80M)',
      techStack: ['Java', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'],
    },
    leadership: [
      {
        name: 'Steve Yaskin',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/steveyaskin/',
        technicalBackground: 'Enterprise health tech architect who led Health Gorilla to official TEFCA QHIN designation',
        coreBiases: ['National framework compliance', 'Zero-trust clinical data security', 'High-volume lab and EMR routing'],
      },
    ],
    keyEmployees: [
      {
        name: 'Sergio Wagner',
        role: 'Chief Strategy Officer',
        linkedInUrl: 'https://www.linkedin.com/in/sergiowagner/',
        notes: 'Leads product and government healthcare interoperability strategy',
      },
    ],
    matchAnalysis: {
      score: 93,
      strongMatches: [
        'Comprehensive understanding of TEFCA technical framework and QHIN obligations',
        'High-scale database performance tuning and audit logging architecture',
        'Zero-trust security and data privacy implementations',
      ],
      gapsOrBridges: [
        'Legacy Java microservices: bridge with candidate rapid cross-language proficiency and Python/TypeScript bridges',
      ],
    },
    architecture: {
      coreWorkflow: 'Serves as an official Qualified Health Information Network (QHIN), securely routing health data between federal, state, and private providers.',
      criticalFailureModes: [
        'TEFCA QHIN cryptographic audit logging volume overwhelming relational databases',
        'Certificate rotation failures severing mutual TLS connections with national health gateways',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/fhir-streaming-pipeline',
      candidateExperienceBridge: 'Architected immutable audit logs and automated mTLS certificate rotation systems for mission-critical enterprise applications',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'TEFCA QHIN interoperability scaling and high-throughput clinical document routing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'commure',
      name: 'Commure',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://commure.com',
      careersUrl: 'https://commure.com/careers',
      platformEcosystem: ['Epic', 'Cerner', 'FHIR R4', 'Clinical IoT'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '400-600',
      fundingStage: 'Series D ($500M+)',
      techStack: ['Go', 'TypeScript', 'Rust', 'Kubernetes', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Ashu Singhal',
        role: 'VP Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/ashusinghal/',
        technicalBackground: 'Engineering leader building hospital operating system platforms and developer SDKs',
        coreBiases: ['Developer velocity in healthcare', 'Edge and cloud sync', 'Ironclad clinical safety'],
      },
    ],
    keyEmployees: [
      {
        name: 'Joe Beninato',
        role: 'VP Product',
        linkedInUrl: 'https://www.linkedin.com/in/beninato/',
        notes: 'Oversees product strategy for Commure OS, clinician tools, and developer platforms',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Staff-level systems engineering across Go, TypeScript, and distributed databases',
        'Deep healthcare compliance and clinical safety ergonomics',
        'Proven track record building developer-facing APIs and SDKs',
      ],
      gapsOrBridges: [
        'Hospital edge hardware specifics: bridge with candidate background in local agent daemons',
      ],
    },
    architecture: {
      coreWorkflow: 'Unified healthcare OS aggregating clinical sensors, revenue cycle events, and EMR data into real-time clinician workflows.',
      criticalFailureModes: [
        'High-frequency bedside telemetry ingestion dropping event order during network split-brain',
        'WebSocket connection saturation across thousands of hospital workstation clients',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/fhir-streaming-pipeline',
      candidateExperienceBridge: 'Engineered high-concurrency event brokers and WebSocket clusters with backpressure management and zero event loss',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'real-time hospital OS telemetry and high-concurrency clinical event brokers',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // Vertical 3: Browser Automation Infrastructure & Headless Scraping
  {
    metadata: {
      id: 'apify',
      name: 'Apify',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://apify.com',
      careersUrl: 'https://apify.com/jobs',
      platformEcosystem: ['Crawlee', 'Playwright', 'Puppeteer', 'Headless Chrome'],
      headquarters: 'Prague, CZ / Remote',
      estimatedEmployees: '100-150',
      fundingStage: 'Series A ($15M ARR)',
      techStack: ['Node.js', 'TypeScript', 'Crawlee', 'Docker', 'Redis'],
    },
    leadership: [
      {
        name: 'Jan Curn',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/jancurn/',
        technicalBackground: 'Pioneered cloud browser automation actors, web scraping marketplaces, and the open-source Crawlee library',
        coreBiases: ['Open-source developer ergonomics', 'Resource-bounded Chromium runs', 'Community actor ecosystem'],
      },
      {
        name: 'Jakub Balada',
        role: 'Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/jakubbalada/',
        technicalBackground: 'Distributed scraping architecture and cloud infrastructure scaling',
        coreBiases: ['Efficient container scheduling', 'Anti-bot proxy mesh', 'Zero server downtime'],
      },
    ],
    keyEmployees: [],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Author of advanced browser automation tools and Chrome DevTools Protocol integrations',
        'Deep mastery of Node.js/TypeScript memory optimization and Docker containerization',
        'Proven open-source engineering ethos matching Crawlee development practices',
      ],
      gapsOrBridges: [
        'Central European timezone base: bridge with candidate established European overlap',
      ],
    },
    architecture: {
      coreWorkflow: 'Orchestrates serverless browser actors running Crawlee, Playwright, and Puppeteer across thousands of clustered Chromium containers.',
      criticalFailureModes: [
        'Chromium zombie processes exhausting shared memory (/dev/shm) during long actor crawls',
        'Anti-scraping fingerprint bans when IP proxy pool rotation desynchronizes with TLS fingerprints',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/stealth-browser-runner',
      candidateExperienceBridge: 'Built automated browser process managers and zombie cleanup supervisors running thousands of concurrent headless sessions without host memory leaks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Chromium container memory leaks, /dev/shm exhaustion, and actor concurrency',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'scrapingbee',
      name: 'ScrapingBee',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://scrapingbee.com',
      careersUrl: 'https://scrapingbee.com/about',
      platformEcosystem: ['Headless Chrome', 'Rotating Proxies', 'Cloudflare Bypass', 'Puppeteer'],
      headquarters: 'Paris, FR / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Bootstrapped / Highly Profitable ($5M+ ARR)',
      techStack: ['Python', 'TypeScript', 'Docker', 'FastAPI', 'Redis'],
    },
    leadership: [
      {
        name: 'Pierre de Wulf',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/pierre-de-wulf/',
        technicalBackground: 'Bootstrapped high-margin SaaS pioneer building developer-first web scraping infrastructure',
        coreBiases: ['YAGNI engineering', 'High margin profitability', 'Zero API flakiness'],
      },
      {
        name: 'Kevin Sahin',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/kevinsahin/',
        technicalBackground: 'Author of books on web scraping and master of anti-bot bypass mechanics',
        coreBiases: ['Minimal clean code', 'Robust proxy rotation', 'Headless Chrome stability'],
      },
    ],
    keyEmployees: [],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Perfect engineering alignment: YAGNI minimalist code, bootstrapped SaaS discipline, zero bullshit',
        'Deep expertise in browser automation, anti-fingerprinting, and proxy routing',
        '14 years building high-leverage software with small autonomous teams',
      ],
      gapsOrBridges: [
        'Bootstrapped team with high hiring bar: bridge with candidate proven autonomous execution and trial project readiness',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a single API endpoint that renders JavaScript with headless Chrome, solves CAPTCHAs, and rotates proxies transparently.',
      criticalFailureModes: [
        'Residential proxy connection reset spikes causing 504 gateway timeouts',
        'Cloudflare Turnstile token validation degradation under burst concurrency',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/stealth-browser-runner',
      candidateExperienceBridge: 'Implemented resilient proxy mesh rotators and anti-detection kinematics that defeat behavioral bot scoring with sub-second overhead',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'headless Chrome reliability, proxy mesh latency, and anti-bot evasion',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'zyte',
      name: 'Zyte (formerly Scrapinghub)',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://zyte.com',
      careersUrl: 'https://zyte.com/careers',
      platformEcosystem: ['Scrapy', 'Headless Chromium', 'Smart Proxy Manager', 'AI Web Scraping'],
      headquarters: 'Cork, Ireland / Remote',
      estimatedEmployees: '200-300',
      fundingStage: 'Bootstrapped / Enterprise Scale',
      techStack: ['Python', 'Scrapy', 'Go', 'Docker', 'Kubernetes'],
    },
    leadership: [
      {
        name: 'Shane Evans',
        role: 'CEO & Founder',
        linkedInUrl: 'https://www.linkedin.com/in/shaneevans/',
        technicalBackground: 'Created Scrapy and built one of the world’s largest web data extraction platforms',
        coreBiases: ['Ethical web data access', 'Scale without crashing', 'Open-source tooling leadership'],
      },
    ],
    keyEmployees: [
      {
        name: 'Tomas Svoboda',
        role: 'Director of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/tomassvoboda/',
        notes: 'Leads engineering for Smart Proxy Manager and headless rendering services',
      },
    ],
    matchAnalysis: {
      score: 93,
      strongMatches: [
        '14 years of production web scraping and distributed systems operations',
        'Expertise in Python, Go, and high-concurrency network proxies',
        'Proven ability to diagnose and repair anti-scraping bans at scale',
      ],
      gapsOrBridges: [
        'Large distributed organization: bridge with candidate clear asynchronous communication and PR discipline',
      ],
    },
    architecture: {
      coreWorkflow: 'Manages billions of monthly web requests through AI-driven proxy rotation, automatic CAPTCHA resolution, and headless browser rendering.',
      criticalFailureModes: [
        'Anti-bot heuristic updates causing 403 cascades across pooled residential IP blocks',
        'Memory leaks in long-running headless browser worker nodes under heavy DOM manipulation',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/stealth-browser-runner',
      candidateExperienceBridge: 'Engineered high-scale web crawlers and proxy pooling engines with automatic ban detection, backoff circuits, and zero data corruption',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Smart Proxy Manager ban rates and headless browser rendering throughput',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'nimble',
      name: 'Nimble',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://nimbleway.com',
      careersUrl: 'https://nimbleway.com/careers',
      platformEcosystem: ['AI Browser Engine', 'Automated Fingerprint Rotation', 'CDP Stream'],
      headquarters: 'Tel Aviv, Israel / Remote',
      estimatedEmployees: '50-80',
      fundingStage: 'Series A ($18M)',
      techStack: ['Go', 'TypeScript', 'Chromium CDP', 'Kubernetes', 'Redis'],
    },
    leadership: [
      {
        name: 'Maoz Lakovski',
        role: 'CEO & Founder',
        linkedInUrl: 'https://www.linkedin.com/in/maozlakovski/',
        technicalBackground: 'Pioneered autonomous AI browser infrastructure and behavioral fingerprint management',
        coreBiases: ['Autonomous web extraction', 'Low latency rendering', 'Fingerprint indistinguishability'],
      },
    ],
    keyEmployees: [
      {
        name: 'Alon Chen',
        role: 'VP R&D',
        linkedInUrl: 'https://www.linkedin.com/in/alon-chen-5969013b/',
        notes: 'Oversees engineering of Nimble IP pipeline and AI browser execution engine',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct experience reverse-engineering browser fingerprint signals (Canvas, WebGL, AudioContext)',
        'Go and TypeScript systems development for low-latency CDP multiplexing',
        'Autonomous AI agent computer-use workflows',
      ],
      gapsOrBridges: [
        'Proprietary AI parsing models: bridge with candidate extensive LLM agent and prompt engineering background',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a cloud browser API that automatically synthesizes realistic browser fingerprints and navigates complex dynamic web applications.',
      criticalFailureModes: [
        'CDP connection latency degradation when rendering complex React client bundles',
        'TLS client hello fingerprint mismatch triggering edge CDN bot challenges',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/stealth-browser-runner',
      candidateExperienceBridge: 'Built stealth browser engines with native TLS fingerprint emulation and authentic human kinematics to pass tier-1 bot checks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'CDP streaming latency and stealth browser fingerprint consistency',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // Vertical 4: Developer Workflows, Distributed Queues & Async Execution
  {
    metadata: {
      id: 'inngest',
      name: 'Inngest',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://inngest.com',
      careersUrl: 'https://inngest.com/careers',
      platformEcosystem: ['Serverless Step Functions', 'Event-Driven Architecture', 'TypeScript SDK'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Series A ($9M)',
      techStack: ['Go', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Chris O\'Brien',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/chriseobrien/',
        technicalBackground: 'Former Docker engineer building developer platforms for durable execution and background workflows',
        coreBiases: ['Zero infrastructure configuration', 'Developer delight', 'Flawless step idempotency'],
      },
      {
        name: 'Tony Holdstock-Brown',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/tonyhb/',
        technicalBackground: 'Architected distributed event stream engine and durable execution state machine',
        coreBiases: ['Durable step execution', 'Sub-millisecond scheduling latency', 'Bulletproof replay reliability'],
      },
    ],
    keyEmployees: [],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        '14 years designing distributed event queues, webhook state machines, and idempotent workers',
        'Deep mastery of TypeScript, Go, PostgreSQL, and Redis',
        'YAGNI architectural philosophy matching Inngest’s lean, high-leverage product design',
      ],
      gapsOrBridges: [
        'Custom execution runtime internals: bridge with candidate deep familiarity with queue concurrency and state serialization',
      ],
    },
    architecture: {
      coreWorkflow: 'Enables developers to write durable step-functions in TypeScript and Python that survive server restarts, deploy seamlessly, and retry automatically.',
      criticalFailureModes: [
        'Step idempotency violations when state payloads exceed memory buffers during replays',
        'State serialization blowup on large payloads choking relational database stores',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built distributed task queues and state machines with strict idempotency keys, automatic backoff, and sub-millisecond execution',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'durable step execution engine performance, queue scheduling, and SDK developer ergonomics',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'trigger_dev',
      name: 'Trigger.dev',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://trigger.dev',
      careersUrl: 'https://trigger.dev/careers',
      platformEcosystem: ['Next.js', 'Bun', 'Realtime Serverless Queues', 'Long-running Jobs'],
      headquarters: 'London, UK / Remote',
      estimatedEmployees: '10-20',
      fundingStage: 'Y Combinator, Seed ($3.5M)',
      techStack: ['TypeScript', 'Node.js', 'Bun', 'PostgreSQL', 'Docker'],
    },
    leadership: [
      {
        name: 'Matt Aitken',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/michaela-aitken/',
        technicalBackground: 'Built developer-first background jobs platform providing realtime streaming logs and zero timeout execution',
        coreBiases: ['Open source first', 'Realtime log streaming', 'Zero serverless timeouts'],
      },
      {
        name: 'Eric Allam',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/ericallam/',
        technicalBackground: 'Pioneered developer tools and high-performance TypeScript execution runtimes',
        coreBiases: ['Bun and Node runtime speed', 'Type-safe event routing', 'Resilient distributed workers'],
      },
    ],
    keyEmployees: [],
    matchAnalysis: {
      score: 98,
      strongMatches: [
        'Expert in the Bun runtime, TypeScript ESM, and high-performance serverless queue design',
        'Direct alignment with candidate’s open-source background and developer tooling focus',
        '14 years of backend systems engineering with PostgreSQL and WebSocket streaming',
      ],
      gapsOrBridges: [
        'London time zone: candidate already operates with substantial European morning and afternoon overlap',
      ],
    },
    architecture: {
      coreWorkflow: 'Open-source background jobs framework allowing developers to run long tasks with realtime web-socket streaming and zero timeout limits.',
      criticalFailureModes: [
        'WebSocket heartbeat timeouts during heavy CPU-bound tasks in serverless runtimes',
        'Worker process crash loops on memory-heavy generative AI tasks taking down host machines',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Architected high-throughput Bun and Node.js microservices with real-time log streaming and rock-solid process supervision',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Bun runtime optimization, realtime streaming logs, and background job queue resilience',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  {
    metadata: {
      id: 'hatchet',
      name: 'Hatchet',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://hatchet.run',
      careersUrl: 'https://hatchet.run/careers',
      platformEcosystem: ['Distributed Task Queue', 'Workflow Engine', 'gRPC Streams'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '10-20',
      fundingStage: 'Seed ($3.8M)',
      techStack: ['Go', 'TypeScript', 'PostgreSQL', 'gRPC', 'RabbitMQ'],
    },
    leadership: [
      {
        name: 'Alexander Belanger',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/alex-belanger/',
        technicalBackground: 'Built low-latency distributed task queue and workflow engine designed to replace legacy Celery/BullMQ setups',
        coreBiases: ['Sub-millisecond scheduling latency', 'gRPC streaming efficiency', 'Fair queueing concurrency'],
      },
    ],
    keyEmployees: [
      {
        name: 'Gabe Ragland',
        role: 'Founding Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/gabrielragland/',
        notes: 'Drives developer SDKs, dashboard UI, and TypeScript runtime client integrations',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Extensive production experience replacing slow BullMQ/Celery systems with high-throughput streaming queues',
        'Go and TypeScript core systems development',
        'PostgreSQL queue optimization using SKIP LOCKED and atomic state transitions',
      ],
      gapsOrBridges: [
        'gRPC proto schema evolution: candidate is proficient in protocol buffers and strict API versioning',
      ],
    },
    architecture: {
      coreWorkflow: 'Low-latency workflow engine and distributed queue that streams events over gRPC and schedules tasks using fair-share concurrency.',
      criticalFailureModes: [
        'High-concurrency PostgreSQL connection pool exhaustion on sudden job queue bursts',
        'gRPC stream disconnects during network partitions causing lingering orphaned task states',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Optimized PostgreSQL connection pooling and atomic queue claiming queries processing millions of asynchronous tasks without deadlocks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'distributed task queue latency, PostgreSQL connection saturation, and fair queueing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // Vertical 5: Unified APIs & Multi-Tenant SaaS Integration Platforms
  {
    metadata: {
      id: 'merge_dev',
      name: 'Merge.dev',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://merge.dev',
      careersUrl: 'https://merge.dev/careers',
      platformEcosystem: ['Unified API', 'HRIS / ATS / CRM / Accounting', 'OAuth2 Sync'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '120-180',
      fundingStage: 'Series B ($75M)',
      techStack: ['Python', 'Django', 'TypeScript', 'PostgreSQL', 'Celery'],
    },
    leadership: [
      {
        name: 'Shensi Ding',
        role: 'Co-founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/shensiding/',
        technicalBackground: 'Pioneered universal API category for B2B SaaS integrations, normalizing hundreds of disparate data platforms',
        coreBiases: ['Unified schema elegance', 'Continuous sync reliability', 'Enterprise customer trust'],
      },
      {
        name: 'Gil Feig',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/gilfeig/',
        technicalBackground: 'Architected continuous multi-tenant polling and webhook synchronization engine for 200+ third-party APIs',
        coreBiases: ['Resilient rate-limiting', 'Zero schema drift', 'High developer velocity'],
      },
    ],
    keyEmployees: [],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        '14 years designing multi-tenant third-party integration pipelines and schema mapping engines',
        'Expert in upstream rate-limit management, token refresh flows, and distributed queues',
        'Python and TypeScript engineering background',
      ],
      gapsOrBridges: [
        'Scale of 200+ integrated APIs: candidate excels at reverse-engineering edge cases and writing bulletproof adapter tests',
      ],
    },
    architecture: {
      coreWorkflow: 'Continuous background workers poll and listen for webhooks across hundreds of platforms (Workday, Salesforce, BambooHR), mapping data into unified models.',
      criticalFailureModes: [
        'Upstream third-party API rate limit starvation affecting multiple downstream customers simultaneously',
        'Silent schema drift in legacy enterprise APIs causing null value propagation into unified records',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built multi-tenant integration gateways with rate-limit budget tracking, automated token refresh circuits, and strict schema validation',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'unified API schema drift, third-party rate limit budgeting, and continuous sync reliability',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },
];

export const EXTENDED_CONTACTS_MAP: Record<string, Array<{
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
  notes?: string;
}>> = {
  deliverect: [
    {
      name: 'Zhong Xu',
      role: 'CEO & Co-founder',
      email: 'zhong@deliverect.com',
      linkedInUrl: 'https://www.linkedin.com/in/zhongxu/',
      angle: 'founder_ceo',
      notes: 'Focus on global restaurant delivery aggregation margins and enterprise expansion',
    },
    {
      name: 'Jan Hollez',
      role: 'CTO & Co-founder',
      email: 'jan@deliverect.com',
      linkedInUrl: 'https://www.linkedin.com/in/janhollez/',
      angle: 'cto_eng',
      notes: 'Focus on order queue idempotency, backpressure, and sub-500ms POS injection latency',
    },
    {
      name: 'Ilja Theuwissen',
      role: 'Director of Engineering',
      email: 'ilja@deliverect.com',
      linkedInUrl: 'https://www.linkedin.com/in/iljatheuwissen/',
      angle: 'cto_eng',
      notes: 'Leads backend delivery channel connectors and modifier normalization',
    },
  ],

  omnivore: [
    {
      name: 'Dan Singer',
      role: 'CEO',
      email: 'dan@omnivore.io',
      linkedInUrl: 'https://www.linkedin.com/in/dan-singer-4a7b511/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise POS integration partnerships and restaurant franchise tech',
    },
    {
      name: 'Chris Burggren',
      role: 'VP Engineering',
      email: 'chris@omnivore.io',
      linkedInUrl: 'https://www.linkedin.com/in/cburggren/',
      angle: 'cto_eng',
      notes: 'Focus on on-premise Aloha/Micros agent stability and cloud POS bridge reliability',
    },
  ],

  lunchbox: [
    {
      name: 'Nabeel Alamgir',
      role: 'Founder & CEO',
      email: 'nabeel@lunchbox.io',
      linkedInUrl: 'https://www.linkedin.com/in/nabeelalamgir/',
      angle: 'founder_ceo',
      notes: 'Focus on restaurant profit margins and rapid white-label ordering deployment',
    },
    {
      name: 'Mohit Kansal',
      role: 'Chief Product Officer',
      email: 'mohit@lunchbox.io',
      linkedInUrl: 'https://www.linkedin.com/in/mohit-kansal/',
      angle: 'product_ops',
      notes: 'Focus on guest loyalty, catering workflows, and eliminating POS order discrepancies',
    },
  ],

  flybuy: [
    {
      name: 'Marc Wallace',
      role: 'CEO & Co-Founder',
      email: 'mwallace@radiusnetworks.com',
      linkedInUrl: 'https://www.linkedin.com/in/marc-wallace-130a052/',
      angle: 'founder_ceo',
      notes: 'Focus on drive-thru and curbside velocity for national enterprise restaurant brands',
    },
    {
      name: 'David Helms',
      role: 'Chief Product Officer',
      email: 'dhelms@radiusnetworks.com',
      linkedInUrl: 'https://www.linkedin.com/in/david-helms-697960/',
      angle: 'product_ops',
      notes: 'Focus on geofencing precision, kitchen prep pacing, and mobile battery conservation',
    },
  ],

  redox: [
    {
      name: 'Luke Bonney',
      role: 'CEO & Co-founder',
      email: 'luke@redoxengine.com',
      linkedInUrl: 'https://www.linkedin.com/in/lukebonney/',
      angle: 'founder_ceo',
      notes: 'Focus on health system EHR interoperability and rapid digital health scaling',
    },
    {
      name: 'Niko Skievaski',
      role: 'Co-founder',
      email: 'niko@redoxengine.com',
      linkedInUrl: 'https://www.linkedin.com/in/niko-skievaski/',
      angle: 'product_ops',
      notes: 'Focus on healthcare developer APIs, schema standards, and ecosystem partnerships',
    },
  ],

  particle_health: [
    {
      name: 'Jason Freudenberg',
      role: 'CEO',
      email: 'jason@particlehealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/jason-freudenberg/',
      angle: 'founder_ceo',
      notes: 'Focus on national patient data platform adoption and compliance',
    },
    {
      name: 'Troy Bannister',
      role: 'Founder',
      email: 'troy@particlehealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/troy-bannister-a35b1335/',
      angle: 'product_ops',
      notes: 'Focus on Carequality / CommonWell integration and patient identity resolution',
    },
  ],

  health_gorilla: [
    {
      name: 'Steve Yaskin',
      role: 'CEO & Co-founder',
      email: 'steve@healthgorilla.com',
      linkedInUrl: 'https://www.linkedin.com/in/steveyaskin/',
      angle: 'founder_ceo',
      notes: 'Focus on TEFCA QHIN execution, national clinical exchange, and diagnostic data APIs',
    },
    {
      name: 'Sergio Wagner',
      role: 'Chief Strategy Officer',
      email: 'sergio@healthgorilla.com',
      linkedInUrl: 'https://www.linkedin.com/in/sergiowagner/',
      angle: 'product_ops',
      notes: 'Focus on health network interoperability strategy and government data mandates',
    },
  ],

  commure: [
    {
      name: 'Ashu Singhal',
      role: 'VP Engineering',
      email: 'ashu@commure.com',
      linkedInUrl: 'https://www.linkedin.com/in/ashusinghal/',
      angle: 'cto_eng',
      notes: 'Focus on hospital operating system core engine and distributed clinical event brokers',
    },
    {
      name: 'Joe Beninato',
      role: 'VP Product',
      email: 'joe@commure.com',
      linkedInUrl: 'https://www.linkedin.com/in/beninato/',
      angle: 'product_ops',
      notes: 'Focus on clinician ergonomics, developer platforms, and EHR sensor integration',
    },
  ],

  apify: [
    {
      name: 'Jan Curn',
      role: 'Founder & CEO',
      email: 'jan@apify.com',
      linkedInUrl: 'https://www.linkedin.com/in/jancurn/',
      angle: 'founder_ceo',
      notes: 'Focus on Crawlee open-source engine, actor cloud scalability, and browser automation ecosystem',
    },
    {
      name: 'Jakub Balada',
      role: 'Co-founder',
      email: 'jakub@apify.com',
      linkedInUrl: 'https://www.linkedin.com/in/jakubbalada/',
      angle: 'cto_eng',
      notes: 'Focus on Chromium container clustering, /dev/shm memory leak fixes, and proxy mesh reliability',
    },
  ],

  scrapingbee: [
    {
      name: 'Pierre de Wulf',
      role: 'Co-founder & CEO',
      email: 'pierre@scrapingbee.com',
      linkedInUrl: 'https://www.linkedin.com/in/pierre-de-wulf/',
      angle: 'founder_ceo',
      notes: 'Focus on bootstrapped web scraping SaaS growth, developer API reliability, and zero-bullshit engineering',
    },
    {
      name: 'Kevin Sahin',
      role: 'Co-founder & CTO',
      email: 'kevin@scrapingbee.com',
      linkedInUrl: 'https://www.linkedin.com/in/kevinsahin/',
      angle: 'cto_eng',
      notes: 'Focus on headless Chrome stability, anti-bot evasion heuristics, and proxy pool throughput',
    },
  ],

  zyte: [
    {
      name: 'Shane Evans',
      role: 'CEO & Founder',
      email: 'shane@zyte.com',
      linkedInUrl: 'https://www.linkedin.com/in/shaneevans/',
      angle: 'founder_ceo',
      notes: 'Scrapy pioneer focused on enterprise ethical web data extraction and cloud scraping platforms',
    },
    {
      name: 'Tomas Svoboda',
      role: 'Director of Engineering',
      email: 'tomas@zyte.com',
      linkedInUrl: 'https://www.linkedin.com/in/tomassvoboda/',
      angle: 'cto_eng',
      notes: 'Focus on Smart Proxy Manager ban rates, automated unblocking algorithms, and headless rendering',
    },
  ],

  nimble: [
    {
      name: 'Maoz Lakovski',
      role: 'CEO & Founder',
      email: 'maoz@nimbleway.com',
      linkedInUrl: 'https://www.linkedin.com/in/maozlakovski/',
      angle: 'founder_ceo',
      notes: 'Focus on AI browser extraction engine, fingerprint indistinguishability, and enterprise data agents',
    },
    {
      name: 'Alon Chen',
      role: 'VP R&D',
      email: 'alon@nimbleway.com',
      linkedInUrl: 'https://www.linkedin.com/in/alon-chen-5969013b/',
      angle: 'cto_eng',
      notes: 'Focus on CDP multiplexing latency, TLS client hello emulation, and anti-detection systems',
    },
  ],

  inngest: [
    {
      name: 'Chris O\'Brien',
      role: 'Co-founder & CEO',
      email: 'chris@inngest.com',
      linkedInUrl: 'https://www.linkedin.com/in/chriseobrien/',
      angle: 'founder_ceo',
      notes: 'Focus on durable execution adoption, developer experience, and serverless workflow orchestration',
    },
    {
      name: 'Tony Holdstock-Brown',
      role: 'Co-founder & CTO',
      email: 'tony@inngest.com',
      linkedInUrl: 'https://www.linkedin.com/in/tonyhb/',
      angle: 'cto_eng',
      notes: 'Focus on event stream scheduling latency, step idempotency, and state serialization resilience',
    },
  ],

  trigger_dev: [
    {
      name: 'Matt Aitken',
      role: 'Co-founder & CEO',
      email: 'matt@trigger.dev',
      linkedInUrl: 'https://www.linkedin.com/in/michaela-aitken/',
      angle: 'founder_ceo',
      notes: 'Focus on open-source background jobs framework, realtime streaming UI, and developer community',
    },
    {
      name: 'Eric Allam',
      role: 'Co-founder & CTO',
      email: 'eric@trigger.dev',
      linkedInUrl: 'https://www.linkedin.com/in/ericallam/',
      angle: 'cto_eng',
      notes: 'Focus on Bun runtime execution, WebSocket streaming log pipelines, and zero-timeout worker clusters',
    },
  ],

  hatchet: [
    {
      name: 'Alexander Belanger',
      role: 'Founder & CEO',
      email: 'alex@hatchet.run',
      linkedInUrl: 'https://www.linkedin.com/in/alex-belanger/',
      angle: 'founder_ceo',
      notes: 'Focus on sub-millisecond task queue performance, fair concurrency queueing, and enterprise scale',
    },
    {
      name: 'Gabe Ragland',
      role: 'Founding Engineer',
      email: 'gabe@hatchet.run',
      linkedInUrl: 'https://www.linkedin.com/in/gabrielragland/',
      angle: 'cto_eng',
      notes: 'Focus on developer SDKs, gRPC streaming client adapters, and dashboard ergonomics',
    },
  ],

  merge_dev: [
    {
      name: 'Shensi Ding',
      role: 'Co-founder & CEO',
      email: 'shensi@merge.dev',
      linkedInUrl: 'https://www.linkedin.com/in/shensiding/',
      angle: 'founder_ceo',
      notes: 'Focus on universal B2B SaaS integration category expansion and enterprise customer growth',
    },
    {
      name: 'Gil Feig',
      role: 'Co-founder & CTO',
      email: 'gil@merge.dev',
      linkedInUrl: 'https://www.linkedin.com/in/gilfeig/',
      angle: 'cto_eng',
      notes: 'Focus on rate limit starvation mitigation across 200+ partner APIs and automated schema drift alerts',
    },
  ],
};
