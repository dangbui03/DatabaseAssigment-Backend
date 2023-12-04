const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
router.use('/', [movie]);

module.exports = router;