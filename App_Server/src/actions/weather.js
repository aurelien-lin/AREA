const express = require('express');
const axios = require('axios');
const app = express.Router();

app.post("/weather", (req, res) => {
    const API_KEY = 'ad40847398e87a20e1c5ed6dfff5cd1b';
    let City = req.body.city;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${API_KEY}`;

    axios.get(URL)
        .catch(error => {
            console.log("error in serveur")
            return res.send({
                message: "error",
                status: 402
            })
        })
        .then((response) => {
            console.log(response.data)
            return res.send({
                message: response.data,
                status: 200
            })
        })
})

app.post("/airpollution", (req, res) => {
    const API_KEY = 'ad40847398e87a20e1c5ed6dfff5cd1b';
    let Lon = req.body.lon;
    let Lat = req.body.lat;
    const URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${Lat}&lon=${Lon}&appid=${API_KEY}`;

    axios.get(URL)
        .catch(error => {
            console.log("error in serveur")
        })
        .then((response) => {
            console.log(response.data)
            return res.send({
                message: response.data,
                status: 200
            })
        })
})

app.post("/geocoding", (req, res) => {
    const API_KEY = 'ad40847398e87a20e1c5ed6dfff5cd1b';
    let Zip = req.body.zip;
    let country = req.body.country;
    const URL = `http://api.openweathermap.org/geo/1.0/zip?zip=${Zip},${country}&appid=${API_KEY}`;

    axios.get(URL)
        .catch(error => {
            console.log("error in serveur")
        })
        .then((response) => {
            console.log(response.data)
            return res.send({
                message: response.data,
                status: 200
            })
        })
})

app.post("/uv", (req, res) => {
    let Lon = req.body.lon;
    let Lat = req.body.lat;
    let Params = 'uvIndex';

    const URL = `https://api.stormglass.io/v2/solar/point?lat=${Lat}&lng=${Lon}&params=${Params}`;
    axios({
            method: "get",
            url: URL,
            headers: {
                Authorization: '1f40d0a6-a4b4-11ec-a97f-0242ac130002-1f40d11e-a4b4-11ec-a97f-0242ac130002'
            }
        })
        .then((response) => {
            return res.send(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = app;
