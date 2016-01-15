// /*

// app.js
// module dependency injections and route configurations

// */

angular.module('App', [
	'ui.router',
  'ui.bootstrap',
	'App.addTeamController',
  'App.teamDetailsController',
  'App.teamFactory'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider
    	.otherwise('/');


  $stateProvider
    .state('addTeamController', {
      url: '/addTeamController',
      templateUrl: 'script/module/addTeam/addTeamController.html',
      controller: 'addTeamController',
      controllerAs: 'addTeamController'
    })
    .state('teamDetailsController', {
      url: '/teamDetailsController',
      templateUrl: 'script/module/teamDetails/teamDetails.html',
      controller: 'teamDetailsController',
      controllerAs: 'teamDetailsController'
    })


}]);