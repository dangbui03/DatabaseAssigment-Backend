const {connection} = require('../configs/db')

const Room = {
    getAllRooms:function(callback) {
        return connection.query("CALL GetAllRooms()", callback);
    },
    getRoomById:function(id, callback) {
        return connection.query(`CALL GetMovieById(${id})`, callback);
    }
}

module.exports = Room;