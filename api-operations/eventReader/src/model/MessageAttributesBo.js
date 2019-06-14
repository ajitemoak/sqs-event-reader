'use strict';

let _correlationId, _event, _jobDetails, _traceFields, _messageGroupId;

class MessageAttributesBo {
    constructor(corelationId, event, jobDetails, traceFields , messageGroupId) {
        _correlationId = corelationId;
        _event = event;
        _jobDetails = jobDetails;
        _traceFields = traceFields;
        _messageGroupId = messageGroupId
    }


    schema() {
        return Object.freeze({
            correlationId: _correlationId,
            messageGroupId:_messageGroupId,
            event: _event.event,
            jobDetails: _jobDetails.jobDetails,
            traceFields: JSON.parse(_traceFields.traceFields)
        })
    }

    toString() {
        return JSON.stringify(this.schema());
    }
}

module.exports = MessageAttributesBo;