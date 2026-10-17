import { existsSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { OpenTabsClient } from './opentabs-client.ts';

export interface FollowResult {
  ok: boolean;
  status: 'followed' | 'already_following' | 'follow_button_not_found' | 'offline' | 'error';
  message: string;
  url: string;
}

export function getOpenTabsClient(): OpenTabsClient {
  let token = process.env.OPENTABS_TOKEN || '';
  if (!token) {
    try {
      const authPath = join(homedir(), '.opentabs', 'extension', 'auth.json');
      if (existsSync(authPath)) {
        const auth = JSON.parse(readFileSync(authPath, 'utf8')) as { secret?: string };
        token = auth.secret || '';
      }
    } catch {
      // ignore
    }
  }

  const url = process.env.OPENTABS_URL || 'http://127.0.0.1:9515/mcp';
  return new OpenTabsClient(url, token);
}

export async function followLinkedInProfile(profileUrl: string): Promise<FollowResult> {
  const client = getOpenTabsClient();

  try {
    const tabs = await client.listTabs();
    if (!tabs || tabs.length === 0) {
      return {
        ok: false,
        status: 'offline',
        message: 'OpenTabs daemon returned zero tabs or is unreachable.',
        url: profileUrl,
      };
    }

    // Prefer an existing tab that is already on LinkedIn or reuse an active tab
    let targetTab = tabs.find((t) => t.url.includes('linkedin.com'));
    if (!targetTab) {
      targetTab = tabs[tabs.length - 1];
    }

    if (!targetTab) {
      return {
        ok: false,
        status: 'error',
        message: 'No suitable browser tab found to drive LinkedIn.',
        url: profileUrl,
      };
    }

    // 1. Check if the current tab is in a security checkpoint or login challenge
    if (targetTab.url.includes('/checkpoint/') || targetTab.url.includes('/challenge/')) {
      return {
        ok: false,
        status: 'error',
        message: 'Active tab is at a security checkpoint. Resolve manually in browser.',
        url: profileUrl,
      };
    }

    // 2. Focus the tab and navigate to the target profile URL
    try {
      await client.callTool('browser_focus_tab', { tabId: targetTab.id });
    } catch {
      // ignore
    }

    await client.callTool('browser_navigate_tab', {
      tabId: targetTab.id,
      url: profileUrl,
    });

    // 3. Human reading dwell time (randomized 3.5s - 5.5s) to allow hydration & prevent scraping alert
    const dwellMs = Math.floor(Math.random() * 2000) + 3500;
    await new Promise((resolve) => setTimeout(resolve, dwellMs));

    // 4. Execute DOM script with human hover simulation and full mouse event sequences
    const scriptCode = `(() => {
      // Helper to check text
      const clean = (str) => (str || '').trim().toLowerCase();

      // Checkpoint circuit breaker
      if (window.location.href.includes('/checkpoint/') || window.location.href.includes('/challenge/')) {
        return { status: 'checkpoint', message: 'LinkedIn security challenge detected. Halting.' };
      }

      // Helper for human-like click with pre-hover
      const humanClick = (el) => {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const opts = { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y };

        el.dispatchEvent(new MouseEvent('mouseover', opts));
        el.dispatchEvent(new MouseEvent('mouseenter', opts));
        el.dispatchEvent(new PointerEvent('pointerover', opts));

        setTimeout(() => {
          el.dispatchEvent(new PointerEvent('pointerdown', opts));
          el.dispatchEvent(new MouseEvent('mousedown', opts));
          setTimeout(() => {
            el.dispatchEvent(new PointerEvent('pointerup', opts));
            el.dispatchEvent(new MouseEvent('mouseup', opts));
            el.dispatchEvent(new MouseEvent('click', opts));
          }, 60);
        }, 120);
      };

      // Check top card buttons first
      const buttons = Array.from(document.querySelectorAll('.pv-top-card-v2-ctas button, .artdeco-dropdown button, section.artdeco-card button, main button'));

      // Check if already following
      const isAlreadyFollowing = buttons.some(b => {
        const txt = clean(b.innerText);
        const aria = clean(b.getAttribute('aria-label'));
        return txt === 'following' || aria.includes('following') || txt === 'pending' || aria.includes('pending');
      });

      if (isAlreadyFollowing) {
        return { status: 'already_following', message: 'Already following this person.' };
      }

      // Check if direct Follow button is available in the top card
      const directFollowBtn = buttons.find(b => {
        const txt = clean(b.innerText);
        const aria = clean(b.getAttribute('aria-label'));
        return (txt === 'follow' || aria.startsWith('follow ')) && !txt.includes('unfollow');
      });

      if (directFollowBtn) {
        humanClick(directFollowBtn);
        return { status: 'followed', message: 'Clicked primary Follow button.' };
      }

      // If not direct, look for 'More' / 'More actions' button to open dropdown
      const moreBtn = buttons.find(b => {
        const txt = clean(b.innerText);
        const aria = clean(b.getAttribute('aria-label'));
        return txt === 'more' || aria.includes('more actions');
      });

      if (moreBtn) {
        humanClick(moreBtn);
        // Wait briefly for dropdown to render
        const dropdownItems = Array.from(document.querySelectorAll('.artdeco-dropdown__content--is-open span, .artdeco-dropdown__content--is-open div[role="button"]'));
        const dropdownFollow = dropdownItems.find(el => clean(el.innerText) === 'follow');
        if (dropdownFollow) {
          humanClick(dropdownFollow);
          return { status: 'followed', message: 'Clicked Follow from More actions dropdown.' };
        }
      }

      return { status: 'follow_button_not_found', message: 'Follow button not found on profile top card.' };
    })()`;

    const rawResult = await client.callTool('browser_execute_script', {
      tabId: targetTab.id,
      code: scriptCode,
    });

    let evalResult = { status: 'unknown', message: rawResult };
    try {
      evalResult = JSON.parse(rawResult);
      if (typeof evalResult === 'string') {
        evalResult = JSON.parse(evalResult);
      }
    } catch {
      // use raw
    }

    if (evalResult.status === 'followed') {
      return {
        ok: true,
        status: 'followed',
        message: evalResult.message || 'Successfully followed on LinkedIn.',
        url: profileUrl,
      };
    }

    if (evalResult.status === 'already_following') {
      return {
        ok: true,
        status: 'already_following',
        message: 'Already following on LinkedIn.',
        url: profileUrl,
      };
    }

    return {
      ok: false,
      status: 'follow_button_not_found',
      message: evalResult.message || 'Follow button not available on this profile.',
      url: profileUrl,
    };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      ok: false,
      status: 'error',
      message: errorMsg,
      url: profileUrl,
    };
  }
}
