<p align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width="64" height="64" alt="header-image"></p>
<h2 align="center">JavaScript Cheat Sheet</h2>


# Comprehensive JavaScript Cheat Sheet Guide

This cheat sheet provides a collection of JavaScript code snippets with descriptions, explanations, and links to further reading. Use the table of contents to navigate to different sections.

---

## Table of Contents

1. [Basic Syntax](#basic-syntax)
   - [Variables](#variables)
   - [Data Types](#data-types)
   - [Operators](#operators)
2. [Control Flow](#control-flow)
   - [If Statements](#if-statements)
   - [Switch Statements](#switch-statements)
   - [Loops](#loops)
3. [Functions](#functions)
   - [Function Declaration](#function-declaration)
   - [Arrow Functions](#arrow-functions)
   - [Function Parameters](#function-parameters)
4. [Arrays](#arrays)
   - [Array Declaration](#array-declaration)
   - [Array Methods](#array-methods)
5. [Objects](#objects)
   - [Object Literals](#object-literals)
   - [Object Methods](#object-methods)
6. [Modern JavaScript Features](#modern-javascript-features)
   - [Destructuring](#destructuring)
   - [Spread and Rest Operators](#spread-and-rest-operators)
   - [Promises and Async/Await](#promises-and-asyncawait)
7. [Error Handling](#error-handling)
   - [Try...Catch Blocks](#trycatch-blocks)
8. [DOM Manipulation](#dom-manipulation)
   - [Selecting Elements](#selecting-elements)
   - [Event Handlers](#event-handlers)

---

## Basic Syntax

### Variables

**Declaration and Assignment:**

```javascript
let variableName = value;
const constantName = value;
```

- `let` declares a variable with block scope.
- `const` declares an immutable variable (constant).

**Example:**

```javascript
let age = 25;
const PI = 3.1415;
```

**Explanation:**

- Variables declared with `let` are block-scoped, meaning they are only accessible within the block they are defined in.
- Variables declared with `const` are also block-scoped but must be assigned a value and cannot be reassigned.
- `const` variables are often used for values that should not change, like constants.

**Further Reading:**

- [MDN Web Docs - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### Data Types

**Primitive Types:**

- **Number:**

  ```javascript
  let count = 42;
  ```

- **String:**

  ```javascript
  let name = "Alice";
  ```

- **Boolean:**

  ```javascript
  let isStudent = true;
  ```

- **Null:**

  ```javascript
  let empty = null;
  ```

- **Undefined:**

  ```javascript
  let variable; // undefined
  ```

- **Symbol (ES6):**

  ```javascript
  let sym = Symbol('symbol');
  ```

**Composite Types:**

- **Object:**

  ```javascript
  let person = { name: "Bob", age: 30 };
  ```

- **Array:**

  ```javascript
  let numbers = [1, 2, 3];
  ```

**Explanation:**

- JavaScript has both primitive and composite data types.
- Primitive types include number, string, boolean, null, undefined, and symbol.
- Composite types include objects and arrays, which can hold collections of data.

**Further Reading:**

- [MDN Web Docs - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### Operators

**Arithmetic Operators:**

```javascript
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let increment = a++;
let decrement = a--;
```

**Comparison Operators:**

```javascript
let isEqual = a == b;
let isStrictEqual = a === b;
let isNotEqual = a != b;
let isStrictNotEqual = a !== b;
let isGreater = a > b;
let isLess = a < b;
```

**Logical Operators:**

```javascript
let and = a && b;
let or = a || b;
let not = !a;
```

**Explanation:**

- Arithmetic operators perform mathematical operations.
- Comparison operators compare values and return boolean results.
- Logical operators combine boolean values.

**Further Reading:**

- [MDN Web Docs - Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

---

## Control Flow

### If Statements

**Basic If Statement:**

```javascript
if (condition) {
  // code to execute if condition is true
}
```

**Explanation:**

- The if statement executes a block of code if the specified condition is true.
- The condition is an expression that evaluates to a boolean value.

**Example:**

```javascript
let age = 18;
if (age >= 18) {
  console.log("You can vote.");
}
```

**Further Reading:**

- [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

### Switch Statements

```javascript
switch (expression) {
  case value1:
    // code if expression == value1
    break;
  case value2:
    // code if expression == value2
    break;
  default:
    // code if no cases match
}
```

**Explanation:**

- The switch statement evaluates an expression and matches it against case clauses.
- If a match is found, it executes the corresponding code block.

**Further Reading:**

- [MDN Web Docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

### Loops

**For Loop:**

```javascript
for (let i = 0; i < array.length; i++) {
  // code to execute
}
```

**Explanation:**

- The for loop iterates over a block of code a specified number of times.

**Further Reading:**

- [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

---

## Functions

### Function Declaration

```javascript
function functionName(parameters) {
  // function body
  return value;
}
```

**Explanation:**

- Function declarations define a reusable block of code.

**Example:**

```javascript
function add(a, b) {
  return a + b;
}
```

**Further Reading:**

- [MDN Web Docs - Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

### Arrow Functions

**Syntax:**

```javascript
const functionName = (parameters) => {
  // function body
  return value;
};
```

**Explanation:**

- Arrow functions provide a concise syntax for writing functions.

**Example:**

```javascript
const greet = name => `Hello, ${name}!`;
```

**Further Reading:**

- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## Arrays

### Array Declaration

```javascript
let arr = [item1, item2, item3];
```

**Explanation:**

- Arrays are used to store multiple values in a single variable.

**Example:**

```javascript
let fruits = ["apple", "banana", "cherry"];
```

**Further Reading:**

- [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Objects

### Object Literals

```javascript
let obj = {
  property1: value1,
  property2: value2,
  method: function() {
    // method code
  }
};
```

**Explanation:**

- Objects are collections of properties and methods.

**Example:**

```javascript
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```

**Further Reading:**

- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## Modern JavaScript Features

### Destructuring

**Array Destructuring:**

```javascript
let [a, b, c] = [1, 2, 3];
```

**Explanation:**

- Destructuring allows for easy extraction of values from arrays and objects.

**Further Reading:**

- [MDN Web Docs - Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## Error Handling

### Try...Catch Blocks

```javascript
try {
  // code that might throw an error
} catch (error) {
  // handle the error
} finally {
  // code that runs regardless of try/catch outcome
}
```

**Explanation:**

- The try...catch statement handles errors in a program.

**Further Reading:**

- [MDN Web Docs - try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

## DOM Manipulation

### Selecting Elements

**ById:**

```javascript
let element = document.getElementById('elementId');
```

**Explanation:**

- DOM manipulation involves interacting with HTML elements through JavaScript.

**Further Reading:**

- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---
