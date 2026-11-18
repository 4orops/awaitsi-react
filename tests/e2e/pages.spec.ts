import { test, expect } from '@playwright/test';

// Every routed page in src/routes/index.tsx with text from its <h1>.
const routes = [
  { path: '/', heading: /Build a Smarter Business/i },
  { path: '/about', heading: /Building Technology with Heart/i },
  { path: '/services/digital-systems', heading: /Digital Systems/i },
  { path: '/services/business-systems', heading: /Business Systems/i },
  { path: '/services/data-intelligence', heading: /Data & Intelligence/i },
  { path: '/services/ai-automation', heading: /AI & Automation/i },
  { path: '/services/digital-transformation', heading: /Digital Transformation/i },
  { path: '/business-cloud', heading: /Awaitsi Business Cloud/i },
  { path: '/approach', heading: /Our Approach/i },
  { path: '/work', heading: /Case Studies/i },
  { path: '/work/kingspath-transport', heading: /Kingspath Transport/i },
  { path: '/work/le2-memorials', heading: /LE2 Memorials/i },
  { path: '/digital-assessment', heading: /How Digital is Your Business/i },
  { path: '/insights', heading: /Insights/i },
  { path: '/contact', heading: /Start Your Digital Transformation/i },
  { path: '/privacy', heading: /Privacy/i },
  { path: '/terms', heading: /Terms/i },
];

test.describe('Page-by-Page Audit', () => {
  for (const r of routes) {
    test(`Page ${r.path} loads cleanly with its h1`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
          consoleErrors.push(msg.text());
        }
      });
      page.on('pageerror', (err) => consoleErrors.push(err.message));

      await page.goto(r.path);
      await expect(page.locator('h1').first()).toContainText(r.heading, { timeout: 20000 });

      // Deep link survives a reload
      await page.reload();
      await expect(page.locator('h1').first()).toContainText(r.heading, { timeout: 20000 });

      expect(consoleErrors).toEqual([]);
    });
  }

  test('Non-existent route shows 404 page with correct content', async ({ page }) => {
    await page.goto('/unknown-qa-test-route-12345');
    await expect(page.locator('h1').first()).toContainText('Page Not Found', { timeout: 15000 });
    await expect(page.locator('#not-found-home-link')).toBeVisible();
  });
});
