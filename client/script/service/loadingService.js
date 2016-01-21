/*

loadingService.js
used to share data of teamDetails across controllers

*/

angular.module('App.loadingService', [])

.service('loadingService', function (teamFactory) {

  this.teamDetails=[];

}); 