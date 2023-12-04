const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreening:function(callback) {
        return connection.query("call GetAllMovieScreening()", callback);
    }
}

module.exports = movieScreening;