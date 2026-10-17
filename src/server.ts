import { ScoutDatabase } from './db.ts';

export function startDashboard(port = 3033, dbPath = 'scout.sqlite'): void {
  const db = new ScoutDatabase(dbPath);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outreach Scout Dashboard</title>
  <style>
    :root {
      --bg: #0f172a;
      --card: #1e293b;
      --border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #38bdf8;
      --primary-hover: #0284c7;
      --success: #34d399;
      --warning: #fbbf24;
      --warning-bg: #fbbf241a;
      --tag: #22d3ee22;
      --tag-text: #22d3ee;
      --code-bg: #020617;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 24px;
      line-height: 1.5;
    }
    .container { max-width: 1280px; margin: 0 auto; }
    header {
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 16px;
    }
    h1 { font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 6px; }
    .subtitle { color: var(--text-muted); font-size: 14px; }
    .tabs {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
    }
    .tab-btn {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.15s;
    }
    .tab-btn.active, .tab-btn:hover {
      background: var(--card);
      color: var(--primary);
      border-color: var(--primary);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 20px;
    }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .card-title { font-size: 18px; font-weight: 600; color: #fff; text-decoration: none; }
    .card-title:hover { color: var(--primary); }
    .badges { display: flex; gap: 6px; align-items: center; }
    .badge {
      font-size: 11px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 4px;
      background: var(--tag);
      color: var(--tag-text);
      font-weight: 600;
    }
    .badge-match {
      font-size: 12px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      background: #065f46;
      color: #34d399;
    }
    .meta-line { font-size: 13px; color: var(--text-muted); }
    .links-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 12px;
      background: #0f172a80;
      padding: 8px 10px;
      border-radius: 6px;
      border: 1px solid #1e293b;
    }
    .links-bar a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
    }
    .links-bar a:hover { text-decoration: underline; }
    .section-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 4px;
      font-weight: 700;
    }
    .match-box {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .match-item {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      line-height: 1.4;
    }
    .match-item.strong { color: #86efac; }
    .match-item.bridge { color: var(--warning); background: var(--warning-bg); padding: 4px 6px; border-radius: 4px; }
    .draft-box {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 12px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      color: #e2e8f0;
      white-space: pre-wrap;
      word-break: break-word;
      position: relative;
    }
    .draft-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;
    }
    .btn {
      background: var(--primary);
      color: #0f172a;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }
    .btn:hover { background: var(--primary-hover); }
    .btn.copied { background: var(--success); }
    select.status-select {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 5px 8px;
      border-radius: 4px;
      font-size: 12px;
      outline: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Outreach Scout: High-Leverage B2B Targets</h1>
      <p class="subtitle">Per Diem style high-signal outreach to founders. Manual send only. All messages under 150 words with verified proof links.</p>
    </header>

    <div class="tabs">
      <button class="tab-btn active" onclick="filterVertical('all')">All Verticals (<span id="count-all">0</span>)</button>
      <button class="tab-btn" onclick="filterVertical('food_pos_integration')">Food POS SaaS</button>
      <button class="tab-btn" onclick="filterVertical('healthcare_fhir_automation')">Healthcare FHIR</button>
      <button class="tab-btn" onclick="filterVertical('browser_automation_infrastructure')">Browser Automation</button>
    </div>

    <div id="grid" class="grid">
      <!-- Target cards rendered dynamically -->
    </div>
  </div>

  <script>
    let allTargets = [];
    let currentFilter = 'all';

    async function loadTargets() {
      const res = await fetch('/api/targets');
      allTargets = await res.json();
      document.getElementById('count-all').textContent = allTargets.length;
      renderCards();
    }

    function filterVertical(v) {
      currentFilter = v;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      renderCards();
    }

    function renderCards() {
      const grid = document.getElementById('grid');
      const filtered = currentFilter === 'all' 
        ? allTargets 
        : allTargets.filter(t => t.vertical === currentFilter);

      grid.innerHTML = filtered.map(t => {
        const platforms = JSON.parse(t.platform_ecosystem || '[]').join(', ');
        const match = JSON.parse(t.match_analysis || '{}');
        const employees = JSON.parse(t.key_employees || '[]');
        const score = match.score ? match.score + '%' : '90%';

        const strongItems = (match.strongMatches || []).map(s => 
          '<div class="match-item strong"><span>✓</span><span>' + s + '</span></div>'
        ).join('');

        const bridgeItems = (match.gapsOrBridges || []).map(g => 
          '<div class="match-item bridge"><span>⚡</span><span>' + g + '</span></div>'
        ).join('');

        const employeeLinks = employees.map(e => 
          '<a href="' + e.linkedInUrl + '" target="_blank">' + e.name + ' (' + e.role + ')</a>'
        ).join(' • ');

        return \`
          <div class="card">
            <div class="card-header">
              <div>
                <a class="card-title" href="\${t.website}" target="_blank">\${t.name}</a>
                <div class="meta-line">\${t.headquarters} • \${t.estimated_employees} people</div>
              </div>
              <div class="badges">
                <span class="badge-match">\${score}</span>
                <span class="badge">\${t.funding_stage}</span>
              </div>
            </div>

            <div class="links-bar">
              <a href="\${t.website}" target="_blank">Website</a>
              \${t.careers_url ? '<a href="' + t.careers_url + '" target="_blank">Careers</a>' : ''}
              <span>•</span>
              <span><strong>Contact:</strong> \${t.leader_name}</span>
              \${employeeLinks ? '<span>•</span><span><strong>Team:</strong> ' + employeeLinks + '</span>' : ''}
            </div>

            <div class="meta-line">
              <strong>Platforms:</strong> \${platforms}
            </div>

            <div class="match-box">
              <div class="section-title">Strong Matches</div>
              \${strongItems}
              <div class="section-title" style="margin-top:6px;">What Needs to Match / Bridge</div>
              \${bridgeItems}
            </div>

            <div>
              <div class="section-title">Cold Email Draft</div>
              <div class="draft-box" id="draft-\${t.id}">\${t.draft_markdown}</div>
            </div>

            <div class="draft-actions">
              <span class="meta-line">\${t.word_count} words</span>
              <div style="display:flex; gap:8px; align-items:center;">
                <select class="status-select" onchange="updateStatus('\${t.id}', this.value)">
                  <option value="drafted" \${t.status === 'drafted' ? 'selected' : ''}>Drafted</option>
                  <option value="sent" \${t.status === 'sent' ? 'selected' : ''}>Sent</option>
                  <option value="replied" \${t.status === 'replied' ? 'selected' : ''}>Replied</option>
                  <option value="declined" \${t.status === 'declined' ? 'selected' : ''}>Declined</option>
                </select>
                <button class="btn" onclick="copyDraft('\${t.id}', this)">Copy Draft</button>
              </div>
            </div>
          </div>
        \`;
      }).join('');
    }

    async function copyDraft(id, btn) {
      const text = document.getElementById('draft-' + id).innerText;
      await navigator.clipboard.writeText(text);
      const originalText = btn.innerText;
      btn.innerText = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('copied');
      }, 1500);
    }

    async function updateStatus(id, newStatus) {
      await fetch('/api/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      const t = allTargets.find(x => x.id === id);
      if (t) t.status = newStatus;
    }

    loadTargets();
  </script>
</body>
</html>`;

  Bun.serve({
    port,
    async fetch(req) {
      const url = new URL(req.url);

      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }

      if (url.pathname === '/api/targets' && req.method === 'GET') {
        const rows = db.getAllTargets();
        return new Response(JSON.stringify(rows), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (url.pathname === '/api/status' && req.method === 'POST') {
        const body = (await req.json()) as { id: string; status: string };
        if (body.id && body.status) {
          db.updateStatus(body.id, body.status);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(JSON.stringify({ error: 'missing id or status' }), { status: 400 });
      }

      return new Response('Not Found', { status: 404 });
    },
  });

  console.log(`[Dashboard] Running locally at http://localhost:${port}`);
}
