Feature: Regression Suite -Verify jobs search functionality of the NHS website

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario Outline: NHS job search by job reference only
    When I select more search options link
    And I search for job by job-reference <JobReference>
    Then I should get a list of jobs which matches my preferences
    And sort my search results with the newest Date Posted
    Examples:
      | JobReference |
      | A2969-24-0000 |
      | M0038-24-0557 |

  Scenario Outline: Simple NHS job search by employer only
    When I select more search options link
    And I search for job by employer <Employer>
    Then I should get a list of jobs which matches my preferences
    And sort my search results with the newest Date Posted
    Examples:
      | Employer |
      | Imperial College Healthcare NHS Trust |
      | NHS England|

  Scenario: Refine NHS job search by applying filters 
    And I search for job by keyword GP
    Then I should get a list of jobs which matches my preferences
    And I refine my search for below and apply filters
    |Full time|
    |Permanent |
    Then I should get a list of jobs which matches my preferences
    And sort my search results with the newest Date Posted


