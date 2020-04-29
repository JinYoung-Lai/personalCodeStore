let template = require('art-template')
let fs = require('fs')

fs.readFile('./tpl.html', (err, data) => {
  if(err){
    return console.log('读取文件失败！')
  }
  // 模板引擎只接受字符串
  // render 第一个参数模板， 第二个参数替换的数据
  let ret = template.render(data.toString(), {
    name: 'Jack',
    age: 18,
    province: '北京市',
    hobbies: [
      '写代码',
      '唱歌',
      '打游戏'
    ],
    title: '个人信息'
  })
  console.log(ret)
})
