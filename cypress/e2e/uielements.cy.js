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

        cy.get("#friday").check().should('be.checked')
        cy.get("#friday").uncheck().should('not.be.checked')

    })

    it('selecting all checkboxes', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of all 7 checkboxes
        cy.get('input.form-check-input[type="checkbox"]').should('be.visible')

        //checking all 7 boxes at once
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        
        //unchecking all at once
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
    })

    it('selecting first and last checkboxes', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //checking first and last checkbox
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
    
    })

})