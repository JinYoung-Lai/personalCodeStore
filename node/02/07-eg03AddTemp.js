let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer()

let wwwDir = 'E:/desktop/personalCodeStore'

server.on('request', (req, res) => {
  let url = req.url
  let date = new Date()
  let d = date.getDate()
  let M = date.getMonth() + 1
  let t = date.getHours()
  let m = date.getMinutes()
  let time = `${M}/${d} ${t}:${m}`
  fs.readFile('./template-apache.html', (err, data) => {
    if (err) {
      return res.end('404 Not Found!')
    }
    // 读取目录
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('Can not find www dir!')
      }
      // 生成需要替换的内容
      let temHtml =  template.render(data.toString(), {
        title:'Test',
        files: files
      })
      res.end(temHtml)
    })




  })
})

server.listen(3000, () => {
  console.log('Running at http://127.0.0.1:3000')
})