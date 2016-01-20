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
  	teamFactory.createTask($scope.task, name)
    .then(function(){
      var obj=loadingService.teamDetails;
      for(var i=0; i<obj.length; i++){
        for(var key in obj[i]){
          if(obj[i][key] === name){
            obj[i]["tasks"].push($scope.task);
          }
        }
      } 
    });
  	$uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});