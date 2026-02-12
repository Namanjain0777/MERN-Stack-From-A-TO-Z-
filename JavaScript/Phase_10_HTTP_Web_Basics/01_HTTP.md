# 🌐 1️⃣ What is HTTP?

HTTP = **HyperText Transfer Protocol**

👉 Ye ek rulebook hai jisse browser aur server baat karte hain.

Simple language me:

```
Browser bolta hai → "Mujhe data do"
Server bolta hai → "Yeh lo data"
```

---

# 🧠 Example

Tum browser me likhte ho:

```
https://example.com/users
```

Browser karta hai:

```
GET /users HTTP/1.1
```

Server response deta hai:

```
200 OK
[ { user1 }, { user2 } ]
```

---

# 📦 2️⃣ Request vs Response

## 🔹 HTTP Request (Client → Server)

Request me hota hai:

* Method (GET, POST)
* URL
* Headers
* Body (optional)

Example:

```http
POST /login HTTP/1.1
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "1234"
}
```

---

## 🔹 HTTP Response (Server → Client)

Response me hota hai:

* Status Code
* Headers
* Body

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Login successful"
}
```

---

# 🚀 3️⃣ HTTP Methods (VERY IMPORTANT)

---

## 🔹 GET → Data lene ke liye

```js
GET /users
```

✔ Safe
✔ Body nahi hoti usually

---

## 🔹 POST → Data bhejne ke liye

```js
POST /users
```

✔ New data create karta hai
✔ Body me data bhejte hain

---

## 🔹 PUT → Update data

```js
PUT /users/1
```

✔ Existing resource update

---

## 🔹 DELETE → Delete data

```js
DELETE /users/1
```

✔ Data remove

---

# 🧠 REST Mental Model

| Action | Method |
| ------ | ------ |
| Read   | GET    |
| Create | POST   |
| Update | PUT    |
| Delete | DELETE |

---

# 📊 4️⃣ Status Codes (INTERVIEW FAVORITE)

---

## 🔹 200 OK

Request successful.

---

## 🔹 201 Created

New resource successfully created.

---

## 🔹 400 Bad Request

Client ne galat data bheja.

---

## 🔹 401 Unauthorized

Login required.

---

## 🔹 404 Not Found

Route ya resource nahi mila.

---

## 🔹 500 Internal Server Error

Server side error.

---

# 🧠 Status Code Categories

| Range | Meaning      |
| ----- | ------------ |
| 2xx   | Success      |
| 3xx   | Redirect     |
| 4xx   | Client error |
| 5xx   | Server error |

---

# 📦 5️⃣ Headers & Body

---

## 🔹 Headers

Metadata hota hai.

Example:

```http
Content-Type: application/json
Authorization: Bearer token123
```

Use cases:

* Authentication
* Content type
* CORS

---

## 🔹 Body

Actual data hota hai.

Example:

```json
{
  "name": "Naman",
  "age": 22
}
```

---

# 🧠 6️⃣ JSON over HTTP

Modern MERN apps me:

```
Data always JSON format me bheja jata hai
```

React se:

```js
fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Naman"
  })
});
```

Express me:

```js
app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "User created" });
});
```

---

# 🔥 Full Flow Samjho

1. React → HTTP Request bhejta hai
2. Express → Request receive karta hai
3. MongoDB → Data store/retrieve karta hai
4. Express → Response bhejta hai
5. React → Response display karta hai

---

# 🎯 Interview Perfect Answers

### What is HTTP?

> A protocol used for communication between client and server.

### Difference between GET and POST?

> GET retrieves data, POST sends data to create a resource.

### What is status code 404?

> Resource not found.

### Why JSON used?

> Lightweight, easy to parse, standard format for APIs.

---

# 🧠 Golden Rule

```
Frontend talks to Backend using HTTP.
Backend talks to Database.
```

