import { test, expect } from '@playwright/test';

const mainNav = (page: import('@playwright/test').Page) => page.locator('nav[aria-label="Main navigation"]');

test.describe('Navigation & Link Verification Tests', () => {
  test('Navbar logo links home', async ({ page }) => {
    await page.goto('/about');
    const logo = mainNav(page).locator('img[alt="Awaitsi logo"]');
    await expect(logo).toBeVisible({ timeout: 20000 });
    await logo.click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('Desktop nav links navigate to correct pages', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const navLinks = ['/work', '/approach', '/business-cloud', '/insights', '/about'];

    for (const path of navLinks) {
      await page.goto('/');
      const link = mainNav(page).locator(`a[href="${path}"]`).first();
      await expect(link).toBeVisible({ timeout: 10000 });
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
    }
  });

  test('Solutions dropdown navigates to a service pillar', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await mainNav(page).getByRole('button', { name: 'Solutions' }).hover();
    const item = mainNav(page).locator('a[href="/services/business-systems"]').first();
    await expect(item).toBeVisible({ timeout: 5000 });
    await item.click();
    await expect(page).toHaveURL(/\/services\/business-systems/);
    await expect(page.locator('h1').first()).toContainText('Business Systems', { timeout: 15000 });
  });

  test('Book Digital Assessment CTA navigates to the assessment', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await mainNav(page).getByRole('link', { name: /Book Digital Assessment/i }).click();
    await expect(page).toHaveURL(/\/digital-assessment/);
  });

  test('Footer Privacy and Terms links navigate correctly', async ({ page }) => {
    for (const path of ['/privacy', '/terms']) {
      await page.goto('/');
      const link = page.locator(`footer a[href="${path}"]`).first();
      await link.scrollIntoViewIfNeeded();
      await link.click();
      await expect(page).toHaveURL(new RegExp(path));
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
    }
  });

  test('Mobile hamburger menu opens and navigates', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Toggle Navigation Menu' });
    await expect(toggle).toBeVisible({ timeout: 10000 });
    await toggle.click();

    const aboutLink = mainNav(page).getByRole('link', { name: 'About', exact: true });
    await expect(aboutLink).toBeVisible({ timeout: 5000 });
    await aboutLink.click();
    await expect(page).toHaveURL(/\/about$/);
  });
});
