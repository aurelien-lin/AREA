const express = require('express');
const app = express.Router();
const axios = require('axios');
const cors = require('cors');
const querystring = require('query-string');

app.use(cors());

app.get('/authorize', function(req, res) {
    var scope = 'user-read-private user-read-email user-library-modify playlist-modify-private playlist-modify-public user-read-currently-playing user-follow-modify user-follow-read';
    const client_id = "1a89e0dae1ea420b8a3b93fa448f6a86";
    var redirect_uri = 'http://localhost:8080/spotify/callback';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
});

app.get('/callback', async(req, res) => {
    const code = req.query.code;
    console.log(code);
    var redirect_uri = 'http://localhost:8080/spotify/callback';
    const client_id = "1a89e0dae1ea420b8a3b93fa448f6a86";
    const client_secret = "d64ec05940f14188b896b4c3f436d1d4";
    const keyy = (client_id + ':' + client_secret).toString('base64');
    console.log(keyy)
    let key = client_id + ':' + client_secret;
    let buff = new Buffer(key);
    let base64data = buff.toString('base64');

    axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            params: {
                code: code,
                grant_type: 'authorization_code',
                redirect_uri: redirect_uri,
            },
            headers: {
                'Authorization': 'Basic ' + base64data,
                'Content-type': 'application/x-www-form-urlencoded'
            },
            json: true
        })
        .then(async(response) => {
            response.data.message = "User Successfully connected";
            response.data.status = 200;
            TOKEN_SPOTIFY = response.data.access_token
            return res.send(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/authorize_mobile', function(req, res) {
    var scope = 'user-read-private user-read-email user-library-modify playlist-modify-private playlist-modify-public user-read-currently-playing user-follow-modify user-follow-read';
    const client_id = "1a89e0dae1ea420b8a3b93fa448f6a86";
    var redirect_uri = 'http://10.0.2.2:8080/spotify/callback_mobile';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
});

app.get('/callback_mobile', async(req, res) => {
    const code = req.query.code;
    console.log(code);
    var redirect_uri = 'http://10.0.2.2:8080/spotify/callback_mobile';
    const client_id = "1a89e0dae1ea420b8a3b93fa448f6a86";
    const client_secret = "d64ec05940f14188b896b4c3f436d1d4";
    const keyy = (client_id + ':' + client_secret).toString('base64');
    console.log(keyy)
    let key = client_id + ':' + client_secret;
    let buff = new Buffer(key);
    let base64data = buff.toString('base64');

    axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            params: {
                code: code,
                grant_type: 'authorization_code',
                redirect_uri: redirect_uri,
            },
            headers: {
                'Authorization': 'Basic ' + base64data,
                'Content-type': 'application/x-www-form-urlencoded'
            },
            json: true
        })
        .then(async(response) => {
            response.data.message = "User Successfully connected";
            response.data.status = 200;
            TOKEN_SPOTIFY = response.data.access_token
            return res.send(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post("/playlist", async(req, res) => {
    const playlistname = req.body.playlistname
    const description = req.body.description
    const token = TOKEN_SPOTIFY

    axios({
            method: 'POST',
            url: "https://api.spotify.com/v1/me/playlists",
            data: JSON.stringify({
                "name": playlistname,
                "description": description
            }),
            headers: {
                Authorization: (`Bearer ${token}`),
                'Content-type': 'application/json'
            }
        })
        .then(() => {
            return res.send({
                message: "Playlist created",
                status: 200
            })
        })
        .catch((err) => console.log(err))
})

module.exports = app