var express=require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/client'));

// choose process port if applicable
var port = process.env.PORT || 3000;

// start server to listen on localhost:port
server.listen(port);
console.log("Server Running on Port 3000");