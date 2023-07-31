class Login
{
    assertURL()
    {
        cy.url().should('eq','https://apex.oracle.com/pls/apex/r/gamma_dev/demo/login')
    }

    assertTitle()
    {
        cy.title().should('eq','Demo - Sign In')
    }
    
    setusername(username)
    {
        cy.get('#P9999_USERNAME').type(username)
    }

    setpassword(password)
    {
        cy.get('#P9999_PASSWORD').type(password)
    }

    clickSignIn()
    {
        cy.get('.t-Button-label').click()
    }
}
export default Login