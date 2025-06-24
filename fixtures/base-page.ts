import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url = process.env.BASE_URL!): Promise<Page> {
    // url should be entered without baseURL part. Like '/product/'
    await this.page.goto(url);
    return this.page;
  }

  async openWebApp(): Promise<Page> {
    await this.page.goto('/');
    return this.page;
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState();
  }

  async verifyElementIsVisible(element: Locator, visible: boolean): Promise<void> {
    if (visible) {
      await expect(element).toBeVisible();
    } else {
      await expect(element).toBeHidden();
    }
  }
}
