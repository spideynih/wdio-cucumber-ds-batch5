@addtocart
Feature: Add to cart - saucedemo.com

    
    Background:
        Given user is on login page
        And user login with username "standard_user" and password "secret_sauce"

    @tc-1
    Scenario Outline: user successfully adds product to cart
        And user is on homepage
        When user adds product "<productName>" to cart and user clicks on the cart icon
        Then user should be redirected to the cart page

        Examples:
        | productName              |
        | sauce-labs-backpack      |
        | sauce-labs-bike-light    |
        | sauce-labs-fleece-jacket |

