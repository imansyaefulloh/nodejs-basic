const http = require('http');
const url = require('url');
const fs = require('fs');

fs.appendFile('mynewfile3.txt', ' | Append this text to existing file', (err, file) => {
  if (err) throw err;
  console.log('Saved');
});