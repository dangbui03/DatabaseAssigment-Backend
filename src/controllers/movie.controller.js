const movie = require('../models/movie.model');

const getAllMovies = function(req, res, next) {
    {
        movie.getAllFilm(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
}

const getMovieById = function (req, res, next) {
    if(req.params.id){
        movie.getMovieByIds(req.params.id, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows);
            }
        });
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
    
}

module.exports = {
    getAllMovies,
    getMovieById
}