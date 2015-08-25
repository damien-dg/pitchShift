/**
 * Created by damien on 8/24/15.
 */

var d = document.domain;
chrome.extension.sendMessage({
    dom: d
});