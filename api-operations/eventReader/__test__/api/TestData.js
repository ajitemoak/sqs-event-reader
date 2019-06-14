const model = require('../../src/model');
const event = [
    {
        "MessageId": "0461866b-529e-4f68-93c8-da5ad5aecc2a",
        "ReceiptHandle": "AQEB5yP/VMqj1GTeHaxEAM5hzWseNSfxalLFXiOJ2k61LEAvBzKBQcRRRG+9o71EvQv35gJUM7cYNIgeNV5tPLYTpCBc8o6RPTJC0J9cxy7quYQzwsarhntrpB0v67jHW9543MRFWa8z16+bIrplvM9iWS7a7+raNlU+iUO0/30Ryb/krc5M1+DptZPKlrpYK7dkkD1GQAguZ7uLDIYv+1XfQ1aMyUDWY6zAOlr+zOv8bhfn1EfUQWnfPcVFTLHYsB6+pvqfZKcAaLtRkPYrgk2/QJY1NAtB4Cy/1AbrakTVFUg=",
        "MD5OfBody": "e07e4894965ebbac53ff7ef73f299f1d",
        "Body": "{\"dataProcessor\":{\"name\":\"fxrates\",\"domain\":\"finance\",\"processors\":{\"transformers\":{\"required\":\"true\",\"type\":\"simple\",\"simple\":[\"transformer-01.js\"]}},\"writer\":\"arn\",\"eventHandler\":\"arn\"},\"data\":{\"Currency\":\"USD\",\"Rate\":60.5585}}",
        "Attributes": {
            "SenderId": "AROA36ERJEPUOZ47PF6SG:event-generator-dev",
            "ApproximateFirstReceiveTimestamp": "1560339764414",
            "ApproximateReceiveCount": "1",
            "SentTimestamp": "1560339745366",
            "SequenceNumber": "55739679195942350848",
            "MessageDeduplicationId": "fxrates-02.csv_2019-06-12T11:42:25.274Z",
            "MessageGroupId": "fxrates-02.csv"
        },
        "MD5OfMessageAttributes": "34a2e55ede6531c9a0463c34accf41d9",
        "MessageAttributes": {
            "correlationId": {
                "StringValue": "\"d4a6sas3324asdasddad4asda6955495a\"",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "event": {
                "StringValue": "{\"initiatedBy\":\"System\",\"isReinitiated\":false,\"type\":\"batch\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "jobDetails": {
                "StringValue": "{\"domain\":\"finance\",\"interfaceName\":\"fxrates\",\"jobName\":\"jo_code_0000_controljobfxratesfile\",\"fileName\":\"fxrates-02.csv\",\"bucketName\":\"tvx-middleware-dev\",\"region\":\"eu-west-1\",\"country\":\"UK\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "traceFields": {
                "StringValue": "[{\"name\":\"totalRecords\",\"value\":\"totalRecordsValue\"},{\"name\":\"recordNumber\",\"value\":\"recordNumberValue\"}]",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            }
        }
    },
    {
        "MessageId": "9d1e0da7-d871-42dc-a2a3-3506c1fcce44",
        "ReceiptHandle": "AQEBVIkkBtk+x9dwN1lktziniW9OLhdGJaDWkEsMgRat6w2Wt0WPoPFQpshl99sAHk0Z0UYvlgif1IKOB8uS9IOckwwXXTxxuUuw154K8vwJX2cHx/GFtdnFM0l+xIuYAn4pJgvfD2zJT9K3V+szYHW37aJO0nUkMiWMD7zMizOR7cwpYACPeAihF0d8yRKG1pZZC8FOWNXiATUWvmcpDsvmoB+5SknVWa6D2X122O479jNspLs1nIgn9imd8QNygarSCSCqX4jrEFIf7IAa8LWcGbldDfdMKAU1EjLAouUY0jc=",
        "MD5OfBody": "e07e4894965ebbac53ff7ef73f299f1d",
        "Body": "{\"dataProcessor\":{\"name\":\"fxrates\",\"domain\":\"finance\",\"processors\":{\"transformers\":{\"required\":\"true\",\"type\":\"simple\",\"simple\":[\"transformer-01.js\"]}},\"writer\":\"arn\",\"eventHandler\":\"arn\"},\"data\":{\"Currency\":\"USD\",\"Rate\":60.5585}}",
        "Attributes": {
            "SenderId": "AROA36ERJEPUOZ47PF6SG:event-generator-dev",
            "ApproximateFirstReceiveTimestamp": "1560339764414",
            "ApproximateReceiveCount": "1",
            "SentTimestamp": "1560339749205",
            "SequenceNumber": "55739679196925135360",
            "MessageDeduplicationId": "fxrates-02.csv_2019-06-12T11:42:29.147Z",
            "MessageGroupId": "fxrates-02.csv"
        },
        "MD5OfMessageAttributes": "c6ef550cd56ae4bc787e6d865c513956",
        "MessageAttributes": {
            "correlationId": {
                "StringValue": "\"d4a6sas3324asdasddad4asda6955495b\"",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "event": {
                "StringValue": "{\"initiatedBy\":\"System\",\"isReinitiated\":false,\"type\":\"batch\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "jobDetails": {
                "StringValue": "{\"domain\":\"finance\",\"interfaceName\":\"fxrates\",\"jobName\":\"jo_code_0000_controljobfxratesfile\",\"fileName\":\"fxrates-02.csv\",\"bucketName\":\"tvx-middleware-dev\",\"region\":\"eu-west-1\",\"country\":\"UK\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "traceFields": {
                "StringValue": "[{\"name\":\"totalRecords\",\"value\":\"totalRecordsValue\"},{\"name\":\"recordNumber\",\"value\":\"recordNumberValue\"}]",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            }
        }
    },
    {
        "MessageId": "f0b8e9f3-9d12-4c4e-9a37-294c688daa4c",
        "ReceiptHandle": "AQEB2/Q16r3DeHKF52bgjyV1pL2OGldQqGc3z7b1UHEroGv6XeT3uS30GUnF+AbpnRo/MFOTRreEmnmVAx3VZuwEoZqYFUtuJRQ1ctiJoJxmaQ9VSP2qhA87IiUdlNRWSrbJswveMuIHYTmOL7jTI7xAvV7vw9t7S+9FpD8OYcnlyy/wLSFbLYyUChF690ULUJ8RM25PXP0O/Lx56vdLNRz6a48QaZiAXOzKhWidVqZ4dUn20Gxbk0a4YI2XDKEDCoo7p5iN2N2qOY2mDTf/MpmZUjultBBTAFeyWypKmVecReM=",
        "MD5OfBody": "e07e4894965ebbac53ff7ef73f299f1d",
        "Body": "{\"dataProcessor\":{\"name\":\"fxrates\",\"domain\":\"finance\",\"processors\":{\"transformers\":{\"required\":\"true\",\"type\":\"simple\",\"simple\":[\"transformer-01.js\"]}},\"writer\":\"arn\",\"eventHandler\":\"arn\"},\"data\":{\"Currency\":\"USD\",\"Rate\":60.5585}}",
        "Attributes": {
            "SenderId": "AROA36ERJEPUOZ47PF6SG:event-generator-dev",
            "ApproximateFirstReceiveTimestamp": "1560339764414",
            "ApproximateReceiveCount": "1",
            "SentTimestamp": "1560339752294",
            "SequenceNumber": "55739679197715918848",
            "MessageDeduplicationId": "fxrates-02.csv_2019-06-12T11:42:32.236Z",
            "MessageGroupId": "fxrates-02.csv"
        },
        "MD5OfMessageAttributes": "cda36173ceb7118a337099270d1bbbc0",
        "MessageAttributes": {
            "correlationId": {
                "StringValue": "\"d4a6sas3324asdasddad4asda6955495c\"",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "event": {
                "StringValue": "{\"initiatedBy\":\"System\",\"isReinitiated\":false,\"type\":\"batch\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "jobDetails": {
                "StringValue": "{\"domain\":\"finance\",\"interfaceName\":\"fxrates\",\"jobName\":\"jo_code_0000_controljobfxratesfile\",\"fileName\":\"fxrates-02.csv\",\"bucketName\":\"tvx-middleware-dev\",\"region\":\"eu-west-1\",\"country\":\"UK\"}",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            },
            "traceFields": {
                "StringValue": "[{\"name\":\"totalRecords\",\"value\":\"totalRecordsValue\"},{\"name\":\"recordNumber\",\"value\":\"recordNumberValue\"}]",
                "StringListValues": [],
                "BinaryListValues": [],
                "DataType": "String"
            }
        }
    }
]

/*const resultMessage = {
    "message": {
        "ResponseMetadata": {
            "RequestId": "e7ac5651-b9aa-582d-b0df-033816d93860"
        },
        "MD5OfMessageBody": "020de5a391f391928bdd3f5d64a07dfb",
        "MD5OfMessageAttributes": "6ac3f06d4039a21221252fc78a977e53",
        "MessageId": "6a9ae7f7-0070-46f2-ace9-1a4a2ee651a8",
        "SequenceNumber": "18845902170488047616"
    }
};*/

const resultMessage = {"response":"success"}

module.exports = {
    event, resultMessage
};




