Feature: Add New Computer

  As a user of the Computer Database
  I want to add new computers to the database
  So that I can keep the database updated with new computer information

  Background:
    Given I am on the Computer Database homepage

  # Below scenario fails as the add new functionality is not actually adding the computer
  Scenario: Add a new computer with valid details
    Given I am on the Add a New Computer page
    When I enter the computer details
      | name            | introducedDate | discontinuedDate | company    |
      | Sample Computer | 2020-01-01     | 2022-12-31       | Apple Inc. |
    And I submit the new computer details
    Then I should see a confirmation message "Done ! Computer Sample Computer has been created"
    And the computer "Sample Computer" should "be" listed in the database

  Scenario: Add a new computer without a name
    Given I am on the Add a New Computer page
    When I enter the computer details
    | name  | introducedDate    | discontinuedDate | company       |
    |     | 2020-01-01    | 2022-12-31   | Apple Inc.    |
    And I submit the new computer details
    Then I should see a "name decode" error message

  Scenario: Add a new computer with invalid date format
    Given I am on the Add a New Computer page
    When I enter the computer details
      | name        | introducedDate | discontinuedDate | company       |
      | Invalid Date| 2020-01-32 | 2022-12-31   | Apple Inc.    |
    And I submit the new computer details
    Then I should see a "date decode" error message
    And the computer "Invalid Date" should "not be" listed in the database
