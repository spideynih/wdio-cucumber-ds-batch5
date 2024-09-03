import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js'; 
import CartPage from '../pageobjects/cart.page.js';


Given('user is on the login page', async() => {
  await LoginPage.open()
})

When('user input {string} as username and {string} as password', async(username, password) => {
  await LoginPage.inputUsername(username)
  await LoginPage.inputPassword(password)
  await LoginPage.clickLoginButton()
})

Then('user should be redirected to the homepage', async() => {
    await HomePage.validateOnHomePage()
})

Then('user should be see an error message {string}', async(errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed()
  })


Given('user is on login page', async() => {
  await LoginPage.open()
})

Given('user login with username {string} and password {string}', async(username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
})

Given ('user is on homepage', async() => {
    await HomePage.open()
})

When('user adds product {string} to cart and user clicks on the cart icon', async(productName) => {
  await HomePage.addToCart(productName)
  await HomePage.clickCartIcon()
})

Then('user should be redirected to the cart page', async() => {
    await CartPage.validateOnCartPage()
})

