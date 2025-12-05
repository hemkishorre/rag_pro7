// Example.java

public class test{
    public static int multiply(int a, int b) {
        return a * b;
    }

    static class Person {
        String name;

        Person(String name) {
            this.name = name;
        }

        String greet() {
            return "Hello " + this.name;
        }
    }

    public static void main(String[] args) {
        System.out.println(multiply(3, 5));
        Person p = new Person("Developer");
        System.out.println(p.greet());
    }
}
