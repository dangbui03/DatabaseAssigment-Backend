const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreening:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    },
    createMovieScreening:function(screen, callback) {
        return connection.query("CALL ")
    }
}

module.exports = movieScreening;