'use strict';

const Header = require('./components/header');
const SearchForm = require('./components/searchForm');

class CareersPage {

    constructor() {
        this.url = 'https://www.epam.com/careers';
        this['Header'] = new Header;
        this['Search Form'] = new SearchForm;
    };

    openPage(){
        return browser.get(this.url);
    }
}


module.exports = CareersPage;