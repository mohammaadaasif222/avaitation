const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  airlines: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      }
    }
  ]
});

const Flights = mongoose.model('Flight', flightSchema);

module.exports = Flights;
