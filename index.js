const http = require('http');
const fs = require('fs');
const rs = fs.createReadStream('./demofile1.txt');

rs.on('open', () => console.log('the file is open'));