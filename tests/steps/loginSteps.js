const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { fakerJA } = require('@faker-js/faker');

// Global variables for browser and page
let browser, page;

// Custom World to manage Playwright page object
class CustomWorld {
  async openHomePage() {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://automationexercise.com');
  }

  async closeBrowser() {
    await browser.close();
  }
}

setWorldConstructor(CustomWorld);

Given('I am on the homepage', async function () {
  await this.openHomePage();
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();
});

When('I navigate to the login page', async function () {
  await page.getByText('Signup / Login').click();
  await expect(page.getByText('Login to your account')).toBeVisible();
});

When('I login with email {string} and password {string}', async function (email, password) {
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see that I am logged in as {string}', async function (username) {
  await expect(page.getByText(`Logged in as ${username}`)).toBeVisible();
  await this.closeBrowser();
});