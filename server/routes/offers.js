var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get all offers from a business
router.get('/business/:businessId', function(req, res, next) {
	var businessId = req.params.businessId;

	connection.query('USE sccf_involvemint');
  connection.query("SELECT * FROM offers WHERE businessId=" + mysql.escape(businessId), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

//Get all offers
router.get('/', function(req, res, next) {
	var businessId = req.params.businessId;

	connection.query('USE sccf_involvemint');
  connection.query("SELECT * FROM offers", function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

module.exports = router;
