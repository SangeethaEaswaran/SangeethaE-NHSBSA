Feature: Smoke - Simple Job Search in the NHS website

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario Outline: Simple NHS job search with keyword and location
  When I put my preferences keyword-<Keyword>,location-<Location> into the Search functionality
  Then I should get a list of jobs which matches my preferences
  And I sort my search results by <SortCriteria> jobs
  Examples:
  | Keyword | Location | SortCriteria  | 
  | GP      | London   | newest        | 
  | QA      | Camden   | highest to lowest salary |