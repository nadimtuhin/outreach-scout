import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type {
  ContactLead,
  MatchAnalysis,
  ScoutProject,
  TargetDossier,
} from './types.ts';

const PROJECTS_DIR = join(import.meta.dir, '..', 'projects');

/**
 * Load all project configurations from the projects directory.
 */
export function listProjects(): ScoutProject[] {
  if (!existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.json') && f !== 'template.json');
  const projects: ScoutProject[] = [];

  for (const f of files) {
    try {
      const content = readFileSync(join(PROJECTS_DIR, f), 'utf-8');
      const parsed = JSON.parse(content) as ScoutProject;
      if (parsed.id && parsed.profile && parsed.rules) {
        projects.push(parsed);
      }
    } catch (err) {
      console.warn(`[Projects] Failed to parse ${f}:`, err);
    }
  }

  return projects;
}

/**
 * Get a specific project by ID. Falls back to 'default'.
 */
export function getProject(projectId?: string): ScoutProject {
  const targetId = projectId || 'default';
  const filePath = join(PROJECTS_DIR, `${targetId}.json`);

  if (existsSync(filePath)) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as ScoutProject;
    } catch {
      // Fall through to default fallback
    }
  }

  // Fallback to default.json
  const defaultPath = join(PROJECTS_DIR, 'default.json');
  if (existsSync(defaultPath)) {
    const content = readFileSync(defaultPath, 'utf-8');
    return JSON.parse(content) as ScoutProject;
  }

  throw new Error(`Project '${targetId}' not found and default.json is missing.`);
}

/**
 * Save or update a project configuration.
 */
export function saveProject(project: ScoutProject): void {
  const filePath = join(PROJECTS_DIR, `${project.id}.json`);
  writeFileSync(filePath, JSON.stringify(project, null, 2), 'utf-8');
}

/**
 * Delete a project configuration (default project cannot be deleted).
 */
export function deleteProject(projectId: string): boolean {
  if (projectId === 'default') {
    throw new Error("Cannot delete the 'default' project.");
  }
  const filePath = join(PROJECTS_DIR, `${projectId}.json`);
  if (existsSync(filePath)) {
    unlinkSync(filePath);
    return true;
  }
  return false;
}

/**
 * Evaluate a TargetDossier against a specific Project's rules and candidate profile.
 */
export function matchTargetForProject(
  project: ScoutProject,
  target: TargetDossier
): MatchAnalysis & { passedFilters: boolean; filterRejections: string[] } {
  const rules = project.rules;
  const profile = project.profile;
  const rejections: string[] = [];

  // 1. Vertical Filter
  if (rules.targetVerticals.length > 0 && !rules.targetVerticals.includes(target.metadata.vertical)) {
    rejections.push(`Vertical '${target.metadata.vertical}' not in project target verticals`);
  }

  // 2. Halal / Ethical Filter
  const halalScore = target.halalCompliance?.score ?? 100;
  if (rules.minHalalScore !== undefined && halalScore < rules.minHalalScore) {
    rejections.push(`Halal score ${halalScore} is below project minimum (${rules.minHalalScore})`);
  }

  // Prohibited keywords in description / metadata
  const desc = ((target.architecture?.coreWorkflow || '') + ' ' + (target.deepProfile?.business?.model || '')).toLowerCase();
  for (const kw of rules.prohibitedKeywords || []) {
    if (desc.includes(kw.toLowerCase())) {
      rejections.push(`Contains prohibited keyword: '${kw}'`);
    }
  }

  // 3. Remote & APAC Filter
  const remoteScore = target.remoteHiring?.remoteScore ?? 85;
  if (rules.minRemoteScore !== undefined && remoteScore < rules.minRemoteScore) {
    rejections.push(`Remote score ${remoteScore} is below project minimum (${rules.minRemoteScore})`);
  }

  const apacScore = target.remoteHiring?.apacScore ?? 80;
  if (rules.minApacScore !== undefined && apacScore < rules.minApacScore) {
    rejections.push(`APAC score ${apacScore} is below project minimum (${rules.minApacScore})`);
  }

  if (rules.requireApacHires && !target.remoteHiring?.hasApacHires) {
    rejections.push('Project requires verified existing APAC team hires');
  }

  // 4. Candidate Skill Overlap
  const targetSkills = new Set([
    ...(target.metadata.techStack || []),
    ...(target.metadata.platformEcosystem || []),
    ...(target.jobs?.flatMap((j) => j.keySkills) || []),
  ].map((s) => s.toLowerCase()));

  const matchedSkills: string[] = [];
  for (const skill of profile.coreSkills) {
    if (targetSkills.has(skill.toLowerCase())) {
      matchedSkills.push(skill);
    }
  }

  const strongMatches = [
    ...matchedSkills.map((s) => `${profile.experienceYears}y exp with ${s}`),
    ...target.architecture.criticalFailureModes.slice(0, 2).map((m) => `Production failure mitigation: ${m}`),
  ];

  const gapsOrBridges = target.architecture.criticalFailureModes.slice(2, 4);

  // Compute composite match score
  let score = 70;
  if (matchedSkills.length > 0) score += Math.min(20, matchedSkills.length * 5);
  if (target.remoteHiring?.hasApacHires) score += 5;
  if (target.jobs && target.jobs.length > 0) score += 5;
  score = Math.min(100, Math.max(0, score));

  return {
    score,
    passedFilters: rejections.length === 0,
    filterRejections: rejections,
    strongMatches,
    gapsOrBridges,
  };
}

