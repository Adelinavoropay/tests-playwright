import { Page } from "@playwright/test";
import { getAuthData } from "./utils.regist";

export class RegisterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://demo.learnwebdriverio.com/register");
  }

  async login() {
    const authData = getAuthData();
    await this.page.getByPlaceholder('Username').fill(authData.username);
    await this.page.getByPlaceholder(`Email`).fill(authData.email); 
    await this.page.getByPlaceholder(`Password`).fill(authData.password); 
    await this.page.click("//button"); 
  }
}