/*

loadingService.js
used to share data across controllers

*/

angular.module('App.loadingService', [])

.service('loadingService', function (teamFactory) {

  this.teamDetails=[];

}); 