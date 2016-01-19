// Teams Controller
//Save or retreive the existing team to/from the database
// External Resources
var Team = require('./teamModel.js'),
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
    // console.log('Get Team Info : ', req.query);
    // Create Promise
    var findTeam = Q.nbind(Team.find, Team);
    // Mongoose Query
    findTeam({ 'Team' : req.query.teamName })
      .then(function(Team){
        if(!Team) {
          // Propogate Error to Client
          throw(new Error('Team could not be found'));
        } else {
          // Console Log
          // console.log('Teams retreived from DB : ', Team);
          // Propogate Data to Client
          res.send(Team);
        }
      })
      .catch(function(err){
        // Propogate Error to Client
        res.status(404).send({error : err.message});
      });
  },
  /***
    Create New Team
  ***/
  createTeams : function(req, res, next) {
    // Console Log
    // console.log('CREATE NEW TEAM');

    // console.log('req : ', req.body);

    // Create Promise
    var findOne = Q.nbind(Team.findOne, Team); // find team in DB
    var create = Q.nbind(Team.create, Team); // create new team in DB
    // Mongoose Query
    Team.findOne({ 'teamName' : req.body.team })
      .then(function (team) {
        if(team) {
          // Propogate Error to Client
          throw new Error('Team already exists');
        } else {
          // Create Object
          var newTeam = {
            teamName : req.body.team,
            teamDetails: req.body.details
          };
          return create(newTeam);
        }
      })
      .then(function(newTeamCreated){
        // Console Log
        res.status(200).send();
        // console.log('New Team Stored in DB : ', newTeamCreated);
      })
  },

  addUser : function(req, res, next) {

    // console.log('add new user');

    // console.log('req :', req.body);

    // Create Promise
    var findTeam = Q.nbind(Team.findOne, Team);
    // Mongoose Query
    findTeam({'teamName' : req.body.team })
      .then(function(team) {

        // Create New Object
        var userUpdate = {
          userName : req.body.user,
        };

        var update = Q.nbind(Team.findByIdAndUpdate, Team);

        return update(team._id, {
          userName : team.userName.concat([req.body.user])
        });

        console.log('Update....');

      })
      .then(function(data){
        console.log('DATA AFTER : ', data);
        res.json(data);
      })
      .catch(function(err){
        // Propogate Error to Client
        res.status(404).send({error : err.message});
      });
  },

  removeUser : function(req, res, next) {

    var findTeam = Q.nbind(Team.findOne, Team);

    findTeam({'teamName' : req.body.team })
      .then(function(team){

        var indexToRemove = team.userName.indexOf(req.body.user);
        if (indexToRemove > -1) {
          team.userName.splice(indexToRemove, 1);
        }

        console.log('replace with : ', team.userName);

        var update = Q.nbind(Team.findByIdAndUpdate, Team);

        return update(team._id, {
          userName : team.userName
        });

      })
      .then(function(data){
        console.log('DATA AFTER : ', data);
        res.json(data);
      })
      .catch(function(err){
        // Propogate Error to Client
          res.status(404).send({error : err.message});
      });
  }

};
