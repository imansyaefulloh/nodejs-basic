const http = require('http');
const url = require('url');

let address = 'http://localhost:3000/default.htm?year=2019&month=february';
let q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);