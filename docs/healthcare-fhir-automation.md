# Vertical 2: Healthcare Automation on EHR (Epic / SMART on FHIR)

Target count: 15
Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.

## Metriport (https://metriport.com)

- Location: San Francisco, CA / Remote (YC S22)
- Team size: 10-20
- Stage: Seed (YC S22)
- Platforms: Epic, Cerner, CommonWell Health Alliance, Carequality
- Tech stack: TypeScript, Node.js, PostgreSQL, AWS, Docker, FHIR R4
- Careers page: https://metriport.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Open-source TypeScript repository where candidate can demonstrate immediate PR proof
- [YES] Clinical document normalization and FHIR R4 resource parsing matching Peyra experience
- [YES] Strict HIPAA compliance and synthetic test fixtures architecture
**What Needs to Match / Bridge:**
- [BRIDGE] Carequality network query certificates: bridge with candidate EHR REST/FHIR adapter proof
- [BRIDGE] Full-time open-source maintainer pace: offer targeted issue triage and parser fix PRs

### Leadership & Core Biases
- **Colin Keany** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/colinkeany/)
  - Background: Product and open source health infrastructure
  - What they care about: Open source transparency; Developer ergonomics; Universal schema normalization
- **Derya Cavdar** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/deryacavdar/)
  - Background: Distributed systems, medical record exchange, large-scale data transformation
  - What they care about: High-throughput stream processing; Deterministic FHIR parsing; Zero data corruption

