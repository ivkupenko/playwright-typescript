import LoginPage from '../pages/login-page';
import MainMenu from '../components/main-menu';
import { test as base } from '@playwright/test';

export const test = base.extend<{
  mainMenu: MainMenu;
  loginPage: LoginPage;
  // TODO: add other pages here
}>({
  mainMenu: async ({ page }, use) => {
    const mainMenu = new MainMenu(page);
    await use(mainMenu);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  // TODO: add other pages here
});
