const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const Flights  = require('./models/flightsModel')


dotenv.config({ path: "config/config.env" });

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express(); 

app.use(cors("origin", "*"));  

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// Assuming you have your Mongoose model defined as 'Flights' with the flightSchema

app.post("/api/flights", async (req, res) => {
  try {
    const { source, destination } = req.body;
    const flights = await Flights.find({ source: source, destination: destination });

    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found with the given source and destination." });
    }
    const airlinesData = flights.map((flight) => flight.airlines);
    res.status(200).json(airlinesData);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error.",
    });
  }
});
app.post("/api/flights/new", async (req, res) => {
  try {
    const { source, destination, airlines } = req.body;

    const newFlight = new Flights({
      source: source,
      destination: destination,
      airlines: airlines
    });

    const savedFlight = await newFlight.save();

    res.status(201).json(savedFlight);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Middle wares
app.use(errorMiddleware);

module.exports = app;
