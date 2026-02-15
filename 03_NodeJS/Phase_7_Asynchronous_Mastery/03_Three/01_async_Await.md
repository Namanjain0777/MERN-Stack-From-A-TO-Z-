---

# 🧠 What is `async`?

When you write:

```js
async function greet() {
  return "Hello 🚀";
}
```

It automatically returns a **Promise**.

```js
greet().then(console.log);
```

Output:

```
Hello 🚀
```

👉 Even if you return normal value, async wraps it inside a Promise.

---

# 🧠 What is `await`?

`await` pauses execution of async function until Promise resolves.

⚠️ Can only be used inside async function.

---

# 🔥 Basic Example

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Fetching...");
  const result = await getData();
  console.log(result);
}

fetchData();
```

Output:

```
Fetching...
(after 2 seconds)
Data received
```

🔥 Looks synchronous, but it's async.

---

# 🧠 How It Works Internally

`await`:

1. Waits for Promise to resolve
2. Pauses only that async function
3. Does NOT block event loop
4. Other code continues running

---

# 📁 Real Backend Example (File Read)

Instead of:

```js
fs.readFile("data.txt")
  .then(...)
```

We do:

```js
import fs from "fs/promises";

async function readFile() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```

🔥 Cleaner and professional.

---

# 🧠 Error Handling (Very Important)

Use `try/catch`

```js
async function example() {
  try {
    const result = await Promise.reject("Error happened");
    console.log(result);
  } catch (err) {
    console.log("Caught:", err);
  }
}

example();
```

---

# 🧠 Sequential vs Parallel Execution

## ❌ Sequential (Slow)

```js
const a = await task1();
const b = await task2();
```

Waits for task1 → then task2.

---

## ✅ Parallel (Faster)

```js
const [a, b] = await Promise.all([task1(), task2()]);
```

Runs both together.

🔥 This is backend optimization.

---

# 🧠 Example With Promise.all

```js
async function runTasks() {
  const results = await Promise.all([
    Promise.resolve("Task1"),
    Promise.resolve("Task2")
  ]);

  console.log(results);
}

runTasks();
```

Output:

```
["Task1", "Task2"]
```

---

# 🧠 Async/Await in Event Loop

Remember:

* `await` waits for Promise
* Promise resolution goes to **Microtask Queue**

So priority:

```
Call Stack
process.nextTick
Promise (Microtask)
Macrotask (setTimeout)
```

---

# 🧠 Interview Questions

### ❓ What does async do?

Makes a function return a Promise.

### ❓ What does await do?

Pauses execution until Promise resolves.

### ❓ Does await block the event loop?

❌ No.

### ❓ Can we use await without async?

❌ No (except top-level await in ESM).

---

# 🚀 Real Express Example

```js
app.get("/users", async (req, res) => {
  try {
    const users = await getUsersFromDB();
    res.json(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
```

🔥 This is how real backend APIs are written.

---

# 🏆 You Now Understand:

✅ Callbacks
✅ Promises
✅ Async/Await
✅ Microtask queue behavior
✅ Promise.all optimization

---
