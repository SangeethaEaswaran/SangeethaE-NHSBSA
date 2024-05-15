import { searchElements } from "../pageelements/search.elements";
import AxeBuilder from '@axe-core/webdriverio'
const fs = require("fs");
export class SearchPage {
  async openWebsite() {
   await browser.url("https://www.jobs.nhs.uk/candidate/search");
   await this.acceptCookies();
  }
  async acceptCookies() {
    var cookiepolicy = await searchElements.btn_acceptcookiepolicy;
    if(await cookiepolicy.isDisplayed())
    await (cookiepolicy).click();
  }
  async searchJobs(keyword, location) {
    await (await searchElements.input_keyword).setValue(keyword);
    await (await searchElements.input_location).setValue(location);
    // await (await searchElements.dropdown_distance).selectByIndex(4);
    await this.selectSearch();
  }
  async searchJobsByCriteria(criteria, value) {
    console.log("searchJobsByCriteria", criteria, value)
    switch(criteria){
      case 'keyword': 
      await (await searchElements.input_keyword).setValue(value);
      break;
      case 'location': 
      await (await searchElements.input_location).setValue(value);
      break;
      case 'employer': 
      await (await searchElements.input_employer).setValue(value);
      break;
      case 'job-reference': 
      await (await searchElements.input_jobreference).setValue(value);
      break;
      case 'distance': 
      await (await searchElements.dropdown_distance).selectByIndex(4);
      break;
      default: 
      break;
    }
    await this.selectSearch();
  }
  
  async selectSearch() {
    await (await searchElements.btn_search).click();
  }
  async verifyJobsDisplay() {
    var searchResult = await searchElements.h2_searchresult;
    await (searchResult).waitForDisplayed();
    console.log(await searchResult.getText());
    expect(await searchResult.getText()).toMatch(/found/)
  }

  async verifyNoJobResult(){
    var searchResult = await searchElements.h2_searchresult;
    await (searchResult).waitForDisplayed();
    console.log(await searchResult.getText());
    expect(await searchResult.getText()).toMatch(/No result found/)
  }
  async selectMoreOptionsLnk() {
    await (await searchElements.btn_moresearchoptions).click();
  }

  async sortJobs(value) {
    console.log('value', value)
    var dropDown = await searchElements.dropdown_sortby;
    await dropDown.click();
    let index ;
    switch(value){
      case 'newest': 
      index = 2;
      break;
      case 'closing date': 
      index = 1;
      break;
      case 'lowest to highest salary': 
      index = 3;
      break;
      case 'highest to lowest salary': 
      index = 4;
      break;
      default: 
      index= 0;
      break;
    }
    console.log('criteria=>', index)
    await dropDown.selectByIndex(index);
  }

  async verifyAccessibility(){
    const builder = new AxeBuilder({ client: browser })
    const result = await builder.analyze();
    console.log('Acessibility Results:', result, result.violations.length);
    expect(result.violations.length).toBe(0);
    fs.writeFileSync('./reports/axe-reports/accessibility_results.txt', JSON.stringify(result));

    console.log('Acessibility Violatios:', result.violations.length);
  }
}
export const searchPage = new SearchPage();
