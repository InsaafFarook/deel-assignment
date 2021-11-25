/// <reference types="cypress" />

const lblHeaderContractType = '//h1[text()="Contract Type"]';

const lnkFixedRateContract = 'a[href="/reports"]';
const lblFixedRateConHeader = '//h2[text()="Creating a fixed contract"]';
const txtContractName = 'input[name="name"]';
const txtJobTitle = 'input[name="jobTitle"]';
const ddSeniorityLvl = '.select__control css-yk16xz-control';
const txtScopeOfWork = 'input[name="scope"]';
const ddStartDate = '.calendar-input div';



export const isHeaderDisplayed = () => cy.get(lblHeaderContractType).should('be.visible');

export const clickFixedRate = () => {
  cy.get(lnkFixedRateContract).click();
  cy.get(lblFixedRateConHeader).should('be.visible');
}

export const enterGeneralInfo = () => {

}