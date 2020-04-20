import java.io.*;
public class Puppy{
  int puppyAge;

  public Puppy(String name){
    System.out.println("The name of this dog is:" + name);
  }
  public void setAge(int age){
    puppyAge = age;
  }

  public int getAge(){
    System.out.println("The age of this dog is:" + puppyAge);
    return puppyAge;
  }
  public static void main(String []args){
    // 创建对象
    Puppy myPuppy = new Puppy("tommy");
    // 通过方法来设定age
    myPuppy.setAge(2);
    // 调用另一个方法获取age
    myPuppy.getAge();
    System.out.println("Variable value:" + myPuppy.puppyAge);
  }
}