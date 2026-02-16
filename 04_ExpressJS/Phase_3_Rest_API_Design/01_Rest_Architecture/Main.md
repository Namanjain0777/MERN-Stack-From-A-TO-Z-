
# 🚀 What is REST Architecture?

REST = **Representational State Transfer**

It’s a design style for building APIs.

It defines how:

* Client communicates with server
* Resources are structured
* Responses are formatted

---

# 🧠 1️⃣ Stateless

Stateless means:

👉 Server does NOT store client session data between requests.

Each request must contain **all required information**.

---

### Example

Instead of:

```
User logs in → server stores session → next request depends on memory
```

REST style:

```
Client sends token in every request
```

Example:

```js
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Every request is independent.

---

# 🧠 2️⃣ Proper Status Codes

Status codes communicate success/failure.

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 204  | No Content   |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

---

### Example

```js
res.status(201).json({ message: "User Created" });
```

Wrong practice ❌

```js
res.status(200).send("Error");
```

---

# 🧠 3️⃣ Proper Naming (Resource-Based URLs)

REST is resource-based, not action-based.

❌ Wrong:

```
/getUsers
/createUser
/deleteUser
```

✅ Correct:

```
GET /users
POST /users
DELETE /users/:id
PUT /users/:id
```

Use nouns, not verbs.

---

# 🧠 4️⃣ JSON Responses

REST APIs usually return JSON.

Example:

```js
res.json({
    success: true,
    data: user
});
```

Instead of:

```
User Created Successfully!!!
```

JSON makes frontend integration easy.

---

# 🧱 Complete REST Example

```js
const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// GET all users
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// POST create user
app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
    res.status(204).send();
});

app.listen(3000);
```

---

# 🧠 REST Core Principles Summary

| Principle           | Meaning                |
| ------------------- | ---------------------- |
| Stateless           | No session memory      |
| Resource-based URLs | Use nouns              |
| Proper HTTP Methods | GET, POST, PUT, DELETE |
| Proper Status Codes | 200, 404, 500          |
| JSON Responses      | Structured data        |

---

# 🔥 Real Production REST Structure (MERN style)

```
/api/v1/users
/api/v1/products
/api/v1/orders
```

Versioning is also important.

---

# 🎯 Interview-Level Definition

“REST is an architectural style for designing stateless, resource-based web services that use standard HTTP methods and return structured responses like JSON.”

---

Now I test your thinking 👀

Which one is more RESTful and why?

1️⃣ `POST /createUser`
2️⃣ `POST /users`

