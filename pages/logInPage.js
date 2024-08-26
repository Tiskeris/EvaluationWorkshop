import { test, expect } from "@playwright/test";

export class LoginPage{
    constructor(page){
        this.page = page;
        this.userNameInput = page.locator("input[aria-label='Email']");
        this.userPasswordInput = page.locator("input[aria-label='Password']");
        this.loginButton = page.locator('button.v-btn.v-btn--block.theme--dark.primary:has-text("Login")');
    }
    async openPage(){
        await this.page.goto("https://lunch.devbstaging.com/login-password");
    }
    async fillInCredantials(name,password){
        await this.userNameInput.fill(name);
        await this.userPasswordInput.fill(password);
    }
}