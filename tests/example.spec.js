// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Register user', async ({ page }) => {

  await page.goto('http://automationexercise.com');
  // checking home page
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();
  // clicking signup
  page.getByText('Signup / Login').click();
  // checking new user signup
  await expect(page.getByText('New User Signup!')).toBeVisible();
  // entering name
  page.fill('input[data-qa="signup-name"]', 'fakeEmail' );
  // getting fake email
  const fakeEmail = faker.internet.email();
  // entering email
  page.fill('input[data-qa="signup-email"]', fakeEmail );
  //clicking signup button
  page.getByRole('button', { name: 'Signup' }).click();

  // checking ENTER ACCOUNT INFORMATION is visible
  await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

  page.setChecked('uniform-id_gender1', true);

  page.waitForTimeout(100)

});
