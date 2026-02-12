# 🧠 What is Event Loop?

Node is:

* Single-threaded
* Non-blocking
* Event-driven

But how does it handle async tasks?

👉 Using the **Event Loop**

---

# 🏗 1️⃣ Call Stack

Think of call stack as:

> Where functions are executed.

It follows:

> LIFO (Last In First Out)

Example:

```js
function a() {
  console.log("A");
}

function b() {
  a();
}

b();
```

### Execution:

Stack:

```
b()
a()
console.log()
```

Then removes one by one.

---

# 🧠 Rule:

Only ONE thing runs in call stack at a time.

---

# 📨 2️⃣ Callback Queue (Task Queue)

When async code runs:

```js
setTimeout(() => {
  console.log("Timeout");
}, 1000);
```

What happens?

1. setTimeout goes to Web APIs
2. After 1 sec → callback moves to **Callback Queue**
3. Event loop checks stack
4. If stack empty → moves callback to stack

---

# ⚡ 3️⃣ Microtask Queue (Higher Priority)

Microtasks have **higher priority than callback queue**.

Includes:

* Promise.then()
* Promise.catch()
* queueMicrotask()
* MutationObserver (browser)

Example:

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

---

### Output:

```
Start
End
Promise
```

Why?

Because:

1. Sync code runs first
2. Promise goes to microtask queue
3. After stack empty → microtask runs

---

# 🐢 4️⃣ Macrotask Queue (Callback Queue)

Includes:

* setTimeout
* setInterval
* setImmediate (Node)
* I/O callbacks

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```
Start
End
Timeout
```

Even though timeout is 0ms.

Because:

* It goes to macrotask queue
* Runs only after stack empty

---

# 🔥 Microtask vs Macrotask Priority

Execution order:

```
1. Call Stack
2. Microtask Queue (ALL microtasks)
3. One Macrotask
4. Again Microtasks
5. Next Macrotask
```

Microtasks always run before macrotasks.

---

# 🧠 Deep Example (Interview Favorite)

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

---

### Step-by-step:

1️⃣ console.log("1") → stack
2️⃣ setTimeout → macrotask queue
3️⃣ Promise → microtask queue
4️⃣ console.log("4")

Stack empty → run microtasks → run macrotasks

---

### Final Output:

```
1
4
3
2
```

🔥 VERY IMPORTANT.

---

# 🔄 Full Event Loop Flow

```
Call Stack
    ↓
Web APIs / Background
    ↓
Microtask Queue (High Priority)
    ↓
Macrotask Queue
    ↓
Event Loop
```

Event Loop keeps checking:

```
Is call stack empty?
Yes → Run microtasks
Then → Run one macrotask
Repeat
```

---

# 🧠 Why This Matters in Backend?

Because:

* File reading
* Database queries
* API calls
* Timers
* Promises

All depend on event loop.

If you block call stack:

```js
while(true) {}
```

🚨 Server freezes.

---

# 🧠 Interview Questions

### ❓ What is event loop?

Mechanism that handles async callbacks in Node.js.

### ❓ What is call stack?

Where synchronous code executes.

### ❓ What has higher priority: Promise or setTimeout?

Promise (microtask).

### ❓ Why does setTimeout(0) run after sync code?

Because it goes to macrotask queue.


# 🧠 Final Challenge For You

What will be output?

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");
```
