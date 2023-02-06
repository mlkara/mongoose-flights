const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    
    pilots: [String],
    flightAttendants: [String],
    pilotId: [String], 
    faId: [String], 
    noShows: {type: Boolean, default: false},

    paxNum: {
        type: Number,
        required: true,
        min:10,
        max: 9999,
    },

    gate: [String],

    timeGate: {
        type: Number,
        required: true,
        min:10,
        max: 9999,
    },

    departed: {
        type: Number,
        required: true,
        min:10,
        max: 9999,
    },

    onTime: {type: Boolean, default: false},
    Delayed: {type: Boolean, default: false},
    
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
  },

  jumpseat: {type: Boolean, default: false},
  airMarshal: {type: Boolean, default: false},
});

module.exports = mongoose.model("Flight", flightSchema);