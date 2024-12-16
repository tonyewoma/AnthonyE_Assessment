describe('Parabank - Request a Loan', () => {
    before(() => {
      // Log in to Parabank
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    it('should login successfully with valid credentials', () => {
        cy.fixture('user').then((user) => {
          // Enter valid username and password
          cy.get('input[name="username"]').type(user.username);
          cy.get('input[name="password"]').type(user.password);
    
          // Click the login button
          cy.get('input[value="Log In"]').click();
          // Verify successful login by checking the account overview page
          cy.contains('Accounts Overview').should('be.visible');

          cy.get('#leftPanel > ul > :nth-child(7) > a').click();

           // Step 2: Fill out the form fields
            cy.get('#amount').type('5000'); // Amount field
            cy.get('#downPayment').type('1000'); // Down payment dropdown
            // cy.get('#fromAccountId').select('16341'); // Account number field
            cy.get('#fromAccountId').find('option').eq(0).then((option) => {
              const value = option.val(); // Get dynamic value
              cy.get('#fromAccountId').select(value); // Select the option
            });
            

            // Step 3: Submit the loan request
            cy.get('[colspan="2"] > .button').click();

             // Step 4: Verify successful submission (assuming it redirects to another page)
            // cy.url().should('include', '/parabank/loanrequest.htm'); // Or check for a success message
            cy.get('.title').should('contain', 'Loan Request'); // Check if success message is displayed
        });
    })
    
});