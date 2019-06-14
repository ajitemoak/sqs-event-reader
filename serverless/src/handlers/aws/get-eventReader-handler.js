const apiProcessor = require('event-reader').apiProcessor;
//const winston_wrapper = require('winston_wrapper');
//const logger = winston_wrapper.getLogger('create-eventGenerator-handler')
module.exports.handle = function (event, context, callback) {
    //  winston_wrapper.serverlessFunction(event, context, () => {
    // logger.debug("Entered handler with request " + JSON.stringify(event));
    //try {

    apiProcessor.process(event).then((body) => {
        //    logger.debug("Exiting with response ", body);
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        });
    }).catch(error => {
        //   logger.error("Exception caught ", error)
        callback(null, {
            statusCode: error.httpStatusCode,
            body: JSON.stringify({
                errorCode: error.code,
                errorMessage: error.description
            })
        });
    });
    //  })
};
