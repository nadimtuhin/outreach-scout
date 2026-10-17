export interface OpenTabsToolCallResult {
  content?: Array<{ type: string; text?: string }>;
  isError?: boolean;
}

export class OpenTabsClient {
  private readonly baseUrl: string;
  private readonly token: string;
  private sessionId: string | null = null;

  constructor(
    baseUrl = process.env.OPENTABS_URL || 'http://127.0.0.1:9515/mcp',
    token = process.env.OPENTABS_TOKEN || ''
  ) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  private async initializeSession(): Promise<string> {
    if (this.sessionId) {
      return this.sessionId;
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'initialize',
        params: {
          protocolVersion: '2024-11-05',
          capabilities: {},
          clientInfo: { name: 'outreach-scout', version: '1.0.0' },
        },
        id: 1,
      }),
    });

    const sid = res.headers.get('mcp-session-id');
    if (!sid) {
      throw new Error(`Failed to initialize OpenTabs session: status ${res.status}`);
    }
    this.sessionId = sid;
    return sid;
  }

  async listTabs(): Promise<Array<{ id: number; title: string; url: string }>> {
    const sid = await this.initializeSession();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      'mcp-session-id': sid,
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'browser_list_tabs',
          arguments: {},
        },
        id: 2,
      }),
    });

    const raw = await res.text();
    const line = raw.split('\n').find((l) => l.startsWith('data: '));
    if (!line) {
      return [];
    }

    try {
      const parsed = JSON.parse(line.slice(6)) as {
        result?: { content?: Array<{ type: string; text?: string }> };
      };
      const text = parsed.result?.content?.[0]?.text;
      if (!text) return [];
      return JSON.parse(text) as Array<{ id: number; title: string; url: string }>;
    } catch {
      return [];
    }
  }

  async callTool(name: string, args: Record<string, unknown>): Promise<string> {
    const sid = await this.initializeSession();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      'mcp-session-id': sid,
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name,
          arguments: args,
        },
        id: Date.now(),
      }),
    });

    const raw = await res.text();
    const line = raw.split('\n').find((l) => l.startsWith('data: '));
    if (!line) return '';
    try {
      const parsed = JSON.parse(line.slice(6)) as {
        result?: { content?: Array<{ type: string; text?: string }> };
      };
      return parsed.result?.content?.[0]?.text ?? '';
    } catch {
      return '';
    }
  }
}
