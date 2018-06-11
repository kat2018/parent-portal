const parents = require('express').Router();
const all = require('./Children');

models.get('/', all);

module.exports = parents