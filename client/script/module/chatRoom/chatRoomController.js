/*

chatRoomController.js
chat room

*/

angular.module('App.chatRoomController', [])

.controller('chatRoomController', function ($scope, teamFactory, Upload, $timeout) {

    $scope.message=function(){

        var time = Date.now();

        teamFactory.chatMessage($scope.chatMessage, time)
            .then(function(data){
                $scope.chatMessages.push($scope.chatMessage);
                $scope.chatDates.push(time);
                $scope.chatMessage= "";
            });
    };

    $scope.loadChat = function () {

        $scope.chatMessages = [];

        $scope.chatDates = [];

      // load chat data to store into scope
        teamFactory.getChatData()
        .then(function (chat) {
          if (chat.length !== 0) {
            $scope.chatDates=chat[0].times;
            $scope.chatMessages=chat[0].messages;
          }
        })
        .catch(function (err) {
        console.log('error loading messages!', err);
        });
    };
    
	// $scope.fileUpload=function(files){
	//   $scope.files = files[0];
	//   console.log("files:", files);



 //       angular.forEach(files, function(file) {
 //            file.upload = Upload.upload({
 //                url: '/api/teams/doc',
 //                data: {file: file},
 //                method: 'POST'
 //            });

 //            file.upload.then(function (response) {
 //                console.log("resp:", response);
 //                $timeout(function () {
 //                    file.result = response.data;
 //                });
    
 //            // } , function (response) {
 //            //     if (response.status > 0)
 //            //         $scope.errorMsg = response.status + ': ' + response.data;
 //            // }, function (evt) {
 //            //     file.progress = Math.min(100, parseInt(100.0 * 
 //            //                              evt.loaded / evt.total));

 //            });

 //        });



	// }

});


