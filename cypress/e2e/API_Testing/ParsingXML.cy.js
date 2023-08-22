const xml2js = require('xml2js')
const parser = new xml2js.Parser({ explicitArray: false })

describe('XML Parsing', () => {

    const XMLPayload = "<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>Dog</name> 	</Category> 	<name>DoberMAN</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>Tommeryu</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
    let petId = null

    before('Creating the Pet', () => {
        cy.request({
            method: 'POST',
            url: "https://petstore.swagger.io/v2/pet",
            body: XMLPayload,
            headers: {
                'Content-Type': 'application/xml',
                'accept': 'application/xml'
            }
        })
            .then((response) => {
                expect(response.status).equal(200)
                parser.parseString(response.body, (err, result) => {
                    petId = result.Pet.id
                })

            })
    })

    it('Fetching Individual Pet Details', () => {

        cy.request({
            method: 'GET',
            url: "https://petstore.swagger.io/v2/pet/" + petId,
            headers: {
                'accept': 'application/xml'
            }
        })
            .then((response) => {
                expect(response.status).equal(200)
                parser.parseString(response.body, (err, result) => {
                    expect(result.Pet.name).eql('DoberMAN')
                    expect(result.Pet.id).eql(petId)

                })

            })

    })

})

