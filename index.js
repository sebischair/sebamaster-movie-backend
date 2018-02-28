"use strict";

const http       = require('http');
const mongoose   = require('mongoose');

const api        = require('./src/api');
const config     = require('./src/config');


// Set the port to the API.
api.set('port', config.port);

//Create a http server based on Express
const server = http.createServer(api);


//Connect to the MongoDB database; then start the server
mongoose
    .connect(config.mongoURI)
    .then(() => server.listen(config.port))
    .catch(err => {
        console.log('Error connecting to the database', err.message);
        process.exit(err.statusCode);
    });


server.on('listening', () => {
    console.log(`API is running in port ${config.port}`);
});

server.on('error', (err) => {
    console.log('Error in the server', err.message);
    process.exit(err.statusCode);
});