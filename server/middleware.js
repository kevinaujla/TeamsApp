/***

  Node Middleware

***/


var bodyParser = require('body-parser');

module.exports = function(app, express){

	app.use(express.static(__dirname + './../client'));

  // Define Routers
  var teamsRouter = express.Router();

  // Define Middleware
  app.use(bodyParser.json());
 
  // Define URL's
  app.use('/api/teams', teamsRouter);

  // Map Routers
  require('./teams/teamsRouter.js')(teamsRouter);

};
