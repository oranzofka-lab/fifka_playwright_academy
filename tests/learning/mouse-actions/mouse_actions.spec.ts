import { expect, test } from "@playwright/test";

test.describe("Mouse Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });
  test("Mouse Hover", async ({ page }) => {
    await page.locator("#hover-box").hover();
    await expect(page.locator('[data-testid="hover-message"]')).toBeVisible();
  });

  test("Drag and Drop", async ({ page }) => {
    const draggable = page.locator("#drag1");
    const dropZone = page.locator("#drop1");

    await dropZone.scrollIntoViewIfNeeded(); // ? Zacrollování na místo kam přetahujeme prvek (pokud není pro Playwright prvek vidět, nepřetáhne)
    await draggable.dragTo(dropZone);
    await expect(page.locator("#dropped-message")).toBeVisible();
  });
});
