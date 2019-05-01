const http = require('http');
const dt = require('./mymodule');

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('The date and time currently: ' + dt.myDateTime());
}).listen(3000);