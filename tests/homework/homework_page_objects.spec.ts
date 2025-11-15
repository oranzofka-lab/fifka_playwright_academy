import { test } from "@playwright/test";
import { EshopRegistrPage } from "../../src/pages/tradgate-eshop/tredgate-eshop.ts";

test("Registrace v Eshopu", async ({ page }) => {
  const eshopRegistrPage = new EshopRegistrPage(page);
  await eshopRegistrPage.open();
  await eshopRegistrPage.clickMyAccount();
  await eshopRegistrPage.clickRegister();
  await eshopRegistrPage.fillFirstName("Zuzka");
  await eshopRegistrPage.fillLastName("Bielikova");
  await eshopRegistrPage.fillEmail("oranzofka@gmail.com");
  await eshopRegistrPage.fillPhone("12345");
  await eshopRegistrPage.fillPasword("abc");
  await eshopRegistrPage.fillConfirmPassword("abc");
  await eshopRegistrPage.clickConfirm();
});
