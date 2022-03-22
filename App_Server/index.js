const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var requestIp = require('request-ip');
var moment = require('moment');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const uri = process.env.MONGODB_URI_LOCAL || "mongodb+srv://lucasnora:lucasnoradashboard@cluster0.fl8qw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = process.env.MONGODB_URI_LOCAL || "mongodb+srv://area:area@cluster0.hy61q.mongodb.net/area?retryWrites=true&w=majority";
// const uri = "mongodb+srv://area:area@cluster0.1rvmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Connexion to db is done");
});

app.get('/', (req, res) => {
    res.json({ message: "From server!" });
})

app.get('/about.json', (req, res) => {
    var ip = requestIp.getClientIp(req);
    res.json({
        "client": {
            "host": ip,
        },
        "server": {
            "current_time": moment().unix(),
            "services": [{
                "name": "openweather",
                "actions": [{
                    "name": "city temperature",
                    "description": "give infos about city temperature",
                },  {
                    "name": "city geocoding",
                    "description": "give infos about city geocoding",
                },  {
                    "name": "city air pollution",
                    "description": "give infos about air pollution",
                }],
            }, {
                "name": "stormglassweather",
                "actions": [{
                    "name": "city uv",
                    "description": "give infos about city uv",
                }],
            }, {
                "name": "currency",
                "actions": [{
                    "name": "money converter",
                    "description": "convert money",
                }],
            }, {
                "name": "bitcoincurrency",
                "actions": [{
                    "name": "bitcoin converter",
                    "description": "convert bitcoin to EUR",
                }],
            }, {
                "name": "github",
                "actions": [{
                    "name": "check repo",
                    "description": "check nber of repo in account",
                }],
            }, {
                "name": "news",
                "actions": [{
                    "name": "news",
                    "description": "check news",
                }],
            }, {
                "name": "spotify",
                "actions": [{
                    "name": "spotify following",
                    "description": "check spotify artist follow",
                }],
                "reactions": [{
                    "name": "spotify playlist",
                    "description": "create spotify playlist",
                }],
            }, {
                "name": "youtube",
                "actions": [{
                    "name": "youtube search",
                    "description": "search ytb video name",
                }],
            }, {
                "name": "google",
                "actions": [{
                    "name": "google search",
                    "description": "google search infos",
                }],
            }, {
                "name": "lol",
                "actions": [{
                    "name": "lol champion",
                    "description": "champions rotate",
                }],
            }, {
                "name": "timer",
                "actions": [{
                    "name": "timedate",
                    "description": "information about timedate",
                }],
            }, {
                "name": "covid",
                "actions": [{
                    "name": "check covid case",
                    "description": "give infos about covid cases",
                }],
            }, {
                "name": "sendgrid",
                "reactions": [{
                    "name": "send email",
                    "description": "send mail to indicate account",
                }],
            }, {
                "name": "gmail",
                "reactions": [{
                    "name": "send email",
                    "description": "send mail to indicate account",
                }],
            }],
        }
    })
})

const user = require("./src/login/Login");
const github = require('./src/actions/github')
const weather = require('./src/actions/weather');
const lol = require('./src/actions/lol');
const covid = require('./src/actions/covid');
const timer = require('./src/actions/timer');
const currency = require('./src/actions/currency');
const youtube = require('./src/actions/youtube');
const spotifa = require('./src/actions/spotify');
const news = require('./src/actions/news');
const sendgrid = require('./src/reactions/sengrid');
const sendgmail = require('./src/reactions/sendgmail');
const spotifr = require('./src/reactions/spotify');
const calendar = require('./src/reactions/gcalendar');
const area_gmail = require('./src/area/area_gmail');
const area_sendgrid = require('./src/area/area_sendgrid');
const area_spotify = require('./src/area/area_spotify');
const apk_download = require('./src/apk');

app.use('/user', user);
app.use('/github', github);
app.use('/weather', weather);
app.use('/lol', lol);
app.use('/covid', covid);
app.use('/timer', timer);
app.use('/currency', currency);
app.use('/youtube', youtube);
app.use('/spotify', spotifa);
app.use('/news', news);
app.use('/sendgrid', sendgrid);
app.use('/sendgmail', sendgmail);
app.use('/spotify', spotifr);
app.use('/google', calendar);
app.use('/area_gmail', area_gmail);
app.use('/area_sendgrid', area_sendgrid);
app.use('/area_spotify', area_spotify);
app.use('/client.apk', apk_download);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
