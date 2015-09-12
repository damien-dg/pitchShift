/**
 * Created by damien on 8/24/15.
 */

/* Listen for messages */

var counter = 0;
function test(){
    counter++;
    if( source == null && audioCtx == null){
        initAudio();
    }else{
        //console.log('audio already initialized');
    }

}
window.setInterval(test, 5000);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request, sender);
        sendResponse({confirm: "success!"});
    }
);

var audioCtx;
var myAudio;
var source;
var analyser;

function initAudio(){
    if(document.querySelector('video')) {
        console.log('page has audio/video');
        audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
        // Webkit/blink browsers need prefix, Safari won't work without window.
        analyser = audioCtx.createAnalyser();
        myAudio = document.querySelector('video');
        console.log(myAudio);
        source = audioCtx.createMediaElementSource(myAudio);
        console.log("context : ", audioCtx);
        console.log(source, "success");
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
    }else{
        console.log('page has no audio/video');
    }
}