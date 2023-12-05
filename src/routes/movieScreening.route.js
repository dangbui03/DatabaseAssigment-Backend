const express = require('express');
const router = express.Router();
const movieScreeningCT = require('../controllers/movieScreening.controller')

router.route('/screens')
    .get(movieScreeningCT.getAllMovieScreenings)

router.route('/screen')
    .get(movieScreeningCT.getMovieScreening)
    .put()
    .post()

router.route('/screen/time')
    .get(movieScreeningCT.getShowTimes)

module.exports = router;