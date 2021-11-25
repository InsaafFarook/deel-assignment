/// <reference types="cypress" />

const lblHeader = 'heading'

export const getHeaderText = () => cy.dataId(lblHeader, {timeout: 7000}).should('be.visible').invoke('text');