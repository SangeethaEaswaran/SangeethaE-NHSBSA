Feature: Regression Suite -Verify jobs search functionality of the NHS website

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario Outline: NHS job search by job reference only
    When I select more search options link
    And I search for job by job-reference <JobReference>
    Then I should get a list of jobs which matches my preferences
    And I sort my search results by lowest to highest salary jobs
    Examples:
      | JobReference |
      | A2969-24-0000 |
      | M0038-24-0557 |

  Scenario Outline: NHS job search by employer only
    When I select more search options link
    And I search for job by employer <Employer>
    Then I should get a list of jobs which matches my preferences
    And I sort my search results by closing date jobs
    Examples:
      | Employer |
      | Imperial College Healthcare NHS Trust |
      | NHS England|

  Scenario: All locations NHS job search 
    And I search for job by distance <All locations>
    Then I should get a list of jobs which matches my preferences
    And I sort my search results by highest to lowest salary jobs

  Scenario: NHS job search with no criteria selected
    And I select search button
    Then I should get a list of jobs which matches my preferences
    And I sort my search results by highest to lowest salary jobs

  Scenario: No results found for a job during NHS job search
    When I select more search options link
    And I search for job by job-reference q
    Then I should not see any job results

  Scenario: Refine NHS job search by applying filters 
    And I search for job by keyword GP
    Then I should get a list of jobs which matches my preferences
    And I refine my search for below and apply filters
    |workingpattern|fulltime|
    |contracttype|permanent |
    Then I should get a list of jobs which matches my preferences
    And I sort my search results by newest jobs
