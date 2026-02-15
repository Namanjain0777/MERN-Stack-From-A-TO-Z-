**Performance Monitoring in Node.js**.

This is what real backend engineers use to:

* Detect slow code
* Measure execution time
* Monitor memory usage
* Prevent memory leaks
* Optimize APIs

Let’s go step by step 💪

---

# 🚀 1️⃣ `console.time()` → Measure Execution Time

Used to measure how long code takes to execute.

---

## 🔹 Basic Example

```js
console.time("Loop Timer");

for (let i = 0; i < 1e7; i++) {}

console.timeEnd("Loop Timer");
```

Output:

```
Loop Timer: 25.345ms
```

🔥 It shows execution time.

---

## 🧠 How It Works

* `console.time("label")` → starts timer
* `console.timeEnd("label")` → ends timer

Label must match.

---

## 🔥 Real Backend Example

```js
console.time("DB Call");

await getUsersFromDB();

console.timeEnd("DB Call");
```

Used to:

* Measure API performance
* Compare before/after optimization

---

# 🚀 2️⃣ `process.memoryUsage()`

Used to monitor memory consumption.

---

## 🔹 Example

```js
console.log(process.memoryUsage());
```

Output example:

```js
{
  rss: 23552000,
  heapTotal: 9388032,
  heapUsed: 5946328,
  external: 1300000,
  arrayBuffers: 50000
}
```

---

# 🧠 Meaning of Fields

| Field        | Meaning                     |
| ------------ | --------------------------- |
| rss          | Total memory allocated      |
| heapTotal    | Total V8 heap memory        |
| heapUsed     | Used heap memory            |
| external     | Memory outside V8 (Buffers) |
| arrayBuffers | Memory for ArrayBuffers     |

---

# 🔥 Convert to MB

```js
const memory = process.memoryUsage();

console.log(`Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
```

---

# 🧠 Why This Is Important?

To detect:

* Memory leaks
* Heavy buffer usage
* Large object accumulation
* Infinite loops

---

# 🚨 Example: Memory Leak Simulation

```js
let data = [];

setInterval(() => {
  data.push(new Array(1000000).fill("leak"));
  console.log(process.memoryUsage().heapUsed);
}, 1000);
```

Memory keeps increasing.

This is how you detect leaks.

---

# 🔥 Real Backend Monitoring Example

```js
setInterval(() => {
  const memory = process.memoryUsage();

  console.log({
    heapUsedMB: (memory.heapUsed / 1024 / 1024).toFixed(2),
    rssMB: (memory.rss / 1024 / 1024).toFixed(2)
  });
}, 5000);
```

Logs memory every 5 seconds.

---

# 🧠 CPU Monitoring (Bonus)

You can also check:

```js
console.log(process.cpuUsage());
```

Used for performance profiling.

---

# 📊 Why Performance Monitoring Matters

Without monitoring:

❌ You don’t know slow APIs
❌ You can’t detect memory leaks
❌ Server crashes unexpectedly

With monitoring:

✅ Optimize heavy routes
✅ Scale properly
✅ Debug production issues

---

# 🧠 Interview Questions

### ❓ What does console.time do?

Measures execution time of code.

### ❓ What does process.memoryUsage return?

Memory usage details of Node process.

### ❓ What is heapUsed?

Memory currently used by V8 heap.

### ❓ What is rss?

Total memory allocated to process.

---

# 🧠 Production Tools (Advanced)

In real production, we use:

* PM2 monitoring
* Node inspector
* Chrome DevTools
* New Relic
* Datadog
* Grafana

But `console.time()` and `process.memoryUsage()` are fundamentals.

---

# 🏆 You Now Understand:

✅ Measuring execution time
✅ Monitoring memory
✅ Detecting leaks
✅ Performance basics

You’re now thinking like someone ready for production systems 😎🔥

---
