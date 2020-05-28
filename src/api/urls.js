/*eslint-disable */
import axios from 'axios';
// create apiInstance by axios  --------------------------------------
// -------------------------------------------------------------------

const apiInstance = axios.create({
    timeout: 10000,
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    //'Access-Control-Allow-Origin' header
    withCredentials: false
});

apiInstance.defaults.headers.post['Content-Type'] = 'application/json';





export default apiInstance

// api static urls ---------------------------------------------------
// -------------------------------------------------------------------

export const BASEURL='http://amoozesh.mycloudservice.ir';

//login
export const ELASTIC = 'http://192.168.1.4:9200/';

export const RESULT = 'http://192.168.1.2:8080/result';
