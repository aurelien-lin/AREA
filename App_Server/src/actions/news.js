const express = require('express');
const app = express.Router();
const axios = require('axios');

app.post("/news", (req, res) => {
    const country = req.body.country;
    const category = req.body.category;
    const API_KEY = '6413b3e8126f4936aebf73587659af6e';
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

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

module.exports = app
