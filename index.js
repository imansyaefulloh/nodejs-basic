const http = require('http');
const url = require('url');
const fs = require('fs');

fs.unlink('mynewfile3.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});