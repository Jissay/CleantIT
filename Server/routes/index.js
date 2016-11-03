var express = require('express');
var router = express.Router();
var devicesService = require('./../services/devices');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* DEVICES Service settings */
router.get('/devices', function(req, res, next) {
   res.send(devicesService.getDevices());
});

module.exports = router;
