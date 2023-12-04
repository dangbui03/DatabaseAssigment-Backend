const {connection} = require('../configs/db')

const film = {
    getAllFilm:function(callback) {
        return connection.query("CALL GetAllMovies()", callback);
    },
    getMovieByIds:function(id, callback) {
        return connection.query("CALL GetMovieById(?)", [id], callback);
    }
}

module.exports = film;