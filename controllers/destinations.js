const Flight = require('.../models/flight')

module.exports = {
    create,
    delete: deleteDestination
    };

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
        flights.destinations.sort((first, second) => first.arrival - second.arrival);
    res.render('flights/index', {flights})
    flight.save(function(arr) {
    res.redirect('/flights/%(flight._id')
        });
    });
})}

function deleteDestination(req,res,next) {
    Flight.findOne({'destinations_.id' : req.params.id})
    .then(function(flight) {
            const destination = flight.destinations.id(req.params.id)
            destination.remove()
            flight.save().then(function(){
                    res.redirect(`/flights/${flight._id}`)
            })
    })}