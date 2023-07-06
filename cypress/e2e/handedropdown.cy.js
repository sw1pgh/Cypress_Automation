describe('handle drop-down', () => {

    it('dropdownlist', () => {
    
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
        .select('Latvia')
        .should('have.value','Latvia')

    })

})