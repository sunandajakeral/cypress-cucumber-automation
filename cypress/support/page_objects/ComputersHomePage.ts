/// <reference types="cypress" />

class ComputersHomePage {
  // Defining the locators as class properties
  searchBox = "#searchbox";
  searchSubmit = "#searchsubmit";
  computersTable = ".computers";

  verifyMessage(message: string) {
    cy.contains(message).should("be.visible");
  }

  enterSearchValue(computerName: string) {
    cy.get(this.searchBox).type(computerName);
  }

  clickSearchButton() {
    cy.get(this.searchSubmit).click();
  }

  verifyComputerInDatatable(computerName: string, visibility: string) {
    visibility === "be"
      ? cy
          .get(this.computersTable)
          .find("tr")
          .then((tableRows) => {
            // Convert the rows to an array and check if any contain the computerName
            const containsString = Array.from(tableRows).some((row) =>
              Cypress.$(row).text().includes(computerName)
            );
            expect(containsString).to.be.true;
          })
      : cy.contains("Nothing to display").should("be.visible");
  }
}

export const computersHomePage = new ComputersHomePage();
