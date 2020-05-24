// 题目：一球从100米高度自由落下，每次落地后反跳回原高度的一半；
// 再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
function jump(m){
  let i = 1
  let s = m
  m = m/2
  while (m > 0) {
    s += (m*2)
    m = m/2;
    i++
    if(i == 10){
      console.log(s)
      console.log(m)
    }
    
  }
}
jump(100)

// 答案
function jump2(){
  let h, s;
  h = s = 100;
  h = h/2;
  for(let i = 2; i <= 10; i++){
    s = s + 2*h;
    h = h/2
  }
  console.log('高度', h)
  console.log('距离', s)
}
jump2()
