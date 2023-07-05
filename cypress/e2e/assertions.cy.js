describe('Assertions', () => {

    it('implicit assertions', () => {
    
        cy.visit("https://demoqa.com/")
        cy.url().should('eq','https://demoqa.com/')
        .and('include','demoqa.com/')
        .and('contain','demoqa')
        .and('not.contain','TestNG')

        cy.title().should('eq','DEMOQA')

    })

    it('explicit assertions', () => {
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Santhosh Thadimerri";

        cy.get(".oxd-userdropdown-name").then((x)=>{

            //BDD Style
            let actName=x.text()
            expect(actName).to.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
        })
    })

})