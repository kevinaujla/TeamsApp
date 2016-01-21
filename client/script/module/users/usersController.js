/*

usersController.js
add/remove users

*/

angular.module('App.usersController', [])

.controller('usersController', function ($scope, $uibModal) {

	  $scope.open = function (size, name) {
	    var modalInstance = $uibModal.open({
	      templateUrl: 'script/module/users/users.html',
	      controller: 'UserModalCtrl',
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

.controller('UserModalCtrl', function ($scope, $uibModalInstance, teamFactory, name, loadingService) {

  $scope.userName=null;

  $scope.addUser=function(){
    teamFactory.addUser($scope.userName, name)
    .then(function(){
      //iterate through array for object with same team to push new user into scope for digest cycle to update view
      var obj=loadingService.teamDetails;
      for(var i=0; i<obj.length; i++){
        for(var key in obj[i]){
          if(obj[i][key] === name){
            obj[i]["userName"].push($scope.userName);
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