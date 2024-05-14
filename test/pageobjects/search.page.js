import { browser } from "@wdio/globals";
import { searchElements } from "../pageelements/search.elements";
import AxeBuilder from '@axe-core/webdriverio'
const json2xls = require('json2xls');
const fs = require("fs");
export class SearchPage {
  async openWebsite() {
   await browser.url("https://www.jobs.nhs.uk/candidate/search");
   await browser.maximizeWindow();
  //  await this.acceptCookies();
  }
  async acceptCookies() {
    await (await searchElements.btn_acceptcookiepolicy).click();
  }
  async searchJobs() {
    await (await searchElements.btn_search).click();
  }
  async verifyJobsDisplay() {
    var searchResult = await searchElements.h2_searchresult;
    expect(searchResult).toBeExisting();
    console.log(await searchResult.getText());
  }

  async selectMoreOptionsLnk() {
    await (await searchElements.btn_moresearchoptions).click();
  }

  async sortJobs() {
    var dropDown = await searchElements.dropdown_sortby;
    await dropDown.click();
    await dropDown.selectByVisibleText('Date Posted')
  }

  async verifyAccessibility(){
    const builder = new AxeBuilder({ client: browser })
    const result = await builder.analyze();
    console.log('Acessibility Results:', result, result.violations.length);
    expect(result.violations.length).toBe(0);

    const xls = json2xls(result);
    fs.writeFileSync('./reports/axe-reports/accessibility_results.txt', JSON.stringify(result));

    console.log('Acessibility Violatios:', result.violations.length);
  }
}
export const searchPage = new SearchPage();
