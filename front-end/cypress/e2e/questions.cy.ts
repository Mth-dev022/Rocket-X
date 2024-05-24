describe('Quiz Application Test', () => {
    it('should login and complete the quiz successfully', () => {
      cy.visit('http://localhost:5173')
  
      cy.get('.start-btn').should('have.css', 'background-color', 'rgb(128, 128, 128)')
      cy.get('.card-01').click()
  
      cy.get('.start-btn').should('have.css', 'background-color', 'rgb(82, 247, 145)')
      cy.get('.start-btn').click()
    })
  })
  