const express = require('express');
const router = express.Router();

router.route('/room')
    .get(movieCT.getAllMovies)
    .put()
    
router.route('/room/:id')
    .post()
module.exports = router;