import { Locator, Page } from "@playwright/test";

export class LostPassword {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly emailInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator(
      "#nth-child(2) > .input-icon > .form-control"
    );
    this.emailInput = page.locator(
      "#th-child(3) > .input-icon > .form-control"
    );
    this.sendButton = page.locator("#.btn-info");
  }

  async fillUserName(username: string) {
    await this.userNameInput.fill(username);
  }
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async clickSend() {
    await this.sendButton.click();
  }
}
