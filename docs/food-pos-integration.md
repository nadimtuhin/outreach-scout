# Vertical 1: Food POS & Ordering SaaS (Square / Toast / Clover)

Target count: 15
Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.

## Craver (https://craverapp.com)

- Location: Vancouver, BC / Remote
- Team size: 15-30
- Stage: Seed / Profitable Growth
- Platforms: Square, Toast, Clover, TouchBistro
- Tech stack: Node.js, TypeScript, React Native, PostgreSQL, Redis
- Careers page: https://craverapp.com/careers

### Match Diagnosis (94% Match)
**Strong Matches:**
- [YES] Direct architectural parallel to Per Diem: POS catalog sync + mobile ordering queue
- [YES] Built high-throughput webhook idempotency engine at Pathao handling out-of-order events
- [YES] TypeScript/Node/PostgreSQL stack matches candidate 14-year core
**What Needs to Match / Bridge:**
- [BRIDGE] TouchBistro API specifics are proprietary: bridge by offering 2-day sandbox integration test
- [BRIDGE] Pacific Time base: bridge with candidate proven 4-hour US morning timezone overlap

### Leadership & Core Biases
- **Amin Yazdani** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/aminyazdani/)
  - Background: Software engineer turned founder; focused on independent restaurant margins and tech adoption
  - What they care about: Self-serve customer onboarding; Zero downtime menu sync; Fast restaurant onboarding
