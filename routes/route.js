const express = require('express');
const router = express.Router();
const film = require('../models/model');

router.get('/film', function(req, res, next) {
    film.getAllFilm(function(err, rows) {
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

module.exports = router;