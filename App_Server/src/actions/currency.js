const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post("/money", (req, res) => {
    let from = req.body.currency;
    const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`;

    axios.get(URL)
        .catch(error => {
            console.log(error);
        })
        .then((response) => {
            console.log(response.data);
            return res.send({
                message: response.data,
                status: 200
            })
        })
})

app.post("/bitcoin", (req, res) => {
    Conv = req.body.currency;
    const URL = `https://api.coinbase.com/v2/prices/spot?currency=${Conv}`;

    axios.get(URL)
        .catch(error => {
            console.log(error);
        })
        .then((response) => {
            console.log(response.data);
            return res.send({
                message: response.data,
                status: 200
            })
        })
})

module.exports = app;
