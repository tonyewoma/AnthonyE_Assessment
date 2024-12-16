describe('Parabank Customer Login', () => {
    beforeEach(() => {
      // Visit the Parabank login page
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });
  
    it('should login successfully with valid credentials', () => {
      // Load valid user credentials from a fixture
      cy.fixture('user').then((user) => {
        // Enter valid username and password
        cy.get('input[name="username"]').type(user.username);
        cy.get('input[name="password"]').type(user.password);
  
        // Click the login button
        cy.get('input[value="Log In"]').click();
        cy.get('#leftPanel > ul > :nth-child(1) > a').click();
        // Verify successful login by checking the account overview page
        cy.contains('Accounts Overview').should('be.visible');
       
      
        cy.get('#type').select('SAVINGS');
        cy.get('#fromAccountId').select('13566');
        cy.get('form > div > .button').click();

    // Verify that the account was opened successfully
        cy.contains('Congratulations, your account is now open.').should('be.visible');

      });
    });

  });
  