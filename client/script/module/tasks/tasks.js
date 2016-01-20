/*

tasksController.js
create a task

*/

angular.module('App.tasksController', [])

.controller('tasksController', function ($scope, $uibModal) {

  	$scope.animationsEnabled = true;

	  $scope.open = function (size, name) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/tasks/tasks.html',
	      controller: 'tasksModalCtrl',
	      size: size,
        resolve: {
          name: function() {
            return name;
          }
        }
	    });
	  };
})

.controller('tasksModalCtrl', function ($scope, $uibModalInstance, teamFactory, name, loadingService) {

  $scope.task=null;

  $scope.createTask=function(){
  	console.log("hi");
  	teamFactory.createTask($scope.task, name)
    .then(function(){
      console.log("task created:", $scope.task);
    });
  	$uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});