var db = require('./db');
var Hotel = require('../models/Hotel');

var Hotels = new db.Collection();
Hotels.model = Hotel;

module.exports = Hotels;