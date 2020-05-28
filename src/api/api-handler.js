import api from './urls';
import * as urls from './urls';

export function sendSensorData(home, source, obj, callback) {

    api.post(urls.ELASTIC + source +'/data', obj)
        .then(response => {
            if (response.status === 200) {
                callback('ok', (response.data));
            } else {
                callback('error', response.data);
            }
        })
        .catch(error => {
            callback('exception', error.toLocaleString());
        });

};

export function getResult(obj, callback) {

    api.get(urls.RESULT, (obj))
        .then(response => {
            if (response.status === 200) {
                callback('ok', (response.data));
            } else {
                callback('error', response.data);
            }
        })
        .catch(error => {
            callback('exception', error.toLocaleString());
        });

};