const express = require('express');
const router = express.Router();
const movieCT = require('../controllers/movie.controller')

router.route('/review')
    .get(movieCT.getAllMovies)
    
router.route('/movie/:id')
    .get(movieCT.getMovieById)

module.exports = router;