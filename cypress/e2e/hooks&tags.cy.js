
//before------
//after       ------ 
//                    ----- Hooks in Cypress
//beforeEach  ------
//afterEach----


//.skip-------
//           ------ Tags in Cypress  
//.only-------

describe('Hooks and Tags in Cypess', () => {

    before(()=>{

        cy.log("--------Launch Application--------")

    })

    after(()=>{

        cy.log("------Close the Application------")
    
    })

    beforeEach(()=>{

        cy.log("before each It")

    })

    afterEach(()=>{

        cy.log("After Each It")

    })

    it('Search', () => {
    
        cy.log("-/--/-/-/-/-/ Search - /-/ -/- /-/ /-////-/-/-/")

    })

    it('Advcanced Search',()=>{

        cy.log("-/--/-/-/-/-/ Advanced Search - /-/ -/- /-/ /-////-/-/-/")

    })

    it('listing products',()=>{

        cy.log("-/--/-/-/-/-/ Listing Products - /-/ -/- /-/ /-////-/-/-/")

    })

})