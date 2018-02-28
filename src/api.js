"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth = require('./routes/auth');
const movie = require('./routes/movie');

const api = express();

//Adding middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'SEBA Master Movie Backend'
    });
});

// API routes
api.use('/auth'  , auth);
api.use('/movies', movie);

module.exports = api;