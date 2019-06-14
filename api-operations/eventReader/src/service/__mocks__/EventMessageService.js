'use strict';
const GenericException = require('generic-exception').GenericException;
const testData = require('./test.json');

class EventMessageService {
    async readEventMessage(eventMessageBo) {
        try {
            console.log("Inside Mocked Service ")
         //   console.log("Test Data", testData)
            return testData

        } catch (ex) {
            throw new GenericException
                .Builder(model.ExceptionType.ERROR_SAVING_EVENT_MESSAGE)
                .withWrappedException(ex)
                .build();
        }
    }

    async deleteMessage(singleMessage) {
        // Prepare Params over here and pass to DAO 
        try {
            var removeParams = {
                'QueueUrl': process.env.SQS_ENDPOINT || "https://sqs.eu-west-1.amazonaws.com/820643439592/event-generator-queue.fifo",
                'ReceiptHandle': singleMessage.ReceiptHandle
            };
            //let d=await this.remove(deleteParams)
            //await eventGeneratorDao.removeEventMessage(removeParams)
            return "success"

        }
        catch (err) {
            throw new GenericException
                .Builder(model.ExceptionType.ERROR_SAVING_EVENT_MESSAGE)
                .withWrappedException(ex)
                .build();
        }
    }

    async getMessageCount() {
        try {
            let param = {
                "QueueUrl": process.env.SQS_ENDPOINT || "https://sqs.eu-west-1.amazonaws.com/820643439592/event-generator-queue.fifo",
                "AttributeNames": ["ApproximateNumberOfMessages"]
            }
           return 200;
        }
        catch (execption) {
            console.log("Error occured while getting coung of messages at service layer")
            throw execption
        }
    }

    //invoking EventHandler Lambda
    async invokeLambda(header, body) {
        console.log("invoking Eventhandler Lambda")
        try {
            var lambdaParams = {
                FunctionName: 'arn:aws:lambda:eu-west-1:820643439592:function:event-handler-dev',
                InvocationType: 'Event',
                LogType: "Tail",
                Payload:
                    JSON.stringify({
                        "header": header,
                        "body": body
                    })
            }
            console.log({status:202})
           // const lambdaresult = await eventGeneratorDao.invokeLambda(lambdaParams);
            //console.log(lambdaresult)
        }
        catch (execption) {
            console.log("Error occured while invoking lambda at service layer")
            throw execption
        }

    }
}
module.exports = new EventMessageService()
/* {
    async readEventMessages(eventMessageBo) {
        if (eventMessageBo.body === undefined)
            return new Error('Invalid Schema');
        else
            return await {

            "response": [
                {
                    "messageAttribute": {
                        "correlationId": "\"d4a989556asaasdasdaddadsdaa12sdasda4\"",
                        "messageGroupId": "testing_job1.csv",
                        "event": {
                            "initiatedBy": "System",
                            "isReinitiated": false
                        },
                        "source": {
                            "jobName": "interface-unique-job-name",
                            "applicationName": "interface-name",
                            "country": "UK"
                        },
                        "traceFields": "[{\"name\":\"totalRecords\",\"value\":\"totalRecordsValue\"},{\"name\":\"recordNumber\",\"value\":\"recordNumberValue\"}]"
                    },
                    "body": {
                        "body": "{\"dataProcessors\":{\"businessValidators\":{\"type\":\"simple\",\"simple\":{\"rules\":[\"validator1.js\",\"validator2.js\"]}},\"transformers\":{\"type\":\"simple\",\"simple\":{\"rules\":[\"transformer1.js\",\"transformer2.js\"]}},\"writer\":\"arn\",\"eventHandler\":\"arn\"},\"destination\":{\"type\":\"api\",\"api\":{\"url\":\"https://middleware.travelex.net/coda-adapter/transaction\",\"method\":\"post\",\"contentType\":\"application/json\"}},\"data\":\"{currency:'USD',rate:60.5585}\"}"
                    }
                }
            ]
        }

    }
};*/