// 题目：利用递归方法求5!。
function fact(i) {
  let sum = 1
  while (i) {
    sum *= i
    i--
  }
  console.log(sum)
  return sum
}

function factorial(n) {
  if(n <= 0){
    return 1;
  }else{
    return n*arguments.callee(n - 1)
  }
}
fact(5)
console.log(factorial(5))