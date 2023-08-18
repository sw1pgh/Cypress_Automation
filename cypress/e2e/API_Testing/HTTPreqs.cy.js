describe('HTTP Requests', () => {

    it('GET Request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200)
    })

    it('POST Request', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'Swapnaneel',
                body: 'This is a Post Call',
                userId: 1
            }
        })
            .its('status')
            .should('equal', 201)
    })

    it('PUT Request', () => {

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Test Post Updated',
                body: 'This is a PUT call',
                userId: 1,
                id: 1
            }
        })
            .its('status')
            .should('equal', 200)

    })

    it('DELETE Call', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
            .its('status')
            .should('equal', 200)
    })

})