var fs = require('fs')

fs.writeFile('./data/hello.md', 'Hello! everyone! i am nodejs', function(error){
  if(error){
    console.log(error)
  }else{
    console.log('Write Success!')
  }
})