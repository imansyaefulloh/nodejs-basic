const http = require('http');
const url = require('url');
const fs = require('fs');

fs.open('mynewfile3.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('Saved');
});