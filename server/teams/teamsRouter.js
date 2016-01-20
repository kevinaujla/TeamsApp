// User Routes

// External Resources
var teamsController = require('./teamsController.js');

/***
 Export Routes
 app is equal to userRouter from the middleware.js
***/
module.exports = function(app){

	console.log('TEAMS ROUTER');

 app.get('/', teamsController.getTeamInfo);

 app.post('/create', teamsController.createTeams);

 app.post('/addUser', teamsController.addUser);

 app.post('/removeUser', teamsController.removeUser);

 app.post('/createTask', teamsController.createTask);

};