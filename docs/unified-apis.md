# Vertical 5: Unified APIs & Multi-Tenant SaaS Integration Platforms

Target count: 8
Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.

## Merge.dev (https://merge.dev)

- Location: San Francisco, CA / Remote
- Team size: 120-180
- Stage: Series B ($75M)
- Platforms: Unified API, HRIS / ATS / CRM / Accounting, OAuth2 Sync
- Tech stack: Python, Django, TypeScript, PostgreSQL, Celery
- Careers page: https://merge.dev/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] 14 years designing multi-tenant third-party integration pipelines and schema mapping engines
- [YES] Expert in upstream rate-limit management, token refresh flows, and distributed queues
- [YES] Python and TypeScript engineering background
**What Needs to Match / Bridge:**
- [BRIDGE] Scale of 200+ integrated APIs: candidate excels at reverse-engineering edge cases and writing bulletproof adapter tests

### Leadership & Core Biases
- **Shensi Ding** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/shensiding/)
  - Background: Pioneered universal API category for B2B SaaS integrations, normalizing hundreds of disparate data platforms
  - What they care about: Unified schema elegance; Continuous sync reliability; Enterprise customer trust
- **Gil Feig** (Co-founder & CTO) - [LinkedIn](https://www.linkedin.com/in/gilfeig/)
  - Background: Architected continuous multi-tenant polling and webhook synchronization engine for 200+ third-party APIs
  - What they care about: Resilient rate-limiting; Zero schema drift; High developer velocity

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Continuous background workers poll and listen for webhooks across hundreds of platforms (Workday, Salesforce, BambooHR), mapping data into unified models.
- Real failure modes:
  - Upstream third-party API rate limit starvation affecting multiple downstream customers simultaneously
  - Silent schema drift in legacy enterprise APIs causing null value propagation into unified records
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built multi-tenant integration gateways with rate-limit budget tracking, automated token refresh circuits, and strict schema validation

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: unified API schema drift, third-party rate limit budgeting, and continuous sync reliability
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (113 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Shensi, saw your work on Merge.dev's unified API schema drift, third-party rate limit budgeting, and continuous sync reliability.

Built multi-tenant integration gateways with rate-limit budget tracking, automated token refresh circuits, and strict schema validation. Handled Upstream third-party API rate limit starvation affecting multiple downstream customers simultaneously and silent schema drift in legacy enterprise APIs causing null value propagation into unified records in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Finch (https://tryfinch.com)

- Location: San Francisco, CA / US Remote
- Team size: 80-120
- Stage: Series B ($40M raised)
- Platforms: Gusto, ADP, Workday, Paychex, BambooHR, Rippling
- Tech stack: Node.js, TypeScript, Go, PostgreSQL, Redis, AWS
- Careers page: https://tryfinch.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Direct experience building high-reliability third-party sync and webhook normalization engines
- [YES] TypeScript, Node.js, and PostgreSQL distributed systems architecture
- [YES] Deep expertise in upstream rate limit budgeting and token refresh lifecycle management
**What Needs to Match / Bridge:**
- [BRIDGE] Complex US payroll deduction tax nuances: bridge with automated regression test harnesses and schema mapping specs

### Leadership & Core Biases
- **Ansel Parikh** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/anselparikh/)
  - Background: Pioneered API access to fragmented employment, payroll, and benefits systems
  - What they care about: Mission-critical data accuracy; Developer-first unified schemas; Enterprise compliance
- **Jeremy Zhang** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/jeremy-zhang/)
  - Background: Architected universal payroll integration engine normalizing 200+ provider APIs
  - What they care about: Zero data discrepancy tolerance; Idempotent payroll syncs; Strict upstream rate limit budgeting

### Key Employees / Engineering Leads
- **Rohan Sharma** (Head of Engineering) - [LinkedIn](https://www.linkedin.com/in/rohansharma/)
  - Notes: Leads backend integrations and employment data pipeline squads

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Normalizes employee demographics, payroll runs, and benefits data from 200+ HRIS/payroll providers into a single programmatic API.
- Real failure modes:
  - Upstream payroll provider rate limit exhaustion during full historical sync cycles
  - OAuth token refresh race conditions across multi-tenant employer connections
  - Silent schema drift in deduction and gross pay fields causing payroll run errors
- Candidate proof repository: https://github.com/nadimtuhin/rate-limit-token-bucket
- Experience bridge: Built high-throughput OAuth token refresh managers and upstream rate-limit token bucket dispatchers handling millions of monthly syncs with zero token desync

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: upstream payroll rate-limit handling, token lifecycle desync, and schema drift detection
- Part-time trial pitch: Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure

### Ready-to-Send Cold Email (112 words)

```text
https://github.com/nadimtuhin/rate-limit-token-bucket
https://calendly.com/nadimtuhin/30min

Hi Ansel, saw your work on Finch's upstream payroll rate-limit handling, token lifecycle desync, and schema drift detection.

Built high-throughput OAuth token refresh managers and upstream rate-limit token bucket dispatchers handling millions of monthly syncs with zero token desync. Handled Upstream payroll provider rate limit exhaustion during full historical sync cycles and OAuth token refresh race conditions across multi-tenant employer connections in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Kombo (https://kombo.dev)

- Location: Berlin, Germany / Remote
- Team size: 25-45
- Stage: Series A ($15M raised)
- Platforms: Personio, BambooHR, Workday, Greenhouse, Lever, Workable
- Tech stack: TypeScript, Node.js, Bun, PostgreSQL, Docker
- Careers page: https://kombo.dev/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Complete TypeScript and Bun backend alignment
- [YES] Proven history designing multi-tenant integration worker pools and resilient sync queues
- [YES] YAGNI minimalist engineering philosophy matching lean European startup ethos
**What Needs to Match / Bridge:**
- [BRIDGE] European GDPR compliance specifics: bridge with candidate strict data anonymization and encryption practices

### Leadership & Core Biases
- **Julian Paul** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/julian-paul/)
  - Background: Building the standard integration layer for HR, payroll, and recruitment software in Europe
  - What they care about: Radical simplicity; Fast developer onboarding; Resilient integrations
- **Niklas Higi** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/niklas-higi/)
  - Background: Full stack systems architect designing self-healing unified sync pipelines
  - What they care about: TypeScript everywhere; Fast feedback loops; Zero third-party vendor lock-in

### Key Employees / Engineering Leads
- **Lukas Fischer** (Lead Integration Engineer) - [LinkedIn](https://www.linkedin.com/in/lukas-fischer-dev/)
  - Notes: Builds core ATS and HRIS connector adapters

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides a unified API and embedded auth widget connecting B2B SaaS apps to 50+ European HR and recruitment tools.
- Real failure modes:
  - Applicant tracking attachment payload timeouts on large PDF/resume batch syncs
  - Personio and Workday API session token invalidation mid-sync
  - Webhook delivery backpressure when customer endpoints return 500 errors
- Candidate proof repository: https://github.com/nadimtuhin/unified-api-connector-harness
- Experience bridge: Architected resilient ATS and webhook ingest pipelines with exponential backoff and dead-letter queues

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: high-scale ATS webhook deduplication, token renewal backpressure, and Bun worker runtimes
- Part-time trial pitch: Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure

### Ready-to-Send Cold Email (102 words)

```text
https://github.com/nadimtuhin/unified-api-connector-harness
https://calendly.com/nadimtuhin/30min

Hi Julian, saw your work on Kombo's high-scale ATS webhook deduplication, token renewal backpressure, and Bun worker runtimes.

Architected resilient ATS and webhook ingest pipelines with exponential backoff and dead-letter queues. Handled Applicant tracking attachment payload timeouts on large PDF/resume batch syncs and personio and Workday API session token invalidation mid-sync in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Rutter (https://rutter.com)

- Location: San Francisco, CA / US Remote
- Team size: 40-60
- Stage: Series A ($27M raised)
- Platforms: Shopify, QuickBooks, WooCommerce, NetSuite, Amazon, Stripe
- Tech stack: Go, TypeScript, PostgreSQL, Kafka, Redis
- Careers page: https://rutter.com/careers

### Match Diagnosis (93% Match)
**Strong Matches:**
- [YES] Extensive experience with Shopify and WooCommerce APIs, rate limits, and webhook architectures
- [YES] Go and TypeScript distributed systems experience with high transaction volume
- [YES] Financial and accounting data consistency guarantees
**What Needs to Match / Bridge:**
- [BRIDGE] NetSuite ERP SOAP protocol quirks: bridge with candidate proven schema adapter isolation techniques

### Leadership & Core Biases
- **Peter Zhou** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/peter-zhou/)
  - Background: Pioneered universal commerce APIs connecting fintech and SaaS platforms to merchant accounting stores
  - What they care about: Speed of execution; Developer ergonomics; High reliability across enterprise accounting
- **Eric Hu** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/erichu/)
  - Background: Distributed systems engineer building real-time financial data pipelines and connectors
  - What they care about: Strict transactional guarantees; Go systems performance; Decoupled event brokers

### Key Employees / Engineering Leads
- **Kevin Zhao** (Senior Staff Engineer) - [LinkedIn](https://www.linkedin.com/in/kevin-zhao-eng/)
  - Notes: Leads commerce ledger synchronization and schema abstraction layers

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests orders, inventory, and ledger transactions across 40+ eCommerce and accounting platforms, normalizing them into universal JSON schemas.
- Real failure modes:
  - Shopify GraphQL cost-based rate limit throttling during flash sales
  - QuickBooks journal entry transaction failure during bi-directional ledger writes
  - Duplicate invoice creation when network drops occur before receipt acknowledgment
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built transactional order and ledger pipelines handling high-volume eCommerce sales without double-billing or ledger desync

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: commerce GraphQL rate-limit budgeting, accounting ledger write idempotency, and schema drift
- Part-time trial pitch: Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Peter, saw your work on Rutter's commerce GraphQL rate-limit budgeting, accounting ledger write idempotency, and schema drift.

Built transactional order and ledger pipelines handling high-volume eCommerce sales without double-billing or ledger desync. Handled Shopify GraphQL cost-based rate limit throttling during flash sales and quickBooks journal entry transaction failure during bi-directional ledger writes in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Apideck (https://apideck.com)

- Location: San Francisco, CA / Belgium / Remote
- Team size: 30-50
- Stage: Series A ($12M raised)
- Platforms: Salesforce, HubSpot, QuickBooks, Workday, Toast, Square
- Tech stack: TypeScript, Node.js, Cloudflare Workers, PostgreSQL, Serverless
- Careers page: https://apideck.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate Cloudflare Workers and Durable Objects edge computing background
- [YES] Deep TypeScript ESM and real-time proxy normalization expertise
- [YES] Cross-vertical knowledge spanning POS, CRM, and accounting APIs
**What Needs to Match / Bridge:**
- [BRIDGE] Global edge routing nuances: bridge with candidate Cloudflare Workers AI and proxy pipeline experience

### Leadership & Core Biases
- **Gertjan De Wilde** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/gertjandewilde/)
  - Background: Pioneered API ecosystem platforms and real-time unified APIs for B2B software vendors
  - What they care about: Real-time proxy architecture; Zero data persistence overhead; Developer marketplace DX
- **Logan Volkers** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/loganvolkers/)
  - Background: Cloudflare Workers and edge proxy architect optimizing sub-100ms API routing
  - What they care about: Edge compute first; TypeScript strict schemas; Stateless request proxies

### Key Employees / Engineering Leads
- **Dieter Coppens** (Head of Product & Ecosystem) - [LinkedIn](https://www.linkedin.com/in/dieter-coppens/)
  - Notes: Manages connector roadmap and partner developer tooling

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Real-time stateless API proxy that translates single unified API calls into live downstream vendor requests at the edge.
- Real failure modes:
  - Edge proxy timeout when downstream legacy vendor takes >15s to respond
  - Header signature verification discrepancies during real-time webhook routing
  - Schema variance when downstream CRM custom fields fail type validation
- Candidate proof repository: https://github.com/nadimtuhin/cloudflare-durable-queue
- Experience bridge: Built Cloudflare Workers edge microservices and stateless proxy normalization layers handling high-concurrency traffic with minimal latency

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: stateless edge proxy timeouts, downstream schema variance, and Cloudflare Worker performance
- Part-time trial pitch: Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure

### Ready-to-Send Cold Email (106 words)

```text
https://github.com/nadimtuhin/cloudflare-durable-queue
https://calendly.com/nadimtuhin/30min

Hi Gertjan, saw your work on Apideck's stateless edge proxy timeouts, downstream schema variance, and Cloudflare Worker performance.

Built Cloudflare Workers edge microservices and stateless proxy normalization layers handling high-concurrency traffic with minimal latency. Handled Edge proxy timeout when downstream legacy vendor takes >15s to respond and header signature verification discrepancies during real-time webhook routing in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Paragon (https://useparagon.com)

- Location: Los Angeles, CA / Remote
- Team size: 50-80
- Stage: Series A ($16M raised)
- Platforms: Salesforce, HubSpot, Slack, Jira, Google Workspace
- Tech stack: TypeScript, Node.js, Kubernetes, Redis, PostgreSQL
- Careers page: https://useparagon.com/careers

### Match Diagnosis (94% Match)
**Strong Matches:**
- [YES] TypeScript and Node.js microservices with heavy multi-tenant database designs
- [YES] Embedded authentication and managed OAuth credential refresh management
- [YES] Enterprise webhook delivery and backpressure buffering
**What Needs to Match / Bridge:**
- [BRIDGE] Visual workflow canvas execution engine: bridge with candidate experience building state-machine workflow runners

### Leadership & Core Biases
- **Brandon Foo** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/brandonfoo/)
  - Background: Serial founder building embedded integration platforms for modern B2B SaaS squads
  - What they care about: Speed of enterprise onboarding; Embedded native UX; Developer velocity
- **Ishmael Samuel** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/ishmaelsamuel/)
  - Background: Distributed systems architect building multi-tenant integration workflows and event buses
  - What they care about: Multi-tenant isolation; TypeScript core architecture; Reliable event delivery

### Key Employees / Engineering Leads
- **Alexandre Tran** (Senior Engineering Manager) - [LinkedIn](https://www.linkedin.com/in/alexandre-tran-eng/)
  - Notes: Oversees connector infrastructure and workflow execution engines

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides an embedded integration SDK and visual workflow builder for B2B SaaS companies to offer native integrations inside their apps.
- Real failure modes:
  - Multi-tenant OAuth token refresh race conditions when hundreds of users trigger sync simultaneously
  - Webhook ingestion spikes during customer Salesforce data migrations causing queue starvation
  - Custom mapping transformation script timeouts inside untrusted tenant sandboxes
- Candidate proof repository: https://github.com/nadimtuhin/rate-limit-token-bucket
- Experience bridge: Built resilient OAuth credential vaults and distributed job queues preventing multi-tenant resource starvation during traffic bursts

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: multi-tenant OAuth race conditions, webhook ingestion spikes, and sandboxed transformation execution
- Part-time trial pitch: Take on a 2-week trial building an additional provider integration harness or fixing queue backpressure

### Ready-to-Send Cold Email (111 words)

```text
https://github.com/nadimtuhin/rate-limit-token-bucket
https://calendly.com/nadimtuhin/30min

Hi Brandon, saw your work on Paragon's multi-tenant OAuth race conditions, webhook ingestion spikes, and sandboxed transformation execution.

Built resilient OAuth credential vaults and distributed job queues preventing multi-tenant resource starvation during traffic bursts. Handled Multi-tenant OAuth token refresh race conditions when hundreds of users trigger sync simultaneously and webhook ingestion spikes during customer Salesforce data migrations causing queue starvation in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## StackOne (https://stackone.com)

- Location: London, UK / Remote
- Team size: 25-45
- Stage: Seed ($4M raised)
- Platforms: Workday, SAP SuccessFactors, Cornerstone, Greenhouse, Salesforce
- Tech stack: TypeScript, Node.js, PostgreSQL, Cloudflare Workers, Docker
- Careers page: https://stackone.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Complete alignment with candidate Cloudflare Workers, TypeScript ESM, and stateless proxy experience
- [YES] Direct experience designing third-party integration harnesses and schema mapping engines
- [YES] Zero-bullshit, minimal-code architecture philosophy matching candidate YAGNI principles
**What Needs to Match / Bridge:**
- [BRIDGE] SAP SuccessFactors OData protocol nuances: bridge with candidate demonstrated enterprise API translation skills

### Leadership & Core Biases
- **Romain Sestier** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/romainsestier/)
  - Background: Pioneered enterprise unified APIs for HRIS, ATS, LMS, and CRM integrations with zero data retention
  - What they care about: Zero data storage architecture; Enterprise security compliance; Real-time proxy routing
- **Gautier Thomsen** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/gautierthomsen/)
  - Background: Architected real-time transformation proxy engines normalizing enterprise ERP and HCM APIs
  - What they care about: TypeScript strict typing; Stateless request proxies; Deterministic schema transformation

