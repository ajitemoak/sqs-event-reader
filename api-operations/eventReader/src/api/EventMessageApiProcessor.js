'use strict';

const GenericException = require('generic-exception').GenericException;
const model = require('../model');
const service = require('../service');
const transformer = require('../transformer');
const utility = require('../utility');

class EventMessageApiProcessor {

    async process(event, context) {
        try {
            let results = await service.eventBatchService.pollCompleteBatch()
            return { response: results };
        } catch (exception) {
            console.log("Exception Caught ", exception)
            console.log(`Error occurred:  ${exception.message}`);
            throw exception
        }

    }
}


module.exports = new EventMessageApiProcessor();