const express = require('express');
const router = express.Router();
const ticketCT = require('../controllers/ticket.controller')

router.route('/ticket/price')
    .get(ticketCT.ticketPriceByAge)
    .put()
    
router.route('/ticket/buyticket')
    .post()

router.route('/tickets')
    .get(ticketCT.ticketGeneration)
module.exports = router;