describe('Quiz Application Test', () => {
    it('should login and complete the quiz successfully', () => {
      cy.visit('https://rocket-x-orpin.vercel.app/')
  
      cy.get('.start-btn').should('have.css', 'background-color', 'rgb(128, 128, 128)')
      cy.get('.card-01').click()
  
      cy.get('.start-btn').should('have.css', 'background-color', 'rgb(82, 247, 145)')
      cy.get('.start-btn').click()
    })
  })
  
