class Animal{
  move(distanceInMeters: number = 0){
    console.log(`Animal moved ${distanceInMeters} m.`);
  } 
}

class Dog extends Animal{
  bark(){
    console.log('woof!')
  }
}

const dog = new Dog()

dog.bark();
dog.move(10)

//eg2

class Animal2{
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0){
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal2{
  constructor(name: string) { super(name)}
  move(distanceInMeters = 5){
    console.log("Slithering...");
    super.move(distanceInMeters)
  }
}
class Horse extends Animal2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}

let sam = new Snake("sammy the Python")
let tom:Animal2 = new Horse("tommy the Palomino")

sam.move();
tom.move(34)
/*
  派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 
  而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 
  这个是TypeScript强制执行的一条重要规则。 
  Snake类和 Horse类都创建了 move方法，它们重写了从 Animal继承来的 move方法，
  使得 move方法根据不同的类而具有不同的功能。
*/


// 私有变量 private
class Animal3{
  private name: string;
  constructor(theName: string) {
    this.name = theName
  }
}
class Phino extends Animal3{
  constructor(){ super("Phino");}
}
class Employee{
  private name:string;
  constructor(theName: string){
    this.name = theName
  }
}
let animal = new Animal3("Goat");
let rhino = new Phino();
let employee = new Employee("Bob");

animal = rhino; // ok
// animal = employee; // error AAnimal 与 Employee 不兼容
/*
  因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，
  因此它们是兼容的。 然而 Employee却不是这样,
  只有当另外一个类型中也存在这样一个 private成员， 
  并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的
*/

//  protected
/* 
  protected修饰符与 private修饰符的行为很相似，但有一点不同，
   protected成员在派生类中仍然可以访问。
*/
class Person{
  protected name: string;
  constructor(name: string){
    this.name = name;
  }
}
class Employee2 extends Person{
  private department: string;
  constructor(name: string, department: string){
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
// 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。


// readonly修饰符 只读属性必须在声明时或构造函数里被初始化
class Octopus{
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string){
    this.name = theName;
  }
}

// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 
// 它能帮助你有效的控制对对象成员的访问。 
let passcode = 'secret passcode'
class Employee3{
  private _fullName: string;
  get fullName():string{
    return this._fullName;
  }
  set fullName(newName: string){
    if(passcode && passcode == 'secret passcode'){
      this._fullName = newName;
    }else{
      console.log("Error: Unauthorized update of employee!")
    }
  }
}
let employeex = new Employee3();
employeex.fullName = "Bob Smith";
if (employeex.fullName) {
    alert(employeex.fullName);
}

//静态属性
/*
  我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 
  在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 
  每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 
  如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性
*/
class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: {x: number; y: number;}) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

// 抽象类
/*
  抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 
  abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
*/
abstract class Animal4 {
  abstract makeSound(): void;
  move(): void {
      console.log('roaming the earch...');
  }
}

abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
