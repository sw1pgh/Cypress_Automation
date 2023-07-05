describe('Check UI Elements', () => {

    it('radio buttons', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility assertions
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        //checked assertions        
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
        
    })

    it('checkboxes', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility assertions
        cy.get("#monday").should('be.visible')

        //checking and unchecking
        cy.get("#monday").check().should('be.checked')
        cy.get("#monday").uncheck().should('not.be.checked')

    })

})