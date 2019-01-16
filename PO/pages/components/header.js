'use strict';

class Header{
    constructor() {
        this['EPAM'] = element(by.css('.header__logo'));
        this['What We Do'] = element(by.css('span a[href="/what-we-do"]'));
        this['How We Do It'] = element(by.css('span a[href="/how-we-do-it"]'));
        this['Our Work'] = element(by.css('span a[href="/our-work"]'));
        this['Insights'] = element(by.css('span a[href="/insights"]'));
        this['About'] = element(by.css('span a[href="/about"]'));
        this['Careers'] = element(by.css('span a[href="/careers"]'));
        this['Location'] = element(by.css('.location-selector__button'));
        this['Search'] = element(by.css('.header-search__button'));
    };

}

module.exports = Header;