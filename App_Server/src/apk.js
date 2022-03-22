const express = require('express');
const app = express.Router();

app.get("/", async (req, res) => {
    res.download('../../usr/app/client.apk', 'client.apk', (err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });
        }
    });
})

module.exports = app