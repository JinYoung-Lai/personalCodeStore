
/* 
  已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
  1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
  2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
  3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
  4、调用 c 之后，返回的结果与调用 fn 的返回值一致
  5、fn 的参数依次为函数 a, b, c 的调用参数 

  输入：var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);
  输出：6
*/

function curryIt(fn) {
  var n = fn.length;
  var args = [];
  return function (arg) {
    args.push(arg);
    if (args.length < n) {
      return arguments.callee
    } else {
      return fn.apply(null, args)
    }
  }
}

// 函数柯里化通用函数
function curry(fn) {
  // 先获取p函数第一个参数之后的全部参数
  var args = Array.prototype.slice.call(arguments, 1);
  // 声明result函数
  var result = function () {
    // 使用concat合并两个或多个数组中的元素
    return fn.apply(null, args.concat([].slice.call(arguments)));
  }
  return result;
}
