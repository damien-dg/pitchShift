/**
 * Created by damien doucet-girard on 8/22/15.
 */

var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", function($scope) {
    $scope.name = "World";
    $scope.pitchChangeValue = 0;
    $scope.shiftPitch = function(){
        console.log('test');
        window.alert('it works!');
    };
}]);