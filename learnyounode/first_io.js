var fs = require('fs'),
  file = process.argv[2];

var buf = fs.readFileSync(file);

var bufStr = buf.toString();
var bufArr = bufStr.split('\n');

console.log(bufArr.length - 1);

