const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: [
      "LAX",
      "SFO",
      "DEN",
      "SAN",
      "AUS",
      "TPA",
      "JFK",
      "BWI",
      "ORD",
      "MDW",
      "DAL",
      "ATL",
      "DFW",
      "SEA",
      "LAS",
      "EWR",
      "PHX",
      "IAH",
      "MIA",
      "BOS",
      "DCA",
      "LGA",
      "CMH",
      "LHR",
      "YVR",
      "DUB",
      "BNE",
    ],
    default: "JFK",
  },

  arrival: {
    type: Date,
  },
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: [
      "American",
      "Southwest",
      "United",
      "Delta",
      "JetBLue",
      "British Airways",
      "Air Canada",
      "Aer Lingus",
      "Quantas",
      "Virgin",
    ],
  },

  airport: {
    type: String,
    enum: [
      "LAX",
      "SFO",
      "DEN",
      "SAN",
      "AUS",
      "TPA",
      "JFK",
      "BWI",
      "ORD",
      "MDW",
      "DAL",
      "ATL",
      "DFW",
      "SEA",
      "LAS",
      "EWR",
      "PHX",
      "IAH",
      "MIA",
      "BOS",
      "DCA",
      "LGA",
      "CMH",
      "LHR",
      "YVR",
      "DUB",
      "BNE",
    ],
    default: "JFK",
  },

  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: function () {
      let today = new Date();
      return today.setFullYear(today.getFullYear() + 1);
    },
  },

  destination: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
