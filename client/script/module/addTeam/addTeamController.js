/*

addTeamController.js
create a team

*/

angular.module('App.addTeamController', [])

.controller('addTeamController', function ($scope, $uibModal, $log) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/addTeam/addTeamController.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  // $scope.toggleAnimation = function () {
	  //   $scope.animationsEnabled = !$scope.animationsEnabled;
	  // };


})

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, teamFactory) {

  $scope.teamName=null;

  $scope.createTeam=function(){

  	teamFactory.createTeam($scope.teamName);

  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});