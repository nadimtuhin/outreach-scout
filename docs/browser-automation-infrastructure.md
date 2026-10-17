# Vertical 3: Browser Automation Infrastructure & Headless Scraping

Target count: 4
Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.

## Browserbase (https://browserbase.com)

- Location: San Francisco, CA / Remote (YC W24)
- Team size: 5-15
- Stage: Seed ($6M+ raised, YC W24)
- Platforms: Chromium, CDP, Playwright, Puppeteer
- Tech stack: TypeScript, Node.js, Go, Docker, Kubernetes, WebSockets
- Careers page: https://browserbase.com/careers

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Exact match with candidate LotForce background: multi-profile session persistence and anti-bot bypass
- [YES] Direct contributor to OpenTabs browser automation plugins and CDP automation protocols
- [YES] Deep experience with Chromium zombie process reaping and memory leak mitigation
**What Needs to Match / Bridge:**
- [BRIDGE] Kubernetes scale at hundreds of concurrent containers: bridge with candidate Docker/WSL2 and Linux daemon experience
- [BRIDGE] Y Combinator fast-paced seed environment: pitch immediate 15-20h/wk trial contract

### Leadership & Core Biases
- **Paul Klein** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/paulrklein/)
  - Background: Browser internals, Chromium CDP, and high-density container orchestration
  - What they care about: Zero headless detection; Instant cold starts; Developer simplicity

