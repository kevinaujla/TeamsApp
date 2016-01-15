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

};