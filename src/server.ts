import { ScoutDatabase } from './db.ts';

export function startDashboard(port = 3033, dbPath = 'scout.sqlite'): void {
  const db = new ScoutDatabase(dbPath);

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outreach Scout — Executive B2B Pipeline</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* Silicon Valley 2026 Light Design System (Stripe / Linear / Resend aesthetic) */
    :root, [data-theme="light"] {
      --bg: #f8f9fb;
      --card-bg: #ffffff;
      --card-border: rgba(15, 23, 42, 0.08);
      --card-border-hover: rgba(37, 99, 235, 0.28);
      --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 6px 16px -4px rgba(0, 0, 0, 0.04);
      --card-shadow-hover: 0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(0, 0, 0, 0.02);
      --surface: #f1f4f9;
      --surface-border: #e2e8f0;
      --text: #0f172a;
      --text-muted: #475569;
      --text-subtle: #94a3b8;
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --primary-light: #eff6ff;
      --emerald: #059669;
      --emerald-bg: #ecfdf5;
      --emerald-border: #a7f3d0;
      --amber: #d97706;
      --amber-bg: #fffbeb;
      --amber-border: #fde68a;
      --code-bg: #f8fafc;
      --code-text: #1e293b;
      --radius: 12px;
      --badge-radius: 6px;
    }

    [data-theme="dark"] {
      --bg: #090a0f;
      --card-bg: rgba(18, 20, 29, 0.75);
      --card-border: rgba(255, 255, 255, 0.08);
      --card-border-hover: rgba(255, 255, 255, 0.18);
      --card-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
      --card-shadow-hover: 0 16px 36px -8px rgba(0, 0, 0, 0.8);
      --surface: #141722;
      --surface-border: rgba(255, 255, 255, 0.06);
      --text: #f4f4f7;
      --text-muted: #8b92a5;
      --text-subtle: #565d73;
      --primary: #3b82f6;
      --primary-hover: #60a5fa;
      --primary-light: rgba(59, 130, 246, 0.15);
      --emerald: #10b981;
      --emerald-bg: rgba(16, 185, 129, 0.1);
      --emerald-border: rgba(16, 185, 129, 0.25);
      --amber: #f59e0b;
      --amber-bg: rgba(245, 158, 11, 0.1);
      --amber-border: rgba(245, 158, 11, 0.25);
      --code-bg: #06070a;
      --code-text: #cbd5e1;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.04) 0%, transparent 50%),
        radial-gradient(circle at 85% 20%, rgba(16, 185, 129, 0.03) 0%, transparent 40%);
      background-attachment: fixed;
      color: var(--text);
      padding: 32px 24px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .container { max-width: 1360px; margin: 0 auto; }

    /* Modern 2026 Header */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--card-border);
      flex-wrap: wrap;
      gap: 16px;
    }

    .brand-wrap { display: flex; align-items: center; gap: 14px; }
    .brand-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
    }
    h1 { font-size: 20px; font-weight: 700; letter-spacing: -0.025em; color: var(--text); }
    .subtitle { color: var(--text-muted); font-size: 13px; font-weight: 500; margin-top: 1px; }

    .header-actions { display: flex; align-items: center; gap: 10px; }
    .live-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      color: var(--emerald);
      background: var(--emerald-bg);
      border: 1px solid var(--emerald-border);
      padding: 5px 12px;
      border-radius: 20px;
    }
    .pulse-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--emerald);
      box-shadow: 0 0 6px var(--emerald);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
    .meta-pill {
      font-size: 12px;
      font-weight: 500;
      color: var(--text-muted);
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 5px 12px;
      border-radius: 20px;
    }
    .theme-toggle-btn {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text-muted);
      width: 34px;
      height: 34px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.15s;
    }
    .theme-toggle-btn:hover { color: var(--text); border-color: var(--primary); }

    /* 2026 Segmented Control (Linear style) */
    .filter-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 16px;
    }
    .segmented-control {
      display: inline-flex;
      background: var(--surface);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 4px;
      gap: 3px;
    }
    .segment-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 7px 15px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .segment-btn:hover { color: var(--text); }
    .segment-btn.active {
      background: var(--card-bg);
      color: var(--text);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03);
    }
    .segment-count {
      font-size: 11px;
      font-weight: 600;
      background: rgba(15, 23, 42, 0.06);
      padding: 1px 6px;
      border-radius: 10px;
      color: var(--text-muted);
    }
    .segment-btn.active .segment-count {
      background: var(--primary-light);
      color: var(--primary);
    }

    /* Cards Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
      gap: 22px;
    }

    /* 2026 High-Craft Card */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius);
      box-shadow: var(--card-shadow);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .card:hover {
      border-color: var(--card-border-hover);
      box-shadow: var(--card-shadow-hover);
      transform: translateY(-2px);
    }

    .card-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }
    .company-title-wrap { display: flex; flex-direction: column; gap: 4px; }
    .company-name {
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      letter-spacing: -0.02em;
    }
    .company-name:hover { color: var(--primary); }
    .company-meta { font-size: 12.5px; color: var(--text-muted); font-weight: 500; }

    .score-badge {
      font-size: 12.5px;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      padding: 4px 9px;
      border-radius: var(--badge-radius);
      background: var(--emerald-bg);
      color: var(--emerald);
      border: 1px solid var(--emerald-border);
      white-space: nowrap;
    }
    .stage-badge {
      font-size: 11px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: var(--badge-radius);
      background: var(--surface);
      color: var(--text-muted);
      border: 1px solid var(--surface-border);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    /* Links bar */
    .link-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      font-size: 12.5px;
      background: var(--surface);
      padding: 9px 12px;
      border-radius: 8px;
      border: 1px solid var(--surface-border);
    }
    .link-item {
      color: var(--primary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-weight: 600;
      transition: color 0.15s;
    }
    .link-item:hover { color: var(--primary-hover); text-decoration: underline; }
    .link-sep { color: var(--text-subtle); }

    /* Match Diagnosis Section */
    .diagnosis-box {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 9px;
      padding: 13px 15px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 12.5px;
    }
    .section-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--text-subtle);
      margin-bottom: 2px;
    }
    .match-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      line-height: 1.45;
      color: var(--text);
    }
    .match-icon-yes { color: var(--emerald); font-weight: 700; }
    .match-icon-bridge { color: var(--amber); font-weight: 700; }
    .match-text-bridge { color: var(--text); }

    /* Pitch container */
    .draft-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .draft-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-subtle);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .draft-box {
      background: var(--code-bg);
      border: 1px solid var(--surface-border);
      border-radius: 8px;
      padding: 13px 15px;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 12px;
      color: var(--code-text);
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 160px;
      overflow-y: auto;
    }

    /* Actions bar */
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 6px;
    }
    .status-select {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text);
      padding: 7px 11px;
      border-radius: 7px;
      font-size: 12.5px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      outline: none;
      transition: all 0.15s;
    }
    .status-select:hover, .status-select:focus { border-color: var(--primary); }

    .btn-copy {
      background: #0f172a;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 7px;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      font-family: inherit;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .btn-copy:hover {
      background: #1e293b;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }
    .btn-copy.copied {
      background: var(--emerald);
      color: #ffffff;
    }

    /* Scrollbars */
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(15, 23, 42, 0.12); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(15, 23, 42, 0.22); }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand-wrap">
        <div class="brand-icon">⚡</div>
        <div>
          <h1>Outreach Scout</h1>
          <p class="subtitle">High-Signal B2B Integration Targets & Pitch Intelligence</p>
        </div>
      </div>
      <div class="header-actions">
        <div class="live-pill">
          <span class="pulse-dot"></span>
          <span>Local Engine Active</span>
        </div>
        <div class="meta-pill">Zero-Auth Local</div>
        <button class="theme-toggle-btn" onclick="toggleTheme()" title="Toggle Theme" id="theme-btn">🌙</button>
      </div>
    </header>

    <div class="filter-bar">
      <div class="segmented-control">
        <button class="segment-btn active" onclick="filterVertical('all')">
          <span>All Leads</span>
          <span class="segment-count" id="count-all">0</span>
        </button>
        <button class="segment-btn" onclick="filterVertical('food_pos_integration')">
          <span>Food POS</span>
          <span class="segment-count" id="count-pos">0</span>
        </button>
        <button class="segment-btn" onclick="filterVertical('healthcare_fhir_automation')">
          <span>Healthcare FHIR</span>
          <span class="segment-count" id="count-fhir">0</span>
        </button>
        <button class="segment-btn" onclick="filterVertical('browser_automation_infrastructure')">
          <span>Browser Infra</span>
          <span class="segment-count" id="count-browser">0</span>
        </button>
      </div>
    </div>

    <div id="grid" class="grid">
      <!-- Target cards rendered dynamically -->
    </div>
  </div>

  <script>
    let allTargets = [];
    let currentFilter = 'all';

    function initTheme() {
      const saved = localStorage.getItem('scout_theme') || 'light';
      document.documentElement.setAttribute('data-theme', saved);
      document.getElementById('theme-btn').textContent = saved === 'light' ? '🌙' : '☀️';
    }

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('scout_theme', next);
      document.getElementById('theme-btn').textContent = next === 'light' ? '🌙' : '☀️';
    }

    async function loadTargets() {
      const res = await fetch('/api/targets');
      allTargets = await res.json();
      
      document.getElementById('count-all').textContent = allTargets.length;
      document.getElementById('count-pos').textContent = allTargets.filter(t => t.vertical === 'food_pos_integration').length;
      document.getElementById('count-fhir').textContent = allTargets.filter(t => t.vertical === 'healthcare_fhir_automation').length;
      document.getElementById('count-browser').textContent = allTargets.filter(t => t.vertical === 'browser_automation_infrastructure').length;

      renderCards();
    }

    function filterVertical(v) {
      currentFilter = v;
      document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
      event.currentTarget.classList.add('active');
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

        const strongItems = (match.strongMatches || []).slice(0, 2).map(s => 
          '<div class="match-row"><span class="match-icon-yes">✓</span><span>' + s + '</span></div>'
        ).join('');

        const bridgeItems = (match.gapsOrBridges || []).slice(0, 2).map(g => 
          '<div class="match-row"><span class="match-icon-bridge">⚡</span><span class="match-text-bridge">' + g + '</span></div>'
        ).join('');

        const employeeLinks = employees.map(e => 
          '<a class="link-item" href="' + e.linkedInUrl + '" target="_blank">' + e.name + ' <span style="color:var(--text-subtle); font-weight:400;">(' + e.role + ')</span></a>'
        ).join('<span class="link-sep">•</span>');

        return \`
          <div class="card">
            <div class="card-head">
              <div class="company-title-wrap">
                <a class="company-name" href="\${t.website}" target="_blank">
                  \${t.name}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <div class="company-meta">\${t.headquarters} • \${t.estimated_employees} people</div>
              </div>
              <div style="display:flex; gap:6px; align-items:center;">
                <span class="score-badge">\${score}</span>
                <span class="stage-badge">\${t.funding_stage}</span>
              </div>
            </div>

            <div class="link-row">
              <a class="link-item" href="\${t.website}" target="_blank">Website</a>
              \${t.careers_url ? '<span class="link-sep">•</span><a class="link-item" href="' + t.careers_url + '" target="_blank">Careers</a>' : ''}
              <span class="link-sep">•</span>
              <span style="color:var(--text-muted);">Lead: <strong style="color:var(--text);">' + t.leader_name + '</strong></span>
              \${employeeLinks ? '<span class="link-sep">•</span>' + employeeLinks : ''}
            </div>

            <div style="font-size:12px; color:var(--text-muted); font-weight:500;">
              <span style="color:var(--text-subtle); font-weight:700;">PLATFORMS:</span> \${platforms}
            </div>

            <div class="diagnosis-box">
              <div class="section-label">Strong Alignment</div>
              \${strongItems}
              <div class="section-label" style="margin-top:4px;">Technical Bridge / Need</div>
              \${bridgeItems}
            </div>

            <div class="draft-container">
              <div class="draft-header">
                <span>PITCH DRAFT</span>
                <span>\${t.word_count} words</span>
              </div>
              <div class="draft-box" id="draft-\${t.id}">\${t.draft_markdown}</div>
            </div>

            <div class="card-footer">
              <select class="status-select" onchange="updateStatus('\${t.id}', this.value)">
                <option value="drafted" \${t.status === 'drafted' ? 'selected' : ''}>Drafted</option>
                <option value="sent" \${t.status === 'sent' ? 'selected' : ''}>Sent</option>
                <option value="replied" \${t.status === 'replied' ? 'selected' : ''}>Replied</option>
                <option value="declined" \${t.status === 'declined' ? 'selected' : ''}>Declined</option>
              </select>
              <button class="btn-copy" onclick="copyDraft('\${t.id}', this)">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Draft
              </button>
            </div>
          </div>
        \`;
      }).join('');
    }

    async function copyDraft(id, btn) {
      const text = document.getElementById('draft-' + id).innerText;
      await navigator.clipboard.writeText(text);
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = originalHtml;
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

    initTheme();
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
