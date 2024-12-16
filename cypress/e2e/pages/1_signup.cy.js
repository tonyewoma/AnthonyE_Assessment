/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";

describe('Parabank Signup', () => {
    let userData;
  
    before(() => {
      // Load test data from the fixture
      cy.fixture('user').then((data) => {
        userData = data;
      });
    });
  
    it('Signing up is easy!', () => {
      const homePage = new HomePage()
      // Visit the registration page
      // cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.visit(Cypress.env('url')+'/register.htm')
  
      // Fill out the registration form using dynamic data
      homePage.getFirstName().type(userData.firstName); // First Name
      homePage.getLastName().type(userData.lastName); // Last Name
      // cy.get('input[name="customer.lastName"]').type(userData.lastName); // Last Name
      cy.get('input[name="customer.address.street"]').type(userData.address.street); // Address
      cy.get('input[name="customer.address.city"]').type(userData.address.city); // City
      cy.get('input[name="customer.address.state"]').type(userData.address.state); // State
      cy.get('input[name="customer.address.zipCode"]').type(userData.address.zipCode); // Zip Code
      cy.get('input[name="customer.phoneNumber"]').type(userData.phoneNumber); // Phone
      cy.get('input[name="customer.ssn"]').type(userData.ssn); // SSN
      cy.get('input[name="customer.username"]').type(userData.username); // Username
      cy.get('input[name="customer.password"]').type(userData.password); // Password
      cy.get('input[name="repeatedPassword"]').type(userData.password); // Confirm Password
  
      // Submit the registration form
      cy.get('input[value="Register"]').click();
  
      // Verify successful registration message
      cy.contains('Your account was created successfully. You are now logged in.')
        .should('be.visible');
    });
  });
  