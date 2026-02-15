

# 6️⃣ Built-in Modules Overview

---

# 1️⃣ `fs` (File System)

👉 Used to work with files (read, write, delete, update)

Import:

```js
import fs from "fs";
```

---

## 🔹 Read File (Async - Recommended)

```js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 🔹 Write File

```js
fs.writeFile("data.txt", "Hello Bro 🚀", (err) => {
  if (err) throw err;
  console.log("File written");
});
```

---

## 🔹 Sync Version (Blocking ❌)

```js
const data = fs.readFileSync("data.txt", "utf8");
console.log(data);
```

⚠️ Sync blocks event loop — avoid in production.

---

### 🔥 Used In:

* Logging
* File uploads
* Reading JSON configs
* Working with images

---

# 2️⃣ `path`

👉 Helps handle file & directory paths properly (cross-platform safe)

Import:

```js
import path from "path";
```

---

## 🔹 Join Paths (Very Important)

```js
const filePath = path.join("folder", "data.txt");
console.log(filePath);
```

Automatically adds correct slashes:

* Windows → `\`
* Linux/Mac → `/`

---

## 🔹 Get Extension

```js
path.extname("app.js"); // .js
```

---

## 🔹 Get File Name

```js
path.basename("/folder/app.js"); // app.js
```

---

### 🔥 Used In:

* Static file serving
* Upload paths
* Express apps

---

# 3️⃣ `os`

👉 Gives operating system info.

Import:

```js
import os from "os";
```

---

## 🔹 Get CPU Info

```js
console.log(os.cpus());
```

---

## 🔹 Get Free Memory

```js
console.log(os.freemem());
```

---

## 🔹 Get Platform

```js
console.log(os.platform());
```

---

### 🔥 Used In:

* Monitoring
* Server diagnostics
* Logging system info

---

# 4️⃣ `events`

👉 Used to create custom event systems.

Node internally uses event-driven architecture.

Import:

```js
import EventEmitter from "events";
```

---

## 🔹 Create Event

```js
const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello Naman 🚀");
});

emitter.emit("greet");
```

Output:

```
Hello Naman 🚀
```

---

### 🔥 Used In:

* Real-time apps
* Chat systems
* Internal event handling

---

# 5️⃣ `http`

👉 Used to create raw HTTP servers (before Express).

Import:

```js
import http from "http";
```

---

## 🔹 Create Basic Server

```js
const server = http.createServer((req, res) => {
  res.write("Hello Backend 🚀");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Visit:

```
http://localhost:3000
```

---

### 🔥 Important

Express is built on top of `http` module.

So:

> Express = Wrapper around http

---

# 🧠 Interview Rapid Fire

### ❓ What is fs module?

Used for file system operations.

### ❓ Difference between readFile & readFileSync?

Async vs Blocking.

### ❓ Why use path.join?

For cross-platform safe path building.

### ❓ What is EventEmitter?

Core class for event-driven architecture.

### ❓ What does http module do?

Creates HTTP servers in Node.

---

# 🔥 Real Backend Usage Summary

| Module | Real Use Case        |
| ------ | -------------------- |
| fs     | File uploads, logs   |
| path   | File path handling   |
| os     | System monitoring    |
| events | Custom event systems |
| http   | Server creation      |

---
