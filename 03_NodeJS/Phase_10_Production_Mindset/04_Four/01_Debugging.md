**real developer mode** 😎

Debugging is what separates:

🧒 “I think this works”
from

🧠 “I KNOW what’s happening inside my code.”

Let’s go step-by-step.

---

# 🧠 What is Debugging?

Debugging means:

> Running code step-by-step to inspect values, flow, and errors.

Instead of:

```js
console.log("Check here");
```

You can:

* Pause execution
* Inspect variables
* Watch memory
* Step line by line

---

# 🚀 1️⃣ Debugging with `node inspect` (CLI Debugger)

Node has built-in debugger.

---

## 🔹 Run Debug Mode

```bash
node inspect app.js
```

It starts interactive debugging session.

---

## 🔹 Useful Commands

| Command        | Meaning        |
| -------------- | -------------- |
| `n`            | Next line      |
| `c`            | Continue       |
| `repl`         | Enter REPL     |
| `watch('var')` | Watch variable |
| `bt`           | Backtrace      |

---

## 🔥 Add `debugger` Statement

Put this inside your code:

```js
function add(a, b) {
  debugger;
  return a + b;
}

add(5, 3);
```

Run:

```bash
node inspect app.js
```

Execution pauses at `debugger`.

---

# 🚀 2️⃣ Modern Way → `--inspect`

Better way:

```bash
node --inspect app.js
```

You’ll see:

```
Debugger listening on ws://127.0.0.1:9229
```

Now you can connect using:

* Chrome DevTools
* VS Code

---

# 🚀 3️⃣ Debugging in VS Code (BEST WAY)

This is what professionals use.

---

## 🔹 Step 1: Open Project in VS Code

---

## 🔹 Step 2: Add Breakpoint

Click left side of line number.

Red dot appears 🔴

---

## 🔹 Step 3: Run Debug

Go to:

```
Run & Debug → Create launch.json
```

Choose:

```
Node.js
```

VS Code creates:

`.vscode/launch.json`

Example config:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "program": "${workspaceFolder}/src/server.js"
}
```

---

## 🔹 Step 4: Start Debugging

Press:

```
F5
```

Execution pauses at breakpoint.

---

# 🔍 What You Can Do in VS Code Debugger

When paused:

* Inspect variables
* See call stack
* Check local scope
* Step over (F10)
* Step into (F11)
* Continue (F5)

🔥 This is powerful.

---

# 🧠 Example Debugging Flow

```js
function calculateTotal(price, tax) {
  const total = price + tax;
  return total;
}

console.log(calculateTotal(100, 18));
```

Add breakpoint on:

```
const total = price + tax;
```

Now inspect:

* price
* tax
* total

You see actual values.

---

# 🚀 Debugging Express App

To debug server:

```bash
node --inspect src/server.js
```

Or use VS Code debug config.

When request hits route → breakpoint pauses.

---

# 🧠 Common Debugging Uses

* Why is value undefined?
* Why is async not working?
* Why is route not triggering?
* Why is DB result empty?
* Why is promise not resolving?

---

# 🧠 Debugging vs Logging

| Logging                  | Debugging            |
| ------------------------ | -------------------- |
| Print values             | Inspect live values  |
| Static                   | Interactive          |
| Limited                  | Powerful             |
| Good for production logs | Good for development |

---

# 🔥 Pro Tips

### ✅ Use `debugger` statement when stuck

### ✅ Remove debugger before production

### ✅ Combine debugging + console logs

### ✅ Use breakpoints inside async functions

---

# 🧠 Interview Questions

### ❓ How do you debug Node app?

Using `node --inspect` or VS Code debugger.

### ❓ What does `debugger` keyword do?

Pauses execution when debugger is attached.

### ❓ Can we debug async code?

Yes, VS Code supports async debugging.

---

