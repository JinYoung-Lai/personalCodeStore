// 题目：有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
function arrange(){
  // let arr = [1, 2, 3, 4];
  let count = 0
  for(let i = 1; i < 5; i++){
    for(let j = 1; j < 5; j++){
      for(let k = 1; k < 5; k++){
        if(i != j && j != k && i != k){
          count ++
          console.log(i,j,k)
        }
      }
    }
  }
  return count
}
let c = arrange()
console.log(c) //24