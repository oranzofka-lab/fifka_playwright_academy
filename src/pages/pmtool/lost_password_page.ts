import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class LostPassword {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly emailInput: Locator;
  readonly sendButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator(
      "#nth-child(2) > .input-icon > .form-control"
    );
    this.emailInput = page.locator(
      "#th-child(3) > .input-icon > .form-control"
    );
    this.sendButton = page.locator("#.btn-info");
    this.backButton = page.locator("#back-btn");
  }

  async fillUsername(username: string) {
    await this.userNameInput.fill(username);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  async clickSend() {
    await this.sendButton.click();
    return new LoginPage(this.page);
  }

  async clickBack() {
    await this.backButton.click();
    return new LoginPage(this.page);
  }
}
