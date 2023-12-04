const express = require('express');
const router = express.Router();
const movieScreeningCT = require('../controllers/movieScreening.controller')

router.route('/screens')
    .get(movieScreeningCT.getAllMovieScreenings)

// router.route('/screen')
//     .get()

module.exports = router;