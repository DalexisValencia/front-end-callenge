/*
 * Create a custom model response for api calls
 */

//Object Author shared between custom models
const author = {
    name: "Duvan Alexis",
    lastname: "Valencia Munca"
};

/*
 * Model Custom response for /api/items/${id}
 * @param Object (res) = {item, description}
 * item: api call response for ${api.baseurl}items/${id}
 * descripion: api call response for ${api.baseurl}items/${id}}/description
 */
module.exports.customItemsModel = function(res) {
    return {
        ...author,
        item: {
            id: res.item.id,
            title: res.item.title,
            price: {
                currency: res.item.currency_id,
                amount: res.item.base_price,
                decimals: res.item.available_quantity
            },
            picture: res.item.thumbnail,
            condition: res.item.condition,
            free_shipping: res.item.shipping.free_shipping,
            sold_quantity: res.item.sold_quantity,
            description: res.description.plain_text
        }

    };
}

/*
 * Model Custom response for /api/items/?q=query
 * @param Object (res) = {item}
 * item: api call response for ${api.baseurl}sites/MLA/search?q=${querie}`
 */
module.exports.customSearchModel = function(res) {
    //Delete iterms from result only 4 left 
    const itemsFilter = res.results.splice(4, (res.results.length - 4));

    return {
        ...author,
        categories: res.available_filters.map((item) => { return item.name }),
        items: res.results.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: item.available_quantity
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            }
        }),
    };
}