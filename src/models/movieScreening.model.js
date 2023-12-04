const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreenings:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    }
}

module.exports = movieScreening;