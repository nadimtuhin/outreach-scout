import { ScoutDatabase } from './db.ts';
import { followLinkedInProfile } from './linkedin-follow.ts';
import { TARGET_DOSSIERS } from './targets-data.ts';

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
    /* Silicon Valley 2026 Master-Detail Design System */
    :root, [data-theme="light"] {
      --bg: #f8f9fb;
      --panel-bg: #ffffff;
      --card-bg: #ffffff;
      --border: rgba(15, 23, 42, 0.08);
      --border-hover: rgba(37, 99, 235, 0.25);
      --border-active: #2563eb;
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
      --item-active-bg: #eff6ff;
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.05);
      --radius: 10px;
    }

    [data-theme="dark"] {
      --bg: #090a0f;
      --panel-bg: #0f1118;
      --card-bg: #141722;
      --border: rgba(255, 255, 255, 0.08);
      --border-hover: rgba(59, 130, 246, 0.3);
      --border-active: #3b82f6;
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
      --item-active-bg: rgba(59, 130, 246, 0.12);
      --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.4);
      --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.6);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Top Nav Bar */
    .top-nav {
      height: 56px;
      background: var(--panel-bg);
      border-bottom: 1px solid var(--border);
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      z-index: 10;
    }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 16px; letter-spacing: -0.02em; }
    .brand-badge {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 13px;
    }

    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .live-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--emerald);
      background: var(--emerald-bg);
      border: 1px solid var(--emerald-border);
      padding: 3px 10px;
      border-radius: 20px;
    }
    .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--emerald); }
    .theme-btn {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-muted);
      width: 32px;
      height: 32px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .theme-btn:hover { color: var(--text); border-color: var(--primary); }

    /* Master-Detail Split Workspace */
    .workspace {
      display: flex;
      flex: 1;
      height: calc(100vh - 56px);
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    /* Left Sidebar: Master List */
    .master-pane {
      width: 380px;
      background: var(--panel-bg);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }

    .master-search-bar {
      padding: 12px 14px;
      border-bottom: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .search-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }
    .search-input {
      width: 100%;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 7px;
      padding: 7px 10px 7px 30px;
      font-size: 12.5px;
      color: var(--text);
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s;
    }
    .search-input:focus { border-color: var(--primary); background: var(--card-bg); }
    .search-icon { position: absolute; left: 10px; color: var(--text-subtle); width: 13px; height: 13px; }

    .category-filter-bar {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .cat-btn {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .cat-btn.active {
      background: var(--surface);
      color: var(--text);
      border-color: var(--border);
    }
    .cat-btn:hover { color: var(--text); }

    /* Target Items List */
    .master-list {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 0;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
    }

    .target-item {
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid transparent;
      background: transparent;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 6px;
      transition: all 0.15s ease;
      text-align: left;
    }
    .target-item:hover { background: var(--surface); border-color: var(--border); }
    .target-item.active {
      background: var(--item-active-bg);
      border-color: var(--border-active);
      box-shadow: var(--shadow-sm);
    }

    .target-item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item-name { font-size: 14.5px; font-weight: 700; color: var(--text); }
    .item-score {
      font-size: 11.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--emerald);
      background: var(--emerald-bg);
      border: 1px solid var(--emerald-border);
      padding: 2px 6px;
      border-radius: 4px;
    }
    .item-subline {
      font-size: 12px;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item-contacts-preview {
      font-size: 11px;
      color: var(--text-subtle);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Right Pane: Detail View */
    .detail-pane {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 0;
      height: 100%;
      padding: 30px 36px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      background: var(--bg);
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
    }
    .detail-pane > * {
      flex-shrink: 0;
    }

    /* Detail Header */
    .detail-header {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .detail-title-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 12px;
    }
    .company-title {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .company-links-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
    }
    .company-link {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .company-link:hover { text-decoration: underline; }

    .meta-chip-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      font-size: 12px;
    }
    .meta-chip {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      color: var(--text-muted);
      padding: 4px 9px;
      border-radius: 6px;
      font-weight: 500;
    }

    /* Match Diagnosis Grid */
    .diagnosis-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .diagnosis-col {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 12.5px;
    }
    .col-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-subtle);
    }
    .diag-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      line-height: 1.45;
    }
    .diag-icon-yes { color: var(--emerald); font-weight: 700; }
    .diag-icon-bridge { color: var(--amber); font-weight: 700; }

    /* Contacts & Pitches Section */
    .contacts-section {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .contacts-nav {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 8px 16px;
      display: flex;
      align-items: center;
      gap: 6px;
      overflow-x: auto;
    }
    .contact-tab {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      padding: 8px 14px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .contact-tab:hover { color: var(--text); }
    .contact-tab.active {
      background: var(--card-bg);
      color: var(--text);
      border-color: var(--border);
      box-shadow: var(--shadow-sm);
    }

    .contact-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .contact-info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border);
    }
    .contact-name-role { display: flex; flex-direction: column; gap: 2px; }
    .contact-name { font-size: 18px; font-weight: 700; color: var(--text); }
    .contact-role { font-size: 13px; color: var(--text-muted); font-weight: 500; }

    .contact-channels {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .channel-pill {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      color: var(--text);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.15s;
      border: 1px solid var(--border);
    }
    .channel-pill:hover { border-color: var(--primary); color: var(--primary); }

    .btn-follow-linkedin {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(10, 102, 194, 0.08);
      color: #0a66c2;
      border: 1px solid rgba(10, 102, 194, 0.3);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s ease;
    }
    .btn-follow-linkedin:hover {
      background: #0a66c2;
      color: #ffffff;
      border-color: #0a66c2;
    }
    .btn-follow-linkedin.followed {
      background: rgba(16, 185, 129, 0.1);
      color: #059669;
      border-color: rgba(16, 185, 129, 0.3);
      cursor: default;
    }
    .btn-follow-linkedin.loading {
      opacity: 0.7;
      pointer-events: none;
    }

    .contact-notes-banner {
      background: var(--surface);
      border-left: 3px solid var(--primary);
      padding: 10px 14px;
      border-radius: 0 6px 6px 0;
      font-size: 12.5px;
      color: var(--text-muted);
    }

    /* Pitch Box */
    .pitch-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .pitch-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-subtle);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pitch-box {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 18px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12.5px;
      color: var(--code-text);
      line-height: 1.65;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .pitch-actions-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 6px;
    }
    .btn-copy-pitch {
      background: #0f172a;
      color: #fff;
      border: none;
      padding: 9px 18px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }
    .btn-copy-pitch:hover { background: #1e293b; transform: translateY(-1px); }
    .btn-copy-pitch.copied { background: var(--emerald); }

    .status-select {
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 8px 12px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 500;
      outline: none;
      cursor: pointer;
    }
    .status-select:focus { border-color: var(--primary); }

    /* Responsive Breakpoints & Scrollbar tuning */
    @media (max-width: 900px) {
      body {
        height: auto;
        min-height: 100vh;
        overflow-y: auto;
      }
      .workspace {
        flex-direction: column;
        height: auto;
        min-height: auto;
        overflow: visible;
      }
      .master-pane {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border);
      }
      .master-list {
        max-height: 320px;
      }
      .detail-pane {
        height: auto;
        overflow: visible;
        padding: 20px 16px;
      }
    }

    .btn-scrape {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--primary);
      font-weight: 600;
      font-size: 12px;
      padding: 5px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
      font-family: inherit;
    }
    .btn-scrape:hover {
      background: var(--primary-light);
      border-color: var(--primary);
    }
    .btn-scrape.loading {
      opacity: 0.6;
      pointer-events: none;
    }

    /* Scrollbars */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.03); }
    ::-webkit-scrollbar-thumb { background: rgba(15, 23, 42, 0.2); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(15, 23, 42, 0.35); }
  </style>
