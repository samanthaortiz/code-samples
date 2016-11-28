var router = require("express").Router();
var dbRoutes = require('./dbRoutes');

router.post('/hotelItin', dbRoutes.hotelItin, function(req, res, next) {
  res.send(res.data);
});

router.post('/changeStatus', dbRoutes.changeStatus, function(req, res, next){
  res.sendStatus(200);
})

module.exports = router;