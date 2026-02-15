

# 🧠 Request Object (`req`)

The `req` object contains everything about the incoming request.

---

## 1️⃣ `req.params`

Used for **Route Parameters**

Example:

```js
app.get("/users/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});
```

If you visit:

```
/users/101
```

Output:

```
User ID is 101
```

📌 Used for:

* `/users/:id`
* `/products/:productId`
* `/orders/:orderId`

---

## 2️⃣ `req.query`

Used for **Query Parameters**

Example:

```js
app.get("/search", (req, res) => {
  res.send(`Search keyword: ${req.query.q}`);
});
```

URL:

```
/search?q=laptop
```

Output:

```
Search keyword: laptop
```

📌 Used for:

* Filtering
* Sorting
* Pagination

Example:

```
/users?page=2&limit=10
```

---

## 3️⃣ `req.body`

Used for **POST / PUT / PATCH data**

⚠️ IMPORTANT:
You must enable JSON parsing middleware:

```js
app.use(express.json());
```

Example:

```js
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("User Created");
});
```

If you send JSON:

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

📌 Used for:

* Forms
* Signup/Login
* Creating data
* Updating data

---

## 4️⃣ `req.headers`

Used to read request headers.

Example:

```js
app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Check console");
});
```

Used for:

* Authorization tokens
* Content-Type
* Cookies
* User-Agent

Example (JWT):

```js
req.headers.authorization
```

---

# 🚀 Response Object (`res`)

This is how we send response back to client.

---

## 1️⃣ `res.send()`

Sends:

* String
* HTML
* Object
* Buffer

Example:

```js
res.send("Hello World");
```

---

## 2️⃣ `res.json()`

Sends JSON response (automatically sets content-type)

Example:

```js
res.json({ name: "Naman", age: 21 });
```

Preferred for APIs.

---

## 3️⃣ `res.status()`

Sets HTTP status code.

Example:

```js
res.status(404).send("Not Found");
```

Common codes:

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |

---

## 4️⃣ `res.redirect()`

Redirects to another route.

Example:

```js
res.redirect("/login");
```

Used in:

* Authentication
* After form submission

---

# 🧱 Full Practical Example

```js
const express = require("express");
const app = express();

app.use(express.json());

// Route Params
app.get("/users/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

// Query Params
app.get("/search", (req, res) => {
  res.json({ keyword: req.query.q });
});

// Body
app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
```

---

# 🧠 Important Understanding

| Property    | Used For           |
| ----------- | ------------------ |
| req.params  | URL dynamic values |
| req.query   | URL filters        |
| req.body    | Request payload    |
| req.headers | Metadata           |

---

# 🔥 Interview-Level One Line

“The req object contains all incoming request data, while res is used to send responses back to the client.”

---

Now I test you 👀

If I hit:

```
GET /users/10?page=2
```

What will be inside:

* req.params
* req.query
