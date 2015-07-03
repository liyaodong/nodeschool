var http = require('http');

var urls = process.argv.slice(2);

var allData = [];

for (var i = 0; i < urls.length; i++) {
  allData[i] = null;
  // 需要指定排序
  getData(i, urls[i]);
};

function getData (i, url) {
  http.get(url, function(res) {
    var result = '';
    res.setEncoding('utf8');
    res.on('data', function(data) {
      result += data;
    });

    res.on('end', function() {
      var resultCount = 0;
      allData[i] = result;
      for (var j = 0; j < allData.length; j++) {
        if(allData[j] != null) resultCount ++;
      };
      if(resultCount == allData.length) {
        for (var j = 0; j < allData.length; j++) {
          console.log(allData[j]);
        };
      }
    });

  });
}

