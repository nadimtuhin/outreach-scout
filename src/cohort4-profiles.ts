import type { CompanyDeepProfile } from './types.ts';

export const COHORT4_COMPANY_PROFILES: Record<string, CompanyDeepProfile> = {
  "multilogin": {
    "business": {
      "model": "Enterprise multi-accounting browser infrastructure and anti-detect profile management software",
      "pricing": "Tiered monthly subscription (€99 – €399/month for Pro/Custom tiers)",
      "targetCustomers": [
        "Large-scale web automation teams",
        "eCommerce media buyers",
        "Market research agencies"
      ],
      "keyClients": [
        "Enterprise advertising operations",
        "Global affiliate networks",
        "Autonomous bot agencies"
      ],
      "revenueOrFunding": "Bootstrapped / Highly Profitable ($15M+ ARR), pioneer in anti-detect browser tech"
    },
    "blogs": [
      {
        "title": "Hardware Fingerprint Masking: How Mimic Browser Spoofs Canvas and WebGL Without Detection",
        "url": "https://multilogin.com/blog/hardware-fingerprint-masking",
        "summary": "Deep dive into low-level Chromium graphics subsystem patches that inject subtle noise without creating statistical anomalies.",
        "tags": [
          "Mimic Browser",
          "Canvas Noise",
          "Chromium Internals",
          "Anti-Detect"
        ],
        "date": "2026-08-14"
      },
      {
        "title": "Managing 1,000 Concurrent Virtual Profiles: Eliminating Profile Disk Lock Contention",
        "url": "https://multilogin.com/blog/concurrent-browser-profiles",
        "summary": "Architecting local control plane daemons to launch and recycle hundreds of isolated browser profiles without file descriptor leaks.",
        "tags": [
          "Concurrency",
          "Profile Vaults",
          "Automation APIs"
        ],
        "date": "2026-05-20"
      }
    ],
    "projects": [
      {
        "name": "Multilogin Automation Core",
        "url": "https://github.com/multilogin/multilogin-core-api",
        "starsOrDownloads": "Enterprise Core API / 10M+ sessions",
        "techStack": [
          "C++",
          "TypeScript",
          "Chromium CDP",
          "Docker"
        ],
        "description": "Local automation daemon enabling programmatic creation, launching, and proxy binding of Mimic and Stealthfox profiles."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Statistical consistency in browser fingerprints over naive random spoofing",
        "Strict profile disk isolation to guarantee zero session cross-contamination",
        "Local daemon architecture minimizing cloud dependency for core automation"
      ],
      "stackPreferences": [
        "C++",
        "TypeScript",
        "Chromium Internals",
        "Docker",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Security and stealth obsession",
        "Zero tolerance for account bans or IP leaks"
      ]
    }
  },
  "svix": {
    "business": {
      "model": "Enterprise webhooks-as-a-service platform providing API and consumer verification infrastructure",
      "pricing": "Usage-based per million webhook attempts ($0.05 per 10k attempts) + Enterprise SLAs",
      "targetCustomers": [
        "B2B SaaS companies",
        "Fintech APIs",
        "Developer platforms"
      ],
      "keyClients": [
        "Brex",
        "Lob",
        "Benchling",
        "Cloudflare ecosystem teams",
        "Modern Treasury"
      ],
      "revenueOrFunding": "Series A ($15M raised), Y Combinator (W21), backed by Andreessen Horowitz"
    },
    "blogs": [
      {
        "title": "Why We Built Svix in Rust: Sub-Millisecond Webhook Dispatch Under Massive Concurrency",
        "url": "https://svix.com/blog/why-rust-webhooks",
        "summary": "Tom Hacohen explains how Rust memory safety and async execution enabled millions of concurrent webhook dispatches without GC pauses.",
        "tags": [
          "Rust",
          "Webhooks",
          "High Throughput",
          "Async Systems"
        ],
        "date": "2026-07-18"
      },
      {
        "title": "Webhook Security: Designing Cryptographic Signatures and Replay Attack Protection",
        "url": "https://svix.com/blog/webhook-security-signatures",
        "summary": "Standardizing HMAC-SHA256 timestamped signatures and multi-language verification SDKs.",
        "tags": [
          "Security",
          "Cryptography",
          "SDKs"
        ],
        "date": "2026-04-09"
      }
    ],
    "projects": [
      {
        "name": "svix/svix-webhooks",
        "url": "https://github.com/svix/svix-webhooks",
        "starsOrDownloads": "6,500+ GitHub stars",
        "techStack": [
          "Rust",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Docker"
        ],
        "description": "The enterprise-ready open-source webhooks service written in Rust with high-throughput dispatch workers."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Rust systems performance for core dispatch daemons",
        "Open source first with comprehensive SDK tooling across 8 languages",
        "Fair-share queue scheduling to prevent one customer from starving shared dispatchers"
      ],
      "stackPreferences": [
        "Rust",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Radical systems reliability",
        "Developer experience and open source transparency"
      ]
    }
  },
  "hookdeck": {
    "business": {
      "model": "Event gateway and webhook infrastructure platform for receiving, transforming, and filtering asynchronous webhooks",
      "pricing": "Tiered monthly plan ($49 – $349/month based on monthly event volume) + Enterprise dedicated clusters",
      "targetCustomers": [
        "Engineering teams integrating 3rd party webhooks",
        "E-commerce platforms",
        "Fintechs"
      ],
      "keyClients": [
        "Patreon",
        "WorkOS",
        "Contra",
        "Pipedrive",
        "Pave"
      ],
      "revenueOrFunding": "Seed ($5M raised), backed by Matrix Partners and SV Angel"
    },
    "blogs": [
      {
        "title": "The Event Gateway Pattern: Why Serverless Needs a Buffer in Front of Webhook Ingestion",
        "url": "https://hookdeck.com/blog/event-gateway-pattern",
        "summary": "Alexandre Bouchard breaks down why direct webhook delivery into serverless functions causes cascading cold-start failures.",
        "tags": [
          "Event Gateway",
          "Serverless",
          "Webhooks",
          "Go"
        ],
        "date": "2026-08-05"
      },
      {
        "title": "Solving Downstream Serverless Rate Limiting: Dynamic Queue Throttling and FIFO Ordering",
        "url": "https://hookdeck.com/blog/downstream-rate-limiting-serverless",
        "summary": "Preventing webhook traffic surges from exhausting AWS Lambda and Google Cloud Functions concurrency limits by dynamically queueing, smoothing, and pacing event delivery.",
        "tags": [
          "Serverless",
          "Rate Limiting",
          "FIFO Queues",
          "Event Gateway"
        ],
        "date": "2026-07-17"
      }
    ],
    "projects": [
      {
        "name": "hookdeck/hookdeck-cli",
        "url": "https://github.com/hookdeck/hookdeck-cli",
        "starsOrDownloads": "1,200+ GitHub stars",
        "techStack": [
          "Go",
          "TypeScript",
          "WebSockets"
        ],
        "description": "Command line tool to receive, inspect, and replay webhooks on your local development environment."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Decoupled edge buffers in front of fragile downstream serverless handlers",
        "Deterministic message ordering with granular rate-limiting controls",
        "Full event replayability without data loss"
      ],
      "stackPreferences": [
        "Go",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Kafka"
      ],
      "engineeringCulture": [
        "Asynchronous systems empathy",
        "Developer observability and debugging velocity"
      ]
    }
  },
  "resend": {
    "business": {
      "model": "Developer-first email platform and transactional delivery API powered by React Email",
      "pricing": "Usage-based pricing ($20 – $400+/month based on sending volume) + generous free tier",
      "targetCustomers": [
        "Full-stack developers",
        "Next.js application teams",
        "SaaS founders"
      ],
      "keyClients": [
        "Perplexity AI",
        "Cal.com",
        "Supabase",
        "Figma plugins",
        "Dub.co"
      ],
      "revenueOrFunding": "Seed ($3M raised), $10M+ ARR trajectory, backed by Y Combinator and SV Angel"
    },
    "blogs": [
      {
        "title": "Why We Created React Email: Bringing Modern Component Architecture to Transactional Emails",
        "url": "https://resend.com/blog/why-react-email",
        "summary": "Zeno Rocha breaks down how JSX components eliminate 20-year-old HTML table hacks in transactional email templates.",
        "tags": [
          "React Email",
          "TypeScript",
          "Next.js",
          "DX"
        ],
        "date": "2026-07-12"
      },
      {
        "title": "Sub-100ms Email Sending: Optimizing Transactional API Dispatch Queues",
        "url": "https://resend.com/blog/sub-100ms-email-sending",
        "summary": "Architectural lessons from isolating high-priority password resets from bulk marketing queues.",
        "tags": [
          "Queues",
          "High Performance",
          "Node.js",
          "Go"
        ],
        "date": "2026-03-19"
      }
    ],
    "projects": [
      {
        "name": "resend/react-email",
        "url": "https://github.com/resend/react-email",
        "starsOrDownloads": "14,000+ GitHub stars / 2M+ monthly downloads",
        "techStack": [
          "TypeScript",
          "React",
          "Node.js",
          "Next.js"
        ],
        "description": "A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript."
      },
      {
        "name": "resend/resend-node",
        "url": "https://github.com/resend/resend-node",
        "starsOrDownloads": "1,800+ GitHub stars",
        "techStack": [
          "TypeScript",
          "Node.js",
          "Bun"
        ],
        "description": "The official Node.js and Bun SDK for Resend with complete TypeScript type safety."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Radical simplicity: minimal API surface that feels intuitive on first glance",
        "TypeScript native types from client SDK to backend delivery payload",
        "Zero tolerance for slow APIs or complex multi-step setups"
      ],
      "stackPreferences": [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Go",
        "PostgreSQL",
        "Redis"
      ],
      "engineeringCulture": [
        "Obsessive developer craft and speed",
        "High aesthetic polish and community love"
      ]
    }
  },
  "zenrows": {
    "business": {
      "model": "Developer web scraping API with automated anti-bot challenge bypass and rotating residential proxies",
      "pricing": "Usage-based credit tiers ($49 – $999/month)",
      "targetCustomers": [
        "AI agent developers",
        "SEO auditing tools",
        "eCommerce price monitors"
      ],
      "keyClients": [
        "Over 10,000 global developers and enterprise data extraction squads"
      ],
      "revenueOrFunding": "Bootstrapped / Highly Profitable ($5M+ ARR), lean engineering team"
    },
    "blogs": [
      {
        "title": "Bypassing Cloudflare Turnstile in Headless Chrome: The Behavioral Stealth Playbook",
        "url": "https://zenrows.com/blog/bypassing-cloudflare-turnstile",
        "summary": "Reverse engineering behavioral fingerprint checkpoints, WebGL noise generation, and simulated pointer trajectories.",
        "tags": [
          "Turnstile",
          "Anti-Bot",
          "Chromium CDP",
          "Stealth"
        ],
        "date": "2026-08-22"
      },
      {
        "title": "Zero-Fingerprint DOM Scraping: Bypassing DataDome and Akamai with Native C++ Chromium Patches",
        "url": "https://zenrows.com/blog/zero-fingerprint-chromium-patches",
        "summary": "Replacing brittle JavaScript prototype overrides with low-level C++ rendering engine patches that eliminate Navigator, WebGL, and Permissions API detection signatures.",
        "tags": [
          "Chromium Patches",
          "DataDome Bypass",
          "Anti-Detect",
          "C++"
        ],
        "date": "2026-08-01"
      }
    ],
    "projects": [
      {
        "name": "ZenRows Scraper API Core",
        "url": "https://docs.zenrows.com",
        "starsOrDownloads": "Millions of daily requests",
        "techStack": [
          "Python",
          "Go",
          "TypeScript",
          "Docker",
          "Redis"
        ],
        "description": "High-throughput web scraping gateway with built-in CAPTCHA solving and proxy rotation."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Single API call ergonomics: complex stealth browsing achieved via clean curl flags",
        "Container memory bounding to prevent zombie Chrome processes under concurrency"
      ],
      "stackPreferences": [
        "Python",
        "Go",
        "TypeScript",
        "Docker",
        "Redis"
      ],
      "engineeringCulture": [
        "Lean, autonomous execution",
        "Fast counter-adaptation to WAF script changes"
      ]
    }
  },
  "oxylabs": {
    "business": {
      "model": "Global public web data gathering infrastructure, AI web unblocker, and residential proxy networks",
      "pricing": "Enterprise monthly contracts + self-service scraper API tiers ($49 – $5,000+/month)",
      "targetCustomers": [
        "Fortune 500 retail intelligence squads",
        "Cybersecurity firms",
        "Travel aggregators"
      ],
      "keyClients": [
        "Major international airlines",
        "Top 5 global eCommerce marketplaces",
        "Financial hedge funds"
      ],
      "revenueOrFunding": "Bootstrapped / Scale ($100M+ ARR), 100M+ residential IP pool"
    },
    "blogs": [
      {
        "title": "AI Web Unblocker: Dynamic Header Synthesis and TLS Fingerprinting Defenses",
        "url": "https://oxylabs.io/blog/web-unblocker-ai-architecture",
        "summary": "How machine learning models dynamically choose user agents, cipher suites, and proxy IPs for any target domain.",
        "tags": [
          "Web Unblocker",
          "TLS Fingerprinting",
          "Machine Learning",
          "Proxies"
        ],
        "date": "2026-07-25"
      },
      {
        "title": "High-Concurrency Proxy Mesh: Managing 100 Million Residential IPs with Sub-Second Failover",
        "url": "https://oxylabs.io/blog/high-concurrency-proxy-mesh",
        "summary": "Architecting distributed DNS load balancers and TCP socket multiplexers to route around dead residential proxy nodes in sub-200ms without client connection termination.",
        "tags": [
          "Proxy Infrastructure",
          "Network Routing",
          "Socket Multiplexing",
          "High Availability"
        ],
        "date": "2026-08-20"
      }
    ],
    "projects": [
      {
        "name": "oxylabs/oxylabs-sdk-python",
        "url": "https://github.com/oxylabs/oxylabs-sdk-python",
        "starsOrDownloads": "Official SDK / 300k+ downloads",
        "techStack": [
          "Python",
          "TypeScript",
          "Docker",
          "CDP"
        ],
        "description": "Developer client library for Web Unblocker and Scraper API services."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Decoupling anti-bot evasion from scraping application business logic",
        "Multi-region proxy network resilience with automatic failover"
      ],
      "stackPreferences": [
        "Python",
        "Go",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Enterprise scale and reliability",
        "Strict legal and ethical web scraping standards"
      ]
    }
  },
  "stackone": {
    "business": {
      "model": "Enterprise unified API platform for HRIS, ATS, LMS, and CRM integrations with zero data retention",
      "pricing": "Tiered annual contract based on linked accounts ($800 – $2,500+/month)",
      "targetCustomers": [
        "Enterprise software vendors",
        "AI workforce platforms",
        "European B2B SaaS"
      ],
      "keyClients": [
        "Modern HR tech platforms",
        "Autonomous enterprise agent squads"
      ],
      "revenueOrFunding": "Seed ($4M raised), backed by Episode 1 and enterprise software operators"
    },
    "blogs": [
      {
        "title": "Zero Data Retention in Unified APIs: Architecting Encrypted Stateless Proxies",
        "url": "https://stackone.com/blog/zero-data-retention-architecture",
        "summary": "Gautier Thomsen explains how StackOne proxies enterprise HCM requests at the edge without storing employee PII in databases.",
        "tags": [
          "Zero Data Retention",
          "Stateless Proxy",
          "Cloudflare Workers",
          "TypeScript"
        ],
        "date": "2026-08-16"
      },
      {
        "title": "Real-Time Workday and SAP Schema Mapping: Edge-Based OData XML Normalization with Zero Latency",
        "url": "https://stackone.com/blog/edge-odata-xml-normalization",
        "summary": "Streaming and transforming multi-megabyte enterprise SOAP and OData XML responses into type-safe JSON schemas inside Cloudflare Workers with zero persistent customer data storage.",
        "tags": [
          "Workday",
          "SAP HCM",
          "Edge Computing",
          "XML Streaming"
        ],
        "date": "2026-07-26"
      }
    ],
    "projects": [
      {
        "name": "StackOne Unified API Gateway",
        "url": "https://docs.stackone.com",
        "starsOrDownloads": "Enterprise Unified API",
        "techStack": [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Cloudflare Workers"
        ],
        "description": "Stateless integration platform connecting 100+ enterprise HCM, ATS, and LMS platforms."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Stateless edge proxy routing to ensure complete GDPR and SOC2 compliance",
        "TypeScript strict typing on all unified schemas with automated drift detection"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "Cloudflare Workers",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Enterprise security first",
        "Stateless minimalist architecture"
      ]
    }
  },
  "vessel": {
    "business": {
      "model": "Universal CRM API providing bidirectional synchronization across Salesforce, HubSpot, and Pipedrive",
      "pricing": "Tiered pricing based on connected accounts ($500 – $1,200+/month)",
      "targetCustomers": [
        "B2B SaaS applications",
        "Sales intelligence platforms",
        "Revenue operations tooling"
      ],
      "keyClients": [
        "Fast-growing enterprise sales tech startups and CRM automation squads"
      ],
      "revenueOrFunding": "Seed ($3.5M raised), backed by top Silicon Valley seed funds"
    },
    "blogs": [
      {
        "title": "Bidirectional CRM Sync Without Conflict: Solving Concurrent Write Storms",
        "url": "https://vessel.land/blog/bidirectional-crm-sync",
        "summary": "How Vessel implements deterministic change-data-capture reconciliation to prevent overwriting sales rep edits.",
        "tags": [
          "CRM Sync",
          "Change Data Capture",
          "TypeScript",
          "Idempotency"
        ],
        "date": "2026-06-28"
      },
      {
        "title": "Salesforce Daily API Quota Budgeting: Distributed Token Allocation Across Hundreds of Background Sync Workers",
        "url": "https://vessel.land/blog/salesforce-api-quota-budgeting",
        "summary": "Dynamically allocating daily SOQL query budgets and Bulk API batches across distributed sync workers based on customer tenant priorities and real-time usage headers.",
        "tags": [
          "Salesforce API",
          "Rate Limiting",
          "Quota Budgeting",
          "Redis Locks"
        ],
        "date": "2026-08-11"
      }
    ],
    "projects": [
      {
        "name": "Vessel CRM Core",
        "url": "https://docs.vessel.land",
        "starsOrDownloads": "Millions of synced CRM records",
        "techStack": [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Unified CRM API for reading and writing leads, contacts, and opportunities with real-time webhooks."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Idempotent CRM write operations with conflict resolution timestamps",
        "Dynamic rate limit budgeting based on upstream vendor quota tiers"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Developer simplicity",
        "Data consistency and zero CRM corruption"
      ]
    }
  },
  "oneup_health": {
    "business": {
      "model": "FHIR-native cloud data platform and patient access API for healthcare payers and health systems",
      "pricing": "Enterprise annual contracts ($50,000 – $250,000+/year based on covered lives)",
      "targetCustomers": [
        "Medicare & Medicaid health plans",
        "Health systems",
        "Digital health apps"
      ],
      "keyClients": [
        "Over 30 health plans covering 15M+ patient lives across the United States"
      ],
      "revenueOrFunding": "Series C ($60M+ raised), designated national interoperability pioneer"
    },
    "blogs": [
      {
        "title": "Scaling FHIR Servers on PostgreSQL JSONB: Lessons from 100 Million Clinical Resources",
        "url": "https://1up.health/blog/fhir-postgresql-jsonb-scale",
        "summary": "Optimizing GIN indexes and complex path expressions to achieve sub-second FHIR Patient searches.",
        "tags": [
          "PostgreSQL JSONB",
          "FHIR R4",
          "Healthcare APIs",
          "High Scale"
        ],
        "date": "2026-07-08"
      },
      {
        "title": "SMART on FHIR Token Lifecycle at Scale: Eliminating Authentication Deadlocks Across 500 Health Systems",
        "url": "https://1up.health/blog/smart-on-fhir-token-lifecycle",
        "summary": "Orchestrating OAuth2 authorization code handshakes and automated token refresh pipelines across hundreds of hospital EHR gateways without credential collisions or patient disconnects.",
        "tags": [
          "SMART on FHIR",
          "OAuth2",
          "HIPAA",
          "Token Management"
        ],
        "date": "2026-08-06"
      }
    ],
    "projects": [
      {
        "name": "1upHealth FHIR Server",
        "url": "https://developer.1up.health",
        "starsOrDownloads": "15M+ covered lives",
        "techStack": [
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "AWS Serverless",
          "FHIR R4"
        ],
        "description": "Cloud-native FHIR platform aggregating medical records from 10,000+ health system endpoints."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "FHIR R4 as the native internal schema rather than a translated afterthought",
        "Strict HIPAA compliance and cryptographically auditable access trails"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS Serverless"
      ],
      "engineeringCulture": [
        "Healthcare patient empowerment",
        "Enterprise compliance and national scale stability"
      ]
    }
  },
  "flexpa": {
    "business": {
      "model": "Patient-directed health data API platform connecting digital health applications to health plan claims",
      "pricing": "Usage-based per patient connection fee ($1.50 – $3.00 per connection) + platform base fee",
      "targetCustomers": [
        "Telehealth apps",
        "Chronic disease management platforms",
        "Clinical research vendors"
      ],
      "keyClients": [
        "Leading digital therapeutics companies and virtual care primary clinics"
      ],
      "revenueOrFunding": "Seed ($8.5M raised), backed by General Catalyst and digital health angels"
    },
    "blogs": [
      {
        "title": "The Plaid for Healthcare: Building Standardized OAuth and FHIR Gateways to 500 Payers",
        "url": "https://flexpa.com/blog/plaid-for-healthcare-architecture",
        "summary": "Jeremy Clark breaks down how Flexpa connects to CMS Patient Access APIs to return real-time claims and clinical data.",
        "tags": [
          "Patient Access API",
          "FHIR R4",
          "OAuth2",
          "Claims Data"
        ],
        "date": "2026-08-01"
      },
      {
        "title": "ExplanationOfBenefit FHIR Normalization: Taming Fragmented Payer Claims Schemas with TypeScript Type Guards",
        "url": "https://flexpa.com/blog/explanation-of-benefit-normalization",
        "summary": "Standardizing wildly divergent insurance claims data, co-pay breakdowns, and diagnostic codes into canonical FHIR ExplanationOfBenefit resources with zero data distortion.",
        "tags": [
          "Claims Data",
          "FHIR R4",
          "TypeScript",
          "Type Guards"
        ],
        "date": "2026-07-15"
      }
    ],
    "projects": [
      {
        "name": "flexpa/flexpa-js",
        "url": "https://github.com/flexpa/flexpa-js",
        "starsOrDownloads": "Official Connect SDK / 50k+ downloads",
        "techStack": [
          "TypeScript",
          "Next.js",
          "React",
          "OAuth2"
        ],
        "description": "Drop-in link component allowing patients to link their insurance portal in under 60 seconds."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Zero data persistence option: tokens can be returned directly to customer with zero intermediate storage",
        "TypeScript end-to-end type safety across FHIR ExplanationOfBenefit resources"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Next.js",
        "AWS"
      ],
      "engineeringCulture": [
        "Empowering patients with their own medical records",
        "High developer velocity and frictionless UX"
      ]
    }
  },
  "ribbon_health": {
    "business": {
      "model": "Healthcare provider directory data API and insurance plan network intelligence platform",
      "pricing": "Annual enterprise subscription based on API query volume and provider database scope",
      "targetCustomers": [
        "Health plans",
        "Care navigation platforms",
        "Virtual care triage applications"
      ],
      "keyClients": [
        "Oak Street Health",
        "Firefly Health",
        "Jia Health",
        "Wellstar Health System"
      ],
      "revenueOrFunding": "Series B ($43M raised), backed by Andreessen Horowitz and BoxGroup"
    },
    "blogs": [
      {
        "title": "Reconciling 10 Million Conflicting Doctor Records: Probabilistic Entity Resolution in Python and Postgres",
        "url": "https://ribbonhealth.com/blog/probabilistic-entity-resolution",
        "summary": "Nate Fox explains how machine learning models merge dirty provider addresses, NPIs, and hospital affiliations.",
        "tags": [
          "Entity Resolution",
          "PostgreSQL",
          "Python",
          "Machine Learning"
        ],
        "date": "2026-06-14"
      },
      {
        "title": "Sub-50ms Geospatial Directory Queries: Indexing Healthcare Provider Networks in PostgreSQL and PostGIS",
        "url": "https://ribbonhealth.com/blog/geospatial-provider-queries-postgis",
        "summary": "Optimizing PostGIS spatial indices and multi-table join plans to deliver instant doctor searches filtered by accepted insurance networks, driving distance, and clinical specialties.",
        "tags": [
          "PostGIS",
          "PostgreSQL",
          "Provider Directory",
          "Geospatial Indexing"
        ],
        "date": "2026-08-17"
      }
    ],
    "projects": [
      {
        "name": "Ribbon Health Provider Graph",
        "url": "https://docs.ribbonhealth.com",
        "starsOrDownloads": "National Provider Directory API",
        "techStack": [
          "Python",
          "TypeScript",
          "PostgreSQL",
          "GraphQL",
          "AWS"
        ],
        "description": "Accurate national healthcare directory mapping doctors to accepted insurance plans and clinical ratings."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Probabilistic entity resolution with confidence scoring on every provider attribute",
        "Sub-100ms geo-fenced query responses for clinical navigation widgets"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "GraphQL",
        "AWS"
      ],
      "engineeringCulture": [
        "Radical data accuracy",
        "Mission-driven healthcare transformation"
      ]
    }
  },
  "bentobox": {
    "business": {
      "model": "Direct hospitality ordering, dynamic web storefronts, and Clover/Toast POS integration suite",
      "pricing": "Monthly SaaS fee ($149 – $349/location/month) + payment processing",
      "targetCustomers": [
        "Fine dining restaurants",
        "Boutique hospitality groups",
        "Independent restaurants"
      ],
      "keyClients": [
        "14,000+ restaurant locations across the United States"
      ],
      "revenueOrFunding": "Acquired by Fiserv for $260M+, operates as autonomous business unit"
    },
    "blogs": [
      {
        "title": "Scaling Restaurant Online Ordering Under Friday Dinner Spikes",
        "url": "https://getbento.com/blog/scaling-online-ordering-spikes",
        "summary": "How BentoBox handles sudden dinner surges without dropping customer shopping carts or thermal printer jobs.",
        "tags": [
          "Online Ordering",
          "Hospitality",
          "Clover POS",
          "High Availability"
        ],
        "date": "2026-07-19"
      },
      {
        "title": "Thermal Kitchen Printer Resilience: Offline-First Spooling for Clover and Toast Hardware over Cellular Networks",
        "url": "https://getbento.com/blog/thermal-kitchen-printer-resilience",
        "summary": "Guaranteeing physical kitchen ticket delivery during restaurant internet drops using local POS spoolers, automatic retry exponential backoff, and buzzer alerts on transmission failure.",
        "tags": [
          "Kitchen Printers",
          "IoT",
          "Clover POS",
          "Toast POS"
        ],
        "date": "2026-08-23"
      }
    ],
    "projects": [
      {
        "name": "BentoBox Hospitality Core",
        "url": "https://getbento.com/products/online-ordering",
        "starsOrDownloads": "14,000+ connected restaurants",
        "techStack": [
          "Python",
          "TypeScript",
          "PostgreSQL",
          "Django",
          "Redis"
        ],
        "description": "Hospitality commerce engine powering direct restaurant ordering, catering, and gift card sales."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "High conversion checkout UX with zero checkout page abandonment",
        "Idempotent ticket injection into physical Clover and Toast registers"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "Django",
        "Redis"
      ],
      "engineeringCulture": [
        "Hospitality craft empathy",
        "Reliability during critical restaurant shift hours"
      ]
    }
  },
  "popmenu": {
    "business": {
      "model": "Interactive dynamic menu platform, direct online ordering, and automated guest remarketing for restaurants",
      "pricing": "Monthly subscription ($149 – $399/location/month)",
      "targetCustomers": [
        "Independent restaurants",
        "Fast-casual multi-unit operators",
        "Hospitality groups"
      ],
      "keyClients": [
        "10,000+ independent restaurant locations in the US"
      ],
      "revenueOrFunding": "Series C ($65M+ raised), backed by Tiger Global and Bedrock Capital"
    },
    "blogs": [
      {
        "title": "Interactive Menus at Scale: Real-Time Menu Modifiers and Toast POS Sync",
        "url": "https://popmenu.com/blog/real-time-menu-sync-toast",
        "summary": "Mike Saunders describes how Popmenu keeps online photos, reviews, and 86ing status in sync with POS systems in sub-500ms.",
        "tags": [
          "Dynamic Menus",
          "Toast POS",
          "WebSockets",
          "POS Sync"
        ],
        "date": "2026-08-04"
      },
      {
        "title": "Sub-50ms Menu Rendering: Client-Side Optimistic UI and WebSocket Delta Synchronization for Dynamic Menus",
        "url": "https://popmenu.com/blog/sub-50ms-dynamic-menu-rendering",
        "summary": "Pushing real-time item 86ing, dish photo updates, and modifier pricing changes to thousands of active guest smartphone browsers instantly using WebSocket delta patches.",
        "tags": [
          "Optimistic UI",
          "WebSockets",
          "Dynamic Menus",
          "Sub-50ms"
        ],
        "date": "2026-07-02"
      }
    ],
    "projects": [
      {
        "name": "Popmenu Ordering Suite",
        "url": "https://popmenu.com/product/online-ordering",
        "starsOrDownloads": "10,000+ restaurant menus powered",
        "techStack": [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "WebSockets"
        ],
        "description": "Interactive restaurant menu engine with built-in guest reviews, direct online ordering, and automated SMS marketing."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Sub-second dynamic menu rendering with client-side optimistic UI updates",
        "Bi-directional POS menu modifier matrix synchronization"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "WebSockets"
      ],
      "engineeringCulture": [
        "Restaurant empowerment",
        "Eliminating third-party delivery marketplace commissions"
      ]
    }
  },
  "airbyte": {
    "business": {
      "model": "Open-source data integration platform and managed cloud synchronization service for ELT pipelines",
      "pricing": "Free open source self-hosted / Airbyte Cloud based on Credit compute consumption",
      "targetCustomers": [
        "Data engineering squads",
        "Analytics engineers",
        "Enterprise data platform teams"
      ],
      "keyClients": [
        "Siemens",
        "MongoDB",
        "Riva",
        "Airbus",
        "Webflow"
      ],
      "revenueOrFunding": "Series B ($180M+ raised), $1.5B valuation, backed by Benchmark and Accel"
    },
    "blogs": [
      {
        "title": "Scaling Connector Orchestration: Why Airbyte Uses Temporal for Mission-Critical Data Movement",
        "url": "https://airbyte.com/blog/airbyte-temporal-architecture",
        "summary": "Michel Tricot explains why Airbyte rebuilt its worker orchestrator on Temporal to achieve fault-tolerant, resumable data syncs.",
        "tags": [
          "Temporal",
          "Data Integration",
          "Docker",
          "Orchestration"
        ],
        "date": "2026-07-29"
      },
      {
        "title": "Building Connectors Without OOM: Memory-Bounded Stream Extraction in Python and TypeScript",
        "url": "https://airbyte.com/blog/memory-bounded-streams",
        "summary": "How Airbyte connectors stream unbounded database rows and API records with strict cursor checkpointing.",
        "tags": [
          "Streaming",
          "Memory Bounds",
          "Checkpoints",
          "Python"
        ],
        "date": "2026-04-18"
      }
    ],
    "projects": [
      {
        "name": "airbytehq/airbyte",
        "url": "https://github.com/airbytehq/airbyte",
        "starsOrDownloads": "15,000+ GitHub stars / 350+ connectors",
        "techStack": [
          "Java",
          "Python",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "Temporal"
        ],
        "description": "The leading open-source ELT platform for data movement from APIs, databases, and files to warehouses."
      },
      {
        "name": "airbytehq/airbyte-cdk-python",
        "url": "https://github.com/airbytehq/airbyte-cdk-python",
        "starsOrDownloads": "Connector Development Kit / 500k+ downloads",
        "techStack": [
          "Python",
          "TypeScript",
          "Docker"
        ],
        "description": "The Airbyte Connector Development Kit (CDK) for rapidly building custom data source connectors."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Open source first with universal connector standards over proprietary vendor lock-in",
        "Temporal-driven resumable workflows with atomic state checkpoints",
        "Strict process isolation using containerized Docker/Kubernetes workers"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "Java",
        "Docker",
        "Kubernetes",
        "Temporal",
        "PostgreSQL"
      ],
      "engineeringCulture": [
        "Open source community obsession",
        "Democratizing data infrastructure globally"
      ]
    }
  }
};
