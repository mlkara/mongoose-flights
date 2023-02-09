const Flight = require('../models/flight')

module.exports = {
    create,
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.destinations.sort((first, second) => first.arrival - second.arrival);
    flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
    })
  })
}