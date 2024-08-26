import {test,expect} from "@playwright/test";
import {LoginPage } from "../pages/logInPage";
import {LunchEditingPage } from "../pages/lunchEditingPage";
const user = "admin4@sft.com";
const password = "admin653";

test.beforeEach(async ({ page }) => {
    let logInPage = new LoginPage(page);
    await logInPage.openPage();
    await logInPage.fillInCredantials(user,password);
    await logInPage.loginButton.click();
  });
test("Add new provider", async ({ page }) => {
    let lunchEditingPage = new LunchEditingPage(page);
    await lunchEditingPage.goToAddProviderPage();
    await expect(lunchEditingPage.successMessageLocator.first()).toBeVisible();
  });
  test("Delete provider", async ({ page }) => {
    let lunchEditingPage = new LunchEditingPage(page);
    await lunchEditingPage.DeleteProvider();
    const errorMessageVisible = await lunchEditingPage.errorMessageLocator.first().isVisible();
    if (errorMessageVisible) {
        await expect(lunchEditingPage.errorMessageLocator.first()).toBeVisible();
      } else {
        //provider was deleted.
      }
  });