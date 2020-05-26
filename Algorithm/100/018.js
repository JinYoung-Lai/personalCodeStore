// 题目：求1+2!+3!+...+20!的和。
function sum() {
  let i, t = 1.0, sum = 0;
  for(i = 1; i <= 20; i++){
     t *= i
     sum += t 
  }
  console.log(sum)
}
sum()