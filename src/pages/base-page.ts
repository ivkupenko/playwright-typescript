import { Helpers } from '../utils/helpers';
import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage extends Helpers {
  constructor(page: Page) {
    super(page);
  }

  async verifyElementIsVisible(element: Locator, visible: boolean): Promise<void> {
    if (visible) {
      await expect(element).toBeVisible();
    } else {
      await expect(element).toBeHidden();
    }
  }
}
