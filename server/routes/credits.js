var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
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


//Get all of a user's credits
router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;

  connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM credits WHERE userId=' + mysql.escape(userId), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

  // res.send('respond with a user. userId: ' + userId);
  // res.json([
  //   {
  //     id: '1',
  //     userId: userId,
  //     eventId: '1',
  //     businessId: '1'
  //   },
  //   {
  //     id: '2',
  //     userId: userId,
  //     eventId: '1',
  //     businessId: '1'
  //   }
  // ]);  
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

 //  res.json({
 //  	message: 'respond with newly created credit', 
 //  	eventId: eventId
	// });
});

module.exports = router;
