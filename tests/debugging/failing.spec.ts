// tests/learning/debugging/
// failing.spec.ts
import { test, expect } from "@playwright/test";

test("Failing Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator("#non_existing"), "Padající assert").toBeVisible();
});
a; // tests/learning/debugging/
// failing.spec.ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../../src/pages/pmtool/dashboard_page.ts";

test("Failing Test", async ({ page }) => {
  const username = "uživatel";
  const loginPage = new LoginPage(page);
  const dashboardPage: DashboardPage = null;
  let password = "";
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator("#non_existing"), "Padající assert").toBeVisible();
  password = "123456";
});
