var db = require('../db');
var User = require('./UserModel');

var Itinerary = db.Model.extend({
  tableName: 'itineraries',
  user_email() {
    return this.belongsTo(User, 'email');
  },
  hasTimestamps: true
})

module.exports = db.model('Itinerary', Itinerary);
