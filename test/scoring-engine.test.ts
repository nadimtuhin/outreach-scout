import { describe, expect, it } from 'bun:test';
import {
  evaluateHalalCompliance,
  evaluateRemoteApacHiring,
  scoreCompanyProfile,
} from '../src/scoring-engine.ts';

describe('Halal & Ethical Compliance Scoring Engine', () => {
  it('assigns 100% Halal score to Healthcare FHIR targets', () => {
    const result = evaluateHalalCompliance({
      name: 'Metriport',
      vertical: 'healthcare_fhir_automation',
      description: 'Open source healthcare API converting C-CDA to FHIR R4',
    });
    expect(result.status).toBe('halal');
    expect(result.score).toBe(100);
    expect(result.flags).toContain('Life Sciences / Clinical Care');
  });

  it('assigns 100% Halal score to Developer Queues & Workflows', () => {
    const result = evaluateHalalCompliance({
      name: 'Inngest',
      vertical: 'developer_workflows_queues',
      description: 'Durable execution and serverless queue engine',
    });
    expect(result.status).toBe('halal');
    expect(result.score).toBe(100);
    expect(result.flags).toContain('Core Developer Infrastructure');
  });

  it('scores Browser Automation as Halal with ethical data collection flags', () => {
    const general = evaluateHalalCompliance({
      name: 'Browserbase',
      vertical: 'browser_automation_infrastructure',
      description: 'Serverless browser infrastructure for AI agents',
    });
    expect(general.status).toBe('halal');
    expect(general.score).toBeGreaterThanOrEqual(92);

    const antiDetect = evaluateHalalCompliance({
      id: 'multilogin',
      name: 'Multilogin',
      vertical: 'browser_automation_infrastructure',
      description: 'Anti-detect browser profile management software',
    });
    expect(antiDetect.status).toBe('halal');
    expect(antiDetect.score).toBe(92);
    expect(antiDetect.flags).toContain('Multi-Account Tooling');
  });

  it('scores Food POS integration as Halal with agnostic plumbing context', () => {
    const result = evaluateHalalCompliance({
      name: 'Craver',
      vertical: 'food_pos_integration',
      description: 'Mobile app ordering and POS injection middleware',
    });
    expect(result.status).toBe('halal');
    expect(result.score).toBe(88);
    expect(result.flags).toContain('Hospitality Ecosystem');
  });

  it('immediately flags prohibited industries as haram with score 0', () => {
    const gambling = evaluateHalalCompliance({
      name: 'BetStream Tech',
      vertical: 'developer_workflows_queues',
      description: 'Real-time sports betting and online casino gambling odds queue',
    });
    expect(gambling.status).toBe('haram');
    expect(gambling.score).toBe(0);
    expect(gambling.flags).toContain('gambling');

    const alcohol = evaluateHalalCompliance({
      name: 'BrewRoute',
      description: 'Craft brewery and liquor inventory management software',
    });
    expect(alcohol.status).toBe('haram');
    expect(alcohol.score).toBe(0);
    expect(alcohol.flags).toContain('brewery');
  });

  it('flags lending or debt underwriting in unified financial APIs as questionable', () => {
    const lending = evaluateHalalCompliance({
      name: 'LoanSync',
      vertical: 'unified_apis',
      description: 'Unified API connecting to credit underwriting and loan originators',
    });
    expect(lending.status).toBe('questionable');
    expect(lending.score).toBeLessThanOrEqual(75);
    expect(lending.flags).toContain('Underwriting / Debt Exposure Check');
  });
});

describe('Remote & APAC Hiring Telemetry Engine', () => {
  it('correctly scores APAC-native companies with maximum scores', () => {
    const urbanpiper = evaluateRemoteApacHiring({
      id: 'urbanpiper',
      name: 'UrbanPiper',
      headquarters: 'Bengaluru, India',
    });
    expect(urbanpiper.apacScore).toBe(100);
    expect(urbanpiper.hasApacHires).toBe(true);
    expect(urbanpiper.timezoneFlexibility).toContain('Native APAC');

    const rootfi = evaluateRemoteApacHiring({
      id: 'rootfi',
      name: 'RootFi',
      headquarters: 'Singapore / Bengaluru',
    });
    expect(rootfi.apacScore).toBe(98);
    expect(rootfi.hasApacHires).toBe(true);

    const itsacheckmate = evaluateRemoteApacHiring({
      id: 'itsacheckmate',
      name: 'ItsaCheckmate',
    });
    expect(itsacheckmate.apacScore).toBe(98);
    expect(itsacheckmate.hasApacHires).toBe(true);
  });

  it('identifies global remote open source companies as high APAC compatibility', () => {
    const novu = evaluateRemoteApacHiring({
      id: 'novu',
      name: 'Novu',
      headquarters: 'Remote Global',
    });
    expect(novu.remoteScore).toBe(98);
    expect(novu.apacScore).toBeGreaterThanOrEqual(90);
    expect(novu.hasApacHires).toBe(true);
  });

  it('scores US-only remote companies appropriately with lower APAC compatibility', () => {
    const usCompany = evaluateRemoteApacHiring({
      name: 'US Only EHR Corp',
      headquarters: 'San Francisco, CA (US Remote)',
    });
    expect(usCompany.remotePolicy).toBe('US/Canada Remote');
    expect(usCompany.apacScore).toBeLessThan(80);
    expect(usCompany.notes).toContain('trial contractor bridge');
  });

  it('evaluates newly scouted companies dynamically based on jobs', () => {
    const newGlobalScout = evaluateRemoteApacHiring({
      name: 'New Global Workflow SaaS',
      headquarters: 'Austin, TX',
      jobs: [
        {
          id: 'job-1',
          title: 'Senior Systems Engineer (Global Remote)',
          department: 'Core',
          location: 'Remote Worldwide',
          remoteStatus: 'Remote',
          url: 'https://example.com/job/1',
          keySkills: ['Go', 'TypeScript'],
          snippet: 'Work from anywhere in the world on distributed systems.',
        },
      ],
    });
    expect(newGlobalScout.remotePolicy).toBe('Global Remote');
    expect(newGlobalScout.apacScore).toBeGreaterThanOrEqual(85);
  });

  it('scoreCompanyProfile generates comprehensive composite assessment', () => {
    const composite = scoreCompanyProfile({
      id: 'metriport',
      name: 'Metriport',
      vertical: 'healthcare_fhir_automation',
      headquarters: 'San Francisco, CA / Remote Global',
    });
    expect(composite.halalCompliance.status).toBe('halal');
    expect(composite.halalCompliance.score).toBe(100);
    expect(composite.remoteHiring.apacScore).toBeGreaterThanOrEqual(85);
  });
});
