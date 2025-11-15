import { Page, Locator } from "@playwright/test";

export class EshopRegistrPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccount: Locator;
  readonly register: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/eshop/";
    this.myAccount = page.locator("#top-links a i.fa-user");
    this.register = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }
  async open() {
    await this.page.goto(this.url);
  }

  async clickMyAccount() {
    await this.myAccount.click();
  }

  async clickRegister() {
    await this.register.click();
  }

  async fillFirstName(firstname: string) {
    await this.firstNameInput.fill(firstname);
  }

  async fillLastName(lastname: string) {
    await this.lastNameInput.fill(lastname);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPhone(phone: string) {
    await this.telephoneInput.fill(phone);
  }

  async fillPasword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(confirmPassword: string) {
    await this.passwordConfirmInput.fill(confirmPassword);
  }

  async clickConfirm() {
    await this.continueButton.click();
  }
}
