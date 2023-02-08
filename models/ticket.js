const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: (/[A-F][1-9]\d?/),
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  flight: ObjectId
});

  module.exports = mongoose.model('Ticket', ticketSchema);