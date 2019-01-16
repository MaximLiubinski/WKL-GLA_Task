"use strict";

const path = require("path");

exports.config = {
    directConnect: true,
    baseUrl: 'https://www.epam.com/careers',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-notifications', '--disable-infobars']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: [
        './features/*.feature'
    ],

    onPrepare: function () {
        global.EC = protractor.ExpectedConditions;
        global.timeoutEveryStep = 100 * 1000;
        global.defTimeoutExplicit = 15000;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },

    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],
        tags: []
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
};