Feature: Accessibility - NHS Job Search

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario: Verify NHS job search page adheres to accessiblity standards
  # When I search for job by job-reference 'A2969-24-0000'
  Then I should get accessibility results for my page