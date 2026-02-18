**professional backend observability**.

Logging is CRITICAL in real production apps.

Without logs:

❌ You can’t debug production
❌ You can’t track errors
❌ You can’t monitor traffic
❌ You can’t detect attacks

Let’s master **Morgan** and **Winston** properly.

---

# 🚀 1️⃣ Morgan (HTTP Request Logger)


Morgan is:

> Middleware for logging HTTP requests.

---

## Install

```bash
npm install morgan
```

---

## Basic Usage

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

Now every request logs like:

```
GET /users 200 12ms
POST /login 401 8ms
```

---

## Log Formats

```js
morgan("dev")       // colored dev format
morgan("combined")  // Apache style
morgan("tiny")      // minimal
```

---

## Why Morgan is Useful

* See incoming requests
* Debug APIs
* Monitor response times

---

# 🚀 2️⃣ Winston (Advanced Logger)

Morgan logs HTTP only.

Winston logs:

* Errors
* Info messages
* Warnings
* System events
* Writes logs to files

Production apps use Winston.

---

## Install

```bash
npm install winston
```

---

# 🧱 Basic Winston Setup

Create:

```
src/utils/logger.js
```

```js
const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" })
  ]
});

module.exports = logger;
```

---

# 🚀 Use It in Controller

```js
const logger = require("../utils/logger");

logger.info("User created");
logger.error("Database connection failed");
```

---

# 🧠 Morgan vs Winston

| Morgan             | Winston                |
| ------------------ | ---------------------- |
| Logs HTTP requests | Logs everything        |
| Middleware         | Standalone logger      |
| Dev-focused        | Production-focused     |
| No file logging    | File logging supported |

---

# 🔥 Professional Setup

Use both together:

```js
app.use(morgan("dev"));
```

And use Winston for:

* Error logging
* DB logs
* Custom logs

---

# 🧠 Production Logging Strategy

```
Console logs → Dev only
File logs → Production
Cloud logs → Advanced (ELK, Datadog, etc.)
```

---

# 🚀 Advanced Tip (Very Important)

In production:

```js
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
```

Don’t log everything in production console.

---

# 🧠 Why Logging is Critical in Production

Imagine:

* App crashes at 3AM
* You wake up
* No logs

You’re blind.

Logs = backend’s eyes.

---

# 🎯 Interview-Level Answer

“Morgan logs HTTP requests, while Winston is a full-featured logging library used for structured logging and writing logs to multiple transports like console and files.”

---

# 🧠 Now Think Carefully

Why is `console.log()` NOT suitable for production logging?

What limitations does it have compared to Winston?
