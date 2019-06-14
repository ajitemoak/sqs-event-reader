'use strict';

const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
var lambda = new AWS.Lambda({ apiVersion: '2015-03-31', region: "eu-west-1" });
const GenericException = require('generic-exception').GenericException;

class EventMessageDao {

    async readEventMessage(params) {
        try{
        return new Promise((resolve, reject) => {

            sqs.receiveMessage(params, (err, data) => {
               // console.log("Reading message")
                if (err) {
                    console.log("Error " + err)
                    reject(err)
                }
                else {
                    resolve(data);
                }

            })
        })
    }
    catch(exception){
        console.log('exception occured while reading Message at DAO layer');
        throw execption
    }
}

    async removeEventMessage(deleteParams) {
        try {
            return new Promise((resolve, reject) => {
                sqs.deleteMessage(deleteParams, (err, data) => {
                    //console.log("Deleting message")
                    if (err) {
                        console.log("Error " + err)
                        reject(err)
                    }
                    else {
                        resolve(data);
                    }
    
                })
            })
        }
        catch(exception){
            console.log('exception occured while deleting Message from DAO layer');
            throw execption
        }
        
    }

    // method to invokde EventHandler
    async invokeLambda(params) {
        console.log("calling invokde lambda from service")
        try {

            return new Promise((resolve, reject) => {
                lambda.invoke(params, function (err, data) {
                    if (err) {
                        reject(err); // an error occurred
                    }
                    else {
                        resolve(data); // successful response
                    }
                });

                // resolve('lamda successfully invoked');

            });

        }
        catch (exception) {
            console.log('exception occured while calling lambda from DAO layer');
            throw execption
        }

    }

    getNoOfMessageFromQueue(params) {
        try{
            return new Promise((resolve, reject) => {
                sqs.getQueueAttributes(params, function (err, data) {
                    if (err) {
                        console.log(err)
                        reject(err);
                    }
                    else {
                      //  console.log("Attributes", data); // successful response
                        resolve(data);
                    }
                })
            });
        }
        catch(exception){
            console.log('exception occured while getting mesage count from DAO layer');
            throw execption
        }
        


    }
}



module.exports = new EventMessageDao();