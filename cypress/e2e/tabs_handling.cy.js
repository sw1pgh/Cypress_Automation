describe('Handling/Switching Tabs', () => {

    it.skip('Approach 1', () => {
    
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.get("div[class='example'] h3").should('have.text','New Window')
        cy.url().should('include','/windows/new')
        cy.wait(100)
        cy.go('back')
        cy.url().should('include','/windows')

    })

    it('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").then((e)=>{

            let url = e.prop('href')
            cy.visit(url)

        })

        cy.get("div[class='example'] h3").should('have.text','New Window')
        cy.url().should('include','/windows/new')
        cy.wait(100)
        cy.go('back')
        cy.url().should('include','/windows')

    })

})