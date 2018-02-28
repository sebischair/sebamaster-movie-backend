"use strict";

const express        = require('express');
const router         = express.Router();
const jwt            = require('jsonwebtoken');
const bcrypt         = require('bcryptjs');

const middlewares    = require('../middlewares');
const config         = require('../config');
const UserController = require('../controllers/user');


router.post('/login', function(req, res) {
    if (!req.body.hasOwnProperty('password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password property'
    });

    if (!req.body.hasOwnProperty('username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username property'
    });


    UserController.find({username: req.body.username})
        .then(user => {

            // check if the password is valid
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
            if (!isPasswordValid) return res.status(401).send({token: null });

            // if user is found and password is valid
            // create a token
            const token = jwt.sign({ id: user._id, username: user.username }, config.JwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({token: token});

        })
        .catch(error => res.status(404).json({
            error: 'User Not Found',
            message: error.message
        }));

});



router.post('/register', (req, res) => {

    if (!req.body.hasOwnProperty('password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password property'
    });

    if (!req.body.hasOwnProperty('username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username property'
    });

    const user = Object.assign(req.body, {password: bcrypt.hashSync(req.body.password, 8)});

    UserController.create(user)
        .then(user => {

            // if user is registered without errors
            // create a token
            const token = jwt.sign({ id: user._id, username: user.username }, config.JwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({token: token});


        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));


});

router.get('/me', middlewares.checkAuthentication , (req, res) => {

    UserController.read(req.userId)
        .then(user => {

            if (!user) return res.status(404).json({
                error: 'Not Found',
                message: `User not found`
            });

            res.status(200).json(user)
        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));


});

router.get('/logout', (req, res) => {
    res.status(200).send({ token: null });
});

module.exports = router;