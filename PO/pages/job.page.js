'use strict';

const Header = require('./components/header');
const ApplyForm = require('./components/applyForm');

class JobPage {

    constructor() {
        this.url = 'https://www.epam.com/careers/job-listings/job.';
        this['Header'] = new Header;
        this['Apply Form'] = new ApplyForm;
        this['Job Header'] = element(by.css('.recruiting-page__header h1'));
        this['Job Location'] = element(by.css('.recruiting-page__location li'));
        this['Job Description'] = element(by.css('.recruiting-page__top-description'));
        this['Social Networks'] = element(by.css('.floating-menu__container'));
    };

    openPage(){
        return browser.get(this.url);
    }

}


module.exports = JobPage;