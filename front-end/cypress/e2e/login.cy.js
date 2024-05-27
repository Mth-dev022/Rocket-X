describe('template spec', () => {
  it('should login successfully', () => {
    cy.visit("https://rocket-x-orpin.vercel.app/")
    cy.get('.login-btn').click()
    cy.get(':nth-child(2) > label').type("matheuszebende6@gmail.com")
    cy.get(':nth-child(3) > label').type("12345")
    cy.get('button').click()
  })
  it("should break login", () => {
    cy.visit("https://rocket-x-orpin.vercel.app/")
    cy.get('.login-btn').click()
    cy.get(':nth-child(2) > label').type("matheuszebende66@gmail.com")
    cy.get(':nth-child(3) > label').type("12345")
    cy.get('button').click()
    cy.get('.error-message').should('contain.text', 'Usuário ou senha incorretos')
  })
})