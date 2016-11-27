var db = require('./db');
var Itinerary = require('../models/Itinerary');

var Itineraries = new db.Collection();
Itineraries.model = Itinerary;

module.exports = Itineraries;