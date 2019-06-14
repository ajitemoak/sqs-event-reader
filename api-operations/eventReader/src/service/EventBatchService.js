

const GenericException = require('generic-exception').GenericException;
const model = require('../model');
const eventGeneratorService = require('./EventMessageService');
const transformer = require('../transformer');
const utility = require('../utility');

class EventMessageBatchService {

    receiveMessageBatch(event) {
        return new Promise(async (resolve, reject) => {
            try {
                const eventMessageBo = await transformer.EventMessageTransformer.transformToEventMessageBo();
                const resultMessage = await eventGeneratorService.readEventMessage(eventMessageBo);
              //   console.log("Resulting Message ",resultMessage)
                const responseDTO = await transformer.EventMessageTransformer.transformToEventMessageDTO(resultMessage);
                // await service.eventGeneratorService.invokelLambda()
                console.log("Response DTo ", responseDTO)
                resolve({ response: responseDTO });
            }
            catch (exception) {
                reject(exception)
            }
        });
    }

    // to read message in multiple batches 
    pollCompleteBatch() {
        return new Promise(async (resolve, reject) => {
            let messageCount = 0
            try {
                
                messageCount = await eventGeneratorService.getMessageCount();
                console.log(messageCount)
            }
            catch (err) {
                reject(err);    
            }
            //console.log("Count", messageCount)
            var resultArr = []
            let batchsize = process.env.batchsize || 100
            if (messageCount < batchsize) {
                batchsize = messageCount;
            }
            //console.log("batch Size " + batchsize);

            let loopcount = Math.ceil(batchsize / 10, 1)
            //console.log("loopcount", loopcount)
            try {
                for (let i = 1; i <= loopcount; i++) {
                    //promisArr.push(this.receiveMessageBatch())
                    let result = await this.receiveMessageBatch()
                    resultArr.push(result);
                    
                }
                console.log("Process Ends")
                resolve(resultArr);
            }
            catch (err) {
                reject(err);
            }

            // if(promisArr.length>0){
            //     Promise.all(promisArr).then((data) => {
            //         console.log("success")
            //         resolve(data)

            //     }).catch((err) => {
            //         console.log("Error occured", err)
            //         reject(err)

            //     })

            // }
            // else{
            //     resolve(true)
            // }

        });
    }


}

module.exports = new EventMessageBatchService()