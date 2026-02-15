

# Reading Files in Node.js

Node uses the built-in **`fs` (File System)** module.

---

# 1️⃣ `fs.readFile()` (Asynchronous ✅ Recommended)

👉 Non-blocking
👉 Does NOT block the event loop
👉 Best for production

---

## 🔹 Syntax

```js
fs.readFile(path, options, callback);
```

---

## 🔹 Example

### Using ES Modules

```js
import fs from "fs";

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File content:");
  console.log(data);
});

console.log("This runs first 🚀");
```

---

### 🔥 Output Flow

```
This runs first 🚀
File content:
Hello World
```

Why?

Because:

* File reading happens in background
* Event loop continues execution
* Callback runs when file is ready

---

# 2️⃣ `fs.readFileSync()` (Synchronous ❌ Blocking)

👉 Blocking
👉 Stops entire program until file is read
👉 Avoid in real servers

---

## 🔹 Example

```js
import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
console.log("This runs after file reading");
```

---

### 🔥 Execution Flow

```
Hello World
This runs after file reading
```

Here:

* Code waits
* Nothing else runs
* Event loop blocked

---

# 🧠 Difference Between readFile vs readFileSync

| Feature            | readFile     | readFileSync       |
| ------------------ | ------------ | ------------------ |
| Type               | Asynchronous | Synchronous        |
| Blocks Event Loop? | ❌ No         | ✅ Yes              |
| Performance        | Better       | Slower in server   |
| Recommended for    | Production   | Small scripts only |

---

# 🔥 Why Async is Important in Backend?

Imagine:

1000 users hit your API
If you use `readFileSync()`:

🚨 Every request blocks server

If you use `readFile()`:

⚡ Requests handled efficiently

That’s why Node is powerful:

* Non-blocking I/O
* Event loop
* Async operations

---

# 🧪 Reading JSON File (Common Backend Task)

### data.json

```json
{
  "name": "Naman",
  "age": 21
}
```

---

### Read JSON

```js
import fs from "fs";

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;

  const parsedData = JSON.parse(data);
  console.log(parsedData.name);
});
```

---

# 🚀 Modern Way (Using Promises)

Node also supports:

```js
import fs from "fs/promises";

const data = await fs.readFile("data.txt", "utf8");
console.log(data);
```

🔥 Cleaner for real backend projects.

---

# 🧠 Interview Questions

### ❓ Why should we avoid readFileSync in server?

Because it blocks the event loop and reduces performance.

### ❓ What is non-blocking I/O?

File operation runs in background and does not block main thread.

### ❓ When can we use readFileSync?

In small scripts or CLI tools.

---

# 💡 Pro Backend Tip For You

Since you're building backend projects:

Use:

```js
import fs from "fs/promises";
```

With:

```js
async/await
```

Much cleaner + modern.

---

