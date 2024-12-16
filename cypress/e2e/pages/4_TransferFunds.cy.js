describe('Parabank - Transfer Funds', () => {

      beforeEach(() => {
        // Visit the Parabank login page
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      });

    it('should login successfully with valid credentials', () => {
        cy.fixture('user').then((user) => {
          // Enter valid username and password
          cy.get('input[name="username"]').type(user.username);
          cy.get('input[name="password"]').type(user.password);
    
          // Click the login button
          cy.get('input[value="Log In"]').click();
          cy.get('#leftPanel > ul > :nth-child(1) > a').click();
          // Verify successful login by checking the account overview page
          cy.contains('Accounts Overview').should('be.visible');

          // Navigate to the Transfer Funds page
          cy.get('#leftPanel > ul > :nth-child(3) > a').click();

          // Input the transfer amount

            cy.get('#amount').type('100'); // Enter the amount to transfer
  
            // Select the "From Account" (Assumes accounts are available)
            // cy.get('#fromAccountId').select('13677'); // Replace with a valid account number

            cy.get('#fromAccountId').find('option').eq(0).then((option) => {
              const value = option.val(); // Get dynamic value
              cy.get('#fromAccountId').select(value); // Select the option
            });
            
 
  
            // Select the "To Account"
            // cy.get('#toAccountId').select('13677'); // Replace with a valid account number
            cy.get('#toAccountId').find('option').eq(0).then((option) => {
              const value = option.val(); // Get dynamic value
              cy.get('#toAccountId').select(value); // Select the option
            });
            
      
            // Click on Transfer button
            cy.get(':nth-child(4) > .button').click();
  
            // Verify that the transfer was successful
            cy.contains('Transfer Complete!').should('be.visible');

            // Optionally verify the transfer amount and accounts in the confirmation message
            // cy.contains('$100.00 has been transferred from account #13677 to account.').should('be.visible');
  

        });
      });
  });
  