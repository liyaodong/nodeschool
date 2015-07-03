var fs = require('fs');
var path = require('path');

module.exports = function(dir, userExt, callback) {
  fs.readdir(dir, function(err, list) {
    if(err)
      return callback(err);

    var matched = [];
    list.forEach(function(ele) {
      var ext = path.extname(ele);
      if( ext === '.' + userExt) {
        matched.push(ele);
        console.log(ele);
      }
    });

    callback(null, matched);

  });

};
