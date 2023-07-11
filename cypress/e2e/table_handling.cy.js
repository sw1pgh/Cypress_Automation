describe('Table Handling', () => {

    beforeEach('Login', () => {
       
        // const username = cy.get("input-username")
        // const password = cy.get("input-password")
        // const login = cy.get("button[type='submit']")
        // const x_btn=cy.get(".btn-close")
        // const customer_main=cy.get(".parent.collapsed[href='#collapse-5']")
        // const customer_sub=cy.get("ul[id='collapse-5'] li[class='active'] a")

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").click().type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("#menu-customer>ul>li:first-child").click()        

    })

    it('Check no. of rows and columns',()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get().should('have.length','')

    })

})