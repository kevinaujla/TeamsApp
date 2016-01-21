/*

tasksController.js
create a task

*/

angular.module('App.tasksController', [])

.controller('tasksController', function ($scope, $uibModal) {

	  $scope.open = function (size, name) {
	    var modalInstance = $uibModal.open({
	      templateUrl: 'script/module/tasks/tasks.html',
	      controller: 'tasksModalCtrl',
	      size: size,
        resolve: {
          //resolve used to pass data from controller to modal
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
      //iterate through array for object with same team to push task into scope for digest cycle to update view
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