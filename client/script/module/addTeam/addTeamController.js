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

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, teamFactory, $window) {

  $scope.teamName=null;
  $scope.teamDetails=null;

  $scope.createTeam=function(){
  	teamFactory.createTeam($scope.teamName, $scope.teamDetails)
    .then(function(){
      console.log("team created");
      $window.location.reload();
    });
  	$uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});