/**
 * Generate a project-tailored pitch for a specific contact and target.
 */
export function generateProjectTailoredPitch(params: {
  project: ScoutProject;
  target: TargetDossier;
  contact: Pick<ContactLead, 'name' | 'role' | 'angle'>;
}): string {
  const { project, target, contact } = params;
  const { profile, rules } = project;

  // Pick the most relevant proof repo from candidate profile
  let bestProof = profile.proofRepos[0]?.url || target.architecture.candidateMatchingProofRepo;
  const targetText = `${target.metadata.vertical} ${target.metadata.name} ${target.metadata.techStack.join(' ')}`.toLowerCase();

  for (const repo of profile.proofRepos) {
    const repoText = `${repo.name} ${repo.description}`.toLowerCase();
    if (
      (targetText.includes('pos') && repoText.includes('pos')) ||
      (targetText.includes('fhir') && repoText.includes('fhir')) ||
      (targetText.includes('browser') && repoText.includes('cdp')) ||
      (targetText.includes('queue') && repoText.includes('queue'))
    ) {
      bestProof = repo.url;
      break;
    }
  }

  const calendlyUrl = profile.calendlyUrl;
  const senderName = profile.senderName || profile.name.split(' ')[0] || 'Nadim';
  const firstName = contact.name.split(' ')[0] ?? 'there';

  const modes = target.architecture.criticalFailureModes.slice(0, 2).map((m, idx) => {
    const trimmed = m.trim();
    if (idx > 0 && /^[A-Z][a-z]/.test(trimmed)) {
      return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
    }
    return trimmed;
  });
  const failureText = modes.join(' and ');

  let body = '';

  if (contact.angle === 'cto_eng') {
    body = `${bestProof}
${calendlyUrl}

Hi ${firstName}, saw your engineering work on ${target.metadata.name}'s ${target.hiring.painPointHook}.

${target.architecture.candidateExperienceBridge}. Handled ${failureText} with idempotent queues and automated test suites.

I have 15-20 hours a week open. I can pick up a thorny integration ticket or write an adapter harness on a 2-week trial contract so your core team stays focused.

If you want to check my repo or discuss failure modes, grab a time on Calendly.

Best,
${senderName}`;
  } else if (contact.angle === 'product_ops') {
    body = `${bestProof}
${calendlyUrl}

Hi ${firstName}, saw your product work on ${target.metadata.name}'s customer onboarding and integration catalog.

${target.architecture.candidateExperienceBridge}. Handled ${failureText} to keep merchant and clinic data syncing without manual support tickets.

I have 15-20 hours a week open. I can build out the next partner adapter or clear pending integration requests on a 2-week trial contract.

If you want to unblock a roadmap item, grab a slot on Calendly.

Best,
${senderName}`;
  } else {
    // Founder / CEO
    body = `${bestProof}
${calendlyUrl}

Hi ${firstName}, saw your work on ${target.metadata.name}'s ${target.hiring.painPointHook}.

${target.architecture.candidateExperienceBridge}. Handled ${failureText} in production.

I have 15-20 hours a week open. I can take on a specific integration ticket or build an adapter on a 2-week trial contract so you test the code with zero risk.

If that clears a backlog item for you, grab a time on Calendly.

Best,
${senderName}`;
  }

  // Apply voice rules
  if (rules.voiceRules.noEmDashes) {
    body = body.replace(/[\u2014\u2013]/g, '-');
  }

  return body;
}
