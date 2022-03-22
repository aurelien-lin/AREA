const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post("/covid", (req, res) => {
    let userInput = req.body.user;
    const URL = `https://disease.sh/v3/covid-19/countries/${userInput}`;

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
