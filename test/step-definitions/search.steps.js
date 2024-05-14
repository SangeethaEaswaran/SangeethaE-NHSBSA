import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import { searchPage } from "../pageobjects/search.page.js";

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

Given("I am a job-seeker on NHS Jobs website", async () => {
  console.log("keyword, location");
  await searchPage.openWebsite();
});

When(
  /^I put my preferences keyword-(.*),location-(.*) into the Search functionality$/,
  async (keyword, location) => {
    console.log("keyword, location");
    await searchPage.searchJobs();
  },
);

Then("I should get a list of jobs which matches my preferences", async () => {
  console.log("keyword, location");
});

Then("sort my search results with the newest Date Posted", async () => {});

Then("I should get accessibility results for my page", async () => {
  await searchPage.verifyAccessibility();
});