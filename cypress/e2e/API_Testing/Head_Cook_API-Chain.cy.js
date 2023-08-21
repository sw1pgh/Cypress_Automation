describe('Headers, Cookies & Auth Tokens',()=>{
    
    let authtoken = null
    
    before('Generating Access Token',()=>{
        cy.request({
            method : 'POST',
            url : 'https://simple-books-api.glitch.me/api-clients/',
            headers : {
                'Content-type' : 'application/json'
            },
            body : {
                clientName : 'ABC',
                clientEmail : Math.random().toString(5).substring(2) + "@gmail.com"
            }
        }).then((response)=>{
            authtoken = response.body.accessToken;

        })
    })


    before('Creating a New Order',()=>{
        cy.request({
            method : 'POST',
            url : 'https://simple-books-api.glitch.me/orders/',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer '+authtoken
            },
            body : {
                bookId : 1,
                customerName : "Swapnaneel"
            }
        }).then((response)=>{
            expect(response.status).eq(201)
            expect(response.body.created).to.eq(true)            
        })
    })
    
    
    it('Getting All My Orders from DB',()=>{
        cy.request({
            method : 'GET',
            url : 'https://simple-books-api.glitch.me/orders/',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer '+authtoken
            },
            cookies : {
                'cookieName' : 'mycookie'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
        })
    })
})