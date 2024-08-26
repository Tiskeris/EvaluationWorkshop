import {test,expect} from "@playwright/test";
import {LoginPage } from "../pages/logInPage";
const user = "admin4@sft.com";
const password = "admin653";

test.beforeEach(async ({ page }) => {
    let logInPage = new LoginPage(page);
    await logInPage.openPage();
    await logInPage.fillInCredantials(user,password);
    await logInPage.loginButton.click();
  });
test(`check for ${user}`, async ({ page }) => {
    await page.waitForTimeout(1000);
    const daySpan = page.locator('span', { hasText: 'Monday' });
    await expect(daySpan).toHaveText('Monday');
  });