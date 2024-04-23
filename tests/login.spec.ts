import { test } from '@playwright/test';
import HomeHelper from '../pages/home';
import Utils from '../utils/utils';
test.describe('Login Functionality', () => {
  let homeHelper;
  test.beforeEach(async ({ page }) => {
    homeHelper = new HomeHelper(page)
    await page.goto('https://m.apuestas.codere.es/');
    await homeHelper.clickAcceptCookies();
    await homeHelper.clickAccessButton();
  });

  test('Check Proper Login', async ({ }) => {
    await homeHelper.enterName('testproes2405')
    await homeHelper.enterPassword('Vale2015')
    await homeHelper.clickLoginButton();
    await homeHelper.checkUserLoggedIn()
  });

  test('Check login Not Registered Yet', async ({ }) => {
    await homeHelper.checkNotRegisteredYet();
  });

  test('Check Forgot Password', async ({ }) => {
    await homeHelper.checkForgotPassword()
  });

  test('Check Sign Up Button', async ({ }) => {
    await homeHelper.checkSignUpButton()
  });

  test('Check False User Name login', async ({ }) => {
    const randomString = Utils.randomStringNoINT(5)
    await homeHelper.enterName(randomString)
    await homeHelper.enterPassword('Vale2015')
    await homeHelper.clickLoginButton();
    await homeHelper.checkAlertBox()
  });

  test('Check False Password login', async ({ }) => {
    const randomString = Utils.randomStringNoINT(5)
    await homeHelper.enterName('testproes2405')
    await homeHelper.enterPassword(randomString)
    await homeHelper.clickLoginButton();
    await homeHelper.checkAlertBox()
  });

  test('Check Both Wring Credentials login', async ({ }) => {
    const randomString = Utils.randomStringNoINT(5)
    await homeHelper.enterName(randomString)
    await homeHelper.enterPassword(randomString)
    await homeHelper.clickLoginButton();
    await homeHelper.checkAlertBox()
  });

  test('Check Blank Login', async ({ }) => {
    await homeHelper.clickLoginButton();
    await homeHelper.checkBlankCredentialsAlertBox()
  });
})