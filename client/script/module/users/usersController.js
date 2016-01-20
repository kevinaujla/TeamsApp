/*

usersController.js
add/remove users

*/

angular.module('App.usersController', [])

.controller('usersController', function ($scope, $uibModal) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size, name) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/users/users.html',
	      controller: 'UserModalCtrl',
	      size: size,
        resolve: {
          name: function() {
            return name;
          }
        }
	    });
	  };
})

.controller('UserModalCtrl', function ($scope, $uibModalInstance, teamFactory, name, loadingService) {

  $scope.userName=null;

  $scope.addUser=function(){
  	teamFactory.addUser($scope.userName, name)
    .then(function(){
      console.log("user created:", $scope.userName);
      console.log(loadingService.teamDetails);
    });
  	$uibModalInstance.close();
  };

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});