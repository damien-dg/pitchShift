/**
 * Created by damien doucet-girard on 8/22/15.
 */



var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", function($scope) {

    var audioCtx, myAudio, source;
    $scope.pitchChangeValue = 0;
    $scope.shiftPitch = function(){
        console.log('test');
        window.alert('it works!');
    };

    chrome.runtime.onMessage.addListener(function(tab) {
        window.setTimeout(function(){
            chrome.tabs.sendMessage(tab.id, {text: "report_back"},
                console.log);
        }, 100);

    });


    $scope.initAudio = function(){
        if(document.querySelector('audio' || 'video')) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
            // Webkit/blink browsers need prefix, Safari won't work without window.
            myAudio = document.querySelector('audio' || 'video');
            source = audioCtx.createMediaElementSource(myAudio);
        }
    };

    $scope.displayStream = function(){
        console.log(source);
    };

    $scope.printDom = function(){

    };
}]);


