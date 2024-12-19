var http = require('http');
var dt = require('./mymod');
var uc = require('upper-case');
var uc2 = require('noodlesnodepackage');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('the time is ' + dt.myDateTime());
  res.write(req.url);
  res.end;
}).listen(8080);


