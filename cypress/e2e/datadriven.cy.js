describe('Data Driven Login Test', () => {

  before(() => {

    cy.visit("http://meetingroom.geotechinfo.net/")
    cy.wait(2000)

  })
  it('datadriven', () => {

    // cy.visit("http://meetingroom.geotechinfo.net/")
    // cy.wait(2000)

    cy.origin('http://52.23.176.114:3010', () => {
      cy.fixture('dataList').then((data) => {


        data.forEach((userdata) => {

          re = data[3].email
          rp = data[3].password


          cy.get("#handle").type(userdata.email)
          cy.get("#newPass").type(userdata.password)
          cy.get("#submit").click()


          if (userdata.email == re && userdata.password == rp) {
            cy.wait(2000)
            cy.url()
              .should('eq', '')
          }

          else {
            cy.get("div[class='login_title'] span").should('have.text', userdata.fail)
            cy.go('back')
          }

        })
      })

    })
  })
})