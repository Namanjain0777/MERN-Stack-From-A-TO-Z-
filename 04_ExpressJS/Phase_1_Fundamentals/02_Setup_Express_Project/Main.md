# 🚀 Step 1 — Initialize Project

```bash
npm init -y
```

What this does:

* Creates `package.json`
* Stores project metadata
* Tracks dependencies
* Adds scripts

---

# 🚀 Step 2 — Install Express

```bash
npm install express
```

This:

* Installs Express inside `node_modules`
* Adds it to `dependencies` in `package.json`

Now your folder looks like:

```
project/
│
├── node_modules/
├── package.json
├── package-lock.json
└── index.js
```

---

# 🚀 Step 3 — Basic Server

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 🔍 What Is Happening Internally?

### 1️⃣ `require("express")`

Loads Express module.

---

### 2️⃣ `const app = express();`

Creates an Express application instance.

Internally this:

* Creates an HTTP server
* Prepares routing system
* Sets up middleware pipeline

---

### 3️⃣ `app.listen(3000)`

Starts server on port 3000.

Equivalent raw Node version:

```js
const http = require("http");

const server = http.createServer();
server.listen(3000);
```

Express wraps this.

---

# 🧠 But Right Now…

Your server runs…

But it does nothing.

If you open:

```
http://localhost:3000
```

You’ll see:

```
Cannot GET /
```

Why?

Because no routes are defined.

---

# ✅ Add First Route

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Now visit:

```
http://localhost:3000
```

It works.

---

# 🧠 Important Concepts You Just Used

* Express instance
* Port binding
* Route definition
* req object
* res object
* HTTP GET method

---

# 🔥 Professional Tip (Very Important)

Instead of hardcoding port:

```js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This is production-ready style.

---
