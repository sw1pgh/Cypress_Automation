describe('Data Driven from Fixture', () => {

    let userdata
    beforeEach(() => {

        cy.fixture('orangeHRM').then((data) => {

            userdata = data

        })

    })

    it('Direct Access through variable', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.xpath("//span[normalize-space()='PIM']").should('contain', userdata.expected)
    })


    it('Access Fixture data variable in all it blocks through hooks', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.xpath("//span[normalize-space()='PIM']").should('contain', userdata.expected)

    })


})