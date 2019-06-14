'use strict';

let _messageBody, _queueUrl, _messageGroupId, _messageDeduplicationId, _messageAttributes;

class EventMessageBo {
    constructor(messageBody, queueUrl, messageGroupId, messageDeduplicationId, messageAttributes) {
        _messageBody = messageBody;
        _queueUrl = queueUrl;
        _messageGroupId = messageGroupId;
        _messageDeduplicationId = messageDeduplicationId;
        _messageAttributes = messageAttributes;
    }

    get messageBody() {
        return _messageBody;
    }

    get queueUrl() {
        return _queueUrl;
    }

    get messageGroupId() {
        return _messageGroupId;
    }

    get messageDeduplicationId() {
        return _messageDeduplicationId;
    }

    get messageAttributes() {
        return _messageAttributes;
    }

    schema() {
        return Object.freeze({
            MessageBody: JSON.stringify(_messageBody),
            QueueUrl: _queueUrl,
            MessageGroupId: _messageGroupId,
            MessageDeduplicationId: _messageDeduplicationId,
            MessageAttributes: _messageAttributes
        })
    }


    toString() {
        return JSON.stringify({
            'messageBody': _messageBody,
            'queueUrl': _queueUrl,
            'messageGroupId': _messageGroupId,
            'messageDeduplicationId': _messageDeduplicationId,
            'messageAttributes': _messageAttributes,
        });
    }

}

module.exports = EventMessageBo;