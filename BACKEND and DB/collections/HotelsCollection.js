var db = require('./db');
var Hotel = require('../models/HotelModel');

var Hotels = new db.Collection();
Hotels.model = Hotel;

module.exports = Hotels;
