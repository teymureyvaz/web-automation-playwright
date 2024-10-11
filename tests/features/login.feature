Feature: Login functionality

  Scenario: Register user
    Given I am on the homepage
    When I click on "Signup / Login"
    Then I should see "New User Signup!"
    When I enter name "teymur"
    And I enter a fake email address
    And I click on Signup
    Then I should see "ENTER ACCOUNT INFORMATION"
    When I select "Mr." as the title
    And I enter password "bnvbnm"
    And I select birth date as "10" day, "8" month, "2016" year
    And I check the "Sign up for our newsletter!" option
    And I check the "Receive special offers from our partners!" option
    And I enter first name "Teymur"
    And I enter last name "Eyvazov"
    And I enter company "Test Company"
    And I enter address "Test Address"
    And I enter address 2 "Test Address 2"
    And I select country "Canada"
    And I enter state "Test"
    And I enter city "test"
    And I enter zipcode "ZIPCODE"
    And I enter mobile number "345678"
    When I click on "Create Account"
    Then I should see "Account Created!"
    When I click on "Continue"
    And I click on "Delete Account"
    Then I should see "ACCOUNT DELETED!"
    When I click on "Continue"

  Scenario: Login User with correct email and password
    Given I am on the homepage
    When I navigate to the login page
    And I login with email "correct_email@gmail.com" and password "Test123456"
    Then I should see that I am logged in as "TestUsername"