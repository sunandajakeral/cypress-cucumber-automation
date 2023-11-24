/// <reference types="cypress" />

class AddComputerPage {
  // Define locators as class properties
  addComputerButton = '#add';
  computerNameInput = '#name';
  introducedDateInput = '#introduced';
  discontinuedDateInput = '#discontinued';
  companySelect = '#company';
  createButton = 'input[type="submit"]'; 

    clickAddComputerButton(){
        cy.get(this.addComputerButton).click();
    }

    fillComputerName(name: string) {
      cy.get(this.computerNameInput).type(name);
    }
  
    fillIntroducedDate(date: string) {
      cy.get(this.introducedDateInput).type(date);
    }
  
    fillDiscontinuedDate(date: string) {
      cy.get(this.discontinuedDateInput).type(date);
    }
  
    selectCompany(companyName: string) {
      cy.get(this.companySelect).select(companyName);
    }
  
    submit() {
      cy.get('input').contains('Create this computer').click();
    }
  }
  
  export const addComputerPage = new AddComputerPage();
  