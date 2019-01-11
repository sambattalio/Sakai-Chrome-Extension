function click() {
  console.log("test please work");
  chrome.tabs.executeScript(null, {file:"download.js"});
}
/*
console.log("test");

document.getElementById('saveGrades').addEventListener('click',click);
*/

console.log("test");

document.getElementById('saveGrades').addEventListener('click',click);
