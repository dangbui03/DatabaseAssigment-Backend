const express = require('express');
const router = express.Router();
const movieCT = require('../controllers/movie.controller')

router.route('/screen')
router.route('/screen/:id')

module.exports = router;