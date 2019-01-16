'use strict';

class SearchForm{
    constructor() {
        this['Keyword'] = element(by.css('#new_form_job_search_1445745853_copy-keyword'));
        this['Location'] = element(by.css('.section--padding-normal  .select2-selection__rendered'));
        this['Location Dropdown'] = element(by.css('.section--padding-normal .select2-results'));
        this['Skills'] = element(by.css('.section--padding-normal  .selected-params'));
        this['Skills Dropdown'] = element(by.css('.section--padding-normal .multi-select-dropdown'));
        this['Find'] = element(by.css('.section--padding-normal  .recruiting-search__submit'));
    };

}

module.exports = SearchForm;