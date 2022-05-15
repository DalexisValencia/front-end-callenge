import axios from 'axios';
import BASE_URL from './constants';
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
};
class QueriesServices {
    search(querie) {
        return axios.get(`${BASE_URL}items/?q=${querie}`, { headers: headers });
        // return fetch(`${BASE_URL}items/?q=${querie}`).then(res => res.json());
    }
}

export default new QueriesServices();