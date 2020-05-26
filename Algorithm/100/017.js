/*
题目：有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和。
*/
function sum() {
  let i, a = 2, b = 1, sum = 0;
  for(i = 1; i <= 20; i++){
    sum += a/b
    let t = a;
    a = a + b;
    b = t;
  }
  console.log(sum)
}

sum()