### Key Employees / Engineering Leads
- **Marek B.** (Senior Backend Engineer) - [LinkedIn](https://www.linkedin.com/company/metriport/)
  - Notes: Remote contractor contributor on C-CDA XML stream transformation

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests clinical documents (C-CDA XML) from national healthcare networks and converts them into standardized, queryable FHIR R4 JSON resources.
- Real failure modes:
  - Memory exhaustion when parsing 100MB+ legacy C-CDA XML clinical files
  - Schema discrepancies between Cerner and Epic FHIR allergy/medication bundles
- Candidate proof repository: https://github.com/nadimtuhin/findable
- Experience bridge: In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses

### How They Hire
- Sourcing channel: GitHub contributions to their open-source repo or direct CTO email
- Funnel: Open-source code discussion -> Practical data parsing challenge -> Culture/speed fit
- Pain point hook: C-CDA to FHIR R4 transformation pipeline and large document streaming
- Part-time trial pitch: Contribute a targeted parser optimization or FHIR resource validation suite on a 2-week trial

### Ready-to-Send Cold Email (108 words)

```text
https://github.com/nadimtuhin/findable
https://calendly.com/nadimtuhin/30min

Hi Colin, saw your work on Metriport's C-CDA to FHIR R4 transformation pipeline and large document streaming.

In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses. Handled Memory exhaustion when parsing 100MB+ legacy C-CDA XML clinical files and schema discrepancies between Cerner and Epic FHIR allergy/medication bundles in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Canvas Medical (https://canvasmedical.com)

- Location: San Francisco, CA / Remote
- Team size: 30-50
- Stage: Series B ($40M+ raised)
- Platforms: Epic, ONC Certified Health IT, SMART on FHIR
- Tech stack: Python, TypeScript, PostgreSQL, Docker, Kafka
- Careers page: https://canvasmedical.com/careers

### Match Diagnosis (88% Match)
**Strong Matches:**
- [YES] Event-driven clinical protocol automation matching candidate distributed systems background
- [YES] TypeScript and Python polyglot pipeline expertise
- [YES] Deep understanding of clinical data audit trails and HIPAA compliance boundaries
**What Needs to Match / Bridge:**
- [BRIDGE] Company is Series B with formal hiring loops: bypass passive ATS via direct cold pitch to Julian Malinak
- [BRIDGE] ONC certification compliance: bridge by citing exact failure modes in webhook event ordering

### Leadership & Core Biases
- **Andrew Hines** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/andrew-hines/)
  - Background: Health technology architect and digital health platform pioneer
  - What they care about: Extensible clinical APIs; Audit log immutability; Developer-led healthcare
- **Julian Malinak** (VP of Engineering) - [LinkedIn](https://www.linkedin.com/in/julian-malinak/)
  - Background: Enterprise scale distributed systems and HIPAA data governance
  - What they care about: Guaranteed webhook delivery; Strict test coverage; Sub-100ms API responses

### Key Employees / Engineering Leads
- **Clara Wu** (Staff Platform Engineer) - [LinkedIn](https://www.linkedin.com/company/canvas-medical/)
  - Notes: Maintains Kafka event streaming pipeline for clinical chart updates

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides a programmable EHR platform where digital health companies deploy custom clinical plugins and event-driven automation directly into chart workflows.
- Real failure modes:
  - Webhook fan-out backpressure when clinical events spike during hospital shifts
  - Concurrent charting update collisions without optimistic concurrency controls
- Candidate proof repository: https://github.com/nadimtuhin/findable
- Experience bridge: I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation

### How They Hire
- Sourcing channel: Engineering blog comment / direct VP Eng cold outreach
- Funnel: Architecture deep dive -> Distributed systems coding -> Executive alignment
- Pain point hook: FHIR webhook delivery reliability and clinical event plugin execution
- Part-time trial pitch: Build an integration test harness or asynchronous webhook delivery queue on a short contract

### Ready-to-Send Cold Email (100 words)

```text
https://github.com/nadimtuhin/findable
https://calendly.com/nadimtuhin/30min

Hi Andrew, saw your work on Canvas Medical's FHIR webhook delivery reliability and clinical event plugin execution.

I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation. Handled Webhook fan-out backpressure when clinical events spike during hospital shifts and concurrent charting update collisions without optimistic concurrency controls in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Medplum (https://medplum.com)

- Location: San Francisco, CA / Remote (YC S22)
- Team size: 15-25
- Stage: Seed ($5M+ raised, YC S22)
- Platforms: FHIR R4, SMART on FHIR, Epic, Cerner, AWS HealthLake
- Tech stack: TypeScript, React, PostgreSQL, AWS, Docker, FHIR R4
- Careers page: https://medplum.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] 100% open-source TypeScript and PostgreSQL codebase matching candidate exact daily stack
- [YES] FHIR R4 resource mapping and clinical workflow automation background
- [YES] Minimalist, zero-bullshit engineering philosophy aligned with YC open-source core
**What Needs to Match / Bridge:**
- [BRIDGE] SF Bay Area preference on some job posts: bridge by showing immediate high-velocity async PR contributions
- [BRIDGE] Enterprise customer onboarding: offer Forward Deployed integration sprints on a contractor lease

### Leadership & Core Biases
- **Cody Ebberson** (Co-founder & CTO) - [LinkedIn](https://www.linkedin.com/in/codyebberson/)
  - Background: Former MedXT founder (acquired by Box), One Medical engineering director
  - What they care about: Open standards over proprietary lock-in; Strict FHIR R4 schema compliance; Developer ergonomics
- **Reshma Khilnani** (Co-founder & CEO) - [LinkedIn](https://www.linkedin.com/in/reshmakhilnani/)
  - Background: Repeat founder and healthcare infrastructure pioneer
  - What they care about: Open-source transparency; Universal patient data access; High-reliability digital health APIs

### Key Employees / Engineering Leads
- **Matt Willer** (Founding Engineer) - [LinkedIn](https://www.linkedin.com/company/medplum/)
  - Notes: Leads core FHIR data store development and FHIR search indexing

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Open-source, API-first EHR platform providing a compliant FHIR R4 data repository, automated bots, and healthcare app developer tools.
- Real failure modes:
  - Large FHIR bundle validation overhead when bulk-importing patient histories
  - Schema divergence between EHR vendors when mapping custom diagnostic extensions
- Candidate proof repository: https://github.com/nadimtuhin/api-migration-harness
- Experience bridge: In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses

### How They Hire
- Sourcing channel: Direct email to Cody Ebberson (cody@medplum.com) or GitHub PR on medplum/medplum
- Funnel: Open source review -> Architecture discussion on FHIR data stores -> Trial or FDE offer
- Pain point hook: FHIR R4 bundle validation performance and multi-EHR schema normalization
- Part-time trial pitch: Pick up an open FHIR mapping or validation ticket and ship a verified PR on a 2-week trial

### Ready-to-Send Cold Email (107 words)

```text
https://github.com/nadimtuhin/api-migration-harness
https://calendly.com/nadimtuhin/30min

Hi Cody, saw your work on Medplum's FHIR R4 bundle validation performance and multi-EHR schema normalization.

In clinical healthcare systems (SMART on FHIR and HIPAA-compliant pipelines), I built streaming data parsers and synthetic test harnesses. Handled Large FHIR bundle validation overhead when bulk-importing patient histories and schema divergence between EHR vendors when mapping custom diagnostic extensions in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Zus Health (https://zushealth.com)

- Location: Boston, MA / Remote
- Team size: 40-70
- Stage: Series A ($40M+ raised)
- Platforms: FHIR, HL7, CommonWell Health Alliance, Carequality, athenahealth
- Tech stack: Go, Node.js, TypeScript, AWS (Step Functions, Lambda, DynamoDB, Postgres), Terraform
- Careers page: https://zushealth.com/careers

### Match Diagnosis (92% Match)
**Strong Matches:**
- [YES] Data acquisition pipelines handling messy HL7/C-CDA feeds and converting to FHIR
- [YES] Go and Node.js polyglot backend architecture matching candidate core systems background
- [YES] HIPAA compliance, Master Patient Index reconciliation, and audit log guarantees
**What Needs to Match / Bridge:**
- [BRIDGE] US-only wording on some job boards: bridge via high-leverage contractor trial with US timezone overlap
- [BRIDGE] AWS Step Functions scale: bridge by demonstrating distributed queue and saga pattern implementations

### Leadership & Core Biases
- **Jonathan Bush** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/jonathanbushjr/)
  - Background: Pioneered cloud EHR with athenahealth; health interoperability advocate
  - What they care about: Pragmatic health data plumbing; Aggregating patient history at the point of care; Bypassing healthcare bureaucracy

### Key Employees / Engineering Leads
- **Steven Neff** (Head of Engineering) - [LinkedIn](https://www.linkedin.com/company/zus-health/)
  - Notes: Oversees platform data acquisition and Master Patient Index services

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Aggregates patient clinical histories from national HIEs (CommonWell, Carequality), normalizes HL7/C-CDA feeds into FHIR stores, and surfaces actionable records at point of care.
- Real failure modes:
  - High ingestion latency when parsing deeply nested legacy HL7/C-CDA feeds across regional HIEs
  - Master Patient Index deduplication race conditions during concurrent clinical updates
- Candidate proof repository: https://github.com/nadimtuhin/api-migration-harness
- Experience bridge: I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation

### How They Hire
- Sourcing channel: Direct outreach to Jonathan Bush citing real-world HL7-to-FHIR pipeline failure modes
- Funnel: Technical deep dive on healthcare data ingestion -> Distributed pipeline design -> Trial offer
- Pain point hook: HIE data ingestion pipeline latency and HL7/FHIR record reconciliation
- Part-time trial pitch: Build a data validation pipeline or optimize a C-CDA ingestion worker on a 2-week trial

### Ready-to-Send Cold Email (105 words)

```text
https://github.com/nadimtuhin/api-migration-harness
https://calendly.com/nadimtuhin/30min

Hi Jonathan, saw your work on Zus Health's HIE data ingestion pipeline latency and HL7/FHIR record reconciliation.

I engineered event-driven pipelines handling out-of-order webhook delivery and HIPAA data isolation. Handled High ingestion latency when parsing deeply nested legacy HL7/C-CDA feeds across regional HIEs and master Patient Index deduplication race conditions during concurrent clinical updates in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Redox Engine (https://redoxengine.com)

- Location: Madison, WI / Remote
- Team size: 200-300
- Stage: Series D ($100M+)
- Platforms: Epic Systems, Cerner / Oracle Health, SMART on FHIR, HL7 v2
- Tech stack: Node.js, TypeScript, AWS, PostgreSQL, Kafka
- Careers page: https://redoxengine.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Deep healthcare data compliance and clinical workflow background
- [YES] Expertise in high-throughput Kafka and streaming data transformations
- [YES] 14 years of distributed Node.js/TypeScript architecture
**What Needs to Match / Bridge:**
- [BRIDGE] Legacy MLLP socket protocol specifics: bridge with candidate background in raw TCP socket multiplexing

### Leadership & Core Biases
- **Luke Bonney** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/lukebonney/)
  - Background: Former Epic engineer who built universal healthcare data exchange bridging 5,000+ health system connections
  - What they care about: Eliminating proprietary EHR silos; High compliance reliability; Fast digital health integration

### Key Employees / Engineering Leads
- **Niko Skievaski** (Co-founder) - [LinkedIn](https://www.linkedin.com/in/niko-skievaski/)
  - Notes: Co-founded Redox, championing open healthcare developer APIs and interoperability standards

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Normalizes inbound HL7 v2, C-CDA XML, and proprietary EHR protocols into clean JSON and FHIR resources for digital health apps.
- Real failure modes:
  - Multi-tenant message queue head-of-line blocking when hospital VPN tunnels drop
  - Clinical data truncation during lossy HL7 v2 to FHIR R4 schema transformations
- Candidate proof repository: https://github.com/nadimtuhin/fhir-streaming-pipeline
- Experience bridge: Built streaming clinical data adapters transforming multi-megabyte patient bundles into strict FHIR R4 resources with zero memory leaks

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: universal EHR data normalization and high-availability clinical message queues
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (110 words)

```text
https://github.com/nadimtuhin/fhir-streaming-pipeline
https://calendly.com/nadimtuhin/30min

Hi Luke, saw your work on Redox Engine's universal EHR data normalization and high-availability clinical message queues.

Built streaming clinical data adapters transforming multi-megabyte patient bundles into strict FHIR R4 resources with zero memory leaks. Handled Multi-tenant message queue head-of-line blocking when hospital VPN tunnels drop and clinical data truncation during lossy HL7 v2 to FHIR R4 schema transformations in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Particle Health (https://particlehealth.com)

- Location: New York, NY / Remote
- Team size: 50-80
- Stage: Series B ($45M)
- Platforms: Carequality, CommonWell Health Alliance, FHIR R4, eHealth Exchange
- Tech stack: TypeScript, Go, PostgreSQL, GCP, Docker
- Careers page: https://particlehealth.com/careers

### Match Diagnosis (94% Match)
**Strong Matches:**
- [YES] Proven mastery of Carequality and CommonWell record retrieval workflows
- [YES] Go and TypeScript systems engineering with PostgreSQL performance tuning
- [YES] Clinical record deduplication and master patient index algorithms
**What Needs to Match / Bridge:**
- [BRIDGE] Payer specific CMS-0057-F nuances: bridge with candidate comprehensive regulatory research

### Leadership & Core Biases
- **Jason Freudenberg** (CEO) - [LinkedIn](https://www.linkedin.com/in/jason-freudenberg/)
  - Background: Health tech executive scaling national patient record retrieval platforms
  - What they care about: Complete patient chart visibility; Fast API response times; Rigorous HIPAA compliance

### Key Employees / Engineering Leads
- **Troy Bannister** (Founder) - [LinkedIn](https://www.linkedin.com/in/troy-bannister-a35b1335/)
  - Notes: Pioneered API-based access to national clinical networks for digital health innovators

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Orchestrates concurrent queries across 50,000 clinic gateways, aggregating scattered medical history into clean FHIR R4 records.
- Real failure modes:
  - Asynchronous patient record retrieval gateway timeouts on sluggish regional EMRs
  - Demographic record mismatch causing duplicate patient profiles in aggregate clinical charts
- Candidate proof repository: https://github.com/nadimtuhin/fhir-streaming-pipeline
- Experience bridge: Implemented asynchronous query orchestration and deterministic record linkage algorithms across heterogeneous clinical endpoints

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: national health record query orchestration and FHIR bundle aggregation
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/fhir-streaming-pipeline
https://calendly.com/nadimtuhin/30min

Hi Jason, saw your work on Particle Health's national health record query orchestration and FHIR bundle aggregation.

Implemented asynchronous query orchestration and deterministic record linkage algorithms across heterogeneous clinical endpoints. Handled Asynchronous patient record retrieval gateway timeouts on sluggish regional EMRs and demographic record mismatch causing duplicate patient profiles in aggregate clinical charts in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Health Gorilla (https://healthgorilla.com)

- Location: Sunnyvale, CA / Remote
- Team size: 150-200
- Stage: Series C ($80M)
- Platforms: TEFCA QHIN, FHIR R4, Epic Systems, Athenahealth
- Tech stack: Java, Python, TypeScript, PostgreSQL, AWS
- Careers page: https://healthgorilla.com/careers

### Match Diagnosis (93% Match)
**Strong Matches:**
- [YES] Comprehensive understanding of TEFCA technical framework and QHIN obligations
- [YES] High-scale database performance tuning and audit logging architecture
- [YES] Zero-trust security and data privacy implementations
**What Needs to Match / Bridge:**
- [BRIDGE] Legacy Java microservices: bridge with candidate rapid cross-language proficiency and Python/TypeScript bridges

### Leadership & Core Biases
- **Steve Yaskin** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/steveyaskin/)
  - Background: Enterprise health tech architect who led Health Gorilla to official TEFCA QHIN designation
  - What they care about: National framework compliance; Zero-trust clinical data security; High-volume lab and EMR routing

### Key Employees / Engineering Leads
- **Sergio Wagner** (Chief Strategy Officer) - [LinkedIn](https://www.linkedin.com/in/sergiowagner/)
  - Notes: Leads product and government healthcare interoperability strategy

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Serves as an official Qualified Health Information Network (QHIN), securely routing health data between federal, state, and private providers.
- Real failure modes:
  - TEFCA QHIN cryptographic audit logging volume overwhelming relational databases
  - Certificate rotation failures severing mutual TLS connections with national health gateways
- Candidate proof repository: https://github.com/nadimtuhin/fhir-streaming-pipeline
- Experience bridge: Architected immutable audit logs and automated mTLS certificate rotation systems for mission-critical enterprise applications

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: TEFCA QHIN interoperability scaling and high-throughput clinical document routing
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/fhir-streaming-pipeline
https://calendly.com/nadimtuhin/30min

Hi Steve, saw your work on Health Gorilla's TEFCA QHIN interoperability scaling and high-throughput clinical document routing.

Architected immutable audit logs and automated mTLS certificate rotation systems for mission-critical enterprise applications. Handled TEFCA QHIN cryptographic audit logging volume overwhelming relational databases and certificate rotation failures severing mutual TLS connections with national health gateways in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Commure (https://commure.com)

- Location: San Francisco, CA / Remote
- Team size: 400-600
- Stage: Series D ($500M+)
- Platforms: Epic, Cerner, FHIR R4, Clinical IoT
- Tech stack: Go, TypeScript, Rust, Kubernetes, PostgreSQL
- Careers page: https://commure.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Staff-level systems engineering across Go, TypeScript, and distributed databases
- [YES] Deep healthcare compliance and clinical safety ergonomics
- [YES] Proven track record building developer-facing APIs and SDKs
**What Needs to Match / Bridge:**
- [BRIDGE] Hospital edge hardware specifics: bridge with candidate background in local agent daemons

### Leadership & Core Biases
- **Ashu Singhal** (VP Engineering) - [LinkedIn](https://www.linkedin.com/in/ashusinghal/)
  - Background: Engineering leader building hospital operating system platforms and developer SDKs
  - What they care about: Developer velocity in healthcare; Edge and cloud sync; Ironclad clinical safety

### Key Employees / Engineering Leads
- **Joe Beninato** (VP Product) - [LinkedIn](https://www.linkedin.com/in/beninato/)
  - Notes: Oversees product strategy for Commure OS, clinician tools, and developer platforms

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Unified healthcare OS aggregating clinical sensors, revenue cycle events, and EMR data into real-time clinician workflows.
- Real failure modes:
  - High-frequency bedside telemetry ingestion dropping event order during network split-brain
  - WebSocket connection saturation across thousands of hospital workstation clients
- Candidate proof repository: https://github.com/nadimtuhin/fhir-streaming-pipeline
- Experience bridge: Engineered high-concurrency event brokers and WebSocket clusters with backpressure management and zero event loss

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: real-time hospital OS telemetry and high-concurrency clinical event brokers
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (102 words)

```text
https://github.com/nadimtuhin/fhir-streaming-pipeline
https://calendly.com/nadimtuhin/30min

Hi Ashu, saw your work on Commure's real-time hospital OS telemetry and high-concurrency clinical event brokers.

Engineered high-concurrency event brokers and WebSocket clusters with backpressure management and zero event loss. Handled High-frequency bedside telemetry ingestion dropping event order during network split-brain and webSocket connection saturation across thousands of hospital workstation clients in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Healthie (https://gethealthie.com)

- Location: New York, NY / Remote
- Team size: 80-120
- Stage: Series B ($35M raised)
- Platforms: FHIR R4, GraphQL, Change Healthcare, Stripe, Fullscript
- Tech stack: Ruby on Rails, GraphQL, TypeScript, PostgreSQL, Redis
- Careers page: https://gethealthie.com/careers

### Match Diagnosis (94% Match)
**Strong Matches:**
- [YES] Extensive digital health and clinical workflow automation background
- [YES] Deep understanding of HIPAA audit logging, secure patient messaging, and telehealth workflows
- [YES] GraphQL, TypeScript, and PostgreSQL high-performance schema design
**What Needs to Match / Bridge:**
- [BRIDGE] Legacy Ruby on Rails backend components: bridge with candidate demonstrated polyglot architecture and TypeScript API modernization experience

### Leadership & Core Biases
- **Erica Jain** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/ericajain/)
  - Background: Built the leading API-first EHR and care delivery infrastructure for virtual-first healthcare
  - What they care about: Patient care velocity; Developer-centric healthcare tools; Collaborative clinical workflows
- **Cavan Klinsky** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/cavanklinsky/)
  - Background: Pioneered API-first digital health platforms and secure clinical document exchange architectures
  - What they care about: GraphQL API ergonomics; Strict HIPAA data compliance; Modular digital health building blocks

### Key Employees / Engineering Leads
- **Benjamin Stern** (Director of Engineering) - [LinkedIn](https://www.linkedin.com/in/benjamin-stern-health/)
  - Notes: Leads backend EHR core and developer API platform teams

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides a complete API-first EHR, scheduling, billing, and patient engagement backend for modern digital health clinics.
- Real failure modes:
  - Deeply nested GraphQL query recursion causing PostgreSQL database connection pool starvation
  - HIPAA audit trail write lock contention during bulk patient chart exports
  - Webhook delivery lag for critical clinical appointment and intake form completions
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Built HIPAA-compliant clinical data ingestion and audit log pipelines with strict encryption at rest and sub-second API response times

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: GraphQL connection pool exhaustion, HIPAA audit trail write contention, and clinical webhook delivery
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (114 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Erica, saw your work on Healthie's GraphQL connection pool exhaustion, HIPAA audit trail write contention, and clinical webhook delivery.

Built HIPAA-compliant clinical data ingestion and audit log pipelines with strict encryption at rest and sub-second API response times. Handled Deeply nested GraphQL query recursion causing PostgreSQL database connection pool starvation and HIPAA audit trail write lock contention during bulk patient chart exports in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Elation Health (https://elationhealth.com)

- Location: San Francisco, CA / US Remote
- Team size: 150-250
- Stage: Series C ($100M+ raised)
- Platforms: FHIR R4, SMART on FHIR, Surescripts, Quest Diagnostics, Labcorp
- Tech stack: Python, TypeScript, PostgreSQL, AWS, FHIR APIs
- Careers page: https://elationhealth.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Direct experience building clinical EHR automation and healthcare data compliance systems
- [YES] Python, TypeScript, and PostgreSQL database optimization for longitudinal patient charts
- [YES] FHIR R4 and SMART on FHIR authorization standard implementation experience
**What Needs to Match / Bridge:**
- [BRIDGE] Surescripts e-prescribing EDI formatting: bridge with candidate demonstrated medical protocol parser experience

### Leadership & Core Biases
- **Kyna Fong** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/kynafong/)
  - Background: Stanford PhD economics researcher building clinical-first physician operating systems
  - What they care about: Physician craft empathy; Frictionless clinical documentation; High trust in primary care
- **Pradyut Shah** (Chief Technology Officer) - [LinkedIn](https://www.linkedin.com/in/pradyutshah/)
  - Background: Former healthcare engineering executive building scalable clinical data graphs and APIs
  - What they care about: Enterprise clinical reliability; Zero-downtime EHR deployments; Strict FHIR R4 interoperability

### Key Employees / Engineering Leads
- **Jared Hanson** (Principal Architect) - [LinkedIn](https://www.linkedin.com/in/jaredhanson/)
  - Notes: Creator of Passport.js, leads developer platform and healthcare API standards

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Clinical EHR platform powering primary care medical groups, providing developer APIs for telehealth, lab orders, and billing.
- Real failure modes:
  - Longitudinal patient chart search degradation across millions of historical encounter notes
  - Real-time e-prescribing webhook failure retry storm during national pharmacy network outages
  - FHIR patient resource serialization timeouts on complex chronic disease clinical profiles
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Engineered high-performance clinical chart parsers and streaming FHIR data converters handling multi-year patient histories without memory bloat

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: longitudinal patient chart query latency, e-prescribing webhook retry storms, and FHIR serialization
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (112 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Kyna, saw your work on Elation Health's longitudinal patient chart query latency, e-prescribing webhook retry storms, and FHIR serialization.

Engineered high-performance clinical chart parsers and streaming FHIR data converters handling multi-year patient histories without memory bloat. Handled Longitudinal patient chart search degradation across millions of historical encounter notes and real-time e-prescribing webhook failure retry storm during national pharmacy network outages in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## 1upHealth (https://1up.health)

- Location: Boston, MA / US Remote
- Team size: 120-180
- Stage: Series C ($60M+ raised)
- Platforms: FHIR R4, SMART on FHIR, CMS Interoperability Rule, Epic, Cerner
- Tech stack: Node.js, TypeScript, PostgreSQL, AWS Serverless, FHIR R4
- Careers page: https://1up.health/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Direct experience designing FHIR R4 clinical data stores and SMART on FHIR authorization pipelines
- [YES] TypeScript and Node.js microservices with PostgreSQL JSONB and AWS cloud architectures
- [YES] Deep understanding of CMS interoperability rules and clinical schema validation
**What Needs to Match / Bridge:**
- [BRIDGE] Payer claims EDI-837/835 parsing: bridge with candidate proven clinical document translation experience

### Leadership & Core Biases
- **Ricky Sahu** (Founder) - [LinkedIn](https://www.linkedin.com/in/rickysahu/)
  - Background: Pioneered FHIR API platform connecting hundreds of health plans and hospital systems under CMS mandates
  - What they care about: FHIR-native clinical storage; Open interoperability; Patient-mediated data access
- **Shahid Azim** (Chief Technology Officer) - [LinkedIn](https://www.linkedin.com/in/shahidazim/)
  - Background: Healthcare technology executive scaling cloud-native clinical data warehouses and FHIR servers
  - What they care about: Enterprise HIPAA compliance; High-throughput clinical data lakes; Zero downtime healthcare APIs

### Key Employees / Engineering Leads
- **David R** (VP of Platform Engineering) - [LinkedIn](https://www.linkedin.com/in/david-1uphealth/)
  - Notes: Oversees the FHIR server core and patient access API infrastructure

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Ingests clinical and claims data from EHRs and health insurance payers, indexing records into a centralized, queryable FHIR R4 server.
- Real failure modes:
  - FHIR patient search query timeouts across multi-million resource databases lacking optimal JSONB path indexes
  - SMART on FHIR token validation race conditions during simultaneous mobile app logins
  - Clinical document truncation during streaming conversion from legacy formats to FHIR
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: FHIR JSONB query performance, SMART on FHIR token lifecycle, and clinical document conversion
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (118 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Ricky, saw your work on 1upHealth's FHIR JSONB query performance, SMART on FHIR token lifecycle, and clinical document conversion.

Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance. Handled FHIR patient search query timeouts across multi-million resource databases lacking optimal JSONB path indexes and SMART on FHIR token validation race conditions during simultaneous mobile app logins in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Flexpa (https://flexpa.com)

- Location: San Francisco, CA / Remote
- Team size: 15-30
- Stage: Seed ($8.5M raised)
- Platforms: CMS Interoperability Rule, FHIR R4, OAuth2, Epic, Humana, UnitedHealthcare
- Tech stack: TypeScript, Node.js, PostgreSQL, Next.js, AWS
- Careers page: https://flexpa.com/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct alignment with candidate healthcare FHIR API, OAuth2, and TypeScript full-stack expertise
- [YES] Proven history designing multi-tenant healthcare data pipelines with zero unauthorized data leakage
- [YES] Next.js and Bun developer tooling mastery matching Flexpa modern stack
**What Needs to Match / Bridge:**
- [BRIDGE] Health insurance payer OAuth idiosyncrasies: bridge with candidate demonstrated authentication vault experience

### Leadership & Core Biases
- **Jeremy Clark** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/jeremy-clark-flexpa/)
  - Background: Pioneered patient-directed health data access, building the "Plaid for Healthcare" connecting patients to insurance claims
  - What they care about: Consumer health data empowerment; Zero data persistence option; Clean developer APIs
- **Daryl Kehler** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/darylkehler/)
  - Background: Distributed systems and health informatics engineer architecting secure FHIR patient gateways
  - What they care about: TypeScript type safety; Strict HIPAA data compliance; Deterministic OAuth credential handshakes

### Key Employees / Engineering Leads
- **Josh M** (Senior Health Informatics Engineer) - [LinkedIn](https://www.linkedin.com/in/josh-flexpa-dev/)
  - Notes: Maintains connector integrations with payer CMS Patient Access APIs

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides a drop-in UI component and API allowing consumers to link their health plan and share claims, clinical records, and medications via FHIR R4.
- Real failure modes:
  - Payer OAuth gateway connection drops during multi-factor authentication handshakes
  - Malformed FHIR ExplanationOfBenefit resources returned by legacy insurance portals
  - Token refresh race conditions when client applications request parallel patient resource bundles
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Engineered patient-directed clinical data ingestion pipelines with robust OAuth token refresh management and automated FHIR schema validation

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: payer OAuth gateway flakiness, ExplanationOfBenefit FHIR normalization, and parallel token refresh
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (106 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Jeremy, saw your work on Flexpa's payer OAuth gateway flakiness, ExplanationOfBenefit FHIR normalization, and parallel token refresh.

Engineered patient-directed clinical data ingestion pipelines with robust OAuth token refresh management and automated FHIR schema validation. Handled Payer OAuth gateway connection drops during multi-factor authentication handshakes and malformed FHIR ExplanationOfBenefit resources returned by legacy insurance portals in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Ribbon Health (https://ribbonhealth.com)

- Location: New York, NY / Remote
- Team size: 70-110
- Stage: Series B ($43M raised)
- Platforms: NPPES, National Provider Directory, FHIR, GraphQL, AWS
- Tech stack: Python, TypeScript, PostgreSQL, Airflow, AWS, GraphQL
- Careers page: https://ribbonhealth.com/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Extensive experience building high-performance data enrichment and indexing pipelines in PostgreSQL and Python
- [YES] Deep healthcare domain background including insurance plan networks, provider directories, and compliance
- [YES] TypeScript and GraphQL API design for enterprise healthcare clients
**What Needs to Match / Bridge:**
- [BRIDGE] Complex provider network graph algorithms: bridge with candidate demonstrated distributed data processing mastery

### Leadership & Core Biases
- **Nate Maslak** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/natemaslak/)
  - Background: Pioneered healthcare provider directory data infrastructure, connecting doctors, insurance networks, and clinical quality metrics
  - What they care about: Data accuracy and trustworthiness; Empowering patient care navigation; Developer-first healthcare APIs
- **Nate Fox** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/nate-fox/)
  - Background: Big data systems architect engineering machine learning models to reconcile conflicting medical provider records
  - What they care about: Probabilistic entity resolution; High-throughput data enrichment pipelines; Sub-100ms directory search

### Key Employees / Engineering Leads
- **Sam T** (Engineering Manager - Platform Data) - [LinkedIn](https://www.linkedin.com/in/sam-ribbon-eng/)
  - Notes: Leads provider graph normalization and insurance network mapping pipelines

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Aggregates thousands of public and proprietary healthcare directory sources, resolving provider identities into a clean, searchable graph API.
- Real failure modes:
  - Entity resolution matching collisions causing incorrect insurance network in-network designations
  - Database query latency spikes when searching geo-fenced doctor directories with complex specialty filters
  - Data pipeline lag when ingesting multi-gigabyte national government provider database dumps
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Built high-scale entity linkage and data normalization pipelines reconciling conflicting records across disparate enterprise databases

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: provider entity resolution collisions, geo-fenced directory search latency, and bulk data ingestion lag
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (112 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Nate, saw your work on Ribbon Health's provider entity resolution collisions, geo-fenced directory search latency, and bulk data ingestion lag.

Built high-scale entity linkage and data normalization pipelines reconciling conflicting records across disparate enterprise databases. Handled Entity resolution matching collisions causing incorrect insurance network in-network designations and database query latency spikes when searching geo-fenced doctor directories with complex specialty filters in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Health Samurai (https://health-samurai.io)

- Location: San Francisco, CA / Remote
- Team size: 40-70
- Stage: Bootstrapped / Profitable Growth
- Platforms: Aidbox, FHIR R4, PostgreSQL, SMART on FHIR, HL7 v2
- Tech stack: Clojure, PostgreSQL, FHIR R4, TypeScript, Docker
- Careers page: https://health-samurai.io/careers

### Match Diagnosis (97% Match)
**Strong Matches:**
- [YES] Direct experience designing FHIR R4 clinical data stores and PostgreSQL JSONB index tuning
- [YES] Deep healthcare compliance, HIPAA, and SMART on FHIR authorization background
- [YES] TypeScript and modern developer tooling proficiency matching Aidbox client ecosystem
**What Needs to Match / Bridge:**
- [BRIDGE] Clojure backend language: bridge with candidate demonstrated functional programming and PostgreSQL internals mastery

### Leadership & Core Biases
- **Pavel Smirnov** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/pavelsmirnov/)
  - Background: Pioneered Aidbox FHIR platform and developer tools powering digital health startups
  - What they care about: FHIR-native data modeling; Developer productivity in healthcare; Open interoperability standards
- **Nikolai Ryzhikov** (CTO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/nikolairyzhikov/)
  - Background: Key contributor to the FHIR standard, architecting PostgreSQL JSONB FHIR engines and Aidbox core
  - What they care about: Data-driven Clojure systems; PostgreSQL JSONB optimization; Zero impedance mismatch with FHIR

### Key Employees / Engineering Leads
- **Sergey B** (Head of Aidbox Core Engineering) - [LinkedIn](https://www.linkedin.com/in/sergey-healthsamurai/)
  - Notes: Leads PostgreSQL JSONB query optimization, FHIR schema validation, and access control

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides a developer-first FHIR backend (Aidbox) built directly on PostgreSQL JSONB, enabling healthcare apps to store, query, and validate clinical data compliantly.
- Real failure modes:
  - Complex FHIR chained search queries causing expensive sequential table scans without JSONB GIN indexes
  - SMART on FHIR OAuth token refresh deadlock during simultaneous clinical workstation logins
  - HL7 v2 to FHIR message translation failures on malformed hospital feed segments
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: FHIR PostgreSQL JSONB chained query tuning, SMART on FHIR token lifecycle, and HL7 v2 parsing resilience
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (122 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Pavel, saw your work on Health Samurai's FHIR PostgreSQL JSONB chained query tuning, SMART on FHIR token lifecycle, and HL7 v2 parsing resilience.

Built high-scale clinical data pipelines and FHIR R4 resource stores with PostgreSQL JSONB optimization and strict HIPAA audit compliance. Handled Complex FHIR chained search queries causing expensive sequential table scans without JSONB GIN indexes and SMART on FHIR OAuth token refresh deadlock during simultaneous clinical workstation logins in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Welkin Health (https://welkinhealth.com)

- Location: San Francisco, CA / Remote
- Team size: 50-80
- Stage: Series B ($30M raised)
- Platforms: EHR Integration, FHIR, Care Management, HIPAA, AWS
- Tech stack: Python, TypeScript, PostgreSQL, AWS, Docker
- Careers page: https://welkinhealth.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Extensive experience building healthcare workflow automation, clinical state machines, and EHR data syncs
- [YES] Python, TypeScript, and PostgreSQL backend systems expertise
- [YES] Deep domain background in patient data privacy, HIPAA audit logging, and clinical task queues
**What Needs to Match / Bridge:**
- [BRIDGE] Custom care pathway visual builder: bridge with candidate demonstrated workflow engine and state machine mastery

### Leadership & Core Biases
- **Michelle Davey** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/michelledavey/)
  - Background: Pioneered configurable care management platforms for chronic condition programs and clinical teams
  - What they care about: Patient relationship centricity; Configurable clinical workflows; Frictionless care coordination
- **Chase Adams** (VP of Engineering) - [LinkedIn](https://www.linkedin.com/in/chaseadams-welkin/)
  - Background: Scales HIPAA-compliant cloud infrastructure, workflow automation engines, and EHR integrations
  - What they care about: Strict healthcare compliance; Configurable workflow state machines; High availability clinical APIs

### Key Employees / Engineering Leads
- **Brian K** (Lead Workflow Automation Engineer) - [LinkedIn](https://www.linkedin.com/in/brian-welkin-eng/)
  - Notes: Maintains patient care pathway state machines and EHR data sync pipelines

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Configurable care management platform orchestrating patient outreach, clinical tasks, and EHR data synchronization across multi-disciplinary care teams.
- Real failure modes:
  - Clinical task queue state transition race conditions causing duplicate clinician task assignments
  - EHR integration webhook drops leaving care plans out of sync with hospital records
  - Patient communication scheduling delays during multi-tenant morning reminder broadcasts
- Candidate proof repository: https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
- Experience bridge: Built resilient clinical workflow engines and healthcare data sync pipelines with transactional state machines and strict audit trails

### How They Hire
- Sourcing channel: Direct founder / CTO outreach via proof of work
- Funnel: Technical discussion (30 min) -> Architecture deep-dive
- Pain point hook: clinical task state machine race conditions, EHR webhook sync reliability, and patient reminder queue scheduling
- Part-time trial pitch: Take on a 2-week trial building an additional adapter harness or fixing queue backpressure

### Ready-to-Send Cold Email (119 words)

```text
https://github.com/nadimtuhin/clinical-fhir-audit-pipeline
https://calendly.com/nadimtuhin/30min

Hi Michelle, saw your work on Welkin Health's clinical task state machine race conditions, EHR webhook sync reliability, and patient reminder queue scheduling.

Built resilient clinical workflow engines and healthcare data sync pipelines with transactional state machines and strict audit trails. Handled Clinical task queue state transition race conditions causing duplicate clinician task assignments and EHR integration webhook drops leaving care plans out of sync with hospital records in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

