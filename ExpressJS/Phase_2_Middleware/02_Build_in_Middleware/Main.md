
---

# 🚀 1️⃣ `express.json()`

### What it does:

Parses incoming JSON request body.

Without it → `req.body` will be `undefined`.

---

### Example:

```js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("User Created");
});
```

If client sends:

```json
{
  "name": "Naman",
  "age": 21
}
```

Then:

```
req.body = { name: "Naman", age: 21 }
```

---

### Why Important?

* APIs mostly send JSON
* Required for POST, PUT, PATCH

In MERN → this is mandatory.

---

# 🚀 2️⃣ `express.urlencoded()`

### What it does:

Parses form data (HTML form submissions).

Used when:

```
Content-Type: application/x-www-form-urlencoded
```

---

### Example:

```js
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("Form Submitted");
});
```

Used for:

* Traditional HTML forms
* Login forms without frontend framework

---

### What is `{ extended: true }`?

* `true` → allows nested objects
* `false` → only simple key-value pairs

Modern practice → use `true`.

---

# 🚀 3️⃣ Static Files Middleware

Used to serve:

* Images
* CSS
* JS files
* HTML files

---

### Example:

Folder structure:

```
project/
│
├── public/
│     ├── index.html
│     ├── style.css
│
└── server.js
```

---

In server:

```js
app.use(express.static("public"));
```

Now you can visit:

```
http://localhost:3000/index.html
```

No route needed.

---

# 🧠 What’s Happening Internally?

When you use:

```js
app.use(express.static("public"));
```

Express:

* Checks if requested file exists
* If yes → serves it
* If not → moves to next middleware

---

# 🧱 Typical Production Setup

```js
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running");
});
```

This is standard starting template.

---

# 🔥 When To Use What?

| Middleware           | Used For                      |
| -------------------- | ----------------------------- |
| express.json()       | API JSON data                 |
| express.urlencoded() | HTML form data                |
| express.static()     | Serving frontend/static files |

---

# ⚠️ Common Beginner Mistake

Forgetting:

```js
app.use(express.json());
```

Then wondering why:

```
req.body === undefined
```

Happens A LOT.

---

# 🎯 Interview-Level One Line

“Built-in middleware like express.json and express.urlencoded are used to parse incoming request bodies, while express.static serves static assets.”

---

Now question for you 👀

If we remove:

```js
app.use(express.json());
```

And send JSON in POST request,

What exactly will `req.body` contain?

