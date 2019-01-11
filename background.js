chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'sakailogin.nd.edu', pathContains: 'gradebook'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });


chrome.runtime.onMessage.addListener(
  function(arg, sender, sendResponse) {
    console.log(arg);

    var file = new Blob([arg], {type: 'text/csv'});
    url = window.URL.createObjectURL(file);

    chrome.downloads.download({
     url: url,
    });
});

  function sendResponse(){
  }
