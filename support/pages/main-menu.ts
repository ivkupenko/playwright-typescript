import { BasePage } from '../fixtures/base-page';
import { Locator, Page } from '@playwright/test';

export default class MainMenu extends BasePage {
  private brandIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.brandIcon = page.locator('.oxd-brand-banner');
  }

  async verifyBrandIconIsVisible(): Promise<void> {
    await this.verifyElementIsVisible(this.brandIcon, true);
  }
}
