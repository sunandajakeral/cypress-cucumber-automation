/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { addComputerPage } from "../page_objects/AddComputerPage";
import { computersHomePage } from "../page_objects/ComputersHomePage";

Given("I am on the Computer Database homepage", () => {
  cy.navigateToApp("/");
});

Given("I am on the Add a New Computer page", () => {
  addComputerPage.clickAddComputerButton();
});

When("I enter the computer details", (computerDetails) => {
  computerDetails.hashes().forEach((data) => {
    data.name && addComputerPage.fillComputerName(data.name);
    addComputerPage.fillIntroducedDate(data.introducedDate);
    addComputerPage.fillDiscontinuedDate(data.discontinuedDate);
    addComputerPage.selectCompany(data.company);
  });
});

And("I submit the new computer details", () => {
  addComputerPage.submit();
});

Then("I should see a confirmation message {string}", (message) => {
  computersHomePage.verifyMessage(message);
});

And(
  "the computer {string} should {string} listed in the database",
  (computerName, visibility) => {
    visibility === "not be" && addComputerPage.clickCancelButton();
    computersHomePage.enterSearchValue(computerName);
    computersHomePage.clickSearchButton();
    computersHomePage.verifyComputerInDatatable(computerName, visibility);
  }
);

Then("I should see a {string} error message", (error) => {
  const nameDecodeError =
    "Failed to refine type : Predicate isEmpty() did not fail.";
  const dateDecodeError =
    "Failed to decode date : java.time.format.DateTimeParseException: Text '2020-01-32' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 32";
  error === "name decode"
    ? addComputerPage.verifyErrorMessage(nameDecodeError)
    : addComputerPage.verifyErrorMessage(dateDecodeError);
});
