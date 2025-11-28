import { test } from "@playwright/test";
import path from "path";

test.describe("Forms Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html");
  });

  test("fill and pressSequesntially", async ({ page }) => {
    const nameImput = page.locator("#name");
    await nameImput.fill("Start");
    await nameImput.fill("End");
    await nameImput.pressSequentially("Kde toto bude?"); //vypada jako by psal clovek
    await nameImput.clear(); // vycisti hodnotu v inputu
    await nameImput.pressSequentially("pisu pomalu", { delay: 500 }); //Vypise string se spoydenim 2 znaky za sekundu
  });

  test("Select Option", async ({ page }) => {
    const genderSelect = page.locator("#gender");
    await genderSelect.selectOption("female"); // Výběr z prvku <select> pomocí atributu value v prvku <option>
    await genderSelect.selectOption({ label: "Male" }); //Výběr z <select> pomocí textu <option>
  });

  test("checkbox and radiobutton check", async ({ page }) => {
    await page.locator("#contact-email").check(); // * Zakliknutí radio buttonu
    await page.locator("#interests-music").check();
    await page.locator("#interests-travel").check();
    await page.locator("#interests-travel").uncheck(); //Odkliknutí prvku, funguje jen pro checkbox, radiobutton nejde odskrnout
  });

  test("fill date", async ({ page }) => {
    await page.locator("#date-od-birth").fill("1999-01-05");
  });

  test("Upload file", async ({ page }) => {
    const filePath = path.resolve(__dirname, "../../../assets/upload_file.txt");
    // require("../../../assets/upload_file.txt"); //require  nam pomaha zobrazit cestu k souboru

    // * Zapneme listenera (odchytávač) na událost vybrání souboru (filechooser) -> toto je asynchronní akce, NESMÍME před ni dát await (chceme aby listener poslouchal, ale nečekal)
    const fileChooserPromise = page.waitForEvent("filechooser"); // ? do const uložíme odkaz na listenara, abychom se po kliknutí na input type="file" mohli odkázat na výběr souboru
    // * Klikneme na tlačítko pro nahrání souboru (input type="file")
    await page.locator("#file-upload").click();
    // * Počkáme, než listener fileChooserPromise odchytí otevření okna pro výběr okna a uložíme výsledek (odchycené okno) do proměnné (abychom mohli následně vložit soubor)
    const fileChooser = await fileChooserPromise;
    // * Nahrajeme soubor pomocí proměnné filePath, kterou máme nachystanou z předchozích kroků
    await fileChooser.setFiles(filePath);
    // * Počkáme několik sekund, abychom v screenshotu viděli soubor vybraný
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(2000);
  });
});
