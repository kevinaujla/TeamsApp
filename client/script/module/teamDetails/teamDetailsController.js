/*

teamDetailsController.js
display team details

*/

angular.module('App.teamDetailsController', [])

.controller('teamDetailsController', function ($scope, $uibModal, teamFactory) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size, name) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/teamDetails/teamDetails.html',
	      controller: 'ModalCtrl',
	      size: size,
        resolve: {
          name: function() {
            return name;
          }
        }
	    });
	  };

})

.controller('ModalCtrl', function ($scope, $uibModalInstance, teamFactory, name, loadingService) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

   $scope.remove=function(user, team){
    teamFactory.removeUser(user, team)
    .then(function(){

      var obj=loadingService.teamDetails;
      for(var i=0; i<obj.length; i++){
        for(var key in obj[i]){
          if(obj[i][key] === team){
            var indexToRemove = obj[i]["userName"].indexOf(user);
            if (indexToRemove > -1) {
            obj[i]["userName"].splice(indexToRemove, 1);
            }
          }
        }
      }

    });
  };

  $scope.taskComplete=function(task, team){
    teamFactory.taskComplete(task, team)
    .then(function(){

      var obj=loadingService.teamDetails;
      for(var i=0; i<obj.length; i++){
        for(var key in obj[i]){
          if(obj[i][key] === team){
            var indexToRemove = obj[i]["tasks"].indexOf(task);
            if (indexToRemove > -1) {
            obj[i]["tasks"].splice(indexToRemove, 1);
            }
          }
        }
      }

    });
  };

  $scope.teamDetails=name;
 
});