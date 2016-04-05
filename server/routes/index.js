var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

/* GET home page. */
router.get('/', function(req, res, next) {

  var result;

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    result = rows[0].solution;

    res.render('index', { title: 'Express', dbresult: result });
  });

  connection.end();
});


module.exports = router;
