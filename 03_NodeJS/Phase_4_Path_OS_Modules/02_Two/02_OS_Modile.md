# 📦 OS Module (Built-in)

👉 Gives information about the operating system.

No installation needed.

```js
import os from "os";
```

---

# 1️⃣ CPU Info → `os.cpus()`

Returns array of CPU core details.

```js
import os from "os";

console.log(os.cpus());
```

---

## 🔥 What It Returns

It gives:

* Model name
* Speed
* Times (user, sys, idle, etc.)
* Number of cores

If your system has 8 cores:

```js
console.log(os.cpus().length);
```

Output:

```
8
```

---

## 🧠 Why Important?

Used in:

* Load balancing
* Clustering
* Performance optimization

For example, Node can create workers based on CPU count.

---

# 2️⃣ Free Memory → `os.freemem()`

Returns free system memory in **bytes**.

```js
console.log(os.freemem());
```

---

## 🔥 Convert to GB

```js
const freeMemoryGB = os.freemem() / (1024 * 1024 * 1024);
console.log(`Free Memory: ${freeMemoryGB.toFixed(2)} GB`);
```

---

## 🧠 Why Important?

Used in:

* Monitoring apps
* Server health dashboards
* Auto-scaling systems

---

# 3️⃣ Platform → `os.platform()`

Returns OS type.

```js
console.log(os.platform());
```

Possible outputs:

* `win32`
* `linux`
* `darwin` (Mac)

---

## 🔥 Why Important?

Sometimes you need OS-specific logic:

```js
if (os.platform() === "win32") {
  console.log("Running on Windows");
}
```

---

# 4️⃣ Uptime → `os.uptime()`

Returns how long system has been running (in seconds).

```js
console.log(os.uptime());
```

---

## 🔥 Convert to Hours

```js
const uptimeHours = os.uptime() / 3600;
console.log(`System Uptime: ${uptimeHours.toFixed(2)} hours`);
```

---

# 🧠 Real Backend Example (Server Health Info API)

```js
import express from "express";
import os from "os";

const app = express();

app.get("/health", (req, res) => {
  res.json({
    platform: os.platform(),
    freeMemory: os.freemem(),
    cpuCores: os.cpus().length,
    uptime: os.uptime()
  });
});

app.listen(3000, () => {
  console.log("Server running 🚀");
});
```

Visit:

```
http://localhost:3000/health
```

🔥 This is real-world backend practice.

---

# 📊 Quick Summary

| Method          | What It Returns         |
| --------------- | ----------------------- |
| `os.cpus()`     | CPU details             |
| `os.freemem()`  | Free memory (bytes)     |
| `os.platform()` | OS name                 |
| `os.uptime()`   | System uptime (seconds) |

---

# 🧠 Interview Questions

### ❓ What does os.cpus() return?

Array of objects containing CPU core information.

### ❓ In what unit does os.freemem() return memory?

Bytes.

### ❓ What is returned by os.platform()?

Operating system platform string.

### ❓ What does os.uptime() return?

Time system has been running (in seconds).

---
