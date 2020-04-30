const http = require('http')
const fs = require('fs')
const template = require('../node_modules/art-template')
const url = require('url')

var comments = [
  
]



http
.createServer((req, res) => {
  //let url = req.url
  let paresObj = url.parse(req.url, true)
  let pathname = paresObj.pathname
  if(pathname === '/'){
    fs.readFile('./views/index.html', (err, data) => {
      if(err){
        return res.end('404 Not Found')
      }
      let htmlStr = template.render(data.toString(), {
        comments: comments
      })

      res.end(htmlStr)
    })
  }else if(pathname.indexOf('/public/') === 0){
    fs.readFile('.' + pathname, (err, data) =>{
      if(err){
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  }else if(pathname === '/post'){
    fs.readFile('./views/post.html', (err, data) => {
      if(err){
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  }else if(pathname === '/discuss'){
    let date = new Date()
    let d = date.getDate()
    let M = date.getMonth() + 1
    let t = date.getHours()
    let m = date.getMinutes()
    let time = `${M}/${d} ${t}:${m}`
    // 数据请求好了
    let comment = paresObj.query
    comment.dateTime = time
    comments.unshift(comment)
    console.log(comments)
    // 如何通过服务器让客户端重定向？
    //    1. 状态码设置为 302 临时重定向
    //        statusCode
    //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
    //        setHeader
    // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
    // 所以你就能看到客户端自动跳转了
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
  else{
    fs.readFile('./views/404.html', (err, data) => {
      if(err){
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  }
})
.listen(3000, () => {
  console.log('runing...')
})