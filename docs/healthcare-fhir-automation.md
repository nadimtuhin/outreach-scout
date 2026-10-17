# Vertical 2: Healthcare Automation on EHR (Epic / SMART on FHIR)

Target count: 4
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

