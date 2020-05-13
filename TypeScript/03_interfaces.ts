interface LabelLedValue {
  label: string;
}

function printLable(labelObj: LabelLedValue){
  console.log(labelObj.label)
}

let myObj = {size: 10, label: "size 10 object"}
printLable( myObj );

// 可选属性
/*
  可选属性的好处之一是可以对可能存在的属性进行预定义，
  好处之二是可以捕获引用了不存在的属性时的错误。
*/
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number }{
  let newSquare = { color: 'white', area: 100}
  if(config.color){
    newSquare.color = config.color;
  }
  if(config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({color: 'black'})
console.log(mySquare)

// 只读属性
/*
  readonly vs const
  最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
  做为变量使用的话用 const，若做为属性则使用readonly。
*/
interface Point {
  readonly x: number;
  readonly y: number;
}

// 任意数量属性
/*
  如果 SquareConfig带有上面定义的类型的color和width属性，
  并且还会带有任意数量的其它属性，那么我们可以这样定义它。
*/
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any
}

// 函数类型
/* 
  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。 
*/
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string){
  let result = src.search(sub)
  return result > -1
}

// 可索引类型
interface StringArray {
  [index: number]: string;
  // length: number;  // 可以，length是number类型
  // name: string  // 错误，`name`的类型与索引类型返回值的类型不匹配
}
let myArray: StringArray
myArray = ['12', 'Bob', 'Refd', 'sasx'];
let myStr: string = myArray[12];
console.log(myStr)
/* 你可以将索引签名设置为只读，这样就防止了给索引赋值 */
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!


// 类类型
// 你也可以在接口中描述一个方法，在类里实现它
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

// 继承接口
interface Shape{
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let squarex = <Square>{};
squarex.color = 'blue';
squarex.sideLength = 10;
squarex.penWidth = 5.0

// 接口继承类
class Control{
  private state: any;
}

interface SelectableControl extends Control{
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() { }
}