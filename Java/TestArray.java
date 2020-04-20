public class TestArray{
  public static void main(String[] args){
    double[] myList = {1.9, 2.9, 3.9, 3.5};

    for (int i = 0; i < myList.length; i++){
      System.out.println(myList[i] + "");
    }
    // 计算总和
    double total = 0;
    for(int i = 0; i < myList.length; i++){
      total += myList[i];
    }
    System.out.println("Total = " + total);
    // 查找最大元素
    double max = myList[0];
    for(int i = 1; i < myList.length; i++){
      if(myList[i] > max){
        max = myList[i];
      }
    }
    System.out.println("Max = " + max);

    // for-Each
    for(double ele : myList){
      System.out.println(ele);
    }

  }
}