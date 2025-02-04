import { test } from '../src/fixtures/pages';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openWebApp();
  });

  test('login', async ({ loginPage, mainMenu }) => {
    await loginPage.login();
    await loginPage.verifyUserNameIsNotVisible();
    await mainMenu.verifyBrandIconIsVisible();
  });
});
