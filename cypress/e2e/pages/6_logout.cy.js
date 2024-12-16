describe('Parabank Customer Login', () => {
  beforeEach(() => {
    // Visit the Parabank login page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  // it('should display an error for invalid credentials', () => {
  //   // Enter invalid username and password
  //   cy.get('input[name="username"]').type('invalid_user');
  //   cy.get('input[name="password"]').type('WrongPass123');

  //   // Click the login button
  //   cy.get('input[value="Log In"]').click();

  //   // Verify error message
  //   cy.contains('The username and password could not be verified.')
  //     .should('be.visible');
  // });

  // it('should display an error for blank username and password', () => {
  //   // Leave username and password blank
  //   cy.get('input[value="Log In"]').click();

  //   // Verify error message
  //   cy.contains('Please enter a username and password.').should('be.visible');
  // });

  // it('should display an error for blank password', () => {
  //   // Enter only username and leave password blank
  //   cy.get('input[name="username"]').type('valid_user');

  //   cy.get('input[value="Log In"]').click();

  //   // Verify error message
  //   cy.contains('Please enter a username and password.').should('be.visible');
  // });

  it('should login successfully with valid credentials', () => {
      // Load valid user credentials from a fixture
      cy.fixture('user').then((user) => {
        // Enter valid username and password
        cy.get('input[name="username"]').type(user.username);
        cy.get('input[name="password"]').type(user.password);
  
        // Click the login button
        cy.get('input[value="Log In"]').click();
  
        // Verify successful login by checking the account overview page
        cy.contains('Accounts Overview').should('be.visible');

        // Verify successful logout
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
      });
    });

});
