import { BasePage } from '../fixtures/base-page';
import { Page, Locator } from '@playwright/test';

export default class LoginPage extends BasePage {
  private userName: Locator;
  private password: Locator;
  private loginButton: Locator;
  private rememberMeCheckBox: Locator;

  constructor(page: Page) {
    super(page);
    this.userName = page.locator('[name="username"]');
    this.password = page.locator('[type="password"]');
    this.loginButton = page.locator('[type="submit"]');
    this.rememberMeCheckBox = page.locator('[name="user[remember_me]"]');
  }

  public getPage(): Page {
    return this.page;
  }

  async login(userName = process.env.ADMIN_USER!, password = process.env.ADMIN_PASS!) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    return this;
  }

  async verifyUserNameIsNotVisible(): Promise<void> {
    await this.verifyElementIsVisible(this.userName, false);
  }
}
