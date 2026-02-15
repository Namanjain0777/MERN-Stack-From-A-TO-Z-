

---

# 🚀 What is Custom Middleware?

A middleware function **you create yourself** to:

* Log data
* Authenticate users
* Validate input
* Handle errors
* Modify request/response

---

# 🧱 Basic Structure

```js
const middlewareFunction = (req, res, next) => {
    // logic
    next();
};
```

Or inline:

```js
app.use((req, res, next) => {
    console.log("Running middleware");
    next();
});
```

---

# 🔥 1️⃣ Logger Middleware

Used to log:

* Method
* URL
* Time
* IP address

---

### Example

```js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

app.use(logger);
```

Now every request will be logged.

Production apps always use logger middleware.

---

# 🔐 2️⃣ Auth Middleware

Used to protect routes.

Example:

```js
const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === "secret123") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
```

Use it on route:

```js
app.get("/dashboard", auth, (req, res) => {
    res.send("Welcome to Dashboard");
});
```

Flow:

```
Request → Auth Middleware → Route
```

If invalid → stops request.

---

# 💥 3️⃣ Error Handling Middleware

Special middleware.

It has 4 parameters:

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});
```

Important:

It must have 4 parameters to be recognized as error middleware.

---

# 🧠 Example with Error

```js
app.get("/error", (req, res) => {
    throw new Error("Something broke!");
});
```

Without error middleware → server crashes.
With error middleware → safe response.

---

# 🧱 Full Example

```js
const express = require("express");
const app = express();

app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Error Middleware (MUST BE LAST)
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
    console.log("Server running");
});
```

---

# 🧠 Important Rules

1. Middleware runs in order.
2. Order matters.
3. Error middleware must be last.
4. If you send response → don’t call `next()`.
5. If you forget `next()` → request hangs.

---

# 🔥 Real Production Middleware Stack

```
Request
 ↓
Logger
 ↓
JSON Parser
 ↓
CORS
 ↓
Auth
 ↓
Route
 ↓
Error Handler
```

That’s real-world backend architecture.

---

# 🎯 Interview Answer

“Custom middleware in Express is a user-defined function that executes during the request-response cycle and can modify req, res, or pass control using next().”

---

Now serious question 👀

What happens if inside middleware you:

```
res.send("Hello");
next();
```

Will next middleware run or not?
