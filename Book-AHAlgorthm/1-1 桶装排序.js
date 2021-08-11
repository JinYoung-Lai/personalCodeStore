let arr = [1, 5, 8, 2, 5, 3], keng = [], newArr = []
// 桶装算法，满分10分，给5个人的分数排序
// 1、定义一个坑位数组，满分10分，定义11个坑,全部设为0。
// 2、分数对应坑位序号，坑中有分数就+1。比如5分就是keng[5]
// 3、打印出坑位数组大于0的序号
// 算法复杂度： 第8行循环了n次，第10行循环了n次，第15行循环了m次
// 时间复杂度为 O(n+n+m) == O(M+N) 但是花费空间大，多少个数排序就要多少个坑
for(let i = 0; i < 11; i++) {
  keng[i] = 0;
  
}
for(let j = 0; j < arr.length; j++) {
    keng[arr[j]] += 1
}
for(let i = keng.length; i > 0; i--){
  for(let j = 0; j < keng[i]; j ++) {
    newArr.push(i)
  }
}

console.log(newArr)