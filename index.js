const http = require('http');
const url = require('url');
const fs = require('fs');
const uc = require('upper-case');

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write(uc('Hello World!'));
  res.end();
}).listen(3000);