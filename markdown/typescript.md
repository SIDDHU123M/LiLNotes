# TypeScript Cheatsheet 💻🚀
===============================

Contents
--------
**TypeScript Types:**
- **[`Basic Types`](#basic-types)**, **[`Arrays`](#arrays)**, **[`Tuples`](#tuples)**
- **[`Enums`](#enums)**, **[`Any`](#any)**, **[`Void`](#void)**, **[`Null and Undefined`](#null-and-undefined)**

**TypeScript Basics:**
- **[`Variables`](#variables)**, **[`Functions`](#functions)**, **[`Interfaces`](#interfaces)**
- **[`Classes`](#classes)**, **[`Generics`](#generics)**, **[`Type Assertions`](#type-assertions)**

**Advanced TypeScript:**
- **[`Union Types`](#union-types)**, **[`Intersection Types`](#intersection-types)**, **[`Mapped Types`](#mapped-types)**
- **[`Conditional Types`](#conditional-types)**, **[`Namespaces`](#namespaces)**, **[`Modules`](#modules)**

Basic Types
-----------
**TypeScript has several basic types that can be used to define variables.**
```typescript
let isDone: boolean = false; // boolean
let decimal: number = 6;     // number
let color: string = "blue";  // string
```

```typescript
// Special Types
let notSure: any = 4;        // any
notSure = "maybe a string";  // still okay
notSure = false;             // still okay

let nothing: void = undefined; // void
```

Arrays
------
**Arrays can be defined using the type followed by `[]` or using the `Array<type>` syntax.**
```typescript
let list: number[] = [1, 2, 3]; // Array of numbers
let list2: Array<string> = ["a", "b", "c"]; // Array of strings
```

Tuples
-------
**Tuples allow you to express an array with a fixed number of elements whose types are known.**
```typescript
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'.
```

Enums
-----
**Enums allow you to define a set of named constants.**
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // 1
```

Any
----
**The `any` type allows you to opt-out of type-checking.**
```typescript
let notSure: any = 4;
notSure = "could be a string";
notSure = false; // okay
```

Void
-----
**The `void` type is used on function return types to signify that the function does not return a value.**
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

Null and Undefined
-------------------
**In TypeScript, `null` and `undefined` are subtypes of all other types.**
```typescript
let u: undefined = undefined;
let n: null = null;
```

Variables
---------
**Variables can be declared using `let`, `const`, or `var`.**
```typescript
let x: number = 10; // mutable
const y: number = 20; // immutable
var z: number = 30; // function-scoped
```

Functions
---------
**Functions can have typed parameters and return types.**
```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

Interfaces
----------
**Interfaces define the structure of an object.**
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

Classes
-------
**Classes can implement interfaces and have access modifiers.**
```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let dog = new Animal("Dog");
console.log(dog.getName()); // Dog
```

Generics
--------
**Generics allow you to create reusable components.**
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString"); // output is of type 'string'
```

Type Assertions
---------------
**Type assertions allow you to override TypeScript's inferred type.**
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length; // using 'as' syntax
```

Union Types
-----------
**Union types allow a variable to hold multiple types.**
```typescript
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
```

Intersection Types
------------------
**Intersection types combine multiple types into one.**
```typescript
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let e: EmployeePerson = {
    name: "John",
    employeeId: 123
};
```

Mapped Types
------------
**Mapped types allow you to create new types based on existing ones.**
```typescript
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

type Person = {
    name: string;
    age: number;
};

type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }
```

Conditional Types
-----------------
**Conditional types allow you to express non-uniform type mappings.**
```typescript
type IsString<T> = T extends string ? "Yes" : "No";
type Result = IsString<number>; // "No"
```

Namespaces
----------
**Namespaces are a way to organize code in TypeScript.**
```typescript
namespace MyNamespace {
    export class MyClass {
        // ...
    }
}

let myClassInstance = new MyNamespace.MyClass();
```

Modules
-------
**Modules are a way to encapsulate code and manage dependencies.**
```typescript
// In file myModule.ts
export function myFunction() {
    // ...
}

// In another file
import { myFunction } from './myModule';
```