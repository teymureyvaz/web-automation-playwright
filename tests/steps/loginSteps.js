const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { faker } = require('@faker-js/faker');
// Global variables for browser and page
let browser, page;

setDefaultTimeout(60 * 1000); // Set global timeout for 60 seconds

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
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible({ timeout: 10000 });
});

When('I login with email {string} and password {string}', async function (email, password) {
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});

When('I navigate to the login page', async function () {
  await page.getByText('Signup / Login').click();
  await expect(page.getByText('Login to your account')).toBeVisible();
});

When('I click on {string}', async function (buttonText) {
  await page.getByText(buttonText).click();
});

When('I click on Signup', async function () {
  await page.getByRole('button', { name: 'Signup' }).click();
});

When('I enter name {string}', async function (name) {
  await page.getByPlaceholder('Name').fill(name);
});

When('I enter a fake email address', async function () {
  const fakeEmail = faker.internet.email();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(fakeEmail);
});

When('I select {string} as the title', async function (title) {
  await page.getByText(title).check();
});

When('I enter password {string}', async function (password) {
  await page.getByLabel('Password *').fill(password);
});

When('I select birth date as {string} day, {string} month, {string} year', async function (day, month, year) {
  await page.locator('#days').selectOption(day);
  await page.locator('#months').selectOption(month);
  await page.locator('#years').selectOption(year);
});

When('I check the {string} option', async function (option) {
  await page.getByText(option).check();
});

When('I enter first name {string}', async function (firstName) {
  await page.getByLabel('First name *').fill(firstName);
});

When('I enter last name {string}', async function (lastName) {
  await page.getByLabel('Last name *').fill(lastName);
});

When('I enter company {string}', async function (company) {
  await page.getByLabel('Company', { exact: true }).fill(company);
});

When('I enter address {string}', async function (address) {
  await page.getByLabel('Address * (Street address, P.').fill(address);
});

When('I enter address 2 {string}', async function (address2) {
  await page.getByLabel('Address 2').fill(address2);
});

When('I select country {string}', async function (country) {
  await page.getByLabel('Country *').selectOption(country);
});

When('I enter state {string}', async function (state) {
  await page.getByLabel('State *').fill(state);
});

When('I enter city {string}', async function (city) {
  await page.getByLabel('City *').fill(city);
});

When('I enter zipcode {string}', async function (zipcode) {
  await page.locator('#zipcode').fill(zipcode);
});

When('I enter mobile number {string}', async function (mobileNumber) {
  await page.getByLabel('Mobile Number *').fill(mobileNumber);
});

Then('I should see {string}', async function (text) {
  await expect(page.getByText(text)).toBeVisible();
});

Then('I should see that I am logged in as {string}', async function (username) {
  await expect(page.getByText(`Logged in as ${username}`)).toBeVisible();
  await this.closeBrowser();
});