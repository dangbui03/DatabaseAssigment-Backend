const {connection} = require('./db')

const film = {
    getAllFilm:function(callback) {
        return connection.query("Select * from movie", callback);
    }
}

module.exports = film;