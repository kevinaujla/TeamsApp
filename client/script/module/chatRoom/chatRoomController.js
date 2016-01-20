/*

chatRoomController.js
chat room

*/

angular.module('App.chatRoomController', [])

.controller('chatRoomController', function ($scope, teamFactory, Upload, $timeout) {

	$scope.fileUpload=function(files){
	  $scope.files = files[0].name;
	  console.log("files:", files);
       angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        });
	}
});


