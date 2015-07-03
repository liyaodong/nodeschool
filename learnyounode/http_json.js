var http = require('http');
var url  = require('url');

var server = http.createServer(function(req, res) {
  var requrl = url.parse(req.url, true);
  var d;
  var resJson;

  if(requrl.pathname == '/api/parsetime') {
    d = new Date(requrl.query.iso);
    resJson = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  } else if (requrl.pathname == '/api/unixtime') {
    d = new Date(requrl.query.iso)
    resJson = {
      unixtime: d.getTime()
    }
  }

  if(resJson) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(resJson));
  } else {
    res.writeHead(404);
    res.end('404 Error');
  }
});

server.listen(process.argv[2]);
