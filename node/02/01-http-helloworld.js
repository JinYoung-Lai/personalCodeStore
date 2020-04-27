let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', (req, res) => {
  if (url === '/') {
    res.end('Hello world!')
  } else {
    res.end('404 Not Found!')
  }
})

server.listen('3000', () => {
  console.log('Running at http://127.0.0.1:3000')
})