function addSheetAndMoveData() {
  // 「シート1」の内容を「[西暦]-[月]」シートに移動する
  // 常に「シート1」にデータを書き込んでいく状況で、
  // 新しい月に入ったとき先月のデータを移動する用
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var objSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  objSpreadsheet.insertSheet(year+"-"+month, 1);
  
  var sheet_copyFrom = objSpreadsheet.getSheetByName('シート1');
  var sheet_copyTo = objSpreadsheet.getSheetByName(year+"-"+month);
 
  // コピーの範囲適当だな
  var copyValue = sheet_copyFrom.getRange('A1:Z500').getValues();
  sheet_copyTo.getRange('A1:Z500').setValues(copyValue);
  sheet_copyFrom.clear();
  
  SpreadsheetApp.setActiveSheet(sheet_copyFrom);
}

function addSheet() {
  // シートを追加する
  // シート名は[西暦]-[月]
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var objSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  objSpreadsheet.insertSheet(year+"-"+month, 0);
}