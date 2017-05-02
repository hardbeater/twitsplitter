angular.module("twtsplitter",[])
.controller("splitter",function($scope){
  $scope.twittext=[];
  
  $scope.$watch("twitval",function(newValue,oldValue){

    $scope.twittext=newValue.match(/.{1,140}/g);
     $scope.size=$scope.twittext.size();

});
});
