require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');
const Performer = require('./models/performer');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

const p1 = Flight.deleteMany({});
const p2 = Ticket.deleteMany({});

Promise.all([p1, p2])
  .then(function(results) {
    // results will be an array
    // of two result objects
    console.log(results);
    return Ticket.create(data.tickets);
  })
  .then(function(tickets) {
    console.log(tickets);
    return Flight.create(data.flights);
  })
  .then(function(flights) {
    console.log(flights);
    return Promise.all([
      Ticket.findOne({name: 'Mark Hamill'}),
      Flight.findOne({title: /Star Wars/})
    ]);
  })
  .then(function(results) {
    const mark = results[0];
    const starWars = results[1];
    starWars.cast.push(mark._id);
    return starWars.save();
  })
  .then(function(starWars) {
    console.log(starWars);
  })
  .then(process.exit);