Feature: Job page
  As a user check elements on Job page

  Background:
    Given I am on "Careers Page" page
    Then Page title should be "Careers"
    When I type "Developer" in "Keyword in Search Form"
    And I click on "Find in Search Form"
    Then I should be on "Offers Page" page
    And Page title should be "Job Listings"
    And I wait until element "1st Apply Button" is visible
    When I click on "1st Apply Button"
    Then I should be on "Job Page" page

  Scenario: Check visibility of main elements
    And I wait until element "Job Header" is visible
    And I wait until element "Job Location" is visible
    And I wait until element "Job Description" is visible
    And I wait until element "Social Networks" is visible
    And I wait until element "Form Body in Apply Form" is visible

  Scenario Outline: Check validation null values in Apply Form fields
    When I wait until element "<1st field>" is visible
    Then I type "first" in "<1st field>"
    When I wait until element "<2nd field>" is visible
    Then I type "second" in "<2nd field>"
    And I scroll for "800" pixels
    When I wait until element "Submit in Apply Form" is visible
    When I click on "Submit in Apply Form"
    And I scroll for "-500" pixels
    Then Element "<Error>" should be visible on screen

    Examples:
      | 1st field                  | 2nd field                | Error                           |
      | First Name in Apply Form   | Last Name in Apply Form  | Email Error in Apply Form       |
      | First Name in Apply Form   | Email in Apply Form      | Last Name Error in Apply Form   |
      | Last Name in Apply Form    | Email in Apply Form      | First Name Error in Apply Form  |