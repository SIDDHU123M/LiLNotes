# Ultimate Master Node.js Cheat Sheet

## Table of Contents
1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Setting Up Node.js](#setting-up-nodejs)
3. [Basic Syntax](#basic-syntax)
4. [Modules and Require](#modules-and-require)
5. [NPM (Node Package Manager)](#npm-node-package-manager)
6. [File System Module](#file-system-module)
7. [HTTP Module](#http-module)
8. [Events Module](#events-module)
9. [Streams](#streams)
10. [Buffers](#buffers)
11. [Error Handling](#error-handling)
12. [Debugging](#debugging)
13. [Asynchronous Programming](#asynchronous-programming)
14. [Express.js Framework](#expressjs-framework)
15. [Middleware](#middleware)
16. [Routing](#routing)
17. [Database Integration](#database-integration)
18. [Authentication](#authentication)
19. [Security Best Practices](#security-best-practices)
20. [Testing](#testing)
21. [Deployment](#deployment)
22. [Advanced Topics](#advanced-topics)

---

## Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it lightweight and efficient.

**Key Features:**
- **Event-Driven & Non-Blocking I/O:** Efficient for handling multiple connections.
- **JavaScript Runtime:** Uses JavaScript both on the server and client side.
- **Asynchronous Programming:** Handles operations without blocking the event loop.

```javascript
console.log('Hello, Node.js!');
```

---

## Setting Up Node.js

### Installation

**Windows, macOS, Linux:**
- Download from [Node.js Official Website](https://nodejs.org/).
- Run the installer and follow the instructions.

**Using nvm (Node Version Manager):**

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install a specific Node.js version
nvm install 16.0.0
```

---

## Basic Syntax

### Variable Declarations

```javascript
let name = 'Node.js';
const version = '16.0.0';
```

### Functions

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('World'));
```

### ES6+ Features

```javascript
// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Destructuring
const [x, y] = [1, 2];
console.log(x, y); // 1 2
```

---

## Modules and Require

### Creating a Module

**myModule.js:**

```javascript
module.exports = {
    greet: function(name) {
        return `Hello, ${name}!`;
    }
};
```

### Using a Module

**app.js:**

```javascript
const myModule = require('./myModule');
console.log(myModule.greet('Node.js'));
```

---

## NPM (Node Package Manager)

### Installing Packages

```bash
# Install a package locally
npm install express

# Install a package globally
npm install -g nodemon
```

### Managing Dependencies

**package.json:**

```json
{
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

---

## File System Module

### Reading a File

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Writing to a File

```javascript
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});
```

---

## HTTP Module

### Creating a Server

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

## Events Module

### EventEmitter

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

myEmitter.emit('event');
```

---

## Streams

### Piping Streams

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

---

## Buffers

### Handling Binary Data

```javascript
const buf = Buffer.from('Hello, Node.js!');
console.log(buf.toString('utf8')); // Hello, Node.js!
```

---

## Error Handling

### Try-Catch for synchronous code

```javascript
try {
    // Synchronous code that may throw an error
} catch (error) {
    console.error(error);
}
```

### Error First Callbacks

```javascript
fs.readFile('nonexistent.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

---

## Debugging

### Using Node Inspector

```bash
node inspect app.js
```

### Using VS Code Debugger

- Set up launch configuration in `launch.json`.
- Use `debugger;` statements in code.

---

## Asynchronous Programming

### Callbacks

```javascript
fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Promises

```javascript
const fs = require('fs').promises;

fs.readFile('file.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

### Async/Await

```javascript
async function readFile() {
    try {
        const data = await fs.readFile('file.txt');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile();
```

---

## Express.js Framework

### Setting Up a Basic Server

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

## Middleware

### Custom Middleware

```javascript
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
```

### Error Handling Middleware

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

---

## Routing

### Route Parameters

```javascript
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```

### Query Parameters

```javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});
```

---

## Database Integration

### MongoDB Example

```javascript
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    const db = client.db(dbName);
    console.log('Database connected!');
    client.close();
});
```

---

## Authentication

### JWT-Based Authentication

```javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = { userId: user.id };
    const token = jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
    return token;
}
```

---

## Security Best Practices

### Input Validation

```javascript
const express = require('express');
const { body, validationResult } = require('express-validator');

app.post('/register', [
    body('username').isAlphanumeric(),
    body('password').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Proceed with registration
});
```

---

## Testing

### Unit Testing with Mocha and Chai

**test.js:**

```javascript
const assert = require('chai').assert;
const sum = require('./sum');

describe('Sum function', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(sum(1, 2), 3);
    });
});
```

---

## Deployment

### Deploying to Heroku

```bash
heroku create my-node-app
git push heroku master
heroku open
```

### Using PM2

```bash
npm install pm2 -g
pm2 start app.js
pm2 save
```

---

## Advanced Topics

### Clustering

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const server = http.createServer((req, res) => {
        res.end('Hello, World!');
    });
    server.listen(3000);
}
```
