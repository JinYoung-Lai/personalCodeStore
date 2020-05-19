/*
题目：企业发放的奖金根据利润提成。

    利润(I)低于或等于10万元时，奖金可提10%；
    利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
    20万到40万之间时，高于20万元的部分，可提成5%；
    40万到60万之间时高于40万元的部分，可提成3%；
    60万到100万之间时，高于60万元的部分，可提成1.5%；
    高于100万元时，超过100万元的部分按1%提成。

从键盘输入当月利润I，求应发放奖金总数？
*/
const count1 = 100000*0.1;
const count2 = count1 + 100000*0.075
const count4 = count2 + 200000*0.05
const count6 = count4 + 200000*0.03
const count10 = count4 + 400000*0.015

function money(m){
  if(m <= 100000){
    count = m*0.1;
  }else if(m <= 200000){
    count = count1 + (m-100000)*0.075
  }else if(m <= 400000){
    count = count2 + (m-200000)*0.05
  }
  else if(m <= 600000){
    count = count4 + (m-200000)*0.03
  }
  else if(m <= 1000000){
    count = count6 + (m-200000)*0.015
  }else{
    count = count10 + (m-1000000)*0.01
  }
  return count
}
let c = money(120000)
console.log(c)