const {connection} = require('../configs/db')

const ticket = {
    ticketPrice:function(cid, callback) {
        return connection.query("SELECT cal(?) AS result", [cid], callback);
    },
    ticketGen:function(id, rnumber, movietime, callback) {
        return connection.query("CALL gen_ticket(?, ?, ?)", [id, rnumber, movietime], callback)
    },
    getAllTicketofMovie:function(id, rnumber, movietime, callback) {
        return connection.query("CALL getAllTicketofMovie(?, ?, ?)", [id, rnumber, movietime], callback)
    },
    getTicketById:function(tid, callback) {
        return connection.query("CALL getTicketById(?)", [tid], callback)
    }
}

module.exports = ticket;