- **Gavin Zhang** (Co-founder & Engineering Lead) - [LinkedIn](https://www.linkedin.com/in/gavinzhang/)
  - Background: Distributed systems and mobile architecture for POS integrations
  - What they care about: Reliable POS polling; Webhook fault tolerance; Minimal mobile battery usage

### Key Employees / Engineering Leads
- **Saeed Golbabaei** (Senior Software Engineer) - [LinkedIn](https://www.linkedin.com/in/saeed-golbabaei/)
  - Notes: Leads backend integrations and POS catalog pipelines
- **Hamed Esmaili** (Mobile Team Lead) - [LinkedIn](https://www.linkedin.com/in/hamed-esmaili/)
  - Notes: White-label React Native consumer apps

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Imports restaurant catalog from Square/Toast POS, syncs modifiers to branded mobile app, injects mobile orders directly into the kitchen POS ticket printer.
- Real failure modes:
  - Modifier and nested option schema drift during midday menu updates
  - Out-of-order POS order status webhooks during rush hours
- Candidate proof repository: https://github.com/nadimtuhin/findable
- Experience bridge: At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency POS webhooks and catalog sync

### How They Hire
- Sourcing channel: Direct founder outreach / GitHub OSS proof
- Funnel: Sourcing chat (20 min) -> POS integration take-home -> Architecture review
- Pain point hook: Square and Toast menu catalog sync and nested modifier handling
- Part-time trial pitch: Take on a 2-week trial building an additional POS catalog sync adapter or fixing webhook retry drift

### Ready-to-Send Cold Email (107 words)

```text
https://github.com/nadimtuhin/findable
https://calendly.com/nadimtuhin/30min

Hi Amin, saw your work on Craver's Square and Toast menu catalog sync and nested modifier handling.

At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency POS webhooks and catalog sync. Handled Modifier and nested option schema drift during midday menu updates and out-of-order POS order status webhooks during rush hours in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Hazlnut (https://hazlnut.com)

- Location: Jacksonville, FL / Remote
- Team size: 10-25
- Stage: Venture Backed
- Platforms: Clover, Square, Toast
- Tech stack: Node.js, TypeScript, PostgreSQL, AWS, RabbitMQ
- Careers page: https://hazlnut.com/careers

### Match Diagnosis (92% Match)
**Strong Matches:**
- [YES] Heavy Square and Clover webhook reliance matching candidate background
- [YES] Payment callback reconciliation with transactional outbox and zero double-charges
- [YES] Postgres and Redis queue tuning under spiky lunch/dinner order bursts
**What Needs to Match / Bridge:**
- [BRIDGE] Clover Semi-Integrated POS hardware protocol: bridge by highlighting backend cloud API focus
- [BRIDGE] Contractor bench model: offer part-time 15-20h trial to start without FTE commitment

### Leadership & Core Biases
- **Steven Gonzalez** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/stevengonzalez/)
  - Background: Product and enterprise merchant operations
  - What they care about: Clean merchant onboarding; Fast transaction speed; Automated loyalty redemption
- **Brad Hawkins** (Co-founder & Product/Tech) - [LinkedIn](https://www.linkedin.com/in/bradhawkins/)
  - Background: POS systems integration, hardware printers, and payment flows
  - What they care about: POS API rate-limit resilience; Clean payment callback state machines; Zero duplicate orders

### Key Employees / Engineering Leads
- **David Miller** (Lead Systems Architect) - [LinkedIn](https://www.linkedin.com/in/david-miller-pos/)
  - Notes: Oversees Clover App Market API sync and merchant payment webhooks

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Connects Clover and Square merchant registers to white-label apps and web checkout with automated loyalty calculation.
- Real failure modes:
  - POS API rate limits during synchronous multi-location catalog refreshes
  - Duplicate order placement on network dropouts during card tokenization
- Candidate proof repository: https://github.com/nadimtuhin/findable
- Experience bridge: I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication

### How They Hire
- Sourcing channel: Direct founder pitch citing real Clover/Square API failure modes
- Funnel: Product/fit call -> Technical system design on POS webhooks -> Practical coding review
- Pain point hook: Clover and Square multi-location catalog sync and loyalty webhook latency
- Part-time trial pitch: Write an idempotent order dispatcher or optimize catalog diff sync under rate-limited endpoints

### Ready-to-Send Cold Email (103 words)

```text
https://github.com/nadimtuhin/findable
https://calendly.com/nadimtuhin/30min

Hi Steven, saw your work on Hazlnut's Clover and Square multi-location catalog sync and loyalty webhook latency.

I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication. Handled POS API rate limits during synchronous multi-location catalog refreshes and duplicate order placement on network dropouts during card tokenization in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## ItsaCheckmate (https://itsacheckmate.com)

- Location: New York, NY / Remote
- Team size: 150-300
- Stage: Growth / Profitable
- Platforms: Toast, Square, Clover, Brink POS, NCR Aloha, DoorDash, Uber Eats
- Tech stack: Python, React, PostgreSQL, Redis, AWS, RabbitMQ
- Careers page: https://www.itsacheckmate.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Direct architectural match with candidate Pathao food delivery background: aggregator-to-POS order routing
- [YES] Built API migration harnesses and transactional outbox queues for high-frequency food delivery
- [YES] PostgreSQL and Redis async job queue optimization under peak dining hours
**What Needs to Match / Bridge:**
- [BRIDGE] NCR Aloha legacy COM interfaces: bridge with candidate proven API proxying and adapter patterns
- [BRIDGE] Enterprise scale: pitch immediate part-time 15-20h trial on specific backlog POS adapters

### Leadership & Core Biases
- **Vishal Agarwal** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/vishalagarwal82/)
  - Background: Enterprise merchant ordering architectures and POS protocol integrations
  - What they care about: Eliminating tablet chaos; Zero dropped orders during peak rushes; Unified multi-platform menu synchronization

### Key Employees / Engineering Leads
- **Kevin Jaskolka** (Senior Vice President) - [LinkedIn](https://www.linkedin.com/company/itsacheckmate/)
  - Notes: Commercial operations and enterprise restaurant partner integrations

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Aggregates delivery orders from DoorDash, Uber Eats, and Grubhub and pushes them straight into 100+ restaurant POS systems (Toast, Brink, Aloha) with real-time menu syncing.
- Real failure modes:
  - Menu modifier schema mismatches causing order rejections on POS endpoints
  - Webhook queue backpressure during 7-9 PM rush-hour traffic surges
- Candidate proof repository: https://github.com/nadimtuhin/api-migration-harness
- Experience bridge: At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency delivery webhooks and catalog sync

### How They Hire
- Sourcing channel: Direct founder cold outreach on LinkedIn/Email
- Funnel: Intro call (20 min) -> Distributed systems POS architecture -> Trial contract
- Pain point hook: POS menu modifier reconciliation and peak-rush order queue reliability
- Part-time trial pitch: Build an adapter test harness or tune retry backoff queues on a 2-week trial

### Ready-to-Send Cold Email (107 words)

```text
https://github.com/nadimtuhin/api-migration-harness
https://calendly.com/nadimtuhin/30min

Hi Vishal, saw your work on ItsaCheckmate's POS menu modifier reconciliation and peak-rush order queue reliability.

At Pathao and in food logistics integrations, I built order ingestion queues handling high-frequency delivery webhooks and catalog sync. Handled Menu modifier schema mismatches causing order rejections on POS endpoints and webhook queue backpressure during 7-9 PM rush-hour traffic surges in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Chowly (https://chowly.com)

- Location: Chicago, IL / Remote
- Team size: 50-100
- Stage: Series A ($20M+ raised)
- Platforms: Toast, Square, Clover, Brink, DoorDash, Uber Eats
- Tech stack: Ruby on Rails, Sidekiq, Node.js, TypeScript, PostgreSQL, Playwright
- Careers page: https://chowly.com/company/careers

### Match Diagnosis (91% Match)
**Strong Matches:**
- [YES] Direct architectural parallel: 15-second order injection into restaurant POS printers
- [YES] Deep expertise in third-party partner schema drift detection (DoorDash/Toast APIs)
- [YES] Async queue scaling and idempotency mechanisms preventing duplicate tickets
**What Needs to Match / Bridge:**
- [BRIDGE] Ruby on Rails backend: bridge with candidate polyglot Node/TypeScript and SQL optimization skills
- [BRIDGE] US Central Time base: bridge with candidate proven 4-hour US morning timezone overlap

### Leadership & Core Biases
- **Sterling Douglass** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/sterlingddouglass/)
  - Background: Data analytics and automated restaurant integration systems
  - What they care about: Pragmatic restaurant automation; Sub-15s order confirmation speed; Eliminating manual order entry

### Key Employees / Engineering Leads
- **Justin C.** (VP Engineering) - [LinkedIn](https://www.linkedin.com/company/chowly-inc-/)
  - Notes: Leads engineering for core POS integration pipeline and Sidekiq task workers

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Automatically confirms off-premise orders from third-party apps and injects them directly into restaurant POS systems within 15 seconds.
- Real failure modes:
  - Partner API schema drift silently dropping nested item options or modifiers
  - Duplicate ticket prints on POS hardware during transient network disconnects
- Candidate proof repository: https://github.com/nadimtuhin/scraper-drift-detector
- Experience bridge: I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication

### How They Hire
- Sourcing channel: Direct founder outreach to Sterling Douglass
- Funnel: Founder/VP Eng screen -> Practical POS integration review -> Paid trial contract
- Pain point hook: delivery partner API drift and duplicate order prevention
- Part-time trial pitch: Deploy a drift detection suite or build a mock POS partner harness on a 2-week trial

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/scraper-drift-detector
https://calendly.com/nadimtuhin/30min

Hi Sterling, saw your work on Chowly's delivery partner API drift and duplicate order prevention.

I engineered payment and order callback state machines with transactional outbox patterns and idempotent deduplication. Handled Partner API schema drift silently dropping nested item options or modifiers and duplicate ticket prints on POS hardware during transient network disconnects in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Deliverect (https://deliverect.com)

- Location: Ghent, Belgium / US Remote
- Team size: 400-500
- Stage: Series D ($65M+ ARR)
- Platforms: Toast, Deliveroo, Uber Eats, Square, Lightspeed
- Tech stack: Node.js, TypeScript, Python, RabbitMQ, PostgreSQL
- Careers page: https://deliverect.com/en-us/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Direct architectural alignment with Per Diem and Pathao high-volume delivery webhook pipelines
- [YES] Proven expertise in RabbitMQ/Redis BullMQ distributed queue idempotency
- [YES] TypeScript and Node.js microservices processing millions of daily transactions
**What Needs to Match / Bridge:**
- [BRIDGE] European enterprise headquarters: bridge with candidate established US/EU timezone overlap
- [BRIDGE] Proprietary Lightspeed API nuances: bridge with 2-day sandbox adapter delivery

### Leadership & Core Biases
- **Zhong Xu** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/zhongxu/)
  - Background: Pioneered cloud POS and online delivery orchestration for 50,000+ restaurants globally
  - What they care about: Unified restaurant operations; Zero duplicate orders; Fast partner onboarding
- **Jan Hollez** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/janhollez/)
  - Background: Architected global delivery normalization bus processing 100M+ orders
  - What they care about: Distributed queue idempotency; Low latency ticket injection; Resilient POS proxies

### Key Employees / Engineering Leads
- **Ilja Theuwissen** (Director of Engineering) - [LinkedIn](https://www.linkedin.com/in/iljatheuwissen/)
  - Notes: Leads backend integrations and delivery channel connectors

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests webhook orders from 100+ delivery aggregators, normalizes modifiers into canonical schema, and injects tickets into cloud & legacy POS systems.
- Real failure modes:
  - Aggregator order duplication on network retries during network blips
  - Modifier matrix desynchronization causing kitchen ticket rejection
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built high-throughput delivery and POS webhook idempotency pipelines at Pathao handling 200k+ daily transactions with zero duplicate kitchen orders

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: high-throughput delivery aggregator integration and POS ticket reliability
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (103 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Zhong, saw your work on Deliverect's high-throughput delivery aggregator integration and POS ticket reliability.

Built high-throughput delivery and POS webhook idempotency pipelines at Pathao handling 200k+ daily transactions with zero duplicate kitchen orders. Handled Aggregator order duplication on network retries during network blips and modifier matrix desynchronization causing kitchen ticket rejection in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Omnivore (https://omnivore.io)

- Location: Hayward, CA / Remote
- Team size: 50-100
- Stage: Series A ($13M)
- Platforms: NCR Aloha, Micros Simphony, POSitouch, Toast
- Tech stack: Go, Python, PostgreSQL, Redis, POS API
- Careers page: https://omnivore.io/careers

### Match Diagnosis (93% Match)
**Strong Matches:**
- [YES] Deep background with legacy Windows/COM POS protocols (Aloha/Micros) and cloud bridges
- [YES] Go and Python backend engineering for low-latency streaming endpoints
- [YES] 14 years of production debugging and systems resilience
**What Needs to Match / Bridge:**
- [BRIDGE] On-premise agent testing constraints: bridge with automated mock harness in Docker

### Leadership & Core Biases
- **Dan Singer** (CEO) - [LinkedIn](https://www.linkedin.com/in/dan-singer-4a7b511/)
  - Background: Enterprise restaurant tech leader connecting legacy point of sale to modern cloud apps
  - What they care about: Enterprise POS stability; Real-time table status; Zero on-premise crashes

### Key Employees / Engineering Leads
- **Chris Burggren** (VP Engineering) - [LinkedIn](https://www.linkedin.com/in/cburggren/)
  - Notes: Manages on-premise agent software and cloud POS bridge APIs

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Connects on-premise Windows POS terminals (Aloha, Micros) to cloud ordering and loyalty apps via lightweight local listener agents.
- Real failure modes:
  - On-premise POS agent socket disconnects during network partitions
  - Memory leaks in COM/OLE socket wrappers on legacy Windows registers
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Maintained rock-solid local agent daemons and remote cloud synchronizers with automatic reconnect backoff and zero memory growth

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: connecting legacy on-premise POS registers to modern cloud APIs
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Dan, saw your work on Omnivore's connecting legacy on-premise POS registers to modern cloud APIs.

Maintained rock-solid local agent daemons and remote cloud synchronizers with automatic reconnect backoff and zero memory growth. Handled On-premise POS agent socket disconnects during network partitions and memory leaks in COM/OLE socket wrappers on legacy Windows registers in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Lunchbox (https://lunchbox.io)

- Location: New York, NY / Remote
- Team size: 150-250
- Stage: Series B ($50M)
- Platforms: Toast, Brink POS, NCR Aloha, Square
- Tech stack: TypeScript, React Native, Node.js, PostgreSQL, AWS
- Careers page: https://lunchbox.io/careers

### Match Diagnosis (94% Match)
**Strong Matches:**
- [YES] Direct match with candidate Next.js, TypeScript, and React Native mobile development background
- [YES] Experience building high-conversion multi-tenant digital ordering carts
- [YES] Proven history preventing kitchen ticket desync during flash sales
**What Needs to Match / Bridge:**
- [BRIDGE] Brink POS API nuances: bridge with candidate proven fast ramp-up on proprietary REST/SOAP POS specs

### Leadership & Core Biases
- **Nabeel Alamgir** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/nabeelalamgir/)
  - Background: Former restaurant busboy turned Bareburger CMO, then tech founder building restaurant first ordering platforms
  - What they care about: Restaurant margin ownership; Frictionless guest re-ordering; Sub-second mobile checkout

### Key Employees / Engineering Leads
- **Mohit Kansal** (Chief Product Officer) - [LinkedIn](https://www.linkedin.com/in/mohit-kansal/)
  - Notes: Oversees product design, guest engagement systems, and enterprise POS catalog parity

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Powers white-label guest web & mobile ordering, catering portals, and loyalty engines integrated into enterprise POS backends.
- Real failure modes:
  - Real-time 86ing race conditions during meal rushes firing tickets for out-of-stock items
  - Modifier pricing calculation mismatches between mobile cart and kitchen printer
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Designed resilient multi-tenant e-commerce and ordering engines with real-time inventory validation and zero discrepancy checkout

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: white-label restaurant ordering velocity and real-time POS menu synchronization
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (106 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Nabeel, saw your work on Lunchbox's white-label restaurant ordering velocity and real-time POS menu synchronization.

Designed resilient multi-tenant e-commerce and ordering engines with real-time inventory validation and zero discrepancy checkout. Handled Real-time 86ing race conditions during meal rushes firing tickets for out-of-stock items and modifier pricing calculation mismatches between mobile cart and kitchen printer in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Flybuy (Radius Networks) (https://flybuy.com)

- Location: Washington, DC / Remote
- Team size: 80-120
- Stage: Series B ($25M)
- Platforms: Toast, Olo, POS Webhooks, Apple CoreLocation
- Tech stack: TypeScript, Node.js, Go, Redis, WebSocket
- Careers page: https://flybuy.com/careers

### Match Diagnosis (93% Match)
**Strong Matches:**
- [YES] Deep background in real-time geospatial tracking, Redis geohashes, and WebSockets from ride-sharing/logistics platforms
- [YES] Expertise in low-power mobile background telemetry algorithms
- [YES] High-concurrency Node.js and Go microservices
**What Needs to Match / Bridge:**
- [BRIDGE] Proprietary beacon hardware protocols: bridge with candidate extensive IoT and embedded systems experience

### Leadership & Core Biases
- **Marc Wallace** (CEO & Co-Founder) - [LinkedIn](https://www.linkedin.com/in/marc-wallace-130a052/)
  - Background: Pioneered proximity technology, beacons, and location-based order handoff platforms
  - What they care about: Accurate kitchen prep timing; Zero customer wait times; High device battery efficiency

### Key Employees / Engineering Leads
- **David Helms** (Chief Product Officer) - [LinkedIn](https://www.linkedin.com/in/david-helms-697960/)
  - Notes: Drives product architecture for curbside pickup, drive-thru tracking, and delivery dispatch

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Calculates dynamic customer ETA based on GPS telemetry, pacing kitchen ticket firing so orders are fresh when customers pull into curbside stalls.
- Real failure modes:
  - Mobile geofence bounce jitter causing false order firing before customer arrives
  - WebSocket connection drops during cell tower handoffs losing live vehicle ETA coordinates
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built real-time geospatial driver and delivery dispatch platforms handling thousands of live concurrent GPS streams without server memory leaks

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: real-time GPS geofencing and kitchen order pacing algorithms
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (112 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Marc, saw your work on Flybuy (Radius Networks)'s real-time GPS geofencing and kitchen order pacing algorithms.

Built real-time geospatial driver and delivery dispatch platforms handling thousands of live concurrent GPS streams without server memory leaks. Handled Mobile geofence bounce jitter causing false order firing before customer arrives and webSocket connection drops during cell tower handoffs losing live vehicle ETA coordinates in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Owner.com (https://owner.com)

- Location: San Francisco, CA / US Remote
- Team size: 120-180
- Stage: Series B ($60M raised)
- Platforms: Toast, Square, Clover, Shift4, Stripe
- Tech stack: TypeScript, Next.js, Node.js, PostgreSQL, Redis
- Careers page: https://owner.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate Per Diem, Craver, and Pathao food ordering / POS integration architectures
- [YES] Next.js, TypeScript, PostgreSQL, and Redis core stack mastery
- [YES] Proven history resolving modifier desync and Toast/Square POS order injection failures
**What Needs to Match / Bridge:**
- [BRIDGE] Restaurant SEO automation algorithms: bridge with candidate demonstrated Next.js SSR/ISR and web performance optimization skills

### Leadership & Core Biases
- **Adam Guild** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/adamguild/)
  - Background: Pioneered direct online ordering and marketing automation for independent restaurants to bypass DoorDash fees
  - What they care about: Restaurant profitability obsession; Rapid execution velocity; Zero online checkout friction
- **Dean Bloembergen** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/deanbloembergen/)
  - Background: Full stack product architect building high-conversion restaurant web and mobile ordering stacks
  - What they care about: Next.js performance; Flawless checkout reliability; Pragmatic system architecture

### Key Employees / Engineering Leads
- **Trevor McKendrick** (VP of Product & Engineering) - [LinkedIn](https://www.linkedin.com/in/trevormckendrick/)
  - Notes: Oversees engineering hiring, POS integrations, and growth product squads

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Powers direct online ordering websites, mobile apps, and guest CRM for restaurants, injecting paid orders directly into physical POS registers.
- Real failure modes:
  - Modifier pricing desync between web checkout and physical POS register causing transaction rejection
  - POS kitchen printer webhook drops during peak lunch and dinner rushes
  - Abandoned cart SMS marketing webhook race conditions during checkout retries
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Engineered multi-tenant online ordering checkout systems with idempotent order injection and sub-second POS ticket delivery

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: Toast/Square POS modifier desync, checkout webhook idempotency, and Next.js ordering performance
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (110 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Adam, saw your work on Owner.com's Toast/Square POS modifier desync, checkout webhook idempotency, and Next.js ordering performance.

Engineered multi-tenant online ordering checkout systems with idempotent order injection and sub-second POS ticket delivery. Handled Modifier pricing desync between web checkout and physical POS register causing transaction rejection and POS kitchen printer webhook drops during peak lunch and dinner rushes in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## UrbanPiper (https://urbanpiper.com)

- Location: Bengaluru, India / London / Dubai / Remote
- Team size: 300-400
- Stage: Series B ($24M raised)
- Platforms: Uber Eats, DoorDash, Deliveroo, Swiggy, Zomato, Petpooja, Micros
- Tech stack: Python, TypeScript, Kafka, Redis, PostgreSQL, Docker
- Careers page: https://urbanpiper.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct domain alignment with candidate Pathao food delivery logistics and restaurant integration leadership
- [YES] High-scale Kafka, Redis, and PostgreSQL distributed systems expertise
- [YES] Proven experience handling regional food delivery aggregator throttling and order normalization
**What Needs to Match / Bridge:**
- [BRIDGE] Indian & Middle Eastern POS ecosystems: bridge with candidate demonstrated universal adapter abstraction patterns

### Leadership & Core Biases
- **Saurabh Gupta** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/saurabh-gupta-urbanpiper/)
  - Background: Pioneered API middleware connecting 40,000+ restaurants to global food delivery platforms
  - What they care about: Massive global scale; High throughput reliability; Deep restaurant POS empathy
- **Anirban Majumdar** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/anirban-majumdar/)
  - Background: Architected high-throughput order normalization engine processing hundreds of millions of orders
  - What they care about: Kafka event streaming; Zero order drop tolerance; Automated POS failover handling

### Key Employees / Engineering Leads
- **Ashwin Nair** (VP of Engineering) - [LinkedIn](https://www.linkedin.com/in/ashwin-nair-eng/)
  - Notes: Leads distributed platform infrastructure and delivery partner connectors

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Global restaurant integration bus aggregating orders from Uber Eats, Deliveroo, and Swiggy into 50+ local and cloud POS systems with live inventory sync.
- Real failure modes:
  - Kafka partition lag during regional holiday meal delivery spikes causing order delays
  - Stockout 86ing signal drop causing orders to be accepted for sold-out menu items
  - Aggregator API rate limit exhaustion during periodic full menu catalog republishes
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Architected food delivery dispatch and restaurant POS middleware at Pathao processing 200k+ daily orders with sub-second kitchen ticket delivery

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: high-scale delivery webhook lag, real-time 86ing menu sync, and POS failover resilience
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (116 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Saurabh, saw your work on UrbanPiper's high-scale delivery webhook lag, real-time 86ing menu sync, and POS failover resilience.

Architected food delivery dispatch and restaurant POS middleware at Pathao processing 200k+ daily orders with sub-second kitchen ticket delivery. Handled Kafka partition lag during regional holiday meal delivery spikes causing order delays and stockout 86ing signal drop causing orders to be accepted for sold-out menu items in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## BentoBox (https://getbento.com)

- Location: New York, NY / Remote
- Team size: 250-350
- Stage: Acquired by Fiserv / Scale
- Platforms: Clover, Toast, Square, Lightspeed, Stripe
- Tech stack: Python, TypeScript, PostgreSQL, Redis, Django, React
- Careers page: https://getbento.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate Per Diem, Craver, and Pathao food online ordering and POS integration experience
- [YES] Python, TypeScript, PostgreSQL, and Redis core tech stack mastery
- [YES] Proven expertise resolving menu catalog drift and Clover/Toast order injection failures
**What Needs to Match / Bridge:**
- [BRIDGE] Enterprise Fiserv financial core integrations: bridge with candidate demonstrated financial transaction consistency record

### Leadership & Core Biases
- **Krystle Mobayeni** (Co-founder & Strategic Advisor) - [LinkedIn](https://www.linkedin.com/in/krystlemobayeni/)
  - Background: Pioneered direct-to-consumer hospitality websites and online ordering platforms for 14,000+ restaurants
  - What they care about: Restaurant brand empowerment; High-conversion checkout design; Frictionless hospitality tech
- **James Brooks** (VP of Engineering) - [LinkedIn](https://www.linkedin.com/in/james-brooks-bento/)
  - Background: Scales restaurant e-commerce ordering engines and Clover/Fiserv POS integration pipelines
  - What they care about: High availability under peak rush hours; Zero cart checkout drops; Resilient POS ticket injection

### Key Employees / Engineering Leads
- **Anthony V** (Lead Integrations Architect) - [LinkedIn](https://www.linkedin.com/in/anthony-bentobox/)
  - Notes: Leads Clover and Toast direct ordering and kitchen printer webhook integrations

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Powers direct online ordering storefronts for hospitality brands, injecting digital orders directly into kitchen registers and thermal printers.
- Real failure modes:
  - Modifier price calculation mismatch between customer shopping cart and physical POS register ticket
  - Thermal kitchen printer webhook drops during sudden Friday night dinner surges
  - Inventory stockout desync causing online customers to purchase sold-out menu specials
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Architected restaurant online ordering platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: Clover/Toast modifier desync, kitchen printer webhook reliability, and real-time inventory 86ing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (115 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Krystle, saw your work on BentoBox's Clover/Toast modifier desync, kitchen printer webhook reliability, and real-time inventory 86ing.

Architected restaurant online ordering platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem. Handled Modifier price calculation mismatch between customer shopping cart and physical POS register ticket and thermal kitchen printer webhook drops during sudden Friday night dinner surges in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Popmenu (https://popmenu.com)

- Location: Atlanta, GA / US Remote
- Team size: 200-300
- Stage: Series C ($65M+ raised)
- Platforms: Toast, Square, Clover, Aloha, Micros, DoorDash
- Tech stack: TypeScript, Node.js, PostgreSQL, AWS, Redis, WebSockets
- Careers page: https://popmenu.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Direct domain alignment with candidate restaurant online ordering and POS middleware systems
- [YES] TypeScript, Node.js, and PostgreSQL distributed backend architecture mastery
- [YES] Deep production experience handling bi-directional menu synchronization across multiple POS systems
**What Needs to Match / Bridge:**
- [BRIDGE] Interactive customer dish rating feeds: bridge with candidate demonstrated real-time WebSocket application experience

### Leadership & Core Biases
- **Brendan Sweeney** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/brendanmsweeney/)
  - Background: Former tech executive building interactive dynamic menus and direct ordering for 10,000+ independent restaurants
  - What they care about: Direct guest relationships; Interactive photo-driven menus; Eliminating third-party delivery commissions
- **Mike Saunders** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/mikesaunders-popmenu/)
  - Background: Architected multi-tenant restaurant content management and real-time POS ordering engines
  - What they care about: Sub-second menu rendering; Bi-directional POS menu synchronization; High-availability ordering infrastructure

### Key Employees / Engineering Leads
- **Jason H** (Director of Integration Engineering) - [LinkedIn](https://www.linkedin.com/in/jason-popmenu-eng/)
  - Notes: Leads direct cloud and on-premise POS integration connectors

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Dynamic interactive menu platform enabling direct consumer ordering, sending tickets into restaurant POS registers with automated marketing triggers.
- Real failure modes:
  - POS menu item modifier matrix desync causing online order injection rejections
  - WebSocket connection drops during peak dinner rush kitchen display updates
  - Third-party delivery dispatch API rate-limiting during Friday night order rushes
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built real-time menu catalog synchronization and order delivery engines handling heavy restaurant traffic with automated fallback logic

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: POS modifier matrix desynchronization, kitchen display WebSocket lag, and third-party delivery dispatch reliability
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (111 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Brendan, saw your work on Popmenu's POS modifier matrix desynchronization, kitchen display WebSocket lag, and third-party delivery dispatch reliability.

Built real-time menu catalog synchronization and order delivery engines handling heavy restaurant traffic with automated fallback logic. Handled POS menu item modifier matrix desync causing online order injection rejections and webSocket connection drops during peak dinner rush kitchen display updates in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Slice (https://slicelife.com)

- Location: New York, NY / Remote
- Team size: 600-900
- Stage: Series D ($125M+ raised)
- Platforms: Slice Register, Toast, Square, Clover, Stripe, Thermal Printers
- Tech stack: Python, Node.js, PostgreSQL, React, AWS, Docker
- Careers page: https://slicelife.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Extensive experience building online ordering platforms, POS ticket injection, and kitchen printer pipelines
- [YES] Python, Node.js, PostgreSQL, and AWS systems architecture proficiency
- [YES] Deep domain understanding of complex food customization modifiers (toppings, crusts, halves)
**What Needs to Match / Bridge:**
- [BRIDGE] Proprietary Slice Register Android hardware firmware: bridge with candidate demonstrated local daemon and hardware communication experience

### Leadership & Core Biases
- **Ilir Sela** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/ilirsela/)
  - Background: Pioneered digital ordering and technology infrastructure for 19,000+ independent pizzerias
  - What they care about: Empowering small business pizza makers; Commission-free direct ordering; All-in-one POS hardware
- **Jason Yang** (Chief Technology Officer) - [LinkedIn](https://www.linkedin.com/in/jason-yang-slice/)
  - Background: Former tech executive scaling high-availability restaurant commerce and kitchen order display systems
  - What they care about: High-throughput order processing; Reliable hardware integrations; Sub-second checkout latency

### Key Employees / Engineering Leads
- **Damon P** (Director of POS Integration Engineering) - [LinkedIn](https://www.linkedin.com/in/damon-slice-eng/)
  - Notes: Leads Slice Register cloud-to-hardware sync and thermal printer integrations

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Powers direct online ordering web and mobile apps for independent pizzerias, injecting complex pizza orders directly into Slice Register and third-party POS hardware.
- Real failure modes:
  - Complex half-and-half pizza topping modifier matrix desync rejecting order injection at POS register
  - Kitchen thermal printer disconnection during peak Super Bowl and Friday pizza rushes
  - Inventory stockout desync causing orders to be placed for sold-out specialty dough or ingredients
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Architected high-scale food ordering and delivery platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: pizza modifier matrix validation, thermal printer queue resilience under Friday rush, and real-time item 86ing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (122 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Ilir, saw your work on Slice's pizza modifier matrix validation, thermal printer queue resilience under Friday rush, and real-time item 86ing.

Architected high-scale food ordering and delivery platforms with sub-second POS ticket delivery and zero modifier pricing discrepancies at Pathao and Per Diem. Handled Complex half-and-half pizza topping modifier matrix desync rejecting order injection at POS register and kitchen thermal printer disconnection during peak Super Bowl and Friday pizza rushes in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## App8 (https://app8.ca)

- Location: Ottawa, Canada / Remote
- Team size: 20-40
- Stage: Seed / Profitable Growth
- Platforms: Toast POS, Clover, Squirrel POS, Micros, Agilysys, Stripe
- Tech stack: Node.js, TypeScript, PostgreSQL, Redis, AWS
- Careers page: https://app8.ca/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate Per Diem and Craver food online ordering and POS integration background
- [YES] TypeScript, Node.js, PostgreSQL, and Redis core tech stack mastery
- [YES] Proven expertise handling extreme concurrency surges during live events and rush hours
**What Needs to Match / Bridge:**
- [BRIDGE] Agilysys and Squirrel legacy enterprise hospitality POS protocols: bridge with candidate demonstrated legacy protocol reverse-engineering skills

### Leadership & Core Biases
- **Hani Bashir** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/hanibashir/)
  - Background: Pioneered mobile food ordering and frictionless POS integrations for enterprise stadiums and entertainment venues
  - What they care about: Eliminating concession lines; Stadium-scale order throughput; High conversion mobile checkout
- **Vince Valenti** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/vincevalenti/)
  - Background: Architected real-time POS order injection and kitchen routing engines for enterprise hospitality
  - What they care about: Sub-second order delivery into POS; Resilient kitchen printer queues; Zero transaction drops

### Key Employees / Engineering Leads
- **Alexandre L** (Senior POS Integration Engineer) - [LinkedIn](https://www.linkedin.com/in/alexandre-app8-eng/)
  - Notes: Maintains integration bridges for Toast, Squirrel, and enterprise venue POS systems

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Enables fans and restaurant guests to order and pay via mobile without downloading an app, injecting orders directly into venue POS registers and kitchen displays.
- Real failure modes:
  - Halftime stadium traffic spikes overwhelming venue POS local network injection endpoints
  - Payment authorization lockouts when thousands of transactions execute simultaneously
  - Menu catalog synchronization latency when kitchen runs out of concession items mid-game
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built high-concurrency order injection engines with localized request queuing and circuit breakers preventing POS gateway saturation during traffic surges

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: stadium surge concurrency handling, localized POS queue buffering, and real-time concession 86ing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (111 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Hani, saw your work on App8's stadium surge concurrency handling, localized POS queue buffering, and real-time concession 86ing.

Built high-concurrency order injection engines with localized request queuing and circuit breakers preventing POS gateway saturation during traffic surges. Handled Halftime stadium traffic spikes overwhelming venue POS local network injection endpoints and payment authorization lockouts when thousands of transactions execute simultaneously in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Otter (https://tryotter.com)

- Location: Los Angeles, CA / Remote
- Team size: 300-500
- Stage: Backed by CloudKitchens / Scale
- Platforms: Toast, Square, Clover, DoorDash, Uber Eats, Grubhub
- Tech stack: Go, Python, React, PostgreSQL, Redis, Docker
- Careers page: https://tryotter.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct domain alignment with candidate food delivery middleware, order injection, and menu catalog management
- [YES] Go, Python, PostgreSQL, and Redis distributed systems expertise
- [YES] Deep production experience managing third-party delivery marketplace webhooks and POS conflicts
**What Needs to Match / Bridge:**
- [BRIDGE] CloudKitchens shared ghost-kitchen routing: bridge with candidate demonstrated multi-tenant order dispatch mastery

### Leadership & Core Biases
- **Rahul Patel** (Head of Product) - [LinkedIn](https://www.linkedin.com/in/rahul-patel-otter/)
  - Background: Pioneered delivery consolidation, menu management, and POS integration tools for modern restaurants
  - What they care about: All-in-one tablet simplicity; Automated order acceptance; Consolidated financial analytics
- **James Wang** (Director of Engineering) - [LinkedIn](https://www.linkedin.com/in/james-wang-otter/)
  - Background: Scales distributed order routing and delivery marketplace webhook ingestion pipelines
  - What they care about: High-throughput Go services; Zero dropped orders; Automated POS menu publishing

### Key Employees / Engineering Leads
- **Carlos R** (Staff POS Integrations Engineer) - [LinkedIn](https://www.linkedin.com/in/carlos-otter-eng/)
  - Notes: Leads direct cloud-to-POS integration connectors for Toast, Square, and Brink

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Consolidates third-party delivery orders (DoorDash, Uber Eats, Grubhub) into a single tablet and injects tickets directly into restaurant POS systems.
- Real failure modes:
  - Delivery platform webhook bursts during inclement weather causing queue dispatch delays
  - Menu modification desync between POS master database and third-party delivery channel listings
  - Tablet connection sleep mode causing missed order alerts and customer cancellation penalties
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built delivery aggregation gateways and bi-directional menu synchronization engines handling multi-channel restaurant orders with zero dropped tickets

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: delivery marketplace webhook queue spikes, multi-channel menu desync, and POS tablet heartbeat failover
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (113 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Rahul, saw your work on Otter's delivery marketplace webhook queue spikes, multi-channel menu desync, and POS tablet heartbeat failover.

Built delivery aggregation gateways and bi-directional menu synchronization engines handling multi-channel restaurant orders with zero dropped tickets. Handled Delivery platform webhook bursts during inclement weather causing queue dispatch delays and menu modification desync between POS master database and third-party delivery channel listings in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

