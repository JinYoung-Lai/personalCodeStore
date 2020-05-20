//打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数 本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
function shuixianhua(){
  for(let i = 100; i < 1000; i++){
    // 转出字符串取位数
    // let n = i + ''
    // let h = parseInt(n.charAt(0)) 
    // let t = parseInt(n.charAt(1))
    // let d = parseInt(n.charAt(2))

    let h = parseInt(i%10)  //记得转为int类型，以便于忽略小数点
    let t = parseInt(i/10%10)
    let d = parseInt(i/100%10)
    let h3 = Math.pow(h, 3);
    let t3 = Math.pow(t, 3)
    let d3 = Math.pow(d ,3)
    if(h3 + t3 + d3 === i){
      console.log(i)
    }
  }
}
shuixianhua()