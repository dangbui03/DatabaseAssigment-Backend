const movieScreening = require('../models/movieScreening.model');

const getAllMovieScreenings = function(req, res, next) {
    {
        movieScreening.getAllMovieScreening(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows);
            }
        });
    }
}

module.exports = {
    getAllMovieScreenings
}