import type { CompanyDeepProfile } from './types.ts';

export const EXTENDED_COMPANY_PROFILES: Record<string, CompanyDeepProfile> = {
  deliverect: {
    business: {
      model: 'Global B2B SaaS restaurant integration platform & aggregator orchestration middleware',
      pricing: '$49 – $199/location/month depending on online ordering channels',
      targetCustomers: ['Enterprise QSR chains', 'Ghost kitchens', 'Multi-unit global restaurant franchises'],
      keyClients: ['Burger King', 'Taco Bell', 'Pret A Manger', 'KFC', 'Chipotle EU'],
      revenueOrFunding: 'Series D ($65M+ ARR), processing 100M+ orders annually across 50,000+ locations',
    },
    blogs: [
      {
        title: 'High-Concurrency Order Normalization at Scale: 100 Million Orders in Review',
        url: 'https://deliverect.com/blog/engineering-high-concurrency-orders',
        summary: 'How Deliverect handles Super Bowl and Black Friday order spikes without dropping webhook delivery tickets.',
        tags: ['High Concurrency', 'Webhooks', 'RabbitMQ', 'PostgreSQL'],
        date: '2026-08-12',
      },
      {
        title: 'Solving Modifier Desync Across 50 POS Systems and Delivery Aggregators',
        url: 'https://deliverect.com/blog/modifier-desync-architecture',
        summary: 'Translating complex nested menu modifier rules into canonical schema formats across Uber Eats, Deliveroo, and Toast.',
        tags: ['Menu Normalization', 'Schema Mapping', 'Toast', 'Square'],
        date: '2026-05-19',
      },
    ],
    projects: [
      {
        name: 'Deliverect DMA Engine',
        url: 'https://deliverect.com/products/delivery-manager-app',
        starsOrDownloads: '50,000+ connected locations',
        techStack: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL'],
        description: 'Global delivery aggregator hub connecting online ordering channels directly into restaurant kitchen printers.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Idempotent queue deduplication to eliminate double-charging on delivery aggregators',
        'Strict schema validation before injecting tickets into physical POS registers',
        'Sub-second webhook response times with asynchronous background processing',
      ],
      stackPreferences: ['TypeScript / Node.js', 'Python', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      engineeringCulture: [
        'Global multi-region reliability',
        'Restaurant empathy and zero ticket loss intolerance',
      ],
    },
  },

  omnivore: {
    business: {
      model: 'Universal POS API connecting enterprise hospitality and cloud apps to on-premise registers',
      pricing: 'Platform fee + usage per connected terminal ($35 – $75/terminal/month)',
      targetCustomers: ['Enterprise restaurant chains', 'Hospitality apps', 'Loyalty and dynamic pricing engines'],
      keyClients: ['Yum! Brands', 'Outback Steakhouse', 'Bloomin\' Brands', 'Dunkin\''],
      revenueOrFunding: 'Series A ($13M raised), connecting 25,000+ legacy POS terminals',
    },
    blogs: [
      {
        title: 'Bridging Legacy On-Premise POS Systems to Modern Cloud APIs',
        url: 'https://omnivore.io/blog/legacy-pos-integration',
        summary: 'Developing resilient local agents for Windows-based Micros and Aloha registers that survive store internet drops.',
        tags: ['Aloha', 'Micros', 'On-Premise Agents', 'Socket Multiplexing'],
        date: '2026-07-22',
      },
    ],
    projects: [
      {
        name: 'Omnivore POS Agent',
        url: 'https://omnivore.io/technology',
        starsOrDownloads: 'Enterprise Core / 25k terminals',
        techStack: ['Go', 'C++', 'Python', 'WebSockets'],
        description: 'Lightweight on-premise listener agent installed on store POS controllers connecting to cloud APIs.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Zero footprint on store hardware: agents must never consume CPU needed by the physical register',
        'Strict memory bounds to prevent crashes on 10-year-old Windows XP/7 POS machines',
        'Deterministic reconnect backoff during network partitions',
      ],
      stackPreferences: ['Go', 'Python', 'PostgreSQL', 'Redis', 'WebSockets'],
      engineeringCulture: [
        'Hardware and network fault empathy',
        'Extreme operational stability over bleeding-edge abstractions',
      ],
    },
  },

  lunchbox: {
    business: {
      model: 'Enterprise digital ordering and guest engagement operating system for restaurant chains',
      pricing: 'Tiered monthly subscription ($150 – $350/location/month)',
      targetCustomers: ['Fast-casual multi-unit chains', 'Regional restaurant groups', 'Enterprise dining brands'],
      keyClients: ['Bareburger', 'Clean Juice', 'Fuku', 'Tacombi'],
      revenueOrFunding: 'Series B ($50M raised), 5,000+ connected locations',
    },
    blogs: [
      {
        title: 'Building Real-Time 86ing: Preventing Kitchen Chaos During Lunch Rushes',
        url: 'https://lunchbox.io/blog/real-time-86ing',
        summary: 'How Lunchbox propagates out-of-stock signals to web, mobile, and third-party delivery apps simultaneously.',
        tags: ['Real-time Inventory', '86ing', 'POS Sync', 'WebSockets'],
        date: '2026-06-30',
      },
    ],
    projects: [
      {
        name: 'Lunchbox Core Ordering Engine',
        url: 'https://lunchbox.io/products/online-ordering',
        starsOrDownloads: '5,000+ restaurant locations',
        techStack: ['TypeScript', 'React Native', 'Node.js', 'PostgreSQL'],
        description: 'White-label web and mobile ordering suite with native loyalty and POS integration.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Sub-second cart calculation with client-side caching',
        'Zero discrepancies between guest checkout total and POS ticket total',
      ],
      stackPreferences: ['TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      engineeringCulture: ['Restaurant-first obsession', 'Rapid feature delivery with zero checkout downtime'],
    },
  },

  flybuy: {
    business: {
      model: 'Location-based customer pickup, drive-thru, and delivery dispatch optimization SaaS',
      pricing: 'Monthly SaaS fee per restaurant location ($99 – $199/location/month)',
      targetCustomers: ['National QSR brands', 'Drive-thru operators', 'Curbside pickup retailers'],
      keyClients: ['Chipotle', 'Five Guys', 'Red Robin', 'Del Taco'],
      revenueOrFunding: 'Series B ($25M raised), tracking millions of customer pickups monthly',
    },
    blogs: [
      {
        title: 'Geofence Precision vs Battery Life: Engineering Mobile Telemetry',
        url: 'https://flybuy.com/blog/geofencing-precision',
        summary: 'Tuning GPS accuracy curves and dynamic beacon listeners to detect arrival without killing phone battery.',
        tags: ['GPS', 'Geofencing', 'Mobile Telemetry', 'Kitchen Pacing'],
        date: '2026-08-04',
      },
    ],
    projects: [
      {
        name: 'Flybuy Pickup Engine',
        url: 'https://flybuy.com/products/pickup',
        starsOrDownloads: 'Millions of monthly pickups',
        techStack: ['TypeScript', 'Go', 'Redis', 'WebSockets'],
        description: 'Real-time vehicle ETA tracking engine that alerts kitchen cooks exactly when to drop fresh fries and burgers.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Geofence bounce smoothing to prevent premature kitchen firing',
        'Low-latency WebSocket event distribution for kitchen display screens',
      ],
      stackPreferences: ['TypeScript', 'Go', 'Redis Geohashes', 'WebSockets'],
      engineeringCulture: ['Precision timing empathy', 'Zero false-positive arrivals'],
    },
  },

  redox: {
    business: {
      model: 'Healthcare interoperability platform providing universal developer API across all EHRs',
      pricing: 'Enterprise tiered platform subscription ($2,000 – $25,000+/month based on message volume)',
      targetCustomers: ['Digital health startups', 'Enterprise health systems', 'Clinical research vendors'],
      keyClients: ['Clarify Health', 'Guthrie Clinic', 'Stryker', 'Well Doc', 'Memorial Sloan Kettering'],
      revenueOrFunding: 'Series D ($100M+ raised), connecting 5,000+ health system interfaces',
    },
    blogs: [
      {
        title: 'HL7 v2 to FHIR R4: Navigating 30 Years of Schema Drift in Hospital Records',
        url: 'https://redoxengine.com/blog/hl7-to-fhir-transformation',
        summary: 'Architectural lessons from translating 10 billion HL7 messages into clean FHIR clinical resources.',
        tags: ['HL7 v2', 'FHIR R4', 'Kafka', 'Streaming Transformations'],
        date: '2026-09-01',
      },
    ],
    projects: [
      {
        name: 'Redox Engine Platform',
        url: 'https://redoxengine.com/products/platform',
        starsOrDownloads: '5,000+ EHR connections',
        techStack: ['Node.js', 'TypeScript', 'Kafka', 'PostgreSQL', 'AWS'],
        description: 'Universal bi-directional healthcare API connecting any cloud app to any hospital EHR.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Streaming message processing over batch ingestion',
        'Strict schema immutability and zero clinical data truncation',
      ],
      stackPreferences: ['TypeScript / Node ESM', 'Kafka', 'PostgreSQL', 'Docker'],
      engineeringCulture: ['Healthcare mission driven', 'Extreme SLA reliability for patient care messages'],
    },
  },

  particle_health: {
    business: {
      model: 'API platform providing access to 270M+ patient records across national health networks',
      pricing: 'Usage-based query fees ($0.30 – $1.20 per record query) + platform base fee',
      targetCustomers: ['Telehealth platforms', 'Virtual care providers', 'Clinical AI diagnostic engines'],
      keyClients: ['Alma', 'Oula', 'Cerebral', 'Trove Health'],
      revenueOrFunding: 'Series B ($45M raised), official Carequality and CommonWell record gateway',
    },
    blogs: [
      {
        title: 'Mastering National Healthcare Networks: Querying 50,000 Gateways Concurrently',
        url: 'https://particlehealth.com/blog/national-health-networks-querying',
        summary: 'How Particle orchestrates parallel asynchronous document queries without hitting upstream timeouts.',
        tags: ['Carequality', 'CommonWell', 'Async Queries', 'FHIR'],
        date: '2026-07-14',
      },
    ],
    projects: [
      {
        name: 'Particle FHIR API',
        url: 'https://docs.particlehealth.com',
        starsOrDownloads: '270M+ queryable patient charts',
        techStack: ['TypeScript', 'Go', 'PostgreSQL', 'GCP'],
        description: 'Single GraphQL and REST API querying and combining medical history from all US health systems.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Deterministic patient record linkage combined with probabilistic fallback',
        'Streaming document conversion to prevent Node V8 heap exhaustion',
      ],
      stackPreferences: ['TypeScript', 'Go', 'PostgreSQL', 'Docker'],
      engineeringCulture: ['Healthcare access democratization', 'High security and HIPAA privacy compliance'],
    },
  },

  health_gorilla: {
    business: {
      model: 'Designated Qualified Health Information Network (QHIN) under federal TEFCA framework',
      pricing: 'Enterprise network exchange fee + per-transaction diagnostic and clinical query pricing',
      targetCustomers: ['Healthcare payers', 'Hospital networks', 'Digital health technology builders'],
      keyClients: ['Amwell', 'Virta Health', 'State Health Information Exchanges', 'Quest Diagnostics'],
      revenueOrFunding: 'Series C ($80M raised), designated TEFCA QHIN',
    },
    blogs: [
      {
        title: 'The Road to TEFCA: Building the Infrastructure for National Data Exchange',
        url: 'https://healthgorilla.com/blog/tefca-infrastructure',
        summary: 'Technical and architectural deep-dive into meeting QHIN cybersecurity and audit logging standards.',
        tags: ['TEFCA', 'QHIN', 'FHIR', 'Cybersecurity'],
        date: '2026-06-18',
      },
    ],
    projects: [
      {
        name: 'Health Gorilla QHIN Exchange',
        url: 'https://healthgorilla.com/solutions/tefca',
        starsOrDownloads: 'Designated Federal QHIN',
        techStack: ['Java', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'],
        description: 'National health information exchange routing clinical and diagnostic documents under federal law.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Zero-trust cryptographic audit trails for all health data exchanges',
        'High-throughput document routing with strict US Core validation',
      ],
      stackPreferences: ['Java', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'],
      engineeringCulture: ['Regulatory and security excellence', 'National scale reliability'],
    },
  },

  commure: {
    business: {
      model: 'Enterprise hospital operating system and clinical developer application suite',
      pricing: 'Enterprise health system site licensing ($100k – $1M+/year)',
      targetCustomers: ['Large integrated health networks', 'Hospital systems', 'Clinical app developers'],
      keyClients: ['HCA Healthcare', 'Jefferson Health', 'Tenet Healthcare'],
      revenueOrFunding: 'Series D ($500M+ raised), General Catalyst incubated health OS',
    },
    blogs: [
      {
        title: 'Architecting Commure OS: High-Frequency Bedside Sensor Telemetry',
        url: 'https://commure.com/blog/hospital-os-architecture',
        summary: 'Orchestrating real-time clinical IoT events and EMR notifications on edge hospital servers.',
        tags: ['Hospital OS', 'Clinical IoT', 'Real-time Telemetry', 'Edge Computing'],
        date: '2026-08-20',
      },
    ],
    projects: [
      {
        name: 'Commure Developer Platform',
        url: 'https://developer.commure.com',
        starsOrDownloads: 'Enterprise Health OS',
        techStack: ['Go', 'TypeScript', 'Rust', 'Kubernetes'],
        description: 'Developer toolkit for building HIPAA-compliant clinical apps integrated into hospital workstations.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'High-concurrency streaming brokers with backpressure limits',
        'Strict isolation between clinical calculation plugins and core hospital data stores',
      ],
      stackPreferences: ['Go', 'TypeScript', 'Rust', 'Kubernetes', 'PostgreSQL'],
      engineeringCulture: ['Clinical safety first', 'Eliminating doctor burnout through frictionless software'],
    },
  },

  apify: {
    business: {
      model: 'Cloud web scraping and browser automation actor platform with community marketplace',
      pricing: 'Usage-based compute units ($49 – $499/mo) + Enterprise custom actor clusters',
      targetCustomers: ['Data scientists', 'AI agent developers', 'Market intelligence analysts'],
      keyClients: ['Siemens', 'Microsoft', 'Accenture', 'T-Mobile'],
      revenueOrFunding: 'Series A ($15M ARR), profitable, 1,500+ public automation actors',
    },
    blogs: [
      {
        title: 'Crawlee: The TypeScript Web Scraping Library Built for Speed and Stealth',
        url: 'https://blog.apify.com/crawlee-python-and-typescript',
        summary: 'Why Apify built Crawlee with native Playwright and Puppeteer support to automate proxy rotation and browser fingerprinting.',
        tags: ['Crawlee', 'Playwright', 'Puppeteer', 'TypeScript'],
        date: '2026-07-29',
      },
    ],
    projects: [
      {
        name: 'apify/crawlee',
        url: 'https://github.com/apify/crawlee',
        starsOrDownloads: '17,000+ GitHub stars',
        techStack: ['TypeScript', 'Node.js', 'Playwright', 'Puppeteer'],
        description: 'The scalable web scraping and browser automation library for JavaScript/TypeScript.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Open-source developer ergonomics over closed vendor lock-in',
        'Strict container resource bounding to prevent /dev/shm memory leaks',
      ],
      stackPreferences: ['TypeScript', 'Node.js', 'Docker', 'Redis', 'PostgreSQL'],
      engineeringCulture: ['Open source first', 'Empowering developers to extract value from public web data'],
    },
  },

  scrapingbee: {
    business: {
      model: 'Developer-first web scraping API with headless Chrome rendering and proxy rotation',
      pricing: 'Credit-based subscription ($49 – $999/month)',
      targetCustomers: ['Growth engineers', 'SEO audit platforms', 'AI data pipeline builders'],
      keyClients: ['SAP', 'Deloitte', 'Zapier', 'WooCommerce merchants'],
      revenueOrFunding: 'Bootstrapped / Highly Profitable ($5M+ ARR), lean engineering team',
    },
    blogs: [
      {
        title: 'Why We Love Boring Technology: Building ScrapingBee on FastAPI and Redis',
        url: 'https://scrapingbee.com/blog/boring-technology-scrapingbee',
        summary: 'Kevin Sahin explains how a lean team runs millions of headless Chrome requests using minimal code and rock-solid queues.',
        tags: ['Boring Tech', 'FastAPI', 'Redis', 'Headless Chrome'],
        date: '2026-05-10',
      },
    ],
    projects: [
      {
        name: 'ScrapingBee Core API',
        url: 'https://scrapingbee.com/documentation',
        starsOrDownloads: 'Millions of daily requests',
        techStack: ['Python', 'FastAPI', 'TypeScript', 'Docker', 'Redis'],
        description: 'Single API for Javascript rendering, rotating proxies, and automated CAPTCHA bypassing.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Boring, proven technology over unneeded architectural complexity (YAGNI extremist)',
        'Zero-bullshit API ergonomics: make difficult scraping tasks achievable in one curl call',
      ],
      stackPreferences: ['Python', 'TypeScript', 'Docker', 'FastAPI', 'Redis'],
      engineeringCulture: ['Lean, autonomous execution', 'High-margin profitability and developer focus'],
    },
  },

  zyte: {
    business: {
      model: 'Enterprise web data extraction, smart proxy management, and automated anti-ban cloud',
      pricing: 'Monthly usage tiers based on successful requests + Enterprise custom data extraction',
      targetCustomers: ['Enterprise eCommerce brands', 'Retail pricing intelligence', 'Investment research firms'],
      keyClients: ['Nestlé', 'Unilever', 'Leading global hedge funds'],
      revenueOrFunding: 'Bootstrapped / Scale, creators of Scrapy, 10B+ monthly requests',
    },
    blogs: [
      {
        title: 'Smart Proxy Management: Defeating Modern Behavioral Anti-Scraping Defenses',
        url: 'https://zyte.com/blog/anti-scraping-defenses',
        summary: 'How Zyte uses machine learning to automatically select optimal proxy IPs and browser headers for any target domain.',
        tags: ['Smart Proxy', 'Anti-Ban', 'Scrapy', 'Machine Learning'],
        date: '2026-06-25',
      },
    ],
    projects: [
      {
        name: 'scrapy/scrapy',
        url: 'https://github.com/scrapy/scrapy',
        starsOrDownloads: '54,000+ GitHub stars',
        techStack: ['Python', 'Twisted', 'Scrapy'],
        description: 'An open source and collaborative framework for extracting the data you need from websites.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Decoupled proxy rotation from scraping application logic',
        'Automatic retry with exponential backoff on ban detection',
      ],
      stackPreferences: ['Python', 'Go', 'Docker', 'Kubernetes'],
      engineeringCulture: ['Pioneers of web extraction standards', 'Deep respect for web stability and ethics'],
    },
  },

  nimble: {
    business: {
      model: 'AI-powered web scraping platform and headless browser infrastructure for autonomous data agents',
      pricing: 'Usage-based per GB and browser minute ($99 – $1,200+/month)',
      targetCustomers: ['AI agent developers', 'Financial market analytics', 'Competitive intelligence squads'],
      keyClients: ['Enterprise AI labs', 'Fortune 500 retail intelligence squads'],
      revenueOrFunding: 'Series A ($18M raised), specialized in automated anti-fingerprinting',
    },
    blogs: [
      {
        title: 'Overcoming CDP Latency: Multiplexing Chrome DevTools Streams in Go',
        url: 'https://nimbleway.com/blog/cdp-latency-optimization',
        summary: 'How Nimble engineers reduced CDP message routing overhead to achieve sub-100ms response times on complex dynamic DOMs.',
        tags: ['CDP', 'Go', 'WebSockets', 'Latency'],
        date: '2026-08-16',
      },
    ],
    projects: [
      {
        name: 'Nimble Browser Engine',
        url: 'https://nimbleway.com/platform',
        starsOrDownloads: 'Enterprise Platform',
        techStack: ['Go', 'TypeScript', 'Chromium CDP', 'Kubernetes'],
        description: 'Autonomous browser engine that automatically generates unique browser fingerprints and emulates human navigation.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Browser fingerprinting baked directly into the rendering engine',
        'Low-overhead CDP streaming multiplexing in compiled languages (Go/Rust)',
      ],
      stackPreferences: ['Go', 'TypeScript', 'Chromium CDP', 'Kubernetes'],
      engineeringCulture: ['Pushing the limits of web automation', 'Deep systems performance engineering'],
    },
  },

  inngest: {
    business: {
      model: 'Developer platform for event-driven background jobs, workflows, and serverless step functions',
      pricing: 'Free tier / Team ($75/month) / Enterprise custom based on monthly step executions',
      targetCustomers: ['TypeScript developers', 'Next.js application teams', 'AI agent builders'],
      keyClients: ['SoundCloud', 'TripAdvisor', 'Resend', 'Glide'],
      revenueOrFunding: 'Series A ($9M raised), backed by GGV Capital and Afore Capital',
    },
    blogs: [
      {
        title: 'Durable Execution in TypeScript: How Inngest Eliminates Serverless Timeouts',
        url: 'https://inngest.com/blog/durable-execution-typescript',
        summary: 'Chris O\'Brien breaks down the state machine architecture that allows TypeScript functions to pause, wait for events, and resume seamlessly.',
        tags: ['Durable Execution', 'Serverless', 'TypeScript', 'Next.js'],
        date: '2026-08-11',
      },
    ],
    projects: [
      {
        name: 'inngest/inngest-js',
        url: 'https://github.com/inngest/inngest-js',
        starsOrDownloads: '3,800+ GitHub stars / 250k+ npm downloads',
        techStack: ['TypeScript', 'Next.js', 'Node.js', 'Bun'],
        description: 'The TypeScript SDK for Inngest: create durable functions, background jobs, and workflow pipelines.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Developer ergonomics above all: no queue infrastructure to manage or configure',
        'Durable step idempotency with transparent state replay',
      ],
      stackPreferences: ['Go for core engine', 'TypeScript for developer SDKs', 'PostgreSQL', 'Redis'],
      engineeringCulture: ['Developer delight', 'Zero boilerplate and transparent execution observability'],
    },
  },

  trigger_dev: {
    business: {
      model: 'Open-source background jobs framework with realtime streaming logs and serverless execution',
      pricing: 'Free open source self-hosted / Cloud hosted based on compute duration and runs',
      targetCustomers: ['Full-stack developers', 'Next.js / Bun builders', 'Generative AI pipeline engineers'],
      keyClients: ['Vercel ecosystem builders', 'AI startup engineers', 'Indie hackers and enterprise squads'],
      revenueOrFunding: 'Y Combinator (W23), Seed ($3.5M raised), v3 launch processing millions of runs',
    },
    blogs: [
      {
        title: 'Why We Rebuilt Trigger.dev v3 with Bun and Realtime Streaming',
        url: 'https://trigger.dev/blog/trigger-v3-bun-realtime',
        summary: 'How switching to Bun and custom worker orchestration enabled zero-timeout background jobs with sub-50ms cold starts.',
        tags: ['Bun Runtime', 'Background Jobs', 'Realtime Streaming', 'WebSockets'],
        date: '2026-07-20',
      },
    ],
    projects: [
      {
        name: 'triggerdotdev/trigger.dev',
        url: 'https://github.com/triggerdotdev/trigger.dev',
        starsOrDownloads: '11,000+ GitHub stars',
        techStack: ['TypeScript', 'Bun', 'Node.js', 'PostgreSQL', 'Docker'],
        description: 'The open-source background jobs framework for TypeScript. Run tasks without timeouts.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Bun native performance for worker processes and CLI tooling',
        'Real-time streaming logs over polling database job statuses',
        'Open-source first with complete local self-hosting parity',
      ],
      stackPreferences: ['TypeScript', 'Bun', 'PostgreSQL', 'WebSockets', 'Docker'],
      engineeringCulture: ['Open source transparency', 'Obsession with developer execution speed and DX'],
    },
  },

  hatchet: {
    business: {
      model: 'Distributed task queue, workflow engine, and fair concurrency orchestration platform',
      pricing: 'Free open source self-hosted / Managed Cloud ($0.0001 per task run)',
      targetCustomers: ['Backend systems engineers', 'AI agent orchestrators', 'High-throughput queue builders'],
      keyClients: ['Fast-growing AI agent startups', 'Enterprise workflow automation squads'],
      revenueOrFunding: 'Seed ($3.8M raised), built in Go and TypeScript',
    },
    blogs: [
      {
        title: 'Replacing BullMQ with Hatchet: Sub-Millisecond Task Scheduling in Go',
        url: 'https://hatchet.run/blog/replacing-bullmq-task-scheduling',
        summary: 'Why large-scale systems outgrow Redis BullMQ and require gRPC streaming queues with fair concurrency management.',
        tags: ['Task Queues', 'BullMQ', 'Go', 'gRPC', 'PostgreSQL'],
        date: '2026-08-05',
      },
    ],
    projects: [
      {
        name: 'hatchet-dev/hatchet',
        url: 'https://github.com/hatchet-dev/hatchet',
        starsOrDownloads: '4,500+ GitHub stars',
        techStack: ['Go', 'TypeScript', 'PostgreSQL', 'gRPC', 'RabbitMQ'],
        description: 'A distributed, fault-tolerant task queue and workflow engine designed to solve concurrency limits.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'gRPC streaming connections to avoid HTTP polling overhead',
        'PostgreSQL queue claiming with SKIP LOCKED for atomic scheduling',
        'Fair-share concurrency to prevent one customer from starving others',
      ],
      stackPreferences: ['Go', 'TypeScript', 'PostgreSQL', 'gRPC'],
      engineeringCulture: ['Low-latency systems engineering', 'Pragmatic, fault-tolerant infrastructure design'],
    },
  },

  merge_dev: {
    business: {
      model: 'Unified API platform normalizing hundreds of B2B SaaS integrations through a single interface',
      pricing: 'Tiered annual contract based on linked accounts ($650 – $1,200+/month base)',
      targetCustomers: ['B2B SaaS companies', 'Enterprise software vendors', 'HR tech and fintech platforms'],
      keyClients: ['Apollo.io', 'Ramp', 'Drata', 'Calendly', 'AngelList'],
      revenueOrFunding: 'Series B ($75M raised), backed by Accel and NEA, 200+ integrations',
    },
    blogs: [
      {
        title: 'Managing Upstream Rate Limits Across 200 Third-Party APIs',
        url: 'https://merge.dev/blog/upstream-rate-limiting',
        summary: 'How Merge uses dynamic token bucket algorithms and priority scheduling to prevent client rate limit exhaustion.',
        tags: ['Rate Limiting', 'Unified API', 'Distributed Queues', 'Celery'],
        date: '2026-06-12',
      },
    ],
    projects: [
      {
        name: 'Merge Unified Core API',
        url: 'https://docs.merge.dev',
        starsOrDownloads: '200+ partner APIs / Millions of syncs',
        techStack: ['Python', 'Django', 'TypeScript', 'PostgreSQL', 'Celery'],
        description: 'Unified API connecting HRIS, ATS, Accounting, Ticketing, and CRM platforms through standardized schemas.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Continuous synchronization with automated webhook fallback polling',
        'Strict schema immutability and automated drift detection alerts',
      ],
      stackPreferences: ['Python', 'TypeScript', 'PostgreSQL', 'Celery', 'Docker'],
      engineeringCulture: ['Enterprise reliability and customer trust', 'Systematic integration engineering'],
    },
  },
};
