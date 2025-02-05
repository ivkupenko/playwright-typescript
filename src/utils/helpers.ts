import { Page } from '@playwright/test';

export abstract class Helpers {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    //url shoud be entered without baseURL part. Like '/product/
    await this.page.goto(url);
  }

  async openWebApp(): Promise<void> {
    await this.page.goto('/');
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState();
  }
}
