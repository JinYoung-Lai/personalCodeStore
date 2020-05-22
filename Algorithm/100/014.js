/*
题目：一个数如果恰好等于它的因子之和，这个数就称为"完数"。
例如6=1＋2＋3.编程找出1000以内的所有完数。
*/


//自己想的办法，其实一开始思路是对的，但是循环错了
function perfectNum(n) {
  let i, sumArr = []
  for (i = 1; i <= n; i++) {
    let item = {
      num: Number,
      arr: []
    }
    item.num = i
    sumArr.push(item)
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        item.arr.push(j)
      }
    }
  }
  for (let k = 0; k < sumArr.length; k++) {
    let itemsum = sumArr[k],
      adddd = 0
    for (let b = 0; b < itemsum.arr.length; b++) {
      adddd += itemsum.arr[b]
    }
    if (itemsum.num === adddd) {
      console.log(itemsum.num)
    }
  }
}
perfectNum(1000)


function perfectNum2(N) {
  let i, j, k, n, sum = 0
  let a = []
  for (i = 2; i <= N; i++) {
    sum = a[0] = 1
    k = 0
    for (j = 2; j <= (i / 2); j++) {
      if (i % j == 0) {
        sum += j
        a[++k] = j
      }
    }
    if (i == sum) {
      console.log(i)
      for (n = 0; n <= k; n++) {
        //console.log(a[n])
      }
    }
  }
}
perfectNum2(1000)