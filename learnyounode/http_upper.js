var http = require('http');
var map  = require('through2-map');

var server = http.createServer(function(req, res) {
  if(req.method != 'POST')
      return res.end('你确定是post请求？');

  req.pipe(map(function(thunk) {
    return thunk.toString().toUpperCase()
  })).pipe(res);
});

server.listen(Number(process.argv[2]));
