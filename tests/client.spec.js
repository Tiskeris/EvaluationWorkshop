import {test,expect} from "@playwright/test";
import { UserDashboard } from "../pages/userDasboard";
import {LoginPage } from "../pages/logInPage";
const user = "gabriele.dedinaite@sft.com";
const password = "student699";

test.beforeEach(async ({ page }) => {
    let logInPage = new LoginPage(page);
    await logInPage.openPage();
    await logInPage.fillInCredantials(user,password);
    await logInPage.loginButton.click();
    await page.waitForTimeout(1000);
  });
  test('choose order', async ({ page }) => {
    await page.waitForTimeout(1000);
    let userDashboard = new UserDashboard(page);
    await userDashboard.chooseOrder();
    await page.waitForTimeout(500);
    const isIconVisible = await userDashboard.checkIconVisibility();
    expect(isIconVisible).toBe(true);
    await page.waitForTimeout(500);
    await userDashboard.removeOrder();
  });