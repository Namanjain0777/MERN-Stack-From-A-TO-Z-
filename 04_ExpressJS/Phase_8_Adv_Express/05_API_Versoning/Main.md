Now think like someone building **long-term scalable APIs**.

API versioning is what prevents breaking client applications when you update your backend.

Let’s master this properly.

---

# 🚀 What is API Versioning?

API Versioning means:

> Maintaining multiple versions of your API simultaneously.

Example:

```
/api/v1/users
/api/v2/users
```

So when you upgrade your API, old clients don’t break.

---

# 🧠 Why Versioning Is Important

Imagine:

Version 1 response:

```json
{
  "name": "Naman",
  "email": "naman@gmail.com"
}
```

Version 2 response:

```json
{
  "fullName": "Naman Jain",
  "email": "naman@gmail.com",
  "role": "admin"
}
```

If you change response structure without versioning →
Old mobile apps crash 💥

Versioning prevents that.

---

# 🚀 Most Common Versioning Method (URL Versioning)

```
/api/v1/users
/api/v2/users
```

This is the simplest and most common method.

---

# 🧱 Professional Express Setup

Project structure:

```
src/
  routes/
    v1/
      userRoutes.js
    v2/
      userRoutes.js
```

---

## app.js

```js
const express = require("express");
const app = express();

const userRoutesV1 = require("./routes/v1/userRoutes");
const userRoutesV2 = require("./routes/v2/userRoutes");

app.use("/api/v1/users", userRoutesV1);
app.use("/api/v2/users", userRoutesV2);

module.exports = app;
```

---

# 🧠 Alternative Versioning Methods

### 1️⃣ Header Versioning

```
Accept: application/vnd.myapp.v1+json
```

More advanced, less common.

---

### 2️⃣ Query Versioning

```
/users?version=1
```

Not recommended for production APIs.

---

# 🔥 Best Practice

✔ Always version from day one
✔ Use URL-based versioning
✔ Don’t mix logic inside same controller
✔ Separate folders per version

---

# 🚀 Real Production Example

```
/api/v1/auth/login
/api/v1/users
/api/v1/products
```

Later:

```
/api/v2/users
```

Maybe:

* New fields
* New validation
* Better performance

---

# 🧠 When Should You Create v2?

When you:

* Change response structure
* Remove fields
* Change authentication method
* Change business logic
* Introduce breaking changes

---

# 🎯 Interview-Level Answer

“API versioning allows backward compatibility by maintaining multiple versions of an API, typically implemented using URL versioning like /api/v1.”

---

# 🧠 Now Think Carefully

If you only ADD a new optional field in response…

Do you need to create v2?

Or can it stay in v1?

Explain your reasoning.
