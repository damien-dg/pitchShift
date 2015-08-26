/**
 * Created by damien on 8/24/15.
 */
/* When the browser-action button is clicked... */


chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('running in background');
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
            doStuffWithDOM);
});

function doStuffWithDOM(element) {
    alert("I received the following DOM content:\n" + element);
}
