
# 🧠 What is `process`?

`process` is a global object that provides:

* Environment info
* Command line arguments
* Memory usage
* Exit control
* Event handling

Try this:

```js
console.log(process);
```

It prints huge object 😄

---

# 1️⃣ `process.argv`

👉 Returns command line arguments.

---

## 🔹 Example

Create file:

```js
// app.js
console.log(process.argv);
```

Run in terminal:

```bash
node app.js hello world
```

Output:

```js
[
  '/path/to/node',
  '/path/to/app.js',
  'hello',
  'world'
]
```

---

## 🧠 Meaning

| Index | Value                 |
| ----- | --------------------- |
| 0     | Node path             |
| 1     | File path             |
| 2+    | Your custom arguments |

---

## 🔥 Real Example (CLI Tool)

```js
const name = process.argv[2];

console.log(`Hello ${name}`);
```

Run:

```bash
node app.js Naman
```

Output:

```
Hello Naman
```

🔥 This is how CLI tools work.

---

# 2️⃣ `process.env`

👉 Contains environment variables.

Very important in backend.

---

## 🔹 Example

```js
console.log(process.env);
```

You’ll see:

* PATH
* USER
* OS variables
* etc.

---

## 🔥 Using Custom Env Variables

In terminal:

### Windows (PowerShell)

```bash
setx PORT 5000
```

### Mac/Linux

```bash
export PORT=5000
```

Then:

```js
console.log(process.env.PORT);
```

---

## 🔥 Real Backend Example

```js
const PORT = process.env.PORT || 3000;

server.listen(PORT);
```

This is production practice.

---

# ⚠️ In Real Projects We Use dotenv

Install:

```bash
npm install dotenv
```

Create `.env` file:

```
PORT=5000
DB_URL=mongodb://localhost:27017
```

In app.js:

```js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORT);
```

🔥 Now your secrets are secure.

Never push `.env` to GitHub.

---

# 3️⃣ `process.exit()`

👉 Immediately stops Node process.

---

## 🔹 Example

```js
console.log("Before exit");

process.exit(0);

console.log("After exit");
```

Output:

```
Before exit
```

Program stops.

---

## 🧠 Exit Codes

| Code | Meaning |
| ---- | ------- |
| 0    | Success |
| 1    | Failure |

Example:

```js
process.exit(1);
```

Used in:

* Crash handling
* Production shutdown
* Fatal errors

---

# 🧠 Real Production Error Handling

```js
process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});
```

🔥 Proper backend safety.

---

# 🧠 Bonus Useful Properties

```js
process.cwd()        // Current working directory
process.pid          // Process ID
process.memoryUsage()// Memory info
process.version      // Node version
```

---

# 🧠 Interview Questions

### ❓ What is process.argv?

Array of command line arguments.

### ❓ What is process.env?

Object containing environment variables.

### ❓ Why use process.env in backend?

To store secrets & config securely.

### ❓ What does process.exit(1) mean?

Terminate program with failure.

---

# 🏆 You Now Understand:

✅ process object
✅ process.argv
✅ process.env
✅ process.exit
✅ CLI tools concept
✅ Environment variables

---
