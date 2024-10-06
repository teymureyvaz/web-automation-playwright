// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Register user', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  // checking home page
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();
  // clicking signup
  await page.getByText('Signup / Login').click();
  // checking new user signup
  await expect(page.getByText('New User Signup!')).toBeVisible();
  // entering name
  await page.getByPlaceholder('Name').fill('teymur');
  // getting fake email
  const fakeEmail = faker.internet.email();
  // entering email
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(fakeEmail);

  //clicking signup button
  await page.getByRole('button', { name: 'Signup' }).click();

  // checking ENTER ACCOUNT INFORMATION is visible
  await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();


  // filling form
  await page.getByText('Mr.').check();
  await page.getByLabel('Password *').fill('bnvbnm');
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('8');
  await page.locator('#years').selectOption('2016');
  await page.getByText('Sign up for our newsletter!').check();
  await page.getByText('Receive special offers from').check();
  await page.getByLabel('First name *').fill('Teymur');
  await page.getByLabel('Last name *').fill('Eyvazov');
  await page.getByLabel('Company', { exact: true }).fill('Test');
  await page.getByLabel('Address * (Street address, P.').fill('Test');
  await page.getByLabel('Address 2').fill('test');
  await page.getByLabel('Country *').selectOption('Canada');
  await page.getByLabel('State *').fill('Test');
  await page.getByLabel('City *').fill('test');
  await page.locator('#zipcode').fill('dfgh');
  await page.getByLabel('Mobile Number *').fill('345678');

  // submitting form
  await page.getByRole('button', { name: 'Create Account' }).click();

  //checking account created is visible
  await page.getByText('Account Created!').isVisible();

  // click continue
  await page.getByRole('link', { name: 'Continue' }).click();

  // deleting account
  await page.getByRole('link', { name: ' Delete Account' }).click();

  // verify deletion
  await page.getByText('ACCOUNT DELETED!').isVisible();
  
  //click continue
  await page.getByRole('link', { name: 'Continue' }).click();
});


test("Login User with correct email and password", async ({page}) => {
  await page.goto('http://automationexercise.com');
  // checking home page
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();

  // clicking signup
  await page.getByText('Signup / Login').click();
  
  // checking login form
  await expect(page.getByText('Login to your account')).toBeVisible();

  // entering email
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('correct_email@gmail.com')
  // entering password
  await page.getByPlaceholder('Password').fill('Test123456');

  // clicking Log in button
  await page.getByRole('button', { name: 'Login' }).click();

  //checking logged in
  await page.getByText('Logged in as username').isVisible();
  
});
