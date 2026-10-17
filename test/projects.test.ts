import { describe, expect, it } from 'bun:test';
import {
  getProject,
  listProjects,
  matchTargetForProject,
  generateProjectTailoredPitch,
} from '../src/projects.ts';
import { TARGET_DOSSIERS } from '../src/targets-data.ts';
import type { ScoutProject } from '../src/types.ts';

describe('Generic Multi-Project & Multi-Profile Architecture', () => {
  it('lists existing projects including default', () => {
    const projects = listProjects();
    expect(projects.length).toBeGreaterThanOrEqual(1);
    const defaultProj = projects.find((p) => p.id === 'default');
    expect(defaultProj).toBeDefined();
    expect(defaultProj?.profile.name).toContain('Nadim');
  });

  it('retrieves default project with accurate profile and rules', () => {
    const proj = getProject('default');
    expect(proj.id).toBe('default');
    expect(proj.rules.targetVerticals).toContain('healthcare_fhir_automation');
    expect(proj.rules.targetVerticals).toContain('developer_workflows_queues');
    expect(proj.profile.calendlyUrl).toBe('https://calendly.com/nadimtuhin/30min');
    expect(proj.profile.coreSkills).toContain('TypeScript');
  });

  it('matches target against default project rules and candidate skills', () => {
    const proj = getProject('default');
    const metriport = TARGET_DOSSIERS.find((t) => t.metadata.id === 'metriport');
    expect(metriport).toBeDefined();

    if (metriport) {
      const match = matchTargetForProject(proj, metriport);
      expect(match.passedFilters).toBe(true);
      expect(match.score).toBeGreaterThanOrEqual(75);
      expect(match.strongMatches.length).toBeGreaterThan(0);
    }
  });

  it('filters out targets when custom project rules fail', () => {
    const customProject: ScoutProject = {
      id: 'us-fintech-only',
      name: 'US Fintech Specialized',
      description: 'Strictly targeting US accounting APIs with >95 APAC score requirement',
      createdAt: new Date().toISOString(),
      profile: {
        name: 'Jane Doe',
        senderName: 'Jane',
        headline: 'Staff Fintech Engineer',
        email: 'jane@example.com',
        calendlyUrl: 'https://calendly.com/jane/30min',
        location: 'Canada',
        timezone: 'EST',
        experienceYears: 10,
        coreSkills: ['Python', 'SQL'],
        proofRepos: [
          {
            name: 'fintech-core',
            url: 'https://github.com/janedoe/fintech-core',
            description: 'Double entry ledger',
          },
        ],
      },
      rules: {
        targetVerticals: ['unified_apis'],
        targetTitles: ['CTO'],
        minHalalScore: 90,
        minApacScore: 95,
        minRemoteScore: 80,
        requireApacHires: true,
        wordCountLimit: 150,
        voiceRules: {
          noEmDashes: true,
          noNumberedLists: true,
          bareProofUrlsOnTop: true,
          tone: 'direct',
        },
      },
    };

    // Metriport is Healthcare FHIR, not Unified APIs
    const metriport = TARGET_DOSSIERS.find((t) => t.metadata.id === 'metriport');
    if (metriport) {
      const match = matchTargetForProject(customProject, metriport);
      expect(match.passedFilters).toBe(false);
      expect(match.filterRejections).toContain(
        "Vertical 'healthcare_fhir_automation' not in project target verticals"
      );
    }

    // RootFi is Unified APIs and has 98% APAC score
    const rootfi = TARGET_DOSSIERS.find((t) => t.metadata.id === 'rootfi');
    if (rootfi) {
      const match = matchTargetForProject(customProject, rootfi);
      expect(match.passedFilters).toBe(true);
      expect(match.filterRejections.length).toBe(0);
    }
  });

  it('generates role-tailored pitch using candidate profile and proof repos', () => {
    const proj = getProject('default');
    const urbanpiper = TARGET_DOSSIERS.find((t) => t.metadata.id === 'urbanpiper');
    expect(urbanpiper).toBeDefined();

    if (urbanpiper && urbanpiper.contacts[0]) {
      const pitch = generateProjectTailoredPitch({
        project: proj,
        target: urbanpiper,
        contact: urbanpiper.contacts[0],
      });

      expect(pitch).toContain('https://calendly.com/nadimtuhin/30min');
      expect(pitch).toContain('Best,\nNadim');
      expect(pitch).not.toContain('—'); // No em dashes
      expect(pitch).not.toContain('–'); // No en dashes
    }
  });
});
