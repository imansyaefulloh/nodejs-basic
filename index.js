const http = require('http');
const url = require('url');
const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Create new file using writeFile', (err, file) => {
  if (err) throw err;
  console.log('Saved');
});