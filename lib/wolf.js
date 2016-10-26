/**
 * Created by cancer on 2016-10-24.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.sum=6;
    $scope.wolf=1;
    $scope.startGame = function(){
        $scope.sum=6;
        $scope.wolf=1;
        $scope.prophet=0;
        $scope.witch=0;
        $scope.cupid=0;
        $scope.hunter=0;
        $scope.guard=0;
        $scope.idiot=0;
        $scope.people=$scope.sum-$scope.wolf;
        if(document.getElementById("ch1").checked){
            $scope.prophet=1;
        }else{
            $scope.prophet=0;
        }
        if(document.getElementById("ch2").checked){
            $scope.witch=1;
        }else{
            $scope.witch=0;
        }
        if(document.getElementById("ch4").checked){
            $scope.cupid=1;
        }else{
            $scope.cupid=0;
        }
        if(document.getElementById("ch3").checked){
            $scope.hunter=1;
        }else{
            $scope.hunter=0;
        }
        if(document.getElementById("ch5").checked){
            $scope.guard=1;
        }else{
            $scope.guard=0;
        }
        if(document.getElementById("ch6").checked){
            $scope.idiot=1;
        }else{
            $scope.idiot=0;
        }
        $scope.people=$scope.sum-$scope.wolf-$scope.idiot-$scope.cupid-$scope.hunter-$scope.prophet-$scope.guard-$scope.witch;


    }

});