describe('Login to OrangeHRM', () => {

    it('Assert Ttile after Login', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("[name='username']").type("Admin")
      cy.get("[name='password']").type("admin123")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6").contains("Dashboard")
      cy.title().should('eq','OrangeHRM')
    })

})