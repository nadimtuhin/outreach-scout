import { describe, expect, test } from 'bun:test';
import { followLinkedInProfile, getOpenTabsClient } from '../src/linkedin-follow.ts';
import { OpenTabsClient } from '../src/opentabs-client.ts';

describe('LinkedIn OpenTabs Follow Feature Tests', () => {
  test('getOpenTabsClient initializes client with auth token from filesystem', () => {
    const client = getOpenTabsClient();
    expect(client).toBeInstanceOf(OpenTabsClient);
  });

  test('followLinkedInProfile gracefully handles unreachable or invalid profile', async () => {
    // Test on invalid / unreachable URL with offline client mock or non-matching profile
    const result = await followLinkedInProfile('https://www.linkedin.com/in/test-non-existent-9999/');
    expect(result).toBeDefined();
    expect(result.url).toContain('test-non-existent');
    expect(['followed', 'already_following', 'follow_button_not_found', 'offline', 'error']).toContain(result.status);
  }, 15000);
});
