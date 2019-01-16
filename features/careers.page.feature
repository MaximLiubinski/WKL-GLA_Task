Feature: Careers page
  As a user check functionality of search form on Careers page

  Background:
    Given I am on "Careers Page" page
    Then Page title should be "Careers"

  Scenario Outline: Click on field and check its dropdown visibility on the screen
    When I click on "<field>"
    And I wait until element "<dropdown>" is visible
    Then Element "<dropdown>" should be visible on screen
    When I click on "Keyword in Search Form"
    Then Element "<dropdown>" should not be visible on screen

    Examples:
      | field                   | dropdown                         |
      | Location in Search Form | Location Dropdown in Search Form |
      | Skills in Search Form   | Skills Dropdown in Search Form   |

  Scenario: Check search result by correct keyword
    When I type "Developer" in "Keyword in Search Form"
    And I click on "Find in Search Form"
    Then I should be on "Offers Page" page
    And Page title should be "Job Listings"
    And I wait until element "Result Message" is visible
    And Text of element "Result Message" should contain "JOB OPENINGS RELATED TO "DEVELOPER""

  Scenario: Check search result by incorrect keyword
    When I type "@#$%^" in "Keyword in Search Form"
    And I click on "Find in Search Form"
    Then I should be on "Offers Page" page
    And Page title should be "Job Listings"
    And I wait until element "Result Error Message" is visible
    And Text of element "Result Error Message" should be "Sorry, your search returned no results. Please try another combination."