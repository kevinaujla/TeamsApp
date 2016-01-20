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

.controller('ModalCtrl', function ($scope, $uibModalInstance, teamFactory, name) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

   $scope.remove=function(user, team){
    console.log("remove:", user, team);
    teamFactory.removeUser(user, team)
    .then(function(data){
      console.log("remove sucess:",data);
    });
  };

  $scope.taskComplete=function(task, team){
    console.log("completed:", task, team);
    teamFactory.taskComplete(task, team)
    .then(function(data){
      console.log("complete sucess:",data);
    });
  };

  $scope.teamDetails=name;
 
});