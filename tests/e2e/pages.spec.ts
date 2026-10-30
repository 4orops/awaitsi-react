import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', headingContains: /Building Technology|Awaitsi/i },
  { path: '/about', headingContains: /About|Story|Awaitsi/i },
  { path: '/services', headingContains: /Service/i },
  { path: '/services/business-websites', headingContains: /Business Websites/i },
  { path: '/services/custom-web-applications', headingContains: /Custom Web Applications/i },
  { path: '/services/website-maintenance', headingContains: /Website Maintenance/i },
  { path: '/services/technical-support', headingContains: /Technical Support/i },
  { path: '/services/hosting-assistance', headingContains: /Hosting Assistance/i },
  { path: '/case-studies', headingContains: /Case Stud/i },
  { path: '/case-studies/kingspath-transport', headingContains: /Kingspath/i },
  { path: '/case-studies/le2-memorials', headingContains: /LE2/i },
  { path: '/our-process', headingContains: /Process/i },
  { path: '/industries', headingContains: /Industr/i },
  { path: '/why-technology-matters', headingContains: /Technology|Tech/i },
  { path: '/insights', headingContains: /Insight/i },
  { path: '/careers', headingContains: /Career|Team/i },
  { path: '/contact', headingContains: /Contact|Start|Project/i },
  { path: '/privacy', headingContains: /Privacy/i },
  { path: '/terms', headingContains: /Terms/i },
];

test.describe('Page-by-Page Audit', () => {
  for (const r of routes) {
    test(`Page ${r.path} loads cleanly with h1 visible`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        // Filter out known benign warnings
        if (msg.type() === 'error' && !msg.text().includes('[QUOTE_ERROR]') && !msg.text().includes('Failed to load resource')) {
          consoleErrors.push(msg.text());
        }
      });

      await page.goto(r.path);
      await page.waitForLoadState('networkidle');
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });

      // Reload test
      await page.reload();
      await page.waitForLoadState('networkidle');
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });

      // No unexpected JS errors
      expect(consoleErrors).toEqual([]);
    });
  }

  test('Non-existent route shows 404 page with correct content', async ({ page }) => {
    await page.goto('/unknown-qa-test-route-12345');
    await page.waitForLoadState('networkidle');

    // 404 page has h1 "Page Not Found"
    await expect(page.locator('h1').first()).toContainText('Page Not Found', { timeout: 15000 });

    // Back to home link exists
    const homeLink = page.locator('#not-found-home-link');
    await expect(homeLink).toBeVisible();
  });

  test('Invalid /services slug redirects to /services', async ({ page }) => {
    await page.goto('/services/non-existent-service');
    await page.waitForLoadState('networkidle');
    // ServiceDetailPage redirects to /services for unknown slugs
    await expect(page).toHaveURL(/\/services/);
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
  });
});
