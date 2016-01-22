// Teams Controller
//Save or retreive the existing team to/from the database
// External Resources
var Team = require('./teamModel.js'),
    Chat = require('./chatModel.js'),
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
    findTeam({'teamName' : req.body.team })
      .then(function(team) {
        
        var update = Q.nbind(Team.findByIdAndUpdate, Team);

        return update(team._id, {
          tasks : team.tasks.concat([req.body.task])
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

  taskComplete : function(req, res, next) {

    var findTeam = Q.nbind(Team.findOne, Team);

    findTeam({'teamName' : req.body.team })
      .then(function(team){

        var indexToRemove = team.tasks.indexOf(req.body.task);
        if (indexToRemove > -1) {
          team.tasks.splice(indexToRemove, 1);
        }

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

      })
      .then(function(data){
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
  },

  message : function(req, res, next){
    // Create Promise
    var findChat = Q.nbind(Chat.findOne, Chat);
    var create = Q.nbind(Chat.create, Chat); // create new team in DB
    // Mongoose Query
    findChat({'chatRoom' : "teamsApp" })
      .then(function (teamsApp) {
        if(teamsApp) {
          // Create New Object
          var messageUpdate = {
            messages : req.body.message,
            times : req.body.time
          };
        
        var update = Q.nbind(Chat.findByIdAndUpdate, Chat);

        return update(teamsApp._id, {
          messages : teamsApp.messages.concat([req.body.message]),
          times : teamsApp.times.concat([req.body.time])
        });

        } else {
          // Create Object
          var newChat = {
            chatRoom : "teamsApp",
            messages : req.body.message,
            times : req.body.time
          };
          return create(newChat);
        }
      })
      .then(function(data){
        res.json(data);
        console.log(data);
      })

  },

  getChatData : function(req, res, next){
    // Create Promise
    var findChat = Q.nbind(Chat.find, Chat);
    // Mongoose Query
    findChat({ 'Chat' : req.query.chatRoom})
      .then(function(Chat){
        if(!Chat) {
          // Propogate Error to Client
          throw(new Error('Chat could not be found'));
        } else {
          // Propogate Data to Client
          res.send(Chat);
        }
      })
      .catch(function(err){
        // Propogate Error to Client
        res.status(404).send({error : err.message});
      });

  },

  storeDoc : function(req, res, next){

  }

};
