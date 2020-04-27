let http = reqire('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
    // if(url !== '/'){

  // }
  fs.readFile(url, (err, data) => {
    if (err) {
      return res.end('404')
    }
    res.end(data)
  })
})

server.listen(3000, () => {
  console.log('Running at http://127.0.0.1:3000')
})