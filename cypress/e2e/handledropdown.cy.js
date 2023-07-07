describe('handle drop-down', () => {

    it('dropdownwithselect', () => {
    
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
        .select('Latvia')
        .should('have.value','Latvia')

    })

    
    it('dropdownwithoutselect', () => {
    
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()
        cy.xpath('/html/body/span/span/span[1]/input').type('Latvia').type('{enter}')
        cy.get('#select2-billing_country-container').contains('Latvia')

    })

    it('Auto suggested drop down', () => {
    
        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestions-dropdown').contains("Delhi Sultanate").click()

    })

    it('Dynamic drop down', () => {

        cy.visit("https://www.google.com/")

        cy.get('#APjFqb').type('Bitbucket')

        cy.get('#Alh6id > div.erkvQe > div > ul').contains('bitbucket').click()
        
        
        // .should('have.length',1)
        // .each(($el,indexed,$list)=>{
           
        //     if($el.text()=='bitbucket')
        //     {
        //         cy.wrap($el).click()
        //     }
        
        // })

        //cy.get('#APjFqb').should('contain','bitbucket')

    })

})