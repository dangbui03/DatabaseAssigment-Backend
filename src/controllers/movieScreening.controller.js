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

const createMovieScreening = function(req, res, next) {
    const {id, rnumber, movietime} = req.body;
    if (!(id && rnumber && movietime)) return res.status(500).json("INTERNAL SERVER ERROR");
    else {
        
    }
}

module.exports = {
    getAllMovieScreenings,

}