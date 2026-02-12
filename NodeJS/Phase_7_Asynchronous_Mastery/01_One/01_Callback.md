---

# 🧠 What is a Callback?

A **callback** is:

> A function passed as an argument to another function,
> which is executed later.

---

## 🔹 Basic Example (Normal JS)

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Naman", sayBye);
```

### Output:

```
Hello Naman
Goodbye!
```

👉 `sayBye` is a callback.

---

# 🔥 Why Callbacks Are Important in Node?

Node is:

* Single-threaded
* Non-blocking
* Event-driven

So when something takes time (file read, DB call, API call),
Node uses **callbacks**.

---

# 📁 Example: File Reading (Async)

```js
import fs from "fs";

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log("File content:", data);
});

console.log("This runs first 🚀");
```

### Output:

```
This runs first 🚀
File content: ...
```

Because:

* readFile is async
* callback runs later

---

# 🧠 Callback Pattern in Node

Most Node async functions follow this pattern:

```js
function something(callback) {
   callback(error, result);
}
```

This is called:

> Error-first callback pattern

---

## Example

```js
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

First argument → error
Second argument → result

---

# ⚠️ Callback Hell (Big Problem)

When callbacks are nested too much:

```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      doTask4(() => {
        console.log("Done");
      });
    });
  });
});
```

This is called:

> Callback Hell 😵

Problems:

* Hard to read
* Hard to maintain
* Error handling messy

---

# 🔥 Real Backend Example

Imagine:

1️⃣ Save user
2️⃣ Send email
3️⃣ Log activity

Using callbacks:

```js
saveUser(user, (err, result) => {
  if (err) return;

  sendEmail(user, (err) => {
    if (err) return;

    logActivity(user, () => {
      console.log("All done");
    });
  });
});
```

Messy right? 😅

That’s why we use:

* Promises
* async/await

---

# 🧠 Synchronous vs Asynchronous Callback

## Sync Callback

```js
[1,2,3].forEach((num) => {
  console.log(num);
});
```

Runs immediately.

---

## Async Callback

```js
setTimeout(() => {
  console.log("Delayed");
}, 1000);
```

Runs later (macrotask queue).

---

# 📊 Callback Flow in Node

```
Call Stack
   ↓
Async Task
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Call Stack
```

---

# 🧠 Interview Questions

### ❓ What is a callback?

A function passed to another function to be executed later.

### ❓ What is error-first callback?

Pattern where first argument is error, second is result.

### ❓ What is callback hell?

Deeply nested callbacks making code unreadable.

### ❓ Why were promises introduced?

To solve callback hell.

---

# 🚀 For You (Backend Growth)

You must understand callbacks because:

* fs module uses them
* http module uses them
* EventEmitter uses them
* Express middleware uses them

Even Promises internally are built on callback concepts.

---

