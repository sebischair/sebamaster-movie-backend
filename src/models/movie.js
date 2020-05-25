"use strict";

const mongoose = require('mongoose');


// Define the movie schema
const MovieSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: String,
    runtime: Number,
    mpaa_rating: String,
    year: {
        type: Number,
        required: true
    },
    posters: {
            thumbnail: String,
            profile: String,
            detailed: String,
            original: String
        }
});

MovieSchema.set('versionKey', false);
MovieSchema.set('timestamps', true);


// Export the Movie model
module.exports = mongoose.model('Movie', MovieSchema);