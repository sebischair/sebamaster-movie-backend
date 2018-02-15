// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Movie   = new mongoose.Schema({
    title: String,
    synopsis: String,
    mpaa_rating: String,
    year: Number,
    posters: {
        thumbnail: String,
        profile: String,
        detailed: String,
        original: String
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Movie', Movie);

