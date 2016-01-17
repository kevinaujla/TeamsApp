// /*

// app.js
// module dependency injections and route configurations

// */

angular.module('App', [
  'ngAnimate',
	'ui.router',
  'ui.bootstrap',
  'App.usersController',
	'App.addTeamController',
  'App.teamDetailsController',
  'App.teamFactory',
  'App.userFactory'
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
    .state('usersController', {
      url: '/usersController',
      templateUrl: 'script/module/users/users.html',
      controller: 'usersController',
      controllerAs: 'usersController'
    })

}]);