const express = require("express");
const cors = require('cors');
const router = express.Router();
const User = require('./User');

router.use(cors());
router.post('/register',(req, res) => {
    const name = req.body.name;
    let email = req.body.email;
    const password = req.body.password;

    console.log(email)
    console.log(password)
    if (!name) {
        return res.send({
            success: false
        })
    }
    if (!email) {
        return res.send({
            success: false
        })
    }
    if (!password) {
        return res.send({
            success: false
        })
    }

    email = email.toLowerCase();

    User.findOne({email: email}, (err, user) => {
        if (err) {
            return res.send({
                success:false,
                status:400,
                message:'error'
            });
        }
        if (user) {
            return res.send({
                success:false,
                status:400,
                message:'user already exists'
            });
        }

        const newUser = new User({name, email, password});
        newUser.save((err, user)=> {
            if (err)
                res.send({
                    success:false,
                    status:400,
                    message: 'Error'
                });
            res.send({
                success:true,
                status:200,
                message:'registered'
            })
        })
    })
});

router.post('/login', (req, res) => {
    email = req.body.email;
    password = req.body.password
    console.log(email)
    console.log(password)
    User.findOne({email: email})
        .then(user => {
            if (user) {
                if (password === user.password) {
                    return res.send({
                        success:true,
                        status:200,
                        message:"authentificated"
                    });
                }else
                    return res.send({
                        success:false,
                        status:400,
                        message:"incorrect pwd"
                    })
            }
            else if (!user) {
                return res.send({
                    success: false,
                    status:400,
                    message: "no user with this email address"
                })
            }
        })
        .catch(err => {
            return res.send({
                success:false,
                message:"account doesn't exist"
            })
        })
});

module.exports = router;
