describe('Authentication',()=>{
    it('Basic Authentication',()=>{
        cy.request({
            method : 'GET',
            url : 'https://postman-echo.com/basic-auth',
            auth : {
                user : 'postman',
                pass : 'password'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })
    it('Digest Authentication',()=>{
        cy.request({
            method : 'GET',
            url : 'https://postman-echo.com/basic-auth',
            auth : {
                username : 'postman',
                password : 'password',
                //method : 'digest'
            }
        })
        .then((response)=>{
            expect(response.status).equals(200)
            expect(response.body.authenticated).to.equals(true)
        })
    })

    let authtoken = null
    
    before('Generating Bearer Access Token',()=>{
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


    it('Creating a New Order with that Bearer Token',()=>{
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

    it('API Key Authentication',()=>{
        cy.request({
            method : 'GET',
            url : 'https://api.openweathermap.org/data/2.5/forecast/daily',
            qs : {
                q : 'Kolkata',
                appid : 'fe9c5cddb7e01d747b4611c3fc9eaf2c'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})