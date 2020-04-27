var http = require('http')

var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
//    Request 请求对象
//        请求对象可以用来获取客户端的一些请求信息，例如请求路径
//    Response 响应对象
//        响应对象可以用来给客户端发送响应消息

server.on('request', function(request, response){
  console.log('client request has recevied!' + request.url)
  // response 对象有一个方法：write 可以用来给客户端发送响应数据
  // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
  response.write('Hello!')
  response.write('Nodejs')
  // 告诉客户端，我的话说完了，你可以呈递给用户了
  response.end();
})

server.listen('3000', function(){
  console.log('server is alreadly! you can visit it from http://127.0.0.1:3000/')
})