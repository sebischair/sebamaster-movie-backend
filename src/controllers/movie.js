"use strict";

const MovieModel = require('../models/movie');


const create = (movie) => MovieModel.create(movie);

const read   = (id) => MovieModel.findById(id).exec();

const update = (id,movie) => MovieModel.findByIdAndUpdate(id,movie,{ new: true, runValidators: true}).exec();

const remove = (id) => MovieModel.findByIdAndRemove(id).exec();

const list   = () => MovieModel.find({}).exec();


module.exports = {
    create,
    read,
    update,
    remove,
    list
};