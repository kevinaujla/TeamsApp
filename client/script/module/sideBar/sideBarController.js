/*

sideBarController.js
list teams

*/

angular.module('App.sideBarController', [])

.controller('sideBarController', function ($scope, teamFactory) {

	   $scope.loadTeams = function () {
    	teamFactory.getTeamInfo()
      	.then(function (teams) {
  		$scope.teamDetails=teams;
  		console.log($scope.teamDetails);
      	})
     	.catch(function (err) {
        console.log('error loading teams!', err);
      	});
     	};

});
