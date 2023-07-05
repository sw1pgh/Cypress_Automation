describe('Xpath selectors', () => {

    it('xpathselectors', () => {
        cy.visit("https://demoqa.com/")
        /* To assert total number of elements in a list
         cy.get("xpath").should('have.length',7)*/
        cy.xpath("//*[@id='app']/header/a/img").should('be.visible')
        .and('exist')
        cy.xpath("//*[@id='app']/div/div/div[2]/div/div[1]/div/div[3]").click()
    })

})