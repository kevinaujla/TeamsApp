describe("Controller: addTeamController", function(){

 beforeEach(module('App.addTeamController'));

 describe('Add Team Controller', function(){

   var $scope, controller, $uibModal;

   beforeEach(inject(function($rootScope, $controller) {
     $scope = $rootScope.$new();
     controller = $controller('addTeamController', { 
       $scope: $scope,
       $uibModal: $uibModal
     });

     spyOn($scope, 'open');

     $scope.open('sm');
   }));

   it('Open Function should be defined', function(){
     expect($scope.open).toBeDefined();
     expect($scope.open).not.toBeNull();
   });

   it('Open Function should be called with size of modal to show', function(){
     expect($scope.open).toHaveBeenCalledWith('sm');
   });

 });

 describe('Modal Instance Controller', function(){

   var $scope, controller, $uibModalInstance, teamFactory, $window, loadingService;

   beforeEach(inject(function($rootScope, $controller) {
     $scope = $rootScope.$new();
     controller = $controller('ModalInstanceCtrl', { 
       $scope: $scope,
       $uibModalInstance: $uibModalInstance,
       teamFactory: teamFactory,
       $window: $window,
       loadingService: loadingService
     });

     spyOn($scope, 'createTeam');
     $scope.createTeam();

     spyOn($scope, 'cancel');
     $scope.cancel();

   }));

   it('Modal Instance properties should be initially set to null', function(){
     expect($scope.teamName).toBeNull();
     expect($scope.teamDetails).toBeNull();
   });

   it('Create Team Function should be defined', function(){
     expect($scope.createTeam).toBeDefined();
     expect($scope.createTeam).not.toBeNull();
   });

   it('Create Team Function should be called', function(){
     expect($scope.createTeam).toHaveBeenCalled();
   });

   it('Cancel Function should be defined', function(){
     expect($scope.cancel).toBeDefined();
     expect($scope.cancel).not.toBeNull();
   });

   it('Cancel Function should be called', function(){
     expect($scope.cancel).toHaveBeenCalled();
   });

 });

});