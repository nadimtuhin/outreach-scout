import { afterAll, describe, expect, test } from 'bun:test';
import { OpenTabsClient } from '../src/opentabs-client.ts';

describe('OpenTabsClient timeouts', () => {
  // A server that accepts the request but never answers (hung daemon)
  const server = Bun.serve({
    port: 0,
    hostname: '127.0.0.1',
    fetch: () => new Promise<Response>(() => {}),
  });

  afterAll(() => {
    server.stop(true);
  });

  test('listTabs rejects instead of hanging forever when the daemon stalls', async () => {
    const client = new OpenTabsClient(`http://127.0.0.1:${server.port}/mcp`, '', 200);
    const started = Date.now();
    await expect(client.listTabs()).rejects.toThrow();
    expect(Date.now() - started).toBeLessThan(2000);
  }, 3000);
});
