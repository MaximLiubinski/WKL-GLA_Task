'use strict';

const Header = require('./components/header');
const SearchForm = require('./components/searchForm');

class OffersPage {

    constructor() {
        this.url = 'https://www.epam.com/careers/job-listings';
        this['Header'] = new Header;
        this['Search Form'] = new SearchForm;
        this['Result Message'] = element(by.css('.search-result__heading'));
        this['Result Error Message'] = element(by.css('.search-result__error-message'));
        this['1st Apply Button'] = element(by.css('.search-result__item-apply'));
    };

    openPage(){
        return browser.get(this.url);
    }

}


module.exports = OffersPage;