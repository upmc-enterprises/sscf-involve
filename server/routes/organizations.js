var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get all organizations
router.get('/', function(req, res, next) {

	connection.query('USE sccf_involvemint');
  	connection.query("SELECT * FROM users WHERE type='organization'", function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

module.exports = router;
