// fs为file-system，文件系统
// node中如果想要读取文件，就必须引入fs这个核心模块
var fs = require('fs')

// 读取文件
// 第一个参数是文件路径
// 第二个参数是回调函数
//   error 成功：null 失败：错误对象 
//   data  成功：数据 失败：null
// 读取的文件都为二进制文件，控制台打印出来的是16进制
fs.readFile('../README.md', function(error, data){
  console.log(data.toString())
})