---

# 🚀 1️⃣ `req` Object (Request Object)

When client sends request:

```js
http.createServer((req, res) => {})
```

👉 `req` contains information about the incoming request.

---

## 🔹 Important Properties of `req`

### ✅ `req.method`

HTTP method

```js
console.log(req.method);
```

Possible values:

* GET
* POST
* PUT
* DELETE

---

### ✅ `req.url`

The URL path

```js
console.log(req.url);
```

If user visits:

```
http://localhost:3000/about
```

Output:

```
/about
```

---

### ✅ `req.headers`

All request headers

```js
console.log(req.headers);
```

Example output:

```js
{
  host: 'localhost:3000',
  connection: 'keep-alive'
}
```

---

# 🚀 2️⃣ `res` Object (Response Object)

Used to send response back to client.

---

## 🔹 Important Methods

### ✅ `res.write()`

Sends data

```js
res.write("Hello ");
res.write("Naman");
res.end();
```

---

### ✅ `res.end()`

Ends response (must call it)

```js
res.end("Hello 🚀");
```

---

### ✅ `res.statusCode`

Set status manually

```js
res.statusCode = 404;
res.end("Not Found");
```

---

### ✅ `res.writeHead()`

Set status + headers together

```js
res.writeHead(200, {
  "Content-Type": "application/json"
});
```

---

# 🚀 3️⃣ Status Codes

Common status codes:

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |

Example:

```js
res.writeHead(404);
res.end("Page Not Found");
```

---

# 🚀 4️⃣ Headers

Headers tell browser how to interpret response.

Example:

```js
res.writeHead(200, {
  "Content-Type": "text/plain"
});
```

Common Content-Types:

* text/plain
* text/html
* application/json

---

# 🚀 5️⃣ Manual Routing (Without Express)

We check:

```js
req.url
req.method
```

Example:

```js
if (req.url === "/" && req.method === "GET") {
  res.end("Home Page");
}
else if (req.url === "/about") {
  res.end("About Page");
}
else {
  res.statusCode = 404;
  res.end("Not Found");
}
```

🔥 That’s manual routing.

---

# 🚀 6️⃣ Parsing URL Properly

Instead of using raw `req.url`, use:

```js
import { URL } from "url";
```

---

## Example:

```js
const server = http.createServer((req, res) => {

  const myUrl = new URL(req.url, `http://${req.headers.host}`);

  console.log("Path:", myUrl.pathname);
  console.log("Query:", myUrl.searchParams);

  res.end("Check console");
});
```

---

# 🚀 7️⃣ Query Parameters

If user visits:

```
http://localhost:3000/?name=Naman&age=21
```

---

## Extract like this:

```js
const myUrl = new URL(req.url, `http://${req.headers.host}`);

const name = myUrl.searchParams.get("name");
const age = myUrl.searchParams.get("age");

console.log(name); // Naman
console.log(age);  // 21
```

---

# 🧠 Full Professional Example

```js
import http from "http";
import { URL } from "url";

const server = http.createServer((req, res) => {

  const myUrl = new URL(req.url, `http://${req.headers.host}`);

  if (myUrl.pathname === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  }

  else if (myUrl.pathname === "/user") {
    const name = myUrl.searchParams.get("name");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ user: name }));
  }

  else {
    res.writeHead(404);
    res.end("Not Found");
  }

});

server.listen(3000);
```

---

# 🧠 What Happens Internally

1️⃣ Request comes
2️⃣ req object created
3️⃣ res object created
4️⃣ You inspect req
5️⃣ You send response using res

---

# 🧠 Interview Questions

### ❓ What is req object?

Contains information about incoming HTTP request.

### ❓ What is res object?

Used to send response to client.

### ❓ How to get query parameters in Node?

Using URL class and searchParams.

### ❓ How to manually route in Node?

Using req.url and req.method.

---
