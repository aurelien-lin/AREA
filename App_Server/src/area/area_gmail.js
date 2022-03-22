const express = require('express');
const axios = require('axios');
const app = express.Router();
var cron = require('node-cron');

app.post("/covid", (req, res) => {
    var country = req.body.country;
    var mail = req.body.mail;
    var covid = '';
    var tmp = 0;

    axios.post('http://localhost:8080/covid/covid', { user: country })
        .then((response) => { covid = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/covid/covid', { user: country })
            .then((response) => {
                if (covid != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: 'les dernières info du covid',
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop()
                            return res.send({
                                message: 'last covid info send',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var tmp_money = '';
    var tmp = 0;

    axios.post('http://localhost:8080/currency/money', { currency: money })
        .then((response) => { tmp_money = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/currency/money', { currency: money })
            .then((response) => {
                if (tmp_money != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: 'Le taux des devises',
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'Currency sent by mail',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var bit = '';
    var tmp = 0;

    axios.post('http://localhost:8080/currency/bitcoin', { currency: Conv })
        .then((response) => { bit = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/currency/bitcoin', { currency: Conv })
            .then((response) => {
                if (bit != JSON.stringify(response.data.message || tmp >= 2))
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                        email: mail,
                        subject: 'Le taux du bitcoin',
                        message: JSON.stringify(response.data.message)
                    })
                    .then(() => {
                        task.stop();
                        return res.send({
                            message: 'rate of bitcoin sent by mail',
                            status: 200
                        })
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/github", (req, res) => {
    var user = req.body.user;
    var mail = req.body.mail;
    var nb_repo = 0;

    axios.post('http://localhost:8080/github/getrepos', { user: user })
        .then((response) => { nb_repo = response.data.message; })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/github/getrepos', { user: user })
            .then((response) => {
                if (response.data.message > nb_repo) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: 'Nouveau repos publique de ' + user,
                            message: 'Nombre total de repo ' + JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'Number of public repos',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var news = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/weather', { city: City })
        .then((response) => { news = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/news/news', { country: country, category: category })
            .then((response) => {
                if (news != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: 'Les dernières actualités',
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'last news send by gmail',
                                status: 200
                            })
                        })
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/time", (req, res) => {
    var Tzone = req.body.timezone;
    var mail = req.body.mail;
    var time = '';

    axios.post('http://localhost:8080/timer/time', { timezone: Tzone })
        .then((response) => { time = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/timer/time', { timezone: Tzone })
            .then((response) => {
                if (time != JSON.stringify(response.data.message)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: 'fuseaux horraires',
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'Time zones',
                                status: 200
                            })
                        })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
    })
    task.start();
})

app.post("/weather", (req, res) => {
    var City = req.body.city;
    var mail = req.body.mail;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/weather', { city: City })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/weather', { city: City })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message >= 10)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "climat de la ville de " + City,
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'weather of a city',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/airpollution', { lon: Lon, lat: Lat })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/airpollution', { lon: Lon, lat: Lat })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message || tmp >= 2)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "pollution d'une ville",
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'pollution of a city',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var info_temp = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/geocoding', { zip: Zip, country: country })
        .then((response) => { info_temp = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/geocoding', { zip: Zip, country: country })
            .then((response) => {
                if (info_temp != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "geocoding",
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'geocoding',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var tmp_uv = '';
    var tmp = 0;

    axios.post('http://localhost:8080/weather/uv', { lon: Lon, lat: Lat })
        .then((response) => { tmp_uv = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/weather/uv', { lon: Lon, lat: Lat })
            .then((response) => {
                if (tmp_uv != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "uv check",
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'UV of your position',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var search = '';
    var tmp = 0;

    axios.post('http://localhost:8080/youtube/search', { search_query: searchQuery })
        .then((response) => { search = JSON.stringify(response.data) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/youtube/search', { search_query: searchQuery })
            .then((response) => {
                if (search != JSON.stringify(response.data) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "recherche youtube",
                            message: JSON.stringify(response.data)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'youtube research',
                                status: 200
                            })
                        })
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
    var mail = req.body.mail;
    var search = '';
    var tmp = 0;

    axios.post('http://localhost:8080/youtube/search-with-googleapis', { search_query: searchQuery })
        .then((response) => { search = JSON.stringify(response.data) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/youtube/search-with-googleapis', { search_query: searchQuery })
            .then((response) => {
                if (search != JSON.stringify(response.data) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "youtube recherche avec GA",
                            message: JSON.stringify(response.data)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'youtube search with GA',
                                status: 200
                            })
                        })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

app.post("/following", (req, res) => {
    var mail = req.body.mail;
    var token = req.body.token;
    var tmp_f = '';

    axios.post('http://localhost:8080/spotify/following', { token: token })
        .then((response) => { tmp_f = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/spotify/following', { token: token })
            .then((response) => {
                if (tmp_f != JSON.stringify(response.data.message)) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "Nombre d'artistes suivis",
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'how many artist do I follow',
                                status: 200
                            })
                        })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
    })
    task.start();
})

app.post("/lol", (req, res) => {
    var mail = req.body.mail;
    var tmp_champ = '';
    var tmp = 0;

    axios.post('http://localhost:8080/lol/lol')
        .then((response) => { tmp_champ = JSON.stringify(response.data.message) })
        .catch((err) => console.log(err))

    var task = cron.schedule('*/1 * * * *', () => {
        axios.post('http://localhost:8080/lol/lol')
            .then((response) => {
                if (tmp_champ != JSON.stringify(response.data.message) || tmp >= 2) {
                    axios.post('http://localhost:8080/sendgmail/sendmail', {
                            email: mail,
                            subject: "Liste des id des champions gratuits",
                            message: JSON.stringify(response.data.message)
                        })
                        .then(() => {
                            task.stop();
                            return res.send({
                                message: 'list of id of free champ this week',
                                status: 200
                            })
                        })
                        .catch((err) => console.log(err))
                }
            })
            .catch((err) => console.log(err))
        tmp = tmp + 1;
    })
    task.start();
})

module.exports = app;