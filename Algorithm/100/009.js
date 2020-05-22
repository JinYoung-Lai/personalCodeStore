/*
  题目：求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，
*/

function reAdd(x, n){
  let res = 0, a = 0, t = 1;
  for(let i = 0; i < n; i++){
   
    a += x*t
    t *= 10 // Math.pow(10, i)
    res += a
    console.log(res)
  }
}
reAdd(2, 5)