### Key Employees / Engineering Leads
- **Nicolas C** (Lead Connector Engineer) - [LinkedIn](https://www.linkedin.com/in/nicolas-stackone/)
  - Notes: Builds enterprise connector harnesses for SAP, Workday, and Oracle HCM

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Acts as an encrypted, stateless real-time proxy that translates unified API calls into enterprise HCM and ATS requests without storing customer data.
- Real failure modes:
  - Enterprise HCM (Workday/SAP) SOAP/XML API response latency causing gateway timeouts
  - OAuth credential refresh failure during multi-threaded batch sync operations
  - Schema variance when enterprise customers employ custom user fields in their HCM system
- Candidate proof repository: https://github.com/nadimtuhin/unified-api-connector-harness
- Experience bridge: Built stateless API proxies and enterprise schema normalizers handling live bidirectional data flows without data leakage or persistence bottlenecks

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: stateless enterprise proxy timeouts, custom field schema drift, and multi-tenant OAuth locking
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (110 words)

```text
https://github.com/nadimtuhin/unified-api-connector-harness
https://calendly.com/nadimtuhin/30min

Hi Romain, saw your work on StackOne's stateless enterprise proxy timeouts, custom field schema drift, and multi-tenant OAuth locking.

Built stateless API proxies and enterprise schema normalizers handling live bidirectional data flows without data leakage or persistence bottlenecks. Handled Enterprise HCM (Workday/SAP) SOAP/XML API response latency causing gateway timeouts and OAuth credential refresh failure during multi-threaded batch sync operations in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Vessel (https://vessel.land)

- Location: San Francisco, CA / Remote
- Team size: 10-20
- Stage: Seed ($3.5M raised)
- Platforms: Salesforce, HubSpot, Pipedrive, Close, Zoho CRM
- Tech stack: TypeScript, Node.js, PostgreSQL, Redis, Docker
- Careers page: https://vessel.land/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Deep TypeScript, Node.js, and PostgreSQL backend systems expertise
- [YES] Proven history building bidirectional integration sync workers with conflict resolution
- [YES] Extensive knowledge of third-party API rate limits and webhook idempotency
**What Needs to Match / Bridge:**
- [BRIDGE] Salesforce SOQL query optimization: bridge with candidate demonstrated SQL and indexing performance tuning

### Leadership & Core Biases
- **Zach Zeleznick** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/zachzeleznick/)
  - Background: Pioneered universal CRM APIs enabling B2B SaaS applications to read and write CRM data seamlessly
  - What they care about: Developer-first simplicity; Continuous bidirectional sync; Zero CRM sync lag
- **Liron Yahdav** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/lironyahdav/)
  - Background: Distributed systems engineer building real-time data sync engines and change-data-capture brokers
  - What they care about: Strict idempotency on CRM writes; Dynamic rate limit scheduling; TypeScript native models

### Key Employees / Engineering Leads
- **Tyler B** (Senior Integration Engineer) - [LinkedIn](https://www.linkedin.com/in/tyler-vessel-dev/)
  - Notes: Works on the Salesforce Bulk API and HubSpot webhook listener pipelines

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Continuous background synchronization engine that polls and listens to CRM webhooks, normalizing leads, contacts, and deals into a unified JSON model.
- Real failure modes:
  - Salesforce daily API limit exhaustion during initial full tenant historical syncs
  - CRM write race conditions causing duplicate deal or contact record creation
  - Webhook loss during downstream CRM scheduled maintenance windows
- Candidate proof repository: https://github.com/nadimtuhin/rate-limit-token-bucket
- Experience bridge: Built rate-limited sync workers and conflict-free bidirectional data synchronization pipelines for enterprise multi-tenant applications

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: Salesforce API limit budgeting, bidirectional CRM write race conditions, and webhook loss prevention
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (109 words)

```text
https://github.com/nadimtuhin/rate-limit-token-bucket
https://calendly.com/nadimtuhin/30min

Hi Zach, saw your work on Vessel's Salesforce API limit budgeting, bidirectional CRM write race conditions, and webhook loss prevention.

Built rate-limited sync workers and conflict-free bidirectional data synchronization pipelines for enterprise multi-tenant applications. Handled Salesforce daily API limit exhaustion during initial full tenant historical syncs and CRM write race conditions causing duplicate deal or contact record creation in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

