

# 🚀 Why Error Handling is Critical

Without proper error handling:

* Server crashes 💥
* Users see ugly stack traces
* Security risks
* Debugging nightmare
* Inconsistent responses

Professional APIs ALWAYS use centralized error handling.

---

# 🧠 What is Centralized Error Handler?

Instead of handling errors inside every route…

❌ Bad way:

```js
app.get("/tasks/:id", (req, res) => {
    try {
        // logic
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
```

We use ONE global error middleware.

---

# 🧱 Centralized Error Middleware

```js
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
```

Important rules:

1. Must have 4 parameters
2. Must be placed AFTER all routes
3. Only runs when `next(error)` is called

---

# 🧠 How It Works

Example route:

```js
app.get("/error", (req, res, next) => {
    const error = new Error("Something broke!");
    next(error);
});
```

Flow:

```
Request
 ↓
Route
 ↓
next(error)
 ↓
Error Middleware
 ↓
Response
```

---

# 🔥 Better Professional Version

```js
app.use((err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});
```

This is production-level structure.

---

# 🚀 Custom Error Class (Professional Upgrade)

Create custom error:

```js
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
```

Use it:

```js
next(new AppError("Task not found", 404));
```

Now error middleware handles status automatically.

---

# 🧠 Important: Async Error Problem

If you write:

```js
app.get("/tasks", async (req, res) => {
    throw new Error("Oops");
});
```

Express will NOT catch it automatically.

Solution:

Wrap async functions:

```js
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
```

Use it:

```js
app.get("/tasks", asyncHandler(async (req, res) => {
    throw new Error("Oops");
}));
```

Now error middleware catches it.

---

# 🔥 Professional Error Flow

```
Route
 ↓
Service Layer
 ↓
Throw Error
 ↓
next(error)
 ↓
Central Error Handler
 ↓
JSON Response
```

---

# 🎯 Interview-Level Answer

“A centralized error handler in Express is a middleware function with four parameters that catches errors passed via next() and ensures consistent API responses.”

---

# ⚠️ Important Mistake Beginners Make

Placing error middleware ABOVE routes.

Wrong ❌

```js
app.use(errorMiddleware);
app.get(...);
```

It must be LAST.

---

# 🚀 Real Production Example Structure

```
middleware/
  errorMiddleware.js
utils/
  AppError.js
```

Clean separation.

---

# 🧠 Now Think Carefully

If inside route you write:

```js
throw new Error("Crash");
```

Without calling `next()`,
Will the centralized error handler catch it?

Answer carefully. This is advanced understanding.
