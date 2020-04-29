let net = require('net')

let chatServer = net.createServer()

chatServer.on('connection', function(client) {
  client.write('Hi!\n');
  // client.write('Bye!\n');
  client.end()
})

chatServer.listen(9000)
console.log('Chat server started')

