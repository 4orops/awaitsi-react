import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroTitle: Locator;
  readonly heroCTA: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroTitle = page.locator('h1').first();
    this.heroCTA = page.locator('#main-content button, #main-content a');
    this.footer = page.locator('footer');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveURL('http://localhost:5173/');
  }

  async verifyLoaded() {
    await expect(this.heroTitle).toBeVisible();
    await expect(this.footer).toBeVisible();
  }
}
