# Outreach Scout

Automated outbound scouting, technical reverse-engineering, and lead profiling pipeline for integration-heavy B2B SaaS startups. Designed for high-signal direct outreach to founders and technical leaders.

Includes a local zero-auth web dashboard, a fast interactive CLI, automated SQLite synchronization, and remote Cloudflare deployment gated with HTTP Basic Auth.

## Core Features

- **Lead Profiling & Architecture Reverse-Engineering**: Profiles platforms, failure modes, engineering leaders, and key employee contacts.
- **Match Diagnosis**: Generates match percentage scores, strong alignment points, and technical bridges or gaps for each target.
- **Deterministic High-Signal Pitches**: Generates crisp, proof-driven outreach drafts strictly under 150 words following proven executive outreach rules (bare proof URLs in lines 1-2, real production failure modes, zero buzzwords, no en/em dashes).
- **Interactive CLI**: Terminal commands to list, inspect, copy to clipboard, and update lead pipeline status.
- **Dual Web Dashboard**:
  - **Local Mode**: Zero authentication required on `http://localhost:3033/`.
  - **Remote Cloudflare Mode**: Deploys to Cloudflare Pages edge with HTTP Basic Auth protection.
- **OpenTabs Browser Integration**: Uses OpenTabs MCP client to extract DOM data from live authenticated Chrome sessions when navigating bot walls.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Language**: TypeScript (strict mode, `noImplicitOverride`, `noUnusedLocals`)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- **Database**: SQLite via `bun:sqlite`
- **Remote Host**: Cloudflare Pages + Edge Worker Middleware

## Quickstart

### 1. Install Dependencies

```bash
bun install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 3. Seed Database & Export Dossiers

```bash
bun run scout
```

This populates `scout.sqlite` and outputs structured markdown dossiers in `docs/`.

### 4. Run the Local Web Dashboard

```bash
bun run scout --serve
```

Open `http://localhost:3033/` in your browser. Local access is unauthenticated.

### 5. Use the CLI

```bash
# List all scouted leads
bun run cli list

# Inspect detailed profile, match breakdown, and cold email draft
bun run cli show craver

# Copy cold email draft directly to macOS clipboard
bun run cli copy craver

# Update lead status in SQLite
bun run cli status craver sent
```

### 6. Sync & Deploy to Remote Cloudflare Pages

```bash
bun run sync
```

Deploys the static assets and edge authentication worker to Cloudflare Pages. The remote endpoint requires HTTP Basic Auth (`OUTREACH_AUTH_USER` / `OUTREACH_AUTH_PASS`).

## Project Structure

```text
├── docs/                      # Exported markdown dossiers by vertical
│   ├── food-pos-integration.md
│   ├── healthcare-fhir-automation.md
│   ├── browser-automation-infrastructure.md
│   └── master-pipeline.md
├── src/
│   ├── cli.ts                 # Interactive CLI tool
│   ├── db.ts                  # SQLite persistence layer via bun:sqlite
│   ├── export-md.ts           # Markdown dossier exporter
│   ├── index.ts               # Core runner
│   ├── opentabs-client.ts     # OpenTabs MCP client for live browser extraction
│   ├── pitch-generator.ts     # High-signal cold outreach copy generator
│   ├── server.ts              # Local dashboard server (zero auth)
│   ├── sync-remote.ts         # Remote Cloudflare Pages deployment script
│   ├── targets-data.ts        # Seed target profiles & architectural failure modes
│   └── types.ts               # Type definitions
├── .oxlintrc.json             # Oxlint configuration
├── tsconfig.json              # Strict TypeScript configuration
└── package.json
```

## License

[MIT](LICENSE)
