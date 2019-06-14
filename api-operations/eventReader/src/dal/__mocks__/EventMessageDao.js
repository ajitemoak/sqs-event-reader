'use strict';
const testData = require('../../service/__mocks__/test.json')
class EventMessageDao {
    async readEventMessage(eventMessageSchema) {
        return new Promise((resolve, reject) => {
            if (typeof eventMessageSchema === undefined)
                reject(new Error("Schema is not valid"));
            else if (eventMessageSchema.id === undefined)
                reject({ message: null, error: "Schema is not valid" });
            else
                resolve(testData);
        });
    }
    async removeEventMessage(deleteParams) {
        try {
            return new Promise((resolve, reject) => {
                resolve("Success")
            })
        }
        catch (exception) {
            console.log('exception occured while deleting Message from DAO layer');
            throw execption
        }

    }

    async invokeLambda(params) {
        console.log("calling invokde lambda from mock Dao ")
        try {

            return new Promise((resolve, reject) => {
                resolve({
                    status: 202
                })
            })
        }
        catch (exception) {
            console.log('exception occured while calling lambda from DAO layer');
            throw execption
        }
    }

    getNoOfMessageFromQueue(params) {
        try {
            return {
                "Attributes": {
                    "ApproximateNumberOfMessages": 200
                }
            };
        }
        catch (exception) {
            console.log('exception occured while getting mesage count from DAO layer');
            throw execption
        }
    }
}

module.exports = EventMessageDao