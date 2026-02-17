# 🚀 Basic Connection

```js
mongoose.connect(process.env.MONGO_URI);
```

This connects your app to MongoDB using an environment variable.

But this alone is NOT production-ready.

---

# 🧠 Why Use `process.env.MONGO_URI`?

Never hardcode this ❌

```js
mongoose.connect("mongodb://127.0.0.1:27017/tasksDB");
```

Instead use `.env` file.

Why?

* Security
* Environment flexibility (dev / prod)
* Deployment-ready

---

# 🧱 Proper Setup (Professional Way)

## 1️⃣ Install dotenv

```bash
npm install dotenv
```

---

## 2️⃣ Create `.env`

```
MONGO_URI=mongodb://127.0.0.1:27017/tasksDB
PORT=3000
```

---

## 3️⃣ Load Environment Variables (VERY IMPORTANT)

In `server.js` (top of file):

```js
require("dotenv").config();
```

---

## 4️⃣ Proper DB Connection File

`src/config/db.js`

```js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌", error.message);
        process.exit(1); // stop server
    }
};

module.exports = connectDB;
```

---

## 5️⃣ Call it in server.js

```js
require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

# 🧠 Why `process.exit(1)`?

If database fails:

Server should NOT continue.

Why?

Because:

* API won’t function
* Data operations will fail
* Better to crash early than run broken

This is professional backend practice.

---

# 🔥 What Happens Internally?

`mongoose.connect()`:

* Creates connection pool
* Handles reconnection
* Maintains connection lifecycle

You don’t manually manage sockets.

---

# 🚀 If Using MongoDB Atlas (Cloud)

`.env` example:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/tasksDB
```

Never commit `.env` to GitHub.

Add to `.gitignore`.

---

# 🧠 Production Best Practice

Add listeners:

```js
mongoose.connection.on("connected", () => {
    console.log("DB connected");
});

mongoose.connection.on("error", (err) => {
    console.log("DB error:", err);
});
```

Used in large-scale apps.

---

# 🎯 Interview-Level Answer

“Mongoose.connect establishes a connection between Node.js and MongoDB using a connection string, typically stored securely in environment variables.”

---

Now think carefully 👀

If MongoDB connection drops AFTER server has started…

Should we:

1️⃣ Restart server
2️⃣ Retry connection automatically

What is better in production and why?
