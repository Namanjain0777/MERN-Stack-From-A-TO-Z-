**production-grade backend engineering**.

Logging is NOT just:

```js
console.log("Something happened");
```

That’s beginner level.

Real backend systems need:

* Structured logs
* Log levels
* Error tracking
* Production monitoring
* File logging
* Rotation

Let’s break it down properly 💪

---

# 🧠 1️⃣ console.log() (Basic Logging)

Used for:

* Debugging
* Small projects
* Development only

Example:

```js
console.log("Server started");
console.error("Something failed");
```

---

## ❌ Problems With console.log

* No log levels control
* No timestamps (by default)
* No log formatting
* No file storage
* Hard to search in production
* Cannot disable easily

For production apps → not enough.

---

# 🚀 2️⃣ Proper Logging (Professional Way)

We use logging libraries like:

* Winston
* Pino
* Bunyan

Most popular:

🔥 **Winston**

---

# 📦 Install Winston

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
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" })
  ]
});

export default logger;
```

---

# 🔥 Using Logger

```js
import logger from "../utils/logger.js";

logger.info("Server started 🚀");
logger.error("Database failed ❌");
```

---

# 🧠 What Is Happening?

* Logs go to console
* Errors go to error.log
* All logs go to combined.log
* Logs are structured JSON
* Timestamp included

Professional logging system 💪

---

# 📊 Log Levels

| Level   | Purpose           |
| ------- | ----------------- |
| error   | Critical failures |
| warn    | Warnings          |
| info    | General info      |
| http    | HTTP requests     |
| verbose | Detailed logs     |
| debug   | Debugging         |
| silly   | Lowest level      |

You can control:

```js
level: "info"
```

In production:

```
level: "error"
```

---

# 🧠 console vs Proper Logging

| Feature          | console.log | Winston    |
| ---------------- | ----------- | ---------- |
| Log levels       | ❌ Basic     | ✅ Advanced |
| File logging     | ❌ No        | ✅ Yes      |
| Structured logs  | ❌ No        | ✅ JSON     |
| Production ready | ❌ No        | ✅ Yes      |
| Rotation support | ❌ No        | ✅ Yes      |

---

# 🔥 Logging HTTP Requests (Advanced)

Install:

```bash
npm install morgan
```

Use with Express:

```js
import morgan from "morgan";

app.use(morgan("combined"));
```

Or integrate with Winston.

---

# 🧠 Why Proper Logging Is Critical

In production:

* You can’t use console.log to debug live issues
* You need logs stored
* You need timestamps
* You need log levels
* You need to trace errors

When server crashes at 3 AM:

Logs save you.

---

# 🚀 Production Best Practice

Use:

* Winston (application logs)
* Morgan (HTTP logs)
* PM2 logs
* External monitoring (Datadog, New Relic)

---

# 🧠 Real Production Example

```js
try {
  await connectDB();
  logger.info("Database connected");
} catch (err) {
  logger.error("Database connection failed", err);
  process.exit(1);
}
```

🔥 Professional backend behavior.

---

# 🧠 Interview Questions

### ❓ Why not use console.log in production?

Because it lacks log levels, structure, file logging, and monitoring capabilities.

### ❓ What is structured logging?

Logs stored in JSON format for easy searching and analysis.

### ❓ What are log levels?

Different severity levels like error, warn, info, debug.

---

# 🏆 Now You’re Thinking Like Production Backend Dev

You now understand:

✅ Logging basics
✅ Why console is not enough
✅ Winston setup
✅ Log levels
✅ Production logging

---
