var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get all of a user's credits
router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;

  // connection.connect();
  // connection.query('SELECT * FROM Credits WHERE userId=' + userId, function(err, rows, fields) {
  //   if (err) throw err;
  //   res.json(rows);
  // });
  // connection.end();

  // res.send('respond with a user. userId: ' + userId);
  res.json([
    {
      id: '1',
      userId: userId,
      eventId: '1',
      businessId: '1'
    },
    {
      id: '2',
      userId: userId,
      eventId: '1',
      businessId: '1'
    }
  ]);  
});

//Create a new credit
router.post('/', function(req, res, next) {
  var eventId = req.body.eventId;

	// connection.connect();
	// connection.query('INSERT INTO Credits (eventId) VALUES (' + eventId + ')', 
	// 	function(err, rows, fields) {
	//     if (err) throw err;
	//     res.json(rows);
	// 	}
	// );
	// connection.end();

  res.json({
  	message: 'respond with newly created credit', 
  	eventId: eventId
	});
});

module.exports = router;
