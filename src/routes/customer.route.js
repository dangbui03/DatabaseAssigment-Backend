const express = require('express');
const router = express.Router();
const movieCT = require('../controllers/movie.controller')

router.route('/customer')
router.route('/customer/:id')

module.exports = router;