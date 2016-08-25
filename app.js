
function configApp() {
  
  // todo configuration
}

function HeaderController( $scope ) {
  
  $scope.buttons = ['Home', 'About'];
}

function FeedbackFormController( $scope, DbService ) {
  
  $scope.sendFeedback = function( message )
  {
    console.log(message);
    DbService.send( message );
  }
}

function DbService() {
  
  this.send = function( data )
  {
    return data != undefined;
  }
}


// bundle app
  angular
    .module('app', [])
    .config(configApp)
    .service('DbService', DbService)
    .controller('HeaderController', ['$scope', HeaderController])
    .controller('FeedbackFormCtrl', ['$scope','DbService', FeedbackFormController]);
