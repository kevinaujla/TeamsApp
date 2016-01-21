/*

addTeamController.js
create a team

*/

angular.module('App.addTeamController', [])

.controller('addTeamController', function ($scope, $uibModal) {

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      templateUrl: 'script/module/addTeam/addTeamController.html',
	      controller: 'ModalInstanceCtrl',
	      size: size
	    });
	  };
})

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, teamFactory, $window, loadingService) {

  $scope.teamName=null;
  $scope.teamDetails=null;

  $scope.createTeam=function(){
  	teamFactory.createTeam($scope.teamName, $scope.teamDetails)
    .then(function(data){
      //push new team into scope so the digest cycle can update this change onto the view
      loadingService.teamDetails.push(data);
    });
  	$uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});