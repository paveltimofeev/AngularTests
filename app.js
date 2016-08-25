
function configApp() {

  console.info('>> app configure');
}

function run() {
  
  console.info('>> app run');
}


function HeaderController( scope ) {
  
  scope.tasks = ['Type a task below', 'Click the New button'];
  scope.itemField = "";
  
  scope.addNew = function(){
    
    var item = scope.itemField;
    
    if(item) 
    {
      scope.tasks.push( item.trim() );
      scope.itemField = "";
    }
    else
      console.log('nothing');
  };

  scope.delete = function(index) {

    if( index >= 0 )
      scope.tasks.splice(index, 1);
  };

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
  .run(run)
  .service('DbService', DbService)
  .controller('HeaderController', ['$scope', HeaderController])
  .controller('FeedbackFormCtrl', ['$scope','DbService', FeedbackFormController]);
