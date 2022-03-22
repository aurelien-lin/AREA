const express = require('express');
const router = express.Router();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

router.use(cors());

router.post("/sendmail", async (req, res) =>{
    const apiKey = "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";
    const recipient = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    sgMail.setApiKey(apiKey);
    const msg = {
        to: recipient,
        from: 'lin.rilong@live.fr',
        subject: "AREA REACTION SENDGRID: " + subject,
        text: message || `Welcome, this is an automated email from Area Team\nPlease don't reply.`,
    }
    console.log(msg);
    sgMail
        .send(msg)
        .then(() => {
          return res.send({
              message: "Email successfully sent",
              status: 200
          })
        })
        .catch((error) => {
          console.error(error)
          return res.send({
            message: "ERROR",
            status: 405
        });
        })
})

module.exports = router;
