const express = require('express');
const app = express.Router();
const axios = require('axios');
const cors = require('cors');
const { response } = require('express');
const querystring = require('query-string');

app.post("/following", async (req, res) => {
    const token = TOKEN_SPOTIFY
    axios({
        method: 'GET',
        url: "https://api.spotify.com/v1/me/following?type=artist",
        headers: {
            Authorization: (`Bearer ${token}`),
            'Content-type': 'application/json'
        }
    })
    .then((response) => {
        let a = response.data.artists.items
        console.log(a.length)
        return res.send({
            message: a.length,
            status:200
        })
    })
    .catch((err) => console.log(err))
})

app.post("/search", async (req, res) => {
    const token = TOKEN_SPOTIFY
    let search_query = req.body.search_query;
    axios({
        method: 'GET',
        headers: {
            Authorization: (`Bearer ${token}`),
            'Content-type': 'application/json'
        },
        endpoint: "https://api.spotify.com/v1/search/",
        data: {"q": "Time", "Type": "track"}

    })
    .then((response) => {
        var data = JSON.parse(response);
        console.log(data);
        return res.send({
            message: data,
            status:200
        })
    })
    .catch((err) => console.log(err))
})

module.exports = app
