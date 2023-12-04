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

const createMovieScreenings = function(req, res, next) {
    const {id, rnumber, movietime} = req.body;
    if (!(id && rnumber && movietime)) return res.status(500).json("INTERNAL SERVER ERROR");
    else {
        movieScreening.createMovieScreening()
    }
}

const getMovieScreening = function(req, res, next) {
    if(req.query.id && req.query.rnumber && req.query.movietime) {
        movieScreening.getAMovieScreening(req.query.id, req.query.rnumber, req.query.movietime, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows[0]);
            }
        });
    }
}

module.exports = {
    getAllMovieScreenings,
    getMovieScreening,
}