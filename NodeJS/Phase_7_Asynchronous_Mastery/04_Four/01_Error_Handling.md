---

# 🧠 1️⃣ try/catch (Basic Error Handling)

Used with:

* Synchronous code
* async/await

---

## 🔹 Sync Example

```js
try {
  throw new Error("Something went wrong ❌");
} catch (err) {
  console.log("Caught error:", err.message);
}
```

Output:

```
Caught error: Something went wrong ❌
```

---

## 🔹 Async/Await Example (Very Important)

```js
async function getData() {
  try {
    const result = await Promise.reject("Failed");
    console.log(result);
  } catch (err) {
    console.log("Caught:", err);
  }
}

getData();
```

🔥 Always wrap async code in try/catch.

---

# ⚠️ Important

try/catch **does NOT catch**:

* Errors inside callbacks
* Unhandled promise rejections

Example:

```js
try {
  setTimeout(() => {
    throw new Error("Crash 💥");
  }, 1000);
} catch (err) {
  console.log("Won't catch");
}
```

This will crash process.

Because:
Error happens asynchronously.

---

# 🧠 2️⃣ process.on('uncaughtException')

Used to catch errors that were NOT caught anywhere.

---

## 🔹 Example

```js
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception:", err.message);
});
```

If somewhere:

```js
throw new Error("Unexpected crash");
```

It will be caught globally.

---

## ⚠️ VERY IMPORTANT

Node documentation says:

> Do NOT continue running app after uncaughtException.

Best practice:

```js
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
```

Because:

* App is in unstable state
* Memory may be corrupted

---

# 🧠 3️⃣ process.on('unhandledRejection')

Used to catch Promise rejections that were NOT handled with .catch().

---

## 🔹 Example

```js
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection:", reason);
});
```

If you write:

```js
Promise.reject("Database failed ❌");
```

Without `.catch()`, this event triggers.

---

# 🔥 Difference Between Them

| Feature              | uncaughtException | unhandledRejection             |
| -------------------- | ----------------- | ------------------------------ |
| Handles              | Sync errors       | Promise errors                 |
| Triggered when       | Error not caught  | Promise rejected without catch |
| Should app continue? | ❌ No              | ❌ No (best practice)           |

---

# 🧠 Real Production Setup

In real backend apps, we write this in main file:

```js
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION 💥", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION 💥", err);
  process.exit(1);
});
```

🔥 This prevents silent crashes.

---

# 🧠 Real Express Error Handling

```js
app.get("/user", async (req, res, next) => {
  try {
    const user = await getUser();
    res.json(user);
  } catch (err) {
    next(err); // Pass to global error middleware
  }
});
```

Global error middleware:

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

🔥 This is production-level backend.

---

# 🧠 Interview Questions

### ❓ Difference between uncaughtException & unhandledRejection?

One handles sync errors, other handles rejected promises.

### ❓ Should we continue app after uncaughtException?

No. Exit process.

### ❓ Does try/catch catch async errors inside setTimeout?

No.

### ❓ Best way to handle async errors in Express?

Use try/catch + next(err).

---

# 🏆 Now You Understand:

✅ try/catch
✅ Async error handling
✅ Global error handling
✅ uncaughtException
✅ unhandledRejection
✅ Production safety

---
