import { test, expect } from "@playwright/test";

export class UserDashboard {
    constructor(page) {
        this.page = page;
        this.menubutton = page.locator('button.v-toolbar__side-icon.v-btn.v-btn--icon');
        this.weekday = page.locator('.v-list__tile.theme--light:has-text("Tuesday")');
        // Locate the element by text "tavo motina"
        this.provider = page.locator('.v-list__group__items.v-list__group__items--no-action:has-text("tavo motina")');
        this.dish = page.locator('.dish-card.flex.ma-2.v-card.v-card--hover.v-card--raised.theme--light').first();
        // Correct the class selector if it's incorrect
        this.orderButton = page.locator('.orders-list-button.v-btn.v-btn--round.theme--dark.secondary');
        this.cancelButton = page.locator('.v-icon.v-icon--link.v-icon--right.material-icons.theme--dark');
        this.icon = page.locator('i.v-icon.pl-1.material-icons.theme--light.green--text.text--darken-2');
    }

    async chooseOrder() {
        // Ensure the page is fully loaded and elements are visible before interacting
        await this.weekday.click();
        await this.provider.click();
        await this.dish.click();
        await this.orderButton.click();
    }
    async checkIconVisibility() {
        return await this.icon.isVisible();
    }
    async removeOrder(){
        await this.cancelButton.click();
        await this.orderButton.click();
    }
}
