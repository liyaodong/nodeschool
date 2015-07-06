var fs = require('fs');
var through2 = require('through2');
var concat = require('concat-stream');
var stream = through2(write);

function write(buffer, encoding, next) {
  this.push(buffer.toString());
  next();
}

process.stdin
  .pipe(stream)
  .pipe(concat(function (body) {
    var result = body.toString().split('').reverse().join('');
    process.stdout.write(result);
  }));
