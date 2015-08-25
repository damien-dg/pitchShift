/**
 * Created by damien on 8/24/15.
 */
var modifiedDom;
chrome.extension.onMessage.addListener(function (request) {
    console.log(request);
    modifiedDom = request.dom + "Trivial Info Appending";
});
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        if (message == "Request Modified Value") {
            port.postMessage(modifiedDom);
        }
    });
});