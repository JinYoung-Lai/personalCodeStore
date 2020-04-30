let url = require('url')
let obj = url.parse('/pinglun?name=Jinze&message=sadan', true)

console.log(obj)
console.log(obj.query)