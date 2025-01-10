<p align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width="64" height="64" alt="header-image"></p>
<h2 align="center">NodeJS Cheat Sheet</h2>

# Comprehensive Node.js Cheat Sheet Guide

This cheat sheet provides a collection of Node.js code snippets with descriptions and explanations. Use the table of contents to navigate to different sections.

---

## Table of Contents

1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Core Modules](#core-modules)
   - [File System (fs)](#file-system-fs)
   - [HTTP Module](#http-module)
   - [Path Module](#path-module)
   - [OS Module](#os-module)
   - [Events Module](#events-module)
3. [Package Management with npm](#package-management-with-npm)
4. [Asynchronous Programming](#asynchronous-programming)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async/Await](#asyncawait)
5. [Working with Modules](#working-with-modules)
6. [File System Operations](#file-system-operations)
7. [HTTP Server and Client](#http-server-and-client)
8. [Error Handling](#error-handling)
9. [Common NPM Packages](#common-npm-packages)
10. [Environment Variables](#environment-variables)
11. [Command Line Tools](#command-line-tools)
12. [Debugging](#debugging)

---

## Introduction to Node.js

- **What is Node.js?**
  - A JavaScript runtime built on Chrome's V8 engine.
- **Why is it used?**
  - Enables server-side execution of JavaScript.
- **Brief History:**
  - Created by Ryan Dahl in 2009.

---

## Core Modules

### File System (fs)

- **Reading a file:**

  ```javascript
  const fs = require('fs');
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  ```

- **Writing to a file:**

  ```javascript
  const fs = require('fs');
  fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been saved.');
  });
  ```

### HTTP Module

- **Creating a server:**

  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  ```

---

## Package Management with npm

- **Installing a package:**

  ```bash
  npm install express
  ```

- **Adding a script to package.json:**

  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```

---

## Asynchronous Programming

### Callbacks

- **Using callbacks:**

  ```javascript
  function doSomething(callback) {
    // do something
    callback(err, data);
  }
  ```

### Promises

- **Using promises:**

  ```javascript
  function doSomething() {
    return new Promise((resolve, reject) => {
      // do something
      resolve(data);
    });
  }
  ```

### Async/Await

- **Using async/await:**

  ```javascript
  async function doSomething() {
    try {
      const data = await someAsyncFunction();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  ```

---

## Working with Modules

- **Creating a module (math.js):**

  ```javascript
  exports.add = (a, b) => a + b;
  exports.subtract = (a, b) => a - b;
  ```

- **Requiring and using the module:**

  ```javascript
  const math = require('./math');
  console.log(math.add(2, 3)); // 5
  ```

---

## File System Operations

- **Common operations include reading from and writing to files.**
- **Error handling in file operations is crucial.**

---

## HTTP Server and Client

- **Making HTTP requests using Node.js:**
  - Use modules like `http` or `axios` for requests.

---

## Error Handling

- **Handling errors in callbacks:**

  ```javascript
  fs.readFile('nonexistentfile.txt', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log(data);
  });
  ```

- **Handling errors with promises:**

  ```javascript
  fs.promises.readFile('nonexistentfile.txt')
    .then(data => console.log(data))
    .catch(err => console.error('Error reading file:', err));
  ```

- **Handling errors with async/await:**

  ```javascript
  async function readFile() {
    try {
      const data = await fs.promises.readFile('nonexistentfile.txt');
      console.log(data);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  }
  ```

---

## Common NPM Packages

### Express.js

- **Installing Express:**

  ```bash
  npm install express
  ```

- **Creating a basic server:**

  ```javascript
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  ```

---

## Environment Variables

- **Setting environment variables:**

  ```bash
  export API_KEY='your_api_key'
  ```

- **Accessing in Node.js:**

  ```javascript
  const apiKey = process.env.API_KEY;
  ```

---

## Command Line Tools

- **Using Node.js from the command line:**
  - Execute scripts, use built-in utilities.

---

## Debugging

- **Using the built-in debugger:**

  ```bash
  node inspect app.js
  ```

- **Setting breakpoints and stepping through code.**

---

This cheat sheet provides a comprehensive reference to essential Node.js concepts and functions. Use it as a handy guide while developing Node.js applications.
