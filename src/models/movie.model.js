const {connection} = require('../configs/db')

const film = {
    getAllFilm:function(callback) {
        return connection.query("CALL GetAllMovies()", callback);
    },
    getMovieByIds:function(movieId, callback) {
        return connection.query("CALL GetMovieById(?)", [movieId], callback);
    }
}

module.exports = film;