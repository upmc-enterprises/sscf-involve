var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});


router.get('/', function(req, res, next) {
  res.json([
  	{
  		id: '1',
  		orgId: '1',
  		name: 'event1'
  	},
  	{
  		id: '2',
  		orgId: '1',
  		name: 'event2'
  	}
  ]);
});

//Create a new event
router.post('/', function(req, res, next) {
	var eventId = req.body.eventId;
  var organization = req.body.organization;
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  var location = req.body.location;

	// connection.connect();
	// connection.query('INSERT INTO Events (eventId,organization,startTime,endTime,location)
	// 									VALUES (' + eventId 
	// 														+ ',' + organization 
	// 														+ ',' + startTime 
	// 														+ ',' + endTime 
	// 														+ ',' + location')', 
	// 	function(err, rows, fields) {
	//     if (err) throw err;
	//     res.json(rows);
	// 	}
	// );
	// connection.end();

  res.json({
  	message: 'respond with posted event', 
  	eventId: eventId,
  	organization: organization,
  	startTime: startTime,
  	endTime: endTime,
  	location: location		
	});
});

module.exports = router;
