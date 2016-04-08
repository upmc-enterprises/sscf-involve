var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

//Get events by userId
router.get('/user/:userId', function (req, res, next) {
    var userId = req.params.userId;

    connection.query('USE sccf_involvemint');
    connection.query('SELECT * FROM event_log join events ON eventId=events.id WHERE event_log.userId=' + mysql.escape(userId), function (err, rows, fields) {
        if (err) res.json(err);
        else res.json(rows);
    });

});

//Update checkin
router.put('checkin/:logId', function(req, res, next) {
  var logId = req.params.logId;
  var checkin = req.body.checkin;
  
  connection.query('USE sccf_involvemint');
  connection.query('UPDATE event_log SET checkin = ? WHERE id = ?', [checkin, logId], function(err, rows, fields) {
    if (err) res.json(err);
    else {
      res.json(rows);
    }
  });

});

//Update checkout
router.put('checkout/:logId', function(req, res, next) {
  var logId = req.params.logId;
  var checkout = req.body.checkout;
  
  connection.query('USE sccf_involvemint');
  connection.query('UPDATE event_log SET checkout = ? WHERE id = ?', [checkout, logId], function(err, rows, fields) {
    if (err) res.json(err);
    else {
      res.json(rows);
    }
  });

});

//Get all event logs
router.get('/', function (req, res, next) {

    connection.query('USE sccf_involvemint');
    connection.query('SELECT * FROM event_log', function (err, rows, fields) {
        if (err) res.json(err);
        else res.json(rows);
    });

});

//Create a new event log
router.post('/', function (req, res, next) {
    var newEventLog = {
        eventId: req.body.eventId,
        userId: req.body.userId
    };

    connection.query('USE sccf_involvemint');
    connection.query('INSERT INTO event_log SET ?', newEventLog, function (err, rows, fields) {
            if (err) res.json(err);
            else res.json(rows);
        }
    );

});

module.exports = router;
