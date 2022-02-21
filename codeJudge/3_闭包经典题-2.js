function fn() {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] =  () => {
      return i  // 闭包找到的是同一地址中父级函数中对应变量最终的值，循环开始时，这个函数是没有执行的，因为没有调用。
    }
  }
  return arr
}
  //ES5没有块级作用域。对于有块级作用域的语言来说，
  // for 语句初始化变量的表达式所定义的变量，
  // 只会存在于循环的环境之中。而对于JavaScript 来说，
  // 由for 语句创建的变量i 即使在for 循环执行结束后，
  // 也依旧会存在于循环外部的执行环境中。
var list = fn()
for(var i = 0; i < 5; i++) {
  console.log(list[i]())
}

var age = 18
function foo() {
  var name = 'sdad'
  var a = 0
  a = 4 + 123
  return function() {
    console.log(a)
  }
}

var foo = foo()
foo()