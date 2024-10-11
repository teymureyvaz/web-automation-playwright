Feature: Login functionality

  Scenario: Login User with correct email and password
    Given I am on the homepage
    When I navigate to the login page
    And I login with email "correct_email@gmail.com" and password "Test123456"
    Then I should see that I am logged in as "TestUsername"
    