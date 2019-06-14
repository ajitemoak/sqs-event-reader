'use strict';

const GenericException = require('generic-exception').GenericException;
const model = require('../model');
const eventGeneratorDao = require('../dal/EventMessageDao');


class EventMessageService {

    //read ,essage from SQS FIFO
    async readEventMessage(eventMessageBo) {
        try {
            //console.log("Ikde pahila aala ")
            return await eventGeneratorDao.readEventMessage(eventMessageBo);
        } catch (exception) {

            console.log("Error occured while reading messages from queue at service layer")
            throw exception
        }
    }

    //delete message from SQS FIFO
    async deleteMessage(singleMessage) {
        // Prepare Params over here and pass to DAO 
        try {
            var removeParams = {
                'QueueUrl': process.env.SQS_ENDPOINT || "https://sqs.eu-west-1.amazonaws.com/820643439592/event-generator-queue.fifo",
                'ReceiptHandle': singleMessage.ReceiptHandle
            };
            //let d=await this.remove(deleteParams)
            await eventGeneratorDao.removeEventMessage(removeParams)
            return "success"

        }
        catch (execption) {
            console.log("Error occured while deleting messages from queue at service layer")
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
            const lambdaresult = await eventGeneratorDao.invokeLambda(lambdaParams);
            //console.log(lambdaresult)
        }
        catch (execption) {
            console.log("Error occured while invoking lambda at service layer")
            throw execption
        }

    }

    async getMessageCount() {
        try {
            let param = {
                "QueueUrl": process.env.SQS_ENDPOINT || "https://sqs.eu-west-1.amazonaws.com/820643439592/event-generator-queue.fifo",
                "AttributeNames": ["ApproximateNumberOfMessages"]
            }
            let attribs = await eventGeneratorDao.getNoOfMessageFromQueue(param);
            return attribs.Attributes.ApproximateNumberOfMessages;
        }
        catch (execption) {
            console.log("Error occured while getting coung of messages at service layer")
            throw execption
        }
    }
}

module.exports = new EventMessageService();