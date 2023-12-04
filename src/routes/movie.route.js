const express = require('express');
const router = express.Router();
const movieCT = require('../controllers/movie.controller')

router.route('/movies')
    .get(movieCT.getAllMovies)
    
router.route('/movie')
    .get(movieCT.getMovieById)

// router.route('/movie/sort/withreview')
// router.route('/movie/sort/withquantity')
module.exports = router;