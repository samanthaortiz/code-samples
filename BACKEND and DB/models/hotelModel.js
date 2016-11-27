var db = require('../db');
var Status = require('./Status');
var Type = require('./Type');

var Hotel = db.Model.extend({
  tableName: 'hotelReservations',
  status_id() {
    return this.belongsTo(Status, 'status_id');
  },
  type_id() {
    return this.belongsTo(Type, 'type_id');
  },
  hasTimestamps: true
})

module.exports = db.model('Hotel', Hotel);