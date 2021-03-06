// Mock data by hicoldcat

var express = require('express')
var apiRoutes = express.Router();

var home = require('./mockdata/home.json');
var daily = require('./mockdata/daily.json');
var hearsensation = require('./mockdata/hearsensation.json');
var meetyourself = require('./mockdata/meetyourself.json');
var skipcharacter = require('./mockdata/skipcharacter.json');


apiRoutes.get('/home', function (req, res) {
	res.json(home);
});


apiRoutes.get('/daily', function (req, res) {
	res.json(daily);
});

apiRoutes.get('/hearsensation', function (req, res) {
	res.json(hearsensation);
});

apiRoutes.get('/meetyourself', function (req, res) {
	res.json(meetyourself);
});


apiRoutes.get('/skipcharacter', function (req, res) {
	res.json(skipcharacter);
});

module.exports = apiRoutes;
