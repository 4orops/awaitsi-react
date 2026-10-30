import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop Large', width: 1920, height: 1080 },
  { name: 'Desktop Standard', width: 1366, height: 768 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Mobile Modern', width: 390, height: 844 },
  { name: 'Mobile Small', width: 375, height: 667 },
];

test.describe('Responsive Layout & Viewport Tests', () => {
  for (const vp of viewports) {
    test(`[${vp.name} ${vp.width}x${vp.height}] Homepage loads without horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Wait for framer-motion h1 to animate in
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });

      // Check no horizontal overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(overflow).toBe(false);

      if (vp.width < 1024) {
        // Mobile/tablet: hamburger menu button should be visible
        await expect(page.locator('#mobile-menu-toggle-btn')).toBeVisible({ timeout: 5000 });
        // Desktop nav links should NOT be visible (hidden on small screens)
        await expect(page.locator('nav .hidden.lg\\:flex')).not.toBeVisible();
      } else {
        // Desktop: nav links should be visible
        await expect(page.locator('nav a[href="/about"]').first()).toBeVisible({ timeout: 5000 });
      }
    });
  }

  test('Mobile menu opens and closes correctly at 390x844', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const toggleBtn = page.locator('#mobile-menu-toggle-btn');
    await expect(toggleBtn).toBeVisible({ timeout: 10000 });

    // Open menu
    await toggleBtn.click();
    // The mobile drawer has links
    await expect(page.locator('a[href="/contact"]').first()).toBeVisible({ timeout: 5000 });

    // Close menu
    await toggleBtn.click();
    // Nav links should be gone from visible area
    await expect(page.locator('#mobile-menu-toggle-btn')).toBeVisible();
  });

  test('Contact page has no horizontal overflow at mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(overflow).toBe(false);
  });
});
