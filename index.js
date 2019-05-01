const http = require('http');
const url = require('url');
const fs = require('fs');

fs.appendFile('mynewfile2.txt', 'Hello content 2!', (err) => {
  if (err) throw err;
  console.log('Saved');
});