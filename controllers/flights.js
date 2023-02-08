const Flight = require('../models/flight');
const Ticket = require('.../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create,
  addToDetails
}

function index(req, res) {
  Flight.find({}, function(err, flights){
    flights.sort((first, second) => first.departs - second.departs);
    res.render('flights/index', {flights})
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate('flight')
    .exec(function(err, flight) {
      res.render('flights/show', {
        title: 'Flight Detail',
        flight
      });
    });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { departsDate, title: "Add New Flight" });
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  };
  Flight.create(req.body, (err) => {
    if(err) return res.render('flights/new')
    res.redirect('/flights')
  })
}

function addToDetails(req,res) {
  Flight.findById(req.params.id,function(err,flight) {
    flight.ticket.push(req.body.ticketId)
    flight.save(function(err) {
    res.redirect(`/flights/${flight._id}`)
  })
})
}






