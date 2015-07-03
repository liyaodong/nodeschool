var fs = require('fs');
var path = require('path');

var userExt = process.argv[3];


fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(element, index) {
    var ext = path.extname(element);
    if(ext === '.' + userExt) {
      console.log(element);
    }
  });
});
