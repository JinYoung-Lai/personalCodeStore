// 题目：判断一个数字是否为质数。
function isPrime(n){
  if(n <= 1){
    return false
  }
  if(n === 2 ){
    return true
  }
  for(let i = 3; i < n; i++){
    if(n%i === 0){
      return false
    }else{
      return true
    }
  }
}
console.log(isPrime(197)) 