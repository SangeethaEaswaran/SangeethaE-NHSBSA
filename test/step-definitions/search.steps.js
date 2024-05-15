import { Given, When, Then } from "@wdio/cucumber-framework";
import { searchPage } from "../pageobjects/search.page.js";

Given("I am a job-seeker on NHS Jobs website", async () => {
  await searchPage.openWebsite();
});

When(
  /^I put my preferences keyword-(.*),location-(.*) into the Search functionality$/,
  async (keyword, location) => {
    console.log("keyword, location");
    await searchPage.searchJobs(keyword, location);
  },
);

When(/^I search for job by (.*) (.*)$/, async(criteria, value) => {
  console.log("criteria, value");
  await searchPage.searchJobsByCriteria(criteria, value);
});

Then("I should get a list of jobs which matches my preferences", async () => {
await searchPage.verifyJobsDisplay();
});

Then(/^I sort my search results by (.*) jobs$/, async (value) => {
  console.log('value=>', value)
  await searchPage.sortJobs(value);
});

Then("I select more search options link", async () => {
  await searchPage.selectMoreOptionsLnk();
});

Then("I should get accessibility results for my page", async () => {
  await searchPage.verifyAccessibility();
});

Then("I select search button", async () => {
  await searchPage.selectSearch();
});


Then("I refine my search for below and apply filters", async (value) => {
  console.log('value=>', value)
  // await searchPage.(value);
});
