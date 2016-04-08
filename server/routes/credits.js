var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Update a credit's business/offer
router.put('/:creditId/business/:businessId/offer/:offerId', function(req, res, next) {
  var creditId = req.params.creditId;
  var businessId = req.params.businessId;
  var offerId = req.params.offerId;
  
  connection.query('USE sccf_involvemint');
  connection.query('UPDATE credits SET businessId = ?,   offerId = ? WHERE id = ?', [businessId, offerId, creditId], function(err, rows, fields) {
    if (err) res.json(err);
    else {
      res.json(rows);
    }
  });

});

//Update a credit's userId 
router.put('/:creditId/user/:userId', function(req, res, next) {
  var creditId = req.params.creditId;
  var userId = req.params.userId;
  
  connection.query('USE sccf_involvemint');
  connection.query('UPDATE credits SET userId = ? WHERE id = ?', [userId, creditId], function(err, rows, fields) {
    if (err) res.json(err);
    else {
      res.json(rows);
    }
  });

});

//Get all of an event's unassigned credits
router.get('/event/:eventId', function(req, res, next) {
  var eventId = req.paramseventId;

  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM credits WHERE businessId is null and userId is null and eventId' + mysql.escape(eventId), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

//Get all of a user's credits
router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;

  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM credits WHERE businessId is null and userId=' + mysql.escape(userId), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

//Create a new credit
router.post('/', function(req, res, next) {
  var credit = {
    eventId: req.body.eventId
  };

  connection.query('USE sccf_involvemint');
	connection.query('INSERT INTO credits SET ?', credit, function(err, rows, fields) {
	    if (err) res.json(err);
	    else res.json(rows);
		}
	);

});

module.exports = router;
