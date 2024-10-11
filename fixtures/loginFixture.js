// fixtures/loginFixture.js
const { chromium } = require('@playwright/test');
const fs = require('fs');

async function globalSetup() {
  // Launch a browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the login page
  await page.goto('http://automationexercise.com');

    // clicking signup
    await page.getByText('Signup / Login').click();

    // checking login form

    // entering email
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('correct_email@gmail.com')
    // entering password
    await page.getByPlaceholder('Password').fill('Test123456');

    // clicking Log in button
    await page.getByRole('button', { name: 'Login' }).click();

  // Save the authentication state to auth.json
  const storageState = await context.storageState();
  fs.writeFileSync('auth.json', JSON.stringify(storageState));

  // Close the browser
  await browser.close();
}

module.exports = globalSetup;