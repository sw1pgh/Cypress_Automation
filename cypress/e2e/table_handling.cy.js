describe('Table Handling', () => {

    // const username = cy.get("#input-username")
    // const password = cy.get("#input-password")
    // const login = cy.get("button[type='submit']")
    // const x_btn=cy.get(".btn-close")
    // const customer_main=cy.get(".parent.collapsed[href='#collapse-5']")
    // const customer_sub=cy.get("#menu-customer>ul>li:first-child")

    beforeEach('Login', () => {
       
        

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").click().type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get("#menu-customer>ul>li:first-child").click()        

    })

    it.skip('Check no. of rows and columns',()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get("#form-customer > div.table-responsive > table > thead > tr>td").should('have.length','7')

    })

    it.skip('Check cell data from specific row and column',()=>{

        //5th row and 3rd column
        cy.get('tbody tr:nth-child(5) td:nth-child(3)').should('contain','xvrt@test.com')

        cy.get(".table.table-bordered.table-hover>tbody>tr")
          .each(($row, index, $rows)=>{

                cy.wrap($row).within(()=>{

                    cy.get("td").each(($col, index, $cols)=>{

                        cy.log($col.text())

                    })

                })

          })
    })


    it('Pagination',()=>{

        let totalPages
        //find total number of pages
        cy.get(".col-sm-6.text-end").then((e)=>{

            let mytext=e.text()
            totalPages=mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1)
            cy.log("Total no. of Pages: "+totalPages)
            

        })
    
    })

})