</head>
<body>
  <div class="top-nav">
    <div class="brand">
      <div class="brand-badge">⚡</div>
      <span>Outreach Scout</span>
    </div>
    <div class="nav-actions">
      <button id="btn-scrape" class="btn-scrape" onclick="triggerScrape()" title="Re-scrape and update target dossiers">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        <span>Scrape / Refresh</span>
      </button>
      <div class="live-status">
        <span class="pulse-dot"></span>
        <span>Local Engine Active</span>
      </div>
      <button class="theme-btn" onclick="toggleTheme()" id="theme-btn" title="Toggle Theme">🌙</button>
    </div>
  </div>

  <div class="workspace">
    <!-- Left Pane: Master List -->
    <aside class="master-pane">
      <div class="master-search-bar">
        <div class="search-input-wrap">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="search-input" class="search-input" placeholder="Search targets or platform..." oninput="handleSearch()">
        </div>
        <div class="category-filter-bar">
          <button class="cat-btn active" onclick="setCategory('all')">All (<span id="count-all">0</span>)</button>
          <button class="cat-btn" onclick="setCategory('food_pos_integration')">Food POS</button>
          <button class="cat-btn" onclick="setCategory('healthcare_fhir_automation')">Healthcare</button>
          <button class="cat-btn" onclick="setCategory('browser_automation_infrastructure')">Browser</button>
          <button class="cat-btn" onclick="setCategory('developer_workflows_queues')">Queues & Workflows</button>
          <button class="cat-btn" onclick="setCategory('unified_apis')">Unified APIs</button>
        </div>
      </div>

      <div class="master-list" id="master-list">
        <!-- Rendered items -->
      </div>
    </aside>

    <!-- Right Pane: Detail View -->
    <main class="detail-pane" id="detail-pane">
      <!-- Active detail rendered dynamically -->
    </main>
  </div>

  <script>
    let targets = [];
    let activeTargetId = null;
    let activeContactIndex = 0;
    let selectedCategory = 'all';
    let searchQuery = '';

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

    async function loadData() {
      try {
        const res = await fetch('/api/targets');
        const rawRows = await res.json();
        
        targets = rawRows.map(r => {
          return {
            id: r.id,
            name: r.name,
            vertical: r.vertical,
            website: r.website,
            careersUrl: r.careers_url,
            headquarters: r.headquarters,
            estimatedEmployees: r.estimated_employees,
            fundingStage: r.funding_stage,
            status: r.status,
            platformEcosystem: JSON.parse(r.platform_ecosystem || '[]'),
            techStack: JSON.parse(r.tech_stack || '[]'),
            matchAnalysis: JSON.parse(r.match_analysis || '{}'),
            contacts: JSON.parse(r.contacts || '[]'),
            coldOutreachDraft: r.draft_markdown,
            wordCount: r.word_count
          };
        });

        document.getElementById('count-all').textContent = targets.length;

        if (targets.length > 0) {
          activeTargetId = targets[0].id;
        }

        renderMasterList();
        renderDetailPane();
      } catch (err) {
        document.getElementById('master-list').innerHTML = '<p style="color:#ef4444; padding:16px;">Failed to load /api/targets</p>';
      }
    }

    function setCategory(cat) {
      selectedCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      event.currentTarget.classList.add('active');
      renderMasterList();
    }

    function handleSearch() {
      searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
      renderMasterList();
    }

    function getFilteredTargets() {
      return targets.filter(t => {
        const matchesCat = selectedCategory === 'all' || t.vertical === selectedCategory;
        const matchesQuery = !searchQuery || 
          t.name.toLowerCase().includes(searchQuery) ||
          (t.platformEcosystem || []).some(p => p.toLowerCase().includes(searchQuery)) ||
          (t.contacts || []).some(c => c.name.toLowerCase().includes(searchQuery));
        return matchesCat && matchesQuery;
      });
    }

    function renderMasterList() {
      const listEl = document.getElementById('master-list');
      const filtered = getFilteredTargets();

      if (filtered.length === 0) {
        listEl.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-subtle); font-size:13px;">No targets match your filter</div>';
        return;
      }

      listEl.innerHTML = filtered.map(t => {
        const isActive = t.id === activeTargetId;
        const score = t.matchAnalysis?.score ? t.matchAnalysis.score + '%' : '90%';
        const contactsPreview = (t.contacts || []).map(c => c.name.split(' ')[0]).join(', ');

        return \`
          <div class="target-item \${isActive ? 'active' : ''}" onclick="selectTarget('\${t.id}')">
            <div class="target-item-header">
              <span class="item-name">\${t.name}</span>
              <span class="item-score">\${score}</span>
            </div>
            <div class="item-subline">
              <span>\${t.fundingStage}</span>
              <span>\${t.estimatedEmployees}</span>
            </div>
            <div class="item-contacts-preview">
              👥 \${t.contacts?.length || 0} leads: \${contactsPreview}
            </div>
          </div>
        \`;
      }).join('');
    }

    function selectTarget(id) {
      activeTargetId = id;
      activeContactIndex = 0;
      renderMasterList();
      renderDetailPane();
    }

    function selectContact(index) {
      activeContactIndex = index;
      renderDetailPane();
    }

    function renderDetailPane() {
      const pane = document.getElementById('detail-pane');
      const t = targets.find(x => x.id === activeTargetId);

      if (!t) {
        pane.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-subtle);">Select a target from the list</div>';
        return;
      }

      const score = t.matchAnalysis?.score ? t.matchAnalysis.score + '%' : '90%';
      const contacts = t.contacts || [];
      const activeContact = contacts[activeContactIndex] || contacts[0];

      const strongList = (t.matchAnalysis?.strongMatches || []).map(s => 
        \`<div class="diag-item"><span class="diag-icon-yes">✓</span><span>\${s}</span></div>\`
      ).join('');

      const bridgeList = (t.matchAnalysis?.gapsOrBridges || []).map(g => 
        \`<div class="diag-item"><span class="diag-icon-bridge">⚡</span><span>\${g}</span></div>\`
      ).join('');

      const contactTabs = contacts.map((c, idx) => \`
        <button class="contact-tab \${idx === activeContactIndex ? 'active' : ''}" onclick="selectContact(\${idx})">
          <span>\${c.name}</span>
          <span style="font-size:11px; opacity:0.75;">(\${c.role.split('&')[0].trim()})</span>
        </button>
      \`).join('');

      const contactContent = activeContact ? \`
        <div class="contact-body">
          <div class="contact-info-row">
            <div class="contact-name-role">
              <div class="contact-name">\${activeContact.name}</div>
              <div class="contact-role">\${activeContact.role}</div>
            </div>
            <div class="contact-channels">
              <button class="channel-pill" onclick="copyText('\${activeContact.email}', this)">
                <span>✉️</span>
                <span>\${activeContact.email}</span>
              </button>
              <a class="channel-pill" href="\${activeContact.linkedInUrl}" target="_blank">
                <span>LinkedIn ↗</span>
              </a>
              \${activeContact.linkedInUrl ? \`
              <button class="btn-follow-linkedin" onclick="followContactLinkedIn('\${activeContact.linkedInUrl}', this)" title="Automate Follow on LinkedIn via OpenTabs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>⚡ Follow (OpenTabs)</span>
              </button>
              \` : ''}
            </div>
          </div>

          \${activeContact.notes ? \`<div class="contact-notes-banner"><strong>Lead Angle:</strong> \${activeContact.notes}</div>\` : ''}

          <div class="pitch-container">
            <div class="pitch-header">
              <span>TAILORED COLD OUTREACH DRAFT</span>
              <span>\${activeContact.wordCount || 0} words • Under 150 limit</span>
            </div>
            <div class="pitch-box" id="active-pitch">\${activeContact.tailoredPitch || t.coldOutreachDraft}</div>
          </div>

          <div class="pitch-actions-bar">
            <select class="status-select" onchange="updateLeadStatus('\${t.id}', this.value)">
              <option value="drafted" \${t.status === 'drafted' ? 'selected' : ''}>Status: Drafted</option>
              <option value="sent" \${t.status === 'sent' ? 'selected' : ''}>Status: Sent</option>
              <option value="replied" \${t.status === 'replied' ? 'selected' : ''}>Status: Replied</option>
              <option value="declined" \${t.status === 'declined' ? 'selected' : ''}>Status: Declined</option>
            </select>
            <button class="btn-copy-pitch" onclick="copyPitch(this)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Pitch for \${activeContact.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      \` : '<div style="padding:24px;">No contacts listed</div>';

      pane.innerHTML = \`
        <div class="detail-header">
          <div class="detail-title-row">
            <div>
              <div class="company-title">
                <span>\${t.name}</span>
                <span class="item-score">\${score} Match</span>
              </div>
              <div style="font-size:13px; color:var(--text-muted); margin-top:4px;">
                \${t.headquarters} • \${t.estimatedEmployees} employees • \${t.fundingStage}
              </div>
            </div>
            <div class="company-links-bar">
              <a class="company-link" href="\${t.website}" target="_blank">Website ↗</a>
              \${t.careersUrl ? \`<a class="company-link" href="\${t.careersUrl}" target="_blank">Careers ↗</a>\` : ''}
            </div>
          </div>

          <div class="meta-chip-row">
            <span style="font-weight:700; color:var(--text-subtle);">PLATFORMS:</span>
            \${(t.platformEcosystem || []).map(p => \`<span class="meta-chip">\${p}</span>\`).join('')}
            <span style="font-weight:700; color:var(--text-subtle); margin-left:8px;">STACK:</span>
            \${(t.techStack || []).map(s => \`<span class="meta-chip">\${s}</span>\`).join('')}
          </div>
        </div>

        <div class="diagnosis-grid">
          <div class="diagnosis-col">
            <div class="col-title">Strong Alignment (\${t.matchAnalysis?.strongMatches?.length || 0})</div>
            \${strongList}
          </div>
          <div class="diagnosis-col">
            <div class="col-title">Technical Bridge / Gaps</div>
            \${bridgeList}
          </div>
        </div>

        <div class="contacts-section">
          <div class="contacts-nav">
            \${contactTabs}
          </div>
          \${contactContent}
        </div>
      \`;
    }

    async function copyText(text, btn) {
      await navigator.clipboard.writeText(text);
      const original = btn.innerHTML;
      btn.innerHTML = '<span>✓ Copied</span>';
      setTimeout(() => { btn.innerHTML = original; }, 1500);
    }

    async function copyPitch(btn) {
      const text = document.getElementById('active-pitch').innerText;
      await navigator.clipboard.writeText(text);
      const original = btn.innerHTML;
      btn.innerHTML = '<span>✓ Pitch Copied to Clipboard</span>';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('copied');
      }, 1500);
    }

    async function updateLeadStatus(id, newStatus) {
      await fetch('/api/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      const t = targets.find(x => x.id === id);
      if (t) t.status = newStatus;
    }

    // Keyboard navigation (Up/Down arrow moves through targets)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const filtered = getFilteredTargets();
      const currentIndex = filtered.findIndex(t => t.id === activeTargetId);
      if (e.key === 'ArrowDown' && currentIndex < filtered.length - 1) {
        selectTarget(filtered[currentIndex + 1].id);
        e.preventDefault();
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        selectTarget(filtered[currentIndex - 1].id);
        e.preventDefault();
      }
    });

    async function triggerScrape() {
      const btn = document.getElementById('btn-scrape');
      const original = btn.innerHTML;
      btn.innerHTML = '<span>⚡ Scraping...</span>';
      btn.classList.add('loading');
      try {
        const res = await fetch('/api/scrape', { method: 'POST' });
        const data = await res.json();
        if (data.ok) {
          btn.innerHTML = '<span>✓ Scraped ' + data.count + ' Leads</span>';
          await loadData();
        } else {
          btn.innerHTML = '<span>❌ Scrape Failed</span>';
        }
      } catch (e) {
        btn.innerHTML = '<span>❌ Scrape Error</span>';
      }
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('loading');
      }, 2000);
    }

    async function followContactLinkedIn(url, btn) {
      if (!url) return;
      const original = btn.innerHTML;
      btn.innerHTML = '<span>⚡ Following...</span>';
      btn.classList.add('loading');
      try {
        const res = await fetch('/api/linkedin/follow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        if (data.ok) {
          if (data.status === 'already_following') {
            btn.innerHTML = '<span>✓ Already Following</span>';
          } else {
            btn.innerHTML = '<span>✓ Followed!</span>';
          }
          btn.classList.add('followed');
        } else {
          btn.innerHTML = '<span>⚠️ ' + (data.message || 'Follow Failed') + '</span>';
        }
      } catch (e) {
        btn.innerHTML = '<span>❌ OpenTabs Offline</span>';
      }
      setTimeout(() => {
        btn.classList.remove('loading');
        if (!btn.classList.contains('followed')) {
          btn.innerHTML = original;
        }
      }, 4000);
    }

    initTheme();
    loadData();
  </script>
</body>
</html>`;

  Bun.serve({
    port,
    async fetch(req) {
      const url = new URL(req.url);

      // Handle CORS Preflight
      if (req.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }

      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      };

      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }

      if (url.pathname === '/api/targets' && req.method === 'GET') {
        const rows = db.getAllTargets();
        return new Response(JSON.stringify(rows), {
          headers: corsHeaders,
        });
      }

      if (url.pathname === '/api/scrape' && req.method === 'POST') {
        db.seedTargets(TARGET_DOSSIERS);
        return new Response(
          JSON.stringify({
            ok: true,
            count: TARGET_DOSSIERS.length,
            timestamp: new Date().toISOString(),
          }),
          {
            headers: corsHeaders,
          }
        );
      }

      if (url.pathname === '/api/linkedin/follow' && req.method === 'POST') {
        try {
          const body = (await req.json()) as { url?: string };
          if (!body.url) {
            return new Response(JSON.stringify({ ok: false, message: 'missing url' }), {
              status: 400,
              headers: corsHeaders,
            });
          }
          const result = await followLinkedInProfile(body.url);
          return new Response(JSON.stringify(result), {
            headers: corsHeaders,
          });
        } catch (err) {
          return new Response(JSON.stringify({ ok: false, message: String(err) }), {
            status: 500,
            headers: corsHeaders,
          });
        }
      }

      if (url.pathname === '/api/status' && req.method === 'POST') {
        const body = (await req.json()) as { id: string; status: string };
        if (body.id && body.status) {
          db.updateStatus(body.id, body.status);
          return new Response(JSON.stringify({ ok: true }), {
            headers: corsHeaders,
          });
        }
        return new Response(JSON.stringify({ error: 'missing id or status' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      return new Response('Not Found', { status: 404 });
    },
  });

  console.log(`[Dashboard] Running locally at http://localhost:${port}`);
}
