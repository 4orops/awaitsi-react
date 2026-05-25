import { test, expect } from '@playwright/test';

test.describe('Awaitsi UI E2E Tests', () => {
  test('should load the homepage and display correct hero text', async ({ page }) => {
    await page.goto('/');

    // Check if the hero section has the main title
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible({ timeout: 15000 });
    await expect(heroTitle).toContainText('WE BUILD');
    
    // Check for the second part of the title
    await expect(page.locator('text="DIGITAL"').first()).toBeVisible();
    
    // Check navigation links
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
    await expect(nav.getByText('Services', { exact: true })).toBeVisible();
    await expect(nav.getByText('Story', { exact: true })).toBeVisible();
    await expect(nav.getByText('Contact', { exact: true })).toBeVisible();
  });

  test('should navigate to the Services section', async ({ page }) => {
    await page.goto('/');

    // Click on the Services link in the navigation
    await page.click('text="Services"');

    // Check if the Services section is visible and contains expected elements
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
    
    // Check for specific service cards
    await expect(page.locator('text=Web Development').first()).toBeVisible();
    await expect(page.locator('text=Custom CRM Systems').first()).toBeVisible();
  });

  test('should scroll to the Contact form and have form inputs visible', async ({ page }) => {
    await page.goto('/');

    // Click on the Contact link in the navigation
    await page.click('text="Contact"');

    // Check if the Contact section is visible
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Check if form inputs are available
    await expect(page.getByPlaceholder('John Doe')).toBeVisible();
    await expect(page.getByPlaceholder('john@company.com')).toBeVisible();
    await expect(page.getByPlaceholder('+27 83 123 4567')).toBeVisible();
    
    // Check if project type selectors are visible
    await expect(page.locator('button:has-text("Web Development")')).toBeVisible();
  });

  test('should navigate to Privacy Policy page from footer', async ({ page }) => {
    await page.goto('/');

    // Click on Privacy Policy link in the footer
    await page.click('text=Privacy Policy');

    // Check if Privacy Policy page loaded
    await expect(page).toHaveURL(/.*privacy/);
    await expect(page.locator('h1')).toHaveText(/PRIVACY/i);
  });
});
