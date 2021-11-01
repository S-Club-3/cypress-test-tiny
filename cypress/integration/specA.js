// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('spec A', () => {
  it('runs for 5 seconds', function () {
    cy.wait(5000)
  })
})
