# 🚀 Why We Never Store Plain Passwords

❌ NEVER do this:

```js
{
  email: "user@gmail.com",
  password: "123456"
}
```

If database leaks → all users hacked.

Instead we store:

```
Hashed password
```

---

# 🔐 What is bcrypt?

**bcrypt** is a password hashing library.

It:

* Hashes passwords
* Adds salt automatically
* Protects against brute-force attacks

---

# 🚀 Step 1 — Install bcrypt

```bash
npm install bcrypt
```

---

# 🧠 Step 2 — Hash Password Before Saving

Example User Schema:

```js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
```

---

# 🔥 Pre-Save Middleware (Professional Way)

```js
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});
```

Now password is hashed automatically before saving.

---

# 🧠 What is Salt?

Salt = random string added to password before hashing.

Prevents:

* Rainbow table attacks
* Same password → same hash issue

bcrypt handles salt internally.

---

# 🚀 Step 3 — Compare Password During Login

```js
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
```

---

# 🔥 Login Example

```js
const user = await User.findOne({ email });

if (!user) {
  return res.status(401).json({ message: "Invalid credentials" });
}

const isMatch = await user.comparePassword(password);

if (!isMatch) {
  return res.status(401).json({ message: "Invalid credentials" });
}

res.json({ message: "Login successful" });
```

---

# 🧠 Hash vs Encryption (Very Important)

| Hashing            | Encryption              |
| ------------------ | ----------------------- |
| One-way            | Two-way                 |
| Cannot reverse     | Can decrypt             |
| Used for passwords | Used for sensitive data |

Passwords must be hashed, not encrypted.

---

# 🔥 Why bcrypt is Better Than SHA256

Simple hash (like SHA256):

* Fast ❌
* Easy to brute-force ❌

bcrypt:

* Slow (intentionally) ✅
* Adjustable cost factor ✅
* Secure against brute-force ✅

---

# 🧠 What Does `10` Mean in `genSalt(10)`?

That’s cost factor.

Higher number → more secure but slower.

Typical value: 10–12.

---

# 🚀 Secure Flow in Production

```
Signup:
User password → bcrypt hash → store in DB

Login:
Entered password → bcrypt.compare() → allow/deny
```

Never compare plain text.

---

# 🎯 Interview-Level Answer

“bcrypt is a password hashing library that securely hashes passwords with salting and a configurable cost factor to prevent brute-force attacks.”

---

# 🧠 Now Think Carefully

If two users use the SAME password…

Will their hashed passwords in database be identical?

Why or why not?
