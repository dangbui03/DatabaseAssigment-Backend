const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
const movieScreening = require('./movieScreening.route')
const room = require('./room.route')

router.use('/', [movie, movieScreening, room]);


module.exports = router;