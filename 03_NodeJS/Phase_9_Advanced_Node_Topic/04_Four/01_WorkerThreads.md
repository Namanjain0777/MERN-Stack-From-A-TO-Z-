# 🚀 Worker Threads (True Multithreading in Node)

This is used for:

> CPU-heavy tasks

Because Node’s event loop is single-threaded.

---

# 🧠 The Problem

Node is amazing for:

* I/O tasks
* API handling
* DB calls
* File reads

But BAD for:

* Heavy calculations
* Image processing
* Cryptography
* Large JSON parsing
* Data compression

Example:

```js
while (true) {}
```

This blocks the event loop.

Server freezes 💀

---

# 🧠 What Are Worker Threads?

Worker Threads allow you to:

> Run JavaScript in parallel threads

Unlike cluster:

* Cluster = multiple processes
* Worker Threads = multiple threads

---

# 📦 Import Worker Threads

```js
import { Worker } from "worker_threads";
```

---

# 🔥 Basic Example

## main.js

```js
import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result from worker:", result);
});

worker.on("error", (err) => {
  console.error(err);
});
```

---

## worker.js

```js
import { parentPort } from "worker_threads";

function heavyTask() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

const result = heavyTask();

parentPort.postMessage(result);
```

---

# 🔥 What Happens?

1️⃣ Main thread starts worker
2️⃣ Worker runs heavy task in separate thread
3️⃣ Event loop remains free
4️⃣ Result sent back using `postMessage`

No blocking 🚀

---

# 🧠 Why Not Just Use setTimeout?

Because CPU-heavy tasks:

* Block event loop
* Prevent handling other requests

Worker threads allow:

> Parallel CPU computation

---

# 🧠 How Worker Threads Communicate

They use:

* postMessage()
* parentPort.on("message")

Like browser web workers.

---

# 📊 Cluster vs Worker Threads

| Feature  | Cluster              | Worker Threads    |
| -------- | -------------------- | ----------------- |
| Uses     | Multiple processes   | Multiple threads  |
| Memory   | Separate             | Shared (optional) |
| Good for | Scaling HTTP servers | CPU-heavy tasks   |
| IPC      | Message passing      | Message passing   |

---

# 🔥 Real Backend Use Cases

Worker Threads are used for:

* Password hashing (bcrypt)
* Image resizing
* Video processing
* Machine learning tasks
* PDF generation
* Crypto operations

---

# 🧠 Advanced: Sharing Data

You can share memory using:

```js
SharedArrayBuffer
```

But that’s advanced system-level usage.

---

# 🚀 Example: Heavy Calculation in API

Without worker:

```js
app.get("/compute", (req, res) => {
  heavyCalculation(); // blocks server
  res.send("Done");
});
```

Server freezes.

---

With worker:

```js
app.get("/compute", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", (result) => {
    res.send(`Result: ${result}`);
  });
});
```

Server stays responsive 💪

---

# 🧠 Interview Questions

### ❓ Why do we need worker threads?

To handle CPU-heavy tasks without blocking event loop.

### ❓ Difference between cluster and worker threads?

Cluster = multi-process
Worker threads = multi-thread

### ❓ Can workers share memory?

Yes, using SharedArrayBuffer.

### ❓ Are worker threads good for API scaling?

No, cluster is better for scaling HTTP.

---

# ⚠️ Important

Worker threads are NOT needed for:

* Simple CRUD apps
* Normal APIs
* Basic backend

Use them when:

CPU-bound tasks are heavy.

---

# 🏆 Now You Understand:

✅ CPU-bound vs I/O-bound
✅ Worker threads
✅ Parallel computation
✅ Event loop protection
✅ System-level scaling

You are now entering backend performance engineering 😎🔥

---

