var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get events by eventId
router.get('/organization/:orgId', function(req, res, next) {
  var organizationId = req.params.orgId;

  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM events WHERE organizationId=' + mysql.escape(organizationId), function(err, rows, fields) {    
    if (err) res.json(err);
    else res.json(rows);
  });

});

//Get event by id
router.get('/:eventId', function(req, res, next) {
  var eventId = req.params.eventId;

  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM events WHERE id=' + mysql.escape(eventId), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows[0]);
  });

});

//Get all events
router.get('/', function(req, res, next) {
  
  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM events', function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

});

//Create a new event
router.post('/', function(req, res, next) {
	var newEvent =  {
		//eventId: req.body.eventId,
		name: req.body.name,
		organizationId: req.body.organizationId,
	  starttime: req.body.startTime,
	  endtime: req.body.endTime,
	  location: req.body.location
	};

	connection.query('USE sccf_involvemint');
	connection.query('INSERT INTO events SET ?',	newEvent, function(err, rows, fields) {
	    if (err) res.json(err);
	    else res.json(newEvent);
		}
	);

});

module.exports = router;
