import { existsSync, watch } from 'node:fs';
import { join } from 'node:path';
import { ScoutDatabase } from './db.ts';
import { followLinkedInProfile } from './linkedin-follow.ts';
import { TARGET_DOSSIERS } from './targets-data.ts';
import { deleteProject, listProjects, saveProject } from './projects.ts';
import type { ScoutProject } from './types.ts';

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

    /* Deep Profiling & Founder Cards */
    .section-card {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .section-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--surface-border);
    }
    .section-title {
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-badge {
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      padding: 2px 7px;
      border-radius: 4px;
      background: var(--surface);
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    /* Founder Profiling Grid */
    .founders-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 14px;
    }
    .founder-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .founder-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .founder-name {
      font-size: 15px;
      font-weight: 700;
      color: var(--text);
    }
    .founder-role {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 1px;
    }
    .founder-bio {
      font-size: 12.5px;
      line-height: 1.5;
      color: var(--text);
    }
    .biases-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .bias-chip {
      font-size: 11px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 2px 7px;
      border-radius: 4px;
    }

    /* Business & ICP Grid */
    .business-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .business-metric {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .metric-label {
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: var(--text-subtle);
    }
    .metric-value {
      font-size: 13px;
      font-weight: 600;
      color: var(--text);
      line-height: 1.45;
    }
    .clients-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .client-pill {
      font-size: 11.5px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 4px;
      background: var(--emerald-bg);
      color: var(--emerald);
      border: 1px solid var(--emerald-border);
    }

    /* Projects & Repos Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 14px;
    }
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .project-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .project-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      text-decoration: none;
    }
    .project-title:hover { text-decoration: underline; }
    .project-stats {
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--emerald);
      background: var(--emerald-bg);
      border: 1px solid var(--emerald-border);
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .project-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.45;
    }
    .project-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .stack-mini-pill {
      font-size: 10.5px;
      padding: 1px 6px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--text-muted);
    }

    /* Blogs & Articles */
    .blogs-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .blog-row {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .blog-row-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
    }
    .blog-link {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
    }
    .blog-link:hover { color: var(--primary); text-decoration: underline; }
    .blog-date {
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      color: var(--text-subtle);
    }
    .blog-summary {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.45;
    }
    .blog-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 2px;
    }
    .blog-tag-pill {
      font-size: 10.5px;
      padding: 1px 6px;
      border-radius: 4px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      color: var(--text-subtle);
    }

    /* Architectural Tastes Grid */
    .tastes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .tastes-col {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .tastes-col-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-subtle);
    }
    .tastes-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tastes-item {
      font-size: 12px;
      color: var(--text);
      display: flex;
      align-items: flex-start;
      gap: 6px;
      line-height: 1.4;
    }
    .tastes-item span:first-child {
      color: var(--primary);
      font-weight: bold;
    }

    /* Scraped Job Posts & Hiring Signals */
    .jobs-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .job-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .job-title-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .job-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      text-decoration: none;
    }
    .job-title:hover { text-decoration: underline; }
    .remote-badge {
      font-size: 11px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 4px;
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      border: 1px solid rgba(59, 130, 246, 0.25);
      text-transform: uppercase;
    }
    .job-meta {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 3px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px;
    }
    .salary-chip {
      font-size: 11.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--emerald);
      background: var(--emerald-bg);
      border: 1px solid var(--emerald-border);
      padding: 1px 6px;
      border-radius: 4px;
    }
    .job-snippet {
      font-size: 12.5px;
      color: var(--text);
      line-height: 1.45;
    }
    .job-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .skill-chip {
      font-size: 11px;
      padding: 2px 7px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--text-muted);
    }

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

    .project-dropdown {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      outline: none;
      max-width: 240px;
    }
    .project-dropdown:focus {
      border-color: var(--primary);
    }

    .btn-manage-projects {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
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
    .btn-manage-projects:hover {
      background: var(--primary-light);
      border-color: var(--primary);
      color: var(--primary);
    }

    .modal-backdrop {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      z-index: 2000;
      align-items: center;
      justify-content: center;
    }
    .modal-backdrop.open {
      display: flex;
    }
    .modal-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      width: 90%;
      max-width: 780px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px rgba(0,0,0,0.35);
      overflow: hidden;
    }
    .modal-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--bg-main);
    }
    .modal-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .modal-close-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 18px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .modal-close-btn:hover {
      background: rgba(0,0,0,0.06);
      color: var(--text-main);
    }
    .modal-tabs {
      display: flex;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
      padding: 0 20px;
    }
    .modal-tab {
      padding: 10px 16px;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      font-family: inherit;
    }
    .modal-tab.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
    }
    .modal-body {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }
    .project-card-item {
      background: var(--bg-main);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .form-group {
      margin-bottom: 14px;
    }
    .form-group label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-subtle);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .form-control {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--bg-main);
      color: var(--text-main);
      font-size: 13px;
      font-family: inherit;
    }
    .form-control:focus {
      outline: none;
      border-color: var(--primary);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .form-row-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 8px;
      margin-top: 6px;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--text-main);
      cursor: pointer;
    }
    .btn-submit-project {
      background: var(--primary);
      color: #fff;
      font-weight: 600;
      padding: 9px 18px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      font-family: inherit;
    }
    .btn-submit-project:hover {
      background: #1d4ed8;
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
      <div style="display:flex; align-items:center; gap:6px; margin-right:4px;">
        <span style="font-size:11px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">Campaign:</span>
        <select id="project-select" class="project-dropdown" onchange="switchProject(this.value)">
          <option value="default">Default Campaign</option>
        </select>
        <button class="btn-manage-projects" onclick="openProjectModal()" title="Manage or create custom prospecting campaigns">
          📁 Campaigns
        </button>
      </div>

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
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; padding-top:6px; border-top:1px dashed var(--border);">
          <span id="active-campaign-label" style="font-size:11px; font-weight:600; color:var(--text-subtle);">Active: Default</span>
          <button id="toggle-qualified-btn" class="cat-btn" style="padding:2px 8px; font-size:11px;" onclick="toggleQualifiedFilter()">All Targets</button>
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

  <!-- Campaign Projects Modal -->
  <div id="project-modal" class="modal-backdrop" onclick="if(event.target === this) closeProjectModal()">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <span>📁 Campaign Projects & Rules</span>
        </div>
        <button class="modal-close-btn" onclick="closeProjectModal()">✕</button>
      </div>

      <div class="modal-tabs">
        <button id="tab-btn-active" class="modal-tab active" onclick="switchModalTab('active')">Active Campaigns</button>
        <button id="tab-btn-create" class="modal-tab" onclick="switchModalTab('create')">+ New Campaign</button>
      </div>

      <div class="modal-body">
        <!-- Tab 1: Active Projects List -->
        <div id="tab-content-active">
          <div id="projects-list-container">
            <!-- Populated via JS -->
          </div>
        </div>

        <!-- Tab 2: Create New Project Form -->
        <div id="tab-content-create" style="display:none;">
          <form id="project-create-form" onsubmit="handleCreateProject(event)">
            <div class="form-row">
              <div class="form-group">
                <label>Project ID (Slug, e.g. nextjs-lead)</label>
                <input type="text" id="p-id" class="form-control" placeholder="custom-lead-campaign" required pattern="[a-z0-9-_]+">
              </div>
              <div class="form-group">
                <label>Campaign Title</label>
                <input type="text" id="p-name" class="form-control" placeholder="Next.js & Frontend Architecture" required>
              </div>
            </div>

            <div class="form-group">
              <label>Description / Value Proposition</label>
              <input type="text" id="p-desc" class="form-control" placeholder="Targeting modern SaaS web applications with high traffic" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Candidate Full Name</label>
                <input type="text" id="p-c-name" class="form-control" placeholder="Omar Faruque Tuhin (Nadim Tuhin)" required>
              </div>
              <div class="form-group">
                <label>Sender Signoff Name</label>
                <input type="text" id="p-c-sender" class="form-control" placeholder="Nadim" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="p-c-email" class="form-control" placeholder="you@domain.com" required>
              </div>
              <div class="form-group">
                <label>Calendly / Booking Link</label>
                <input type="url" id="p-c-calendly" class="form-control" placeholder="https://calendly.com/yourname/30min" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Location & Timezone</label>
                <input type="text" id="p-c-loc" class="form-control" placeholder="Bangladesh (UTC+6)" required>
              </div>
              <div class="form-group">
                <label>Years of Real Experience</label>
                <input type="number" id="p-c-exp" class="form-control" value="14" min="1" max="40" required>
              </div>
            </div>

            <div class="form-group">
              <label>Core Technical Skills (comma separated)</label>
              <input type="text" id="p-c-skills" class="form-control" placeholder="TypeScript, React, Next.js, Node.js, Go, PostgreSQL" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Flagship Proof Repo URL</label>
                <input type="url" id="p-c-repo-url" class="form-control" placeholder="https://github.com/nadimtuhin/omnivore-pos-proxy" required>
              </div>
              <div class="form-group">
                <label>Proof Repo Name & Hook</label>
                <input type="text" id="p-c-repo-name" class="form-control" placeholder="omnivore-pos-proxy (Idempotent order ingestion)" required>
              </div>
            </div>

            <div class="form-group">
              <label>Target Verticals</label>
              <div class="checkbox-grid">
                <label class="checkbox-label"><input type="checkbox" name="p-vertical" value="food_pos_integration" checked> Food POS</label>
                <label class="checkbox-label"><input type="checkbox" name="p-vertical" value="healthcare_fhir_automation" checked> Healthcare FHIR</label>
                <label class="checkbox-label"><input type="checkbox" name="p-vertical" value="browser_automation_infrastructure" checked> Browser Automation</label>
                <label class="checkbox-label"><input type="checkbox" name="p-vertical" value="developer_workflows_queues" checked> Queues & Workflows</label>
                <label class="checkbox-label"><input type="checkbox" name="p-vertical" value="unified_apis" checked> Unified APIs</label>
              </div>
            </div>

            <div class="form-row-3">
              <div class="form-group">
                <label>Min Halal Score (0-100)</label>
                <input type="number" id="p-r-halal" class="form-control" value="85" min="0" max="100">
              </div>
              <div class="form-group">
                <label>Min Remote Score (0-100)</label>
                <input type="number" id="p-r-remote" class="form-control" value="75" min="0" max="100">
              </div>
              <div class="form-group">
                <label>Min APAC Score (0-100)</label>
                <input type="number" id="p-r-apac" class="form-control" value="70" min="0" max="100">
              </div>
            </div>

            <div class="form-group">
              <label class="checkbox-label" style="font-weight:600; text-transform:none;">
                <input type="checkbox" id="p-r-require-apac"> Require confirmed existing APAC / South Asia engineering team
              </label>
            </div>

            <div class="form-group">
              <label>Prohibited Business Keywords (comma separated)</label>
              <input type="text" id="p-r-prohibited" class="form-control" value="gambling, casino, sportsbook, tobacco, liquor, adult, predatory lending">
            </div>

            <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
              <button type="button" class="btn-manage-projects" onclick="switchModalTab('active')">Cancel</button>
              <button type="submit" class="btn-submit-project">Save & Activate Project</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <script>
    let targets = [];
    let activeTargetId = null;
    let activeContactIndex = 0;
    let selectedCategory = 'all';
    let searchQuery = '';
    let allProjects = [];
    let activeProjectId = 'default';
    let filterQualifiedOnly = false;

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

    async function loadProjects() {
      try {
        const res = await fetch('/api/projects');
        allProjects = await res.json();
        const select = document.getElementById('project-select');
        if (select) {
          select.innerHTML = allProjects.map(p => {
            const isSel = p.id === activeProjectId ? 'selected' : '';
            return \`<option value="\${p.id}" \${isSel}>\${p.name}</option>\`;
          }).join('');
        }
        renderProjectsList();
      } catch (err) {
        console.warn('Failed to load /api/projects:', err);
      }
    }

    function computeQualifications() {
      const proj = allProjects.find(p => p.id === activeProjectId) || allProjects[0];
      if (!proj) return;
      const rules = proj.rules || {};
      const verts = rules.targetVerticals || [];
      const minHalal = rules.minHalalScore !== undefined ? rules.minHalalScore : 0;
      const minRemote = rules.minRemoteScore !== undefined ? rules.minRemoteScore : 0;
      const minApac = rules.minApacScore !== undefined ? rules.minApacScore : 0;
      const requireApac = !!rules.requireApacHires;

      let qualifiedCount = 0;
      targets.forEach(t => {
        const deep = t.deepProfile || {};
        const halal = t.halalCompliance || deep.halalCompliance || {};
        const remote = t.remoteHiring || deep.remoteHiring || {};
        const rejections = [];

        if (verts.length > 0 && !verts.includes(t.vertical)) {
          rejections.push('Vertical not in campaign');
        }
        if ((halal.score || 0) < minHalal) {
          rejections.push('Halal score ' + (halal.score || 0) + ' < ' + minHalal);
        }
        if ((remote.remoteScore || 0) < minRemote) {
          rejections.push('Remote score ' + (remote.remoteScore || 0) + ' < ' + minRemote);
        }
        if ((remote.apacScore || 0) < minApac) {
          rejections.push('APAC score ' + (remote.apacScore || 0) + ' < ' + minApac);
        }
        if (requireApac && !remote.hasApacHires) {
          rejections.push('No confirmed APAC hires');
        }

        t.isQualified = rejections.length === 0;
        t.rejections = rejections;
        if (t.isQualified) qualifiedCount++;
      });

      const label = document.getElementById('active-campaign-label');
      if (label) label.textContent = 'Active: ' + proj.name.slice(0, 22);
      const qBtn = document.getElementById('toggle-qualified-btn');
      if (qBtn) qBtn.textContent = filterQualifiedOnly ? 'Qualified (' + qualifiedCount + ')' : 'All Targets (' + targets.length + ')';
    }

    function switchProject(id) {
      activeProjectId = id;
      const select = document.getElementById('project-select');
      if (select) select.value = id;
      computeQualifications();
      renderMasterList();
      renderDetailPane();
    }

    function toggleQualifiedFilter() {
      filterQualifiedOnly = !filterQualifiedOnly;
      const qBtn = document.getElementById('toggle-qualified-btn');
      if (qBtn) qBtn.classList.toggle('active', filterQualifiedOnly);
      computeQualifications();
      renderMasterList();
    }

    function openProjectModal() {
      document.getElementById('project-modal').classList.add('open');
      renderProjectsList();
    }

    function closeProjectModal() {
      document.getElementById('project-modal').classList.remove('open');
    }

    function switchModalTab(tab) {
      document.getElementById('tab-btn-active').classList.toggle('active', tab === 'active');
      document.getElementById('tab-btn-create').classList.toggle('active', tab === 'create');
      document.getElementById('tab-content-active').style.display = tab === 'active' ? 'block' : 'none';
      document.getElementById('tab-content-create').style.display = tab === 'create' ? 'block' : 'none';
    }

    function renderProjectsList() {
      const container = document.getElementById('projects-list-container');
      if (!container) return;

      container.innerHTML = allProjects.map(p => {
        const isActive = p.id === activeProjectId;
        const actBtn = !isActive ? ('<button class="btn-scrape" style="font-size:11px; padding:3px 8px;" onclick="switchProject(&quot;' + p.id + '&quot;); closeProjectModal();">Activate</button>') : '';
        const delBtn = p.id !== 'default' ? ('<button class="btn-scrape" style="font-size:11px; padding:3px 8px; color:#ef4444;" onclick="deleteProject(&quot;' + p.id + '&quot;)">Delete</button>') : '';
        const activeBadge = isActive ? '<span style="font-size:11px; padding:2px 6px; border-radius:4px; background:rgba(37,99,235,0.15); color:var(--primary); font-weight:700; margin-left:8px;">ACTIVE</span>' : '';

        return \`
          <div class="project-card-item" style="border-left: 4px solid \${isActive ? 'var(--primary)' : 'var(--border)'};">
            <div class="project-card-header-row">
              <div>
                <span class="project-name-badge">\${p.name}</span>
                <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-muted); margin-left:8px;">[\${p.id}]</span>
                \${activeBadge}
              </div>
              <div style="display:flex; gap:6px;">
                \${actBtn}
                \${delBtn}
              </div>
            </div>
            <div style="font-size:12.5px; color:var(--text-muted);">\${p.description}</div>
            <div style="display:flex; gap:12px; font-size:12px; color:var(--text-subtle); flex-wrap:wrap; margin-top:4px;">
              <span>👤 <strong>\${p.profile?.name || ''}</strong></span>
              <span>📅 \${p.profile?.calendlyUrl || ''}</span>
              <span>⚡ Min Halal: \${p.rules?.minHalalScore || 0}% | Min APAC: \${p.rules?.minApacScore || 0}%</span>
            </div>
          </div>
        \`;
      }).join('');
    }

    async function handleCreateProject(event) {
      event.preventDefault();
      const id = document.getElementById('p-id').value.trim();
      const name = document.getElementById('p-name').value.trim();
      const desc = document.getElementById('p-desc').value.trim();
      const cName = document.getElementById('p-c-name').value.trim();
      const cSender = document.getElementById('p-c-sender').value.trim();
      const cEmail = document.getElementById('p-c-email').value.trim();
      const cCalendly = document.getElementById('p-c-calendly').value.trim();
      const cLoc = document.getElementById('p-c-loc').value.trim();
      const cExp = parseInt(document.getElementById('p-c-exp').value, 10) || 10;
      const cSkills = document.getElementById('p-c-skills').value.split(',').map(s => s.trim()).filter(Boolean);
      const repoUrl = document.getElementById('p-c-repo-url').value.trim();
      const repoName = document.getElementById('p-c-repo-name').value.trim();

      const verts = Array.from(document.querySelectorAll('input[name="p-vertical"]:checked')).map(cb => cb.value);
      const halal = parseInt(document.getElementById('p-r-halal').value, 10) || 85;
      const remote = parseInt(document.getElementById('p-r-remote').value, 10) || 75;
      const apac = parseInt(document.getElementById('p-r-apac').value, 10) || 70;
      const reqApac = document.getElementById('p-r-require-apac').checked;
      const prohibited = document.getElementById('p-r-prohibited').value.split(',').map(s => s.trim()).filter(Boolean);

      const payload = {
        id,
        name,
        description: desc,
        createdAt: new Date().toISOString(),
        profile: {
          name: cName,
          senderName: cSender,
          headline: cName + ' | Senior Lead',
          email: cEmail,
          calendlyUrl: cCalendly,
          location: cLoc,
          timezone: 'UTC+6',
          experienceYears: cExp,
          coreSkills: cSkills,
          proofRepos: [
            {
              name: repoName,
              url: repoUrl,
              description: repoName
            }
          ]
        },
        rules: {
          targetVerticals: verts,
          targetTitles: ['Founder', 'CEO', 'CTO', 'VP Engineering', 'Head of Engineering'],
          minHalalScore: halal,
          prohibitedKeywords: prohibited,
          minRemoteScore: remote,
          minApacScore: apac,
          requireApacHires: reqApac,
          wordCountLimit: 150,
          voiceRules: {
            noEmDashes: true,
            noNumberedLists: true,
            bareProofUrlsOnTop: true,
            tone: 'direct'
          }
        }
      };

      try {
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          await loadProjects();
          switchProject(id);
          closeProjectModal();
          switchModalTab('active');
          document.getElementById('project-create-form').reset();
        } else {
          alert('Failed to save project. Ensure ID is unique and valid.');
        }
      } catch (err) {
        alert('Error saving project: ' + err);
      }
    }

    async function deleteProject(id) {
      if (!confirm('Are you sure you want to delete campaign project ' + id + '?')) return;
      try {
        const res = await fetch('/api/projects/delete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
        if (res.ok) {
          if (activeProjectId === id) activeProjectId = 'default';
          await loadProjects();
          switchProject(activeProjectId);
        } else {
          alert('Cannot delete default project.');
        }
      } catch (err) {
        alert('Error deleting project: ' + err);
      }
    }

    async function loadData() {
      try {
        await loadProjects();
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
            deepProfile: JSON.parse(r.deep_profile || '{}'),
            leadership: JSON.parse(r.leadership || '[]'),
            architecture: JSON.parse(r.architecture || '{}'),
            jobs: JSON.parse(r.deep_profile || '{}').jobs || [],
            coldOutreachDraft: r.draft_markdown,
            wordCount: r.word_count
          };
        });

        document.getElementById('count-all').textContent = targets.length;

        if (targets.length > 0) {
          activeTargetId = targets[0].id;
        }

        computeQualifications();
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
        const matchesQualified = !filterQualifiedOnly || t.isQualified;
        return matchesCat && matchesQuery && matchesQualified;
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
        const deep = t.deepProfile || {};
        const halal = t.halalCompliance || deep.halalCompliance || { score: 95, status: 'halal' };
        const remote = t.remoteHiring || deep.remoteHiring || { apacScore: 80, remotePolicy: 'Global Remote' };

        return \`
          <div class="target-item \${isActive ? 'active' : ''}" onclick="selectTarget('\${t.id}')">
            <div class="target-item-header">
              <span class="item-name">\${t.name}</span>
              <div style="display:flex; gap:4px; align-items:center;">
                <span class="item-score">\${score}</span>
                <span style="font-size:10px; padding:1px 5px; border-radius:4px; background:rgba(16,185,129,0.12); color:#10b981; font-weight:600;" title="Halal Compliance Score">🕌 \${halal.score}%</span>
                <span style="font-size:10px; padding:1px 5px; border-radius:4px; background:rgba(99,102,241,0.12); color:#818cf8; font-weight:600;" title="APAC Hiring Score">🌏 \${remote.apacScore}%</span>
                \${t.isQualified 
                  ? '<span style="font-size:9.5px; padding:1px 4px; border-radius:3px; background:rgba(16,185,129,0.15); color:#10b981; font-weight:700;">✓</span>' 
                  : '<span style="font-size:9.5px; padding:1px 4px; border-radius:3px; background:rgba(239,68,68,0.12); color:#ef4444; font-weight:700;" title="' + (t.rejections || []).join('; ') + '">✕</span>'}
              </div>
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

      const deep = t.deepProfile || {};
      const leaders = t.leadership || [];
      const arch = t.architecture || {};
      const jobs = t.jobs || deep.jobs || [];

      // 0. Scraped Job Posts HTML
      const jobsHtml = \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">💼 Scraped Job Posts & Active Openings</div>
            <div class="section-badge">\${jobs.length} Active Positions</div>
          </div>
          \${jobs.length > 0 ? \`
            <div class="jobs-grid">
              \${jobs.map(j => \`
                <div class="job-card">
                  <div class="job-header">
                    <div>
                      <div class="job-title-row">
                        <a class="job-title" href="\${j.url}" target="_blank">\${j.title} ↗</a>
                        \${j.remoteStatus ? \`<span class="remote-badge">\${j.remoteStatus}</span>\` : ''}
                      </div>
                      <div class="job-meta">
                        <span>\${j.department}</span> • <span>\${j.location}</span>
                        \${j.salaryBand ? \` • <span class="salary-chip">\${j.salaryBand}</span>\` : ''}
                        \${j.postedDate ? \` • <span style="font-family:'JetBrains Mono',monospace;">\${j.postedDate}</span>\` : ''}
                      </div>
                    </div>
                  </div>
                  <div class="job-snippet">\${j.snippet}</div>
                  <div class="job-skills">
                    \${(j.keySkills || []).map(s => \`<span class="skill-chip">\${s}</span>\`).join('')}
                  </div>
                </div>
              \`).join('')}
            </div>
          \` : \`
            <div style="font-size:12.5px; color:var(--text-muted); font-style:italic;">
              No open roles cached. View live careers portal: 
              <a class="company-link" href="\${t.careersUrl || t.website}" target="_blank">\${t.careersUrl || 'Careers'} ↗</a>
            </div>
          \`}
        </div>
      \`;

      // 0.1 Halal & Ethical Compliance + Remote APAC Telemetry HTML
      const halal = t.halalCompliance || deep.halalCompliance || { status: 'halal', score: 95, reasoning: 'Standard software technology infrastructure.' };
      const remote = t.remoteHiring || deep.remoteHiring || { remoteScore: 85, remotePolicy: 'Global Remote', estimatedRemotePercent: 85, apacScore: 80, hasApacHires: false, apacTeamEstimate: 'Distributed remote team', timezoneFlexibility: 'Flexible international hours', notes: 'Remote friendly' };

      const complianceHtml = \`
        <div class="section-card" style="border-left: 4px solid \${halal.score >= 90 ? '#10b981' : (halal.score >= 75 ? '#f59e0b' : '#ef4444')};">
          <div class="section-card-header">
            <div class="section-title">🕌 Halal & Ethical Compliance</div>
            <div class="section-badge" style="background:\${halal.score >= 90 ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'}; color:\${halal.score >= 90 ? '#10b981' : '#f59e0b'}; font-weight:700;">
              \${(halal.status || 'HALAL').toUpperCase()} • \${halal.score}/100
            </div>
          </div>
          <div style="font-size:13px; color:var(--text); margin-bottom:10px; line-height:1.5;">
            \${halal.reasoning}
          </div>
          \${(halal.flags && halal.flags.length > 0) ? \`
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              \${halal.flags.map(f => \`<span style="font-size:11px; padding:2px 8px; border-radius:4px; background:var(--bg); border:1px solid var(--border); color:var(--text-muted);">\${f}</span>\`).join('')}
            </div>
          \` : ''}
        </div>

        <div class="section-card" style="border-left: 4px solid \${remote.apacScore >= 90 ? '#6366f1' : '#3b82f6'};">
          <div class="section-card-header">
            <div class="section-title">🌏 Remote & APAC Hiring Telemetry</div>
            <div class="section-badge" style="background:rgba(99,102,241,0.15); color:#818cf8; font-weight:700;">
              APAC Score: \${remote.apacScore}/100
            </div>
          </div>
          <div class="business-grid">
            <div class="business-stat">
              <div class="business-stat-label">Remote Policy</div>
              <div class="business-stat-val" style="color:#10b981;">\${remote.remotePolicy} (~\${remote.estimatedRemotePercent || 85}% Remote)</div>
            </div>
            <div class="business-stat">
              <div class="business-stat-label">APAC Team Presence</div>
              <div class="business-stat-val" style="color:#818cf8;">\${remote.hasApacHires ? '✅ Confirmed Hires' : '🌐 International'}</div>
            </div>
            <div class="business-stat">
              <div class="business-stat-label">Team Footprint</div>
              <div class="business-stat-val">\${remote.apacTeamEstimate}</div>
            </div>
            <div class="business-stat">
              <div class="business-stat-label">Timezone Flexibility</div>
              <div class="business-stat-val">\${remote.timezoneFlexibility}</div>
            </div>
          </div>
          <div style="margin-top:10px; font-size:12.5px; color:var(--text-muted); font-style:italic;">
            💡 Strategy: \${remote.notes}
          </div>
        </div>
      \`;

      // 1. Founders & Leadership HTML
      const leadersHtml = (leaders && leaders.length > 0) ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">⚡ Leadership & Founder Profiling</div>
            <div class="section-badge">\${leaders.length} Decision Makers</div>
          </div>
          <div class="founders-grid">
            \${leaders.map(l => {
              const biases = Array.isArray(l.coreBiases) ? l.coreBiases : (typeof l.coreBiases === 'string' ? JSON.parse(l.coreBiases || '[]') : []);
              return \`
                <div class="founder-card">
                  <div class="founder-header">
                    <div>
                      <div class="founder-name">\${l.name}</div>
                      <div class="founder-role">\${l.role}</div>
                    </div>
                    \${l.linkedInUrl ? \`<a class="channel-pill" href="\${l.linkedInUrl}" target="_blank">LinkedIn ↗</a>\` : ''}
                  </div>
                  <div class="founder-bio">\${l.technicalBackground || 'Engineering background in scalable systems and product execution.'}</div>
                  \${biases.length > 0 ? \`
                    <div style="margin-top:6px;">
                      <div style="font-size:11px; font-weight:700; color:var(--text-subtle); margin-bottom:4px; text-transform:uppercase;">Core Biases:</div>
                      <div class="biases-list">
                        \${biases.map(b => \`<span class="bias-chip">\${b}</span>\`).join('')}
                      </div>
                    </div>
                  \` : ''}
                </div>
              \`;
            }).join('')}
          </div>
        </div>
      \` : '';

      // 2. Company Business Model & ICP HTML
      const businessHtml = deep.business ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">🏢 Business Model & ICP Profiling</div>
            <div class="section-badge">\${deep.business.revenueOrFunding || t.fundingStage}</div>
          </div>
          <div class="business-grid">
            <div class="business-metric">
              <div class="metric-label">Monetization & Model</div>
              <div class="metric-value">\${deep.business.model}</div>
            </div>
            <div class="business-metric">
              <div class="metric-label">Pricing Structure</div>
              <div class="metric-value">\${deep.business.pricing}</div>
            </div>
            <div class="business-metric">
              <div class="metric-label">Target ICP Customers</div>
              <div class="metric-value">\${(deep.business.targetCustomers || []).join(', ')}</div>
            </div>
            <div class="business-metric">
              <div class="metric-label">Enterprise / Key Clients</div>
              <div class="clients-pills">
                \${(deep.business.keyClients || []).map(c => \`<span class="client-pill">\${c}</span>\`).join('')}
              </div>
            </div>
          </div>
        </div>
      \` : '';

      // 3. Flagship Engineering Projects HTML
      const projectsHtml = (deep.projects && deep.projects.length > 0) ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">🛠️ Core Engineering Projects & Repos</div>
            <div class="section-badge">\${deep.projects.length} Flagship Projects</div>
          </div>
          <div class="projects-grid">
            \${deep.projects.map(p => \`
              <div class="project-card">
                <div class="project-card-header">
                  <a class="project-title" href="\${p.url}" target="_blank">\${p.name} ↗</a>
                  \${p.starsOrDownloads ? \`<span class="project-stats">\${p.starsOrDownloads}</span>\` : ''}
                </div>
                <div class="project-desc">\${p.description}</div>
                <div class="project-stack">
                  \${(p.techStack || []).map(s => \`<span class="stack-mini-pill">\${s}</span>\`).join('')}
                </div>
              </div>
            \`).join('')}
          </div>
        </div>
      \` : '';

      // 4. Engineering Blogs HTML
      const blogsHtml = (deep.blogs && deep.blogs.length > 0) ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">📰 Engineering Blogs & Architecture Signals</div>
            <div class="section-badge">\${deep.blogs.length} Articles</div>
          </div>
          <div class="blogs-list">
            \${deep.blogs.map(b => \`
              <div class="blog-row">
                <div class="blog-row-header">
                  <a class="blog-link" href="\${b.url}" target="_blank">\${b.title} ↗</a>
                  \${b.date ? \`<span class="blog-date">\${b.date}</span>\` : ''}
                </div>
                <div class="blog-summary">\${b.summary}</div>
                <div class="blog-tags">
                  \${(b.tags || []).map(tag => \`<span class="blog-tag-pill">\${tag}</span>\`).join('')}
                </div>
              </div>
            \`).join('')}
          </div>
        </div>
      \` : '';

      // 5. Engineering Tastes & Biases HTML
      const tastesHtml = deep.tastes ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">🧠 Engineering Tastes & Architectural Biases</div>
            <div class="section-badge">Culture & Tech</div>
          </div>
          <div class="tastes-grid">
            <div class="tastes-col">
              <div class="tastes-col-title">Architectural Biases</div>
              <div class="tastes-list">
                \${(deep.tastes.architecturalBiases || []).map(b => \`<div class="tastes-item"><span>⚡</span><span>\${b}</span></div>\`).join('')}
              </div>
            </div>
            <div class="tastes-col">
              <div class="tastes-col-title">Stack Preferences</div>
              <div class="tastes-list">
                \${(deep.tastes.stackPreferences || []).map(s => \`<div class="tastes-item"><span>✓</span><span>\${s}</span></div>\`).join('')}
              </div>
            </div>
            <div class="tastes-col">
              <div class="tastes-col-title">Engineering Culture</div>
              <div class="tastes-list">
                \${(deep.tastes.engineeringCulture || []).map(c => \`<div class="tastes-item"><span>★</span><span>\${c}</span></div>\`).join('')}
              </div>
            </div>
          </div>
        </div>
      \` : '';

      // 6. Architecture & Failure Modes HTML
      const failureModes = Array.isArray(arch.criticalFailureModes) ? arch.criticalFailureModes : (typeof arch.criticalFailureModes === 'string' ? JSON.parse(arch.criticalFailureModes || '[]') : []);
      const archHtml = arch.coreWorkflow ? \`
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-title">⚙️ Reverse-Engineered Architecture & Failure Modes</div>
            <div class="section-badge">Candidate Proof</div>
          </div>
          <div style="font-size:13px; line-height:1.5; color:var(--text);">
            <strong>Core Workflow:</strong> \${arch.coreWorkflow}
          </div>
          \${failureModes.length > 0 ? \`
            <div style="margin-top:6px;">
              <div style="font-size:11px; font-weight:700; color:var(--text-subtle); margin-bottom:6px; text-transform:uppercase;">Critical Failure Modes:</div>
              <div style="display:flex; flex-direction:column; gap:6px;">
                \${failureModes.map(f => \`
                  <div style="font-size:12.5px; color:#ef4444; display:flex; align-items:flex-start; gap:6px;">
                    <span>⚠️</span><span>\${f}</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          \` : ''}
          \${arch.candidateExperienceBridge ? \`
            <div style="font-size:12.5px; color:var(--text-muted); background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:10px; margin-top:8px;">
              <strong style="color:var(--text);">Candidate Bridge:</strong> \${arch.candidateExperienceBridge}
            </div>
          \` : ''}
        </div>
      \` : '';

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

        <div class="contacts-section">
          <div class="contacts-nav">
            \${contactTabs}
          </div>
          \${contactContent}
        </div>

        \${jobsHtml}

        \${complianceHtml}

        \${leadersHtml}

        \${businessHtml}

        \${projectsHtml}

        \${blogsHtml}

        \${tastesHtml}

        \${archHtml}

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

    // Hot-reload client
    try {
      let isReconnecting = false;
      const sse = new EventSource('/api/live-reload');
      sse.onmessage = (e) => {
        if (e.data === 'reload') {
          console.log('[HotReload] Code or data changed. Reloading...');
          location.reload();
        }
      };
      sse.onerror = () => {
        if (isReconnecting) return;
        isReconnecting = true;
        const interval = setInterval(async () => {
          try {
            const res = await fetch('/api/targets');
            if (res.ok) {
              clearInterval(interval);
              location.reload();
            }
          } catch {}
        }, 800);
      };
    } catch {}
  </script>
</body>
</html>`;

  const liveReloadClients = new Set<ReadableStreamDefaultController>();

  try {
    const watchPaths = [import.meta.dir, join(import.meta.dir, '..', 'projects')];
    for (const wp of watchPaths) {
      if (existsSync(wp)) {
        watch(wp, { recursive: true }, (_event, filename) => {
          if (filename && !filename.includes('scout.sqlite') && !filename.includes('node_modules')) {
            for (const client of liveReloadClients) {
              try {
                client.enqueue(new TextEncoder().encode('data: reload\n\n'));
              } catch {
                liveReloadClients.delete(client);
              }
            }
          }
        });
      }
    }
  } catch (err) {
    console.warn('[HotReload] Watcher notice:', err);
  }

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

      if (url.pathname === '/api/live-reload') {
        let streamController: ReadableStreamDefaultController;
        const stream = new ReadableStream({
          start(controller) {
            streamController = controller;
            liveReloadClients.add(controller);
            controller.enqueue(new TextEncoder().encode(': connected\n\n'));
          },
          cancel() {
            liveReloadClients.delete(streamController);
          },
        });
        return new Response(stream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }

      if (url.pathname === '/api/projects' && req.method === 'GET') {
        const projects = listProjects();
        return new Response(JSON.stringify(projects), {
          headers: corsHeaders,
        });
      }

      if (url.pathname === '/api/projects' && req.method === 'POST') {
        try {
          const body = (await req.json()) as ScoutProject;
          if (!body.id || !body.name || !body.profile || !body.rules) {
            return new Response(JSON.stringify({ error: 'invalid project payload' }), {
              status: 400,
              headers: corsHeaders,
            });
          }
          saveProject(body);
          return new Response(JSON.stringify({ ok: true, project: body }), {
            headers: corsHeaders,
          });
        } catch (err) {
          return new Response(JSON.stringify({ error: String(err) }), {
            status: 500,
            headers: corsHeaders,
          });
        }
      }

      if (url.pathname === '/api/projects/delete' && req.method === 'POST') {
        try {
          const body = (await req.json()) as { id: string };
          if (!body.id) {
            return new Response(JSON.stringify({ error: 'missing id' }), {
              status: 400,
              headers: corsHeaders,
            });
          }
          deleteProject(body.id);
          return new Response(JSON.stringify({ ok: true }), {
            headers: corsHeaders,
          });
        } catch (err) {
          return new Response(JSON.stringify({ error: String(err) }), {
            status: 400,
            headers: corsHeaders,
          });
        }
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
