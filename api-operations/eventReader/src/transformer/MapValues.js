let objectMapper = require('object-mapper')

//let src = require('./JsonData');

class MapValues {
    //map event object
    mapEventObject() {
        let eventmap = {
            'initiatedBy': {
                key: 'event.initiatedBy',
                transform: function (value) {

                    return value;
                }
            }, 'isReinitiated': {
                key: 'event.isReinitiated',
                transform: function (value) {

                    return value;
                }
            }, 'type': {
                key: 'event.type',
                transform: function (value) {
                    return value;
                }
            }

        }
        return eventmap
    }


    //map source object
    mapSourceObject() {
        let sourceMap = {
            'domain': {
                key: 'jobDetails.domain',
                transform: function (value) {
                    return value
                }
            },

            'interfaceName': {
                key: 'jobDetails.interfaceName',
                transform: function (value) {
                    return value
                }
            },
            'jobName': {
                key: 'jobDetails.jobName',
                transform: function (value) {
                    return value
                }
            },
            'fileName': {
                key: 'jobDetails.fileName',
                transform: function (value) {
                    return value
                }
            },

            'bucketName': {
                key: 'jobDetails.bucketName',
                transform: function (value) {
                    return value
                }
            },
            'region': {
                key: 'jobDetails.region',
                transform: function (value) {
                    return value
                }
            },
            'country': {
                key: 'jobDetails.country',
                transform: function (value) {
                    return value
                }
            }
        }
        return sourceMap
    }
    //map traceFileds
    mapTraceFields() {
        let traceFieldsMap = {
            'MessageAttributes.traceFields.StringValue': {
                key: 'traceFields',
                transform: function (value) {
                    return value
                }

            }
        }
        return traceFieldsMap
    }

    mapBodyObject() {
        let bodyMap = {
            'dataProcessor.processors.transformers.type': {
                key: 'dataProcessors.transformers.type',
                transform: function (value) {
    
                    return value;

                }
            }, 'dataProcessor.processors.transformers.simple': {
                key: 'dataProcessors.transformers.simple.rules',
                transform: function (value) {
                    return value;

                }

            }, 'dataProcessor.writer': {
                key: 'dataProcessors.writer',
                transform: function (value) {
                    return value;

                }
            },
            'data': {
                key: 'data',
                transform: function (value) {
                    return value;

                }
            }
        }
        return bodyMap

    }

}


/*let obj = new MapValues()
let map = obj.mapSourceToDestination()
let dest = objectMapper(src,map)
console.log(JSON.stringify(dest));
*/
module.exports = new MapValues();