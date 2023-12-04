const movieScreening = require('../models/movieScreening.model');

const getAllMovieScreening = function(req, res, next) {
    {
        movieScreening.getAllMovieScreenings(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows);
            }
        })
    }
}

module.exports = {
    getAllMovieScreening
}