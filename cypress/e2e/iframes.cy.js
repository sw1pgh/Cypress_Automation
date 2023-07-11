describe('iframes', () => {

    it.skip('Approach 1', () => {
    
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        const iframe = cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)

        iframe.clear().type('Hello! Wilcomen! Guten Morgen!')
                      .type('{ctrl+a}')

        cy.get("button[title='Bold']").click()

        iframe.type('{end}')
              .should('contain','Hello! Wilcomen! Guten Morgen!')   

    })

    it.skip('Approach 2 - By using Custom Command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
      
        cy.getIframe('#mce_0_ifr').clear().type('Hello! Wilcomen! Guten Morgen!')
                                        .type('{ctrl+a}')

        cy.get("button[title='Italic']").click()                                        

        cy.getIframe('#mce_0_ifr').should('contain','Hello! Wilcomen! Guten Morgen!')

    })

    it('Approach 3 - with iframe plugin',()=>{

      cy.visit("https://the-internet.herokuapp.com/iframe")

      cy.frameLoaded('#mce_0_ifr') //Load the frame

      cy.iframe().clear().type('Hasta La Vista! Hola Culers!')
                    .type('{ctrl+a}')

      cy.get("button[title='Align center']").click()

      cy.iframe().should('contain','Hasta La Vista! Hola Culers!')

    })

})