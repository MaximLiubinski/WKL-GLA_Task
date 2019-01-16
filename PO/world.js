'use strict';

const CareersPage = require('./pages/careers.page');
const OffersPage = require('./pages/offers.page');
const JobPage = require('./pages/job.page');

class World {
    constructor() {
        this['Careers Page'] = new CareersPage();
        this['Offers Page'] = new OffersPage();
        this['Job Page'] = new JobPage();
    };
}

module.exports = new World();