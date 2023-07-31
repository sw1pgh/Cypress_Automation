describe('HTTPS of Geotech Meeting Room',()=>{

    it('Testing for CORS',()=>{
        cy.visit('https://meetingroomdev.geotechinfo.net/')
        .get('#handle').type('swapnaneel.ghosh@geotechinfo.net')
        .get('#newPass').type('hello@123')
        .get('#submit').click()
        .wait(2000)
        .get("div[class='py-2.5 text-white cursor-pointer font-bold text-sm']").should('be.visible')
    })

})