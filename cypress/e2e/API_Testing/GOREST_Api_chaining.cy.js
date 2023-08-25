describe('GOREST API Chaining', () => {

    const auth_token = "Bearer cd86e28706eac379e8fe43dd890a11e377a1778fde08df444f35c7b8ab293562"
    let userId = ""

    it("Create, Update and Delete User using GORest Api's", () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'Swap',
                gender: 'male',
                email: Math.random().toString(5).substring(2) + "@gmail.com",
                status: 'active'
            },
            headers: {
                Authorization: auth_token
            }
        })
            .then((response) => {
                expect(response.status).eqls(201)
                userId = response.body.id
                cy.log(userId)

                //update user name

                cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    body: {
                        name: 'Brudda'
                    },
                    headers: {
                        Authorization: auth_token
                    }
                })
                    .then((response) => {
                        expect(response.status).eqls(200)
                        expect(response.body.name).eqls('Brudda')

                        //Deleting the User
                        cy.request({
                            method: 'DELETE',
                            url: 'https://gorest.co.in/public/v2/users/'+userId,
                            headers: {
                                Authorization: auth_token
                            }
                        })
                            .then((response) => {
                                expect(response.status).eqls(204)
                            })
                    })
            })
    })
})