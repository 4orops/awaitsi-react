import { Page, Locator, expect } from '@playwright/test';

export class NavigationComponent {
  readonly page: Page;
  readonly logo: Locator;
  readonly navLinks: Locator;
  readonly bookConsultationBtn: Locator;
  readonly mobileMenuBtn: Locator;
  readonly mobileDrawer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('nav a[aria-label="Awaitsi Home"]');
    this.navLinks = page.locator('nav a');
    this.bookConsultationBtn = page.locator('#nav-consultation-btn');
    this.mobileMenuBtn = page.locator('#mobile-menu-toggle-btn');
    this.mobileDrawer = page.locator('nav .lg\\:hidden');
  }

  async clickNav(linkText: string) {
    await this.page.click(`nav a:has-text("${linkText}")`);
  }

  async openServicesDropdown() {
    await this.page.hover('nav a:has-text("Services")');
  }

  async openCaseStudiesDropdown() {
    await this.page.hover('nav a:has-text("Case Studies")');
  }

  async openMobileMenu() {
    await this.mobileMenuBtn.click();
    await expect(this.mobileDrawer).toBeVisible();
  }
}
