let fs = require('fs')
let http = require('http')

let server = http.createServer()

const documentRoot = './data'

server.on('request', (req, res) => {
  let url = req.url
  let file = documentRoot + url
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHeader(404, {
        'content-type': 'text/html; charset = "UTF-8"'
      });
      res.write('<h1>404 Not Found</h1>')
      res.end();
    } else {
      res.writeHeader(200, {
        'content-type': 'text/html; charset = "UTF-8"'
      });
      res.write(data);
      res.end();
    }
  })
}).listen('3000', () => {
  console.log('server running in http://127.0.0.1:3000/')
})