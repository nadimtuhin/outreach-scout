import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { TargetDossier, VerticalCategory } from './types.ts';

const VERTICAL_TITLES: Record<VerticalCategory, string> = {
  food_pos_integration: 'Vertical 1: Food POS & Ordering SaaS (Square / Toast / Clover)',
  healthcare_fhir_automation: 'Vertical 2: Healthcare Automation on EHR (Epic / SMART on FHIR)',
  browser_automation_infrastructure: 'Vertical 3: Browser Automation Infrastructure & Headless Scraping',
};

export function exportMarkdownDocs(dossiers: TargetDossier[], outDir: string): void {
  mkdirSync(outDir, { recursive: true });

  const grouped: Record<VerticalCategory, TargetDossier[]> = {
    food_pos_integration: [],
    healthcare_fhir_automation: [],
    browser_automation_infrastructure: [],
  };

  for (const d of dossiers) {
    grouped[d.metadata.vertical].push(d);
  }

  // 1. Export individual vertical dossiers
  for (const [vert, items] of Object.entries(grouped) as Array<[VerticalCategory, TargetDossier[]]>) {
    const filename = `${vert.replace(/_/g, '-')}.md`;
    let content = `# ${VERTICAL_TITLES[vert]}\n\n`;
    content += `Target count: ${items.length}\n`;
    content += `Strategy: Direct founder/CTO outreach offering part-time 15-20h trial on specific backlog integrations.\n\n`;

    for (const item of items) {
      content += `## ${item.metadata.name} (${item.metadata.website})\n\n`;
      content += `- Location: ${item.metadata.headquarters}\n`;
      content += `- Team size: ${item.metadata.estimatedEmployees}\n`;
      content += `- Stage: ${item.metadata.fundingStage}\n`;
      content += `- Platforms: ${item.metadata.platformEcosystem.join(', ')}\n`;
      content += `- Tech stack: ${item.metadata.techStack.join(', ')}\n`;
      if (item.metadata.careersUrl) {
        content += `- Careers page: ${item.metadata.careersUrl}\n`;
      }
      content += `\n`;

      content += `### Match Diagnosis (${item.matchAnalysis.score}% Match)\n`;
      content += `**Strong Matches:**\n`;
      for (const sm of item.matchAnalysis.strongMatches) {
        content += `- [YES] ${sm}\n`;
      }
      content += `**What Needs to Match / Bridge:**\n`;
      for (const gb of item.matchAnalysis.gapsOrBridges) {
        content += `- [BRIDGE] ${gb}\n`;
      }
      content += `\n`;

      content += `### Leadership & Core Biases\n`;
      for (const leader of item.leadership) {
        content += `- **${leader.name}** (${leader.role}) - [LinkedIn](${leader.linkedInUrl})\n`;
        content += `  - Background: ${leader.technicalBackground}\n`;
        content += `  - What they care about: ${leader.coreBiases.join('; ')}\n`;
      }
      content += `\n`;

      if (item.keyEmployees.length > 0) {
        content += `### Key Employees / Engineering Leads\n`;
        for (const emp of item.keyEmployees) {
          content += `- **${emp.name}** (${emp.role}) - [LinkedIn](${emp.linkedInUrl})\n`;
          if (emp.notes) {
            content += `  - Notes: ${emp.notes}\n`;
          }
        }
        content += `\n`;
      }

      content += `### Reverse-Engineered Architecture & Failure Modes\n`;
      content += `- Core workflow: ${item.architecture.coreWorkflow}\n`;
      content += `- Real failure modes:\n`;
      for (const mode of item.architecture.criticalFailureModes) {
        content += `  - ${mode}\n`;
      }
      content += `- Candidate proof repository: ${item.architecture.candidateMatchingProofRepo}\n`;
      content += `- Experience bridge: ${item.architecture.candidateExperienceBridge}\n\n`;

      content += `### How They Hire\n`;
      content += `- Sourcing channel: ${item.hiring.sourcingChannel}\n`;
      content += `- Funnel: ${item.hiring.interviewFormat}\n`;
      content += `- Pain point hook: ${item.hiring.painPointHook}\n`;
      content += `- Part-time trial pitch: ${item.hiring.partTimeTrialProposal}\n\n`;

      const words = item.coldOutreachDraft.trim().split(/\s+/).length;
      content += `### Ready-to-Send Cold Email (${words} words)\n\n`;
      content += `\`\`\`text\n${item.coldOutreachDraft}\n\`\`\`\n\n`;
      content += `---\n\n`;
    }

    writeFileSync(join(outDir, filename), content, 'utf8');
  }

  // 2. Master summary pipeline file
  let master = `# Outreach Pipeline: High-Leverage Per Diem Style Targets\n\n`;
  master += `Total targets: ${dossiers.length}\n`;
  master += `Compiled for: Omar Faruque Tuhin (Nadim Tuhin)\n`;
  master += `Mode: Manual send only. Review drafts and send from personal email / LinkedIn.\n\n`;

  master += `| Company | Vertical | Match Score | Primary Contact | Status | Quick Draft |\n`;
  master += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
  for (const d of dossiers) {
    const leader = d.leadership[0];
    const leaderText = leader ? `[${leader.name}](${leader.linkedInUrl}) (${leader.role})` : 'Founder';
    master += `| **[${d.metadata.name}](${d.metadata.website})** | ${d.metadata.vertical} | **${d.matchAnalysis.score}%** | ${leaderText} | Ready to review | \`docs/${d.metadata.vertical.replace(/_/g, '-')}.md\` |\n`;
  }

  master += `\n\n## Action Checklist\n\n`;
  master += `1. Review company profile, match diagnosis, and pain point hook in the docs.\n`;
  master += `2. Copy the drafted message (under 150 words, proof URL lines 1-2).\n`;
  master += `3. Find founder email or send via LinkedIn connection note to the primary contact.\n`;
  master += `4. Mark as 'sent' in local dashboard or SQLite database.\n`;

  writeFileSync(join(outDir, 'master-pipeline.md'), master, 'utf8');
}
