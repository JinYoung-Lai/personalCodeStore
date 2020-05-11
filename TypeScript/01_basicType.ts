// 1、布尔值
let isDone: boolean = false;

// 2、数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; // 16进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制

// 3、字符串
let myname: string = `Gene`;
let age: number = 20;
let sentence: string = `Hello, my name is ${ myname }. I'll be ${ age + 1 } years old next month.`
console.log(sentence)

// 4、数组
let list: number[] = [1, 2, 3]
let list_2: Array<number> = [1, 2, 3]
console.log(list === list_2)

// 5、元组 Tuple
let x: [string, number];
x = ['hello', 12];
// x = [10, 'hello'] // Error

// 6、枚举
enum Color {Red = 1, Green, Blue}; // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
let c: Color = Color.Red
let colorName: String = Color[2] // Green
console.log(colorName)

// 7、Any
/* 
  在对现有代码进行改写的时候，any类型是十分有用的，
  它允许你在编译时可选择地包含或移除类型检查。 
  你可能认为 Object有相似的作用，就像它在其它语言中那样。 
  但是 Object类型的变量只是允许你给它赋任意值 - 
  但是却不能够在它上面调用任意的方法，即便它真的有这些方法
*/
let notSure: any = 4
notSure = "Maybe a string instead"
// let prettySure: object = 4;
// prettySure.toFixed() 
let list_3: any[] = [1, true, 'sss']

// 8、Void
/* 
  某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
  当一个函数没有返回值时，你通常会见到其返回值类型是 void 
*/
function warnUser(): void {
  console.log("This is my warning message");
}

// 9、Null 和 Undefined
/*
  undefined和null两者各自有自己的类型分别叫做undefined和null。
*/
let u: undefined = undefined;
let n: null = null;


// 10、Never  never类型表示的是那些永不存在的值的类型。
function error(message: string): never {
  throw new Error(message);
}

// 11、Object
/*
  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
*/

// 类型断言
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
