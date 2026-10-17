import type { CompanyDeepProfile } from './types.ts';
import { EXTENDED_COMPANY_PROFILES } from './extended-profiles.ts';
import { MORE_COMPANY_PROFILES } from './more-profiles.ts';
import { COHORT4_COMPANY_PROFILES } from './cohort4-profiles.ts';
import { COHORT5_COMPANY_PROFILES } from './cohort5-profiles.ts';
import { SCRAPED_JOB_POSTS } from './job-posts.ts';

export const BASE_COMPANY_PROFILES: Record<string, CompanyDeepProfile> = {
  craver: {
    business: {
      model: 'B2B SaaS subscription + white-label mobile app licensing for QSR and coffee chains',
      pricing: '$150 – $250/location/month + one-time setup fee',
      targetCustomers: ['Independent coffee shops', 'Regional fast-casual chains', 'Multi-location bakeries'],
      keyClients: ['JJ Bean Coffee', 'Pronto Gourmet', 'Cafe Artigiano', 'Equator Coffees'],
      revenueOrFunding: 'Bootstrapped / Seed ($2.5M), profitable, 1,000+ live branded restaurant apps',
    },
    blogs: [
      {
        title: 'Mastering POS Synchronization: Solving the Morning Coffee Rush',
        url: 'https://craverapp.com/blog/pos-integration-challenges',
        summary: 'How Craver syncs modifier matrixes and menu price overrides across Toast, Square, and Clover with sub-500ms webhook delivery.',
        tags: ['POS Sync', 'Webhooks', 'Toast', 'Square', 'Clover'],
        date: '2026-08-14',
      },
      {
        title: 'Zero-Downtime Menu Catalog Migrations for Multi-Unit Franchises',
        url: 'https://craverapp.com/blog/multi-location-menu-sync',
        summary: 'Architectural breakdown of schema drift mitigation when restaurant operators edit 82-item breakfast menus during active shifts.',
        tags: ['Database Migrations', 'Schema Drift', 'PostgreSQL', 'High Availability'],
        date: '2026-05-22',
      },
      {
        title: 'Push Notification Queues and Geo-Fenced Order Pickups',
        url: 'https://craverapp.com/blog/geofencing-and-push-delivery',
        summary: 'Optimizing background location telemetry in React Native apps without draining customer battery life.',
        tags: ['React Native', 'Push Notifications', 'BullMQ', 'Geofencing'],
        date: '2026-02-10',
      },
    ],
    projects: [
      {
        name: 'Craver POS Bridge',
        url: 'https://github.com/craverapp/pos-bridge-spec',
        starsOrDownloads: 'Internal Core Engine / 12M monthly transactions',
        techStack: ['Node.js', 'TypeScript', 'Redis BullMQ', 'Fastify'],
        description: 'Unified normalization proxy translating Square, Toast, and Clover webhooks into canonical POS order tickets.',
      },
      {
        name: 'Craver Mobile Suite',
        url: 'https://craverapp.com/solutions/mobile-apps',
        starsOrDownloads: '1,000+ iOS/Android apps',
        techStack: ['React Native', 'GraphQL', 'TypeScript', 'Firebase FCM'],
        description: 'Multi-tenant white-label mobile ordering engine with native Apple Pay and loyalty stamp cards.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Idempotent webhook ingestion over synchronous polling',
        'Strict schema validation before pushing order tickets to kitchen printers',
        'Client-side cart caching with background inventory reconciliations',
      ],
      stackPreferences: ['TypeScript / Node ESM', 'PostgreSQL JSONB', 'Redis BullMQ', 'Fastify / Hono'],
      engineeringCulture: [
        'Pragmatic delivery over microservice sprawl',
        'Customer-visible uptime prioritized above theoretical purity',
        'Dogfooding local restaurant ordering flows weekly',
      ],
    },
  },

  hazlnut: {
    business: {
      model: 'B2B SaaS monthly per-location subscription + digital kiosk hardware bundles',
      pricing: '$129 – $299/location/month depending on kiosk and online ordering tiers',
      targetCustomers: ['Fast-casual restaurant franchises', 'Drive-thru operators', 'Collegiate campus dining'],
      keyClients: ['Tijuana Flats', 'VooDoo BBQ', 'Huey Magoo’s', 'Foxtail Coffee'],
      revenueOrFunding: 'Series A ($5.5M raised), 850+ enterprise locations',
    },
    blogs: [
      {
        title: 'Solving Offline Sync in Android Self-Service Kiosks',
        url: 'https://hazlnut.com/blog/offline-first-restaurant-kiosks',
        summary: 'Handling kitchen order buffering and thermal printer reconnects when restaurant internet drops during peak lunch rushes.',
        tags: ['Offline First', 'Android Kiosks', 'Thermal Printers', 'ESC/POS'],
        date: '2026-07-19',
      },
      {
        title: 'Eliminating Menu Modifier Conflicts in Clover and Toast',
        url: 'https://hazlnut.com/blog/clover-toast-modifier-matrix',
        summary: 'How nested pizza toppings and combo item selections cause POS ticket rejection if validation rules differ between web and register.',
        tags: ['Menu Normalization', 'Toast API', 'Clover REST', 'Ticket Injection'],
        date: '2026-04-11',
      },
    ],
    projects: [
      {
        name: 'HazlKiosk Client Engine',
        url: 'https://hazlnut.com/products/kiosks',
        starsOrDownloads: '3,500+ deployed kiosk units',
        techStack: ['Kotlin', 'Android Open Source Project', 'SQLite', 'WebSockets'],
        description: 'Touchscreen self-ordering kiosk client with MagTek card reader integration and offline order queueing.',
      },
      {
        name: 'HazlPOS Sync Gateway',
        url: 'https://hazlnut.com/integrations',
        starsOrDownloads: 'Enterprise Gateway',
        techStack: ['TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB'],
        description: 'Serverless integration bus that fans out POS catalog updates to mobile, web, and kiosk channels.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Offline-first client design for all in-store hardware',
        'Strict isolation of credit card payment tokens from general ordering logic',
        'Zero-trust validation of kitchen printer payload buffers',
      ],
      stackPreferences: ['TypeScript', 'Kotlin', 'AWS Serverless', 'DynamoDB Streams'],
      engineeringCulture: [
        'Hardware-software reliability empathy',
        'Speed of order placement directly correlates with restaurant revenue',
      ],
    },
  },

  itsacheckmate: {
    business: {
      model: 'Enterprise restaurant integration middleware with tiered monthly SaaS pricing per brand',
      pricing: '$85 – $175/location/month depending on delivery aggregator count',
      targetCustomers: ['Enterprise QSR chains', 'Ghost kitchens', 'Multi-brand restaurant holding groups'],
      keyClients: ['Five Guys', 'Arby’s', 'Jamba Juice', 'Taco Cabana', 'Noodles & Company'],
      revenueOrFunding: 'Series B ($35M raised), processing 80M+ orders annually across 25,000+ locations',
    },
    blogs: [
      {
        title: 'Handling 80 Million Orders: Distributed Ingestion Under Extreme Spikes',
        url: 'https://itsacheckmate.com/blog/engineering-high-throughput-orders',
        summary: 'Architecting an order routing pipeline that absorbs Super Bowl and Valentine’s Day surges without dropping a single DoorDash delivery ticket.',
        tags: ['High Throughput', 'Backpressure', 'Kafka', 'Redis Cluster'],
        date: '2026-09-02',
      },
      {
        title: 'Universal Menu Catalog: Normalizing 50 POS Schemas into 100 Delivery Channels',
        url: 'https://itsacheckmate.com/blog/menu-normalization-at-scale',
        summary: 'Deep dive into graph translation algorithms for complex modifier rules between Micros Simphony, Brink, Aloha, and Uber Eats.',
        tags: ['Graph Transformations', 'Aloha POS', 'Brink POS', 'Schema Mapping'],
        date: '2026-06-18',
      },
    ],
    projects: [
      {
        name: 'Checkmate Universal Core',
        url: 'https://itsacheckmate.com/integrations',
        starsOrDownloads: '80M+ annual orders / 25k locations',
        techStack: ['Go', 'TypeScript', 'Kafka', 'PostgreSQL', 'Redis'],
        description: 'High-throughput bi-directional synchronization bridge connecting 100+ delivery platforms to 50+ legacy and cloud POS systems.',
      },
      {
        name: 'Kitchen Display System (KDS) Router',
        url: 'https://itsacheckmate.com/products/kds',
        starsOrDownloads: 'Enterprise Product',
        techStack: ['WebSockets', 'Go', 'React', 'gRPC'],
        description: 'Real-time kitchen order pacing and line cook routing display system.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Dead-letter queues and automated replay harnesses for all dropped webhook signals',
        'Idempotency keys on all order creation calls',
        'Strict backpressure limits to prevent cascading failure in downstream legacy POS servers',
      ],
      stackPreferences: ['Go for streaming core', 'TypeScript / Node for integrations', 'Kafka', 'PostgreSQL'],
      engineeringCulture: [
        'Resilience in the face of legacy POS downtime',
        'Metrics-driven SLA enforcement (<3s order injection latency)',
      ],
    },
  },

  chowly: {
    business: {
      model: 'B2B SaaS subscription for restaurant POS integration + guest marketing and online ordering suite',
      pricing: '$99 – $199/location/month',
      targetCustomers: ['Independent restaurants', 'Fast-casual multi-unit operators', 'Franchisees'],
      keyClients: ['Dickey’s Barbecue Pit', 'Sarpino’s Pizzeria', 'Lou Malnati’s', 'Halal Guys'],
      revenueOrFunding: 'Series A ($15M raised), 16,000+ active restaurant locations',
    },
    blogs: [
      {
        title: 'AI in the Kitchen: Automating Order Triage and Dynamic Item 86ing',
        url: 'https://chowlyinc.com/blog/ai-menu-optimization',
        summary: 'Using real-time POS sales signals to automatically 86 out-of-stock ingredients across all third-party delivery apps simultaneously.',
        tags: ['AI Optimization', 'Real-time Inventory', '86ing', 'POS Webhooks'],
        date: '2026-08-30',
      },
      {
        title: 'The Hidden Latency of Kitchen Ticket Injection',
        url: 'https://chowlyinc.com/blog/ticket-injection-latency',
        summary: 'How an extra 45 seconds of printer delay causes delivery drivers to arrive before food is prepped, ruining restaurant ratings.',
        tags: ['Kitchen Operations', 'Latency Optimization', 'Toast POS', 'Square POS'],
        date: '2026-03-25',
      },
    ],
    projects: [
      {
        name: 'Chowly SmartBridge',
        url: 'https://chowlyinc.com/smartbridge',
        starsOrDownloads: '16,000+ connected restaurants',
        techStack: ['Node.js', 'Python', 'AWS SQS', 'PostgreSQL'],
        description: 'Automated digital storefront aggregator converting online orders into direct POS tickets.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Zero manual intervention for POS inventory updates',
        'Aggressive queue retries with jittered exponential backoff',
        'Clean client dashboards for non-technical restaurant managers',
      ],
      stackPreferences: ['TypeScript / Node', 'Python', 'AWS', 'PostgreSQL'],
      engineeringCulture: ['Restaurant-first empathy', 'Pragmatic feature velocity'],
    },
  },

  metriport: {
    business: {
      model: 'Open core developer API for national health data networks (CommonWell, Carequality, QHIN)',
      pricing: 'Tiered usage-based API ($0.25 – $1.50 per query) + Enterprise platform licensing',
      targetCustomers: ['Digital health startups', 'Virtual care providers', 'Clinical research platforms', 'EHR vendors'],
      keyClients: ['Amazon One Medical', 'Color Health', 'Strive Health', 'Sollis Health', 'Canvas Medical'],
      revenueOrFunding: 'Series A ($26M raised), Candidate QHIN under federal TEFCA framework',
    },
    blogs: [
      {
        title: 'FHIR R4 Spec Guide: Resources & Standards for TEFCA Compliance',
        url: 'https://metriport.com/blog/fhir-r4-spec-guide',
        summary: 'A deep architectural dive into FHIR resources, US Core profiles, and navigating the new TEFCA technical framework.',
        tags: ['FHIR R4', 'TEFCA', 'US Core', 'Interoperability'],
        date: '2026-07-28',
      },
      {
        title: 'Parsing 300MB C-CDA XML Documents Without Killing Node V8 Heaps',
        url: 'https://metriport.com/blog/streaming-ccda-xml-parsing',
        summary: 'How Metriport uses streaming SAX parsers and native Rust bindings to transform multi-gigabyte patient clinical bundles into clean FHIR without OOM errors.',
        tags: ['Streaming XML', 'C-CDA', 'Memory Leaks', 'Rust FFI', 'Node.js'],
        date: '2026-05-14',
      },
      {
        title: 'The CMS-0057-F Interoperability Mandate: What Health Plans Need to Know',
        url: 'https://metriport.com/blog/cms-0057-f-compliance-guide',
        summary: 'Technical requirements for Prior Authorization APIs, Patient Access APIs, and Provider Access APIs by 2027.',
        tags: ['CMS-0057-F', 'Prior Authorization', 'Compliance', 'REST APIs'],
        date: '2026-03-01',
      },
    ],
    projects: [
      {
        name: 'metriport/metriport',
        url: 'https://github.com/metriport/metriport',
        starsOrDownloads: '1,800+ stars / Open Source Core',
        techStack: ['TypeScript', 'Node ESM', 'AWS S3', 'DynamoDB', 'Docker'],
        description: 'The open-source API for healthcare data: universal medical record retrieval and FHIR conversion engine.',
      },
      {
        name: 'Metriport Medical API Client',
        url: 'https://www.npmjs.com/package/@metriport/api-sdk',
        starsOrDownloads: '65,000+ monthly npm downloads',
        techStack: ['TypeScript', 'Fetch', 'OpenAPI Generator'],
        description: 'Isomorphic TypeScript/JavaScript client for querying patient demographics, documents, and FHIR resources.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Open core transparency beats proprietary vendor lock-in',
        'Streaming data pipelines over loading full XML/JSON documents into memory',
        'Strict US Core FHIR conformance and automated validation suites',
        'Immutable audit logs for all HIPAA/HITRUST transactions',
      ],
      stackPreferences: ['TypeScript ESM', 'Node.js', 'PostgreSQL', 'AWS DynamoDB', 'Docker'],
      engineeringCulture: [
        'Mission-driven healthcare transparency',
        'No tolerance for clinical data loss or silent schema drops',
      ],
    },
  },

  canvas_medical: {
    business: {
      model: 'Programmable EMR platform & clinical software infrastructure for modern medical practices',
      pricing: 'Platform fee + usage per active patient chart / clinician seat ($300 – $800/provider/month)',
      targetCustomers: ['Virtual clinic ventures', 'Value-based care organizations', 'Specialty digital health practices'],
      keyClients: ['Circulo Health', 'Vesta Healthcare', 'Hopscotch Primary Care', 'Firefly Health'],
      revenueOrFunding: 'Series B ($42M raised), ONC Certified HIT, CMS compliant',
    },
    blogs: [
      {
        title: 'Architecting an Extensible Clinical Protocol Sandbox',
        url: 'https://canvasmedical.com/blog/programmable-emr-plugins',
        summary: 'Executing custom physician care protocols and decision-support logic inside isolated WebAssembly / sandbox environments.',
        tags: ['Sandboxing', 'Wasm', 'Clinical Protocols', 'EMR APIs'],
        date: '2026-08-10',
      },
      {
        title: 'FHIR Subscriptions and Real-Time Event Webhooks in Value-Based Care',
        url: 'https://canvasmedical.com/blog/fhir-event-webhooks',
        summary: 'How care teams receive immediate notifications when patients are admitted to ERs across state lines.',
        tags: ['FHIR Subscriptions', 'Webhooks', 'Value-Based Care', 'Event Driven'],
        date: '2026-04-18',
      },
    ],
    projects: [
      {
        name: 'Canvas SDK',
        url: 'https://docs.canvasmedical.com/sdk',
        starsOrDownloads: 'Core Developer Platform',
        techStack: ['Python', 'TypeScript', 'FHIR R4', 'GraphQL'],
        description: 'Developer toolkit for building automated clinical workflows, notes generators, and care plan triggers.',
      },
      {
        name: 'Canvas Clinical Graph API',
        url: 'https://docs.canvasmedical.com/api',
        starsOrDownloads: 'Enterprise API',
        techStack: ['Python', 'Django', 'PostgreSQL', 'Redis'],
        description: 'High-performance FHIR R4 and GraphQL interface over patient charts, appointments, and billing claims.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Programmability first: every clinician action must trigger an API event',
        'Sandboxed protocol execution to prevent medical calculation regressions',
        'Strict schema immutability on clinical notes and diagnostic codes',
      ],
      stackPreferences: ['Python', 'TypeScript', 'PostgreSQL', 'GraphQL', 'FHIR R4'],
      engineeringCulture: [
        'Engineering-led product design in healthcare',
        'Respecting clinician cognitive load and charting efficiency',
      ],
    },
  },

  medplum: {
    business: {
      model: 'Open source headless EHR platform & developer-first clinical backend',
      pricing: 'Free open source self-hosted / Cloud hosted starting at $500/month up to Enterprise custom',
      targetCustomers: ['Digital health developers', 'Lab testing platforms', 'At-home diagnostics startups'],
      keyClients: ['Ro', 'Summer Health', 'Tupelo Health', 'Modern Pediatrics'],
      revenueOrFunding: 'Y Combinator (S22), Seed ($7.5M raised), powering 100+ production health applications',
    },
    blogs: [
      {
        title: 'Fast FHIR: Indexing PostgreSQL JSONB for Sub-10ms Resource Searches',
        url: 'https://medplum.com/blog/fast-fhir-postgresql-jsonb',
        summary: 'Deep dive into GIN indexing, generated virtual columns, and SQL query planning for complex FHIR search parameters.',
        tags: ['PostgreSQL', 'JSONB Indexing', 'FHIR Search', 'Database Performance'],
        date: '2026-08-25',
      },
      {
        title: 'Building Serverless Healthcare Bots with SMART on FHIR Auth',
        url: 'https://medplum.com/blog/serverless-fhir-bots',
        summary: 'Executing asynchronous clinical automations in response to patient observation inputs with OAuth2 token scoping.',
        tags: ['Serverless', 'Bots', 'SMART on FHIR', 'OAuth2', 'TypeScript'],
        date: '2026-06-05',
      },
    ],
    projects: [
      {
        name: 'medplum/medplum',
        url: 'https://github.com/medplum/medplum',
        starsOrDownloads: '2,400+ GitHub stars / 100k+ npm downloads',
        techStack: ['TypeScript', 'Node ESM', 'PostgreSQL', 'React', 'Docker'],
        description: 'Headless, open-source EHR platform built around FHIR R4 resources and React UI components.',
      },
      {
        name: '@medplum/react',
        url: 'https://www.npmjs.com/package/@medplum/react',
        starsOrDownloads: '40,000+ monthly npm downloads',
        techStack: ['React', 'TypeScript', 'Mantine UI'],
        description: 'Ready-to-use React component library for rendering FHIR Patient, Encounter, and Resource timelines.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'PostgreSQL JSONB native storage over custom NoSQL databases',
        'TypeScript monorepo architecture with end-to-end type safety',
        'Strict 100% adherence to HL7 FHIR specifications without proprietary extensions',
      ],
      stackPreferences: ['TypeScript', 'Node ESM', 'PostgreSQL', 'React', 'Docker'],
      engineeringCulture: [
        'Zero-bullshit developer ergonomics',
        'Open-source first with transparent public roadmap discussions',
      ],
    },
  },

  zus_health: {
    business: {
      model: 'Shared health data platform and aggregate clinical graph API for healthcare enterprises',
      pricing: 'Platform license fee + per-patient per-month (PPPM) graph indexing fee ($0.10 – $0.45 PPPM)',
      targetCustomers: ['Medicare Advantage plans', 'Value-based care networks', 'Health tech builders'],
      keyClients: ['Firefly Health', 'Cityblock Health', 'Oak Street Health', 'Elation Health'],
      revenueOrFunding: 'Series A ($40M raised), founded by Jonathan Bush (founder of athenahealth)',
    },
    blogs: [
      {
        title: 'The Longitudinal Patient Graph: Solving Duplicate Identity Across 10 EHRs',
        url: 'https://zushealth.com/blog/patient-identity-resolution',
        summary: 'How Zus reconciles mismatched Social Security numbers, maiden names, and typos using probabilistic record linkage.',
        tags: ['Identity Resolution', 'Record Linkage', 'Graph Database', 'FHIR'],
        date: '2026-07-12',
      },
      {
        title: 'Aggregating CommonWell and Carequality in Real-Time',
        url: 'https://zushealth.com/blog/aggregating-national-networks',
        summary: 'Orchestrating concurrent queries across 50,000 clinic gateways without hitting provider timeout limits.',
        tags: ['Distributed Systems', 'CommonWell', 'Carequality', 'Async Orchestration'],
        date: '2026-03-19',
      },
    ],
    projects: [
      {
        name: 'Zus Aggregated Profile (ZAP)',
        url: 'https://zushealth.com/product/zap',
        starsOrDownloads: 'Enterprise Core Product',
        techStack: ['TypeScript', 'GraphQL', 'PostgreSQL', 'Kafka'],
        description: 'Consolidated clinical timeline merging data from hospitals, labs, and insurance claims into one view.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Shared graph paradigm over siloed transactional databases',
        'Probabilistic machine learning matching paired with strict deterministic fallback rules',
        'Comprehensive audit trails for medical chart revisions',
      ],
      stackPreferences: ['TypeScript', 'GraphQL', 'Kafka', 'PostgreSQL'],
      engineeringCulture: [
        'Systemic reform of US healthcare data fragmentation',
        'High compliance standards paired with rapid developer velocity',
      ],
    },
  },

  browserbase: {
    business: {
      model: 'Cloud headless browser platform & developer infrastructure for autonomous web agents',
      pricing: 'Usage-based per browser hour ($0.10/hr) + concurrency seat pricing ($199 – $999/month)',
      targetCustomers: ['AI agent developers', 'Enterprise RPA automation squads', 'Web scraping startups'],
      keyClients: ['Airtable', 'Google', 'Vercel', 'Perplexity', 'Magicare'],
      revenueOrFunding: 'Series A ($21M raised), backed by Kleiner Perkins, CRV, and Okta Ventures',
    },
    blogs: [
      {
        title: 'Why We’re Graduating from Playwright to Custom CDP Protocol Pipelines',
        url: 'https://browserbase.com/blog/graduating-from-playwright',
        summary: 'Why large-scale autonomous agents require raw Chrome DevTools Protocol multiplexing to avoid the memory overhead of Playwright wrappers.',
        tags: ['CDP', 'Playwright', 'Browser Automation', 'Performance'],
        date: '2026-08-18',
      },
      {
        title: 'We Built Caching into Stagehand: Here’s How It Works',
        url: 'https://browserbase.com/blog/stagehand-dom-caching',
        summary: 'Sameel Arif explains how Stagehand caches LLM DOM action plans to achieve 4x faster execution and 80% token cost reduction.',
        tags: ['Stagehand', 'LLM Agents', 'DOM Caching', 'Token Optimization'],
        date: '2026-07-02',
      },
      {
        title: 'Under the Hood: Engineering Browserbase for Zero Memory Leaks',
        url: 'https://browserbase.com/blog/engineering-browserbase-infrastructure',
        summary: 'Hardening Chromium sandboxes against zombie processes, shared memory limits (/dev/shm), and GPU rendering crashes.',
        tags: ['Chromium', 'Containerization', 'Memory Management', 'Infrastructure'],
        date: '2026-04-12',
      },
    ],
    projects: [
      {
        name: 'browserbase/stagehand',
        url: 'https://github.com/browserbase/stagehand',
        starsOrDownloads: '14,000+ GitHub stars / 2M+ monthly downloads',
        techStack: ['TypeScript', 'Node ESM', 'Playwright', 'OpenAI/Anthropic APIs'],
        description: 'An AI web browsing framework built on Playwright and natural language actions (act, extract, observe).',
      },
      {
        name: '@browserbasehq/sdk',
        url: 'https://www.npmjs.com/package/@browserbasehq/sdk',
        starsOrDownloads: '180,000+ monthly npm downloads',
        techStack: ['TypeScript', 'WebSocket', 'CDP'],
        description: 'Official Node/TypeScript SDK for managing cloud browser sessions, proxies, and session replays.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Raw CDP stream multiplexing over high-level abstraction bloat',
        'Strict ephemeral session destruction to avoid memory leaks',
        'Open-source developer tools as the primary acquisition funnel',
      ],
      stackPreferences: ['TypeScript', 'Node.js / Bun', 'WebSockets', 'Chromium DevTools Protocol', 'Docker'],
      engineeringCulture: [
        'Speed of execution and developer ergonomics',
        'Zero tolerance for flakiness or hanging browser sessions',
      ],
    },
  },

  steel: {
    business: {
      model: 'Open source browser API and cloud infrastructure purpose-built for AI agents',
      pricing: 'Free open source self-hosted / Managed Cloud ($0.05/browser hour + $49/mo base)',
      targetCustomers: ['Autonomous agent teams', 'Data extraction engineers', 'AI browser copilot builders'],
      keyClients: ['Multi-agent research labs', 'Enterprise prospecting automation squads', 'Y Combinator startups'],
      revenueOrFunding: 'Seed ($4.2M raised), 100% open-source core',
    },
    blogs: [
      {
        title: 'Why Firecracker MicroVMs Beat Docker for Ephemeral Headless Browsers',
        url: 'https://steel.dev/blog/firecracker-vs-docker-browser-isolation',
        summary: 'How Steel provisions fully isolated Linux kernels in <300ms, providing ironclad security against malicious web payloads.',
        tags: ['Firecracker', 'MicroVMs', 'Chromium', 'Security', 'Isolation'],
        date: '2026-08-28',
      },
      {
        title: 'Stealth Scraping: Defeating Behavioral Fingerprinting in 2026',
        url: 'https://steel.dev/blog/stealth-anti-fingerprinting',
        summary: 'Deep analysis of Canvas, WebGL, AudioContext, and cursor movement kinematics tracked by Cloudflare and DataDome.',
        tags: ['Anti-Detection', 'Fingerprinting', 'Kinematics', 'DataDome', 'Cloudflare'],
        date: '2026-06-14',
      },
    ],
    projects: [
      {
        name: 'steel-dev/steel-browser',
        url: 'https://github.com/steel-dev/steel-browser',
        starsOrDownloads: '6,200+ GitHub stars',
        techStack: ['TypeScript', 'Go', 'Docker', 'Puppeteer', 'CDP'],
        description: 'The open-source browser API for AI agents. Run, control, and inspect remote browser sessions with anti-detect features.',
      },
      {
        name: 'steel-dev/atlas',
        url: 'https://github.com/steel-dev/atlas',
        starsOrDownloads: '1,800+ GitHub stars',
        techStack: ['TypeScript', 'Python', 'LLM Tool Calling'],
        description: 'Deep web research and data extraction harness leveraging Steel browser instances.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'MicroVM isolation over shared OS containers',
        'Open core architecture with full local self-hosting parity',
        'Anti-fingerprinting baked into the rendering engine, not patched via monkey-patching JS',
      ],
      stackPreferences: ['TypeScript', 'Go', 'Rust', 'Firecracker', 'Chromium CDP'],
      engineeringCulture: [
        'Transparent hacker-ethos and deep systems engineering',
        'Community-first collaboration on GitHub and Discord',
      ],
    },
  },

  browserless: {
    business: {
      model: 'Commercial headless browser cloud and enterprise on-premises clustering licensing',
      pricing: 'Pay-as-you-go ($0.001/execution unit) + Dedicated instances ($200 – $2,500/month)',
      targetCustomers: ['Enterprise engineering teams', 'QA automation departments', 'High-volume PDF generation pipelines'],
      keyClients: ['Intel', 'Cisco', 'VMware', 'Morningstar', 'Shopify merchants'],
      revenueOrFunding: 'Bootstrapped / Profitable, 10+ years operating history, 50M+ monthly browser requests',
    },
    blogs: [
      {
        title: 'Taming Chrome’s 2GB Memory Leak: 10 Years of Running Browserless',
        url: 'https://browserless.io/blog/taming-chrome-memory-leaks',
        summary: 'Joel Griffith details the kernel parameters, cgroup configurations, and process supervisors needed to run 10,000 concurrent tabs reliably.',
        tags: ['Chrome Memory', 'cgroups', 'Linux Kernel', 'DevOps', 'Puppeteer'],
        date: '2026-07-15',
      },
      {
        title: 'Building a High-Concurrency PDF Generation Farm',
        url: 'https://browserless.io/blog/high-concurrency-pdf-printing',
        summary: 'Architecting a print queue that renders 200-page financial reports into PDF with custom fonts and zero CSS layout breaks.',
        tags: ['PDF Generation', 'Print CSS', 'Concurrency Queues', 'WebFonts'],
        date: '2026-03-10',
      },
    ],
    projects: [
      {
        name: 'browserless/browserless',
        url: 'https://github.com/browserless/browserless',
        starsOrDownloads: '8,500+ GitHub stars / 50M+ Docker pulls',
        techStack: ['Node.js', 'Docker', 'Puppeteer', 'Playwright', 'WebSockets'],
        description: 'Dockerized web-service for running headless Chrome. Used for PDF generation, testing, scraping, and automation.',
      },
      {
        name: 'chrome-aws-lambda',
        url: 'https://github.com/browserless/chrome-aws-lambda',
        starsOrDownloads: 'Community standard / Millions of serverless runs',
        techStack: ['Brotli', 'Chromium Binary', 'AWS Lambda Layer'],
        description: 'Lightweight Chromium binary compressed specifically for AWS Lambda execution environments.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Reliability in the presence of Chromium crash loops',
        'Strict resource bounding with process termination rather than hope-based garbage collection',
        'Compatibility with standard Puppeteer/Playwright client scripts without proprietary wrappers',
      ],
      stackPreferences: ['Node.js', 'Docker', 'Linux cgroups', 'WebSockets'],
      engineeringCulture: [
        'Pragmatic, battle-tested operational discipline',
        'No hype, just rock-solid uptime for critical enterprise jobs',
      ],
    },
  },

  anchor_browser: {
    business: {
      model: 'Enterprise cloud browser platform built for AI computer-use agents and enterprise security',
      pricing: 'Usage-based session hours + Enterprise compliance add-ons (SOC2, HIPAA, ISO 27001)',
      targetCustomers: ['Enterprise AI labs', 'Autonomous desktop agent startups', 'Regulated financial tech companies'],
      keyClients: ['1Password', 'Fingerprint.com', 'Stealth Fortune 500 AI divisions'],
      revenueOrFunding: 'Seed ($6M raised), official partner of 1Password and Fingerprint',
    },
    blogs: [
      {
        title: 'Securing AI Computer-Use Agents: 1Password Unified Access Integration',
        url: 'https://anchorbrowser.io/blog/1password-agent-security',
        summary: 'How Anchor integrates 1Password vaults to inject ephemeral secrets into browser sessions without exposing plaintext passwords to the LLM.',
        tags: ['1Password', 'Agent Security', 'Secret Management', 'Computer Use'],
        date: '2026-09-08',
      },
      {
        title: 'Agent Verification: Partnering with Fingerprint.com to Detect AI Bots',
        url: 'https://anchorbrowser.io/blog/fingerprint-agent-verification',
        summary: 'The technical mechanics of transparent bot attestation vs covert scraping in enterprise web navigation.',
        tags: ['Fingerprint.com', 'Bot Attestation', 'Computer Use', 'Zero Trust'],
        date: '2026-07-20',
      },
    ],
    projects: [
      {
        name: 'b0.dev Deterministic Browser Engine',
        url: 'https://b0.dev',
        starsOrDownloads: 'Core Execution Layer',
        techStack: ['TypeScript', 'Rust', 'CDP', 'WebSockets'],
        description: 'Deterministic browser automation engine providing replayable sessions and low-latency computer-use execution.',
      },
      {
        name: 'Anchor 1Password Integration',
        url: 'https://anchorbrowser.io/integrations/1password',
        starsOrDownloads: 'Enterprise Integration',
        techStack: ['OAuth2', '1Password Connect', 'TypeScript'],
        description: 'Native credential injection layer preventing AI agents from handling raw authentication keys.',
      },
    ],
    tastes: {
      architecturalBiases: [
        'Security-first: secrets must never enter LLM prompt context windows',
        'Deterministic execution over stochastic trial-and-error loops',
        'Full compliance certification (SOC2 Type II, HIPAA, ISO 27001) as table stakes',
      ],
      stackPreferences: ['TypeScript', 'Rust', 'WebSockets', 'CDP', 'PostgreSQL'],
      engineeringCulture: [
        'High-security enterprise mindset',
        'Deep partnership with industry security standards bodies',
      ],
    },
  },
};

const RAW_COMBINED_PROFILES = {
  ...BASE_COMPANY_PROFILES,
  ...EXTENDED_COMPANY_PROFILES,
  ...MORE_COMPANY_PROFILES,
  ...COHORT4_COMPANY_PROFILES,
  ...COHORT5_COMPANY_PROFILES,
};

export const COMPANY_PROFILES: Record<string, CompanyDeepProfile> = Object.fromEntries(
  Object.entries(RAW_COMBINED_PROFILES).map(([id, prof]) => [
    id,
    {
      ...prof,
      jobs: SCRAPED_JOB_POSTS[id] || [],
    },
  ])
);

export class CompanyProfiler {
  /**
   * Retrieves profile for a company target ID
   */
  getProfile(targetId: string): CompanyDeepProfile {
    const profile = COMPANY_PROFILES[targetId];
    if (!profile) {
      throw new Error(`No profiling data configured for target: ${targetId}`);
    }
    return profile;
  }

  /**
   * List all configured target IDs
   */
  getAllTargetIds(): string[] {
    return Object.keys(COMPANY_PROFILES);
  }
}
