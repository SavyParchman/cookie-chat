angular.module('chatroom').controller('mainCtrl', function($scope, messageService) {

  $scope.getMessages = function() {
  messageService.getMessages().then(function(response) {
    console.log(response);
    $scope.messages = response.data;
  
  })
};
  $scope.postMessage = function(message) {
    console.log(message);
    messageService.postMessage(message).then(function(response) {
  
  })

  };

  setInterval(function(){
    $scope.getMessages();
    }, 1500)

});

