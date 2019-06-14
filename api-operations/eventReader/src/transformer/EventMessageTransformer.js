'use strict';
let objectMapper = require('object-mapper')
const jsonMapper = require('./MapValues');
const MessageAttributeBo = require('../model/MessageAttributesBo');
var MessageBody = require('../model/MessageBody');
var service = require('../service/EventMessageService')
const GenericException = require('generic-exception').GenericException;

class EventMessageTransformer {
    static async transformToEventMessageBo() {
        return await readEventMessageBo();
    }

    static async transformToEventMessageDTO(msgs) {
        console.log("MEssag",msgs)
        let awsJsonData = JSON.parse(JSON.stringify(msgs));
        //console.log("msgs ", msgs)
        console.log("AWS json data ", awsJsonData)
        var msgResponse = [];
        
        if (!awsJsonData.Messages) {
            return msgResponse;
        }
        // Write For Loop Here 
        for (var i = 0; i < awsJsonData.Messages.length; i++) {
            //console.log("AWS json data ", JSON.stringify(awsJsonData.Messages[i]))           
            
             try {
                //correlationid
                let correlationid = awsJsonData.Messages[i].MessageAttributes.correlationId.StringValue
                //MessageGroupId
                let MessageGroupId = awsJsonData.Messages[i].Attributes.MessageGroupId

                let MessageId = awsJsonData.Messages[i].MessageId
                let timestamp = awsJsonData.Messages[i].Attributes.ApproximateFirstReceiveTimestamp

                //event object mapping
                let eventmap = jsonMapper.mapEventObject()
                let eventJson = JSON.parse(awsJsonData.Messages[i].MessageAttributes.event.StringValue)

                let eventobj = objectMapper(eventJson, eventmap)

                eventobj.event.id = MessageId
                eventobj.event.timestamp = timestamp
                eventobj.event.originalId = MessageId

                //jobDetails object mapping
                let sourceMap = jsonMapper.mapSourceObject()
                let sourceJson = JSON.parse(awsJsonData.Messages[i].MessageAttributes.jobDetails.StringValue)
                let sourceobj = objectMapper(sourceJson, sourceMap)

                let traceFieldsMap = jsonMapper.mapTraceFields()
                let traceFieldsObj = objectMapper(awsJsonData.Messages[i], traceFieldsMap)

                //let bodyObj = awsJsonData.Messages[i].Body

                let bodyMap = jsonMapper.mapBodyObject()

                let bodyObj = objectMapper(JSON.parse(awsJsonData.Messages[i].Body), bodyMap)


                var messageAttribute = new MessageAttributeBo(correlationid, eventobj, sourceobj, traceFieldsObj, MessageGroupId);

                var eventBody = new MessageBody(bodyObj, bodyObj.data);

                msgResponse.push({
                    "header": messageAttribute.schema(),
                    "body": eventBody.schema()
                })
                await service.invokeLambda(messageAttribute.schema(), eventBody.schema())

                // Delete Call over here 
                await service.deleteMessage(awsJsonData.Messages[i])
            }
            catch (execption) {
                console.log("Error occured at Transform layer")
                throw execption
            }


        }


        return msgResponse
    }

}

function readEventMessageBo() {

    const sqsParam = {
        "AttributeNames": [
            "All"
        ],
        "QueueUrl": process.env.SQS_ENDPOINT || "https://sqs.eu-west-1.amazonaws.com/820643439592/event-generator-queue.fifo",
        "MaxNumberOfMessages": 10,
        "MessageAttributeNames": [
            "All"
        ],
        "VisibilityTimeout": process.env.SQS_VisibilityTimeout || 100,
        "WaitTimeSeconds": process.env.WaitTimeSeconds || 10

    }

    return sqsParam


}


module.exports = EventMessageTransformer;