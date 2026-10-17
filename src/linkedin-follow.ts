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

    // 1. Navigate tab to the target LinkedIn profile URL
    await client.callTool('browser_navigate_tab', {
      tabId: targetTab.id,
      url: profileUrl,
    });

    // 2. Wait 2.5s for page and action buttons to hydrate
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // 3. Execute DOM script to locate and click the Follow action
    const scriptCode = `(() => {
      // Helper to check text
      const clean = (str) => (str || '').trim().toLowerCase();

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
        directFollowBtn.click();
        return { status: 'followed', message: 'Clicked primary Follow button.' };
      }

      // If not direct, look for 'More' / 'More actions' button to open dropdown
      const moreBtn = buttons.find(b => {
        const txt = clean(b.innerText);
        const aria = clean(b.getAttribute('aria-label'));
        return txt === 'more' || aria.includes('more actions');
      });

      if (moreBtn) {
        moreBtn.click();
        // Wait briefly for dropdown to render
        const dropdownItems = Array.from(document.querySelectorAll('.artdeco-dropdown__content--is-open span, .artdeco-dropdown__content--is-open div[role="button"]'));
        const dropdownFollow = dropdownItems.find(el => clean(el.innerText) === 'follow');
        if (dropdownFollow) {
          dropdownFollow.click();
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
