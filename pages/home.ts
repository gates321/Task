import { Page, expect } from "@playwright/test";
import { HomePage } from './home.po';

export default class HomeHelper {
    constructor(public page: Page) {
    }

    async clickAcceptCookies() {
        await this.page.click(HomePage.acceptCookies)
    }

    async clickAccessButton() {
        await this.page.click(HomePage.access);
    }

    async checkNameInput() {
        await expect(this.page.locator(HomePage.nameInput)).toBeVisible();
    }

    async enterName(name: string) {
        await this.page.fill(HomePage.nameInput, name)
    }

    async enterPassword(password: string) {
        await this.page.fill(HomePage.password, password)
    }

    async clickLoginButton() {
        await this.page.click(HomePage.accessbutton)
    }

    async checkForgotPassword() {
        await expect(this.page.locator(HomePage.forgotPassword)).toBeVisible();
    }

    async checkNotRegisteredYet() {
        await expect(this.page.locator(HomePage.notRegisteredYet)).toBeInViewport()
    }

    async checkSignUpButton() {
        await expect(this.page.locator(HomePage.signUpButton)).toBeInViewport()
    }

    async checkUserLoggedIn() {
        await expect(this.page.locator(HomePage.userNavigation)).toBeVisible();
    }

    async checkAlertBox() {
        await expect(this.page.locator(HomePage.alertMessage)).toBeVisible();
    }

    async checkBlankCredentialsAlertBox() {
        await expect(this.page.locator(HomePage.checkAllFieldsNeeded)).toBeVisible();
    }

}