describe('API chaining', () => {
    it('get all posts', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
            .then((response) => {
                expect(response.status).equal(200)
                const postId = response.body[0].id
                return postId
            })
            .then((postId) => {
                cy.request({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/posts?postId=${postId}'
                })
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body[7].userId).eqls(1)
                expect(response.body[7].id).eqls(8)
                expect(response.body[7].title).eqls("dolorem dolore est ipsam")
            })
    })
})