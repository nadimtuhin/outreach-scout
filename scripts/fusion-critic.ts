import { readFileSync } from 'node:fs';

const ROUTER_URL = 'http://localhost:20128/v1/chat/completions';
const ROUTER_TOKEN = 'sk_9router';

async function queryModel(model: string, systemPrompt: string, userPrompt: string, maxTokens = 1500): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

  try {
    const res = await fetch(ROUTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ROUTER_TOKEN}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.2,
        max_tokens: maxTokens,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Failed to query model ${model} (HTTP ${res.status}): ${txt}`);
    }

    const rawText = await res.text();
    const jsonText = rawText.replace(/data:\s*\[DONE\].*$/s, '').trim();
    const data = JSON.parse(jsonText) as {
      choices: Array<{
        message: { content?: string; reasoning_content?: string };
      }>;
    };
    const choice = data.choices[0];
    const content = choice?.message?.content || choice?.message?.reasoning_content || '';
    return content.trim();
  } finally {
    clearTimeout(timeoutId);
  }
}

async function main() {
  console.log('Loading codebase modules for fusion critique...');
  const bunQueueCode = readFileSync('src/bun-queue.ts', 'utf8');
  const followCode = readFileSync('src/linkedin-follow.ts', 'utf8');

  const reviewPayload = `
### Module 1: src/bun-queue.ts (Bun Native SQLite Queue & Circuit Breaker)
\`\`\`typescript
${bunQueueCode}
\`\`\`

### Module 2: src/linkedin-follow.ts (OpenTabs Anti-Detection & Human Kinematics)
\`\`\`typescript
${followCode}
\`\`\`
`;

  const critiqueSystemPrompt = `You are a Principal Systems Architect and Staff Security Engineer performing an adversarial code review.
Critique these two TypeScript modules for Bun:
1. SQLite concurrency, transaction atomicity, lock modes, and worker drain handling in src/bun-queue.ts.
2. Anti-detection evasion, human kinematics, and LinkedIn/bot-detection countermeasures in src/linkedin-follow.ts.
3. Concrete failure modes, race conditions, and circuit breaker edge cases.
Format:
- STRENGTHS (3 bullets)
- CRITICAL RISKS & FAILURES (3 bullets with exact lines/repro)
- IMMEDIATE PATCHES NEEDED (Concrete code fixes)`;

  console.log('\nDispatching parallel requests to DeepSeek 4.1 Flash and GLM 5.3 Flash...');
  const [deepseekCritique, glmCritique] = await Promise.all([
    queryModel('ocg/deepseek-v4.1-flash', critiqueSystemPrompt, reviewPayload).catch((e) => `DeepSeek Error: ${e.message}`),
    queryModel('glm-5.3-flash', critiqueSystemPrompt, reviewPayload).catch((e) => `GLM Error: ${e.message}`),
  ]);

  console.log('\n--- [DEEPSEEK 4.1 FLASH CRITIQUE] ---');
  console.log(deepseekCritique);

  console.log('\n--- [GLM 5.3 FLASH CRITIQUE] ---');
  console.log(glmCritique);

  console.log('\nSynthesizing Fusion Critique...');
  const fusionSystemPrompt = `You are an Executive Tech Advisor synthesizing two adversarial model critiques (DeepSeek 4.1 Flash and GLM 5.3 Flash).
Output a clean, decisive Fusion Consensus Report with:
1. CONSENSUS RISKS (Agreed vulnerabilities/race conditions)
2. UNIQUE FINDINGS (Specific edge cases caught by either model)
3. PRIORITIZED PATCH ACTION LIST`;

  const fusionUserPrompt = `
CRITIQUE 1 (DeepSeek 4.1 Flash):
${deepseekCritique}

CRITIQUE 2 (GLM 5.3 Flash):
${glmCritique}
`;

  const fusionReport = await queryModel('ocg/deepseek-v4.1-flash', fusionSystemPrompt, fusionUserPrompt, 1500);

  console.log('\n======================================================================');
  console.log('              EXECUTIVE FUSION CRITIQUE REPORT                        ');
  console.log('======================================================================\n');
  console.log(fusionReport);
}

main().catch((err) => {
  console.error('Error during fusion critique:', err);
  process.exit(1);
});
