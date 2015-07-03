var http = require('http'),
    bl   = require('bl');

http.get(process.argv[2], function(res) {
  var allData = new bl();
  res.on('data', function(data) {
    allData.append(data);
  });
  res.on('end', function() {
    console.log(allData.length);
    console.log(allData.toString('utf8'));
  });
});
