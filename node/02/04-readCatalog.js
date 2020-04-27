let fs = require('fs')

let url = 'E:/desktop'
fs.readdir(url, (err, files) => {
  if (err) {
    return err.end('404')
  }
  console.log(files)
})