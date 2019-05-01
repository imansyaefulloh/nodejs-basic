const http = require('http');
const url = require('url');
const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Old content are replaced by this text', (err, file) => {
  if (err) throw err;
  console.log('Saved');
});