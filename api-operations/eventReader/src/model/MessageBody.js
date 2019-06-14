'use strict';

let _dataProcessors,_data

class MessagedataProcessors {
    constructor(dataProcessors,data) {
        _dataProcessors = dataProcessors
        _data=data
    }


    schema() {
        return ({
            dataProcessors: _dataProcessors.dataProcessors,
            data:_data
        })
    }

    toString() {
        return JSON.stringify(this.schema());
    }
}

module.exports = MessagedataProcessors;