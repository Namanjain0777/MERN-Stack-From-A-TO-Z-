---

# 🧠 What is a Promise?

A Promise is:

> An object that represents the eventual completion (or failure) of an asynchronous operation.

It’s like saying:

"I promise I will give you result later."

---

# 📦 Promise Has 3 States

1️⃣ Pending
2️⃣ Fulfilled (Resolved)
3️⃣ Rejected

---

# 🔥 Basic Promise Example

```js
const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Task completed 🚀");
  } else {
    reject("Task failed ❌");
  }

});
```

---

# 1️⃣ Using `.then()` and `.catch()`

```js
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# 🧠 What Happens Internally?

* Promise runs immediately
* If `resolve()` → `.then()` executes
* If `reject()` → `.catch()` executes

---

# 📁 Real Example (Replacing Callback)

Old callback style:

```js
fs.readFile("data.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
```

---

Modern Promise style:

```js
import fs from "fs/promises";

fs.readFile("data.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

🔥 Cleaner. No nested callbacks.

---

# 🔥 Chaining Promises (Very Important)

```js
Promise.resolve(5)
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num * 3;
  })
  .then((num) => {
    console.log(num);
  });
```

Output:

```
5
10
30
```

👉 Each `.then()` returns a new Promise.

---

# 🧠 Promise vs Callback

| Feature        | Callback    | Promise       |
| -------------- | ----------- | ------------- |
| Readability    | ❌ Messy     | ✅ Cleaner     |
| Error handling | ❌ Difficult | ✅ Centralized |
| Chaining       | ❌ Hard      | ✅ Easy        |

---

# ⚠️ Error Handling in Promises

```js
Promise.reject("Something went wrong")
  .then(() => {
    console.log("Won’t run");
  })
  .catch((err) => {
    console.log("Caught:", err);
  });
```

---

# 🧠 Promise in Event Loop

Important:

* `.then()` goes to **Microtask Queue**
* Runs before setTimeout

Example:

```js
console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");
```

Output:

```
1
4
2
3
```

Because:
Microtask > Macrotask

---

# 🔥 Real Backend Example

```js
function saveUser(user) {
  return new Promise((resolve, reject) => {
    if (user) resolve("User saved");
    else reject("User invalid");
  });
}

saveUser("Naman")
  .then((msg) => {
    console.log(msg);
    return "Send Email";
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
```

---

# 🧠 Interview Questions

### ❓ What are Promise states?

Pending, Fulfilled, Rejected.

### ❓ Difference between resolve and reject?

resolve → success
reject → failure

### ❓ Where does Promise callback execute?

Microtask queue.

### ❓ Why Promises are better than callbacks?

Avoid callback hell, better error handling.

---

# 🚀 For You (Backend Dev)

Now that you understand Promises,
the next and most powerful topic is:

👉 async/await
👉 try/catch in async
👉 Promise.all()
👉 Promise.race()
👉 Handling multiple API calls

This is what real backend devs use daily.

