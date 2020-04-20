import java.io.*;

public class EmployeeTest{
  public static void main(String[] args){
    Employee empOne = new Employee("young");
    empOne.empAge(20);
    empOne.empDesignation("菜鸟");
    empOne.empSalary(10000);
    empOne.printEmployee();
  }
  

}