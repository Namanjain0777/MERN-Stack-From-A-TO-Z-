---

# 🚀 Creating a Server in Node.js

We use the built-in **`http` module**.

No installation required.

---

# 1️⃣ Basic Server Example

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.write("Hello Naman 🚀");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 🔥 How It Works

### `http.createServer()`

Takes a callback:

```js
(req, res)
```

* `req` → Incoming request
* `res` → Response object

---

### `server.listen(3000)`

Starts server on port 3000.

Visit:

```
http://localhost:3000
```

You’ll see:

```
Hello Naman 🚀
```

---

# 2️⃣ Understanding `req` (Request Object)

You can inspect request details:

```js
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);

  res.end("Check terminal 👀");
});
```

If you visit:

```
http://localhost:3000/about
```

Terminal shows:

```
URL: /about
Method: GET
```

---

# 3️⃣ Handle Different Routes (Manual Routing)

Before Express, we do routing like this:

```js
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("Home Page");
  } 
  else if (req.url === "/about") {
    res.end("About Page");
  } 
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }

});
```

🔥 This is raw routing.

---

# 4️⃣ Set Response Headers

```js
res.writeHead(200, {
  "Content-Type": "text/plain"
});
```

Example JSON response:

```js
res.writeHead(200, {
  "Content-Type": "application/json"
});

res.end(JSON.stringify({
  name: "Naman",
  role: "Backend Dev"
}));
```

---

# 5️⃣ Full Example (Professional Basic Server)

```js
import http from "http";

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  }

  else if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "API Working 🚀" }));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

# 🧠 How Node Server Works Internally

1️⃣ Request comes
2️⃣ Goes to event loop
3️⃣ Callback inside createServer runs
4️⃣ Response sent
5️⃣ Connection closed

Everything is event-driven.

---

# 🆚 Why Use Express Then?

Because writing raw HTTP routing like this:

```js
if (req.url === "/about") ...
```

Becomes messy for big apps.

Express gives:

* Clean routing
* Middleware
* Body parsing
* Better structure

---

# 🧠 Interview Questions

### ❓ What module is used to create server in Node?

`http` module.

### ❓ What does http.createServer do?

Creates an HTTP server instance.

### ❓ What are req and res?

Request and response objects.

### ❓ Is Express required to create server?

No. Express is built on top of http.

---

# 🔥 Advanced Tip (For You)

Instead of:

```js
res.write()
res.end()
```

You can directly:

```js
res.end("Hello");
```

