import { expect } from "@playwright/test";

export class LunchEditingPage{
    constructor(page){
        this.page = page;
        this.lunchEditingButton = page.locator('div.v-list__tile__title span', { hasText: 'Lunch Editing' });
        this.providerEditingButton = page.locator('i.v-icon.material-icons.theme--dark', { hasText: 'close' });
        this.addProviderButton = page.locator('i.v-icon.material-icons.theme--dark', { hasText: 'add' });
        this.providerNameInput = page.locator('input[aria-label="Provider Name"]');
        this.providerColor = page.locator('input[aria-label="Color"]');
        this.providerDishPrice = page.locator('input[aria-label="Price"]');
        this.providerDishCount = page.locator('input[aria-label="Count"]');
        this.providerDishName = page.locator('input[aria-label="Selection Name"]');
        this.providerSaveDishButton = page.locator('button:has-text("Save")');
        this.firstProviderOnTheList = page.locator("(//div[@class='v-list__tile__title red--text'])[1]");
        this.deleteFirstProviderButton = page.locator('a.v-list__tile.v-list__tile--link:has-text("Delete")');
        this.errorMessageLocator = page.locator('div', { hasText: 'Unable to delete provider, because it already has orders or is in the previous week.' });
        this.successMessageLocator = page.locator('div.v-snack', { hasText: 'Provider Succesfully saved.' });
        
    }
    
    async goToAddProviderPage(){
        const randomString = generateRandomString(10);
        let randomNumber = generateRandomNumber(23423, 2342344324).toString();
        await this.lunchEditingButton.click();
        await this.providerEditingButton.hover();
        await this.addProviderButton.click();
        await this.providerNameInput.first().fill(randomString);
        await this.providerColor.fill('Red');
        await this.providerDishPrice.first().fill((generateRandomNumber(1, 100)).toString());
        await this.providerDishCount.first().fill((generateRandomNumber(1, 1000)).toString());
        //V dont know what to do with this field it doesnt accept anything numbers,strings.
        await this.providerDishName.first().fill(randomNumber);
        await this.providerSaveDishButton.first().click();
    }
    async DeleteProvider(){
        await this.lunchEditingButton.click();
        await this.page.waitForTimeout(5000);
        await this.firstProviderOnTheList.click({ button: 'right' });
        await this.deleteFirstProviderButton.first().click();

        await expect(this.errorMessageLocator.first()).toBeVisible();
    }
}
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }