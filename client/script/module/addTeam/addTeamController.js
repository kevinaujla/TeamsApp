/*

addTeamController.js
create a team

*/

angular.module('App.addTeamController', [])

.controller('addTeamController', function ($scope, $uibModal) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/addTeam/addTeamController.html',
	      controller: 'ModalInstanceCtrl',
	      size: size
	    });
	  };
})

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, teamFactory) {

  $scope.teamName=null;
  $scope.teamDetails=null;

  $scope.createTeam=function(){
  	teamFactory.createTeam($scope.teamName, $scope.teamDetails)
  	$uibModalInstance.close();
  };

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});