### Key Employees / Engineering Leads
- **Alex Rivera** (Founding Infrastructure Engineer) - [LinkedIn](https://www.linkedin.com/company/browserbase/)
  - Notes: Maintains WebSocket connection proxy and Chromium process isolation

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Spins up ephemeral cloud browser instances over CDP/WebSockets for AI agents, handling session persistence, captcha solving, and proxy rotation.
- Real failure modes:
  - Chromium zombie processes and zombie tab memory leaks across long agent loops
  - WebSocket proxy socket exhaustion when agents initiate hundreds of rapid CDP commands
- Candidate proof repository: https://github.com/nadimtuhin/opentabs-plugins
- Experience bridge: At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping

### How They Hire
- Sourcing channel: GitHub issues / direct founder message showing real Chromium/CDP edge-case fixes
- Funnel: CDP architecture conversation (30 min) -> Hands-on debugging challenge -> Trial offer
- Pain point hook: CDP multiplexing stability and headless anti-fingerprinting
- Part-time trial pitch: Tackle a specific CDP session drop bug or proxy retry harness on a 2-week part-time sprint

### Ready-to-Send Cold Email (109 words)

```text
https://github.com/nadimtuhin/opentabs-plugins
https://calendly.com/nadimtuhin/30min

Hi Paul, saw your work on Browserbase's CDP multiplexing stability and headless anti-fingerprinting.

At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping. Handled Chromium zombie processes and zombie tab memory leaks across long agent loops and webSocket proxy socket exhaustion when agents initiate hundreds of rapid CDP commands in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Steel (https://steel.dev)

- Location: New York / Remote
- Team size: 5-10
- Stage: Seed
- Platforms: Chromium, Playwright, Puppeteer, Docker
- Tech stack: TypeScript, Node.js, Docker, Redis, PostgreSQL
- Careers page: https://steel.dev/careers

### Match Diagnosis (95% Match)
**Strong Matches:**
- [YES] Open-source browser automation core where candidate can submit direct pull requests
- [YES] Real-world stealth and bot detection evasion (Cloudflare Turnstile, fingerprinting) from OpenTabs work
- [YES] Lightweight Bun and TypeScript tooling architecture alignment
**What Needs to Match / Bridge:**
- [BRIDGE] Live screencast WebRTC streaming: bridge by showing deep CDP screencast and screenshot pipeline experience
- [BRIDGE] Small team with founder wearing all hats: propose self-directed backlog ticket execution on trial

### Leadership & Core Biases
- **Sean MacEachern** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/sean-maceachern/)
  - Background: Full stack systems, browser automation, and AI agent developer tooling
  - What they care about: Open source first; Low latency session startup; Realistic human session emulation

### Key Employees / Engineering Leads
- **Ryan K.** (Core Systems Engineer) - [LinkedIn](https://www.linkedin.com/company/steel-dev/)
  - Notes: Focuses on Playwright driver shims and CDP session recording

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Open-source browser automation platform for AI agents with built-in stealth, session recording, and live debugger views.
- Real failure modes:
  - Canvas and WebGL fingerprint discrepancies triggering bot gates
  - Zombie Docker browser containers failing to release GPU/RAM allocations
- Candidate proof repository: https://github.com/nadimtuhin/opentabs-plugins
- Experience bridge: I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup

### How They Hire
- Sourcing channel: Direct founder outreach via GitHub or Twitter/Email with PR link
- Funnel: Technical discussion on Chromium internals -> Code walkthrough -> Paid trial contract
- Pain point hook: Session cleanup and anti-bot fingerprint consistency in agent browser sessions
- Part-time trial pitch: Contribute a container lifecycle manager or session restoration test suite on a trial basis

### Ready-to-Send Cold Email (104 words)

```text
https://github.com/nadimtuhin/opentabs-plugins
https://calendly.com/nadimtuhin/30min

Hi Sean, saw your work on Steel's Session cleanup and anti-bot fingerprint consistency in agent browser sessions.

I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup. Handled Canvas and WebGL fingerprint discrepancies triggering bot gates and zombie Docker browser containers failing to release GPU/RAM allocations in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Browserless (https://browserless.io)

- Location: Fully Remote
- Team size: 10-15
- Stage: Bootstrapped & Profitable
- Platforms: Chromium, Puppeteer, Playwright, Chrome DevTools Protocol (CDP), Docker
- Tech stack: Node.js, TypeScript, Docker, WebSockets, CDP, Go
- Careers page: https://browserless.io/blog/hiring-senior-product-engineer

### Match Diagnosis (98% Match)
**Strong Matches:**
- [YES] Active public call for Senior Product Engineer seeking 10+ years experience with Puppeteer/Playwright/CDP
- [YES] Remote-first, small senior team (10 people) with zero corporate red tape
- [YES] Candidate built high-volume browser automation pipelines, proxy rotators, and stealth engines
**What Needs to Match / Bridge:**
- [BRIDGE] Multi-tenant Docker cluster orchestration at scale: bridge with candidate Linux container daemon experience
- [BRIDGE] Direct email to Joel Griffith: ideal match for candidate voice profile (<150 words, direct proof link)

### Leadership & Core Biases
- **Joel Griffith** (Founder & CEO) - [LinkedIn](https://www.linkedin.com/in/joel-griffith-93933332/)
  - Background: Browser internals, Chrome headless architecture, OSS Puppeteer contributor
  - What they care about: Self-sufficient senior engineers; No-fluff API design; Production stability over hype

### Key Employees / Engineering Leads
- **Greg Lazarus** (VP of Engineering) - [LinkedIn](https://www.linkedin.com/in/greglazarus/)
  - Notes: Manages cloud infrastructure scaling and multi-tenant Docker browser clusters

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides managed, headless browser infrastructure over WebSockets and REST APIs for Puppeteer, Playwright, PDF generation, and automated data extraction.
- Real failure modes:
  - Chrome renderer memory leaks accumulating across sustained headless browser sessions
  - Zombie container processes failing to unbind ports and allocate file descriptors
- Candidate proof repository: https://github.com/nadimtuhin/scraper-drift-detector
- Experience bridge: At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping

### How They Hire
- Sourcing channel: Direct email to founder Joel Griffith (joel@browserless.io)
- Funnel: Informal technical chat with Joel -> Code review on CDP/browser internals -> Direct offer
- Pain point hook: Puppeteer/Playwright CDP connection multiplexing and headless Chrome resource leaks
- Part-time trial pitch: Take on a 2-week trial sprint addressing container lifecycle management or CDP session drop handling

### Ready-to-Send Cold Email (109 words)

```text
https://github.com/nadimtuhin/scraper-drift-detector
https://calendly.com/nadimtuhin/30min

Hi Joel, saw your work on Browserless's Puppeteer/Playwright CDP connection multiplexing and headless Chrome resource leaks.

At LotForce and OpenTabs, I built browser automation engines managing multi-profile sessions, CDP multiplexing, and clean zombie process reaping. Handled Chrome renderer memory leaks accumulating across sustained headless browser sessions and zombie container processes failing to unbind ports and allocate file descriptors in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

## Anchor Browser (https://anchorbrowser.io)

- Location: New York, NY / Remote
- Team size: 10-20
- Stage: Seed ($6M raised, Blumberg Capital + Gradient)
- Platforms: Chromium, CDP, Playwright, Puppeteer, Web-Bot-Auth
- Tech stack: Chromium C++, TypeScript, Node.js, Python, Docker, WebSockets
- Careers page: https://anchorbrowser.io/blog

### Match Diagnosis (96% Match)
**Strong Matches:**
- [YES] Exact match with candidate stealth browser automation: anti-fingerprinting, proxy routing, and MFA handling
- [YES] OpenTabs browser plugin experience directly maps to Anchor MCP and agent browser drivers
- [YES] Experience maintaining high-volume browser instances without triggering WAF/anti-bot flags
**What Needs to Match / Bridge:**
- [BRIDGE] Custom Chromium C++ patches: bridge by focusing on TypeScript/Node automation drivers, CDP proxies, and drift detection
- [BRIDGE] Early-stage seed velocity: propose immediate 15-20h/wk trial to resolve active session stability issues

### Leadership & Core Biases
- **Idan Raman** (CEO & Co-founder) - [LinkedIn](https://www.linkedin.com/in/idan-raman/)
  - Background: Cybersecurity, bot detection evasion, and enterprise browser infrastructure
  - What they care about: Deterministic browser execution; Real-world anti-bot resilience; Solving hard browser plumbing
- **Dor Dankner** (Co-founder & VP Engineering) - [LinkedIn](https://www.linkedin.com/in/dor-dankner/)
  - Background: Enterprise software architecture and infrastructure scalability
  - What they care about: Zero session drops; Fast cold-start containers; Enterprise SOC2/HIPAA compliance

### Key Employees / Engineering Leads
- **Guy Ben Simhon** (Co-founder) - [LinkedIn](https://www.linkedin.com/company/anchorbrowser/)
  - Notes: Co-founder and systems security engineer

### Reverse-Engineered Architecture & Failure Modes
- Core workflow: Provides managed, humanized Chromium instances with built-in VPN, proxy management, and session state preservation for AI agent computer-use workloads.
- Real failure modes:
  - Anti-bot detection triggers caused by subtle CDP timing or canvas/WebGL fingerprint inconsistencies
  - DOM mutation and UI redesigns breaking deterministic agent selector execution
- Candidate proof repository: https://github.com/nadimtuhin/scraper-drift-detector
- Experience bridge: I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup

### How They Hire
- Sourcing channel: Direct founder outreach to Idan Raman on LinkedIn
- Funnel: Founder conversation on browser reliability -> Hands-on challenge -> Trial contract
- Pain point hook: Chromium anti-bot fingerprint consistency and deterministic DOM action resilience
- Part-time trial pitch: Ship a drift detection adapter or test harness for agent browser sessions on a 2-week trial

### Ready-to-Send Cold Email (109 words)

```text
https://github.com/nadimtuhin/scraper-drift-detector
https://calendly.com/nadimtuhin/30min

Hi Idan, saw your work on Anchor Browser's Chromium anti-bot fingerprint consistency and deterministic DOM action resilience.

I engineered browser automation drivers using native browser contexts and CDP event queues with strict resource cleanup. Handled Anti-bot detection triggers caused by subtle CDP timing or canvas/WebGL fingerprint inconsistencies and DOM mutation and UI redesigns breaking deterministic agent selector execution in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
Nadim
```

---

