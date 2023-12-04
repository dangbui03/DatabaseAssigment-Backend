const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
const movieScreening = require('./movieScreening.route')
const room = require('./room.route')
const customer = require('./customer.route')

router.use('/', [movie, movieScreening, room, customer]);


module.exports = router;