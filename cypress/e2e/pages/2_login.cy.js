/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";
const homePage = new HomePage()
describe('Parabank Customer Login', () => {
    beforeEach(() => {
      // Visit the Parabank login page
      // cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.visit(Cypress.env('url')+'/index.htm')
      // const homePage = new HomePage()
    });
  
    it('should display an error for invalid credentials', () => {
      // Enter invalid username and password
      // const homePage = new HomePage()
      homePage.getUsername().type('invalid_user');
      // cy.get('input[name="username"]').type('invalid_user');
      // cy.get('input[name="password"]').type('WrongPass123');
      homePage.getPassword().type('WrongPass123');
  
      // Click the login button
      // cy.get('input[value="Log In"]').click();
      homePage.btnLogIn().click();
  
      // Verify error message
      cy.contains('The username and password could not be verified.')
        .should('be.visible');
    });
  
    it('should display an error for blank username and password', () => {
      // Leave username and password blank
      homePage.btnLogIn().click();
  
      // Verify error message
      cy.contains('Please enter a username and password.').should('be.visible');
    });
  
    it('should display an error for blank password', () => {
      // Enter only username and leave password blank
      homePage.getUsername().type('valid_user');
  
      homePage.btnLogIn().click();
  
      // Verify error message
      cy.contains('Please enter a username and password.').should('be.visible');
    });
  
    it('should display an error for blank username', () => {
      // Enter only password and leave username blank
      homePage.getPassword().type('ValidPass123');
  
      homePage.btnLogIn().click();
  
      // Verify error message
      cy.contains('Please enter a username and password.').should('be.visible');
    });
  
    // it('should handle SQL injection attempt gracefully', () => {
    //   // Enter SQL injection attempt in the username and password fields
    //   cy.get('input[name="username"]').type("' OR '1'='1");
    //   cy.get('input[name="password"]').type("' OR '1'='1");
  
    //   cy.get('input[value="Log In"]').click();
  
    //   // Verify no login and error message
    //   cy.contains('The username and password could not be verified.')
    //     .should('be.visible');
    // });

    it('should login successfully with valid credentials', () => {
        // Load valid user credentials from a fixture
        cy.fixture('user').then((user) => {
          // Enter valid username and password
          homePage.getUsername().type(user.username);
          homePage.getPassword().type(user.password);
    
          // Click the login button
          homePage.btnLogIn().click();
    
          // Verify successful login by checking the account overview page
          cy.contains('Accounts Overview').should('be.visible');
        });
      });
  });
  