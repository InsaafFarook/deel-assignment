/// <reference types="cypress" />

const lblHeader = 'heading';
const btnClose = 'button[data-qa="close"]';

export const getHeaderText = () => cy.dataId(lblHeader, {timeout: 30000}).should('be.visible').invoke('text');

export const closePreiumModal = () => {
  cy.get(btnClose).then($close => {
    if ($close.is(':visible')){
      cy.get(btnClose).click();
    }
  })
}