const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post('/getrepos', (req, res) => {
    const user = req.body.user;
    //const user = ""
    axios.get(`https://api.github.com/users/${user}`)
        .then((response) => {
            return res.send({
                message: response.data.public_repos,
                status:200
            })
        })
        .catch((err) => console.log(err))
})

module.exports = app;
