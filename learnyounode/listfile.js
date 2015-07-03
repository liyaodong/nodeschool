var listfile = require('./listfile_module');

var input = process.argv;

listfile(input[2], input[3], function(err, data) {
  if(err) {
    console.log(err);
    return;
  }

});
