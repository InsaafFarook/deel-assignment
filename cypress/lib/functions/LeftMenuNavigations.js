/// <reference types="cypress" />

const lnkCreateContract = 'a[href="/create"]';
const lnkContracts = 'a[href="/contracts"]';
const lnkReports = 'a[href="/reports"]';

export const navigateToCreateContract = () => {
  cy.get(lnkCreateContract).click();
}

export const navigateToContracts = () => {
  cy.get(lnkContracts).click();
}

export const navigateToReports = () => {
  cy.get(lnkReports).click();
}


