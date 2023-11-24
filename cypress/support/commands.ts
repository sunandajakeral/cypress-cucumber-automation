/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    navigateToApp(url: string): Chainable<Window>;
  }
}

Cypress.Commands.add("navigateToApp", (url: string) => {
  cy.visit(url);
});
