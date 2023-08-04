const Flights = require('../models/flightsModel');
const dotenv = require('dotenv');
const connectDataBase = require('../config/database')
const data = require('../data.json')

dotenv.config({path:'config/config'});

connectDataBase()

const seedFlights=async ()=>{
    try {
        await Flights.deleteMany();
        console.log("Deleting all flights");

        await Flights.insertMany(data)
        console.log("adding all flights from file");
        
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

seedFlights()