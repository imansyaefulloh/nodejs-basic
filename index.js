const http = require('http');
const url = require('url');
const fs = require('fs');

fs.rename('mynewfile1.txt', 'mynewfile1_renamed.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});