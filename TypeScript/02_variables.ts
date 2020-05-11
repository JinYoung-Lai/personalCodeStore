
// let
function f(){
  var a = 1;
  a = 2;
  var b = g()
  a = 3;
  return b
  function g(){
    return a;
  }  
}

console.log(f())

for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}

for (let j = 0; j < 10; j++) {
  setTimeout(function() { console.log(j); }, 100 * j);
}

// 对象解构
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;

// 属性重命名
let { a: newName1, b: newName2 } = o;

// 展开运算符
/*
  对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 
  大体上是说当你展开一个对象实例时，你会丢失其方法
*/
class D {
  p = 12;
  m() {
  }
}
let d = new D();
let clone = { ...d };
clone.p; // ok
// clone.m(); // error!
