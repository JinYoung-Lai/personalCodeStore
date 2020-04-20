import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches {

  private static String Regex = "dog";
  private static String Input = "The dog says meow. " + "All dogs say meow.";
  private static String Replace = "cat";
  public static void main(String args[]) {
    String line = "This order was palced for QT2300! ok?";
    String patter = "(\\D*)(\\d+)(.*)"; // 匹配非数字 匹配数字

    
    // 创建 Pattern 对象
    Pattern r = Pattern.compile(patter);

    // 创建matcher对象
    Matcher m = r.matcher(line);
    if (m.find()) {
      System.out.println("Found value: " + m.group(0));
      System.out.println("Found value: " + m.group(1));
      System.out.println("Found value: " + m.group(2));
      System.out.println("Found value: " + m.group(3));
    } else {
      System.out.println("NO MATCH!");
    }

    Pattern p2 = Pattern.compile(Regex);
    Matcher m2 = p2.matcher(Input);
    Input = m2.replaceAll(Replace);
    System.out.println(Input);
  }


}