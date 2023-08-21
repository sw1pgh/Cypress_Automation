describe('Parsing Json', () => {



    it.skip('Simple Json Parsing', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body[0]).have.property('id', 1)
                expect(response.body[0].category).equal("men's clothing")
                expect(response.body[15].rating.count).to.eq(340)
            })
    })


    it.only('Parsing Complex Json', () => {
        let totalprice = 0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs : {limit:5}
        })
        .then((response)=>{
            expect(response.status).eq(200)
            response.body.forEach(element => {
               totalprice = totalprice + element.price; 
            });
            expect(totalprice).to.eq(899.23) //for limit = 5
        })
    })

})