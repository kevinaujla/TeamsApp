// /*

// app.js
// module dependency injections and route configurations

// */

angular.module('App', [
	'ui.router',
  'ui.bootstrap',
	'App.addTeamController'
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


}]);