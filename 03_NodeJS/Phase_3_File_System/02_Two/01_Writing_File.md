---

# 📝 Writing Files in Node.js

We use the built-in **`fs` module**.

---

# 1️⃣ `fs.writeFile()`

👉 Creates a new file
👉 If file exists → **overwrites it**
👉 Asynchronous (non-blocking ✅ recommended)

---

## 🔹 Syntax

```js
fs.writeFile(path, data, options, callback)
```

---

## 🔹 Example (ES Modules)

```js
import fs from "fs";

fs.writeFile("data.txt", "Hello Naman 🚀", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  console.log("File written successfully");
});
```

---

### 🔥 What Happens?

If `data.txt`:

* ❌ Doesn’t exist → it creates it
* ✅ Exists → content is replaced

---

## ⚠️ Overwrite Example

If file already had:

```
Old Data
```

After writeFile:

```
Hello Naman 🚀
```

Old content is gone.

---

# 2️⃣ `fs.appendFile()`

👉 Adds content to existing file
👉 Does NOT overwrite
👉 Creates file if it doesn’t exist

---

## 🔹 Example

```js
import fs from "fs";

fs.appendFile("data.txt", "\nNew line added", (err) => {
  if (err) throw err;

  console.log("Content appended");
});
```

---

### 🔥 Result

If file had:

```
Hello Naman 🚀
```

After append:

```
Hello Naman 🚀
New line added
```

---

# 🧠 Difference Between writeFile & appendFile

| Feature                  | writeFile    | appendFile   |
| ------------------------ | ------------ | ------------ |
| Overwrites?              | ✅ Yes        | ❌ No         |
| Adds at end?             | ❌ No         | ✅ Yes        |
| Creates file if missing? | ✅ Yes        | ✅ Yes        |
| Blocking?                | ❌ No (async) | ❌ No (async) |

---

# 🚀 Synchronous Versions (Blocking ❌)

Not recommended in server apps.

```js
fs.writeFileSync("data.txt", "Hello");
fs.appendFileSync("data.txt", "More data");
```

These block the event loop.

---

# 🔥 Real Backend Example (Logging System)

```js
import fs from "fs";

function logMessage(message) {
  const log = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFile("logs.txt", log, (err) => {
    if (err) console.error("Logging failed");
  });
}

logMessage("Server started 🚀");
```

This is how real backend logging works.

---

# 🚀 Modern Way (Using Promises)

Better approach for you (clean backend style):

```js
import fs from "fs/promises";

await fs.writeFile("data.txt", "Hello");
await fs.appendFile("data.txt", "\nNew line");
```

Use inside async function.

---

# 🧠 Interview Questions

### ❓ Difference between writeFile & appendFile?

writeFile overwrites content; appendFile adds to existing content.

### ❓ Why avoid writeFileSync in production?

Because it blocks the event loop.

### ❓ What happens if file doesn’t exist?

Both create the file automatically.

---

# 💡 Important for You (Backend Guy)

When building:

* File upload feature
* Logs system
* Export reports
* Save temporary data

You’ll use these.

---
