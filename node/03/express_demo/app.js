// 0.安装
// 1.引包

const express = require('express')

// 2.创建服务器应用程序
// equal http.createServe

const app = express()
const port = 3000

app.use('/public/', express.static('./public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('阿西吧')
})

// equal serve.listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
