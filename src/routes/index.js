const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
const movieScreening = require('./movieScreening.route')

router.use('/', [movie, movieScreening]);

module.exports = router;