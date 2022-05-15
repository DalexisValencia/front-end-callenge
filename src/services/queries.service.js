import BASE_URL from './constants';

class QueriesServices {
    search(querie) {
        return fetch(`${BASE_URL}sites/MLA/search?q=${querie}`).then(res => res.json())
    }
}

export default new QueriesServices;