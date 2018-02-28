"use strict";

const express  = require('express');
const router   = express.Router();

const MovieController = require('../controllers/movie');

/* GET movies listing. */

router.get('/', (req, res) => {

    MovieController.list()
        .then(movies => res.status(200).json(movies))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));

});


/* POST register new movie */

router.post('/', (req, res)  => {

    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    MovieController.create(req.body)
        .then(movie => res.status(201).json(movie))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));


});

/* GET movie by Id. */

router.get('/:id', (req, res) => {

    MovieController.read(req.params.id)
        .then(movie => {

            if (!movie) return res.status(404).json({
                error: 'Not Found',
                message: `Movie not found`
            });

            res.status(200).json(movie)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

});


/* PUT update a movie by Id */

router.put('/:id', (req, res) => {

    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    MovieController.update(req.params.id,req.body)
        .then(movie => res.status(200).json(movie))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));


});



/* DELETE delete a movie by Id */

router.delete('/:id', (req, res) => {

    MovieController.remove(req.params.id)
        .then(() => res.status(200).json({message: `Movie with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));

});



module.exports = router;