Feature: Smoke - Simple Job Search in the NHS website

  Background:
    Given I am a job-seeker on NHS Jobs website

  Scenario Outline: Simple NHS job search with keyword and location
  # When I put my preferences keyword-<Keyword>,location-<Location> into the Search functionality
  # Then I should get a list of jobs which matches my preferences
  # And sort my search results with the newest Date Posted
  # Examples:
  # | Keyword | Location |
  # | test | London      |
  # | QA | Camden        |