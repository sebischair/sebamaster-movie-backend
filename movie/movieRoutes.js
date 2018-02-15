module.exports = movieRoutes;


function movieRoutes() {

    var movieController = require('./movieController');
    var router = require('express').Router();

    router.route('/')
        .post(movieController.postMovie)
        .get(movieController.getMovies);

    router.route('/:movie_id')
        .get(movieController.getMovie)
        .put(movieController.putMovie)
        .delete(movieController.deleteMovie);

    return router;
}
