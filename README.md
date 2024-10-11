
# Playwright + Cucumber for AutomationExercise.com

This project automates test cases for [AutomationExercise.com](http://automationexercise.com) using Playwright and Cucumber with Gherkin syntax.

## Setup

### Prerequisites:
- Node.js (v14+)
- Playwright and Cucumber.js installed

### Install Dependencies:
```bash
npm install
npx playwright install
```

## Running Tests

### Run All Tests:
```bash
npx cucumber-js
```

### Run Specific Feature:
```bash
npx cucumber-js tests/features/login.feature
```

### Debugging:
```bash
npx playwright test --debug
```

## Writing Tests

Tests are written in Gherkin syntax (`.feature` files) under `tests/features/`. Example:

```gherkin
Feature: User Registration

  Scenario: Register new user
    Given I am on the homepage
    When I click on "Signup / Login"
    Then I should see "New User Signup!"
    When I enter name "John" and a fake email address
    Then I should see "ENTER ACCOUNT INFORMATION"
```

Step definitions are in `tests/steps/`.

## Configuration

### `cucumber.js`:
Configures Cucumber execution, linking steps and features.

```js
module.exports = {
  default: {
    require: ['tests/steps/*.js'],
    format: ['progress'],
    timeout: 60000,
  }
};
```

## Contribution

Feel free to fork the repository, create issues, or submit pull requests.
