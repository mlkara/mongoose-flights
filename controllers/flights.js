const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function create(req, res) {
    req.body.onTime = !!req.body.onTime;
    req.body.delayed = !!req.body.delayed;
    req.body.noShows = !!req.body.noShows;
    req.body.jumpseat = !!req.body.jumpseat;
    req.body.airMarshal = !!req.body.airMarshal;

  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}