/*

teamFactory.js
handles http request for team controller

*/

angular.module('App.teamFactory', [])

.factory('teamFactory', ['$http', '$state', '$window', function ($http, $state, $window) {

var createTeam = function (team) {
    var obj = {team : team};
    console.log('sending team : ', obj);
    return $http({
        method: 'POST',
        url: '/api/teams/create',
        data: obj
      })
      .then(function (resp) {
        return resp.data;
      });
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
    getTeamInfo: getTeamInfo,
  };

}]);