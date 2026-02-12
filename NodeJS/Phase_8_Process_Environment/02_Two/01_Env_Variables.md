# 🌍 What Are Environment Variables?

Environment variables are:

> Key-value pairs stored outside your code.

Example:

```
PORT=5000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=mySuperSecretKey
```

They are accessed using:

```js
process.env.VARIABLE_NAME
```

---

# 🔥 Why Environment Variables Are Needed?

Imagine this ❌

```js
const dbUrl = "mongodb://localhost:27017/mydb";
const jwtSecret = "supersecret123";
```

Problems:

* Hardcoded secrets
* Cannot change easily for production
* Dangerous if pushed to GitHub
* Not scalable

---

# ✅ Correct Professional Way

```js
const dbUrl = process.env.DB_URL;
const jwtSecret = process.env.JWT_SECRET;
```

Now you can:

* Change config without editing code
* Use different values for dev / test / production
* Keep secrets safe

---

# 🚀 What is dotenv?

`dotenv` is a package that:

> Loads environment variables from a `.env` file into process.env

---

# 📦 Install dotenv

```bash
npm install dotenv
```

---

# 📁 Create `.env` File

In root folder:

```
PORT=5000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=superSecretKey
```

---

# 🧠 Use dotenv in App

```js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORT);
```

⚠️ Important: Call `dotenv.config()` at top of file.

---

# 🔥 Real Backend Example

```js
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

🔥 Now your port is configurable.

---

# ⚠️ VERY IMPORTANT

Add `.env` to `.gitignore`

```
.env
```

Never push secrets to GitHub ❌

---

# 🧠 Why Not Just Use process.env Directly?

Because:

* In development, you need local variables
* In production (like Vercel, Render, AWS), environment variables are set in server settings

dotenv is mainly for local development.

---

# 🔥 Production Example

In production:

You don’t use `.env` file.

Instead:

* Go to hosting dashboard
* Add environment variables there

Node automatically reads them.

---

# 🧠 Dev vs Production Config Example

```js
if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}
```

Run:

```bash
NODE_ENV=production node app.js
```

---

# 📊 Why Environment Variables Matter

| Without Env          | With Env              |
| -------------------- | --------------------- |
| Hardcoded values     | Configurable          |
| Not secure           | Secure                |
| Hard to deploy       | Easy                  |
| One environment only | Multiple environments |

---

# 🧠 Interview Questions

### ❓ What are environment variables?

Configuration values stored outside application code.

### ❓ Why use dotenv?

To load .env file variables into process.env.

### ❓ Should .env be pushed to GitHub?

No.

### ❓ How do we access environment variables?

Using process.env.

---

# 🏆 Backend Professional Tip For You

Always create:

```
.env
.env.example
```

`.env.example` contains variable names only:

```
PORT=
DB_URL=
JWT_SECRET=
```

So other developers know required variables.

---

# 🔥 You’re Now Thinking Like Backend Dev

Now your Node knowledge includes:

✅ process object
✅ env variables
✅ dotenv
✅ production configuration

---

