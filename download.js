console.log('test');

var gradeTable = document.getElementById('gradeSummaryTable');

console.log(gradeTable);
var csv = '';

for (var i = 0, row; row = gradeTable.rows[i]; i++) {
  console.log("new row");
  for (var j = 0, col; col = row.cells[j]; j++) {
    console.log(col.outerText);
    csv += col.outerText + ',';
  }
  csv += '\n';
}

chrome.runtime.sendMessage(csv);
