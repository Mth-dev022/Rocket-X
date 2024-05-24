describe('template spec', () => {
  it('should login successfully', () => {
    cy.login('matheuszebende6@gmail.com', '12345')
  })
  it("should break login", () => {
    cy.login('matheuszebende5@gmail.com', '123456')
    cy.get('.error-message').should('contain.text', 'Usuário ou senha incorretos')
  })
})