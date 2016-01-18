/*

teamDetailsController.js
display team details

*/

angular.module('App.teamDetailsController', [])

.controller('teamDetailsController', function ($scope, $uibModal, teamFactory) {

	var self=this;

  	$scope.animationsEnabled = true;

	  $scope.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'script/module/teamDetails/teamDetails.html',
	      controller: 'ModalCtrl',
	      size: size
	    });
	  };

	   $scope.loadTeams = function () {
    	teamFactory.getTeamInfo()
      	.then(function (teams) {
  		self.teamDetails=teams;
  		console.log(self.teamDetails);
      	})
     	 .catch(function (err) {
        console.log('error loading teams!', err);
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