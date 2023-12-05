const ticket = require('../models/ticket.model')

const ticketPriceByAge = function(req, res, next) {
    if(req.query.cid) {
        ticket.ticketPrice(req.query.cid, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const updatePriceTicket = function(req, res, next) {
    
}

const ticketGeneration = function(req, res, next) {
    if(req.query.id && req.query.rnumber && req.query.movietime) {

        const stringWithHyphens = req.query.movietime.replace(/\//g, '-');
        const date = new Date(stringWithHyphens);
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        ticket.ticketGen(req.query.id, req.query.rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const getAllTicketofMovies = function (req, res, next) {
    if(req.query.id && req.query.rnumber && req.query.movietime) {

        const stringWithHyphens = req.query.movietime.replace(/\//g, '-');
        const date = new Date(stringWithHyphens);
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        ticket.ticketGen(req.query.id, req.query.rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

module.exports = {
    ticketPriceByAge,
    ticketGeneration,
    getAllTicketofMovies,
}