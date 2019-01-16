'use strict';

const state = require('./state');

class Query {
    constructor() {
        this.delimiter = " in ";
    }

    getProtractorElement(elementName) {
        if (elementName.includes(this.delimiter)) {
            let elements = elementName.split(this.delimiter).reverse();
            let elementState = state.getState();
            elements.forEach((elm) => {
                elementState = elementState[elm];
            });
            return elementState;
        } else {
            return state.getState()[elementName];
        }
    }
}

module.exports = new Query();