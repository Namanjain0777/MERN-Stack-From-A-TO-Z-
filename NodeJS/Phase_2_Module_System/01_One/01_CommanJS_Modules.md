# 📦 What are CommonJS Modules?
In Node.js, every file is treated as a **module**.

Node uses a module system called:

> **CommonJS**

It allows you to:

* Split code into multiple files
* Import/export functionality
* Keep project clean

---

# 🧠 Why Modules?

Instead of writing everything in one file ❌

We do this:

```
project/
│
├── app.js
├── math.js
```

So code becomes modular & reusable.

---

# 1️⃣ `require()`

👉 `require()` is used to import modules in CommonJS.

Syntax:

```js
const something = require("./fileName");
```

Important:

* Use `./` for local files
* No need to write `.js`

---

## 🔹 Example

### math.js

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

### app.js

```js
const add = require("./math");

console.log(add(2, 3));
```

Output:

```
5
```

🔥 That’s how importing works.

---

# 2️⃣ `module.exports`

👉 Used to export data/functions from a file.

Every file in Node has:

```js
module.exports
```

By default:

```
module.exports = {}
```

You replace it with what you want to export.

---

# 3️⃣ Export Multiple Values

If you try:

```js
module.exports = add;
module.exports = subtract;
```

⚠️ Only last one works (it overrides previous).

So to export multiple things:

---

## ✅ Method 1: Export Object

### math.js

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

---

### app.js

```js
const math = require("./math");

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```

Output:

```
15
5
```

---

## ✅ Method 2: Destructuring (Cleaner)

```js
const { add, subtract } = require("./math");

console.log(add(10, 5));
```

🔥 This is what professionals use.

---

# 4️⃣ Export an Object Directly

You can export an object:

```js
module.exports = {
  name: "Naman",
  age: 21,
  greet() {
    console.log("Hello Bro 🚀");
  }
};
```

Import:

```js
const user = require("./file");

console.log(user.name);
user.greet();
```

---

# 5️⃣ Export Single Function (Shortcut)

Instead of:

```js
function add() {}
module.exports = add;
```

You can write:

```js
module.exports = function(a, b) {
  return a + b;
};
```

---

# 🔥 How Node Internally Wraps Modules

Node automatically wraps every file inside this:

```js
(function(exports, require, module, __filename, __dirname) {
   // your code
});
```

That’s why:

* require works
* module.exports works

---

# 🆚 CommonJS vs ES Modules (Short Intro)

CommonJS:

```js
const x = require("./file");
module.exports = something;
```

ES Modules:

```js
import x from "./file.js";
export default something;
```

Node originally used CommonJS by default.

---

# 🧠 Interview Rapid Fire

### ❓ What is CommonJS?

Node’s default module system.

### ❓ What is require()?

Function used to import modules.

### ❓ What is module.exports?

Object used to export data/functions from a module.

### ❓ How to export multiple functions?

Export them inside an object.

### ❓ Difference between require & import?

require → CommonJS
import → ES Modules

---

# 💡 For You (Backend Structure Tip)

In real backend:

```
controllers/
routes/
models/
middleware/
```

Each file exports something:

Example:

```js
module.exports = router;
```

Then in app.js:

```js
const userRoutes = require("./routes/userRoutes");
```
