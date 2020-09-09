
function functionFunction(str) {
  var f = function (s) {
    return str + ',' + s;
  }
  return f
}
console.log(functionFunction('hello')('world')) // hello, world

