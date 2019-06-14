const ApiProcessor = require('../../src/api/EventMessageApiProcessor');

const assert = require('assert');
//jest.mock('../../src/service/EventBatchService.js');
jest.mock('../../src/service/EventMessageService.js');
jest.mock('../../src/dal/EventMessageDao.js');

const testData = require('./TestData');

describe('EventMessageApiProcessor -> process', () => {
    it('should return message object', async () => {
        console.log("Started test")
        const resultMessage = await ApiProcessor.process();
        console.log("Result Message "+JSON.stringify(resultMessage));
        assert(testData.resultMessage, resultMessage)
    });

    /*it('should throw exception', async () => {
        try {
            const resultMessage = await ApiProcessor.process(testData.event, {sample: 'data'});
            assert(testData.resultMessage, resultMessage)
        } catch (exception) {
            assert("Invalid Schema", exception.message);
        }
    });*/
});