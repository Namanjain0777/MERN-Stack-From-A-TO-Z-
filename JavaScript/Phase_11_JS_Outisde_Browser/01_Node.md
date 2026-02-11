
Most beginners think:

> “JavaScript toh JavaScript hai… browser ho ya backend.”

❌ Wrong.

---

# 🚨 Browser JS ≠ Node.js JS

Browser me:

```js
document.getElementById("box");
```

Node.js me:

```js
document // ❌ Error
```

Because:

```
Browser JS = JS + Browser APIs (DOM, window, document)
Node.js = JS + Server APIs (fs, process, http)
```

Same language.
Different runtime.

---

# 🧠 What is Node.js?

Node.js =
👉 JavaScript runtime built on Chrome’s V8 engine
👉 JS ko browser ke bahar run karne deta hai

Example:

```bash
node app.js
```

Browser ki zarurat nahi.

---

# ⚙️ V8 Engine

V8 = Google Chrome ka JavaScript engine.

Kaam kya karta hai?

```
JS code → Machine code convert karta hai
```

Node.js bhi V8 use karta hai.

So:

```
Browser JS → V8
Node.js → V8
```

Difference engine ka nahi,
Difference environment ka hai.

---

# 🌍 Global Objects (Node vs Browser)

Browser me global object = `window`

Node me global object = `global`

---

## 🔥 Important Node Global Objects

---

## 1️⃣ process

Current running Node process ka info deta hai.

Example:

```js
console.log(process.version);
console.log(process.platform);
```

Arguments:

```js
console.log(process.argv);
```

---

## 2️⃣ __dirname

Current file ka folder path deta hai.

```js
console.log(__dirname);
```

Very useful for:

* Serving static files
* Reading files

---

## 3️⃣ __filename

Current file ka full path.

```js
console.log(__filename);
```

---

# 🧠 require vs import

Node me 2 module systems hote hain.

---

## 🔹 require (CommonJS - Old)

```js
const fs = require("fs");
```

Export:

```js
module.exports = greet;
```

---

## 🔹 import (ES Modules - Modern)

```js
import fs from "fs";
```

Export:

```js
export default greet;
```

---

# 🆚 require vs import (Interview Table)

| require              | import          |
| -------------------- | --------------- |
| CommonJS             | ES Modules      |
| Synchronous          | Static          |
| Node default (older) | Modern standard |
| module.exports       | export          |

---

# 🌱 Environment Variables

Backend me secrets store karte hain:

* Database password
* JWT secret
* API keys

Never hardcode:

```js
const password = "123456"; ❌
```

Use environment variables:

---

## Example

Terminal me:

```bash
export PORT=5000
```

Access in Node:

```js
console.log(process.env.PORT);
```

---

## Best Practice (dotenv package)

Install:

```bash
npm install dotenv
```

.env file:

```
PORT=5000
SECRET_KEY=mysecret
```

app.js:

```js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.SECRET_KEY);
```

---

# 🧠 Why This is VERY IMPORTANT for MERN

Because:

* React → browser environment
* Express → Node environment
* Backend me `document` nahi hota
* Backend me `process.env` hota hai

---

# 🔥 Real Example

React:

```js
document.querySelector("#app");
```

Node:

```js
app.listen(process.env.PORT);
```

Completely different environment.

---

# 🎯 Interview Perfect Answers

### What is Node.js?

> A JavaScript runtime that allows JS to run outside the browser.

### What is V8?

> JavaScript engine that compiles JS into machine code.

### Why no document in backend?

> Because DOM APIs exist only in browser environment.

### What is process?

> A global object in Node that gives information about current running program.

---

# 🧠 Golden Rule

```
Same language.
Different runtime.
Different powers.
```

