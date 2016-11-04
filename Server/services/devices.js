var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Device = require('../members/Device.js');

/* GET /devices listing. */
router.get('/', function(req, res, next) {
  Device.find(function (err, devices) {
    if (err) return next(err);
    res.json(devices);
  });
});
module.exports = router;

/* MongoDB utility */

// // Load mongoose package and connect to mongoDB
// var mongoose = require('mongoose');
// var mongoURL = '127.0.0.1:27017';
// mongoose.connect('mongodb://' + mongoURL + '/CleanIT');

// /* Available service exports */

// module.exports = {
// 	getDevices: function() { return getDevices(); },
// 	getDevice:	function(id) { return getDevice(id); }
// };

// /* Service work */

// function getDevices() {
// 	return Device.find(function (err, todos) {
//   if (err) return console.error(err);
//   console.log(todos);});
// }

// function getDevice(id) {
// 	return {"Device": "Sens'it - " + id};
// }