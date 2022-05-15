const services = require("./services/apiRest");
const customModels = require("./methods/models");
const express = require("express");
const axios = require('axios');
const PORT = process.env.PORT || 3001;

var cors = require('cors')

const app = express();
app.use(cors());

/*
 * End Point /api/items/?q=query
 * Consult one(1) endpoint:
 * 1: ${api.baseurl}sites/MLA/search?q=${querie}
 */
app.get("/api/items/", (req, res) => {
    let search = req.query.q;
    if (search) {
        services.search(search)
            .then(function(response) {
                // handle success
                res.json({ body: customModels.customSearchModel(response.data) });
            })
            .catch(function(error) {
                // handle error
                if (error.message) {
                    res.json({ error: error.message });
                }
            })
    } else {
        res.json({ error: 'No existen parámetros de búsqueda' });
    }
});

/*
 * End Point /api/items/${id}
 * Consult two(2) endpoints:
 * 1: ${api.baseurl}items/${id}
 * 2: ${api.baseurl}items/${id}}/description
 */
app.get("/api/items/:id", (req, res) => {
    let id = req.params.id;
    var data;
    if (id) {
        services.itemsById(id)
            .then(
                axios.spread(({ data: item }, { data: description }) => {
                    res.json({ body: customModels.customItemsModel({ item, description }) });
                })
            )
            .catch(function(error) {
                // handle error
                if (error.message) {
                    res.json({ error: error.message });
                }
            })
    } else {
        res.json({ error: 'No existen parámetros de búsqueda' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});