// 获取机器信息
let os = require('os')

// 用来操作路径
let path = require('path')

// 获取CPU信息
console.log(os.cpus());

//内存
console.log(os.totalmem())

//获取路径的中的扩展名
console.log(path.extname('E:/desktop/测试账号.txt'))