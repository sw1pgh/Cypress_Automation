describe('File Upload', () => {

    it('Single file upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Best_meeting_scheduler_apps_-_image2.png')
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it.skip('File Upload After Renaming', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'Best_meeting_scheduler_apps_-_image2.png', fileName: 'Swap.png' })
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
        cy.get("#uploaded-files").should('contain', 'Swap.png')

    })

    //Drag and Drop Upload a FIle - cy.get('[id="dropzone"]').attachFile("example.json", { subjectType: 'drag-n-drop' });

    //Upload Multiple FIles - cy.get('input[type=file]').selectFile(['file.json', 'file2.json'])

    //Upload FIle in Shadow Dom - cy.get("#file-upload" {includeShadowDom: true}).attachFile('Best_meeting_scheduler_apps_-_image2.png')
})