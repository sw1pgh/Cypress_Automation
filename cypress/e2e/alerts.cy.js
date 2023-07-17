describe('Alerts', () => {

    //JS Alert: It will contain a text and only an 'OK' button        
    it('JS Alert', () => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()

    //cy.wait(1000)

        cy.on('window:alert',(t) => {

            expect(t).to.contain('I am a JS Alert')

        })

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    //JS Confirmation Alert: It will contain a text and both 'OK' and 'CANCEL' button
    it('JS Confirmation Alert', () => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

    //cy.wait(1000)

        cy.on('window:confirm',(t) => {

            expect(t).to.contain('I am a JS Confirm')

        })

        //Cancel Click
        cy.on('window:confirm',()=>false)

        cy.get('#result').should('contain','You clicked: Cancel')

    })


    //JS Prompt Alert: It will contain a text field and both 'OK' and 'CANCEL' button
    it('JS Confirmation Alert', () => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')

        })
        
        
        cy.get("button[onclick='jsPrompt()']").click()

    //cy.wait(1000)

        cy.on('window:prompt',(t) => {

            expect(t).to.contain('I am a JS prompt')

        })

        //Cancel Click
        //cy.on('window:promt',()=>false)

        cy.get('#result').should('contain','You entered: welcome')

    })

    it('Authenticated Alerts', () => {
    
        // //approach 1
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {username: "admin", password: "admin"}})
        // cy.get("div[class='example'] p").should('contain','Congratulations! You must have the proper credentials.')

        //approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('contain','Congratulations! You must have the proper credentials.')        
    })
    
})