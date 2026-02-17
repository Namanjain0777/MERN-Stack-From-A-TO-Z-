

# 🚀 What is MongoDB?

**MongoDB** is a NoSQL database.

Instead of tables (like MySQL), it uses:

* Collections
* Documents (JSON-like format)

Example document:

```json
{
  "_id": "652abc123",
  "title": "Learn Express",
  "completed": false
}
```

---

# 🧠 What is Mongoose?

Mongoose is:

> An ODM (Object Data Modeling) library for MongoDB in Node.js.

It helps you:

* Define schemas
* Validate data
* Create models
* Query database easily
* Add middleware
* Manage relationships

---

# 🚀 Step 1 — Install Mongoose

```bash
npm install mongoose
```

This adds it to dependencies.

---

# 🚀 Step 2 — Connect to MongoDB

Create:

```
src/config/db.js
```

```js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tasksDB");
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
```

---

# 🚀 Step 3 — Call DB in server.js

```js
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(3000, () => {
    console.log("Server running");
});
```

---

# 🧱 Step 4 — Create Model

```
src/models/Task.js
```

```js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
```

---

# 🧠 What You Just Learned

* Schema → defines structure
* Model → interacts with collection
* Validation rules
* Default values
* Timestamps

---

# 🚀 Step 5 — Use Model in Controller

```js
const Task = require("../models/Task");

// GET all
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

// POST create
exports.createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};
```

---

# 🔥 Now You Have:

✔ Express
✔ Router
✔ Controllers
✔ Middleware
✔ Centralized error handling
✔ MongoDB integration
✔ Mongoose models

This is now REAL backend.

---

# 🧠 Important Concept

MongoDB stores data as:

```
Database → Collections → Documents
```

Like:

```
tasksDB → tasks → { title: "Learn", completed: false }
```

---

# 🔥 Production Upgrade

Instead of hardcoding DB URL:

Use `.env`

Install:

```bash
npm install dotenv
```

Then:

```js
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
```

Professional style.

---

# 🎯 Interview-Level Answer

“Mongoose is an ODM library that provides schema-based modeling and validation for MongoDB in Node.js applications.”

---

Now think carefully 👀

If MongoDB connection fails during startup…

Should the server:

1️⃣ Continue running
OR
2️⃣ Stop immediately

And why?
