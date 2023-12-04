const {connection} = require('../configs/db')

const film = {
    getAllRooms:function(callback) {
        return connection.query("CALL GetAllMovies()", callback);
    },
    getRoomById:function(movieId, callback) {
        return connection.query("CALL GetMovieById(?)", [movieId], callback);
    }
}

module.exports = film;