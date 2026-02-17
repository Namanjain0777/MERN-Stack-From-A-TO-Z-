

# 🚀 What is JWT?

JWT = **JSON Web Token**

It is used to:

* Authenticate users
* Authorize access to protected routes
* Maintain stateless sessions

---

# 🧠 JWT Structure

A JWT has 3 parts:

```
Header.Payload.Signature
```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6IjEyMyIsImVtYWlsIjoidXNlckBnbWFpbC5jb20ifQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

# 🚀 Step 1 — Install JWT

```bash
npm install jsonwebtoken
```

---

# 🚀 Step 2 — Generate Token During Login

After verifying password:

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.json({ token });
```

---

# 🧠 What is Happening?

* Payload → `{ id: user._id }`
* Secret → used to sign token
* Expiration → 1 day

JWT is now sent to client.

---

# 🚀 Step 3 — Client Sends Token in Header

Every protected request:

```
Authorization: Bearer <token>
```

---

# 🚀 Step 4 — Protect Routes (Auth Middleware)

Create:

`middleware/authMiddleware.js`

```js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
```

---

# 🚀 Use It On Protected Route

```js
const auth = require("../middleware/authMiddleware");

router.get("/profile", auth, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});
```

Flow:

```
Request
 ↓
Auth Middleware
 ↓
JWT verify
 ↓
Allow or deny
 ↓
Route handler
```

---

# 🧠 Complete Login Flow

```
User Login
 ↓
Verify email
 ↓
Verify password (bcrypt)
 ↓
Generate JWT
 ↓
Send token
 ↓
Client stores token
 ↓
Client sends token in future requests
```

Stateless authentication.

---

# 🔥 Why JWT is Powerful

✔ No session storage
✔ Scalable
✔ Works with mobile + web
✔ Perfect for MERN

---

# 🧠 Important Security Tips

1. Never expose JWT secret
2. Always set expiration
3. Use HTTPS in production
4. Don’t store token in localStorage in high-security apps (use HTTP-only cookies)

---

# 🎯 Interview-Level Answer

“JWT is a stateless authentication mechanism where a signed token is issued at login and verified on protected routes to authenticate users.”

---

# 🧠 Now Think Carefully

If someone steals a valid JWT token…

Can they access protected routes?

Why? And how can we reduce that risk?
