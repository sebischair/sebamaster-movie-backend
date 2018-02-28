"use strict";

const UserModel = require('../models/user');


const create = (user) => UserModel.create(user);

const read   = (id) => UserModel.findById(id).select('username').exec();

const remove = (id) => UserModel.findByIdAndRemove(id).exec();

const find   = (user) => UserModel.findOne(user).exec();

module.exports = {
    create,
    read,
    remove,
    find
};