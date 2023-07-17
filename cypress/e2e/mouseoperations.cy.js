describe('Mouse Operations', () => {

    // beforeEach('Login', () => {
       
    //     cy.visit("https://demo.opencart.com/")

    // })
    
    
    it('Mouse Hover', () => {
    
        cy.visit("https://demo.opencart.com/")
        cy.xpath("//a[normalize-space()='Mac (1)']").should('not.be.visible')    
        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click()
        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible')
    })

    it('Right Click',()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        // cy.get(".context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')

    })

    it('Double CLick',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        // cy.get("button[ondblclick='myFunction()']").dblclick()
        cy.frameLoaded("#iframeResult")
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#demo').should('contain','Hello World')

    })

    it('Drag and Drop',()=>{

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box7').drag('#box107',{force:true})

    })

    it('Scrolling',()=>{

        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")
        cy.get("img[src='/img/flags/small/tn_in-flag.gif']")
          .scrollIntoView({duration:1500})
          .should('be.visible')


    })

})