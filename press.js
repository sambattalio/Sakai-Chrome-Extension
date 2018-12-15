let btn = document.getElementById('saveGrades');
console.log("test");
btn.onclick = function(element) {
  function takeBody() {
    return document.getElementById('gradeSummaryTable').value;
  }
  chrome.tabs.executeScript({
    code: '(' + takeBody + ')();'
  }, (results) => {
    console.log(results[0]);
  });
}
