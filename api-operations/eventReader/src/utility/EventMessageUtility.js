'use strict';


class EventMessageUtility {

    static parseBody(event) {
        let body;
        try {
            body = JSON.parse(event.body);
            if (body.headers) {
                body = JSON.parse(event.body).body;
            }
        } catch (exception) {
            body = event.body;
        }
        return body;
    }

    static parseHeaders(event) {
        let headers;
        try {
            headers = event.headers;
            if (!headers.correlationId) {
                headers = JSON.parse(event.body).headers;
            }
        } catch (exception) {
            headers = event.headers;
        }
        return headers;
    }
}

module.exports = EventMessageUtility;