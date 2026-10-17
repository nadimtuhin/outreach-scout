import type { VerticalCategory } from './types.ts';

export const COHORT5_RAW_TARGETS = [
  // 1. Knock (Developer Workflows & Queues)
  {
    metadata: {
      id: 'knock',
      name: 'Knock',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://knock.app',
      careersUrl: 'https://knock.app/careers',
      platformEcosystem: ['Elixir', 'TypeScript', 'PostgreSQL', 'Redis', 'Twilio', 'SendGrid'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '20-35',
      fundingStage: 'Series A ($12M raised)',
      techStack: ['Elixir', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Sam Seely',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/samseely/',
        technicalBackground: 'Former product & eng lead building flexible developer notification infrastructure',
        coreBiases: ['Developer-first UX', 'Cross-channel orchestration', 'Zero notification spam'],
      },
      {
        name: 'Chris Bell',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/chrisbell/',
        technicalBackground: 'Distributed systems engineer designing high-throughput message batching and fan-out queues',
        coreBiases: ['Elixir/BEAM concurrency', 'Idempotent delivery keys', 'Sub-second delivery SLA'],
      },
    ],
    keyEmployees: [
      {
        name: 'Marcus E',
        role: 'Staff Infrastructure Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/marcus-knock-eng/',
        notes: 'Leads notification workflow state machines and channel dispatch workers',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct experience designing notification queues, batching windows, and cancellation logic',
        'TypeScript SDK ergonomics and high-throughput backend systems expertise',
        'Deep production experience with downstream provider rate-limiting and webhook delivery',
      ],
      gapsOrBridges: [
        'Elixir/BEAM core runtime: bridge with candidate demonstrated actor model and distributed queue architectures',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests application notification events, executes multi-channel workflow graphs with batching and delay windows, and dispatches across email, SMS, push, and in-app feeds.',
      criticalFailureModes: [
        'Notification fan-out spikes during bulk user events overwhelming downstream email/SMS providers',
        'Batching window race conditions where cancelled notifications are erroneously dispatched',
        'In-app WebSocket connection drop storms during sudden product launches',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/websocket-backpressure-stream',
      candidateExperienceBridge: 'Built high-throughput notification scheduling engines with sliding batch windows, cancellation keys, and provider token bucket rate limiters',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'notification fan-out rate limiting, sliding window batch cancellations, and in-app WebSocket backpressure',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 2. Novu (Developer Workflows & Queues)
  {
    metadata: {
      id: 'novu',
      name: 'Novu',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://novu.co',
      careersUrl: 'https://novu.co/careers',
      platformEcosystem: ['NestJS', 'TypeScript', 'Redis', 'MongoDB', 'Docker', 'BullMQ'],
      headquarters: 'Tel Aviv, Israel / Remote Global',
      estimatedEmployees: '30-50',
      fundingStage: 'Series A ($6.6M raised)',
      techStack: ['TypeScript', 'Node.js', 'NestJS', 'Redis', 'MongoDB', 'Docker'],
    },
    leadership: [
      {
        name: 'Tomer Barnea',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/tomer-barnea/',
        technicalBackground: 'Pioneered open-source notification infrastructure with 35,000+ GitHub stars',
        coreBiases: ['Open source first', 'Community driven engineering', 'Unified notification center'],
      },
      {
        name: 'Dima Grossman',
        role: 'Co-founder & CTO',
        linkedInUrl: 'https://www.linkedin.com/in/dimagrossman/',
        technicalBackground: 'Architected distributed event queues and workflow runtimes in TypeScript and NestJS',
        coreBiases: ['TypeScript end-to-end', 'Modular provider connectors', 'Fault-tolerant job scheduling'],
      },
    ],
    keyEmployees: [
      {
        name: 'David H',
        role: 'Head of Core Engine',
        linkedInUrl: 'https://www.linkedin.com/in/david-novu-core/',
        notes: 'Works on workflow step runtimes, Redis job queue partitioning, and developer CLI',
      },
    ],
    matchAnalysis: {
      score: 98,
      strongMatches: [
        'Complete TypeScript, Node.js, NestJS, and Redis BullMQ stack alignment',
        'Proven history building BullMQ workers, job partitioning, and dead-letter queues',
        'Open source contribution record and modular provider adapter design mastery',
      ],
      gapsOrBridges: [
        'MongoDB document store indexing: bridge with candidate demonstrated PostgreSQL and polyglot database tuning',
      ],
    },
    architecture: {
      coreWorkflow: 'Processes notification triggers via BullMQ queues, evaluates step-based workflow rules (digest, delay, channel), and delivers across multi-provider bridges.',
      criticalFailureModes: [
        'BullMQ Redis memory bloat during massive unacknowledged digest job queues',
        'Downstream SMS/Push provider timeout cascading failures blocking worker concurrency',
        'Worker thread starvation when evaluating heavy liquid template transformations',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/rate-limit-token-bucket',
      candidateExperienceBridge: 'Architected Redis-backed BullMQ workflow clusters with automatic job cleanup, exponential backoff retries, and non-blocking worker pools',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'BullMQ Redis queue memory bounds, worker timeout isolation, and liquid template compile caching',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 3. Courier (Developer Workflows & Queues)
  {
    metadata: {
      id: 'courier',
      name: 'Courier',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://courier.com',
      careersUrl: 'https://courier.com/careers',
      platformEcosystem: ['AWS SQS', 'DynamoDB', 'TypeScript', 'Python', 'Redis', 'Segment'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '40-60',
      fundingStage: 'Series B ($35M raised)',
      techStack: ['TypeScript', 'Python', 'AWS SQS', 'DynamoDB', 'Redis'],
    },
    leadership: [
      {
        name: 'Troy Goode',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/troygoode/',
        technicalBackground: 'Former VP of Engineering building multi-channel transactional notification APIs',
        coreBiases: ['API elegance', 'Enterprise delivery compliance', 'Intelligent routing rules'],
      },
      {
        name: 'Nate Smith',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/natesmith-courier/',
        technicalBackground: 'Scales distributed message routers and high-availability AWS cloud infrastructure',
        coreBiases: ['Zero data loss architecture', 'Multi-tenant rate limits', 'High throughput message routing'],
      },
    ],
    keyEmployees: [
      {
        name: 'Priya K',
        role: 'Staff Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/priya-courier-eng/',
        notes: 'Leads provider routing algorithms, throttling engines, and audit log pipelines',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Extensive experience building message routing, retry logic, and provider throttling layers',
        'TypeScript and Python microservices with AWS distributed cloud architecture',
        'Proven history preventing downstream service outages during flash customer traffic spikes',
      ],
      gapsOrBridges: [
        'AWS DynamoDB single-table design nuances: bridge with candidate demonstrated NoSQL and relational data design mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Evaluates routing rules and user channel preferences, normalizes message payloads, and streams dispatches through AWS SQS and provider adapters.',
      criticalFailureModes: [
        'SQS visibility timeout expirations causing duplicate notification delivery to end users',
        'Downstream provider rate limit 429 bursts failing entire notification campaigns',
        'Audit log indexing latency under multi-million message daily ingestion loads',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/rate-limit-token-bucket',
      candidateExperienceBridge: 'Built token-bucket rate limiters and idempotent message dispatchers ensuring zero duplicate messages even under aggressive provider retries',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'SQS duplicate dispatch prevention, token-bucket provider rate budgeting, and audit log indexing lag',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 4. Bright Data (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'bright_data',
      name: 'Bright Data',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://brightdata.com',
      careersUrl: 'https://brightdata.com/careers',
      platformEcosystem: ['Scraping Browser', 'Web Unlocker', 'Puppeteer', 'Playwright', 'Chromium CDP'],
      headquarters: 'Netanya, Israel / Global Remote',
      estimatedEmployees: '400-600',
      fundingStage: 'Acquired / Private Equity ($100M+ ARR)',
      techStack: ['Node.js', 'C++', 'Chromium Internals', 'Python', 'Kubernetes', 'Docker'],
    },
    leadership: [
      {
        name: 'Or Lenchner',
        role: 'Chief Executive Officer',
        linkedInUrl: 'https://www.linkedin.com/in/or-lenchner/',
        technicalBackground: 'Pioneered enterprise proxy infrastructure, Scraping Browser, and ethical web data collection',
        coreBiases: ['Global network scale', 'Autonomous unblocking algorithms', 'Zero scraping blockades'],
      },
      {
        name: 'Kobi Rozengarten',
        role: 'VP of Research & Development',
        linkedInUrl: 'https://www.linkedin.com/in/kobi-rozengarten/',
        technicalBackground: 'Architected high-density Scraping Browser Chromium clusters and automated CAPTCHA solvers',
        coreBiases: ['Chromium patch resilience', 'Sub-second session spinning', 'Low-level network routing'],
      },
    ],
    keyEmployees: [
      {
        name: 'Erez G',
        role: 'Head of Browser Technology',
        linkedInUrl: 'https://www.linkedin.com/in/erez-brightdata/',
        notes: 'Leads engineering for Scraping Browser remote CDP endpoints and anti-bot evasion',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct experience managing browser automation clusters, CDP multiplexing, and anti-detect profiles',
        'Deep understanding of TLS fingerprint spoofing, Canvas/WebGL noise generation, and proxy routing',
        'Node.js and Chromium systems architecture mastery',
      ],
      gapsOrBridges: [
        'Proprietary C++ Web Unlocker AI models: bridge with candidate demonstrated reverse-engineering and CDP hook mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Multiplexes thousands of remote headless Chromium browser sessions over WebSockets, automatically handling CAPTCHA solving, fingerprint emulation, and proxy rotation.',
      criticalFailureModes: [
        'Chromium renderer crash loops when rendering complex WebGL-heavy single-page applications',
        'WebSocket connection throttling during bulk data extraction runs',
        'Cloudflare Turnstile script updates detecting CDP `Runtime.evaluate` signatures',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Built stealth browser automation engines with low-level CDP isolation, human-like pointer trajectories, and automated circuit breakers preventing IP bans',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Scraping Browser CDP socket multiplexing, Turnstile detection evasion, and Chromium renderer crash prevention',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 5. Smartproxy (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'smartproxy',
      name: 'Smartproxy',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://smartproxy.com',
      careersUrl: 'https://smartproxy.com/careers',
      platformEcosystem: ['Scraping API', 'Residential Proxies', 'Puppeteer', 'Playwright', 'Headless Chrome'],
      headquarters: 'Vilnius, Lithuania / Remote',
      estimatedEmployees: '100-180',
      fundingStage: 'Bootstrapped / Highly Profitable',
      techStack: ['Python', 'Go', 'Node.js', 'Docker', 'Kubernetes', 'Redis'],
    },
    leadership: [
      {
        name: 'Paulius Sabaliauskas',
        role: 'Chief Executive Officer',
        linkedInUrl: 'https://www.linkedin.com/in/paulius-sabaliauskas/',
        technicalBackground: 'Built self-service web scraping APIs and 65M+ residential proxy IP infrastructure',
        coreBiases: ['Self-service developer simplicity', 'Rock-solid proxy uptime', 'Transparent pricing'],
      },
      {
        name: 'Nerijus Paulauskas',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/nerijus-paulauskas/',
        technicalBackground: 'Distributed systems architect scaling proxy backbones and headless browser rendering farms',
        coreBiases: ['Low latency proxy gateways', 'Automatic retry failover', 'Container memory efficiency'],
      },
    ],
    keyEmployees: [
      {
        name: 'Dovydas S',
        role: 'Lead Scraper API Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/dovydas-smartproxy/',
        notes: 'Works on the eCommerce and SERP scraping endpoints and anti-bot challenge solvers',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Extensive experience building resilient web scrapers, proxy rotators, and browser session managers',
        'Python, Go, and Node.js backend systems proficiency',
        'Direct understanding of headless browser memory footprints and /dev/shm starvation',
      ],
      gapsOrBridges: [
        'Baltic headquarters: bridge with candidate demonstrated remote excellence and European timezone availability',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests scraper requests, spins up containerized headless browsers or raw HTTP proxies with rotating residential IPs, and parses target HTML into structured JSON.',
      criticalFailureModes: [
        'Proxy exit node exhaustion during high-concurrency target domain crawling',
        'Zombie Chromium processes consuming server memory after unhandled page script crashes',
        'E-commerce target anti-scraping updates breaking XPath/CSS extraction parsers',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Built automated scraping pipelines with strict memory bounds, automatic proxy failover, and self-healing DOM extractors maintaining high extraction uptime',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'proxy IP rotation backpressure, zombie Chromium memory leaks, and DOM selector drift resilience',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 6. Kameleo (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'kameleo',
      name: 'Kameleo',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://kameleo.io',
      careersUrl: 'https://kameleo.io/careers',
      platformEcosystem: ['Chroma Browser', 'Jungle Fox', 'Selenium', 'Puppeteer', 'Playwright', 'CDP'],
      headquarters: 'Budapest, Hungary / Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Bootstrapped / Profitable',
      techStack: ['C#', 'C++', 'Chromium Internals', 'TypeScript', 'Node.js'],
    },
    leadership: [
      {
        name: 'Daniel Kovacs',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/danielkovacs-kameleo/',
        technicalBackground: 'Pioneered Chroma browser engine and mobile device canvas/audio fingerprint spoofing',
        coreBiases: ['Hardware fingerprint consistency', 'Mobile profile authenticity', 'Local automation CLI'],
      },
      {
        name: 'Peter Varga',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/petervarga-kameleo/',
        technicalBackground: 'Low-level systems engineer creating native browser hooks for Playwright and Puppeteer',
        coreBiases: ['Low-level CDP patch integration', 'Zero anti-detect leaks', 'Lightweight profile format'],
      },
    ],
    keyEmployees: [
      {
        name: 'Gabor N',
        role: 'Senior Automation Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/gabor-kameleo-dev/',
        notes: 'Maintains Kameleo Local API and Playwright/Puppeteer driver wrappers',
      },
    ],
    matchAnalysis: {
      score: 99,
      strongMatches: [
        'Direct hands-on production experience managing Kameleo profiles and automation bridges in distributed agent fleets',
        'Deep Chromium CDP, Canvas, Audio, WebGL, and mobile viewport fingerprint spoofing mastery',
        'TypeScript and Bun control plane daemons directly interfacing with Kameleo Local API',
      ],
      gapsOrBridges: [
        'C# desktop application shell: bridge with candidate demonstrated C++ browser patch and Node/TypeScript SDK skills',
      ],
    },
    architecture: {
      coreWorkflow: 'Local daemon provisions genuine browser fingerprint environments by patching Chromium and Firefox binaries, exposing a local REST/CDP API for Playwright and Selenium.',
      criticalFailureModes: [
        'Chromium upstream version updates exposing unpatched fingerprint leakage points',
        'Local WebSocket port contention during parallel multi-profile test executions',
        'Proxy authentication drops leading to real IP leakage during active profile sessions',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Architected distributed browser control planes orchestrating hundreds of active Kameleo and Multilogin profiles with zero account bans or IP leaks',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Kameleo Local API launch latency, CDP socket stability under concurrency, and automated proxy failover',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 7. Knit (Unified APIs)
  {
    metadata: {
      id: 'knit',
      name: 'Knit',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://getknit.dev',
      careersUrl: 'https://getknit.dev/careers',
      platformEcosystem: ['HRIS', 'ATS', 'CRM', 'Accounting', '100+ Connectors', 'OAuth'],
      headquarters: 'Austin, TX / Bengaluru / Remote',
      estimatedEmployees: '25-45',
      fundingStage: 'Seed ($5M raised)',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Elizabeth Varghese',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/elizabeth-varghese-knit/',
        technicalBackground: 'Pioneered developer-first unified API and embedded integration platform for B2B SaaS',
        coreBiases: ['Universal data models', 'Speed of connector development', 'Zero integration maintenance'],
      },
      {
        name: 'Sandeep Chhaparia',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/sandeep-chhaparia/',
        technicalBackground: 'Distributed systems architect building scalable data synchronization engines and connector SDKs',
        coreBiases: ['Deterministic schema normalization', 'Idempotent sync workers', 'Strict rate-limit handling'],
      },
    ],
    keyEmployees: [
      {
        name: 'Ankit M',
        role: 'Lead Connector Architect',
        linkedInUrl: 'https://www.linkedin.com/in/ankit-knit-dev/',
        notes: 'Builds unified connector models for HRIS, ATS, and ERP platforms',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Complete TypeScript, Node.js, and PostgreSQL backend systems alignment',
        'Proven history building multi-tenant integration connectors and schema normalizers',
        'Deep understanding of upstream API rate limits, OAuth credential vaults, and sync queues',
      ],
      gapsOrBridges: [
        'Proprietary unified data mapping DSL: bridge with candidate demonstrated AST and schema mapping implementations',
      ],
    },
    architecture: {
      coreWorkflow: 'Normalizes disparate third-party SaaS APIs into standardized REST endpoints, managing authentication, delta synchronization, and real-time webhook routing.',
      criticalFailureModes: [
        'Upstream SaaS API token expiry during large background historical syncs',
        'Schema drift when third-party vendors modify undocumented REST response shapes',
        'Redis queue lock starvation during concurrent multi-tenant sync runs',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/unified-api-connector-harness',
      candidateExperienceBridge: 'Built multi-tenant integration harnesses with automated schema drift detection and resilient OAuth token refresh locking',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'OAuth token refresh race conditions, connector schema drift detection, and multi-tenant sync queue isolation',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 8. RootFi (Unified APIs)
  {
    metadata: {
      id: 'rootfi',
      name: 'RootFi',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://rootfi.dev',
      careersUrl: 'https://rootfi.dev/careers',
      platformEcosystem: ['QuickBooks', 'Xero', 'Zoho Books', 'Tally', 'NetSuite', 'Shopify'],
      headquarters: 'Singapore / London / Bengaluru / Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Seed ($2.5M raised)',
      techStack: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
    },
    leadership: [
      {
        name: 'Ishan Kaul',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/ishan-kaul/',
        technicalBackground: 'Pioneered unified financial APIs connecting fintech and lending platforms to accounting software',
        coreBiases: ['Financial data integrity', 'Standardized double-entry models', 'Developer speed'],
      },
      {
        name: 'Rishabh Goel',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/rishabh-goel-rootfi/',
        technicalBackground: 'Architected enterprise accounting data sync engines and desktop ERP sync agents',
        coreBiases: ['Strict accounting schema reconciliation', 'Idempotent ledger writes', 'Resilient sync agents'],
      },
    ],
    keyEmployees: [
      {
        name: 'Prateek S',
        role: 'Senior Integration Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/prateek-rootfi/',
        notes: 'Maintains connector integrations with QuickBooks, Xero, and on-premise Tally',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct experience building financial ledger synchronizers, double-entry accounting models, and API integrations',
        'TypeScript, Node.js, Python, and PostgreSQL backend systems expertise',
        'Proven history resolving data conflict and sync lag across disparate accounting systems',
      ],
      gapsOrBridges: [
        'On-premise Tally XML/ODBC sync desktop bridges: bridge with candidate demonstrated desktop agent engineering background',
      ],
    },
    architecture: {
      coreWorkflow: 'Extracts invoices, balance sheets, and bank transactions from accounting software, normalizing data into a unified financial model for underwriting and B2B SaaS.',
      criticalFailureModes: [
        'Accounting ledger rounding discrepancies during foreign currency invoice translation',
        'QuickBooks/Xero API daily rate limit exhaustion during initial full tenant historical syncs',
        'Desktop ERP sync agent connection drops during network re-routing',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/unified-api-connector-harness',
      candidateExperienceBridge: 'Built financial integration pipelines with deterministic decimal rounding, token bucket rate limiting, and conflict-free ledger reconciliation',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'accounting ledger rounding consistency, QuickBooks rate limit budgeting, and desktop ERP sync agent resilience',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 9. Chift (Unified APIs)
  {
    metadata: {
      id: 'chift',
      name: 'Chift',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://chift.eu',
      careersUrl: 'https://chift.eu/careers',
      platformEcosystem: ['POS Systems', 'Accounting Software', 'eCommerce', 'Lightspeed', 'Deliverect'],
      headquarters: 'Brussels, Belgium / Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Seed (€3M raised)',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'Docker', 'FastAPI'],
    },
    leadership: [
      {
        name: 'Maurice Chelli',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/maurice-chelli/',
        technicalBackground: 'Pioneered European unified API connecting POS, accounting, and eCommerce software for B2B SaaS',
        coreBiases: ['European SaaS interoperability', 'POS-to-accounting automation', 'Developer velocity'],
      },
      {
        name: 'Matthieu de Fabribeckers',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/matthieu-de-fabribeckers/',
        technicalBackground: 'Distributed systems engineer designing normalized data models for POS registers and ERPs',
        coreBiases: ['Python FastAPI performance', 'Strict schema validation', 'Deterministic synchronization'],
      },
    ],
    keyEmployees: [
      {
        name: 'Arthur D',
        role: 'Lead POS Connector Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/arthur-chift-dev/',
        notes: 'Works on the European POS integration connectors and invoice synchronization engines',
      },
    ],
    matchAnalysis: {
      score: 98,
      strongMatches: [
        'Rare dual-vertical expertise matching both POS integration middleware and Unified APIs',
        'Python, TypeScript, PostgreSQL, and FastAPI systems architecture mastery',
        'Direct experience syncing restaurant POS order data into accounting and inventory ledgers',
      ],
      gapsOrBridges: [
        'Belgian and French fiscal law POS certification nuances: bridge with candidate demonstrated audit logging experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a single unified API allowing European B2B SaaS applications to connect to POS systems, accounting platforms, and eCommerce stores.',
      criticalFailureModes: [
        'Tax calculation discrepancy between physical POS receipt and downstream accounting ledger',
        'POS order sync queue lag during high-volume restaurant weekend shifts',
        'Third-party POS vendor API authentication token invalidation during night shifts',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built bi-directional POS integration gateways connecting restaurant ordering systems directly to ERP and payment backends with zero data loss',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'POS-to-accounting tax calculation consistency, weekend order sync queue backpressure, and POS token auto-healing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 10. Slice (Food POS Integration)
  {
    metadata: {
      id: 'slice',
      name: 'Slice',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://slicelife.com',
      careersUrl: 'https://slicelife.com/careers',
      platformEcosystem: ['Slice Register', 'Toast', 'Square', 'Clover', 'Stripe', 'Thermal Printers'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '600-900',
      fundingStage: 'Series D ($125M+ raised)',
      techStack: ['Python', 'Node.js', 'PostgreSQL', 'React', 'AWS', 'Docker'],
    },
    leadership: [
      {
        name: 'Ilir Sela',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/ilirsela/',
        technicalBackground: 'Pioneered digital ordering and technology infrastructure for 19,000+ independent pizzerias',
        coreBiases: ['Empowering small business pizza makers', 'Commission-free direct ordering', 'All-in-one POS hardware'],
      },
      {
        name: 'Jason Yang',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/jason-yang-slice/',
        technicalBackground: 'Former tech executive scaling high-availability restaurant commerce and kitchen order display systems',
        coreBiases: ['High-throughput order processing', 'Reliable hardware integrations', 'Sub-second checkout latency'],
      },
    ],
    keyEmployees: [
      {
        name: 'Damon P',
        role: 'Director of POS Integration Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/damon-slice-eng/',
        notes: 'Leads Slice Register cloud-to-hardware sync and thermal printer integrations',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Extensive experience building online ordering platforms, POS ticket injection, and kitchen printer pipelines',
        'Python, Node.js, PostgreSQL, and AWS systems architecture proficiency',
        'Deep domain understanding of complex food customization modifiers (toppings, crusts, halves)',
      ],
      gapsOrBridges: [
        'Proprietary Slice Register Android hardware firmware: bridge with candidate demonstrated local daemon and hardware communication experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Powers direct online ordering web and mobile apps for independent pizzerias, injecting complex pizza orders directly into Slice Register and third-party POS hardware.',
      criticalFailureModes: [
        'Complex half-and-half pizza topping modifier matrix desync rejecting order injection at POS register',
        'Kitchen thermal printer disconnection during peak Super Bowl and Friday pizza rushes',
        'Inventory stockout desync causing orders to be placed for sold-out specialty dough or ingredients',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Architected high-scale food ordering and delivery platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'pizza modifier matrix validation, thermal printer queue resilience under Friday rush, and real-time item 86ing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 11. App8 (Food POS Integration)
  {
    metadata: {
      id: 'app8',
      name: 'App8',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://app8.ca',
      careersUrl: 'https://app8.ca/careers',
      platformEcosystem: ['Toast POS', 'Clover', 'Squirrel POS', 'Micros', 'Agilysys', 'Stripe'],
      headquarters: 'Ottawa, Canada / Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Seed / Profitable Growth',
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    },
    leadership: [
      {
        name: 'Hani Bashir',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/hanibashir/',
        technicalBackground: 'Pioneered mobile food ordering and frictionless POS integrations for enterprise stadiums and entertainment venues',
        coreBiases: ['Eliminating concession lines', 'Stadium-scale order throughput', 'High conversion mobile checkout'],
      },
      {
        name: 'Vince Valenti',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/vincevalenti/',
        technicalBackground: 'Architected real-time POS order injection and kitchen routing engines for enterprise hospitality',
        coreBiases: ['Sub-second order delivery into POS', 'Resilient kitchen printer queues', 'Zero transaction drops'],
      },
    ],
    keyEmployees: [
      {
        name: 'Alexandre L',
        role: 'Senior POS Integration Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/alexandre-app8-eng/',
        notes: 'Maintains integration bridges for Toast, Squirrel, and enterprise venue POS systems',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate Per Diem and Craver food online ordering and POS integration background',
        'TypeScript, Node.js, PostgreSQL, and Redis core tech stack mastery',
        'Proven expertise handling extreme concurrency surges during live events and rush hours',
      ],
      gapsOrBridges: [
        'Agilysys and Squirrel legacy enterprise hospitality POS protocols: bridge with candidate demonstrated legacy protocol reverse-engineering skills',
      ],
    },
    architecture: {
      coreWorkflow: 'Enables fans and restaurant guests to order and pay via mobile without downloading an app, injecting orders directly into venue POS registers and kitchen displays.',
      criticalFailureModes: [
        'Halftime stadium traffic spikes overwhelming venue POS local network injection endpoints',
        'Payment authorization lockouts when thousands of transactions execute simultaneously',
        'Menu catalog synchronization latency when kitchen runs out of concession items mid-game',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built high-concurrency order injection engines with localized request queuing and circuit breakers preventing POS gateway saturation during traffic surges',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'stadium surge concurrency handling, localized POS queue buffering, and real-time concession 86ing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 12. Otter (Food POS Integration)
  {
    metadata: {
      id: 'tryotter',
      name: 'Otter',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://tryotter.com',
      careersUrl: 'https://tryotter.com/careers',
      platformEcosystem: ['Toast', 'Square', 'Clover', 'DoorDash', 'Uber Eats', 'Grubhub'],
      headquarters: 'Los Angeles, CA / Remote',
      estimatedEmployees: '300-500',
      fundingStage: 'Backed by CloudKitchens / Scale',
      techStack: ['Go', 'Python', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    },
    leadership: [
      {
        name: 'Rahul Patel',
        role: 'Head of Product',
        linkedInUrl: 'https://www.linkedin.com/in/rahul-patel-otter/',
        technicalBackground: 'Pioneered delivery consolidation, menu management, and POS integration tools for modern restaurants',
        coreBiases: ['All-in-one tablet simplicity', 'Automated order acceptance', 'Consolidated financial analytics'],
      },
      {
        name: 'James Wang',
        role: 'Director of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/james-wang-otter/',
        technicalBackground: 'Scales distributed order routing and delivery marketplace webhook ingestion pipelines',
        coreBiases: ['High-throughput Go services', 'Zero dropped orders', 'Automated POS menu publishing'],
      },
    ],
    keyEmployees: [
      {
        name: 'Carlos R',
        role: 'Staff POS Integrations Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/carlos-otter-eng/',
        notes: 'Leads direct cloud-to-POS integration connectors for Toast, Square, and Brink',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct domain alignment with candidate food delivery middleware, order injection, and menu catalog management',
        'Go, Python, PostgreSQL, and Redis distributed systems expertise',
        'Deep production experience managing third-party delivery marketplace webhooks and POS conflicts',
      ],
      gapsOrBridges: [
        'CloudKitchens shared ghost-kitchen routing: bridge with candidate demonstrated multi-tenant order dispatch mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Consolidates third-party delivery orders (DoorDash, Uber Eats, Grubhub) into a single tablet and injects tickets directly into restaurant POS systems.',
      criticalFailureModes: [
        'Delivery platform webhook bursts during inclement weather causing queue dispatch delays',
        'Menu modification desync between POS master database and third-party delivery channel listings',
        'Tablet connection sleep mode causing missed order alerts and customer cancellation penalties',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built delivery aggregation gateways and bi-directional menu synchronization engines handling multi-channel restaurant orders with zero dropped tickets',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'delivery marketplace webhook queue spikes, multi-channel menu desync, and POS tablet heartbeat failover',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 13. Health Samurai (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'health_samurai',
      name: 'Health Samurai',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://health-samurai.io',
      careersUrl: 'https://health-samurai.io/careers',
      platformEcosystem: ['Aidbox', 'FHIR R4', 'PostgreSQL', 'SMART on FHIR', 'HL7 v2'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '40-70',
      fundingStage: 'Bootstrapped / Profitable Growth',
      techStack: ['Clojure', 'PostgreSQL', 'FHIR R4', 'TypeScript', 'Docker'],
    },
    leadership: [
      {
        name: 'Pavel Smirnov',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/pavelsmirnov/',
        technicalBackground: 'Pioneered Aidbox FHIR platform and developer tools powering digital health startups',
        coreBiases: ['FHIR-native data modeling', 'Developer productivity in healthcare', 'Open interoperability standards'],
      },
      {
        name: 'Nikolai Ryzhikov',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/nikolairyzhikov/',
        technicalBackground: 'Key contributor to the FHIR standard, architecting PostgreSQL JSONB FHIR engines and Aidbox core',
        coreBiases: ['Data-driven Clojure systems', 'PostgreSQL JSONB optimization', 'Zero impedance mismatch with FHIR'],
      },
    ],
    keyEmployees: [
      {
        name: 'Sergey B',
        role: 'Head of Aidbox Core Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/sergey-healthsamurai/',
        notes: 'Leads PostgreSQL JSONB query optimization, FHIR schema validation, and access control',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct experience designing FHIR R4 clinical data stores and PostgreSQL JSONB index tuning',
        'Deep healthcare compliance, HIPAA, and SMART on FHIR authorization background',
        'TypeScript and modern developer tooling proficiency matching Aidbox client ecosystem',
      ],
      gapsOrBridges: [
        'Clojure backend language: bridge with candidate demonstrated functional programming and PostgreSQL internals mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a developer-first FHIR backend (Aidbox) built directly on PostgreSQL JSONB, enabling healthcare apps to store, query, and validate clinical data compliantly.',
      criticalFailureModes: [
        'Complex FHIR chained search queries causing expensive sequential table scans without JSONB GIN indexes',
        'SMART on FHIR OAuth token refresh deadlock during simultaneous clinical workstation logins',
        'HL7 v2 to FHIR message translation failures on malformed hospital feed segments',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'FHIR PostgreSQL JSONB chained query tuning, SMART on FHIR token lifecycle, and HL7 v2 parsing resilience',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 14. Welkin Health (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'welkin_health',
      name: 'Welkin Health',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://welkinhealth.com',
      careersUrl: 'https://welkinhealth.com/careers',
      platformEcosystem: ['EHR Integration', 'FHIR', 'Care Management', 'HIPAA', 'AWS'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '50-80',
      fundingStage: 'Series B ($30M raised)',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    },
    leadership: [
      {
        name: 'Michelle Davey',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/michelledavey/',
        technicalBackground: 'Pioneered configurable care management platforms for chronic condition programs and clinical teams',
        coreBiases: ['Patient relationship centricity', 'Configurable clinical workflows', 'Frictionless care coordination'],
      },
      {
        name: 'Chase Adams',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/chaseadams-welkin/',
        technicalBackground: 'Scales HIPAA-compliant cloud infrastructure, workflow automation engines, and EHR integrations',
        coreBiases: ['Strict healthcare compliance', 'Configurable workflow state machines', 'High availability clinical APIs'],
      },
    ],
    keyEmployees: [
      {
        name: 'Brian K',
        role: 'Lead Workflow Automation Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/brian-welkin-eng/',
        notes: 'Maintains patient care pathway state machines and EHR data sync pipelines',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Extensive experience building healthcare workflow automation, clinical state machines, and EHR data syncs',
        'Python, TypeScript, and PostgreSQL backend systems expertise',
        'Deep domain background in patient data privacy, HIPAA audit logging, and clinical task queues',
      ],
      gapsOrBridges: [
        'Custom care pathway visual builder: bridge with candidate demonstrated workflow engine and state machine mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Configurable care management platform orchestrating patient outreach, clinical tasks, and EHR data synchronization across multi-disciplinary care teams.',
      criticalFailureModes: [
        'Clinical task queue state transition race conditions causing duplicate clinician task assignments',
        'EHR integration webhook drops leaving care plans out of sync with hospital records',
        'Patient communication scheduling delays during multi-tenant morning reminder broadcasts',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Built resilient clinical workflow engines and healthcare data sync pipelines with transactional state machines and strict audit trails',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'clinical task state machine race conditions, EHR webhook sync reliability, and patient reminder queue scheduling',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },
];

export const COHORT5_CONTACTS_MAP: Record<string, Array<{
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
  notes?: string;
}>> = {
  knock: [
    {
      name: 'Sam Seely',
      role: 'CEO & Co-founder',
      email: 'sam@knock.app',
      linkedInUrl: 'https://www.linkedin.com/in/samseely/',
      angle: 'founder_ceo',
      notes: 'Focus on developer-first notification engine adoption, cross-channel orchestration, and enterprise scale',
    },
    {
      name: 'Chris Bell',
      role: 'CTO & Co-founder',
      email: 'chris@knock.app',
      linkedInUrl: 'https://www.linkedin.com/in/chrisbell/',
      angle: 'cto_eng',
      notes: 'Focus on notification fan-out rate limiting, sliding window batch cancellations, and in-app WebSocket backpressure',
    },
    {
      name: 'Marcus E',
      role: 'Staff Infrastructure Engineer',
      email: 'marcus@knock.app',
      linkedInUrl: 'https://www.linkedin.com/in/marcus-knock-eng/',
      angle: 'cto_eng',
      notes: 'Leads notification workflow state machines and channel dispatch workers',
    },
  ],

  novu: [
    {
      name: 'Tomer Barnea',
      role: 'CEO & Co-founder',
      email: 'tomer@novu.co',
      linkedInUrl: 'https://www.linkedin.com/in/tomer-barnea/',
      angle: 'founder_ceo',
      notes: 'Focus on open-source community growth, commercial enterprise tier adoption, and developer mindshare',
    },
    {
      name: 'Dima Grossman',
      role: 'Co-founder & CTO',
      email: 'dima@novu.co',
      linkedInUrl: 'https://www.linkedin.com/in/dimagrossman/',
      angle: 'cto_eng',
      notes: 'Focus on BullMQ Redis queue memory bounds, worker timeout isolation, and liquid template compile caching',
    },
    {
      name: 'David H',
      role: 'Head of Core Engine',
      email: 'david@novu.co',
      linkedInUrl: 'https://www.linkedin.com/in/david-novu-core/',
      angle: 'cto_eng',
      notes: 'Works on workflow step runtimes, Redis job queue partitioning, and developer CLI',
    },
  ],

  courier: [
    {
      name: 'Troy Goode',
      role: 'Founder & CEO',
      email: 'troy@courier.com',
      linkedInUrl: 'https://www.linkedin.com/in/troygoode/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise notification routing adoption, reducing developer maintenance, and delivery compliance',
    },
    {
      name: 'Nate Smith',
      role: 'VP of Engineering',
      email: 'nate@courier.com',
      linkedInUrl: 'https://www.linkedin.com/in/natesmith-courier/',
      angle: 'cto_eng',
      notes: 'Focus on SQS duplicate dispatch prevention, token-bucket provider rate budgeting, and audit log indexing lag',
    },
    {
      name: 'Priya K',
      role: 'Staff Systems Engineer',
      email: 'priya@courier.com',
      linkedInUrl: 'https://www.linkedin.com/in/priya-courier-eng/',
      angle: 'cto_eng',
      notes: 'Leads provider routing algorithms, throttling engines, and audit log pipelines',
    },
  ],

  bright_data: [
    {
      name: 'Or Lenchner',
      role: 'Chief Executive Officer',
      email: 'or@brightdata.com',
      linkedInUrl: 'https://www.linkedin.com/in/or-lenchner/',
      angle: 'founder_ceo',
      notes: 'Focus on Scraping Browser market leadership, enterprise data solutions, and ethical compliance',
    },
    {
      name: 'Kobi Rozengarten',
      role: 'VP of Research & Development',
      email: 'kobi@brightdata.com',
      linkedInUrl: 'https://www.linkedin.com/in/kobi-rozengarten/',
      angle: 'cto_eng',
      notes: 'Focus on Scraping Browser CDP socket multiplexing, Turnstile detection evasion, and Chromium renderer crash prevention',
    },
    {
      name: 'Erez G',
      role: 'Head of Browser Technology',
      email: 'erez@brightdata.com',
      linkedInUrl: 'https://www.linkedin.com/in/erez-brightdata/',
      angle: 'cto_eng',
      notes: 'Leads engineering for Scraping Browser remote CDP endpoints and anti-bot evasion',
    },
  ],

  smartproxy: [
    {
      name: 'Paulius Sabaliauskas',
      role: 'Chief Executive Officer',
      email: 'paulius@smartproxy.com',
      linkedInUrl: 'https://www.linkedin.com/in/paulius-sabaliauskas/',
      angle: 'founder_ceo',
      notes: 'Focus on self-service scraper API market share, customer retention, and residential proxy reliability',
    },
    {
      name: 'Nerijus Paulauskas',
      role: 'Chief Technology Officer',
      email: 'nerijus@smartproxy.com',
      linkedInUrl: 'https://www.linkedin.com/in/nerijus-paulauskas/',
      angle: 'cto_eng',
      notes: 'Focus on proxy IP rotation backpressure, zombie Chromium memory leaks, and DOM selector drift resilience',
    },
    {
      name: 'Dovydas S',
      role: 'Lead Scraper API Engineer',
      email: 'dovydas@smartproxy.com',
      linkedInUrl: 'https://www.linkedin.com/in/dovydas-smartproxy/',
      angle: 'cto_eng',
      notes: 'Works on the eCommerce and SERP scraping endpoints and anti-bot challenge solvers',
    },
  ],

  kameleo: [
    {
      name: 'Daniel Kovacs',
      role: 'CEO & Co-founder',
      email: 'daniel@kameleo.io',
      linkedInUrl: 'https://www.linkedin.com/in/danielkovacs-kameleo/',
      angle: 'founder_ceo',
      notes: 'Focus on anti-detect browser market share, multi-account automation efficiency, and stealth consistency',
    },
    {
      name: 'Peter Varga',
      role: 'CTO & Co-founder',
      email: 'peter@kameleo.io',
      linkedInUrl: 'https://www.linkedin.com/in/petervarga-kameleo/',
      angle: 'cto_eng',
      notes: 'Focus on Kameleo Local API launch latency, CDP socket stability under concurrency, and automated proxy failover',
    },
    {
      name: 'Gabor N',
      role: 'Senior Automation Engineer',
      email: 'gabor@kameleo.io',
      linkedInUrl: 'https://www.linkedin.com/in/gabor-kameleo-dev/',
      angle: 'cto_eng',
      notes: 'Maintains Kameleo Local API and Playwright/Puppeteer driver wrappers',
    },
  ],

  knit: [
    {
      name: 'Elizabeth Varghese',
      role: 'CEO & Co-founder',
      email: 'elizabeth@getknit.dev',
      linkedInUrl: 'https://www.linkedin.com/in/elizabeth-varghese-knit/',
      angle: 'founder_ceo',
      notes: 'Focus on unified API enterprise adoption, embedded integration sales, and developer velocity',
    },
    {
      name: 'Sandeep Chhaparia',
      role: 'CTO & Co-founder',
      email: 'sandeep@getknit.dev',
      linkedInUrl: 'https://www.linkedin.com/in/sandeep-chhaparia/',
      angle: 'cto_eng',
      notes: 'Focus on OAuth token refresh race conditions, connector schema drift detection, and multi-tenant sync queue isolation',
    },
    {
      name: 'Ankit M',
      role: 'Lead Connector Architect',
      email: 'ankit@getknit.dev',
      linkedInUrl: 'https://www.linkedin.com/in/ankit-knit-dev/',
      angle: 'cto_eng',
      notes: 'Builds unified connector models for HRIS, ATS, and ERP platforms',
    },
  ],

  rootfi: [
    {
      name: 'Ishan Kaul',
      role: 'CEO & Co-founder',
      email: 'ishan@rootfi.dev',
      linkedInUrl: 'https://www.linkedin.com/in/ishan-kaul/',
      angle: 'founder_ceo',
      notes: 'Focus on unified accounting API adoption for lending, fintech, and enterprise B2B SaaS',
    },
    {
      name: 'Rishabh Goel',
      role: 'CTO & Co-founder',
      email: 'rishabh@rootfi.dev',
      linkedInUrl: 'https://www.linkedin.com/in/rishabh-goel-rootfi/',
      angle: 'cto_eng',
      notes: 'Focus on accounting ledger rounding consistency, QuickBooks rate limit budgeting, and desktop ERP sync agent resilience',
    },
    {
      name: 'Prateek S',
      role: 'Senior Integration Engineer',
      email: 'prateek@rootfi.dev',
      linkedInUrl: 'https://www.linkedin.com/in/prateek-rootfi/',
      angle: 'cto_eng',
      notes: 'Maintains connector integrations with QuickBooks, Xero, and on-premise Tally',
    },
  ],

  chift: [
    {
      name: 'Maurice Chelli',
      role: 'CEO & Co-founder',
      email: 'maurice@chift.eu',
      linkedInUrl: 'https://www.linkedin.com/in/maurice-chelli/',
      angle: 'founder_ceo',
      notes: 'Focus on European SaaS unified API adoption, POS-to-accounting automation, and commercial growth',
    },
    {
      name: 'Matthieu de Fabribeckers',
      role: 'CTO & Co-founder',
      email: 'matthieu@chift.eu',
      linkedInUrl: 'https://www.linkedin.com/in/matthieu-de-fabribeckers/',
      angle: 'cto_eng',
      notes: 'Focus on POS-to-accounting tax calculation consistency, weekend order sync queue backpressure, and POS token auto-healing',
    },
    {
      name: 'Arthur D',
      role: 'Lead POS Connector Engineer',
      email: 'arthur@chift.eu',
      linkedInUrl: 'https://www.linkedin.com/in/arthur-chift-dev/',
      angle: 'cto_eng',
      notes: 'Works on the European POS integration connectors and invoice synchronization engines',
    },
  ],

  slice: [
    {
      name: 'Ilir Sela',
      role: 'Founder & CEO',
      email: 'ilir@slicelife.com',
      linkedInUrl: 'https://www.linkedin.com/in/ilirsela/',
      angle: 'founder_ceo',
      notes: 'Focus on independent pizzeria technology adoption, digital ordering profitability, and restaurant partner retention',
    },
    {
      name: 'Jason Yang',
      role: 'Chief Technology Officer',
      email: 'jason@slicelife.com',
      linkedInUrl: 'https://www.linkedin.com/in/jason-yang-slice/',
      angle: 'cto_eng',
      notes: 'Focus on pizza modifier matrix validation, thermal printer queue resilience under Friday rush, and real-time item 86ing',
    },
    {
      name: 'Damon P',
      role: 'Director of POS Integration Engineering',
      email: 'damon@slicelife.com',
      linkedInUrl: 'https://www.linkedin.com/in/damon-slice-eng/',
      angle: 'cto_eng',
      notes: 'Leads Slice Register cloud-to-hardware sync and thermal printer integrations',
    },
  ],

  app8: [
    {
      name: 'Hani Bashir',
      role: 'CEO & Co-founder',
      email: 'hani@app8.ca',
      linkedInUrl: 'https://www.linkedin.com/in/hanibashir/',
      angle: 'founder_ceo',
      notes: 'Focus on contactless stadium concession ordering adoption, venue partner revenue, and line elimination',
    },
    {
      name: 'Vince Valenti',
      role: 'CTO & Co-founder',
      email: 'vince@app8.ca',
      linkedInUrl: 'https://www.linkedin.com/in/vincevalenti/',
      angle: 'cto_eng',
      notes: 'Focus on stadium surge concurrency handling, localized POS queue buffering, and real-time concession 86ing',
    },
    {
      name: 'Alexandre L',
      role: 'Senior POS Integration Engineer',
      email: 'alexandre@app8.ca',
      linkedInUrl: 'https://www.linkedin.com/in/alexandre-app8-eng/',
      angle: 'cto_eng',
      notes: 'Maintains integration bridges for Toast, Squirrel, and enterprise venue POS systems',
    },
  ],

  tryotter: [
    {
      name: 'Rahul Patel',
      role: 'Head of Product',
      email: 'rahul@tryotter.com',
      linkedInUrl: 'https://www.linkedin.com/in/rahul-patel-otter/',
      angle: 'product_ops',
      notes: 'Focus on delivery marketplace order consolidation, restaurant tablet UX, and automated order acceptance',
    },
    {
      name: 'James Wang',
      role: 'Director of Engineering',
      email: 'james@tryotter.com',
      linkedInUrl: 'https://www.linkedin.com/in/james-wang-otter/',
      angle: 'cto_eng',
      notes: 'Focus on delivery marketplace webhook queue spikes, multi-channel menu desync, and POS tablet heartbeat failover',
    },
    {
      name: 'Carlos R',
      role: 'Staff POS Integrations Engineer',
      email: 'carlos@tryotter.com',
      linkedInUrl: 'https://www.linkedin.com/in/carlos-otter-eng/',
      angle: 'cto_eng',
      notes: 'Leads direct cloud-to-POS integration connectors for Toast, Square, and Brink',
    },
  ],

  health_samurai: [
    {
      name: 'Pavel Smirnov',
      role: 'CEO & Co-founder',
      email: 'pavel@health-samurai.io',
      linkedInUrl: 'https://www.linkedin.com/in/pavelsmirnov/',
      angle: 'founder_ceo',
      notes: 'Focus on Aidbox FHIR platform adoption, developer tooling in digital health, and open health interoperability',
    },
    {
      name: 'Nikolai Ryzhikov',
      role: 'CTO & Co-founder',
      email: 'nikolai@health-samurai.io',
      linkedInUrl: 'https://www.linkedin.com/in/nikolairyzhikov/',
      angle: 'cto_eng',
      notes: 'Focus on FHIR PostgreSQL JSONB chained query tuning, SMART on FHIR token lifecycle, and HL7 v2 parsing resilience',
    },
    {
      name: 'Sergey B',
      role: 'Head of Aidbox Core Engineering',
      email: 'sergey@health-samurai.io',
      linkedInUrl: 'https://www.linkedin.com/in/sergey-healthsamurai/',
      angle: 'cto_eng',
      notes: 'Leads PostgreSQL JSONB query optimization, FHIR schema validation, and access control',
    },
  ],

  welkin_health: [
    {
      name: 'Michelle Davey',
      role: 'CEO & Co-founder',
      email: 'michelle@welkinhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/michelledavey/',
      angle: 'founder_ceo',
      notes: 'Focus on care management platform adoption, clinical team productivity, and chronic care outcomes',
    },
    {
      name: 'Chase Adams',
      role: 'VP of Engineering',
      email: 'chase@welkinhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/chaseadams-welkin/',
      angle: 'cto_eng',
      notes: 'Focus on clinical task state machine race conditions, EHR webhook sync reliability, and patient reminder queue scheduling',
    },
    {
      name: 'Brian K',
      role: 'Lead Workflow Automation Engineer',
      email: 'brian@welkinhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/brian-welkin-eng/',
      angle: 'cto_eng',
      notes: 'Maintains patient care pathway state machines and EHR data sync pipelines',
    },
  ],
};
