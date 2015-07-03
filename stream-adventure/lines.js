var through2 = require('through2');
var split = require('split');

var count = 1;

function write(buffer, encoding, next) {
  if(count % 2 === 0) {
    this.push(buffer.toString().toUpperCase() + '\n');
  } else {
    this.push(buffer.toString().toLowerCase() + '\n');
  }

  count++;
  next();
}

process.stdin.pipe(split()).pipe(through2(write)).pipe(process.stdout);
