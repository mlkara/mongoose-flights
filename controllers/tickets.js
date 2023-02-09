const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  req.body.flight = req.params.id 
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function newTicket(req, res) {
  let flightId = req.params.id 
  res.render('tickets/new', {flightId, title: 'new ticket'})
}

