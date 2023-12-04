const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreening:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    },
    createMovieScreening:function(id, callback) {
        return connection.query("CALL CreateMovieScreening(?, ?, ?)")
    },
    getAMovieScreening:function(id, rnumber, movietime, callback) {
        const formattedMovieTime = movietime.toISOString().slice(0, 19).replace('T', ' ');
        return connection.query("CALL getAMovieScreening(?, ?, ?)", [id, rnumber, formattedMovieTime], callback)
    }
}

module.exports = movieScreening;