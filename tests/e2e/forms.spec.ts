import { test, expect, type Page } from '@playwright/test';
import { testData } from '../fixtures/testData';

/**
 * UI form tests. Every /api/* request is intercepted, so these tests never
 * reach the backend or write leads to the real database.
 */
const mockApi = async (page: Page, status = 200) => {
  const calls: { url: string; body: Record<string, unknown> }[] = [];
  await page.route('**/api/**', async (route) => {
    calls.push({ url: route.request().url(), body: route.request().postDataJSON() ?? {} });
    await route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(
        status === 200 ? { message: 'ok', status: 'success' } : { message: 'Mocked server error', status: 'error' }
      ),
    });
  });
  return calls;
};

const form = (page: Page) => page.locator('main form');
const nextBtn = (page: Page) => form(page).getByRole('button', { name: /Next Step/i });

const fillStepOne = async (page: Page, data: { name: string; email: string; phone: string }) => {
  await page.getByPlaceholder('John Doe').fill(data.name);
  await page.getByPlaceholder('Acme Corp').fill('QA Test Business');
  await page.getByPlaceholder('john@company.co.za').fill(data.email);
  await page.getByPlaceholder('+27 82 000 0000').fill(data.phone);
};

const advanceToFinalStep = async (page: Page) => {
  for (const step of [2, 3, 4]) {
    await nextBtn(page).click();
    await expect(page.getByText(`Step ${step} of 4`)).toBeVisible();
  }
};

test.describe('Contact page multi-step form', () => {
  test('requires the mandatory fields before advancing', async ({ page }) => {
    await mockApi(page);
    await page.goto('/contact');
    await expect(page.getByText('Step 1 of 4')).toBeVisible({ timeout: 15000 });

    await nextBtn(page).click();
    await expect(page.getByText('Step 1 of 4')).toBeVisible();
    const nameValid = await page.getByPlaceholder('John Doe').evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(nameValid).toBe(false);
  });

  test('rejects an invalid email address', async ({ page }) => {
    await mockApi(page);
    await page.goto('/contact');
    await fillStepOne(page, { ...testData.validContact, email: testData.invalidContact.invalidEmail });
    await nextBtn(page).click();

    await expect(page.getByText('Step 1 of 4')).toBeVisible();
    const emailValid = await page.getByPlaceholder('john@company.co.za').evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(emailValid).toBe(false);
  });

  test('Back returns to the previous step', async ({ page }) => {
    await mockApi(page);
    await page.goto('/contact');
    await fillStepOne(page, testData.validContact);
    await nextBtn(page).click();
    await expect(page.getByText('Step 2 of 4')).toBeVisible();
    await form(page).getByRole('button', { name: 'Back' }).click();
    await expect(page.getByText('Step 1 of 4')).toBeVisible();
    await expect(page.getByPlaceholder('John Doe')).toHaveValue(testData.validContact.name);
  });

  test('submits valid data to /api/quote and shows the success state', async ({ page }) => {
    const calls = await mockApi(page);
    await page.goto('/contact');
    await fillStepOne(page, testData.validContact);
    await advanceToFinalStep(page);

    await form(page).getByRole('button', { name: /Get My Digital Roadmap/i }).click();
    await expect(page.getByRole('heading', { name: 'Request Received' })).toBeVisible({ timeout: 10000 });

    expect(calls).toHaveLength(1);
    expect(calls[0].url).toContain('/api/quote');
    expect(calls[0].body).toMatchObject({
      name: testData.validContact.name,
      email: testData.validContact.email,
      phone: testData.validContact.phone,
    });
  });

  test('shows an error message when the server fails', async ({ page }) => {
    await mockApi(page, 500);
    await page.goto('/contact');
    await fillStepOne(page, testData.validContact);
    await advanceToFinalStep(page);

    await form(page).getByRole('button', { name: /Get My Digital Roadmap/i }).click();
    await expect(page.getByText('Mocked server error')).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Request Received' })).toHaveCount(0);
  });

  test('XSS input is treated as text, not executed', async ({ page }) => {
    await mockApi(page);
    let dialogFired = false;
    page.on('dialog', async (d) => {
      dialogFired = true;
      await d.dismiss();
    });

    await page.goto('/contact');
    await page.getByPlaceholder('John Doe').fill(testData.xssContact.name);
    await expect(page.getByPlaceholder('John Doe')).toHaveValue(testData.xssContact.name);
    await page.waitForTimeout(500);
    expect(dialogFired).toBe(false);
  });
});
