"use strict"
const {getData} = require('../../middleware/fetchApi');

const getDataByUrls = async (urls, query) => {
    const result = {}
    try {
        await Promise.all(urls.map(async url => {
            const resp = await getData(url)
            url.lastIndexOf('photos') !== -1
                ? result.photos = resp[0]
                : result.images = resp[0]
        }));

        return result

    } catch (err) {
        err.entity = 'images/data-query/getDataByUrls'
        throw err
    }
}
module.exports = {
    getDataByUrls
}

