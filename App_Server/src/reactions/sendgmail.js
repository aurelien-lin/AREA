var nodemailer = require("nodemailer");
const express = require('express');
const app = express.Router();
const cors = require('cors');

var MAIL_SUPP = process.env.MAIL_SUPP || 'project.area.epitech@gmail.com';
var MAIL_SUPP_PASSWORD = process.env.MAIL_SUPP_PASSWORD || 'Sup3rArea';

// const SCOPES = ['https://mail.google.com/'];

app.use(cors());

// app.get('/authorize', function(req, res) {
//     const client_id = "823470750266-g2dcq7uridrm7sp8deo56o89ka0hjipt.apps.googleusercontent.com";
//     var redirect_uri = 'http://localhost:8080/google/callback';
//
//     res.redirect('https://accounts.google.com/o/oauth2/auth?' +
//         querystring.stringify({
//             access_type: 'online',
//             response_type: 'code',
//             client_id: client_id,
//             scope: SCOPES,
//             redirect_uri: redirect_uri,
//         }));
// });
//
// app.get('/callback', async(req, res) => {
//     const code = req.query.code;
//     console.log(code);
//     var redirect_uri = 'http://localhost:8080/google/callback';
//     const client_id = "823470750266-g2dcq7uridrm7sp8deo56o89ka0hjipt.apps.googleusercontent.com";
//     const client_secret = "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";
//     const keyy = (client_id + ':' + client_secret).toString('base64');
//     console.log(keyy)
//     let key = client_id + ':' + client_secret;
//     let buff = new Buffer(key);
//     let base64data = buff.toString('base64');
//
//     axios({
//             method: 'post',
//             url: 'https://oauth2.googleapis.com/token',
//             params: {
//                 code: code,
//                 grant_type: 'authorization_code',
//                 redirect_uri: redirect_uri,
//             },
//             headers: {
//                 'Authorization': 'Basic ' + base64data,
//                 'Content-type': 'application/x-www-form-urlencoded'
//             },
//             json: true
//         })
//         .then(async(response) => {
//             response.data.message = "User Successfully connected";
//             response.data.status = 200;
//             return res.send(response.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_SUPP,
    pass: MAIL_SUPP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/sendmail", async (req, res) =>{
    const recipient = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    var mailOptions = {
        from: MAIL_SUPP,
        to: recipient,
        subject: 'AREA REACTION GMAIL: ' + subject,
        text: message,
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        return res.send({
            message: "ERROR",
            status: 405
        });
    } else {
        return res.send({
            message: "Email successfully sent",
            status: 200
        });
    }
    });
});

// app.get("/mail", async (req, res) => {
//     const token = "ya29.A0ARrdaM-W9sRgBHS-yF5bAkW2LgcXNv6UixrCfhEFvn9fNqQQOOOCMh-drXNQiIb3R4TInkmRADttILBRTjZyu2doXN_RDsGwnymv4zzoUOinEO7CZCyJ_OFKsrNtZ9zbHobr_vU_scSZ13mFM1NxKiwgq8FF"
//     const recipient = "rilong.lin@epitech.eu"
//     const message = "ok"
//     const subject = "ok"
//     const mail = `From: <me@gmail.com>\nTo: <${recipient}>\nSubject: ${subject}\n\n${message}`;
//     let buff = new Buffer(mail);
//     let base64data = buff.toString('base64');
//     axios({
//         method: 'post',
//         url: "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
//         headers: {
//             Authorization: (`Bearer ${token}`),
//             accept: 'application/json'
//         },
//         data: {
//             "raw": base64data
//         }
//     })
//     .then((response) => {
//         return res.send(response.data)
//     })
// })

module.exports = app;
