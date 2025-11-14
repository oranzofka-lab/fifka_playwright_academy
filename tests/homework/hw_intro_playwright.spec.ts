import { test } from "@playwright/test";


test("Vlozeni do kosiku", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop/");
  await page.locator("#search input").fill("iphone");
  await page.locator('#search [type="button"]').click();
  await page.getByRole("link", { name: "iPhone" }).first().click();
  await page.locator("#button-cart").click();
});
