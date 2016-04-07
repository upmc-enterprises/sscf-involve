var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get a user
router.get('/:username', function(req, res, next) {
  var username = req.params.username;

	connection.query('USE sccf_involvemint');
  connection.query('SELECT * FROM users WHERE username=' + mysql.escape(username), function(err, rows, fields) {
    if (err) res.json(err);
    else res.json(rows);
  });

  // res.json({
  // 	username: username,
  // 	type: 'volunteer'
  // });
});

//Create a new user
router.post('/', function(req, res, next) {
  var user = {
		username: req.body.username,
		password: req.body.password,
		type: req.body.type
  };

	connection.query('USE sccf_involvemint');
	connection.query('INSERT INTO users SET ?', user, function(err, rows, fields) {
	    if (err) res.json(err);
	    else res.json(user);
		}
	);

 //  res.json(user);
});

module.exports = router;
