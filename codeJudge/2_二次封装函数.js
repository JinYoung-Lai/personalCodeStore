
function partial(fn, str1, str2) {
  function result(str3) {
    return fn.call(this, str1, str2, str3);
  }

  return result;
}
// 实现函数 partialUsingArguments，调用之后满足如下条件：
// 1、返回一个函数 result
// 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
// 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
function partialUsingArguments(fn) {
  // 先获取p函数第一个参数之后的全部参数
  var args = Array.prototype.slice.call(arguments, 1);
  // 声明result函数
  var result = function () {
    // 使用concat合并两个或多个数组中的元素
    return fn.apply(null, args.concat([].slice.call(arguments)));
  }
  return result;
}
