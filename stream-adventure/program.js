var fs = require('fs');

var argv = process.argv[2];
fs.createReadStream(argv).pipe(process.stdout);
