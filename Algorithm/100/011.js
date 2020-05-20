/*
  古典问题（兔子生崽）：有一对兔子，从出生后第3个月起每个月都生一对兔子，
  小兔子长到第三个月后每个月又生一对兔子，
  假如兔子都不死，问每个月的兔子总数为多少？（输出前40个月即可）
  解析：其实就是斐波那契数列
*/
function born(n){
  let f1 = 1, f2 = 1;
  for(let i = 3; i <= n; i++){
    console.log(f1, f2)
    f2 = f1 + f2
    f1 = f2 - f1
  }
  return f2
}
let c2 = born(20)
console.log(c2)

// 递归的方法开销很大
function fibonacci(n) {
  if(n == 1 || n == 2){
    return 1
  }
  if(n >= 3){
    return arguments.callee(n-1) + arguments.callee(n-2)
  }
}
let c = fibonacci(20)
console.log(c)