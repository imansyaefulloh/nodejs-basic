const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      let oldPath = files.filetoupload.path;
      let newPath = "/Users/imansyaefulloh/Projects/nodejs/nodejs-w3schools-basic/" + files.filetoupload.name;

      console.log('OLD_PATH: ' + oldPath);
      console.log('NEW_PATH: ' + newPath);

      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        res.write('File uploaded and moved');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"/><br />')
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

