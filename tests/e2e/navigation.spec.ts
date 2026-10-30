import { test, expect } from '@playwright/test';

test.describe('Navigation & Link Verification Tests', () => {
  test('Navbar logo link is visible and clickable', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Logo image inside a link to '/'
    const logo = page.locator('nav img[alt="Awaitsi logo"]').first();
    await expect(logo).toBeVisible({ timeout: 20000 });
    await logo.click();
    await expect(page).toHaveURL('http://localhost:5173/');
  });

  test('Desktop nav links navigate to correct pages', async ({ page }) => {
    const navLinks = [
      { text: 'About', expectedPath: '/about' },
      { text: 'Our Process', expectedPath: '/our-process' },
      { text: 'Industries', expectedPath: '/industries' },
      { text: 'Insights', expectedPath: '/insights' },
      { text: 'Careers', expectedPath: '/careers' },
      { text: 'Contact', expectedPath: '/contact' },
    ];

    for (const item of navLinks) {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      // Wait for nav to render, then click by href
      const link = page.locator(`nav a[href="${item.expectedPath}"]`).first();
      await expect(link).toBeVisible({ timeout: 10000 });
      await link.click();
      await expect(page).toHaveURL(new RegExp(item.expectedPath));
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
    }
  });

  test('Services dropdown menu navigates to detail pages', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Hover over the Services nav link
    await page.locator('nav a[href="/services"]').first().hover();
    const dropdownItem = page.locator('a[href="/services/business-websites"]').first();
    await expect(dropdownItem).toBeVisible({ timeout: 5000 });
    await dropdownItem.click();
    await expect(page).toHaveURL(/.*\/services\/business-websites/);
    await expect(page.locator('h1').first()).toContainText('Business Websites', { timeout: 15000 });
  });

  test('Case Studies dropdown menu navigates to detail pages', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('nav a[href="/case-studies"]').first().hover();
    const kingspathLink = page.locator('a[href="/case-studies/kingspath-transport"]').first();
    await expect(kingspathLink).toBeVisible({ timeout: 5000 });
    await kingspathLink.click();
    await expect(page).toHaveURL(/.*\/case-studies\/kingspath-transport/);
    await expect(page.locator('h1').first()).toContainText('Kingspath', { timeout: 15000 });
  });

  test('Footer Privacy and Terms links navigate correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Footer Privacy Policy link
    const privacyLink = page.locator('footer a[href="/privacy"]').first();
    await privacyLink.scrollIntoViewIfNeeded();
    await privacyLink.click();
    await expect(page).toHaveURL(/.*\/privacy/);
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Footer Terms link
    const termsLink = page.locator('footer a[href="/terms"]').first();
    await termsLink.scrollIntoViewIfNeeded();
    await termsLink.click();
    await expect(page).toHaveURL(/.*\/terms/);
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
  });

  test('Mobile hamburger menu opens and contains nav links', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const mobileBtn = page.locator('#mobile-menu-toggle-btn');
    await expect(mobileBtn).toBeVisible({ timeout: 10000 });
    await mobileBtn.click();

    // Mobile drawer should now be visible with nav links
    const aboutLink = page.locator('a[href="/about"]').first();
    await expect(aboutLink).toBeVisible({ timeout: 5000 });
  });
});
