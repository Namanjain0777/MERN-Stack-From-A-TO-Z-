
# 🚀 Why MERN Needs ES6+

MERN = MongoDB + Express + React + Node
Ye sab modern JavaScript pe based hain.

### Example React component:

```js
const App = () => {
  return <h1>Hello</h1>;
};
```
Ye pura ES6 hai:
* Arrow function
* const
* Modules (import/export)

Node/Express me:

```js
import express from "express";
```
Ye bhi ES6 module system hai.
👉 Isliye ES6 samjhe bina MERN properly nahi chalega.

---

# 📦 1️⃣ Modules

Pehle old JS me:

```js
<script src="file1.js"></script>
<script src="file2.js"></script>
```
Sab global ho jata tha ❌

ES6 ne diya:
```
Modular system
```
Har file apna module.

---

## 🔹 Default Export

### file1.js

```js
const greet = () => {
    console.log("Hello");
};

export default greet;
```

### file2.js

```js
import greet from "./file1.js";

greet();
```

👉 Default export me:

* Ek hi cheez export hoti hai
* Import karte time naam change kar sakte ho

Example:

```js
import anything from "./file1.js";
```

---

## 🔹 Named Export

### file1.js

```js
export const name = "Naman";
export const age = 22;
```

### file2.js

```js
import { name, age } from "./file1.js";

console.log(name);
```

👉 Named export me:
* Multiple values export kar sakte ho
* Import karte time exact naam use karna padta hai

---

## 🔥 Default vs Named (Interview Table)

| Feature                    | Default   | Named               |
| -------------------------- | --------- | ------------------- |
| Count                      | One       | Multiple            |
| Import name change allowed | ✅ Yes    | ❌ No (unless alias) |
| Curly braces needed        | ❌ No     | ✅ Yes               |

Alias example:

```js
import { name as userName } from "./file1.js";
```

---

# 🧠 2️⃣ Arrow Functions (Deep Understanding)

Normal function:

```js
function add(a, b) {
    return a + b;
}
```

Arrow version:

```js
const add = (a, b) => {
    return a + b;
};
```

Short version:

```js
const add = (a, b) => a + b;
```

---

## 🔥 Most Important Difference

Arrow function ka apna `this` nahi hota.

Example:

```js
const obj = {
    name: "Naman",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined
```

Why?
Arrow `this` outer scope se leta hai.
Normal function me:

```js
greet() {
   console.log(this.name);
}
```
Works fine.

👉 React me arrow functions heavily used hote hain.

---

# 🧠 3️⃣ Short-Circuiting

## 🔹 AND (&&)

```js
true && console.log("Runs");
```

Rule:

```
Left true → right execute
Left false → stop
```

Example:

```js
isLoggedIn && showDashboard();
```

React me:

```js
{isLoggedIn && <Dashboard />}
```

---

## 🔹 OR (||)

```js
let name = inputName || "Guest";
```

Rule:
```
First truthy value return karega
```

---

# 🧠 4️⃣ Optional Chaining (?.)

Problem:

```js
console.log(user.profile.name);
```

Agar profile undefined hua → crash ❌

Solution:

```js
console.log(user?.profile?.name);
```

👉 Agar koi level undefined hai → error nahi aayega
👉 undefined return karega

MERN me API response handle karte time useful.

---

# 🧠 5️⃣ Nullish Coalescing (??)

Difference between `||` and `??`

Example:

```js
let value = 0 || 100;
console.log(value); // 100 ❌
```

Because 0 falsy hai.

With ??:

```js
let value = 0 ?? 100;
console.log(value); // 0 ✅
```

Rule:

```
?? only checks null or undefined
|| checks all falsy values
```

---

# 🔥 Real MERN Example

```js
const username = user?.profile?.name ?? "Guest";
```

---

# 🧠 Final Summary

| Concept        | Use                     |   |                |
| -------------- | ----------------------- | - | -------------- |
| Modules        | File separation         |   |                |
| export default | Single export           |   |                |
| Named export   | Multiple export         |   |                |
| Arrow function | Short syntax            |   |                |
| &&             | Conditional execution   |   |                |
|                |                         |   | Fallback value |
| ?.             | Safe property access    |   |                |
| ??             | Null/undefined fallback |   |                |

---

# 🎯 Interview Golden Line

> ES6 introduced modules, arrow functions, destructuring, and modern syntax that make React and Node cleaner and modular.

---
