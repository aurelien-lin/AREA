const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post("/time", (req, res) => {
    let Tzone = req.body.timezone;
    const URL = `http://worldtimeapi.org/api/timezone/${Tzone}`;

    axios.get(URL)
        .catch(error => {
            console.log("error in serveur")
        })
        .then((response) => {
            console.log(response.data)
            return res.send({
                message: response.data,
                status:200
            })
        })
})

module.exports = app;
