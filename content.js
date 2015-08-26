/**
 * Created by damien on 8/24/15.
 */

/* Listen for messages */
function test(){
    console.debug('HELLO');
}
window.setInterval(test, 1000);
//chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//    /* If the received message has the expected format... */
//    console.log('contenting');
//    if (msg.text && (msg.text == "report_back")) {
//        /* Call the specified callback, passing
//         the web-pages DOM content as argument */
//        sendResponse(document.all[0].outerHTML);
//    }
//});