const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreening:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    },
    createMovieScreening:function(id, callback) {
        return connection.query("CALL CreateMovieScreening(?, ?, ?), [")
    },
    getAMovieScreening:function(id, rnumber, movietime, callback) {
        return connection.query("CALL getAMovieScreening(?, ?, ?)", [id, rnumber, movietime], callback)
    },
    getShowTime:function(id, callback) {
        return connection.query("CALL set_showtimes(?)", [id], callback);
    }
}

module.exports = movieScreening;