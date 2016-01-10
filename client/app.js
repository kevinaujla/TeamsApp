/*

app.js
module dependency injections and route configurations

*/

angular.module('App', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider
    	.otherwise('/');
}]);