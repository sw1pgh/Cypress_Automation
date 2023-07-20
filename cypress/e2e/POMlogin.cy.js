import Login from "../../PageObjects/Login";

describe('POM Login Demo', () => {

    before(() => {

        cy.visit('https://apex.oracle.com/pls/apex/r/gamma_dev/demo/login')

    })

    it('Basic Login Assertion', () => {

        const ln = new Login()
        ln.assertURL()
        ln.assertTitle()
        ln.setusername('Demo')
        ln.setpassword('demopass')
        ln.clickSignIn()
    })

})