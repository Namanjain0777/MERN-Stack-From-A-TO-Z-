# 🚀 Why Async Error Handling is Special

In Express:

Synchronous errors → automatically caught
Asynchronous errors → NOT automatically caught (by default)

Example:

### ✅ Sync error (auto-caught)

```js
app.get("/", (req, res) => {
    throw new Error("Sync error");
});
```

Express catches it.

---

### ❌ Async error (NOT auto-caught)

```js
app.get("/", async (req, res) => {
    throw new Error("Async error");
});
```

This will crash server (in older Express versions) unless handled.

---

# 🧠 Solution 1️⃣ — try/catch

```js
app.get("/tasks", async (req, res, next) => {
    try {
        const data = await someAsyncFunction();
        res.json(data);
    } catch (err) {
        next(err);
    }
});
```

Works.
But repetitive.

---

# 🚀 Solution 2️⃣ — Async Wrapper (Professional Way)

Create utility:

```js
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
```

Use it:

```js
app.get("/tasks", asyncHandler(async (req, res) => {
    const data = await someAsyncFunction();
    res.json(data);
}));
```

Cleaner. Scalable. Production-ready.

This is used in real-world APIs.

---

# 🧠 Operational Errors vs Programming Errors

This is VERY important concept.

---

## 1️⃣ Operational Errors (Expected Errors)

These are runtime errors that are expected in normal operation.

Examples:

* Invalid user input
* Wrong password
* Database connection failed
* Resource not found
* Validation error

These should be handled properly and return safe messages.

Example:

```js
next(new AppError("User not found", 404));
```

---

## 2️⃣ Programming Errors (Developer Mistakes)

These are bugs.

Examples:

* Undefined variable
* Wrong function call
* Typo
* Logic mistake
* Accessing property of undefined

Example:

```js
console.log(user.name); // but user is undefined
```

These should NOT be silently handled.
They should crash in development so you fix them.

---

# 🚀 Professional Error Strategy

In production:

* Handle operational errors gracefully
* Log programming errors
* Don’t expose stack traces to users

---

# 🧱 Professional Error Middleware Pattern

```js
app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err.isOperational) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    // Programming error
    res.status(500).json({
        message: "Something went wrong"
    });
});
```

---

# 🧠 Why This Matters

In real systems:

* You don’t want to expose database errors
* You don’t want to expose stack traces
* You must protect sensitive info

This is security best practice.

---

# 🔥 Real Backend Mental Model

```
Request
 ↓
Controller
 ↓
Service
 ↓
DB
 ↓
Error?
   ↙      ↘
Operational   Programming
   ↓              ↓
Handled         Crash in dev
   ↓
Error Middleware
   ↓
Safe JSON response
```

---

# 🎯 Interview-Level Answer

“Operational errors are expected runtime issues like invalid input or missing resources, while programming errors are bugs in the code that should be fixed rather than handled.”

---

Now deep thinking question 👀

If a database connection fails on server startup…

Is that operational error or programming error?

Think carefully before answering.

