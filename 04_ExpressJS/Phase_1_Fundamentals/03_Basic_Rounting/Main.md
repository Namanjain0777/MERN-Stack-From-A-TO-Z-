---

# 🚀 What is Routing?

Routing =
👉 Deciding what response to send
👉 Based on URL + HTTP Method

Every request has:

* **Method** → GET, POST, PUT, DELETE
* **Path** → `/`, `/users`, `/products/1`

Express matches both.

---

# 🧠 Basic Routing Methods

## 1️⃣ `app.get()`

Used to **fetch data**

Example:

```js
app.get("/", (req, res) => {
  res.send("Home Page");
});
```

Used for:

* Get homepage
* Get list of users
* Get product details

---

## 2️⃣ `app.post()`

Used to **create data**

Example:

```js
app.post("/users", (req, res) => {
  res.send("User Created");
});
```

Used for:

* Signup
* Login
* Add product
* Submit form

---

## 3️⃣ `app.put()`

Used to **update entire data**

Example:

```js
app.put("/users/1", (req, res) => {
  res.send("User Updated");
});
```

Used for:

* Update profile
* Replace product info

---

## 4️⃣ `app.delete()`

Used to **delete data**

Example:

```js
app.delete("/users/1", (req, res) => {
  res.send("User Deleted");
});
```

Used for:

* Delete account
* Remove product
* Delete comment

---

# 🧱 Full Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Get All Users");
});

app.post("/users", (req, res) => {
  res.send("Create User");
});

app.put("/users/1", (req, res) => {
  res.send("Update User");
});

app.delete("/users/1", (req, res) => {
  res.send("Delete User");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 🧠 Important Concept

Express matches:

```
METHOD + PATH
```

So:

```
GET /users
```

is DIFFERENT from:

```
POST /users
```

Even though path is same.

---

# 🔥 Real Backend Mapping

| Method | Meaning | Example API |
| ------ | ------- | ----------- |
| GET    | Read    | /users      |
| POST   | Create  | /users      |
| PUT    | Update  | /users/1    |
| DELETE | Delete  | /users/1    |

This is called **REST API pattern**.

---

# 🧠 req & res Quick Intro

Inside route:

```js
(req, res)
```

* `req` → request object
* `res` → response object

You will later learn:

* req.params
* req.query
* req.body
* res.json()
* res.status()

---
