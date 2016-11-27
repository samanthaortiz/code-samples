var db = require('./database/db.js');

module.exports = {
  hotelItin: function(req, res, next){
    var firstEmail = req.body.email.split("=")[1];
    var email = firstEmail.split("#")[0]
    db.knex('hotelReservations').where('hotelReservations.user_email', email).select("*")
    .then(function(info) {
      res.data = info;
      next();
    })
    .catch(function(error) {
      console.error(error)
    });
  },

  changeStatus: function(req, res, next){
    //check to change FROM saved TO booked
    if(req.body.statusId === 2){
      //check for hotels
      if(req.body.typeId === 2){
        db.knex('hotelReservations').where('hotelReservations.id', req.body.itemId).update("hotelReservations.status_id", 1)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      } 
    } else if (req.body.statusId === 1){
      //check for change FROM BOOKED to SAVED
      if(req.body.typeId === 2){
        //check for hotels
        db.knex('hotelReservations').where('hotelReservations.id', req.body.itemId).update("hotelReservations.status_id", 2)
        .then(function(info){
          res.data = info;
          next();
        })
        .catch(function(error){
          console.error(error)
        });
      }
    }
  }
}