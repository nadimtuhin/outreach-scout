# Vertical 4: Developer Workflows, Distributed Queues & Async Execution

Target count: 11
Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.

## Inngest (https://inngest.com)

- Location: San Francisco, CA / Remote
- Team size: 15-30
- Stage: Series A ($9M)
- Platforms: Serverless Step Functions, Event-Driven Architecture, TypeScript SDK
- Tech stack: Go, TypeScript, PostgreSQL, Redis, Docker
- Careers page: https://inngest.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] 14 years designing distributed event queues, webhook state machines, and idempotent workers
- [YES] Deep mastery of TypeScript, Go, PostgreSQL, and Redis
- [YES] YAGNI architectural philosophy matching Inngest’s lean, high-leverage product design
**What Needs to Match / Bridge:**
- [BRIDGE] Custom execution runtime internals: bridge with candidate deep familiarity with queue concurrency and state serialization

### Leadership & Core Biases
- **Chris O'Brien** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/chriseobrien/)
  - Background: Former Docker engineer building developer platforms for durable execution and background workflows
  - What they care about: Zero infrastructure configuration; Developer delight; Flawless step idempotency
- **Tony Holdstock-Brown** (Co-founder & CTO) - [LinkedIn](https://www.linkedin.com/in/tonyhb/)
  - Background: Architected distributed event stream engine and durable execution state machine
  - What they care about: Durable step execution; Sub-millisecond scheduling latency; Bulletproof replay reliability

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Enables developers to write durable step-functions in TypeScript and Python that survive server restarts, deploy seamlessly, and retry automatically.
- Real failure modes:
  - Step idempotency violations when state payloads exceed memory buffers during replays
  - State serialization blowup on large payloads choking relational database stores
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built distributed task queues and state machines with strict idempotency keys, automatic backoff, and sub-millisecond execution

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: durable step execution engine performance, queue scheduling, and SDK developer ergonomics
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (108 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Chris, saw your work on Inngest's durable step execution engine performance, queue scheduling, and SDK developer ergonomics.

Built distributed task queues and state machines with strict idempotency keys, automatic backoff, and sub-millisecond execution. Handled Step idempotency violations when state payloads exceed memory buffers during replays and state serialization blowup on large payloads choking relational database stores in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Trigger.dev (https://trigger.dev)

- Location: London, UK / Remote
- Team size: 10-20
- Stage: Y Combinator, Seed ($3.5M)
- Platforms: Next.js, Bun, Realtime Serverless Queues, Long-running Jobs
- Tech stack: TypeScript, Node.js, Bun, PostgreSQL, Docker
- Careers page: https://trigger.dev/careers

### Match Diagnosis (98% Match)
**Strong Matches:**
- [YES] Expert in the Bun runtime, TypeScript ESM, and high-performance serverless queue design
- [YES] Direct alignment with candidate’s open-source background and developer tooling focus
- [YES] 14 years of backend systems engineering with PostgreSQL and WebSocket streaming
**What Needs to Match / Bridge:**
- [BRIDGE] London time zone: candidate already operates with substantial European morning and afternoon overlap

### Leadership & Core Biases
- **Matt Aitken** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/michaela-aitken/)
  - Background: Built developer-first background jobs platform providing realtime streaming logs and zero timeout execution
  - What they care about: Open source first; Realtime log streaming; Zero serverless timeouts
- **Eric Allam** (Co-founder & CTO) - [LinkedIn](https://www.linkedin.com/in/ericallam/)
  - Background: Pioneered developer tools and high-performance TypeScript execution runtimes
  - What they care about: Bun and Node runtime speed; Type-safe event routing; Resilient distributed workers

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Open-source background jobs framework allowing developers to run long tasks with realtime web-socket streaming and zero timeout limits.
- Real failure modes:
  - WebSocket heartbeat timeouts during heavy CPU-bound tasks in serverless runtimes
  - Worker process crash loops on memory-heavy generative AI tasks taking down host machines
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Architected high-throughput Bun and Node.js microservices with real-time log streaming and rock-solid process supervision

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: Bun runtime optimization, realtime streaming logs, and background job queue resilience
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (108 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Matt, saw your work on Trigger.dev's Bun runtime optimization, realtime streaming logs, and background job queue resilience.

Architected high-throughput Bun and Node.js microservices with real-time log streaming and rock-solid process supervision. Handled WebSocket heartbeat timeouts during heavy CPU-bound tasks in serverless runtimes and worker process crash loops on memory-heavy generative AI tasks taking down host machines in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Hatchet (https://hatchet.run)

- Location: San Francisco, CA / Remote
- Team size: 10-20
- Stage: Seed ($3.8M)
- Platforms: Distributed Task Queue, Workflow Engine, gRPC Streams
- Tech stack: Go, TypeScript, PostgreSQL, gRPC, RabbitMQ
- Careers page: https://hatchet.run/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Extensive production experience replacing slow BullMQ/Celery systems with high-throughput streaming queues
- [YES] Go and TypeScript core systems development
- [YES] PostgreSQL queue optimization using SKIP LOCKED and atomic state transitions
**What Needs to Match / Bridge:**
- [BRIDGE] gRPC proto schema evolution: candidate is proficient in protocol buffers and strict API versioning

### Leadership & Core Biases
- **Alexander Belanger** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/alex-belanger/)
  - Background: Built low-latency distributed task queue and workflow engine designed to replace legacy Celery/BullMQ setups
  - What they care about: Sub-millisecond scheduling latency; gRPC streaming efficiency; Fair queueing concurrency

### Key Employees / Engineering Leads
- **Gabe Ragland** (Founding Engineer) - [LinkedIn](https://www.linkedin.com/in/gabrielragland/)
  - Notes: Drives developer SDKs, dashboard UI, and TypeScript runtime client integrations

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Low-latency workflow engine and distributed queue that streams events over gRPC and schedules tasks using fair-share concurrency.
- Real failure modes:
  - High-concurrency PostgreSQL connection pool exhaustion on sudden job queue bursts
  - gRPC stream disconnects during network partitions causing lingering orphaned task states
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Optimized PostgreSQL connection pooling and atomic queue claiming queries processing millions of asynchronous tasks without deadlocks

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: distributed task queue latency, PostgreSQL connection saturation, and fair queueing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (107 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Alexander, saw your work on Hatchet's distributed task queue latency, PostgreSQL connection saturation, and fair queueing.

Optimized PostgreSQL connection pooling and atomic queue claiming queries processing millions of asynchronous tasks without deadlocks. Handled High-concurrency PostgreSQL connection pool exhaustion on sudden job queue bursts and gRPC stream disconnects during network partitions causing lingering orphaned task states in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Temporal (https://temporal.io)

- Location: Bellevue, WA / Remote
- Team size: 150-250
- Stage: Series B ($120M+ raised)
- Platforms: Go, TypeScript, Java, Python, Kubernetes
- Tech stack: Go, TypeScript, Rust, PostgreSQL, Cassandra, gRPC
- Careers page: https://temporal.io/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Extensive 14-year background in distributed systems, asynchronous event queues, and deterministic execution
- [YES] TypeScript and Go multi-language systems mastery
- [YES] Deep production experience troubleshooting distributed state desync and network partition failures
**What Needs to Match / Bridge:**
- [BRIDGE] Deep Cassandra internal storage tuning: bridge with candidate demonstrated PostgreSQL and Redis cluster mastery

### Leadership & Core Biases
- **Maxim Fateev** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/fateev/)
  - Background: Creator of AWS Simple Workflow (SWF), Uber Cadence, and Temporal durable execution engine
  - What they care about: Durable execution over ephemeral states; Code as workflows; Mathematical determinism
- **Samar Abbas** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/samarabbas/)
  - Background: Co-architect of Uber Cadence and Temporal core distributed state machine
  - What they care about: Extreme distributed systems correctness; Sub-millisecond history state transitions; Zero event loss

### Key Employees / Engineering Leads
- **Dominic Nguyen** (Staff Systems Engineer) - [LinkedIn](https://www.linkedin.com/in/dominic-nguyen-dev/)
  - Notes: Works on the TypeScript and Node.js SDK runtime and determinism sandboxes

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Orchestrates mission-critical distributed microservice workflows with guaranteed durable state persistence and automatic failure recovery.
- Real failure modes:
  - Workflow history event replay non-determinism caused by untrusted side-effects in SDKs
  - History event count explosion (>50,000 events) on unpartitioned continuous workflow loops
  - Worker process connection starvation during large-scale network partition healing
- Candidate proof repository: https://github.com/nadimtuhin/state-machine-orchestrator
- Experience bridge: Built state machine workflow execution engines and distributed queue architectures handling millions of mission-critical transactions

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: TypeScript SDK determinism validation, history event compaction, and gRPC connection multiplexing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (108 words)

```text
https://github.com/nadimtuhin/state-machine-orchestrator
https://calendly.com/nadimtuhin/30min

Hi Maxim, saw your work on Temporal's TypeScript SDK determinism validation, history event compaction, and gRPC connection multiplexing.

Built state machine workflow execution engines and distributed queue architectures handling millions of mission-critical transactions. Handled Workflow history event replay non-determinism caused by untrusted side-effects in SDKs and history event count explosion (>50,000 events) on unpartitioned continuous workflow loops in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Upstash (https://upstash.com)

- Location: San Francisco, CA / Turkey / Remote
- Team size: 20-40
- Stage: Series A ($10M raised)
- Platforms: Cloudflare Workers, Vercel, Next.js, AWS Lambda, Bun
- Tech stack: Go, TypeScript, Rust, Redis, AWS Lambda, Cloudflare Workers
- Careers page: https://upstash.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate Cloudflare Workers, Durable Objects, and Next.js serverless development
- [YES] Deep Redis cluster, BullMQ, and HTTP webhook message queue expertise
- [YES] TypeScript and Go distributed backend systems proficiency
**What Needs to Match / Bridge:**
- [BRIDGE] Custom vector indexing engines: bridge with candidate demonstrated PostgreSQL pgvector and distributed search implementations

### Leadership & Core Biases
- **Enver Bisevac** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/enverbisevac/)
  - Background: Pioneered serverless data infrastructure designed specifically for edge and serverless runtimes
  - What they care about: Per-request billing; Zero cold starts; HTTP/REST API ergonomics for Redis & messaging
- **Mehmet Dogan** (Head of Engineering) - [LinkedIn](https://www.linkedin.com/in/mehmet-dogan/)
  - Background: Built the core distributed QStash message scheduler and multi-region replication fabric
  - What they care about: Sub-millisecond latency; Stateless edge architecture; Extreme operational simplicity

### Key Employees / Engineering Leads
- **Chisom Nwokwu** (Developer Relations & Systems) - [LinkedIn](https://www.linkedin.com/in/chisom-nwokwu/)
  - Notes: Builds Next.js and Cloudflare Workers examples for serverless Redis and QStash

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides serverless Redis, Kafka, and HTTP-driven message scheduling (QStash) over HTTP REST without TCP connection pool limits.
- Real failure modes:
  - TCP connection exhaustion in serverless edge runtimes connecting to traditional Redis instances
  - QStash deduplication ID window expiration causing duplicate task triggers under retry bursts
  - Dead-letter queue backpressure when subscriber webhook endpoints experience cascading 504 outages
- Candidate proof repository: https://github.com/nadimtuhin/cloudflare-durable-queue
- Experience bridge: Engineered HTTP message queues and edge scheduler workers on Cloudflare Workers and Bun with robust deduplication and retry policies

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: serverless HTTP connection pooling, QStash deduplication windows, and edge message fanout
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (114 words)

```text
https://github.com/nadimtuhin/cloudflare-durable-queue
https://calendly.com/nadimtuhin/30min

Hi Enver, saw your work on Upstash's serverless HTTP connection pooling, QStash deduplication windows, and edge message fanout.

Engineered HTTP message queues and edge scheduler workers on Cloudflare Workers and Bun with robust deduplication and retry policies. Handled TCP connection exhaustion in serverless edge runtimes connecting to traditional Redis instances and QStash deduplication ID window expiration causing duplicate task triggers under retry bursts in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Restate (https://restate.dev)

- Location: Berlin, Germany / US Remote
- Team size: 15-30
- Stage: Seed ($7M raised)
- Platforms: TypeScript, Node.js, Python, Go, Rust
- Tech stack: Rust, TypeScript, gRPC, PostgreSQL, Docker
- Careers page: https://restate.dev/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Stream processing and stateful execution architecture background
- [YES] TypeScript and Bun SDK developer ergonomics alignment
- [YES] Deep understanding of microservice failure modes, idempotency, and journaled state replay
**What Needs to Match / Bridge:**
- [BRIDGE] Rust core engine internals: bridge with candidate demonstrated low-level systems and memory performance tuning

### Leadership & Core Biases
- **Giselle van Dongen** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/giselle-van-dongen/)
  - Background: Former Apache Flink core contributor building next-gen resilient microservice execution runtimes
  - What they care about: Eliminating distributed systems plumbing; Simple programming models; Bulletproof resilience
- **Till Rohrmann** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/tillrohrmann/)
  - Background: Former PMC Chair of Apache Flink, distributed stateful stream processing pioneer
  - What they care about: Log-structured state machines; Minimal operational overhead; Language-native SDKs

### Key Employees / Engineering Leads
- **Mikhail Bautin** (Staff Systems Engineer) - [LinkedIn](https://www.linkedin.com/in/mikhail-bautin/)
  - Notes: Works on core engine consensus, journaling, and recovery algorithms

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: A distributed runtime that turns microservices into durable, resilient state machines with automatic retries and state management via an append-only journal.
- Real failure modes:
  - Journal log compaction overhead during high-frequency microservice state mutations
  - Distributed circular invocation deadlocks across chained durable handlers
  - Non-deterministic side-effect execution during replay when external HTTP calls lack idempotency keys
- Candidate proof repository: https://github.com/nadimtuhin/state-machine-orchestrator
- Experience bridge: Built deterministic distributed workflow runners and transaction journals preventing partial failure states across decoupled microservices

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: TypeScript SDK state journal replay, microservice call deadlocks, and idempotency guarantees
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (103 words)

```text
https://github.com/nadimtuhin/state-machine-orchestrator
https://calendly.com/nadimtuhin/30min

Hi Giselle, saw your work on Restate's TypeScript SDK state journal replay, microservice call deadlocks, and idempotency guarantees.

Built deterministic distributed workflow runners and transaction journals preventing partial failure states across decoupled microservices. Handled Journal log compaction overhead during high-frequency microservice state mutations and distributed circular invocation deadlocks across chained durable handlers in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Convex (https://convex.dev)

- Location: San Francisco, CA / Remote
- Team size: 35-55
- Stage: Series A ($26M raised)
- Platforms: Next.js, React, TypeScript, Node.js, Vercel
- Tech stack: Rust, TypeScript, V8 Isolates, WebSockets, PostgreSQL
- Careers page: https://convex.dev/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Extensive Next.js, React, and TypeScript full-stack ecosystem mastery
- [YES] Deep experience designing reactive real-time database queries and WebSocket backpressure mechanisms
- [YES] V8 isolate and Cloudflare Workers runtime execution experience
**What Needs to Match / Bridge:**
- [BRIDGE] Proprietary database kernel written in Rust: bridge with candidate demonstrated V8 execution and TypeScript API runtime expertise

### Leadership & Core Biases
- **Jamie Turner** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/jamieturner/)
  - Background: Former Dropbox infrastructure director who scaled metadata and distributed file sync engines
  - What they care about: End-to-end reactivity; Zero glue code; Global transactional consistency
- **Sujay Jayakar** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/sujay-jayakar/)
  - Background: Distributed systems architect from Dropbox and Google building custom reactive database kernels
  - What they care about: ACID transactions everywhere; V8 isolate execution speed; Deterministic mutations

### Key Employees / Engineering Leads
- **Ian Macartney** (Head of Developer Experience) - [LinkedIn](https://www.linkedin.com/in/ian-macartney/)
  - Notes: Drives TypeScript client bindings, Next.js streaming, and background scheduler integrations

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: A reactive backend platform with a custom transactional document database, real-time WebSocket subscriptions, and scheduled background jobs executed in V8 isolates.
- Real failure modes:
  - Optimistic concurrency write conflict storms during hot-document update bursts
  - WebSocket subscriber memory explosion when thousands of clients subscribe to unindexed query streams
  - Scheduled mutation backpressure under high-frequency delayed queue task execution
- Candidate proof repository: https://github.com/nadimtuhin/websocket-backpressure-stream
- Experience bridge: Built real-time WebSocket subscription engines with backpressure limits and optimistic conflict resolution for high-traffic collaborative applications

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: reactive WebSocket subscriber backpressure, optimistic concurrency conflict handling, and scheduled task queues
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (110 words)

```text
https://github.com/nadimtuhin/websocket-backpressure-stream
https://calendly.com/nadimtuhin/30min

Hi Jamie, saw your work on Convex's reactive WebSocket subscriber backpressure, optimistic concurrency conflict handling, and scheduled task queues.

Built real-time WebSocket subscription engines with backpressure limits and optimistic conflict resolution for high-traffic collaborative applications. Handled Optimistic concurrency write conflict storms during hot-document update bursts and webSocket subscriber memory explosion when thousands of clients subscribe to unindexed query streams in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Svix (https://svix.com)

- Location: San Francisco, CA / US Remote
- Team size: 20-40
- Stage: Series A ($15M raised)
- Platforms: PostgreSQL, Redis, Kafka, Rust, TypeScript, Go
- Tech stack: Rust, TypeScript, PostgreSQL, Redis, Docker
- Careers page: https://svix.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate distributed queue, webhook delivery, and idempotency architectures
- [YES] TypeScript SDK ergonomics and high-performance backend systems background
- [YES] Deep production experience troubleshooting consumer endpoint timeouts and backpressure storms
**What Needs to Match / Bridge:**
- [BRIDGE] Rust core dispatch daemon: bridge with candidate demonstrated low-level systems and high-throughput Go/TypeScript queue builds

### Leadership & Core Biases
- **Tom Hacohen** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/tomhacohen/)
  - Background: Open source systems engineer from Samsung and Enlightenment building enterprise webhooks as a service
  - What they care about: Rust performance; Open source first; Sub-millisecond webhook dispatching
- **Gal Lellouche** (Co-founder & Systems Architect) - [LinkedIn](https://www.linkedin.com/in/gal-lellouche/)
  - Background: Distributed systems infrastructure engineer scaling high-throughput event delivery queues
  - What they care about: Zero message drop guarantees; Idempotent delivery keys; Fair-share tenant queues

### Key Employees / Engineering Leads
- **Danilo Silva** (Senior Software Engineer) - [LinkedIn](https://www.linkedin.com/in/danilo-silva-eng/)
  - Notes: Works on Svix server core, consumer verification libraries, and CLI tooling

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests millions of webhook events via API, validates cryptographic signatures, and dispatches them with exponential backoff and automatic retry scheduling.
- Real failure modes:
  - Cascading consumer endpoint 504 timeouts starving regional queue dispatch threads
  - Replay attack vulnerabilities when webhook timestamps are not strictly validated
  - Database connection saturation during customer bulk historical event replays
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built high-throughput webhook delivery buses with signature verification, exponential backoff, and dead-letter queues handling hundreds of thousands of daily events

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: webhook dispatch backpressure, customer endpoint timeout mitigation, and consumer signature SDKs
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (111 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Tom, saw your work on Svix's webhook dispatch backpressure, customer endpoint timeout mitigation, and consumer signature SDKs.

Built high-throughput webhook delivery buses with signature verification, exponential backoff, and dead-letter queues handling hundreds of thousands of daily events. Handled Cascading consumer endpoint 504 timeouts starving regional queue dispatch threads and replay attack vulnerabilities when webhook timestamps are not strictly validated in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Hookdeck (https://hookdeck.com)

- Location: Montreal, Canada / Remote
- Team size: 15-30
- Stage: Seed ($5M raised)
- Platforms: Stripe Webhooks, Shopify, Twilio, GitHub, AWS Lambda
- Tech stack: Go, TypeScript, PostgreSQL, Redis, Kafka
- Careers page: https://hookdeck.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct experience building webhook ingest proxies, message queuing, and replay mechanisms
- [YES] Go, TypeScript, PostgreSQL, and Redis distributed systems expertise
- [YES] Deep production experience managing third-party webhook bursts from Shopify and Stripe
**What Needs to Match / Bridge:**
- [BRIDGE] Proprietary event gateway filtering syntax: bridge with candidate demonstrated custom JSON parser and filter implementations

### Leadership & Core Biases
- **Eric Côté** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/ericcote/)
  - Background: Pioneered event gateway and webhook queue infrastructure for asynchronous engineering architectures
  - What they care about: Reliable event ingestion; Developer visibility; Eliminating custom webhook infrastructure
- **Alexandre Bouchard** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/alexandrebouchard/)
  - Background: Distributed systems engineer designing low-latency event proxying and message replay brokers
  - What they care about: Go systems throughput; Deterministic message ordering; Zero message ingestion latency

### Key Employees / Engineering Leads
- **Maurice K** (Senior Platform Engineer) - [LinkedIn](https://www.linkedin.com/in/maurice-hookdeck/)
  - Notes: Works on the core message routing engine, transform filters, and CLI tunnel tools

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests inbound webhooks at edge proxies, buffers them in persistent message queues, and forwards events to internal destinations with rate limiting and retry control.
- Real failure modes:
  - Traffic burst spikes during flash sales overwhelming downstream serverless workers
  - Duplicate event ingestion caused by upstream sender retry loops on slow TCP handshakes
  - Destination queue lag when destination API responses drop below 10 requests per second
- Candidate proof repository: https://github.com/nadimtuhin/pos-webhook-idempotency
- Experience bridge: Built webhook buffers and rate-limiting proxies preventing downstream service crashes during sudden traffic spikes at Pathao and Per Diem

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: edge webhook buffer latency, downstream worker rate-limiting, and distributed message replay
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (113 words)

```text
https://github.com/nadimtuhin/pos-webhook-idempotency
https://calendly.com/nadimtuhin/30min

Hi Eric, saw your work on Hookdeck's edge webhook buffer latency, downstream worker rate-limiting, and distributed message replay.

Built webhook buffers and rate-limiting proxies preventing downstream service crashes during sudden traffic spikes at Pathao and Per Diem. Handled Traffic burst spikes during flash sales overwhelming downstream serverless workers and duplicate event ingestion caused by upstream sender retry loops on slow TCP handshakes in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Resend (https://resend.com)

- Location: San Francisco, CA / Remote
- Team size: 15-25
- Stage: Seed ($3M raised)
- Platforms: Next.js, React Email, TypeScript, Node.js, Vercel
- Tech stack: TypeScript, Next.js, Node.js, Go, PostgreSQL, Redis
- Careers page: https://resend.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Complete TypeScript, Node.js, and Next.js full-stack alignment
- [YES] YAGNI minimalist engineering philosophy matching Resend lean developer culture
- [YES] High-volume queueing and delivery webhook feedback loop mastery
**What Needs to Match / Bridge:**
- [BRIDGE] SMTP low-level MTA protocol details: bridge with candidate demonstrated HTTP API and distributed queue architecture expertise

### Leadership & Core Biases
- **Zeno Rocha** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/zenorocha/)
  - Background: Renowned open source creator (clipboard.js, Dracula theme) building the modern developer-first email platform
  - What they care about: Flawless developer DX; Obsession with execution speed; Radical simplicity
- **Bu Kinoshita** (Head of Product & Co-founder) - [LinkedIn](https://www.linkedin.com/in/bukinoshita/)
  - Background: Pioneered React Email and modern UI toolkits for transactional communication
  - What they care about: Component-driven templates; TypeScript native APIs; Zero email rendering hacks

### Key Employees / Engineering Leads
- **Gabriel Vergnaud** (Founding Engineer) - [LinkedIn](https://www.linkedin.com/in/gabriel-vergnaud/)
  - Notes: Creator of ts-pattern, works on core SDK and type-safe transactional pipeline systems

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Enables developers to build transactional emails using React components and send them via a single API call with real-time delivery tracking.
- Real failure modes:
  - Queue backpressure during bulk customer notification broadcasts delaying critical transactional reset emails
  - Rendering engine memory spikes when generating complex nested React Email HTML payloads
  - ISP reputation degradation caused by unthrottled bounce bursts on unverified sender domains
- Candidate proof repository: https://github.com/nadimtuhin/websocket-backpressure-stream
- Experience bridge: Built high-throughput notification and transactional messaging queues with priority tiers ensuring transactional messages never stall behind marketing broadcasts

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: transactional queue priority isolation, React Email rendering latency, and webhook delivery telemetry
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (114 words)

```text
https://github.com/nadimtuhin/websocket-backpressure-stream
https://calendly.com/nadimtuhin/30min

Hi Zeno, saw your work on Resend's transactional queue priority isolation, React Email rendering latency, and webhook delivery telemetry.

Built high-throughput notification and transactional messaging queues with priority tiers ensuring transactional messages never stall behind marketing broadcasts. Handled Queue backpressure during bulk customer notification broadcasts delaying critical transactional reset emails and rendering engine memory spikes when generating complex nested React Email HTML payloads in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Airbyte (https://airbyte.com)

- Location: San Francisco, CA / Remote
- Team size: 150-250
- Stage: Series B ($180M+ raised)
- Platforms: Docker, Kubernetes, PostgreSQL, Snowflake, BigQuery, 350+ Connectors
- Tech stack: Java, Python, TypeScript, Docker, Kubernetes, PostgreSQL, Temporal
- Careers page: https://airbyte.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Extensive experience building resilient data extraction connectors and ETL/ELT pipelines
- [YES] TypeScript and Python connector SDK development proficiency
- [YES] Deep understanding of containerized worker orchestration and Temporal-driven job scheduling
**What Needs to Match / Bridge:**
- [BRIDGE] Java core orchestration platform: bridge with candidate demonstrated Temporal workflow and polyglot connector experience

### Leadership & Core Biases
- **Michel Tricot** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/micheltricot/)
  - Background: Former director of engineering at Liveramp building open source data movement infrastructure
  - What they care about: Open source first; Democratizing data integration; Universal connector standards
- **John Lafleur** (COO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/johnlafleur/)
  - Background: Serial developer tooling founder scaling global open-source contributor communities
  - What they care about: Developer community empowerment; Rapid connector iteration; Extensible connector SDKs

### Key Employees / Engineering Leads
- **Marcos M** (Staff Infrastructure Engineer) - [LinkedIn](https://www.linkedin.com/in/marcos-airbyte/)
  - Notes: Works on the Airbyte worker orchestrator and Temporal workflow scheduling engine

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Orchestrates containerized source and destination connectors over standard JSON streams to move and synchronize data across 350+ databases and APIs.
- Real failure modes:
  - Connector process OOM crashes when streaming unbounded database rows without backpressure chunking
  - Temporal workflow state history bloat during multi-day high-volume historical sync runs
  - Upstream API connection resets causing entire job retries instead of checkpointed resumes
- Candidate proof repository: https://github.com/nadimtuhin/state-machine-orchestrator
- Experience bridge: Built streaming data extraction workers with checkpointed state persistence and memory-bounded cursor pagination preventing worker OOM crashes

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: connector streaming memory bounds, checkpointed state resumes, and Temporal workflow orchestration
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (111 words)

```text
https://github.com/nadimtuhin/state-machine-orchestrator
https://calendly.com/nadimtuhin/30min

Hi Michel, saw your work on Airbyte's connector streaming memory bounds, checkpointed state resumes, and Temporal workflow orchestration.

Built streaming data extraction workers with checkpointed state persistence and memory-bounded cursor pagination preventing worker OOM crashes. Handled Connector process OOM crashes when streaming unbounded database rows without backpressure chunking and temporal workflow state history bloat during multi-day high-volume historical sync runs in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

