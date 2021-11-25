/// <reference types="cypress" />

import * as ContractHelper from '../helpers/ContractsHelper';

const lblHeaderContractType = '//h1[text()="Contract Type"]';

// Fixed Rate Contract
const lnkFixedRateContract = 'a[href="/create/fixed"]';
const lblFixedRateConHeader = '//h2[text()="Creating a fixed contract"]';

// Fixed Rate Contract - General Info
const ddEntity = '//div[@data-qa="select-entity"]//div[contains(@class,"select__control")]';
const txtEntity = 'input[name="clientLegalEntityId"]';
const txtContractName = 'input[name="name"]';
const txtJobTitle = 'input[name="jobTitle"]';
const pJobTitleSuggestion = '.suggestions-option';
const ddSeniorityLvl = '//div[@data-qa="selector-seniority-level"]//div[contains(@class,"select__control")]';
const seniorutyOption = '//div[contains(text(),"param")]'
const txtScopeOfWork = 'textarea[name="scope"]';
const ddStartDate = 'div[name="effectiveDate"]';
const ddSelectDate = '//*[contains(@aria-label,"param")]'
const btnNext = 'button[type="submit"]';

// Fixed Rate Contract - Payment Details
const txtHowMuch = 'input[name="rate"]';
const ddCurrency = '//div[@data-qa="currency-select"]//div[contains(@class,"select__control")]';
const txtCurrency = '#react-select-6-input';
const txtPer = '#react-select-7-input';

// Fixed Rate Contract - Beifits and Extras
const btnAddSpecialClause = '//div[@data-qa="special-clause-card"]//button';
const txtSpecialClause = '//div[@data-qa="special-clause-card"]//textarea';
const btnNextBenifitsAndExtras = '//button/div[contains(text(), "next")]';

// Fixed Rate Contract - Compliance
const ddTaxResidence = '//div[@data-qa="contractor-tax-residence"]//div[contains(@class,"select__control")]';
const txtTaxResidence = '#react-select-13-input';
const ddTaxResidenceProvince = '//div[@data-qa="contractor-tax-residence-province"]//div[contains(@class,"select__control")]';
const txtTaxResidenceProvince = '#react-select-14-input';
const btnCreateContract = '//button/div[contains(text(), " create contract")]';

export const isHeaderDisplayed = () => cy.xpath(lblHeaderContractType).should('be.visible');

export const clickFixedRate = () => {
  cy.get(lnkFixedRateContract).click();
  cy.xpath(lblFixedRateConHeader, {timeout: 30000}).should('be.visible');
}

export const enterGeneralInfo = (entity, name, job, seniority, scope, dateChange) => {
  cy.xpath(ddEntity, {timeout : 5000}).click();
  cy.get(txtEntity).type(entity, {force: true});
  cy.get(txtContractName).type(name);
  cy.get(txtJobTitle).type(job);
  cy.get(pJobTitleSuggestion).click();
  cy.xpath(ddSeniorityLvl).click();
  cy.xpath(seniorutyOption.replace('param', seniority)).click();
  cy.get(txtScopeOfWork).type(scope);
  
  let date = cy.get(ddStartDate).invoke('text');
  console.log("========================" + date);

  // let contractDate = ContractHelper.getContractEffectiveDate(date, dateChange);
  // cy.xpath(ddSelectDate.replace('param', dateChange)).click();
  // cy.get(btnNext).click();
}