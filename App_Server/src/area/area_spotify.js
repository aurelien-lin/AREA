const express = require('express');
const app = express.Router();
const axios = require('axios');
var cron = require('node-cron');

app.post("/covid", (req, res) => {
    var country = req.body.country;
    var token = req.body.token;
    var covid = '';
    var tmp = 0;

    axios.post('http://localhost:8080/covid/covid', { user: country })
        .then((response) => { covid = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/covid/covid', { user: country })
            .then((response) => {
                if (covid != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'les dernières info du covid', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start()
})

app.post("/money", (req, res) => {
    var money = req.body.money;
    var token = req.body.token;
    var tmp_money = '';
    var tmp = 0;

    axios.post('http://localhost:8080/currency/money', { currency: money })
        .then((response) => { tmp_money = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/currency/money', { currency: money })
            .then((response) => {
                if (tmp_money != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'le taux des devises', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/bitcoin", (req, res) => {
    var Conv = req.body.currency;
    var token = req.body.token;
    var bit = '';
    var tmp = 0;

    axios.post('http://localhost:8080/currency/bitcoin', { currency: Conv })
        .then((response) => { bit = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/currency/bitcoin', { currency: Conv })
            .then((response) => {
                if (bit != JSON.stringify(response.data.message || tmp >= 2))
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'le taux du bitcoin', description: JSON.stringify(response.data.message).substring(0, 298) })
                    .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/github", (req, res) => {
    var user = req.body.user;
    var token = req.body.token;
    var nb_repo = 0;

    axios.post('http://localhost:8080/github/getrepos', { user: user })
        .then((response) => { nb_repo = response.data.message; })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/github/getrepos', { user: user })
            .then((response) => {
                if (response.data.message > nb_repo) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'nouveau repo', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
    });
    task.start();
})

app.post("/news", (req, res) => {
    var country = req.body.country;
    var category = req.body.category;
    var token = req.body.token;
    var news = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/weather', { city: City })
        .then((response) => { news = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/news/news', { country: country, category: category })
            .then((response) => {
                if (news != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'les dernières actualités', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/time", (req, res) => {
    var Tzone = req.body.timezone;
    var token = req.body.token;
    var time = '';

    axios.post('http://localhost:8080/timer/time', { timezone: Tzone })
        .then((response) => { time = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/timer/time', { timezone: Tzone })
            .then((response) => {
                if (time != JSON.stringify(response.data.message)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'fuzeaux horaires', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
    })
    task.start();
})

app.post("/weather", (req, res) => {
    var City = req.body.city;
    var token = req.body.token;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/weather', { city: City })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/weather', { city: City })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message >= 10)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'weather', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/airpollution", (req, res) => {
    var Lon = req.body.lon;
    var Lat = req.body.lat;
    var token = req.body.token;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/airpollution', { lon: Lon, lat: Lat })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/airpollution', { lon: Lon, lat: Lat })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'airpollution', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
        task.start();
    })
})

app.post("/geocoding", (req, res) => {
    var Zip = req.body.zip;
    var country = req.body.country;
    var token = req.body.token;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/geocoding', { zip: Zip, country: country })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/geocoding', { zip: Zip, country: country })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'geocoding', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/uv", (req, res) => {
    var Lon = req.body.lon;
    var Lat = req.body.lat;
    var token = req.body.token;
    var tmp_uv = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/uv', { lon: Lon, lat: Lat })
        .then((response) => { tmp_uv = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/uv', { lon: Lon, lat: Lat })
            .then((response) => {
                if (tmp_uv != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'uv', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/search", (req, res) => {
    var searchQuery = req.body.search_query;
    var token = req.body.token;
    var search = '';
    var tmp = 0;

    axios.post('http://localhost:8080/youtube/search', { search_query: searchQuery })
        .then((response) => { search = JSON.stringify(response.data) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/youtube/search', { search_query: searchQuery })
            .then((response) => {
                if (search != JSON.stringify(response.data) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'resultat des recherche youtube', description: JSON.stringify(response.data).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/search-with-googleapis", (req, res) => {
    var searchQuery = req.body.search_query;
    var token = req.body.token;
    var search = '';
    var tmp = 0;

    axios.post('http://localhost:8080/youtube/search-with-googleapis', { search_query: searchQuery })
        .then((response) => { search = JSON.stringify(response.data) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/youtube/search-with-googleapis', { search_query: searchQuery })
            .then((response) => {
                if (search != JSON.stringify(response.data) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'resultat des recherche youtube avec google api', description: JSON.stringify(response.data).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/following", (req, res) => {
    var token = req.body.token;
    var tmp_f = '';

    axios.post('http://localhost:8080/spotify/following', { token: token })
        .then((response) => { tmp_f = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/spotify/following', { token: token })
            .then((response) => {
                if (tmp_f != JSON.stringify(response.data.message)) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'Vous suivez un(e) nouvel(le) artist(e)', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
    })
    task.start();
})

app.post("/lol", (req, res) => {
    var token = req.body.token;
    var tmp_champ = '';
    var tmp = 0;

    axios.post('http://localhost:8080/lol/lol')
        .then((response) => { tmp_champ = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/lol/lol')
            .then((response) => {
                if (tmp_champ != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/spotify/playlist', { token: token, playlistname: 'Liste des id des champions gratuits', description: JSON.stringify(response.data.message).substring(0, 298) })
                        .then(() => { return res.send({ message: "Playlist created", status: 200 }) })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

module.exports = app