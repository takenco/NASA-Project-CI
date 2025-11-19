
const express = require('express');

const planetsRouter  = require('./planets/planets.router')
const launchesRouter  = require('./launches/launches.router')

const api = express.Router();

api.use('/launches', launchesRouter);
api.use('/planets', planetsRouter);
api.use('/launch', launchesRouter);

module.exports = api;