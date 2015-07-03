var http = require('http');
var input = process.argv;

http.get(input[2], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(data) {
    console.log(data);
  });
}).on('error', function(e) {
  console.log('Got Error: ' + e.message);
});;
