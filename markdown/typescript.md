<p align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width="64" height="64" alt="header-image"></p>
<h2 align="center">Typescript</h2>

# TypeScript Cheat Sheet

This cheat sheet provides a comprehensive overview of TypeScript features, syntax, and best practices. Each section includes code snippets with descriptions and links to detailed explanations.

## Table of Contents

1. [Basics](#basics)
   - [Variable Declaration](#variable-declaration)
   - [Data Types](#data-types)
   - [Type Inference](#type-inference)
2. [Advanced Types](#advanced-types)
   - [Union Types](#union-types)
   - [Intersection Types](#intersection-types)
   - [Type Aliases](#type-aliases)
   - [Interfaces](#interfaces)
3. [Functions](#functions)
   - [Function Declarations](#function-declarations)
   - [Arrow Functions](#arrow-functions)
   - [Optional Parameters](#optional-parameters)
   - [Default Parameters](#default-parameters)
   - [Rest Parameters](#rest-parameters)
   - [Function Return Types](#function-return-types)
4. [Generics](#generics)
   - [Generic Functions](#generic-functions)
   - [Generic Interfaces](#generic-interfaces)
5. [Type Assertions and Casting](#type-assertions-and-casting)
   - [Type Assertion](#type-assertion)
   - [Type Casting](#type-casting)
6. [Arrays and Tuples](#arrays-and-tuples)
   - [Arrays](#arrays)
   - [Tuples](#tuples)
7. [Enums](#enums)
   - [Numeric Enums](#numeric-enums)
   - [String Enums](#string-enums)
8. [Classes and OOP](#classes-and-oop)
   - [Class Declaration](#class-declaration)
   - [Inheritance](#inheritance)
   - [Abstract Classes](#abstract-classes)
   - [Interfaces in OOP](#interfaces-in-oop)
9. [Advanced OOP](#advanced-oop)
   - [Mixins](#mixins)
   - [Decorators](#decorators)
10. [Async Programming](#async-programming)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
    - [Error Handling](#error-handling)
11. [Utility Types](#utility-types)
    - [Pick](#pick)
    - [Omit](#omit)
    - [Partial](#partial)
    - [Record](#record)
12. [Type Guards and Assertions](#type-guards-and-assertions)
    - [Type Guards](#type-guards)
    - [Assertion Functions](#assertion-functions)
13. [String Manipulation](#string-manipulation)
    - [Template Literals](#template-literals)
    - [String Methods](#string-methods)
14. [Regular Expressions](#regular-expressions)
    - [Regex Syntax](#regex-syntax)
    - [String Matching](#string-matching)
15. [Modules and Packages](#modules-and-packages)
    - [Import/Export](#importexport)
    - [Namespaces](#namespaces)
16. [Error Handling](#error-handling)
    - [Try/Catch](#trycatch)
    - [Custom Errors](#custom-errors)
17. [Testing with TypeScript](#testing-with-typescript)
    - [Setting Up Jest](#setting-up-jest)
    - [Writing Tests](#writing-tests)
18. [Best Practices](#best-practices)
    - [Naming Conventions](#naming-conventions)
    - [Code Organization](#code-organization)
    - [Performance Optimization](#performance-optimization)
19. [References](#references)

---

## Basics

### Variable Declaration

```typescript
let message: string = 'Hello, TypeScript!';
const PI: number = 3.1415;
var count: number = 0; // Avoid using 'var'; prefer 'let' or 'const'
```

- `let` and `const` are block-scoped; `var` is function-scoped.
- Use `const` for immutable variables.

### Data Types

```typescript
let isDone: boolean = false;
let age: number = 30;
let name: string = 'Alice';
let sym: symbol = Symbol('symbol');
let obj: object = { key: 'value' };
let arr: any[] = [1, 'two', true];
let nullable: string | null = null;
```

- TypeScript supports various data types, including primitive and complex types.
- `any` type can hold any value, but it's best to avoid it for better type safety.

### Type Inference

```typescript
let inferredString = 'TypeScript'; // inferred as string
let inferredArray = [1, 2, 3]; // inferred as number[]
```

- TypeScript infers the type of a variable based on its initial value.

---

## Advanced Types

### Union Types

```typescript
let value: string | number = 'TypeScript';
value = 42; // Valid
```

- A variable can be one of several types.

### Intersection Types

```typescript
interface Animal {
  name: string;
}

interface Bird {
  fly(): void;
}

let parrot: Animal & Bird = {
  name: 'Polly',
  fly() {
    console.log('Flying');
  }
};
```

- Combines multiple interfaces into one.

### Type Aliases

```typescript
type Point = { x: number; y: number };

let coords: Point = { x: 10, y: 20 };
```

- Creates a new name for an existing type.

### Interfaces

```typescript
interface Person {
  name: string;
  age?: number; // Optional property
}

let user: Person = { name: 'John' }; // Valid
```

- Defines a contract for object shapes.

---

## Functions

### Function Declarations

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

- Function with parameters and return type.

### Arrow Functions

```typescript
const multiply = (a: number, b: number): number => a * b;
```

- Concise function syntax.

### Optional Parameters

```typescript
function greet(name: string, greeting?: string) {
  console.log(`${greeting || 'Hello'} ${name}!`);
}
```

- Parameters with default values are optional.

### Default Parameters

```typescript
function greet(name: string, greeting: string = 'Hello') {
  console.log(`${greeting} ${name}!`);
}
```

- Provides default values for function parameters.

### Rest Parameters

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

- Allows a function to accept a variable number of arguments.

### Function Return Types

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function log(message: string): void {
  console.log(message);
}
```

- `void` for functions that don't return a value.
- `never` for functions that never return.

---

## Generics

### Generic Functions

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>('TypeScript');
```

- Creates reusable functions that can work with any type.

### Generic Interfaces

```typescript
interface GenericMap<T> {
  set(key: string, value: T): void;
  get(key: string): T | undefined;
}

class StringMap implements GenericMap<string> {
  private data: { [key: string]: string } = {};

  set(key: string, value: string): void {
    this.data[key] = value;
  }

  get(key: string): string | undefined {
    return this.data[key];
  }
}
```

- Defines interfaces that can work with any type.

---

## Type Assertions and Casting

### Type Assertion

```typescript
let element = document.getElementById('id') as HTMLInputElement;
element.value = 'Hello';
```

- Tells the compiler that the variable is of a specific type.

### Type Casting

```typescript
let element = <HTMLInputElement>document.getElementById('id');
element.value = 'Hello';
```

- Alternative syntax for type assertion using angle brackets.

---

## Arrays and Tuples

### Arrays

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['TypeScript', 'JavaScript'];
```

- Arrays can be defined using array type syntax or generics.

### Tuples

```typescript
let person: [string, number] = ['Alice', 30];
```

- Fixed-size arrays with typed elements.

---

## Enums

### Numeric Enums

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // Output: 0
```

- Enum values are numbered starting from 0.

### String Enums

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

console.log(Direction.Up); // Output: 'UP'
```

- Enum values can be strings.

---

## Classes and OOP

### Class Declaration

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('TypeScript');
console.log(greeter.greet());
```

- Defines a class with properties and methods.

### Inheritance

```typescript
class Animal {
  move() {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

let dog = new Dog();
dog.move();
dog.bark();
```

- Subclasses inherit properties and methods from the base class.

### Abstract Classes

```typescript
abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

let dog = new Dog();
dog.makeSound();
dog.move();
```

- Abstract classes cannot be instantiated and are meant to be extended.

### Interfaces in OOP

```typescript
interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  drive() {
    console.log('Driving...');
  }
}
```

- Classes can implement interfaces to adhere to a contract.

---

## Advanced OOP

### Mixins

```typescript
function Loggable<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    log(message: string) {
      console.log(message);
    }
  };
}

@Loggable
class MyClass {
  constructor() {
    this.log('Hello, mixins!');
  }
}

let myInstance = new MyClass();
```

- Mixins allow for the addition of methods to a class.

### Decorators

```typescript
function Log(target: any, propertyName: string) {
  let originalMethod = target[propertyName];

  target[propertyName] = function (...args: any[]) {
    console.log(`Calling ${propertyName}`);
    return originalMethod.apply(this, args);
  };
}

class Greeter {
  @Log
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

let greeter = new Greeter();
greeter.greet('TypeScript');
```

- Decorators modify the behavior of classes, methods, or properties.

---

## Async Programming

### Promises

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 1000);
  });
}

fetchData().then(data => console.log(data));
```

- Represents the eventual completion (or failure) of an asynchronous operation.

### Async/Await

```typescript
async function fetchAndProcessData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchAndProcessData();
```

- Simplifies async code by using async functions and await keyword.

### Error Handling

```typescript
async function example() {
  try {
    await someAsyncFunction();
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Cleanup code here.');
  }
}
```

- Use try/catch for error handling in async functions.

---

## Utility Types

### Pick

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonPartial = Pick<Person, 'name' | 'age'>;

let person: PersonPartial = { name: 'Alice', age: 30 };
```

- Picks a subset of properties from a type.

### Omit

```typescript
type PersonWithoutAddress = Omit<Person, 'address'>;

let person: PersonWithoutAddress = { name: 'Alice', age: 30 };
```

- Omits specified properties from a type.

### Partial

```typescript
type PartialPerson = Partial<Person>;

let person: PartialPerson = { name: 'Alice' };
```

- Makes all properties of a type optional.

### Record

```typescript
type StringDictionary = Record<string, string>;

let dict: StringDictionary = { key1: 'value1', key2: 'value2' };
```

- Creates an object type with keys of a specific type and values of another type.

---

## Type Guards and Assertions

### Type Guards

```typescript
function isString(value: any): value is string {
  return typeof value === 'string';
}

function logValue(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}
```

- narrows down the type of a variable within a scope.

### Assertion Functions

```typescript
function assertIsNumber(value: any): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('Value is not a number');
  }
}

function square(value: any) {
  assertIsNumber(value);
  return value * value;
}
```

- Ensures that a value is of a certain type, throwing an error if not.

---

## String Manipulation

### Template Literals

```typescript
const name = 'TypeScript';
const message = `Hello, ${name}!`;
console.log(message); // Output: Hello, TypeScript!
```

- Allows embedding expressions within string literals.

### String Methods

```typescript
const str = 'Hello, TypeScript!';

console.log(str.length); // Output: 18
console.log(str.toUpperCase()); // Output: HELLO, TYPESCRIPT!
console.log(str.startsWith('Hello')); // Output: true
```

- Various methods for manipulating and querying strings.

---

## Regular Expressions

### Regex Syntax

```typescript
const pattern = /\d+/g; // Matches one or more digits globally
```

- Regular expressions for pattern matching in strings.

### String Matching

```typescript
const str = 'The price is 100 dollars.';
const result = str.match(/\d+/);
console.log(result); // Output: ['100']
```

- Uses regex to search for patterns in strings.

---

## Modules and Packages

### Import/Export

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';
console.log(add(2, 3)); // Output: 5
```

- Organizes code into modules and exports/import functions and types.

### Namespaces

```typescript
namespace Utils {
  export function formatNumber(num: number): string {
    return num.toFixed(2);
  }
}

console.log(Utils.formatNumber(123.456)); // Output: 123.46
```

- Groups related code under a single namespace.

---

## Error Handling

### Try/Catch

```typescript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that runs regardless of error
}
```

- Catches and handles errors in synchronous code.

### Custom Errors

```typescript
class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyError';
  }
}

throw new MyError('An error occurred.');
```

- Creates custom error classes for specific error handling.

---

## Testing with TypeScript

### Setting Up Jest

```typescript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

// package.json
{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^27.0.0",
    "ts-jest": "^27.0.0"
  }
}
```

- Configures Jest for TypeScript testing.

### Writing Tests

```typescript
// sum.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// sum.test.ts
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

- Writes unit tests for TypeScript functions.

---

## Best Practices

### Naming Conventions

- Use camelCase for variables and functions.
- Use PascalCase for classes and interfaces.
- Use uppercase for constants.

### Code Organization

- Keep files and modules small and focused.
- Use interfaces and types to clarify code intent.
- Avoid large, complex functions; prefer smaller, reusable functions.

### Performance Optimization

- Avoid unnecessary computations inside loops.
- Use built-in methods optimized for performance.
- Minimize type assertions and casts for better type safety.

---

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

This cheat sheet is designed to be a quick reference for TypeScript developers. Each section provides essential information and examples to help you write clean, maintainable, and type-safe code. Happy coding!