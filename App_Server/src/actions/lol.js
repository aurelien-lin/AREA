const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post("/lol", (req, res) => {
    const API_KEY = 'RGAPI-b881e3bf-cbc4-4706-90ea-eaebf3eb7507';
    const URL = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;

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
