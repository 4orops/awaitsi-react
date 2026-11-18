import { test, expect } from '@playwright/test';

test.describe('Accessibility & Keyboard Navigation Tests', () => {
  test('Homepage contains correct semantic landmarks', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav[role="navigation"][aria-label="Main navigation"]')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer[aria-label="Site footer"]')).toBeAttached();
  });

  test('All images on the homepage have non-empty alt text', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });

    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt, `Image #${i} missing alt attribute`).not.toBeNull();
      expect(alt?.length, `Image #${i} has empty alt attribute`).toBeGreaterThan(0);
    }
  });

  test('Mobile menu toggle button has an accessible name', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Toggle Navigation Menu' })).toBeVisible({ timeout: 10000 });
  });

  test('Keyboard Tab navigation reaches interactive elements', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }
    const activeTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT']).toContain(activeTag);
  });

  test('Insights article has one h1 and labelled navigation regions', async ({ page }) => {
    await page.goto('/insights/closing-the-digital-gap-for-south-african-smes');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
    await expect(page.locator('nav[aria-label="Related pages"]')).toBeVisible();
  });

  test('404 page has proper heading structure', async ({ page }) => {
    await page.goto('/non-existent-page-qa');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible({ timeout: 15000 });
    await expect(h1).toContainText('Page Not Found');
    await expect(page.locator('#not-found-home-link')).toBeVisible();
  });

  test('Lazy-loaded route settles to its content', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 20000 });
  });
});
