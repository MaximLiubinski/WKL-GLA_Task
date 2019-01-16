'use strict';

class ApplyForm{
    constructor() {
        this['Form Body'] = element(by.css('.form-constructor-ui.form-component.form-component--inline.form-component--disclaimer'));

        this['First Name'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantFirstName'));
        this['Last Name'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantLastName'));
        this['Email'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantEmail'));

        this['First Name Error'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantFirstName-error'));
        this['Last Name Error'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantLastName-error'));
        this['Email Error'] = element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantEmail-error'));

        this['Submit'] = element(by.css('button[type="submit"]'));
    };

}

module.exports = ApplyForm;