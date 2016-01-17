/*

usersController.js
add/remove users

*/

angular.module('App.usersController', [])

.controller('usersController', function ($scope, $uibModal) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/users/users.html',
	      controller: 'ModalInstanceCtrl',
	      size: size
	    });
	  };
})

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});