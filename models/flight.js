const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Delta"]
  },
  airport: {
    type: String,
    enum: ['LAX', 'SFO', 'DEN', 'SAN', 'AUS', 'TPA', 'JFK', 'LGA', 'DEN', 'SEA' ],
    default: 'LGA'
  },

  flightNo: {
    type: Number,
    required: true,
    min:10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: function(){
      let today = new Date();
    return today.setFullYear(today.getFullYear() + 1)
    }
  }
})

module.exports = mongoose.model("Flight", flightSchema);