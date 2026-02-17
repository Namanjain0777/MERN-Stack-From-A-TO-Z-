
# 🚀 What is Role-Based Access Control?

RBAC means:

> Access to routes depends on user role.

Example roles:

* user
* admin
* moderator

---

# 🧠 Step 1 — Add Role in User Schema

```js
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});
```

Now every user has a role.

---

# 🚀 Step 2 — Include Role in JWT

When generating token:

```js
const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);
```

Now JWT carries role info.

---

# 🚀 Step 3 — Auth Middleware (Verify Token)

```js
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // contains id & role
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
```

---

# 🚀 Step 4 — Role Middleware

Create role-check middleware:

```js
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = authorize;
```

---

# 🚀 Step 5 — Protect Routes

### 🔹 User Route

```js
router.get("/profile", auth, (req, res) => {
  res.json({ message: "User profile" });
});
```

Any logged-in user can access.

---

### 🔹 Admin Route

```js
const authorize = require("../middleware/authorize");

router.delete(
  "/users/:id",
  auth,
  authorize("admin"),
  (req, res) => {
    res.json({ message: "User deleted by admin" });
  }
);
```

Only admin can access.

---

# 🧠 Flow of RBAC

```
Request
 ↓
Auth Middleware (Verify JWT)
 ↓
Role Middleware (Check Role)
 ↓
Route Handler
```

---

# 🔥 Why Use Separate Middleware?

Clean architecture.

Instead of:

```js
if (req.user.role !== "admin") ...
```

inside every route ❌

We centralize authorization logic ✅

---

# 🧠 Status Codes Used

| Situation                   | Code |
| --------------------------- | ---- |
| Not logged in               | 401  |
| Logged in but no permission | 403  |

Very important distinction.

---

# 🚀 Real Production Example

```
GET /dashboard → user
GET /admin/stats → admin only
DELETE /users/:id → admin only
```

---

# 🎯 Interview-Level Answer

“Role-Based Access Control restricts access to resources based on user roles, implemented in Express using middleware after JWT authentication.”

---

# 🧠 Now Think Carefully

If someone manually edits their JWT payload and changes role to "admin"…

Will they become admin?

Why or why not?
