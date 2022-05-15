const axios = require('axios');
var api = require("./constants.js");
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
};
/*
 * @param String (Querie)
 * Querie = Search Term 
 */
module.exports.search = function(querie) {
    return axios.get(`${api.baseurl}sites/MLA/search?q=${querie}`, { headers: headers });
}

/*
 * @param String (id)
 * id = Item reference 
 * test(MLA904895322)
 */
module.exports.itemsById = function(id) {
    let endpoints = [
        `${api.baseurl}items/${id}`,
        `${api.baseurl}items/${id}/description`,
    ];
    return Promise.all(endpoints.map((endpoint) => axios.get(endpoint)), { headers: headers })
}