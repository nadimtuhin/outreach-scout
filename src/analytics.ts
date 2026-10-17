import type { StoredTargetRow } from './db.ts';

export interface ContactsByAngle {
  founder_ceo: number;
  cto_eng: number;
  product_ops: number;
  [angle: string]: number;
}

export interface PipelineStats {
  totalCompanies: number;
  totalContacts: number;
  contactsByAngle: ContactsByAngle;
  statusBreakdown: Record<string, number>;
  averageMatchScore: number;
  platformDistribution: Record<string, number>;
}

export function computePipelineStats(rows: StoredTargetRow[]): PipelineStats {
  const totalCompanies = rows.length;
  let totalContacts = 0;
  let totalScore = 0;
  let scoredCount = 0;

  const contactsByAngle: ContactsByAngle = {
    founder_ceo: 0,
    cto_eng: 0,
    product_ops: 0,
  };
  const statusBreakdown: Record<string, number> = {};
  const platformDistribution: Record<string, number> = {};

  for (const row of rows) {
    // Status breakdown
    const status = row.status || 'unknown';
    statusBreakdown[status] = (statusBreakdown[status] ?? 0) + 1;

    // Average match score
    try {
      const match = JSON.parse(row.match_analysis || '{}') as { score?: unknown };
      if (typeof match.score === 'number' && !Number.isNaN(match.score)) {
        totalScore += match.score;
        scoredCount++;
      }
    } catch {
      // ignore JSON parse error
    }

    // Platform distribution
    try {
      const platforms = JSON.parse(row.platform_ecosystem || '[]');
      if (Array.isArray(platforms)) {
        for (const p of platforms) {
          if (typeof p === 'string' && p.trim()) {
            const trimmed = p.trim();
            platformDistribution[trimmed] = (platformDistribution[trimmed] ?? 0) + 1;
          }
        }
      } else if (typeof platforms === 'string' && platforms.trim()) {
        const trimmed = platforms.trim();
        platformDistribution[trimmed] = (platformDistribution[trimmed] ?? 0) + 1;
      }
    } catch {
      if (row.platform_ecosystem && row.platform_ecosystem.trim()) {
        const trimmed = row.platform_ecosystem.trim();
        platformDistribution[trimmed] = (platformDistribution[trimmed] ?? 0) + 1;
      }
    }

    // Contacts and angles
    try {
      const contacts = JSON.parse(row.contacts || '[]');
      if (Array.isArray(contacts)) {
        for (const c of contacts) {
          if (c && typeof c === 'object') {
            totalContacts++;
            const angle = (c as { angle?: unknown }).angle;
            if (angle === 'founder_ceo') {
              contactsByAngle.founder_ceo++;
            } else if (angle === 'cto_eng') {
              contactsByAngle.cto_eng++;
            } else if (angle === 'product_ops') {
              contactsByAngle.product_ops++;
            } else if (typeof angle === 'string' && angle.trim()) {
              contactsByAngle[angle] = (contactsByAngle[angle] ?? 0) + 1;
            }
          }
        }
      }
    } catch {
      // ignore JSON parse error
    }
  }

  const averageMatchScore =
    scoredCount > 0 ? Math.round((totalScore / scoredCount) * 100) / 100 : 0;

  return {
    totalCompanies,
    totalContacts,
    contactsByAngle,
    statusBreakdown,
    averageMatchScore,
    platformDistribution,
  };
}

export function generateMailtoLink(
  email: string,
  subject: string,
  body: string
): string {
  const queryParts: string[] = [];
  if (subject) {
    queryParts.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    queryParts.push(`body=${encodeURIComponent(body)}`);
  }
  const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
  return `mailto:${email.trim()}${queryString}`;
}

export function searchPipeline(
  rows: StoredTargetRow[],
  query: string
): StoredTargetRow[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return rows;
  }

  return rows.filter((row) => {
    // 1. Company name
    if (row.name.toLowerCase().includes(q)) {
      return true;
    }

    // 2. Tech stack
    if (row.tech_stack) {
      try {
        const stack = JSON.parse(row.tech_stack);
        if (Array.isArray(stack)) {
          if (
            stack.some(
              (t: unknown) => typeof t === 'string' && t.toLowerCase().includes(q)
            )
          ) {
            return true;
          }
        } else if (
          typeof stack === 'string' &&
          stack.toLowerCase().includes(q)
        ) {
          return true;
        }
      } catch {
        if (row.tech_stack.toLowerCase().includes(q)) {
          return true;
        }
      }
    }

    // 3. Platform ecosystem
    if (row.platform_ecosystem) {
      try {
        const platforms = JSON.parse(row.platform_ecosystem);
        if (Array.isArray(platforms)) {
          if (
            platforms.some(
              (p: unknown) => typeof p === 'string' && p.toLowerCase().includes(q)
            )
          ) {
            return true;
          }
        } else if (
          typeof platforms === 'string' &&
          platforms.toLowerCase().includes(q)
        ) {
          return true;
        }
      } catch {
        if (row.platform_ecosystem.toLowerCase().includes(q)) {
          return true;
        }
      }
    }

    // 4. Contact names and emails
    if (row.leader_name && row.leader_name.toLowerCase().includes(q)) {
      return true;
    }

    if (row.contacts) {
      try {
        const contacts = JSON.parse(row.contacts);
        if (Array.isArray(contacts)) {
          const matchedContact = contacts.some(
            (c: { name?: unknown; email?: unknown }) => {
              const nameMatch =
                typeof c.name === 'string' && c.name.toLowerCase().includes(q);
              const emailMatch =
                typeof c.email === 'string' && c.email.toLowerCase().includes(q);
              return nameMatch || emailMatch;
            }
          );
          if (matchedContact) {
            return true;
          }
        }
      } catch {
        // ignore
      }
    }

    return false;
  });
}
