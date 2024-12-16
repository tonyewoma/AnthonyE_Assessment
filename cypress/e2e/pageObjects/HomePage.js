class HomePage
{
    getFirstName()
    {
        return cy.get('input[name="customer.firstName"]')
    }
    getLastName()
    {
        return cy.get('input[name="customer.lastName"]')
    }
    getUsername()
    {
        return cy.get('input[name="username"]')
    }
    getPassword()
    {
        return cy.get('input[name="password"]')
    }
    btnLogIn()
    {
        return cy.get('input[value="Log In"]')
    }
}
export default HomePage