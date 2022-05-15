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
    }
    details(id) {
        return axios.get(`${BASE_URL}items/${id}`, { headers: headers });
    }
}

export default new QueriesServices();