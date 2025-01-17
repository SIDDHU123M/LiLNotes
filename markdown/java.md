# Ultimate Master Java Cheat Sheet

## Table of Contents
1. [Introduction to Java](#introduction-to-java)
2. [Setting Up Java](#setting-up-java)
3. [Basic Syntax](#basic-syntax)
4. [Data Types](#data-types)
5. [Control Flow](#control-flow)
6. [Arrays](#arrays)
7. [Strings](#strings)
8. [Object-Oriented Programming](#object-oriented-programming)
9. [Inheritance](#inheritance)
10. [Polymorphism](#polymorphism)
11. [Interfaces](#interfaces)
12. [Exception Handling](#exception-handling)
13. [Collections Framework](#collections-framework)
14. [Generics](#generics)
15. [File I/O](#file-io)
16. [Multithreading](#multithreading)
17. [Networking](#networking)
18. [Java Database Connectivity (JDBC)](#java-database-connectivity-jdbc)
19. [Lambda Expressions](#lambda-expressions)
20. [Streams API](#streams-api)
21. [Annotations](#annotations)
22. [Java Development Tools](#java-development-tools)

---

## Introduction to Java

Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, mobile applications (especially Android apps), and large systems.

**Key Features:**
- **Platform Independence:** Write once, run anywhere (WORA).
- **Object-Oriented:** Encapsulation, inheritance, polymorphism.
- **Robust and Secure:** Strong memory management, exception handling, and security features.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

---

## Setting Up Java

### Installation

**Windows, macOS, Linux:**
- Download the JDK from the [Oracle website](https://www.oracle.com/java/technologies/javase-downloads.html).
- Follow the installation instructions.

**Environment Variables:**

```bash
# Set JAVA_HOME
export JAVA_HOME=/path/to/jdk

# Add Java to PATH
export PATH=$JAVA_HOME/bin:$PATH
```

---

## Basic Syntax

### Hello World Program

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Comments

```java
// Single-line comment

/*
Multi-line comment
*/

/**
 * Javadoc comment
 */
```

---

## Data Types

### Primitive Data Types

```java
byte b = 100;       // 8-bit integer
short s = 10000;    // 16-bit integer
int i = 100000;     // 32-bit integer
long l = 100000L;   // 64-bit integer
float f = 10.5f;    // 32-bit floating point
double d = 10.5;    // 64-bit floating point
char c = 'A';       // 16-bit Unicode character
boolean bool = true; // true or false
```

### Reference Data Types

```java
String str = "Hello, Java!";
```

---

## Control Flow

### If-Else

```java
int x = 10;
if (x > 5) {
    System.out.println("x is greater than 5");
} else {
    System.out.println("x is less than or equal to 5");
}
```

### Switch

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}
```

### Loops

```java
// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Do-While loop
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 5);
```

---

## Arrays

### Declaring and Initializing Arrays

```java
int[] numbers = new int[5]; // Declaration
numbers[0] = 1; // Initialization

int[] numbers2 = {1, 2, 3, 4, 5}; // Declaration and Initialization
```

### Multi-dimensional Arrays

```java
int[][] matrix = new int[3][3]; // 3x3 matrix
matrix[0][0] = 1;

int[][] matrix2 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

---

## Strings

### String Methods

```java
String str = "Hello, Java!";
System.out.println(str.length()); // 13
System.out.println(str.charAt(0)); // H
System.out.println(str.substring(0, 5)); // Hello
System.out.println(str.indexOf("Java")); // 7
System.out.println(str.toUpperCase()); // HELLO, JAVA!
System.out.println(str.toLowerCase()); // hello, java!
```

### String Concatenation

```java
String str1 = "Hello";
String str2 = "Java";
String result = str1 + ", " + str2 + "!";
System.out.println(result); // Hello, Java!
```

---

## Object-Oriented Programming

### Classes and Objects

```java
class Dog {
    String name;
    int age;

    void bark() {
        System.out.println(name + " is barking!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.name = "Buddy";
        myDog.age = 3;
        myDog.bark(); // Buddy is barking!
    }
}
```

### Constructors

```java
class Dog {
    String name;
    int age;

    Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void bark() {
        System.out.println(name + " is barking!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", 3);
        myDog.bark(); // Buddy is barking!
    }
}
```

---

## Inheritance

### Extending a Class

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat(); // This animal eats food.
        myDog.bark(); // The dog barks.
    }
}
```

---

## Polymorphism

### Method Overloading

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3)); // 5
        System.out.println(calc.add(2.5, 3.5)); // 6.0
    }
}
```

### Method Overriding

```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound(); // Dog barks
    }
}
```

---

## Interfaces

### Defining and Implementing Interfaces

```java
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound(); // Dog barks
    }
}
```

---

## Exception Handling

### Try-Catch Block

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}
```

### Finally Block

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("This will always execute");
        }
    }
}
```

---

## Collections Framework

### ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (String language : list) {
            System.out.println(language);
        }
    }
}
```

### HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Java", 1);
        map.put("Python", 2);
        map.put("C++", 3);

        System.out.println(map.get("Java")); // 1
    }
}
```

---

## Generics

### Generic Class

```java
class Box<T> {
    private T item;

    void setItem(T item) {
        this.item = item;
    }

    T getItem() {
        return item;
    }
}

public class Main {
    public static void main(String[] args) {
        Box<String> box = new Box<>();
        box.setItem("Hello, Generics!");
        System.out.println(box.getItem()); // Hello, Generics!
    }
}
```

---

## File I/O

### Reading a File

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            File file = new File("file.txt");
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }
}
```

### Writing to a File

```java
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, Java!");
            writer.close();
        } catch (IOException e) {
            System.out.println("An error occurred");
        }
    }
}
```

---

## Multithreading

### Creating a Thread

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

### Runnable Interface

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

---

## Networking

### Socket Programming

```java
import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 6789);
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            out.println("Hello, Server");
            System.out.println("Server says: " + in.readLine());

            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Java Database Connectivity (JDBC)

### Connecting to a Database

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while (rs.next()) {
                System.out.println(rs.getString("username"));
            }

            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Lambda Expressions

### Using Lambda Expressions

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        numbers.forEach((n) -> System.out.println(n));
    }
}
```

---

## Streams API

### Using Streams

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> languages = Arrays.asList("Java", "Python", "C++");

        languages.stream()
                 .filter(lang -> lang.startsWith("J"))
                 .forEach(System.out::println); // Java
    }
}
```

---

## Annotations

### Custom Annotations

```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface MyAnnotation {
    String value();
}

class MyClass {
    @MyAnnotation(value = "Hello")
    public void myMethod() {
        System.out.println("My Method");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        MyClass obj = new MyClass();
        MyAnnotation annotation = obj.getClass().getMethod("myMethod").getAnnotation(MyAnnotation.class);
        System.out.println(annotation.value()); // Hello
    }
}
```

---

## Java Development Tools

### Popular IDEs
- **Eclipse**
- **IntelliJ IDEA**
- **NetBeans**

### Build Tools
- **Maven**
- **Gradle**

### Version Control
- **Git**

---

This comprehensive cheat sheet covers essential aspects of Java, from basic syntax to advanced topics like multithreading and networking. Use it as a quick reference to master Java development!
