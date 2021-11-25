/// <reference types="cypress" />

const txtEmail = 'input[name="email"]';
const txtPassword = 'input[name="password"]';
const btnLogIn = 'button[type="submit"]';
const loadingSpinner = '.spinner';

export const navigateToLogin = (url) => {
  cy.visit(Cypress.env(url));
  cy.get(txtEmail, {timeout: 7000}).should('be.visible');
}

export const login = (email, password) => {
  cy.get(txtEmail).clear().type(email);
  cy.get(txtPassword).clear().type(password);
  cy.get(btnLogIn).click();
}