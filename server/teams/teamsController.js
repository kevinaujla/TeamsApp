// Teams Controller
//Save or retreive the existing team to/from the database
// External Resources
var User = require('./teamModel.js'),
    Q = require('q');

module.exports = {
/***
  GET
***/
  /***
    Retrieve Team Info
  ***/
  getTeamInfo : function(req, res, next){
    // Console Log
    console.log('Get Team Info : ', req.query.teamName);
    // Create Promise
    // var findUser = Q.nbind(User.findOne, Team);
    // // Mongoose Query
    // findUser({ 'Team' : req.query.teamName })
    //   .then(function(Team){
    //     if(!Team) {
    //       // Propogate Error to Client
    //       throw(new Error('Team could not be found'));
    //     } else {
    //       // Console Log
    //       console.log('Team retreived from DB : ', Team);
    //       // Propogate Data to Client
    //       res.send(Team);
    //     }
    //   })
    //   .catch(function(err){
    //     // Propogate Error to Client
    //     res.status(404).send({error : err.message});
    //   });
  },
  /***
    Create New Team
  ***/
  createTeams : function(req, res, next) {
    // Console Log
    console.log('CREATE NEW TEAM');

    console.log('req : ', req.body);

    // Create Promise
    var findOne = Q.nbind(Team.findOne, Team); // find team in DB
    var create = Q.nbind(User.create, Team); // create new team in DB
    // Mongoose Query
    User.findOne({ 'Team' : req.body.teamName })
      .then(function (team) {
        if(team) {
          // Propogate Error to Client
          throw new Error('Team already exists');
        } else {
          // Create Object
          var newTeam = {
            teamName : req.body.teamName,
          };
          return create(newTeam);
        }
      })
      .then(function(newTeamCreated){
        // Console Log
        console.log('New Team Stored in DB : ', newTeamCreated);
      })
      .catch(function(err){
        // Propogate Error to Client
        res.status(404).send({error : err.message});
      });
  }

};
