/// <reference types="cypress" />

    declare namespace Cypress {
    interface Chainable {
        login(email: string, password: string): void;
      }
    }
    
    Cypress.Commands.add('login', (email: string, password: string) => { 
    cy.visit("https://rocket-x-orpin.vercel.app/")
    cy.get('.login-btn').click()
    cy.get(':nth-child(1) > input').type(email)
    cy.get(':nth-child(2) > input').type(password)
    cy.get('button').click()
     })
