var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// connect database
mongoose.connect("mongodb://localhost:27017/time-waste");

// need to tell express that we're serving file from folder
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

// routing
app.get('/', function(req, res) {
	res.sendFile('index.html');
});

// start node server
app.listen('3000', function() {
	console.log("Listening http://localhost:3000");
});