// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('spec B', () => {
  it('fails after 5 seconds', function () {
    cy.wait(5024)
      .then(() => {
        expect(true).to.be.true;
      })
  })
})
