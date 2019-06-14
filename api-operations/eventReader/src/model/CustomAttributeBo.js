'use strict';

let _dataType, _stringValue;

class CustomAttributeBo {
    constructor(datatype, stringValue) {
        _dataType = datatype;
        _stringValue = stringValue;
    }

    get dataType() {
        return _dataType;
    }

    get stringValue() {
        return _stringValue;
    }


    schema() {
        return Object.freeze({
            DataType: _dataType,
            StringValue: JSON.stringify(_stringValue)
        })
    }

    toString() {
        return JSON.stringify({
            'DataType': _dataType,
            'StringValue': _stringValue,
        });
    }
}

module.exports = CustomAttributeBo;