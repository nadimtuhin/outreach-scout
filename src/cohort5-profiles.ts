import type { CompanyDeepProfile } from './types.ts';

export const COHORT5_COMPANY_PROFILES: Record<string, CompanyDeepProfile> = {
  "knock": {
    "business": {
      "model": "Developer-first notification engine & workflow queue providing cross-channel dispatch and batching",
      "pricing": "Usage-based per notification attempt ($0.0005 per message) + Enterprise tiers",
      "targetCustomers": [
        "B2B SaaS product teams",
        "Fintechs",
        "Developer tool platforms"
      ],
      "keyClients": [
        "Vercel",
        "Amplitude",
        "Webflow",
        "Buffer",
        "LaunchDarkly"
      ],
      "revenueOrFunding": "Series A ($12M raised), backed by Afore Capital and Craft Ventures"
    },
    "blogs": [
      {
        "title": "Designing Resilient Notification Queues: Batching, Throttling, and Cancellation at Scale",
        "url": "https://knock.app/blog/notification-queues-batching",
        "summary": "Chris Bell explains how Knock uses Elixir actor mailboxes and Redis to implement sliding digest windows and instant cancellation.",
        "tags": [
          "Elixir",
          "Queues",
          "Batching",
          "Redis"
        ],
        "date": "2026-08-11"
      },
      {
        "title": "Building Real-Time In-App Feeds: WebSocket Connection Multiplexing",
        "url": "https://knock.app/blog/realtime-in-app-feeds",
        "summary": "Architecting high-density WebSocket hubs for user notification bells with sub-50ms message latency.",
        "tags": [
          "WebSockets",
          "In-App Feeds",
          "TypeScript"
        ],
        "date": "2026-05-17"
      }
    ],
    "projects": [
      {
        "name": "knocklabs/knock-node",
        "url": "https://github.com/knocklabs/knock-node",
        "starsOrDownloads": "Official Node SDK / 100k+ downloads",
        "techStack": [
          "TypeScript",
          "Node.js",
          "Bun"
        ],
        "description": "TypeScript-first client for triggering notification workflows, managing users, and subscribing to feeds."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Actor-based isolation for user workflow instances to guarantee deterministic execution",
        "Strict rate limiting on downstream messaging gateways to avoid 429 cascades"
      ],
      "stackPreferences": [
        "Elixir",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Developer empathy and clean APIs",
        "Zero notification deliverability regressions"
      ]
    }
  },
  "novu": {
    "business": {
      "model": "Open-source notification infrastructure and enterprise cloud notification management platform",
      "pricing": "Free open source self-hosted / Cloud tiers ($30 – $250+/month) + Enterprise",
      "targetCustomers": [
        "Open source developers",
        "Enterprise engineering squads",
        "SaaS platform builders"
      ],
      "keyClients": [
        "Over 30,000 global engineering teams using open-core or cloud"
      ],
      "revenueOrFunding": "Series A ($6.6M raised), backed by Crane Venture Partners and Bessemer"
    },
    "blogs": [
      {
        "title": "Scaling BullMQ on Redis: How Novu Handles Millions of Daily Notification Steps",
        "url": "https://novu.co/blog/scaling-bullmq-redis",
        "summary": "Dima Grossman breaks down job partitioning, concurrency limits, and memory leak prevention in Redis BullMQ clusters.",
        "tags": [
          "BullMQ",
          "Redis",
          "TypeScript",
          "Job Queues"
        ],
        "date": "2026-08-03"
      },
      {
        "title": "Why We Built Novu with NestJS and TypeScript: Modular Architecture for 50+ Providers",
        "url": "https://novu.co/blog/why-nestjs-typescript",
        "summary": "How dependency injection and TypeScript decorators allowed the community to contribute dozens of provider bridges seamlessly.",
        "tags": [
          "NestJS",
          "TypeScript",
          "Open Source",
          "Architecture"
        ],
        "date": "2026-04-12"
      }
    ],
    "projects": [
      {
        "name": "novuhq/novu",
        "url": "https://github.com/novuhq/novu",
        "starsOrDownloads": "35,000+ GitHub stars",
        "techStack": [
          "TypeScript",
          "Node.js",
          "NestJS",
          "Redis",
          "BullMQ",
          "MongoDB"
        ],
        "description": "The open-source notification infrastructure for developers with multi-channel support."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Open source first with comprehensive community contribution standards",
        "TypeScript end-to-end across backend services, queue workers, and web notification center widgets"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "NestJS",
        "Redis",
        "BullMQ",
        "MongoDB"
      ],
      "engineeringCulture": [
        "Radical community openness",
        "Rapid iteration and developer experience"
      ]
    }
  },
  "courier": {
    "business": {
      "model": "Multi-channel notification routing, transactional messaging API, and template design platform",
      "pricing": "Usage-based per message send ($0.003 – $0.005 per message) + Enterprise volume contracts",
      "targetCustomers": [
        "High-growth SaaS startups",
        "Fintech platforms",
        "Enterprise product teams"
      ],
      "keyClients": [
        "LaunchDarkly",
        "Blueground",
        "Expensify",
        "Lattice",
        "Figma"
      ],
      "revenueOrFunding": "Series B ($35M raised), backed by Google Ventures and Matrix Partners"
    },
    "blogs": [
      {
        "title": "Idempotency and Deduping in Multi-Channel Routing: Preventing Double Notifications",
        "url": "https://courier.com/blog/idempotency-notification-routing",
        "summary": "Troy Goode details the distributed locking and token bucket algorithms Courier uses across AWS SQS and Redis.",
        "tags": [
          "Idempotency",
          "AWS SQS",
          "Rate Limiting",
          "Routing"
        ],
        "date": "2026-07-14"
      },
      {
        "title": "Multi-Provider Failover in Milliseconds: Intelligent Notification Routing with Circuit Breakers",
        "url": "https://courier.com/blog/multi-provider-failover-circuit-breakers",
        "summary": "Automatically shifting high-volume SMS and email notification traffic away from degraded third-party providers in sub-100ms using adaptive error rate thresholds and zero message drop buffers.",
        "tags": [
          "Circuit Breakers",
          "Provider Failover",
          "High Availability",
          "Routing Engine"
        ],
        "date": "2026-08-12"
      }
    ],
    "projects": [
      {
        "name": "trycourier/courier-node",
        "url": "https://github.com/trycourier/courier-node",
        "starsOrDownloads": "Official SDK / 150k+ downloads",
        "techStack": [
          "TypeScript",
          "Node.js",
          "AWS SQS"
        ],
        "description": "TypeScript client for routing messages across email, SMS, push, and messaging channels."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Idempotent delivery keys on all dispatch actions to prevent multi-channel duplicate notifications",
        "Decoupled provider integrations with isolated circuit breakers"
      ],
      "stackPreferences": [
        "TypeScript",
        "Python",
        "AWS SQS",
        "DynamoDB",
        "Redis"
      ],
      "engineeringCulture": [
        "Enterprise delivery compliance",
        "Zero tolerance for dropped or double messages"
      ]
    }
  },
  "bright_data": {
    "business": {
      "model": "Global public web data platform, Scraping Browser, Web Unlocker, and residential proxy network",
      "pricing": "Pay-as-you-go / Monthly subscription ($500 – $50,000+/month for enterprise data feeds)",
      "targetCustomers": [
        "Fortune 500 enterprises",
        "AI foundation model research labs",
        "eCommerce analytics squads"
      ],
      "keyClients": [
        "Major search engines",
        "Global hedge funds",
        "Top 10 eCommerce retailers"
      ],
      "revenueOrFunding": "Acquired / Private Equity ($100M+ ARR), market leader in web data collection"
    },
    "blogs": [
      {
        "title": "Scraping Browser: Multiplexing Chromium CDP Sessions Over WebSockets at Scale",
        "url": "https://brightdata.com/blog/scraping-browser-architecture",
        "summary": "How Bright Data manages thousands of remote headless browser instances with automated CAPTCHA solving and stealth hooks.",
        "tags": [
          "Scraping Browser",
          "Chromium CDP",
          "WebSockets",
          "Stealth"
        ],
        "date": "2026-08-19"
      },
      {
        "title": "Overcoming Cloudflare Turnstile in Headless Browsers: Behavioral Pointer Acceleration and Dynamic Viewport Rendering",
        "url": "https://brightdata.com/blog/overcoming-cloudflare-turnstile-headless",
        "summary": "Synthesizing human-like Bezier curve mouse trajectories, realistic scroll jitter, and canvas noise injection directly inside Chromium CDP to pass Turnstile behavioral verification challenges.",
        "tags": [
          "Turnstile Bypass",
          "Chromium CDP",
          "Bezier Curves",
          "Anti-Detect"
        ],
        "date": "2026-08-28"
      }
    ],
    "projects": [
      {
        "name": "brightdata/scraping-browser-sdk",
        "url": "https://github.com/brightdata/scraping-browser-sdk",
        "starsOrDownloads": "Scraping Browser SDK / 200k+ downloads",
        "techStack": [
          "Node.js",
          "Playwright",
          "Puppeteer",
          "CDP"
        ],
        "description": "Connector library for launching Playwright and Puppeteer sessions on Bright Data Scraping Browser."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Low-level Chromium patch management over brittle user-space DOM script injection",
        "Autonomous CAPTCHA solving and header generation at the network layer"
      ],
      "stackPreferences": [
        "Node.js",
        "C++",
        "Chromium Internals",
        "Python",
        "Kubernetes",
        "Docker"
      ],
      "engineeringCulture": [
        "Enterprise scale and compliance",
        "Technical excellence in network protocols and reverse-engineering"
      ]
    }
  },
  "smartproxy": {
    "business": {
      "model": "Self-service web scraping APIs, rotating residential proxy network, and eCommerce data extraction",
      "pricing": "Self-service credit plans ($30 – $999/month)",
      "targetCustomers": [
        "Data scientists",
        "Small-to-medium scraping squads",
        "Price monitoring apps"
      ],
      "keyClients": [
        "Over 50,000 global developers and growth marketing agencies"
      ],
      "revenueOrFunding": "Bootstrapped / Highly Profitable ($30M+ ARR), European infrastructure leader"
    },
    "blogs": [
      {
        "title": "Zero Zombie Browsers: Enforcing Strict Process and Memory Bounds in Containerized Scraping",
        "url": "https://smartproxy.com/blog/zero-zombie-browsers",
        "summary": "Nerijus Paulauskas shares lessons on handling /dev/shm memory leaks and zombie Chromium processes under heavy concurrency.",
        "tags": [
          "Docker",
          "Chromium",
          "Memory Bounds",
          "Proxy Failover"
        ],
        "date": "2026-06-25"
      },
      {
        "title": "Resilient eCommerce Scraping: Automating Dynamic XPath Healing Under Aggressive Frontend Redesigns",
        "url": "https://smartproxy.com/blog/dynamic-xpath-healing-ecommerce",
        "summary": "Using DOM AST structural heuristics and text proximity trees to extract product prices and stock levels even when online retailers obfuscate HTML class names and layout tags.",
        "tags": [
          "DOM Extraction",
          "Self-Healing Scrapers",
          "eCommerce",
          "HTML Parsing"
        ],
        "date": "2026-07-21"
      }
    ],
    "projects": [
      {
        "name": "smartproxy/scraper-api-client",
        "url": "https://github.com/smartproxy/scraper-api-client",
        "starsOrDownloads": "Developer Client SDK",
        "techStack": [
          "Python",
          "Node.js",
          "TypeScript"
        ],
        "description": "Client for requesting structured eCommerce and SERP data through Smartproxy scraping gateways."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Single endpoint simplicity: complex scraping solved behind clean HTTP parameters",
        "Strict container isolation and automated process cgroup bounds"
      ],
      "stackPreferences": [
        "Python",
        "Go",
        "Node.js",
        "Docker",
        "Kubernetes",
        "Redis"
      ],
      "engineeringCulture": [
        "Pragmatic engineering execution",
        "High uptime and developer self-service"
      ]
    }
  },
  "kameleo": {
    "business": {
      "model": "Anti-detect browser platform and mobile fingerprint spoofing engine for multi-account automation",
      "pricing": "Monthly tier (€59 – €199/month based on automation and mobile profile features)",
      "targetCustomers": [
        "Automation engineers",
        "Social media marketing teams",
        "Affiliate advertisers"
      ],
      "keyClients": [
        "Global automation squads running thousands of isolated browser identities"
      ],
      "revenueOrFunding": "Bootstrapped / Profitable Growth, European anti-detect pioneer"
    },
    "blogs": [
      {
        "title": "Mobile Browser Fingerprinting: How Kameleo Emulates Android and iOS Touch Environments",
        "url": "https://kameleo.io/blog/mobile-browser-fingerprinting",
        "summary": "Daniel Kovacs details the touch event APIs, device motion sensors, and WebGL extensions necessary to spoof mobile devices accurately.",
        "tags": [
          "Mobile Fingerprint",
          "Chroma Browser",
          "CDP",
          "Touch Emulation"
        ],
        "date": "2026-08-07"
      },
      {
        "title": "Hardware Concurrency in Browser Profiles: Eliminating Profile Disk Locking and Port Collisions on Windows and Linux",
        "url": "https://kameleo.io/blog/browser-profile-disk-locking-concurrency",
        "summary": "Architecting local daemon process supervisors to launch and recycle hundreds of isolated browser profiles without file descriptor exhaustion, socket port collisions, or profile corruption.",
        "tags": [
          "Concurrency",
          "Profile Isolation",
          "Local Daemon",
          "Process Management"
        ],
        "date": "2026-08-15"
      }
    ],
    "projects": [
      {
        "name": "kameleo-io/kameleo-nodejs-sdk",
        "url": "https://github.com/kameleo-io/kameleo-nodejs-sdk",
        "starsOrDownloads": "Official Automation SDK",
        "techStack": [
          "TypeScript",
          "Node.js",
          "Playwright",
          "Puppeteer"
        ],
        "description": "Node.js library to control Kameleo Local API and automate profiles with Playwright or Puppeteer."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Accurate real-world hardware profiles instead of synthetic random noise that triggers anomaly detectors",
        "Local-first architecture keeping profile cookies and credentials on user hardware"
      ],
      "stackPreferences": [
        "C#",
        "C++",
        "Chromium Internals",
        "TypeScript",
        "Node.js"
      ],
      "engineeringCulture": [
        "Stealth and fingerprint authenticity obsession",
        "Zero account ban tolerance"
      ]
    }
  },
  "knit": {
    "business": {
      "model": "Unified API and embedded integration platform connecting B2B SaaS applications to 100+ business tools",
      "pricing": "Tiered pricing based on linked accounts ($600 – $2,000+/month) + Enterprise custom tiers",
      "targetCustomers": [
        "Enterprise B2B SaaS software companies",
        "AI agent developers",
        "HR tech platforms"
      ],
      "keyClients": [
        "Fast-growing HRIS and CRM software vendors across US and Europe"
      ],
      "revenueOrFunding": "Seed ($5M raised), backed by prominent software venture funds"
    },
    "blogs": [
      {
        "title": "Building 100+ Connectors Without Breaking: The Declarative Connector Schema Pattern",
        "url": "https://getknit.dev/blog/declarative-connector-schema",
        "summary": "Sandeep Chhaparia explains how declarative JSON schema definitions insulate unified models from third-party vendor API drift.",
        "tags": [
          "Unified API",
          "Declarative Schemas",
          "TypeScript",
          "Rate Limits"
        ],
        "date": "2026-07-22"
      },
      {
        "title": "Dynamic Webhook Dispatching: Normalizing Asynchronous Events Across 100 SaaS Vendor Schemas",
        "url": "https://getknit.dev/blog/dynamic-webhook-dispatching-saas",
        "summary": "Transforming disparate push webhook events from HubSpot, Salesforce, and BambooHR into canonical developer payloads with sub-second latency and guaranteed at-least-once delivery.",
        "tags": [
          "Webhooks",
          "Unified API",
          "Event Normalization",
          "Kafka"
        ],
        "date": "2026-08-04"
      }
    ],
    "projects": [
      {
        "name": "Knit Unified Connector Gateway",
        "url": "https://docs.getknit.dev",
        "starsOrDownloads": "100+ Unified SaaS Connectors",
        "techStack": [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker"
        ],
        "description": "Embedded integration gateway normalizing HRIS, ATS, CRM, and Accounting endpoints."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Declarative connector mappings to minimize imperative glue code",
        "Tenant-isolated sync workers to prevent noisy neighbor queue starvation"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Speed of connector delivery",
        "Deterministic data synchronization"
      ]
    }
  },
  "rootfi": {
    "business": {
      "model": "Unified accounting, CRM, and commerce API connecting lenders and B2B SaaS platforms to SMB books",
      "pricing": "Usage-based per linked business ($15 – $45/connection/month) + platform base fee",
      "targetCustomers": [
        "B2B fintechs",
        "Digital SMB lenders",
        "Corporate expense management platforms"
      ],
      "keyClients": [
        "Leading neo-banks and credit underwriting startups across Asia and Europe"
      ],
      "revenueOrFunding": "Seed ($2.5M raised), backed by global fintech venture capital"
    },
    "blogs": [
      {
        "title": "Accounting Ledger Reconciliation: Deterministic Double-Entry Modeling in Unified APIs",
        "url": "https://rootfi.dev/blog/accounting-ledger-reconciliation",
        "summary": "Rishabh Goel breaks down how RootFi reconciles divergent journal entry structures between Tally, QuickBooks, and Xero.",
        "tags": [
          "Accounting API",
          "Double Entry",
          "Tally",
          "QuickBooks"
        ],
        "date": "2026-06-18"
      },
      {
        "title": "Desktop ERP Synchronization: Building Fault-Tolerant Local Sync Agents for On-Premise Tally and SAP Business One",
        "url": "https://rootfi.dev/blog/desktop-erp-sync-tally-sap",
        "summary": "Overcoming firewalls, dynamic IP re-assignments, and database locks in on-premise accounting software using lightweight local sync agents with persistent SQLite offline buffers.",
        "tags": [
          "On-Premise ERP",
          "Tally Sync",
          "Local Agents",
          "SQLite Buffers"
        ],
        "date": "2026-07-14"
      }
    ],
    "projects": [
      {
        "name": "RootFi Financial Core",
        "url": "https://docs.rootfi.dev",
        "starsOrDownloads": "Unified Accounting Engine",
        "techStack": [
          "TypeScript",
          "Node.js",
          "Python",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Single API to read and write accounting data, invoices, and bank transactions across ERPs."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Strict accounting integrity: debit/credit balanced transactions guaranteed before write commit",
        "Resilient desktop sync agents for legacy on-premise accounting software (Tally)"
      ],
      "stackPreferences": [
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Redis"
      ],
      "engineeringCulture": [
        "Financial accuracy and compliance",
        "Solving legacy software synchronization barriers"
      ]
    }
  },
  "chift": {
    "business": {
      "model": "European unified API platform connecting B2B SaaS applications to POS systems, accounting, and eCommerce",
      "pricing": "Monthly fee per connected integration (€300 – €1,500/month)",
      "targetCustomers": [
        "European B2B SaaS vendors",
        "Hospitality software platforms",
        "Retail analytics apps"
      ],
      "keyClients": [
        "Modern European restaurant and retail management platforms"
      ],
      "revenueOrFunding": "Seed (€3M raised), backed by Entourage and European tech founders"
    },
    "blogs": [
      {
        "title": "POS to Accounting Automation: Bridging Register Receipts and European General Ledgers",
        "url": "https://chift.eu/blog/pos-to-accounting-automation",
        "summary": "Matthieu de Fabribeckers explains how Chift handles VAT tax breakdown synchronization between POS hardware and accounting software.",
        "tags": [
          "POS Integration",
          "Accounting API",
          "European VAT",
          "FastAPI"
        ],
        "date": "2026-07-31"
      },
      {
        "title": "Real-Time POS Stock Reconciliation: Preventing Menu Overselling During Multi-Channel Delivery Surges",
        "url": "https://chift.eu/blog/real-time-pos-stock-reconciliation",
        "summary": "Synchronizing item inventory levels across in-store cash registers, Deliveroo, and Uber Eats in under 300ms, automatically marking items 86ed to prevent customer cancellation penalties.",
        "tags": [
          "Inventory Sync",
          "POS Integration",
          "86ing",
          "Multi-Channel"
        ],
        "date": "2026-08-22"
      }
    ],
    "projects": [
      {
        "name": "Chift Unified Integration Hub",
        "url": "https://docs.chift.eu",
        "starsOrDownloads": "European Unified API Hub",
        "techStack": [
          "Python",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "Docker"
        ],
        "description": "Unified API connecting Lightspeed, Deliverect, Exact, and 50+ European business applications."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Clean Python FastAPI architecture with strict Pydantic schema validation",
        "European tax and fiscal compliance baked into POS ticket schemas"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "FastAPI",
        "Docker"
      ],
      "engineeringCulture": [
        "European SaaS interoperability",
        "Zero data distortion between cash registers and ledgers"
      ]
    }
  },
  "slice": {
    "business": {
      "model": "All-in-one digital ordering, POS hardware, and marketing technology platform for 19,000+ independent pizzerias",
      "pricing": "Flat per-order processing fee ($1.95/order) + Slice Register monthly hardware subscription",
      "targetCustomers": [
        "Independent pizzeria owners",
        "Local pizza chains",
        "Regional Italian restaurants"
      ],
      "keyClients": [
        "19,000+ independent pizza shops across the United States"
      ],
      "revenueOrFunding": "Series D ($125M+ raised), $1B+ GMV processed annually"
    },
    "blogs": [
      {
        "title": "The Pizza Modifier Matrix: Engineering Real-Time Customization for Millions of Combinations",
        "url": "https://slicelife.com/blog/pizza-modifier-matrix-engineering",
        "summary": "How Slice validates complex toppings, fractional halves, and crust crust substitutions without crashing POS hardware registers.",
        "tags": [
          "Pizza Modifiers",
          "Slice Register",
          "POS Sync",
          "High Concurrency"
        ],
        "date": "2026-08-16"
      },
      {
        "title": "Zero Dropped Tickets: Resilience in Kitchen Thermal Printing Over Cellular Networks",
        "url": "https://slicelife.com/blog/kitchen-printer-resilience",
        "summary": "Architecting local store IoT hubs to queue and print tickets reliably during internet drops.",
        "tags": [
          "Thermal Printers",
          "IoT",
          "Kitchen Display",
          "Reliability"
        ],
        "date": "2026-05-09"
      }
    ],
    "projects": [
      {
        "name": "Slice Independent Ordering Platform",
        "url": "https://slicelife.com/products/slice-register",
        "starsOrDownloads": "19,000+ pizzerias / $1B+ GMV",
        "techStack": [
          "Python",
          "Node.js",
          "PostgreSQL",
          "React",
          "AWS"
        ],
        "description": "Complete digital ordering suite and POS hardware designed specifically for local pizzerias."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Zero order drops during peak Friday night rushes",
        "Fail-safe offline printing fallback for kitchen tickets when cloud connection is lost"
      ],
      "stackPreferences": [
        "Python",
        "Node.js",
        "PostgreSQL",
        "React",
        "AWS"
      ],
      "engineeringCulture": [
        "Small business advocacy",
        "Reliability during critical restaurant service windows"
      ]
    }
  },
  "app8": {
    "business": {
      "model": "Mobile contactless ordering and POS integration platform for stadiums, arenas, and entertainment hospitality",
      "pricing": "Transaction fee on mobile concession orders + software license per venue terminal",
      "targetCustomers": [
        "Major league sports stadiums",
        "Live entertainment arenas",
        "Resort hospitality"
      ],
      "keyClients": [
        "Enterprise arenas, major concert amphitheaters, and entertainment destinations"
      ],
      "revenueOrFunding": "Seed / High Growth, profitable stadium technology operator"
    },
    "blogs": [
      {
        "title": "Handling the Halftime Surge: 10,000 Orders in 15 Minutes at Stadium POS Registers",
        "url": "https://app8.ca/blog/stadium-halftime-surge",
        "summary": "Vince Valenti details the localized queue buffering and priority token buckets used to inject mobile orders into venue POS networks.",
        "tags": [
          "Stadium Scale",
          "Toast POS",
          "High Concurrency",
          "Order Injection"
        ],
        "date": "2026-07-28"
      },
      {
        "title": "Stadium POS Gateway Pacing: Queue-Buffered Token Buckets for Venue Concession Registers",
        "url": "https://app8.ca/blog/stadium-pos-gateway-pacing",
        "summary": "Preventing venue POS register networks from freezing during halftime surges by dynamically buffering mobile transactions in edge queues and throttling injection to register acceptance capacity.",
        "tags": [
          "Stadium Scale",
          "Token Bucket",
          "POS Injection",
          "High Concurrency"
        ],
        "date": "2026-08-10"
      }
    ],
    "projects": [
      {
        "name": "App8 Contactless Concessions Core",
        "url": "https://app8.ca/solutions",
        "starsOrDownloads": "Millions of live event fans served",
        "techStack": [
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "AWS"
        ],
        "description": "Mobile contactless web ordering system with instant injection into stadium POS registers."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "App-free web ordering: frictionless QR scan to payment in under 30 seconds",
        "Buffered injection queues preventing physical register POS gateway saturation"
      ],
      "stackPreferences": [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "AWS"
      ],
      "engineeringCulture": [
        "Live event adrenaline and zero failure tolerance",
        "High-throughput concurrency mastery"
      ]
    }
  },
  "tryotter": {
    "business": {
      "model": "Delivery consolidation, POS integration, and automated restaurant order routing platform",
      "pricing": "Monthly SaaS subscription ($99 – $249/location/month)",
      "targetCustomers": [
        "Ghost kitchens",
        "Multi-unit restaurant brands",
        "Fast-casual operators"
      ],
      "keyClients": [
        "Thousands of restaurants running multiple delivery brands simultaneously"
      ],
      "revenueOrFunding": "Backed by CloudKitchens, scaled globally across US, UK, and Latin America"
    },
    "blogs": [
      {
        "title": "Consolidating 5 Delivery Platforms into Toast POS: Automated Order Normalization at Scale",
        "url": "https://tryotter.com/blog/consolidating-delivery-platforms",
        "summary": "James Wang breaks down how Otter normalizes disparate order payloads from DoorDash, Uber Eats, and Grubhub into uniform POS tickets.",
        "tags": [
          "Delivery Aggregation",
          "Toast POS",
          "Go Services",
          "Webhooks"
        ],
        "date": "2026-08-09"
      },
      {
        "title": "Preventing Order Cancellations: Sub-Second Automated Order Acceptance and Kitchen Ticket Routing",
        "url": "https://tryotter.com/blog/preventing-order-cancellations-pos",
        "summary": "Eliminating tablet operational bottlenecks with automated POS injection, instant acoustic kitchen alerts, and sub-500ms webhook roundtrips back to DoorDash and Uber Eats.",
        "tags": [
          "Order Injection",
          "Kitchen Routing",
          "Delivery Consolidation",
          "Webhooks"
        ],
        "date": "2026-08-26"
      }
    ],
    "projects": [
      {
        "name": "Otter Restaurant Core",
        "url": "https://tryotter.com/product/pos-integration",
        "starsOrDownloads": "Thousands of restaurant locations",
        "techStack": [
          "Go",
          "Python",
          "React",
          "PostgreSQL",
          "Redis"
        ],
        "description": "Tablet and cloud application managing incoming digital orders and syncing menus across delivery channels."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "High-throughput Go microservices for real-time delivery webhook processing",
        "Zero manual order re-entry: 100% automated POS injection accuracy"
      ],
      "stackPreferences": [
        "Go",
        "Python",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      "engineeringCulture": [
        "Restaurant operational efficiency",
        "Eliminating tablet clutter and kitchen chaos"
      ]
    }
  },
  "health_samurai": {
    "business": {
      "model": "FHIR-native backend (Aidbox) and developer infrastructure for healthcare software companies",
      "pricing": "Monthly license based on patient database size and multi-tenant instances ($400 – $2,500+/month)",
      "targetCustomers": [
        "Digital health startups",
        "EHR vendors",
        "Clinical AI application teams"
      ],
      "keyClients": [
        "Over 100 digital health innovators and clinical software squads globally"
      ],
      "revenueOrFunding": "Bootstrapped / Highly Profitable, international pioneer in FHIR engineering"
    },
    "blogs": [
      {
        "title": "Aidbox: Why We Built a FHIR Database Directly on PostgreSQL JSONB",
        "url": "https://health-samurai.io/blog/aidbox-postgresql-jsonb-fhir",
        "summary": "Nikolai Ryzhikov explains how Aidbox leverages PostgreSQL GIN indexing and JSONB path expressions to achieve blazing fast FHIR search.",
        "tags": [
          "Aidbox",
          "PostgreSQL JSONB",
          "FHIR R4",
          "Clojure"
        ],
        "date": "2026-07-24"
      },
      {
        "title": "HL7 v2 to FHIR R4 Streaming: Bidirectional Clinical Feed Translation with Zero Data Truncation",
        "url": "https://health-samurai.io/blog/hl7v2-fhir-streaming-translation",
        "summary": "Transforming legacy hospital ADT admission feeds and ORU lab messages into structured FHIR Encounter and Observation bundles with strict type preservation and zero clinical data truncation.",
        "tags": [
          "HL7 v2",
          "FHIR R4",
          "Aidbox",
          "Clinical Feeds"
        ],
        "date": "2026-08-08"
      }
    ],
    "projects": [
      {
        "name": "HealthSamurai/aidbox-sdk-js",
        "url": "https://github.com/HealthSamurai/aidbox-sdk-js",
        "starsOrDownloads": "Official JavaScript/TypeScript SDK",
        "techStack": [
          "TypeScript",
          "JavaScript",
          "FHIR R4"
        ],
        "description": "Client library for interacting with Aidbox FHIR platform and managing clinical resources."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "Data-first functional engineering: treating FHIR resources as pure immutable data structures",
        "PostgreSQL JSONB native storage avoiding lossy relational schema conversions"
      ],
      "stackPreferences": [
        "Clojure",
        "PostgreSQL",
        "FHIR R4",
        "TypeScript",
        "Docker"
      ],
      "engineeringCulture": [
        "Deep dedication to open health data standards",
        "High technical craft and data modeling purity"
      ]
    }
  },
  "welkin_health": {
    "business": {
      "model": "Configurable care management platform and patient relationship management software for digital health",
      "pricing": "Annual enterprise SaaS contracts based on clinician seats and active patient panels",
      "targetCustomers": [
        "Virtual care providers",
        "Chronic condition clinics",
        "Value-based care organizations"
      ],
      "keyClients": [
        "Leading telehealth operators and remote patient monitoring health systems"
      ],
      "revenueOrFunding": "Series B ($30M raised), backed by Foresite Capital and Rock Health"
    },
    "blogs": [
      {
        "title": "Configurable Care Pathways: Modeling Patient Care Journeys as State Machines",
        "url": "https://welkinhealth.com/blog/configurable-care-pathways-state-machines",
        "summary": "Chase Adams explains how Welkin models complex chronic care patient interventions using deterministic state transition graphs.",
        "tags": [
          "State Machines",
          "Care Management",
          "HIPAA",
          "Python"
        ],
        "date": "2026-06-30"
      },
      {
        "title": "HIPAA-Compliant Event Sourcing: Auditable Clinical State Machines with PostgreSQL Append-Only Logs",
        "url": "https://welkinhealth.com/blog/hipaa-event-sourcing-state-machines",
        "summary": "Maintaining cryptographically auditable event trails for every patient care pathway transition, clinician assignment, and SMS reminder using PostgreSQL append-only event logs.",
        "tags": [
          "Event Sourcing",
          "HIPAA Compliance",
          "State Machines",
          "Audit Logging"
        ],
        "date": "2026-07-18"
      }
    ],
    "projects": [
      {
        "name": "Welkin Care Engine",
        "url": "https://welkinhealth.com/product",
        "starsOrDownloads": "Enterprise Care Platform",
        "techStack": [
          "Python",
          "TypeScript",
          "PostgreSQL",
          "AWS"
        ],
        "description": "Patient relationship management platform automating care coordination, clinical outreach, and EHR syncing."
      }
    ],
    "tastes": {
      "architecturalBiases": [
        "State machine driven clinical task queues to guarantee deterministic patient intervention flows",
        "Strict audit logging and HIPAA encryption at rest and in transit across all services"
      ],
      "stackPreferences": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker"
      ],
      "engineeringCulture": [
        "Patient outcome obsession",
        "Building software that empowers clinicians rather than fatiguing them"
      ]
    }
  }
};
