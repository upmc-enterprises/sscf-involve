var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get all of an event's unassigned credits
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.json([{userId: 6, name: 'Free Tea and Sweets'}]);

});

//Get all of a user's credits
router.get('/', function(req, res, next) {
  res.json([{userId: 6, name: 'Free Tea and Sweets'}]);
});

module.exports = router;
