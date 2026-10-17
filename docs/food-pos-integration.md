# Vertical 1: Food POS & Ordering SaaS (Square / Toast / Clover)

Target count: 4
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

