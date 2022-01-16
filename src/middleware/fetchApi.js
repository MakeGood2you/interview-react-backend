const fetch = require("node-fetch")

async function getData(url) {
    const data = await fetch(url)
    return data.json();
}

module.exports = {
    getData
}