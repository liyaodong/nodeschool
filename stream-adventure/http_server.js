var http = require('http');
var fs = require('fs');
var through = require('through2');
var concat = require('concat-stream');

var server = http.createServer(function (req, res) {
  if(req.method === 'POST') {
    req
      .pipe(
        through(function (buf, _, next) {
          this.push(buf.toString().toUpperCase());
          next();
        })
      ).pipe(res);
  } else {
    res.end('not a post req');
  }
});

server.listen(process.argv[2]);
