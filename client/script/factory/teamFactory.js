/*

teamFactory.js
handles http request for team controller

*/

angular.module('App.teamFactory', [])

.factory('teamFactory', ['$http', '$state', '$window', function ($http, $state, $window) {

  var createTeam = function (team, details) {
    var obj = {team : team, details: details};
    return $http({
        method: 'POST',
        url: '/api/teams/create',
        data: obj
      })
      .then(function (resp) {
        return resp.data;
      });
  };

  var createTask = function (task, team) {
    var obj = {task : task, team: team};
    return $http({
        method: 'POST',
        url: '/api/teams/createTask',
        data: obj
      })
      .then(function (resp) {
        return resp.data;
      });
  };  	

  var taskComplete = function(task, team){
    var obj = {task : task, team : team};
    console.log("completed:", obj);
    return $http({
        method: 'POST',
        url: 'api/teams/taskComplete',
        data: obj
    })
    .then(function(resp){
      return resp.data;
    })
  };

  var addUser = function(user, team) {
    var obj = {user : user, team: team};
    return $http({
        method:'POST',
        url : 'api/teams/addUser',
        data: obj
    })
    .then(function(resp){
      return resp.data;
    })
  };

  var removeUser = function(user, team){
    var obj = {user : user, team : team};
    return $http({
        method: 'POST',
        url: 'api/teams/removeUser',
        data: obj
    })
    .then(function(resp){
      return resp.data;
    })
  };

  var getTeamInfo = function () {
    return $http({
        method: 'GET',
        url: '/api/teams',
      })
      .then(function (resp) {
        return resp.data;
      });
  };

  return {
    createTeam: createTeam,
    createTask: createTask,
    taskComplete: taskComplete,
    addUser: addUser,
    getTeamInfo: getTeamInfo,
    removeUser: removeUser
  };

}]);