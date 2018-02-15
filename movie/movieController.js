// importing Movie model
var Movie = require('./movieSchema');
exports.postMovie = function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(m);
    });
};
// Create endpoint /api/movies for GET
exports.getMovies = function(req, res) {
    Movie.find(function(err, movies) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(movies);
    });
};
// Create endpoint /api/movies/:movie_id for GET
exports.getMovie = function(req, res) {
    // Use the Movie model to find a specific movie
    Movie.findById(req.params.movie_id, function(err, movie) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(movie);
    });
};
// Create endpoint /api/movies/:movie_id for PUT
exports.putMovie = function(req, res) {
    // Use the Movie model to find a specific movie and update it
    Movie.findByIdAndUpdate(
        req.params.movie_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, movie) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(movie);
    });
};
// Create endpoint /api/movies/:movie_id for DELETE
exports.deleteMovie = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Movie.findById(req.params.movie_id, function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};