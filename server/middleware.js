/***

  Node Middleware

***/


var bodyParser = require('body-parser');

module.exports = function(app, express){

	app.use(express.static(__dirname + './../client'));

  // Define Routers
  var teamsRouter = express.Router();

  // Define Middleware
  app.use(bodyParser.raw());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true , limit : '50mb' }));

  // Define URL's
  app.use('/api/teams', teamsRouter);

  // Map Routers
  require('./teams/teamsRouter.js')(teamsRouter);

};
