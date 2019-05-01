const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000);