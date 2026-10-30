import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#contact-name');
    this.emailInput = page.locator('#contact-email');
    this.phoneInput = page.locator('#contact-phone');
    this.messageInput = page.locator('#contact-message');
    this.submitButton = page.locator('#contact-submit');
    this.successMessage = page.locator('text="Message received."');
    this.errorMessage = page.locator('form p.text-red-400');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async fillForm(details: { name?: string; email?: string; phone?: string; message?: string; type?: string }) {
    if (details.name !== undefined) await this.nameInput.fill(details.name);
    if (details.email !== undefined) await this.emailInput.fill(details.email);
    if (details.phone !== undefined) await this.phoneInput.fill(details.phone);
    if (details.type) {
      await this.page.click(`button:has-text("${details.type}")`);
    }
    if (details.message !== undefined) await this.messageInput.fill(details.message);
  }

  async submit() {
    await this.submitButton.click();
  }
}
