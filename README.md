# Interest

<p align="center"><img src="https://user-images.githubusercontent.com/5164000/117143326-ac9fb680-adeb-11eb-8bb2-2ed77a24a1d9.jpg" width="70%"/></p>

Paper management system built on GitHub Pages and Google {Form/Spreadsheet/Apps Script}.

## Adding items

### Form

<p align="center"><img src="https://user-images.githubusercontent.com/5164000/117144180-99d9b180-adec-11eb-829b-8c6948465fa8.jpg" width="70%"/></p>

You can add a paper with Google Form.

### Spreadsheet

<p align="center"><img src="https://user-images.githubusercontent.com/5164000/117143347-b0cbd400-adeb-11eb-8521-87e813ae7236.jpg" width="70%"/></p>

You can view added papers on Google Spreadsheet.

## API to get papers

Interest uses Google Apps Script to build API to get papers from a spreadsheet.

```javascript
var schema = {
  timeStamp: 0,
  title: 3,
  authors: 2,
  isRead: 1,
  sourceShort: 4,
  year: 5,
  paperLink: 6,
  keywords: 8,
  note: 7,
  paperType: 10,
  issueLink: 11,
  source: 12,
};


function toDict (row) {
  var item = {}
  for (var key in schema) item[key] = row[schema[key]];
  return item;
};


function fetchPapers() {
  var paperListSpreadSheet = SpreadsheetApp.
  openById("your_spreadsheet_id").
  getSheetByName("Form Responses 1");
  
  var paperList = paperListSpreadSheet.getDataRange().getValues().map(function(row, index) {
    if (index == 0) return;  // header
    return toDict(row);
  }).filter(function(ret) { return ret != null} );
  
  Logger.log(paperList);
  return JSON.stringify(paperList);
}


function doGet() {
  const paperListJson = fetchPapers();
  return ContentService.createTextOutput(paperListJson);
}
```

## Blog article

- https://qiita.com/klis/items/05e421593fe4d4aebad0
