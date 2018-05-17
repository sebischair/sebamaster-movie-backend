"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const MovieController = require('../controllers/movie');


router.get('/', MovieController.list); // List all movies
router.post('/', middlewares.checkAuthentication, MovieController.create); // Create a new movie
router.get('/:id', MovieController.read); // Read a movie by Id
router.put('/:id', middlewares.checkAuthentication, MovieController.update); // Update a movie by Id
router.delete('/:id', middlewares.checkAuthentication, MovieController.remove); // Delete a movie by Id


module.exports = router;