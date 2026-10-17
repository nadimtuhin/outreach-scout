import type { VerticalCategory } from './types.ts';

export const MORE_RAW_TARGETS = [
  // 1. Finch (Unified APIs)
  {
    metadata: {
      id: 'finch',
      name: 'Finch',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://tryfinch.com',
      careersUrl: 'https://tryfinch.com/careers',
      platformEcosystem: ['Gusto', 'ADP', 'Workday', 'Paychex', 'BambooHR', 'Rippling'],
      headquarters: 'San Francisco, CA / US Remote',
      estimatedEmployees: '80-120',
      fundingStage: 'Series B ($40M raised)',
      techStack: ['Node.js', 'TypeScript', 'Go', 'PostgreSQL', 'Redis', 'AWS'],
    },
    leadership: [
      {
        name: 'Ansel Parikh',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/anselparikh/',
        technicalBackground: 'Pioneered API access to fragmented employment, payroll, and benefits systems',
        coreBiases: ['Mission-critical data accuracy', 'Developer-first unified schemas', 'Enterprise compliance'],
      },
      {
        name: 'Jeremy Zhang',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/jeremy-zhang/',
        technicalBackground: 'Architected universal payroll integration engine normalizing 200+ provider APIs',
        coreBiases: ['Zero data discrepancy tolerance', 'Idempotent payroll syncs', 'Strict upstream rate limit budgeting'],
      },
    ],
    keyEmployees: [
      {
        name: 'Rohan Sharma',
        role: 'Head of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/rohansharma/',
        notes: 'Leads backend integrations and employment data pipeline squads',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct experience building high-reliability third-party sync and webhook normalization engines',
        'TypeScript, Node.js, and PostgreSQL distributed systems architecture',
        'Deep expertise in upstream rate limit budgeting and token refresh lifecycle management',
      ],
      gapsOrBridges: [
        'Complex US payroll deduction tax nuances: bridge with automated regression test harnesses and schema mapping specs',
      ],
    },
    architecture: {
      coreWorkflow: 'Normalizes employee demographics, payroll runs, and benefits data from 200+ HRIS/payroll providers into a single programmatic API.',
      criticalFailureModes: [
        'Upstream payroll provider rate limit exhaustion during full historical sync cycles',
        'OAuth token refresh race conditions across multi-tenant employer connections',
        'Silent schema drift in deduction and gross pay fields causing payroll run errors',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/rate-limit-token-bucket',
      candidateExperienceBridge: 'Built high-throughput OAuth token refresh managers and upstream rate-limit token bucket dispatchers handling millions of monthly syncs with zero token desync',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'upstream payroll rate-limit handling, token lifecycle desync, and schema drift detection',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure',
    },
  },

  // 2. Kombo (Unified APIs)
  {
    metadata: {
      id: 'kombo',
      name: 'Kombo',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://kombo.dev',
      careersUrl: 'https://kombo.dev/careers',
      platformEcosystem: ['Personio', 'BambooHR', 'Workday', 'Greenhouse', 'Lever', 'Workable'],
      headquarters: 'Berlin, Germany / Remote',
      estimatedEmployees: '25-45',
      fundingStage: 'Series A ($15M raised)',
      techStack: ['TypeScript', 'Node.js', 'Bun', 'PostgreSQL', 'Docker'],
      },
    leadership: [
      {
        name: 'Julian Paul',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/julian-paul/',
        technicalBackground: 'Building the standard integration layer for HR, payroll, and recruitment software in Europe',
        coreBiases: ['Radical simplicity', 'Fast developer onboarding', 'Resilient integrations'],
      },
      {
        name: 'Niklas Higi',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/niklas-higi/',
        technicalBackground: 'Full stack systems architect designing self-healing unified sync pipelines',
        coreBiases: ['TypeScript everywhere', 'Fast feedback loops', 'Zero third-party vendor lock-in'],
      },
    ],
    keyEmployees: [
      {
        name: 'Lukas Fischer',
        role: 'Lead Integration Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/lukas-fischer-dev/',
        notes: 'Builds core ATS and HRIS connector adapters',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Complete TypeScript and Bun backend alignment',
        'Proven history designing multi-tenant integration worker pools and resilient sync queues',
        'YAGNI minimalist engineering philosophy matching lean European startup ethos',
      ],
      gapsOrBridges: [
        'European GDPR compliance specifics: bridge with candidate strict data anonymization and encryption practices',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a unified API and embedded auth widget connecting B2B SaaS apps to 50+ European HR and recruitment tools.',
      criticalFailureModes: [
        'Applicant tracking attachment payload timeouts on large PDF/resume batch syncs',
        'Personio and Workday API session token invalidation mid-sync',
        'Webhook delivery backpressure when customer endpoints return 500 errors',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/unified-api-connector-harness',
      candidateExperienceBridge: 'Architected resilient ATS and webhook ingest pipelines with exponential backoff and dead-letter queues',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'high-scale ATS webhook deduplication, token renewal backpressure, and Bun worker runtimes',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure',
    },
  },

  // 3. Rutter (Unified APIs)
  {
    metadata: {
      id: 'rutter',
      name: 'Rutter',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://rutter.com',
      careersUrl: 'https://rutter.com/careers',
      platformEcosystem: ['Shopify', 'QuickBooks', 'WooCommerce', 'NetSuite', 'Amazon', 'Stripe'],
      headquarters: 'San Francisco, CA / US Remote',
      estimatedEmployees: '40-60',
      fundingStage: 'Series A ($27M raised)',
      techStack: ['Go', 'TypeScript', 'PostgreSQL', 'Kafka', 'Redis'],
    },
    leadership: [
      {
        name: 'Peter Zhou',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/peter-zhou/',
        technicalBackground: 'Pioneered universal commerce APIs connecting fintech and SaaS platforms to merchant accounting stores',
        coreBiases: ['Speed of execution', 'Developer ergonomics', 'High reliability across enterprise accounting'],
      },
      {
        name: 'Eric Hu',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/erichu/',
        technicalBackground: 'Distributed systems engineer building real-time financial data pipelines and connectors',
        coreBiases: ['Strict transactional guarantees', 'Go systems performance', 'Decoupled event brokers'],
      },
    ],
    keyEmployees: [
      {
        name: 'Kevin Zhao',
        role: 'Senior Staff Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/kevin-zhao-eng/',
        notes: 'Leads commerce ledger synchronization and schema abstraction layers',
      },
    ],
    matchAnalysis: {
      score: 93,
      strongMatches: [
        'Extensive experience with Shopify and WooCommerce APIs, rate limits, and webhook architectures',
        'Go and TypeScript distributed systems experience with high transaction volume',
        'Financial and accounting data consistency guarantees',
      ],
      gapsOrBridges: [
        'NetSuite ERP SOAP protocol quirks: bridge with candidate proven schema adapter isolation techniques',
      ],
    },
    architecture: {
      coreWorkflow: 'Ingests orders, inventory, and ledger transactions across 40+ eCommerce and accounting platforms, normalizing them into universal JSON schemas.',
      criticalFailureModes: [
        'Shopify GraphQL cost-based rate limit throttling during flash sales',
        'QuickBooks journal entry transaction failure during bi-directional ledger writes',
        'Duplicate invoice creation when network drops occur before receipt acknowledgment',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Built transactional order and ledger pipelines handling high-volume eCommerce sales without double-billing or ledger desync',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'commerce GraphQL rate-limit budgeting, accounting ledger write idempotency, and schema drift',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure',
    },
  },

  // 4. Apideck (Unified APIs)
  {
    metadata: {
      id: 'apideck',
      name: 'Apideck',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://apideck.com',
      careersUrl: 'https://apideck.com/careers',
      platformEcosystem: ['Salesforce', 'HubSpot', 'QuickBooks', 'Workday', 'Toast', 'Square'],
      headquarters: 'San Francisco, CA / Belgium / Remote',
      estimatedEmployees: '30-50',
      fundingStage: 'Series A ($12M raised)',
      techStack: ['TypeScript', 'Node.js', 'Cloudflare Workers', 'PostgreSQL', 'Serverless'],
    },
    leadership: [
      {
        name: 'Gertjan De Wilde',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/gertjandewilde/',
        technicalBackground: 'Pioneered API ecosystem platforms and real-time unified APIs for B2B software vendors',
        coreBiases: ['Real-time proxy architecture', 'Zero data persistence overhead', 'Developer marketplace DX'],
      },
      {
        name: 'Logan Volkers',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/loganvolkers/',
        technicalBackground: 'Cloudflare Workers and edge proxy architect optimizing sub-100ms API routing',
        coreBiases: ['Edge compute first', 'TypeScript strict schemas', 'Stateless request proxies'],
      },
    ],
    keyEmployees: [
      {
        name: 'Dieter Coppens',
        role: 'Head of Product & Ecosystem',
        linkedInUrl: 'https://www.linkedin.com/in/dieter-coppens/',
        notes: 'Manages connector roadmap and partner developer tooling',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct alignment with candidate Cloudflare Workers and Durable Objects edge computing background',
        'Deep TypeScript ESM and real-time proxy normalization expertise',
        'Cross-vertical knowledge spanning POS, CRM, and accounting APIs',
      ],
      gapsOrBridges: [
        'Global edge routing nuances: bridge with candidate Cloudflare Workers AI and proxy pipeline experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Real-time stateless API proxy that translates single unified API calls into live downstream vendor requests at the edge.',
      criticalFailureModes: [
        'Edge proxy timeout when downstream legacy vendor takes >15s to respond',
        'Header signature verification discrepancies during real-time webhook routing',
        'Schema variance when downstream CRM custom fields fail type validation',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/cloudflare-durable-queue',
      candidateExperienceBridge: 'Built Cloudflare Workers edge microservices and stateless proxy normalization layers handling high-concurrency traffic with minimal latency',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'stateless edge proxy timeouts, downstream schema variance, and Cloudflare Worker performance',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure',
    },
  },

  // 5. Paragon (Unified APIs)
  {
    metadata: {
      id: 'paragon',
      name: 'Paragon',
      vertical: 'unified_apis' as VerticalCategory,
      website: 'https://useparagon.com',
      careersUrl: 'https://useparagon.com/careers',
      platformEcosystem: ['Salesforce', 'HubSpot', 'Slack', 'Jira', 'Google Workspace'],
      headquarters: 'Los Angeles, CA / Remote',
      estimatedEmployees: '50-80',
      fundingStage: 'Series A ($16M raised)',
      techStack: ['TypeScript', 'Node.js', 'Kubernetes', 'Redis', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Brandon Foo',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/brandonfoo/',
        technicalBackground: 'Serial founder building embedded integration platforms for modern B2B SaaS squads',
        coreBiases: ['Speed of enterprise onboarding', 'Embedded native UX', 'Developer velocity'],
      },
      {
        name: 'Ishmael Samuel',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/ishmaelsamuel/',
        technicalBackground: 'Distributed systems architect building multi-tenant integration workflows and event buses',
        coreBiases: ['Multi-tenant isolation', 'TypeScript core architecture', 'Reliable event delivery'],
      },
    ],
    keyEmployees: [
      {
        name: 'Alexandre Tran',
        role: 'Senior Engineering Manager',
        linkedInUrl: 'https://www.linkedin.com/in/alexandre-tran-eng/',
        notes: 'Oversees connector infrastructure and workflow execution engines',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'TypeScript and Node.js microservices with heavy multi-tenant database designs',
        'Embedded authentication and managed OAuth credential refresh management',
        'Enterprise webhook delivery and backpressure buffering',
      ],
      gapsOrBridges: [
        'Visual workflow canvas execution engine: bridge with candidate experience building state-machine workflow runners',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides an embedded integration SDK and visual workflow builder for B2B SaaS companies to offer native integrations inside their apps.',
      criticalFailureModes: [
        'Multi-tenant OAuth token refresh race conditions when hundreds of users trigger sync simultaneously',
        'Webhook ingestion spikes during customer Salesforce data migrations causing queue starvation',
        'Custom mapping transformation script timeouts inside untrusted tenant sandboxes',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/rate-limit-token-bucket',
      candidateExperienceBridge: 'Built resilient OAuth credential vaults and distributed job queues preventing multi-tenant resource starvation during traffic bursts',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'multi-tenant OAuth race conditions, webhook ingestion spikes, and sandboxed transformation execution',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure',
    },
  },

  // 6. Temporal (Developer Workflows & Queues)
  {
    metadata: {
      id: 'temporal',
      name: 'Temporal',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://temporal.io',
      careersUrl: 'https://temporal.io/careers',
      platformEcosystem: ['Go', 'TypeScript', 'Java', 'Python', 'Kubernetes'],
      headquarters: 'Bellevue, WA / Remote',
      estimatedEmployees: '150-250',
      fundingStage: 'Series B ($120M+ raised)',
      techStack: ['Go', 'TypeScript', 'Rust', 'PostgreSQL', 'Cassandra', 'gRPC'],
    },
    leadership: [
      {
        name: 'Maxim Fateev',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/fateev/',
        technicalBackground: 'Creator of AWS Simple Workflow (SWF), Uber Cadence, and Temporal durable execution engine',
        coreBiases: ['Durable execution over ephemeral states', 'Code as workflows', 'Mathematical determinism'],
      },
      {
        name: 'Samar Abbas',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/samarabbas/',
        technicalBackground: 'Co-architect of Uber Cadence and Temporal core distributed state machine',
        coreBiases: ['Extreme distributed systems correctness', 'Sub-millisecond history state transitions', 'Zero event loss'],
      },
    ],
    keyEmployees: [
      {
        name: 'Dominic Nguyen',
        role: 'Staff Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/dominic-nguyen-dev/',
        notes: 'Works on the TypeScript and Node.js SDK runtime and determinism sandboxes',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Extensive 14-year background in distributed systems, asynchronous event queues, and deterministic execution',
        'TypeScript and Go multi-language systems mastery',
        'Deep production experience troubleshooting distributed state desync and network partition failures',
      ],
      gapsOrBridges: [
        'Deep Cassandra internal storage tuning: bridge with candidate demonstrated PostgreSQL and Redis cluster mastery',
      ],
    },
    architecture: {
      coreWorkflow: 'Orchestrates mission-critical distributed microservice workflows with guaranteed durable state persistence and automatic failure recovery.',
      criticalFailureModes: [
        'Workflow history event replay non-determinism caused by untrusted side-effects in SDKs',
        'History event count explosion (>50,000 events) on unpartitioned continuous workflow loops',
        'Worker process connection starvation during large-scale network partition healing',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/state-machine-orchestrator',
      candidateExperienceBridge: 'Built state machine workflow execution engines and distributed queue architectures handling millions of mission-critical transactions',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'TypeScript SDK determinism validation, history event compaction, and gRPC connection multiplexing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 7. Upstash (Developer Workflows & Queues)
  {
    metadata: {
      id: 'upstash',
      name: 'Upstash',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://upstash.com',
      careersUrl: 'https://upstash.com/careers',
      platformEcosystem: ['Cloudflare Workers', 'Vercel', 'Next.js', 'AWS Lambda', 'Bun'],
      headquarters: 'San Francisco, CA / Turkey / Remote',
      estimatedEmployees: '20-40',
      fundingStage: 'Series A ($10M raised)',
      techStack: ['Go', 'TypeScript', 'Rust', 'Redis', 'AWS Lambda', 'Cloudflare Workers'],
    },
    leadership: [
      {
        name: 'Enver Bisevac',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/enverbisevac/',
        technicalBackground: 'Pioneered serverless data infrastructure designed specifically for edge and serverless runtimes',
        coreBiases: ['Per-request billing', 'Zero cold starts', 'HTTP/REST API ergonomics for Redis & messaging'],
      },
      {
        name: 'Mehmet Dogan',
        role: 'Head of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/mehmet-dogan/',
        technicalBackground: 'Built the core distributed QStash message scheduler and multi-region replication fabric',
        coreBiases: ['Sub-millisecond latency', 'Stateless edge architecture', 'Extreme operational simplicity'],
      },
    ],
    keyEmployees: [
      {
        name: 'Chisom Nwokwu',
        role: 'Developer Relations & Systems',
        linkedInUrl: 'https://www.linkedin.com/in/chisom-nwokwu/',
        notes: 'Builds Next.js and Cloudflare Workers examples for serverless Redis and QStash',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate Cloudflare Workers, Durable Objects, and Next.js serverless development',
        'Deep Redis cluster, BullMQ, and HTTP webhook message queue expertise',
        'TypeScript and Go distributed backend systems proficiency',
      ],
      gapsOrBridges: [
        'Custom vector indexing engines: bridge with candidate demonstrated PostgreSQL pgvector and distributed search implementations',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides serverless Redis, Kafka, and HTTP-driven message scheduling (QStash) over HTTP REST without TCP connection pool limits.',
      criticalFailureModes: [
        'TCP connection exhaustion in serverless edge runtimes connecting to traditional Redis instances',
        'QStash deduplication ID window expiration causing duplicate task triggers under retry bursts',
        'Dead-letter queue backpressure when subscriber webhook endpoints experience cascading 504 outages',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/cloudflare-durable-queue',
      candidateExperienceBridge: 'Engineered HTTP message queues and edge scheduler workers on Cloudflare Workers and Bun with robust deduplication and retry policies',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'serverless HTTP connection pooling, QStash deduplication windows, and edge message fanout',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 8. Restate (Developer Workflows & Queues)
  {
    metadata: {
      id: 'restate',
      name: 'Restate',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://restate.dev',
      careersUrl: 'https://restate.dev/careers',
      platformEcosystem: ['TypeScript', 'Node.js', 'Python', 'Go', 'Rust'],
      headquarters: 'Berlin, Germany / US Remote',
      estimatedEmployees: '15-30',
      fundingStage: 'Seed ($7M raised)',
      techStack: ['Rust', 'TypeScript', 'gRPC', 'PostgreSQL', 'Docker'],
    },
    leadership: [
      {
        name: 'Giselle van Dongen',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/giselle-van-dongen/',
        technicalBackground: 'Former Apache Flink core contributor building next-gen resilient microservice execution runtimes',
        coreBiases: ['Eliminating distributed systems plumbing', 'Simple programming models', 'Bulletproof resilience'],
      },
      {
        name: 'Till Rohrmann',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/tillrohrmann/',
        technicalBackground: 'Former PMC Chair of Apache Flink, distributed stateful stream processing pioneer',
        coreBiases: ['Log-structured state machines', 'Minimal operational overhead', 'Language-native SDKs'],
      },
    ],
    keyEmployees: [
      {
        name: 'Mikhail Bautin',
        role: 'Staff Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/mikhail-bautin/',
        notes: 'Works on core engine consensus, journaling, and recovery algorithms',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Stream processing and stateful execution architecture background',
        'TypeScript and Bun SDK developer ergonomics alignment',
        'Deep understanding of microservice failure modes, idempotency, and journaled state replay',
      ],
      gapsOrBridges: [
        'Rust core engine internals: bridge with candidate demonstrated low-level systems and memory performance tuning',
      ],
    },
    architecture: {
      coreWorkflow: 'A distributed runtime that turns microservices into durable, resilient state machines with automatic retries and state management via an append-only journal.',
      criticalFailureModes: [
        'Journal log compaction overhead during high-frequency microservice state mutations',
        'Distributed circular invocation deadlocks across chained durable handlers',
        'Non-deterministic side-effect execution during replay when external HTTP calls lack idempotency keys',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/state-machine-orchestrator',
      candidateExperienceBridge: 'Built deterministic distributed workflow runners and transaction journals preventing partial failure states across decoupled microservices',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'TypeScript SDK state journal replay, microservice call deadlocks, and idempotency guarantees',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 9. Convex (Developer Workflows & Queues)
  {
    metadata: {
      id: 'convex',
      name: 'Convex',
      vertical: 'developer_workflows_queues' as VerticalCategory,
      website: 'https://convex.dev',
      careersUrl: 'https://convex.dev/careers',
      platformEcosystem: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Vercel'],
      headquarters: 'San Francisco, CA / Remote',
      estimatedEmployees: '35-55',
      fundingStage: 'Series A ($26M raised)',
      techStack: ['Rust', 'TypeScript', 'V8 Isolates', 'WebSockets', 'PostgreSQL'],
    },
    leadership: [
      {
        name: 'Jamie Turner',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/jamieturner/',
        technicalBackground: 'Former Dropbox infrastructure director who scaled metadata and distributed file sync engines',
        coreBiases: ['End-to-end reactivity', 'Zero glue code', 'Global transactional consistency'],
      },
      {
        name: 'Sujay Jayakar',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/sujay-jayakar/',
        technicalBackground: 'Distributed systems architect from Dropbox and Google building custom reactive database kernels',
        coreBiases: ['ACID transactions everywhere', 'V8 isolate execution speed', 'Deterministic mutations'],
      },
    ],
    keyEmployees: [
      {
        name: 'Ian Macartney',
        role: 'Head of Developer Experience',
        linkedInUrl: 'https://www.linkedin.com/in/ian-macartney/',
        notes: 'Drives TypeScript client bindings, Next.js streaming, and background scheduler integrations',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Extensive Next.js, React, and TypeScript full-stack ecosystem mastery',
        'Deep experience designing reactive real-time database queries and WebSocket backpressure mechanisms',
        'V8 isolate and Cloudflare Workers runtime execution experience',
      ],
      gapsOrBridges: [
        'Proprietary database kernel written in Rust: bridge with candidate demonstrated V8 execution and TypeScript API runtime expertise',
      ],
    },
    architecture: {
      coreWorkflow: 'A reactive backend platform with a custom transactional document database, real-time WebSocket subscriptions, and scheduled background jobs executed in V8 isolates.',
      criticalFailureModes: [
        'Optimistic concurrency write conflict storms during hot-document update bursts',
        'WebSocket subscriber memory explosion when thousands of clients subscribe to unindexed query streams',
        'Scheduled mutation backpressure under high-frequency delayed queue task execution',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/websocket-backpressure-stream',
      candidateExperienceBridge: 'Built real-time WebSocket subscription engines with backpressure limits and optimistic conflict resolution for high-traffic collaborative applications',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'reactive WebSocket subscriber backpressure, optimistic concurrency conflict handling, and scheduled task queues',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 10. Owner.com (Food POS Integration)
  {
    metadata: {
      id: 'owner_com',
      name: 'Owner.com',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://owner.com',
      careersUrl: 'https://owner.com/careers',
      platformEcosystem: ['Toast', 'Square', 'Clover', 'Shift4', 'Stripe'],
      headquarters: 'San Francisco, CA / US Remote',
      estimatedEmployees: '120-180',
      fundingStage: 'Series B ($60M raised)',
      techStack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    leadership: [
      {
        name: 'Adam Guild',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/adamguild/',
        technicalBackground: 'Pioneered direct online ordering and marketing automation for independent restaurants to bypass DoorDash fees',
        coreBiases: ['Restaurant profitability obsession', 'Rapid execution velocity', 'Zero online checkout friction'],
      },
      {
        name: 'Dean Bloembergen',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/deanbloembergen/',
        technicalBackground: 'Full stack product architect building high-conversion restaurant web and mobile ordering stacks',
        coreBiases: ['Next.js performance', 'Flawless checkout reliability', 'Pragmatic system architecture'],
      },
    ],
    keyEmployees: [
      {
        name: 'Trevor McKendrick',
        role: 'VP of Product & Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/trevormckendrick/',
        notes: 'Oversees engineering hiring, POS integrations, and growth product squads',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate Per Diem, Craver, and Pathao food ordering / POS integration architectures',
        'Next.js, TypeScript, PostgreSQL, and Redis core stack mastery',
        'Proven history resolving modifier desync and Toast/Square POS order injection failures',
      ],
      gapsOrBridges: [
        'Restaurant SEO automation algorithms: bridge with candidate demonstrated Next.js SSR/ISR and web performance optimization skills',
      ],
    },
    architecture: {
      coreWorkflow: 'Powers direct online ordering websites, mobile apps, and guest CRM for restaurants, injecting paid orders directly into physical POS registers.',
      criticalFailureModes: [
        'Modifier pricing desync between web checkout and physical POS register causing transaction rejection',
        'POS kitchen printer webhook drops during peak lunch and dinner rushes',
        'Abandoned cart SMS marketing webhook race conditions during checkout retries',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Engineered multi-tenant online ordering checkout systems with idempotent order injection and sub-second POS ticket delivery',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'Toast/Square POS modifier desync, checkout webhook idempotency, and Next.js ordering performance',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 11. UrbanPiper (Food POS Integration)
  {
    metadata: {
      id: 'urbanpiper',
      name: 'UrbanPiper',
      vertical: 'food_pos_integration' as VerticalCategory,
      website: 'https://urbanpiper.com',
      careersUrl: 'https://urbanpiper.com/careers',
      platformEcosystem: ['Uber Eats', 'DoorDash', 'Deliveroo', 'Swiggy', 'Zomato', 'Petpooja', 'Micros'],
      headquarters: 'Bengaluru, India / London / Dubai / Remote',
      estimatedEmployees: '300-400',
      fundingStage: 'Series B ($24M raised)',
      techStack: ['Python', 'TypeScript', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
    },
    leadership: [
      {
        name: 'Saurabh Gupta',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/saurabh-gupta-urbanpiper/',
        technicalBackground: 'Pioneered API middleware connecting 40,000+ restaurants to global food delivery platforms',
        coreBiases: ['Massive global scale', 'High throughput reliability', 'Deep restaurant POS empathy'],
      },
      {
        name: 'Anirban Majumdar',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/anirban-majumdar/',
        technicalBackground: 'Architected high-throughput order normalization engine processing hundreds of millions of orders',
        coreBiases: ['Kafka event streaming', 'Zero order drop tolerance', 'Automated POS failover handling'],
      },
    ],
    keyEmployees: [
      {
        name: 'Ashwin Nair',
        role: 'VP of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/ashwin-nair-eng/',
        notes: 'Leads distributed platform infrastructure and delivery partner connectors',
      },
    ],
    matchAnalysis: {
      score: 96,
      strongMatches: [
        'Direct domain alignment with candidate Pathao food delivery logistics and restaurant integration leadership',
        'High-scale Kafka, Redis, and PostgreSQL distributed systems expertise',
        'Proven experience handling regional food delivery aggregator throttling and order normalization',
      ],
      gapsOrBridges: [
        'Indian & Middle Eastern POS ecosystems: bridge with candidate demonstrated universal adapter abstraction patterns',
      ],
    },
    architecture: {
      coreWorkflow: 'Global restaurant integration bus aggregating orders from Uber Eats, Deliveroo, and Swiggy into 50+ local and cloud POS systems with live inventory sync.',
      criticalFailureModes: [
        'Kafka partition lag during regional holiday meal delivery spikes causing order delays',
        'Stockout 86ing signal drop causing orders to be accepted for sold-out menu items',
        'Aggregator API rate limit exhaustion during periodic full menu catalog republishes',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/pos-webhook-idempotency',
      candidateExperienceBridge: 'Architected food delivery dispatch and restaurant POS middleware at Pathao processing 200k+ daily orders with sub-second kitchen ticket delivery',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'high-scale delivery webhook lag, real-time 86ing menu sync, and POS failover resilience',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 12. Healthie (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'healthie',
      name: 'Healthie',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://gethealthie.com',
      careersUrl: 'https://gethealthie.com/careers',
      platformEcosystem: ['FHIR R4', 'GraphQL', 'Change Healthcare', 'Stripe', 'Fullscript'],
      headquarters: 'New York, NY / Remote',
      estimatedEmployees: '80-120',
      fundingStage: 'Series B ($35M raised)',
      techStack: ['Ruby on Rails', 'GraphQL', 'TypeScript', 'PostgreSQL', 'Redis'],
    },
    leadership: [
      {
        name: 'Erica Jain',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/ericajain/',
        technicalBackground: 'Built the leading API-first EHR and care delivery infrastructure for virtual-first healthcare',
        coreBiases: ['Patient care velocity', 'Developer-centric healthcare tools', 'Collaborative clinical workflows'],
      },
      {
        name: 'Cavan Klinsky',
        role: 'CTO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/cavanklinsky/',
        technicalBackground: 'Pioneered API-first digital health platforms and secure clinical document exchange architectures',
        coreBiases: ['GraphQL API ergonomics', 'Strict HIPAA data compliance', 'Modular digital health building blocks'],
      },
    ],
    keyEmployees: [
      {
        name: 'Benjamin Stern',
        role: 'Director of Engineering',
        linkedInUrl: 'https://www.linkedin.com/in/benjamin-stern-health/',
        notes: 'Leads backend EHR core and developer API platform teams',
      },
    ],
    matchAnalysis: {
      score: 94,
      strongMatches: [
        'Extensive digital health and clinical workflow automation background',
        'Deep understanding of HIPAA audit logging, secure patient messaging, and telehealth workflows',
        'GraphQL, TypeScript, and PostgreSQL high-performance schema design',
      ],
      gapsOrBridges: [
        'Legacy Ruby on Rails backend components: bridge with candidate demonstrated polyglot architecture and TypeScript API modernization experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Provides a complete API-first EHR, scheduling, billing, and patient engagement backend for modern digital health clinics.',
      criticalFailureModes: [
        'Deeply nested GraphQL query recursion causing PostgreSQL database connection pool starvation',
        'HIPAA audit trail write lock contention during bulk patient chart exports',
        'Webhook delivery lag for critical clinical appointment and intake form completions',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Built HIPAA-compliant clinical data ingestion and audit log pipelines with strict encryption at rest and sub-second API response times',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'GraphQL connection pool exhaustion, HIPAA audit trail write contention, and clinical webhook delivery',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 13. Elation Health (Healthcare FHIR & Automation)
  {
    metadata: {
      id: 'elation_health',
      name: 'Elation Health',
      vertical: 'healthcare_fhir_automation' as VerticalCategory,
      website: 'https://elationhealth.com',
      careersUrl: 'https://elationhealth.com/careers',
      platformEcosystem: ['FHIR R4', 'SMART on FHIR', 'Surescripts', 'Quest Diagnostics', 'Labcorp'],
      headquarters: 'San Francisco, CA / US Remote',
      estimatedEmployees: '150-250',
      fundingStage: 'Series C ($100M+ raised)',
      techStack: ['Python', 'TypeScript', 'PostgreSQL', 'AWS', 'FHIR APIs'],
    },
    leadership: [
      {
        name: 'Kyna Fong',
        role: 'CEO & Co-founder',
        linkedInUrl: 'https://www.linkedin.com/in/kynafong/',
        technicalBackground: 'Stanford PhD economics researcher building clinical-first physician operating systems',
        coreBiases: ['Physician craft empathy', 'Frictionless clinical documentation', 'High trust in primary care'],
      },
      {
        name: 'Pradyut Shah',
        role: 'Chief Technology Officer',
        linkedInUrl: 'https://www.linkedin.com/in/pradyutshah/',
        technicalBackground: 'Former healthcare engineering executive building scalable clinical data graphs and APIs',
        coreBiases: ['Enterprise clinical reliability', 'Zero-downtime EHR deployments', 'Strict FHIR R4 interoperability'],
      },
    ],
    keyEmployees: [
      {
        name: 'Jared Hanson',
        role: 'Principal Architect',
        linkedInUrl: 'https://www.linkedin.com/in/jaredhanson/',
        notes: 'Creator of Passport.js, leads developer platform and healthcare API standards',
      },
    ],
    matchAnalysis: {
      score: 95,
      strongMatches: [
        'Direct experience building clinical EHR automation and healthcare data compliance systems',
        'Python, TypeScript, and PostgreSQL database optimization for longitudinal patient charts',
        'FHIR R4 and SMART on FHIR authorization standard implementation experience',
      ],
      gapsOrBridges: [
        'Surescripts e-prescribing EDI formatting: bridge with candidate demonstrated medical protocol parser experience',
      ],
    },
    architecture: {
      coreWorkflow: 'Clinical EHR platform powering primary care medical groups, providing developer APIs for telehealth, lab orders, and billing.',
      criticalFailureModes: [
        'Longitudinal patient chart search degradation across millions of historical encounter notes',
        'Real-time e-prescribing webhook failure retry storm during national pharmacy network outages',
        'FHIR patient resource serialization timeouts on complex chronic disease clinical profiles',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/clinical-fhir-audit-pipeline',
      candidateExperienceBridge: 'Engineered high-performance clinical chart parsers and streaming FHIR data converters handling multi-year patient histories without memory bloat',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'longitudinal patient chart query latency, e-prescribing webhook retry storms, and FHIR serialization',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },

  // 14. Scrapfly (Browser Automation Infrastructure)
  {
    metadata: {
      id: 'scrapfly',
      name: 'Scrapfly',
      vertical: 'browser_automation_infrastructure' as VerticalCategory,
      website: 'https://scrapfly.io',
      careersUrl: 'https://scrapfly.io/careers',
      platformEcosystem: ['Playwright', 'Puppeteer', 'Chromium CDP', 'Cloudflare Turnstile', 'DataDome'],
      headquarters: 'Lille, France / US Remote',
      estimatedEmployees: '15-25',
      fundingStage: 'Bootstrapped / Highly Profitable',
      techStack: ['Python', 'TypeScript', 'Docker', 'Redis', 'Chromium DevTools Protocol'],
    },
    leadership: [
      {
        name: 'Jean-Sébastien Connan',
        role: 'Founder & CEO',
        linkedInUrl: 'https://www.linkedin.com/in/js-connan/',
        technicalBackground: 'Pioneered cloud web scraping APIs with automatic anti-scraping evasion and residential proxies',
        coreBiases: ['Pragmatic engineering', 'Anti-bot stealth mastery', 'High-margin developer infrastructure'],
      },
      {
        name: 'Aurélien Gâteau',
        role: 'Senior Core Systems Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/aurelien-gateau/',
        technicalBackground: 'Systems and open-source veteran optimizing headless browser lifecycle and network daemons',
        coreBiases: ['Minimal memory footprint', 'Low-level Linux performance', 'Deterministic request execution'],
      },
    ],
    keyEmployees: [
      {
        name: 'Mathieu De Sousa',
        role: 'Lead Scraping & Stealth Engineer',
        linkedInUrl: 'https://www.linkedin.com/in/mathieu-desousa/',
        notes: 'Analyzes bot detection countermeasures and TLS fingerprinting defenses',
      },
    ],
    matchAnalysis: {
      score: 97,
      strongMatches: [
        'Direct alignment with candidate OpenTabs browser automation, stealth bypass, and human-behavior simulation expertise',
        'Deep Chromium CDP, Playwright, and Puppeteer container cluster orchestration experience',
        'Bootstrapped, lean, high-leverage engineering philosophy matching founder preferences',
      ],
      gapsOrBridges: [
        'Global residential proxy routing protocols: bridge with candidate proven proxy multiplexer and anti-detection implementations',
      ],
    },
    architecture: {
      coreWorkflow: 'Enterprise web scraping API offering headless Chrome browser rendering, automated Cloudflare/DataDome bypass, and smart residential proxy rotation.',
      criticalFailureModes: [
        'Anti-bot challenge detection loops when Cloudflare Turnstile behavioral fingerprint rules change',
        'Headless Chromium zombie process accumulation exhausting /dev/shm shared memory',
        'Residential proxy connection resets during large multi-page single-page application rendering',
      ],
      candidateMatchingProofRepo: 'https://github.com/nadimtuhin/opentabs-plugins',
      candidateExperienceBridge: 'Built stealth browser automation engines with human jitter, hover simulation, and circuit breakers preventing IP banning across aggressive anti-bot platforms',
    },
    hiring: {
      sourcingChannel: 'Direct founder / CTO outreach via proof of work',
      interviewFormat: 'Technical discussion (30 min) -> Architecture deep-dive',
      painPointHook: 'headless Chrome /dev/shm memory leaks, Turnstile stealth bypasses, and proxy session multiplexing',
      partTimeTrialProposal: 'Take on a 2-week trial building an additional adapter harness or fixing queue backpressure',
    },
  },
];

export const MORE_CONTACTS_MAP: Record<string, Array<{
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
  angle: 'founder_ceo' | 'cto_eng' | 'product_ops';
  notes?: string;
}>> = {
  finch: [
    {
      name: 'Ansel Parikh',
      role: 'CEO & Co-founder',
      email: 'ansel@tryfinch.com',
      linkedInUrl: 'https://www.linkedin.com/in/anselparikh/',
      angle: 'founder_ceo',
      notes: 'Focus on expanding enterprise payroll coverage without increasing integration maintenance overhead',
    },
    {
      name: 'Jeremy Zhang',
      role: 'CTO & Co-founder',
      email: 'jeremy@tryfinch.com',
      linkedInUrl: 'https://www.linkedin.com/in/jeremy-zhang/',
      angle: 'cto_eng',
      notes: 'Focus on upstream rate limit budgeting, token refresh race conditions, and schema drift detection',
    },
    {
      name: 'Rohan Sharma',
      role: 'Head of Engineering',
      email: 'rohan@tryfinch.com',
      linkedInUrl: 'https://www.linkedin.com/in/rohansharma/',
      angle: 'cto_eng',
      notes: 'Leads backend integrations and employment data pipeline squads',
    },
  ],

  kombo: [
    {
      name: 'Julian Paul',
      role: 'CEO & Co-founder',
      email: 'julian@kombo.dev',
      linkedInUrl: 'https://www.linkedin.com/in/julian-paul/',
      angle: 'founder_ceo',
      notes: 'Focus on European B2B SaaS integration velocity and reducing custom connector development time',
    },
    {
      name: 'Niklas Higi',
      role: 'CTO & Co-founder',
      email: 'niklas@kombo.dev',
      linkedInUrl: 'https://www.linkedin.com/in/niklas-higi/',
      angle: 'cto_eng',
      notes: 'Focus on Bun worker runtimes, ATS batch webhook deduplication, and resilient OAuth lifecycle management',
    },
    {
      name: 'Lukas Fischer',
      role: 'Lead Integration Engineer',
      email: 'lukas@kombo.dev',
      linkedInUrl: 'https://www.linkedin.com/in/lukas-fischer-dev/',
      angle: 'cto_eng',
      notes: 'Builds core ATS and HRIS connector adapters',
    },
  ],

  rutter: [
    {
      name: 'Peter Zhou',
      role: 'CEO & Co-founder',
      email: 'peter@rutter.com',
      linkedInUrl: 'https://www.linkedin.com/in/peter-zhou/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise accounting integration coverage and high-growth fintech partnerships',
    },
    {
      name: 'Eric Hu',
      role: 'CTO & Co-founder',
      email: 'eric@rutter.com',
      linkedInUrl: 'https://www.linkedin.com/in/erichu/',
      angle: 'cto_eng',
      notes: 'Focus on Shopify GraphQL rate-limit budgeting and QuickBooks ledger write idempotency',
    },
    {
      name: 'Kevin Zhao',
      role: 'Senior Staff Engineer',
      email: 'kevin@rutter.com',
      linkedInUrl: 'https://www.linkedin.com/in/kevin-zhao-eng/',
      angle: 'cto_eng',
      notes: 'Leads commerce ledger synchronization and schema abstraction layers',
    },
  ],

  apideck: [
    {
      name: 'Gertjan De Wilde',
      role: 'CEO & Co-founder',
      email: 'gertjan@apideck.com',
      linkedInUrl: 'https://www.linkedin.com/in/gertjandewilde/',
      angle: 'founder_ceo',
      notes: 'Focus on ecosystem platform growth and real-time unified API adoption',
    },
    {
      name: 'Logan Volkers',
      role: 'CTO & Co-founder',
      email: 'logan@apideck.com',
      linkedInUrl: 'https://www.linkedin.com/in/loganvolkers/',
      angle: 'cto_eng',
      notes: 'Focus on Cloudflare Workers edge proxy routing and downstream API schema variance mitigation',
    },
    {
      name: 'Dieter Coppens',
      role: 'Head of Product & Ecosystem',
      email: 'dieter@apideck.com',
      linkedInUrl: 'https://www.linkedin.com/in/dieter-coppens/',
      angle: 'product_ops',
      notes: 'Manages connector roadmap and partner developer tooling',
    },
  ],

  paragon: [
    {
      name: 'Brandon Foo',
      role: 'CEO & Co-founder',
      email: 'brandon@useparagon.com',
      linkedInUrl: 'https://www.linkedin.com/in/brandonfoo/',
      angle: 'founder_ceo',
      notes: 'Focus on enterprise SaaS sales cycle acceleration through turnkey native integrations',
    },
    {
      name: 'Ishmael Samuel',
      role: 'CTO & Co-founder',
      email: 'ishmael@useparagon.com',
      linkedInUrl: 'https://www.linkedin.com/in/ishmaelsamuel/',
      angle: 'cto_eng',
      notes: 'Focus on multi-tenant OAuth token race conditions and webhook ingestion bursts',
    },
    {
      name: 'Alexandre Tran',
      role: 'Senior Engineering Manager',
      email: 'alexandre@useparagon.com',
      linkedInUrl: 'https://www.linkedin.com/in/alexandre-tran-eng/',
      angle: 'cto_eng',
      notes: 'Oversees connector infrastructure and workflow execution engines',
    },
  ],

  temporal: [
    {
      name: 'Maxim Fateev',
      role: 'CEO & Co-founder',
      email: 'maxim@temporal.io',
      linkedInUrl: 'https://www.linkedin.com/in/fateev/',
      angle: 'founder_ceo',
      notes: 'Focus on durable execution adoption across enterprise cloud native architectures',
    },
    {
      name: 'Samar Abbas',
      role: 'CTO & Co-founder',
      email: 'samar@temporal.io',
      linkedInUrl: 'https://www.linkedin.com/in/samarabbas/',
      angle: 'cto_eng',
      notes: 'Focus on workflow replay determinism, state machine event compaction, and cluster resilience',
    },
    {
      name: 'Dominic Nguyen',
      role: 'Staff Systems Engineer',
      email: 'dominic@temporal.io',
      linkedInUrl: 'https://www.linkedin.com/in/dominic-nguyen-dev/',
      angle: 'cto_eng',
      notes: 'Works on the TypeScript and Node.js SDK runtime and determinism sandboxes',
    },
  ],

  upstash: [
    {
      name: 'Enver Bisevac',
      role: 'CEO & Co-founder',
      email: 'enver@upstash.com',
      linkedInUrl: 'https://www.linkedin.com/in/enverbisevac/',
      angle: 'founder_ceo',
      notes: 'Focus on serverless data platform adoption and edge runtime developer tooling',
    },
    {
      name: 'Mehmet Dogan',
      role: 'Head of Engineering',
      email: 'mehmet@upstash.com',
      linkedInUrl: 'https://www.linkedin.com/in/mehmet-dogan/',
      angle: 'cto_eng',
      notes: 'Focus on QStash HTTP message deduplication windows, dead-letter retry storms, and edge workers',
    },
    {
      name: 'Chisom Nwokwu',
      role: 'Developer Relations & Systems',
      email: 'chisom@upstash.com',
      linkedInUrl: 'https://www.linkedin.com/in/chisom-nwokwu/',
      angle: 'product_ops',
      notes: 'Builds Next.js and Cloudflare Workers examples for serverless Redis and QStash',
    },
  ],

  restate: [
    {
      name: 'Giselle van Dongen',
      role: 'CEO & Co-founder',
      email: 'giselle@restate.dev',
      linkedInUrl: 'https://www.linkedin.com/in/giselle-van-dongen/',
      angle: 'founder_ceo',
      notes: 'Focus on developer productivity and eliminating complex distributed microservice infrastructure',
    },
    {
      name: 'Till Rohrmann',
      role: 'CTO & Co-founder',
      email: 'till@restate.dev',
      linkedInUrl: 'https://www.linkedin.com/in/tillrohrmann/',
      angle: 'cto_eng',
      notes: 'Focus on append-only state journals, deadlock prevention in chained handlers, and TypeScript SDK ergonomics',
    },
    {
      name: 'Mikhail Bautin',
      role: 'Staff Systems Engineer',
      email: 'mikhail@restate.dev',
      linkedInUrl: 'https://www.linkedin.com/in/mikhail-bautin/',
      angle: 'cto_eng',
      notes: 'Works on core engine consensus, journaling, and recovery algorithms',
    },
  ],

  convex: [
    {
      name: 'Jamie Turner',
      role: 'CEO & Co-founder',
      email: 'jamie@convex.dev',
      linkedInUrl: 'https://www.linkedin.com/in/jamieturner/',
      angle: 'founder_ceo',
      notes: 'Focus on developer velocity and eliminating backend boilerplate for full-stack TypeScript squads',
    },
    {
      name: 'Sujay Jayakar',
      role: 'CTO & Co-founder',
      email: 'sujay@convex.dev',
      linkedInUrl: 'https://www.linkedin.com/in/sujay-jayakar/',
      angle: 'cto_eng',
      notes: 'Focus on V8 isolate performance, optimistic concurrency conflict handling, and WebSocket streaming backpressure',
    },
    {
      name: 'Ian Macartney',
      role: 'Head of Developer Experience',
      email: 'ian@convex.dev',
      linkedInUrl: 'https://www.linkedin.com/in/ian-macartney/',
      angle: 'product_ops',
      notes: 'Drives TypeScript client bindings, Next.js streaming, and background scheduler integrations',
    },
  ],

  owner_com: [
    {
      name: 'Adam Guild',
      role: 'CEO & Co-founder',
      email: 'adam@owner.com',
      linkedInUrl: 'https://www.linkedin.com/in/adamguild/',
      angle: 'founder_ceo',
      notes: 'Focus on direct online restaurant ordering revenue and eliminating DoorDash commission bleed',
    },
    {
      name: 'Dean Bloembergen',
      role: 'CTO & Co-founder',
      email: 'dean@owner.com',
      linkedInUrl: 'https://www.linkedin.com/in/deanbloembergen/',
      angle: 'cto_eng',
      notes: 'Focus on Toast/Square POS modifier desync, checkout webhook idempotency, and Next.js ordering speed',
    },
    {
      name: 'Trevor McKendrick',
      role: 'VP of Product & Engineering',
      email: 'trevor@owner.com',
      linkedInUrl: 'https://www.linkedin.com/in/trevormckendrick/',
      angle: 'product_ops',
      notes: 'Oversees engineering hiring, POS integrations, and growth product squads',
    },
  ],

  urbanpiper: [
    {
      name: 'Saurabh Gupta',
      role: 'CEO & Co-founder',
      email: 'saurabh@urbanpiper.com',
      linkedInUrl: 'https://www.linkedin.com/in/saurabh-gupta-urbanpiper/',
      angle: 'founder_ceo',
      notes: 'Focus on international restaurant delivery aggregation scale and POS partner expansion',
    },
    {
      name: 'Anirban Majumdar',
      role: 'CTO & Co-founder',
      email: 'anirban@urbanpiper.com',
      linkedInUrl: 'https://www.linkedin.com/in/anirban-majumdar/',
      angle: 'cto_eng',
      notes: 'Focus on high-scale Kafka order pipelines, real-time 86ing menu sync, and POS failover resilience',
    },
    {
      name: 'Ashwin Nair',
      role: 'VP of Engineering',
      email: 'ashwin@urbanpiper.com',
      linkedInUrl: 'https://www.linkedin.com/in/ashwin-nair-eng/',
      angle: 'cto_eng',
      notes: 'Leads distributed platform infrastructure and delivery partner connectors',
    },
  ],

  healthie: [
    {
      name: 'Erica Jain',
      role: 'CEO & Co-founder',
      email: 'erica@gethealthie.com',
      linkedInUrl: 'https://www.linkedin.com/in/ericajain/',
      angle: 'founder_ceo',
      notes: 'Focus on digital health clinic operating scale and modern virtual care workflows',
    },
    {
      name: 'Cavan Klinsky',
      role: 'CTO & Co-founder',
      email: 'cavan@gethealthie.com',
      linkedInUrl: 'https://www.linkedin.com/in/cavanklinsky/',
      angle: 'cto_eng',
      notes: 'Focus on GraphQL connection pool exhaustion, HIPAA audit trail write contention, and clinical webhooks',
    },
    {
      name: 'Benjamin Stern',
      role: 'Director of Engineering',
      email: 'benjamin@gethealthie.com',
      linkedInUrl: 'https://www.linkedin.com/in/benjamin-stern-health/',
      angle: 'cto_eng',
      notes: 'Leads backend EHR core and developer API platform teams',
    },
  ],

  elation_health: [
    {
      name: 'Kyna Fong',
      role: 'CEO & Co-founder',
      email: 'kyna@elationhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/kynafong/',
      angle: 'founder_ceo',
      notes: 'Focus on physician primary care workflows and national digital health developer adoption',
    },
    {
      name: 'Pradyut Shah',
      role: 'Chief Technology Officer',
      email: 'pradyut@elationhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/pradyutshah/',
      angle: 'cto_eng',
      notes: 'Focus on longitudinal patient chart query latency, e-prescribing webhook retry storms, and FHIR serialization',
    },
    {
      name: 'Jared Hanson',
      role: 'Principal Architect',
      email: 'jared@elationhealth.com',
      linkedInUrl: 'https://www.linkedin.com/in/jaredhanson/',
      angle: 'cto_eng',
      notes: 'Creator of Passport.js, leads developer platform and healthcare API standards',
    },
  ],

  scrapfly: [
    {
      name: 'Jean-Sébastien Connan',
      role: 'Founder & CEO',
      email: 'js@scrapfly.io',
      linkedInUrl: 'https://www.linkedin.com/in/js-connan/',
      angle: 'founder_ceo',
      notes: 'Focus on high-margin web extraction infrastructure, developer ergonomics, and automated anti-ban',
    },
    {
      name: 'Aurélien Gâteau',
      role: 'Senior Core Systems Engineer',
      email: 'aurelien@scrapfly.io',
      linkedInUrl: 'https://www.linkedin.com/in/aurelien-gateau/',
      angle: 'cto_eng',
      notes: 'Focus on headless Chrome /dev/shm shared memory leaks, Turnstile stealth bypasses, and proxy session pools',
    },
    {
      name: 'Mathieu De Sousa',
      role: 'Lead Scraping & Stealth Engineer',
      email: 'mathieu@scrapfly.io',
      linkedInUrl: 'https://www.linkedin.com/in/mathieu-desousa/',
      angle: 'cto_eng',
      notes: 'Analyzes bot detection countermeasures and TLS fingerprinting defenses',
    },
  ],
};
