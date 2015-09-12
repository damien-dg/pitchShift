/**
 * Created by damien doucet-girard on 8/22/15.
 */



var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", function($scope) {

    $scope.pitchChangeValue = 0;
    $scope.shiftPitch = function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {pitchChangeValue: $scope.pitchChangeValue}, function(response) {
                console.log(response);
            });
        });
    };

    chrome.runtime.onMessage.addListener(function(tab) {
        window.setTimeout(function(){
            chrome.tabs.sendMessage(tab.id, {text: "report_back"},
                console.log);
        }, 100);

    });

    $scope.printDom = function(){
        chrome.extension.sendMessage({text: 'pitchValue', value: $scope.pitchChangeValue },function(response){
            //This is where the stuff you want from the background page will be
            console.log(response);
        });
    };
}]);


