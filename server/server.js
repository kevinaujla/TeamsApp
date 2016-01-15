/***

  Server Configuration File

***/

// External Resources
var express = require('express');
var mongoose = require('mongoose');

// Define Express
var app = express();

// Mongoose DB Connection
mongoose.connect('mongodb://mrkevinaujla:goalsforever1@ds045785.mongolab.com:45785/teams');

// Call the middleware function and pass the app and express as parameters
require('./middleware.js')(app, express);

// Define Server Port
var port = process.env.PORT || 3000;

// Console Log
console.log('listening on port:', port);

// Define Express Listening Port
app.listen(port);

// Export Express
module.exports = app;
