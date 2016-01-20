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
    // Create Promise
    var findTeam = Q.nbind(Team.find, Team);
    // Mongoose Query
    findTeam({ 'Team' : req.query.teamName })
      .then(function(Team){
        if(!Team) {
          // Propogate Error to Client
          throw(new Error('Team could not be found'));
        } else {
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
        res.json(newTeamCreated);
      })
  },

  createTask : function(req, res, next){
    // Create Promise
    var findTeam = Q.nbind(Team.findOne, Team);
    // Mongoose Query
    console.log("TASKKK");
    findTeam({'teamName' : req.body.team })
      .then(function(team) {
        
        var update = Q.nbind(Team.findByIdAndUpdate, Team);

        return update(team._id, {
          tasks : team.tasks.concat([req.body.task])
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

  taskComplete : function(req, res, next) {

    var findTeam = Q.nbind(Team.findOne, Team);

    findTeam({'teamName' : req.body.team })
      .then(function(team){

        var indexToRemove = team.tasks.indexOf(req.body.task);
        if (indexToRemove > -1) {
          team.tasks.splice(indexToRemove, 1);
        }

        console.log('replace with : ', team.tasks);

        var update = Q.nbind(Team.findByIdAndUpdate, Team);

        return update(team._id, {
          tasks : team.tasks
        });

      })
      .then(function(data){
        res.json(data);
      })
      .catch(function(err){
        // Propogate Error to Client
          res.status(404).send({error : err.message});
      });
  },

  addUser : function(req, res, next) {
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
        res.json(data);
      })
      .catch(function(err){
        // Propogate Error to Client
          res.status(404).send({error : err.message});
      });
  }

};
