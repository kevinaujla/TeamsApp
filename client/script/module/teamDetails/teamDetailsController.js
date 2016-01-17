/*

teamDetailsController.js
display team details

*/

angular.module('App.teamDetailsController', [])

.controller('teamDetailsController', function ($scope, $uibModal) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/teamDetails/teamDetails.html',
	      controller: 'ModalCtrl',
	      size: size
	    });
	  };
})

.controller('ModalCtrl', function ($scope, $uibModalInstance, teamFactory) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});