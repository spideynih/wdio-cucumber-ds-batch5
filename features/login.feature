@login
Feature: Login - saucedemo.com

  Background: 
    Given user is on the login page

  @possitive @tc-1
  Scenario Outline: successfully login
    When user input "<username>" as username and "<password>" as password
    Then user should be redirected to the homepage

    Examples:
      | username      | password     | 
      | standard_user | secret_sauce | 
      | visual_user   | secret_sauce  | 

  @negative @tc-2
  Scenario Outline: unsuccessfully login
    When user input "standard_user" as username and "wrong_password" as password
    Then user should be see an error message "Epic sadface: Username and password do not match any user in this service"