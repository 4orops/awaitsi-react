import { test, expect } from '@playwright/test';
import { testData } from '../fixtures/testData';

test.describe('Form Submission & Validation Tests', () => {
  test('Contact form on /contact page requires mandatory fields', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    // Submit button is visible
    await expect(page.locator('#contact-submit')).toBeVisible({ timeout: 15000 });

    // Click submit without filling out required fields
    await page.click('#contact-submit');

    // Client-side validation: form should show an error message
    const error = page.locator('#contact-form p.text-red-400, .text-red-400');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
    await expect(error.first()).toContainText(/name|email|message/i);
  });

  test('Contact form submits with valid data and shows success state', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    // Fill in all required fields
    await page.fill('#contact-name', testData.validContact.name);
    await page.fill('#contact-email', testData.validContact.email);
    await page.fill('#contact-phone', testData.validContact.phone);

    // Select project type pill
    await page.locator('button.px-4.py-2\\.5', { hasText: testData.validContact.projectType }).first().click();

    await page.fill('#contact-message', testData.validContact.message);

    // Submit
    await page.click('#contact-submit');

    // Verify loading state appears briefly (button text changes)
    // Then verify success state
    await expect(page.locator('text="Message received."')).toBeVisible({ timeout: 20000 });
  });

  test('Careers page expression of interest form submits and shows success', async ({ page }) => {
    await page.goto('/careers');
    await page.waitForLoadState('networkidle');

    // Fill in required fields
    await page.fill('input[placeholder="Your full name"]', 'QA Test Applicant');
    await page.fill('input[placeholder="your@email.co.za"]', 'qa.applicant@test.co.za');
    await page.selectOption('select', 'Frontend Development (React/TypeScript)');
    await page.fill('textarea', 'QA audit: Testing expression of interest form submission functionality.');

    // Submit
    await page.click('button:has-text("Submit Expression of Interest")');

    // Verify success
    await expect(page.locator('text="Expression Received!"')).toBeVisible({ timeout: 10000 });

    // Test "Submit Another Response" button
    await page.click('button:has-text("Submit Another Response")');
    await expect(page.locator('input[placeholder="Your full name"]')).toBeVisible({ timeout: 5000 });
  });

  test('Consultation modal multi-step form works end-to-end', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open consultation modal from navbar CTA
    const consultBtn = page.locator('#nav-consultation-btn');
    await expect(consultBtn).toBeVisible({ timeout: 10000 });
    await consultBtn.click();

    // Modal should be visible
    const modal = page.locator('.fixed.inset-0.z-50').first();
    await expect(modal).toBeVisible({ timeout: 5000 });

    // Step 1: Select service type
    await page.click('button:has-text("Business Website")');
    // "Next Step" button
    await page.click('button[type="submit"]:has-text("Next Step")');

    // Step 2: Budget & Timeline
    await page.click('button:has-text("R5,000 - R15,000")');
    await page.click('button:has-text("Within 1 Month")');
    await page.click('button[type="submit"]:has-text("Next Step")');

    // Step 3: Contact Details
    await page.fill('input[placeholder="e.g. Sipho Ndlovu"]', 'QA Test User');
    await page.fill('input[placeholder="sipho@company.co.za"]', 'qa@awaitsi.co.za');

    // Submit
    await page.click('button[type="submit"]:has-text("Submit Consultation Request")');

    // Verify success screen
    await expect(page.locator('text="Consultation Request Received!"')).toBeVisible({ timeout: 15000 });

    // Close modal
    await page.click('button:has-text("Close Window")');
    await expect(modal).not.toBeVisible({ timeout: 5000 });
  });

  test('Consultation modal "Back" navigation works between steps', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('#nav-consultation-btn').click();

    // Step 1: select a service
    await page.click('button:has-text("Custom Web Application")');
    await page.click('button[type="submit"]:has-text("Next Step")');

    // Step 2: should be visible. Click Back
    await expect(page.locator('text="Scope & Timeline"')).toBeVisible({ timeout: 5000 });
    await page.click('button:has-text("Back")');

    // Should return to Step 1
    await expect(page.locator('text="Service Need"')).toBeVisible({ timeout: 5000 });
  });

  test('JourneyModal / Quote form on hero CTA works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find hero CTA - "Book a Consultation" button in hero
    const heroBtn = page.locator('#hero-book-consultation');
    await expect(heroBtn).toBeVisible({ timeout: 10000 });
    await heroBtn.click();

    // Consultation modal opens
    await expect(page.locator('.fixed.inset-0.z-50').first()).toBeVisible({ timeout: 5000 });
  });

  test('Contact form rejects invalid email format', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    await page.fill('#contact-name', 'Test User');
    await page.fill('#contact-email', 'not-an-email');
    await page.fill('#contact-message', 'Test message for email validation.');

    await page.click('#contact-submit');

    // Browser native validation should prevent submission or show custom error
    // The input[type="email"] browser validation should kick in
    const emailInput = page.locator('#contact-email');
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage.length).toBeGreaterThan(0);
  });

  test('XSS input in contact form is handled without script execution', async ({ page }) => {
    const alertTriggered: boolean[] = [];
    page.on('dialog', dialog => {
      alertTriggered.push(true);
      dialog.dismiss();
    });

    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    await page.fill('#contact-name', testData.xssContact.name);
    await page.fill('#contact-email', testData.xssContact.email);
    await page.fill('#contact-message', testData.xssContact.message);

    await page.click('#contact-submit');
    await page.waitForTimeout(1000);

    // XSS alert must NOT have fired
    expect(alertTriggered.length).toBe(0);
  });
});
