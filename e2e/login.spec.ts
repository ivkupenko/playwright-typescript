import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('OrangeHRM Login', () => {
  test('should login successfully with valid credentials', async ({ loginPage }) => {
    await test.step('Go to the login page using baseURL', async () => {
      await loginPage.navigateTo();
      await loginPage.login();
    });

    await test.step('Wait for dashboard or any element that appears only after login', async () => {
      await expect(loginPage.getPage().locator('h6:has-text("Dashboard")')).toBeVisible();
    });
  });
});
