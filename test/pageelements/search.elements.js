export class SearchElements {
  get btn_acceptcookiepolicy() {
    return $("//*[@id='accept-cookies']");
  }
  get input_keyword() {
    return $("//*[@data-test='search-jobTitle-input']");
  }
  get input_location() {
    return $("//*[@data-test='search-location-input']");
  }
  get dropdown_distance() {
    return $("//*[@data-test='search-distance-input']");
  }
  get btn_moresearchoptions() {
    return $("//*[@id='searchOptionsBtn']");
  }
  get input_jobreference() {
    return $("//*[@data-test='search-jobReference-input']");
  }
  get input_employer() {
    return $("//*[@data-test='search-employer-input']");
  }
  get dropdown_payrange() {
    return $("//*[@data-test='search-payRange-input']");
  }
  get btn_search() {
    return $("//*[@data-test='search-button']");
  }
  get h2_searchresult() {
    return $("//*[@data-test='search-result-query']");
  }
  get btn_clearfilters() {
    return $("//*[@id='clear-filters-button']");
  }
  get dropdown_sortby() {
    return $("//*[@data-test='sort-input']");
  }
  get btn_workingpattern() {
    return $("//*[@data-test='filter-working-pattern']");
  }
  get checkbox_fulltime() {
    return $("//*[@data-test='working-pattern-full-time']");
  }
  get btn_contracttype() {
    return $("//*[@data-test='filter-contract-type']");
  }
}

export const searchElements = new SearchElements();
