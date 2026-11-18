import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop Large', width: 1920, height: 1080 },
  { name: 'Desktop Standard', width: 1366, height: 768 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Mobile Modern', width: 390, height: 844 },
  { name: 'Mobile Small', width: 375, height: 667 },
];

const hasHorizontalOverflow = (page: import('@playwright/test').Page) =>
  page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);

test.describe('Responsive Layout & Viewport Tests', () => {
  for (const vp of viewports) {
    test(`[${vp.name} ${vp.width}x${vp.height}] Homepage loads without horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });

      expect(await hasHorizontalOverflow(page)).toBe(false);

      const toggle = page.getByRole('button', { name: 'Toggle Navigation Menu' });
      const desktopAbout = page.locator('nav[aria-label="Main navigation"] .hidden.lg\\:flex a[href="/about"]');
      if (vp.width < 1024) {
        await expect(toggle).toBeVisible({ timeout: 5000 });
        await expect(desktopAbout).not.toBeVisible();
      } else {
        await expect(toggle).not.toBeVisible();
        await expect(desktopAbout).toBeVisible({ timeout: 5000 });
      }
    });
  }

  test('Mobile menu opens and closes correctly at 390x844', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Toggle Navigation Menu' });
    await expect(toggle).toBeVisible({ timeout: 10000 });

    const mobileAbout = page.locator('nav[aria-label="Main navigation"]').getByRole('link', { name: 'About', exact: true });
    await toggle.click();
    await expect(mobileAbout).toBeVisible({ timeout: 5000 });
    await toggle.click();
    await expect(mobileAbout).not.toBeVisible({ timeout: 5000 });
  });

  for (const path of ['/contact', '/insights', '/insights/where-professionalism-meets-every-journey']) {
    test(`${path} has no horizontal overflow at mobile width`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(path);
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });
      expect(await hasHorizontalOverflow(page)).toBe(false);
    });
  }
});
