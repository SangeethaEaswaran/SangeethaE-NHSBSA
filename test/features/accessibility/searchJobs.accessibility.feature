Feature: Accessibility testing  - NHS Job Search - using Axe

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario: Verify NHS job search page adheres to accessiblity standards
  Then I should get accessibility results for my page