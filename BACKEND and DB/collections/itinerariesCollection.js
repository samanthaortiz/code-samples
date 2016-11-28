var db = require('./db');
var Itinerary = require('../models/ItineraryModel');

var Itineraries = new db.Collection();
Itineraries.model = Itinerary;

module.exports = Itineraries;