let http = require('http')
let fs = require('fs')

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
  fs.readFile('./template.html', (err, data) => {
    if (err) {
      return res.end('404 Not Found!')
    }
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('Can not find www dir!')
      }
      // 生成需要替换的内容
      let content = ''
      files.forEach(element => {
        content += `
          <tr>
            <td data-value="node"><a class="icon dir" href="/E:/desktop/personalCodeStore/node">${element}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">${time}</td>
          </tr>
        `
      });

      data = data.toString()
      data = data.replace('^_^', content)
      res.end(data)
    })




  })
})

server.listen(3000, () => {
  console.log('Running at http://127.0.0.1:3000')
})