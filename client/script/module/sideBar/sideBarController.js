/*

sideBarController.js
list teams

*/

angular.module('App.sideBarController', [])

.controller('sideBarController', function ($scope, teamFactory, loadingService) {

	   $scope.loadTeams = function () {
    	teamFactory.getTeamInfo()
      	.then(function (teams) {
  		$scope.teamDetails=teams;
  		loadingService.teamDetails=teams;
      	})
     	.catch(function (err) {
        console.log('error loading teams!', err);
      	});
     	};

});
