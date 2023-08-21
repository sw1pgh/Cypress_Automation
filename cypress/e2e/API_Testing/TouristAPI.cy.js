describe('Tourist API Tests', () => {

    it.skip('Approach 1 with HardCoded Json Data', () => {
        const requestBody = {
            tourist_name: "Swapnaneel",
            tourist_email: 'sdfgh@gmail.com',
            tourist_location: 'Barcelona'
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                //expect(response.tourist_name).to.eq("Swapnaneel")
                //expect(response.tourist_email).to.eq('8989@gmail.com')
                //expect(response.tourist_name).to.eq('Barcelona')
            })
    })

    it.skip('Approach 2 with dynamically generated Json Data', () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: 'Barcelona'
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.tourist_name).to.eq(undefined)
                expect(response.tourist_email).to.eq(undefined)
                //expect(response.tourist_name).to.eq('Barcelona')
            })
    })

    it.only('Approach 3 with Fixtures', () => {
        cy.fixture('tourist').then((data)=>{

             const reqBody = data;

        
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.tourist_name).to.eq(undefined)
                expect(response.tourist_email).to.eq(undefined)
                expect(response.body).has.property('tourist_name')
                expect(response.body).to.have.property('tourist_email',"5183817dajdj@gmail.com")
            })
        })
    })
})