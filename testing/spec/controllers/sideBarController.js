describe("Controller: sideBarController", function(){

 beforeEach(module('App.sideBarController'));

 describe('Side Bar Controller', function(){

   var $scope, controller, teamFactory, loadingService;

   beforeEach(inject(function($rootScope, $controller) {
     $scope = $rootScope.$new();
     controller = $controller('sideBarController', { 
       $scope: $scope,
       teamFactory: teamFactory,
       loadingService: loadingService
     });

     spyOn($scope, 'loadTeams');

     $scope.loadTeams();

   }));

   it('Load Teams Function should be defined', function(){
     expect($scope.loadTeams).toBeDefined();
     expect($scope.loadTeams).not.toBeNull();
   });

   it('Load Teams Function should be called', function(){
     expect($scope.loadTeams).toHaveBeenCalled();
   });

 });

});