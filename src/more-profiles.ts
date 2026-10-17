import type { CompanyDeepProfile } from './types.ts';

export const MORE_COMPANY_PROFILES: Record<string, CompanyDeepProfile> = {
  "finch": {
    "business": {
      "model": "Unified B2B API platform normalizing payroll, benefits, and HRIS systems via standard REST/GraphQL endpoints",
      "pricing": "Per active synced employee per month ($2.50 – $4.00 PEPPM) + Enterprise base platform contract",
      "targetCustomers": [
        "Fintech platforms",
        "401(k) benefits software",
        "Tax credit automation startups",
        "HR analytics tools"
      ],
      "keyClients": [
        "Human Interest",
        "Guideline",
        "Carta",
        "Ramp",
        "Trainual"
      ],
      "revenueOrFunding": "Series B ($40M raised), backed by General Catalyst and Menlo Ventures"
    },
    "blogs": [
      {
        "title": "Solving Payroll Rate Limits: Designing Multi-Tenant Token Buckets Across 200 Providers",
        "url": "https://tryfinch.com/blog/payroll-rate-limits",
        "summary": "How Finch manages heterogeneous rate limits across ADP, Workday, and Gusto without exhausting customer API quotas.",
        "tags": [
          "Rate Limiting",
          "Token Bucket",
          "Payroll APIs",
          "Distributed Queues"
        ],
        "date": "2026-08-19"
      },
      {
        "title": "Zero Discrepancy Tax Deductions: Canonical Schemas for Fragmented Payroll Fields",
        "url": "https://tryfinch.com/blog/canonical-payroll-schemas",
        "summary": "Architectural lessons from mapping non-standard pre-tax and post-tax employee deduction fields into predictable schemas.",
        "tags": [
          "Schema Normalization",
          "PostgreSQL",
          "Tax Fields"
        ],
        "date": "2026-05-11"
      }
    ],
    "projects": [
      {
        "name": "Finch Unified Core Engine",
        "url": "https://docs.tryfinch.com",
        "starsOrDownloads": "200+ HRIS/Payroll systems connected",
        "techStack": [
          "Node.js",
          "TypeScript",
          "Go",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Universal payroll and HR API providing programmatic read/write access to employee deductions and payroll runs."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Idempotent payroll syncs to prevent catastrophic double-deduction calculation errors",
        "Strict schema immutability and continuous backward compatibility guarantees",
        "Asynchronous job queues with circuit breakers for flaky upstream payroll portals"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "Go",
        "PostgreSQL",
        "Redis",
        "AWS"
      ],
      "engineeringCulture": [
        "Extreme data precision and financial calculation accuracy",
        "Developer-first ergonomics and transparent error codes"
      ]
    }
  },
  "kombo": {
    "business": {
      "model": "European-focused unified API platform for HR, payroll, and applicant tracking integrations",
      "pricing": "Tiered subscription based on linked company accounts (€300 – €900/month)",
      "targetCustomers": [
        "European B2B SaaS builders",
        "Workforce planning platforms",
        "Corporate travel software"
      ],
      "keyClients": [
        "Alan",
        "HeyJobs",
        "Remote",
        "Jobvalley",
        "Staffbase"
      ],
      "revenueOrFunding": "Series A ($15M raised), profitable core, 50+ European HRIS/ATS connectors"
    },
    "blogs": [
      {
        "title": "Building Resilient ATS Connectors on Bun and TypeScript",
        "url": "https://kombo.dev/blog/ats-connectors-bun",
        "summary": "Why Kombo switched to Bun for connector workers to handle high-frequency applicant resume streaming without memory spikes.",
        "tags": [
          "Bun",
          "TypeScript",
          "ATS Integrations",
          "Streaming"
        ],
        "date": "2026-07-28"
      },
      {
        "title": "Solving ATS Webhook Flakiness: Reverse-Proxy Ingestion with Automatic Polling Fallback",
        "url": "https://kombo.dev/blog/ats-webhook-polling-fallback",
        "summary": "Handling Greenhouse and Lever webhook dropouts during candidate bulk moves by orchestrating differential sync fallbacks without exhausting customer API rate limits.",
        "tags": [
          "ATS Integrations",
          "Webhooks",
          "Polling Fallback",
          "Bun"
        ],
        "date": "2026-07-28"
      }
    ],
    "projects": [
      {
        "name": "Kombo Unified HR Engine",
        "url": "https://kombo.dev/docs",
        "starsOrDownloads": "50+ European HRIS & ATS connectors",
        "techStack": [
          "TypeScript",
          "Bun",
          "Node.js",
          "PostgreSQL",
          "Docker"
        ],
        "description": "Single API and embedded connect widget for connecting European HR systems with complete GDPR compliance."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Bun-native worker pools for low-latency batch synchronization",
        "Decoupled connector harnesses that isolate upstream provider schema changes",
        "Zero tracking of non-essential employee PII"
      ],
      "stackPreferences": [
        "TypeScript",
        "Bun",
        "Node.js",
        "PostgreSQL",
        "Docker"
      ],
      "engineeringCulture": [
        "Lean, agile European engineering",
        "High developer velocity with strict TypeScript schemas"
      ]
    }
  },
  "rutter": {
    "business": {
      "model": "Universal commerce, accounting, and payment API connecting fintech platforms to merchant stores",
      "pricing": "Usage-based per active synced storefront / ledger ($25 – $50/storefront/month)",
      "targetCustomers": [
        "B2B fintechs",
        "Working capital lenders",
        "SaaS business management platforms"
      ],
      "keyClients": [
        "Mercury",
        "Ramp",
        "Parafin",
        "Pipe",
        "Alloy Automation"
      ],
      "revenueOrFunding": "Series A ($27M raised), backed by Andreessen Horowitz and Haystack"
    },
    "blogs": [
      {
        "title": "Mastering Shopify GraphQL Cost Budgets in High-Volume Ledger Syncs",
        "url": "https://rutter.com/blog/shopify-graphql-cost-budgets",
        "summary": "Tuning dynamic token replenishment algorithms to maximize throughput without exceeding Shopify API rate caps.",
        "tags": [
          "Shopify GraphQL",
          "Rate Limiting",
          "Go",
          "Distributed Queues"
        ],
        "date": "2026-06-21"
      },
      {
        "title": "High-Volume Commerce Ledger Ingestion: Stream Parsing 100,000 Order Payloads from Amazon and WooCommerce",
        "url": "https://rutter.com/blog/high-volume-commerce-stream-parsing",
        "summary": "Preventing Node.js event loop blocks during multi-megabyte JSON payload parsing using streaming JSON chunkers and PostgreSQL batch COPY pipelines.",
        "tags": [
          "Commerce API",
          "Stream Parsing",
          "Event Loop",
          "PostgreSQL Batching"
        ],
        "date": "2026-08-15"
      }
    ],
    "projects": [
      {
        "name": "Rutter Commerce Engine",
        "url": "https://docs.rutter.com",
        "starsOrDownloads": "40+ eCommerce & accounting integrations",
        "techStack": [
          "Go",
          "TypeScript",
          "PostgreSQL",
          "Kafka",
          "Redis"
        ],
        "description": "Universal API for pulling live orders, inventory levels, and financial transactions from global eCommerce platforms."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Strict transactional consistency for financial and accounting ledger entries",
        "Decoupled event brokers (Kafka) to buffer merchant order spikes during Black Friday"
      ],
      "stackPreferences": [
        "Go",
        "TypeScript",
        "PostgreSQL",
        "Kafka",
        "Redis"
      ],
      "engineeringCulture": [
        "High-performance distributed systems",
        "Reliability and fintech data integrity"
      ]
    }
  },
  "apideck": {
    "business": {
      "model": "Real-time stateless unified API and ecosystem marketplace platform for SaaS vendors",
      "pricing": "Monthly tiered platform fee ($249 – $1,499/month based on active connections and proxy volume)",
      "targetCustomers": [
        "Mid-market and enterprise B2B software vendors",
        "Product integration squads"
      ],
      "keyClients": [
        "Brex",
        "Teamleader",
        "Personio ecosystem apps",
        "Exact Online partners"
      ],
      "revenueOrFunding": "Series A ($12M raised), pioneer in stateless edge proxy unified APIs"
    },
    "blogs": [
      {
        "title": "Stateless Edge Proxies: Why We Moved Real-Time Unified APIs to Cloudflare Workers",
        "url": "https://apideck.com/blog/stateless-edge-proxies-cloudflare",
        "summary": "How Apideck executes sub-100ms request transformation and header normalization without database persistence.",
        "tags": [
          "Cloudflare Workers",
          "Edge Computing",
          "Stateless Proxies",
          "TypeScript"
        ],
        "date": "2026-08-02"
      },
      {
        "title": "Declarative Integration Mapping: Eliminating Imperative Glue Code Across 150 Unified Connectors",
        "url": "https://apideck.com/blog/declarative-integration-mapping",
        "summary": "Using schema ASTs and bidirectional property transforms on Cloudflare Workers edge runtimes to normalize CRM, HRIS, and accounting payloads with zero persistent state.",
        "tags": [
          "Declarative Schemas",
          "Cloudflare Workers",
          "Edge Computing",
          "Unified API"
        ],
        "date": "2026-07-09"
      }
    ],
    "projects": [
      {
        "name": "apideck-libraries/node-sdk",
        "url": "https://github.com/apideck-libraries/node-sdk",
        "starsOrDownloads": "Official SDK / 100k+ monthly downloads",
        "techStack": [
          "TypeScript",
          "Cloudflare Workers",
          "Node.js",
          "OpenAPI"
        ],
        "description": "Unified SDK for Node.js and browser edge runtimes covering 100+ business SaaS APIs."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Stateless edge request routing over heavyweight central database queues",
        "Strict TypeScript and JSON Schema validation on every incoming and outgoing payload"
      ],
      "stackPreferences": [
        "TypeScript",
        "Cloudflare Workers",
        "Node.js",
        "Serverless"
      ],
      "engineeringCulture": [
        "Ecosystem transparency",
        "Developer DX obsession and minimal latency overhead"
      ]
    }
  },
  "paragon": {
    "business": {
      "model": "Embedded integration platform and developer iPaaS for B2B SaaS applications",
      "pricing": "Annual contract based on integrated customers ($1,000 – $3,500+/month)",
      "targetCustomers": [
        "Fast-growing B2B SaaS startups",
        "Product managers and growth engineers"
      ],
      "keyClients": [
        "Hyperproof",
        "Copy.ai",
        "Airbase",
        "Submittable",
        "Perk"
      ],
      "revenueOrFunding": "Series A ($16M raised), backed by Initialized Capital and Y Combinator"
    },
    "blogs": [
      {
        "title": "Engineering Multi-Tenant Integration Sandboxes at Scale",
        "url": "https://useparagon.com/blog/multi-tenant-sandboxes",
        "summary": "Executing custom JavaScript data transformation pipelines safely across thousands of concurrent tenant workspaces.",
        "tags": [
          "Multi-Tenant",
          "Kubernetes",
          "Sandboxes",
          "TypeScript"
        ],
        "date": "2026-07-16"
      },
      {
        "title": "Multi-Tenant OAuth Credential Isolation: Encrypted KMS Enclaves for Enterprise Integration Tokens",
        "url": "https://useparagon.com/blog/multi-tenant-oauth-isolation",
        "summary": "Preventing credential leakage and token refresh collision storms in distributed serverless workers using AWS KMS envelope encryption and atomic Redis lease locks.",
        "tags": [
          "OAuth2 Security",
          "KMS Encryption",
          "Atomic Locks",
          "Enterprise SaaS"
        ],
        "date": "2026-08-02"
      }
    ],
    "projects": [
      {
        "name": "Paragon Embedded SDK",
        "url": "https://docs.useparagon.com",
        "starsOrDownloads": "Millions of end-user syncs",
        "techStack": [
          "TypeScript",
          "React",
          "Node.js",
          "Kubernetes",
          "Redis"
        ],
        "description": "Drop-in client SDK and backend orchestration layer for offering turnkey third-party integrations."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Multi-tenant isolation to guarantee zero data bleeding across corporate accounts",
        "Managed OAuth credential refreshes with atomic locking"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "Kubernetes",
        "Redis",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Empowering engineers to ship integrations in hours instead of months",
        "Enterprise security"
      ]
    }
  },
  "temporal": {
    "business": {
      "model": "Open-source distributed durable execution platform and managed cloud workflow infrastructure",
      "pricing": "Free open source self-hosted / Temporal Cloud based on Action volume and active storage",
      "targetCustomers": [
        "Enterprise microservices squads",
        "Fintech engineering teams",
        "Mission-critical distributed systems"
      ],
      "keyClients": [
        "Netflix",
        "Descript",
        "Datadog",
        "Coinbase",
        "Snapchat",
        "Stripe"
      ],
      "revenueOrFunding": "Series B ($120M+ raised), $1.5B+ valuation, backed by Index Ventures and Sequoia Capital"
    },
    "blogs": [
      {
        "title": "Why Microservices Fail: The Case for Durable Execution and Deterministic Replay",
        "url": "https://temporal.io/blog/durable-execution-primer",
        "summary": "Maxim Fateev explains why traditional message queues and sagas break under partial network failures, and how event history journals solve it.",
        "tags": [
          "Durable Execution",
          "Distributed Systems",
          "Go",
          "gRPC"
        ],
        "date": "2026-08-30"
      },
      {
        "title": "Building Deterministic TypeScript Workflows: How the V8 Sandbox Guarantees Correctness",
        "url": "https://temporal.io/blog/typescript-sdk-v8-determinism",
        "summary": "Isolating workflow functions from random numbers, system timers, and un-mocked side effects in Node.js and Bun.",
        "tags": [
          "TypeScript SDK",
          "V8 Isolates",
          "Determinism"
        ],
        "date": "2026-05-18"
      }
    ],
    "projects": [
      {
        "name": "temporalio/temporal",
        "url": "https://github.com/temporalio/temporal",
        "starsOrDownloads": "13,500+ GitHub stars",
        "techStack": [
          "Go",
          "gRPC",
          "PostgreSQL",
          "Cassandra",
          "MySQL"
        ],
        "description": "Temporal service is an open source durable execution platform for building scalable distributed applications."
      },
      {
        "name": "temporalio/sdk-typescript",
        "url": "https://github.com/temporalio/sdk-typescript",
        "starsOrDownloads": "1,500+ GitHub stars / 200k+ npm downloads",
        "techStack": [
          "TypeScript",
          "Rust Core",
          "V8 Isolates"
        ],
        "description": "The official Temporal TypeScript SDK for building deterministic, resilient distributed workflow applications."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Deterministic state replay over ephemeral in-memory state tracking",
        "Strict separation between side-effect Activities and pure Workflow code",
        "Mathematical correctness and formal verification of distributed state transitions"
      ],
      "stackPreferences": [
        "Go",
        "TypeScript",
        "Rust",
        "PostgreSQL",
        "Cassandra",
        "gRPC"
      ],
      "engineeringCulture": [
        "Extreme distributed systems rigor",
        "Open source transparency and developer empowerment"
      ]
    }
  },
  "upstash": {
    "business": {
      "model": "Serverless data platform delivering low-latency Redis, Kafka, and HTTP task queues (QStash) over REST",
      "pricing": "Usage-based per 100k requests ($0.20 per 100k commands) + Free tier",
      "targetCustomers": [
        "Next.js developers",
        "Cloudflare Workers and edge engineers",
        "AI agent builders"
      ],
      "keyClients": [
        "Vercel ecosystem builders",
        "Hashnode",
        "Loom",
        "Dub.co",
        "Raycast"
      ],
      "revenueOrFunding": "Series A ($10M raised), backed by a16z and angel operators"
    },
    "blogs": [
      {
        "title": "Why Serverless Needs HTTP-First Redis: Eliminating Connection Pool Limits at the Edge",
        "url": "https://upstash.com/blog/http-first-redis-serverless",
        "summary": "How Upstash engineered stateless HTTP endpoints that outperform raw TCP socket pools in short-lived serverless invocations.",
        "tags": [
          "Serverless Redis",
          "Edge Computing",
          "Cloudflare Workers",
          "Go"
        ],
        "date": "2026-07-22"
      },
      {
        "title": "Engineering QStash: At-Least-Once Delivery Over Webhooks Without Brokers",
        "url": "https://upstash.com/blog/qstash-architecture",
        "summary": "Building a globally distributed message scheduler and dead-letter queue designed specifically for serverless endpoints.",
        "tags": [
          "QStash",
          "Webhooks",
          "Message Queues",
          "Deduplication"
        ],
        "date": "2026-04-15"
      }
    ],
    "projects": [
      {
        "name": "upstash/upstash-redis",
        "url": "https://github.com/upstash/upstash-redis",
        "starsOrDownloads": "3,200+ GitHub stars / 2M+ monthly npm downloads",
        "techStack": [
          "TypeScript",
          "HTTP/REST",
          "Cloudflare Workers",
          "Next.js"
        ],
        "description": "Serverless Redis SDK designed for Cloudflare Workers, Fastly, Vercel, and Next.js edge runtimes."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "HTTP REST protocol ergonomics over brittle persistent TCP connection sockets in serverless runtimes",
        "Zero cold starts and global edge replication",
        "Minimalist, single-command developer onboarding"
      ],
      "stackPreferences": [
        "Go",
        "TypeScript",
        "Rust",
        "Cloudflare Workers",
        "Redis"
      ],
      "engineeringCulture": [
        "Radical simplicity",
        "Serverless developer obsession and high-velocity shipping"
      ]
    }
  },
  "restate": {
    "business": {
      "model": "Distributed durable execution platform and append-only state journal for resilient microservices",
      "pricing": "Free open source self-hosted / Restate Cloud managed runtime",
      "targetCustomers": [
        "Backend infrastructure engineers",
        "Microservice platform teams",
        "Event-driven systems builders"
      ],
      "keyClients": [
        "Modern European fintechs",
        "Autonomous logistics and dispatch platforms"
      ],
      "revenueOrFunding": "Seed ($7M raised), backed by Redpoint Ventures and founders of Databricks and Confluent"
    },
    "blogs": [
      {
        "title": "Distributed State Without Sagas: How Restate Solves Partial Microservice Failures",
        "url": "https://restate.dev/blog/distributed-state-without-sagas",
        "summary": "Till Rohrmann explains how log-structured state journals eliminate thousands of lines of compensatory rollback code.",
        "tags": [
          "Microservices",
          "State Machines",
          "Rust",
          "Distributed Systems"
        ],
        "date": "2026-08-14"
      },
      {
        "title": "Eliminating Distributed Sagas: How Restate Enforces ACID-Like Guarantees Across Disparate HTTP Microservices",
        "url": "https://restate.dev/blog/eliminating-distributed-sagas",
        "summary": "Using an append-only deterministic execution log and lightweight Raft consensus to automatically undo partial transaction failures without complex compensating transaction logic.",
        "tags": [
          "Distributed Systems",
          "Durable Execution",
          "ACID Guarantees",
          "Raft"
        ],
        "date": "2026-08-19"
      }
    ],
    "projects": [
      {
        "name": "restatedev/restate",
        "url": "https://github.com/restatedev/restate",
        "starsOrDownloads": "2,800+ GitHub stars",
        "techStack": [
          "Rust",
          "TypeScript",
          "PostgreSQL",
          "gRPC"
        ],
        "description": "A distributed runtime for resilient, stateful, and event-driven applications."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Log-structured durable append-only journals",
        "Eliminating boilerplate distributed locking and two-phase commit protocols",
        "Language-native async/await code instead of visual DSL state machines"
      ],
      "stackPreferences": [
        "Rust",
        "TypeScript",
        "gRPC",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Systems engineering excellence",
        "Decoupled, composable microservice design"
      ]
    }
  },
  "convex": {
    "business": {
      "model": "Full-stack reactive backend application platform with automatic caching, subscriptions, and background workers",
      "pricing": "Usage-based compute & storage + Free tier ($25 – $100+/mo for team plans)",
      "targetCustomers": [
        "Next.js and React full-stack engineers",
        "AI agent application builders",
        "Fast-moving startups"
      ],
      "keyClients": [
        "Together AI",
        "Cal.com ecosystem teams",
        "Figma plugins",
        "LaunchDarkly engineering tools"
      ],
      "revenueOrFunding": "Series A ($26M raised), backed by Andreessen Horowitz and SV Angel"
    },
    "blogs": [
      {
        "title": "End-to-End Reactivity: Why We Built a Custom Transactional Database for TypeScript",
        "url": "https://convex.dev/blog/end-to-end-reactivity-database",
        "summary": "Jamie Turner breaks down the architecture of automatic database query invalidation and sub-10ms WebSocket subscription updates.",
        "tags": [
          "Reactive Database",
          "WebSockets",
          "TypeScript",
          "Rust"
        ],
        "date": "2026-07-30"
      },
      {
        "title": "Executing Mutations in V8 Isolates: Zero-Overhead Serverless Compute",
        "url": "https://convex.dev/blog/v8-isolates-mutations",
        "summary": "How Convex achieves sub-5ms transaction commit times by embedding Google V8 directly inside custom database kernels.",
        "tags": [
          "V8 Isolates",
          "Transactions",
          "ACID"
        ],
        "date": "2026-04-20"
      }
    ],
    "projects": [
      {
        "name": "get-convex/convex-js",
        "url": "https://github.com/get-convex/convex-js",
        "starsOrDownloads": "4,000+ GitHub stars / 500k+ npm downloads",
        "techStack": [
          "TypeScript",
          "React",
          "Next.js",
          "WebSockets"
        ],
        "description": "Client and server libraries for Convex: the reactive database and backend for TypeScript."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Global ACID transactional consistency by default",
        "Automatic reactive query cache invalidation without manual Redis pub/sub wiring",
        "TypeScript end-to-end type safety from database schema to UI hook"
      ],
      "stackPreferences": [
        "Rust",
        "TypeScript",
        "V8 Isolates",
        "WebSockets",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Radical developer velocity",
        "Zero boilerplate backend infrastructure"
      ]
    }
  },
  "owner_com": {
    "business": {
      "model": "Direct online ordering, guest CRM, and branded mobile app operating system for independent restaurants",
      "pricing": "Performance subscription ($299 – $499/location/month) + low convenience fee passed to guest",
      "targetCustomers": [
        "Independent pizzeria chains",
        "Regional burger and sushi restaurants",
        "Multi-unit QSR operators"
      ],
      "keyClients": [
        "Over 3,000 independent restaurant locations across North America"
      ],
      "revenueOrFunding": "Series B ($60M raised), $30M+ ARR, backed by Redpoint and Alt Capital"
    },
    "blogs": [
      {
        "title": "Sub-Second Food Ordering: Optimizing Next.js SSR and Cart State for Restaurant Checkouts",
        "url": "https://owner.com/blog/sub-second-ordering-nextjs",
        "summary": "Dean Bloembergen explains how Owner achieved 3x industry conversion rates by eliminating client-side rendering lag on mobile menus.",
        "tags": [
          "Next.js",
          "Web Performance",
          "Checkout UX",
          "TypeScript"
        ],
        "date": "2026-08-10"
      },
      {
        "title": "Solving POS Printer Desync: Real-Time Ticket Ingestion in High-Volume Kitchens",
        "url": "https://owner.com/blog/pos-printer-sync-architecture",
        "summary": "How Owner guarantees that online orders fire to kitchen display screens and impact thermal printers without human intervention.",
        "tags": [
          "POS Sync",
          "Toast",
          "Square",
          "Kitchen Printers"
        ],
        "date": "2026-05-04"
      }
    ],
    "projects": [
      {
        "name": "Owner.com Ordering Platform",
        "url": "https://owner.com/products/online-ordering",
        "starsOrDownloads": "Over 3,000 active restaurant websites & apps",
        "techStack": [
          "TypeScript",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis"
        ],
        "description": "White-label web and mobile ordering suite with automated SEO, loyalty rewards, and direct Toast/Square POS sync."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Next.js SSR and client-side caching for instant checkout page loads",
        "Idempotent POS order injection with automatic retry backoff during local internet drops",
        "Zero reliance on third-party marketplace commissions"
      ],
      "stackPreferences": [
        "TypeScript",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Redis"
      ],
      "engineeringCulture": [
        "Extreme restaurant empathy and customer revenue focus",
        "Relentless shipping speed"
      ]
    }
  },
  "urbanpiper": {
    "business": {
      "model": "Global restaurant integration middleware platform connecting POS systems to food delivery aggregators",
      "pricing": "Tiered monthly SaaS fee per store location ($30 – $80/location/month)",
      "targetCustomers": [
        "Enterprise QSR franchises",
        "Cloud kitchen operators",
        "Regional restaurant chains"
      ],
      "keyClients": [
        "McDonalds India",
        "Pizza Hut",
        "Subway",
        "KFC Middle East",
        "Chai Point"
      ],
      "revenueOrFunding": "Series B ($24M raised), backed by Sequoia Capital India and Tiger Global, 40,000+ connected locations"
    },
    "blogs": [
      {
        "title": "Processing 15 Million Delivery Orders a Month on Kafka and PostgreSQL",
        "url": "https://urbanpiper.com/blog/scaling-order-pipeline-kafka",
        "summary": "How UrbanPiper handles extreme order velocity on Friday evenings across India and the Middle East with zero ticket loss.",
        "tags": [
          "Kafka",
          "High Concurrency",
          "PostgreSQL",
          "Distributed Queues"
        ],
        "date": "2026-07-15"
      },
      {
        "title": "Real-Time 86ing Across 6 Delivery Portals in 200 Milliseconds",
        "url": "https://urbanpiper.com/blog/real-time-item-86ing",
        "summary": "Propagating out-of-stock menu modifier signals instantly to Swiggy, Zomato, Uber Eats, and Deliveroo.",
        "tags": [
          "Real-Time Inventory",
          "Webhooks",
          "POS Sync"
        ],
        "date": "2026-03-22"
      }
    ],
    "projects": [
      {
        "name": "UrbanPiper Hub Engine",
        "url": "https://developer.urbanpiper.com",
        "starsOrDownloads": "40,000+ connected restaurant outlets",
        "techStack": [
          "Python",
          "TypeScript",
          "Kafka",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Unified restaurant API hub consolidating online order tickets, catalog publishing, and inventory sync."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Event-driven Kafka streaming to handle sudden order surges during major sporting events",
        "Strict POS adapter isolation so one malfunctioning register never stalls the queue partition"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Docker"
      ],
      "engineeringCulture": [
        "High-volume systems resilience",
        "Global multi-region operational stability"
      ]
    }
  },
  "healthie": {
    "business": {
      "model": "API-first EHR, clinical scheduling, patient portal, and care operations infrastructure for digital health",
      "pricing": "Tiered monthly platform pricing ($149 – $1,500+/month based on active provider licenses) + Enterprise custom contracts",
      "targetCustomers": [
        "Virtual-first primary care clinics",
        "Behavioral health platforms",
        "Digital health startups and apps"
      ],
      "keyClients": [
        "Foodsmart",
        "Modern Health",
        "Equip",
        "Berry Street",
        "Parsley Health"
      ],
      "revenueOrFunding": "Series B ($35M raised), powering 1,000+ digital health organizations"
    },
    "blogs": [
      {
        "title": "Architecting an API-First EHR: Scaling GraphQL Across 20 Million Clinical Data Points",
        "url": "https://gethealthie.com/blog/api-first-ehr-graphql",
        "summary": "Designing deeply connected clinical schemas covering patient charts, intake forms, and care plans without N+1 query bottlenecks.",
        "tags": [
          "GraphQL",
          "EHR Architecture",
          "PostgreSQL",
          "HIPAA"
        ],
        "date": "2026-08-08"
      },
      {
        "title": "Meeting Strict HIPAA Audit Logging Requirements at 10,000 Requests per Second",
        "url": "https://gethealthie.com/blog/hipaa-audit-logging-scale",
        "summary": "Building high-throughput, tamper-evident audit trail buffers without degrading primary patient database performance.",
        "tags": [
          "HIPAA Compliance",
          "Audit Logging",
          "PostgreSQL",
          "Security"
        ],
        "date": "2026-04-12"
      }
    ],
    "projects": [
      {
        "name": "Healthie Developer API",
        "url": "https://docs.gethealthie.com",
        "starsOrDownloads": "Powers 1,000+ digital health platforms",
        "techStack": [
          "GraphQL",
          "TypeScript",
          "Ruby on Rails",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Comprehensive healthcare backend API covering HIPAA-compliant scheduling, charting, billing, and patient messaging."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "GraphQL schema depth limits and automated query cost analysis to protect database health",
        "Cryptographically verifiable HIPAA audit trails for every clinical data mutation",
        "Developer ergonomics with comprehensive sandbox environments"
      ],
      "stackPreferences": [
        "GraphQL",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Clinical safety and patient privacy first",
        "Accelerating digital health innovation"
      ]
    }
  },
  "elation_health": {
    "business": {
      "model": "Clinical-first ambulatory EHR platform and developer API for independent primary care physicians",
      "pricing": "Monthly provider licensing ($349 – $499/provider/month) + developer platform API usage fees",
      "targetCustomers": [
        "Independent primary care practices",
        "Direct primary care (DPC) clinics",
        "Enterprise virtual care groups"
      ],
      "keyClients": [
        "Crossover Health",
        "Cityblock Health",
        "Galileo Health",
        "Firefly Health"
      ],
      "revenueOrFunding": "Series C ($100M+ raised), connecting millions of longitudinal patient records"
    },
    "blogs": [
      {
        "title": "Longitudinal Patient Charts: Optimizing Sub-Second Search Over 10-Year Medical Histories",
        "url": "https://elationhealth.com/blog/longitudinal-chart-indexing",
        "summary": "How Elation structures PostgreSQL JSONB indexes and full-text search to retrieve past lab results and clinical encounters instantly.",
        "tags": [
          "PostgreSQL JSONB",
          "Patient Charts",
          "Full-Text Search",
          "EHR"
        ],
        "date": "2026-06-19"
      },
      {
        "title": "FHIR R4 in Primary Care: Bridging Legacy Surescripts and Labcorp EDI Feeds to Modern APIs",
        "url": "https://elationhealth.com/blog/fhir-r4-primary-care-integration",
        "summary": "Translating legacy HL7 2.x and EDI-270 feeds into clean US Core FHIR resources for downstream apps.",
        "tags": [
          "FHIR R4",
          "HL7",
          "SMART on FHIR",
          "Interoperability"
        ],
        "date": "2026-03-10"
      }
    ],
    "projects": [
      {
        "name": "Elation Health Developer Platform",
        "url": "https://docs.elationhealth.com",
        "starsOrDownloads": "Enterprise Primary Care EHR",
        "techStack": [
          "Python",
          "TypeScript",
          "PostgreSQL",
          "FHIR APIs",
          "AWS"
        ],
        "description": "Developer toolkit for building bidirectional EHR integrations, custom clinical plugins, and automated appointment workflows."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Zero physician cognitive load: software must never freeze or lag during an active patient visit",
        "Bi-directional FHIR interoperability and US Core standard compliance"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker"
      ],
      "engineeringCulture": [
        "Deep clinical craft empathy",
        "Zero downtime tolerance for active medical clinics"
      ]
    }
  },
  "scrapfly": {
    "business": {
      "model": "Enterprise cloud web scraping API with headless browser rendering, smart proxy rotation, and automated anti-bot bypass",
      "pricing": "Credit-based subscription ($45 – $999/month) + Enterprise custom concurrency clusters",
      "targetCustomers": [
        "AI agent developers",
        "Competitive intelligence squads",
        "eCommerce pricing analytics platforms"
      ],
      "keyClients": [
        "Enterprise hedge funds",
        "Retail market intelligence platforms",
        "SEO analytics software"
      ],
      "revenueOrFunding": "Bootstrapped / Highly Profitable ($6M+ ARR), lean engineering team"
    },
    "blogs": [
      {
        "title": "Defeating Modern Behavioral Anti-Scraping Defenses: Bypassing Turnstile and DataDome in 2026",
        "url": "https://scrapfly.io/blog/bypassing-turnstile-datadome-2026",
        "summary": "Jean-Sébastien Connan analyzes TLS JA4 fingerprints, WebGL noise generation, and human pointer event simulation.",
        "tags": [
          "Anti-Scraping",
          "Turnstile",
          "DataDome",
          "Browser Fingerprinting"
        ],
        "date": "2026-08-25"
      },
      {
        "title": "Eliminating /dev/shm Exhaustion: Tuning Headless Chromium Containers Under 10,000 Concurrent Requests",
        "url": "https://scrapfly.io/blog/headless-chrome-memory-leaks",
        "summary": "Managing zombie child processes, GPU allocation crashes, and temporary profile cleanup in Docker clusters.",
        "tags": [
          "Chromium",
          "Docker",
          "Memory Leaks",
          "CDP"
        ],
        "date": "2026-05-30"
      }
    ],
    "projects": [
      {
        "name": "scrapfly/scrapfly-sdk-python",
        "url": "https://github.com/scrapfly/scrapfly-sdk-python",
        "starsOrDownloads": "Official SDK / 500k+ downloads",
        "techStack": [
          "Python",
          "TypeScript",
          "Chromium CDP",
          "Docker",
          "Redis"
        ],
        "description": "The official Scrapfly SDK for Python and Node.js with automated proxy rotation and anti-bot bypass."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Boring, robust technology (Python/TypeScript + Docker/Redis) over over-engineered microservices",
        "Automated TLS and behavioral fingerprint spoofing baked into the proxy layer",
        "Strict memory bounds and rapid container recycling to prevent zombie processes"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "Docker",
        "Redis",
        "Chromium CDP"
      ],
      "engineeringCulture": [
        "Lean, autonomous execution",
        "High-margin developer infrastructure and pragmatic problem solving"
      ]
    }
  }
};
