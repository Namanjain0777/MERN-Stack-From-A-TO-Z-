

# 🚀 Why We Don’t Keep Everything in One File

If you put everything inside `app.js`:

* ❌ Hard to maintain
* ❌ Hard to debug
* ❌ Hard to scale
* ❌ Impossible for team collaboration
* ❌ Messy after 500+ lines

Professional projects follow **separation of concerns**.

---

# 🏗 Professional Express Project Structure

```
project/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── app.js
│
├── package.json
└── server.js
```

Now let’s understand each folder.

---

# 📂 1️⃣ controllers/

Contains business logic.

Example:

`taskController.js`

```js
let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
};
```

👉 Controllers handle logic only.

---

# 📂 2️⃣ routes/

Defines API endpoints.

Example:

`taskRoutes.js`

```js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);

module.exports = router;
```

👉 Routes connect URL → Controller.

---

# 📂 3️⃣ middleware/

Custom middleware functions.

Example:

`authMiddleware.js`

```js
module.exports = (req, res, next) => {
    if (req.headers.authorization === "secret") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
```

---

# 📂 4️⃣ models/

Handles database logic.

Currently:

* Could contain schemas (if using MongoDB)
* Data validation
* DB queries

Later with Mongoose:

```js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("Task", taskSchema);
```

---

# 📂 5️⃣ config/

Configuration files:

* Database connection
* Environment variables
* Constants

Example:

`db.js`

```js
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
```

---

# 📂 6️⃣ app.js

Main app configuration.

```js
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);

module.exports = app;
```

---

# 📂 server.js

Starts server.

```js
const app = require("./src/app");

app.listen(3000, () => {
    console.log("Server running");
});
```

---

# 🧠 Why This Structure Is Powerful

✔ Scalable
✔ Clean
✔ Easy to test
✔ Team-friendly
✔ Production-ready

This is used in:

* MERN projects
* Startup backends
* Enterprise APIs
* Microservices

---

# 🔥 Real Production Upgrade

Even more advanced structure:

```
src/
  services/
  utils/
  validators/
  constants/
  exceptions/
```

But first master basic structure.

---

# 🎯 Interview One-Liner

“We separate routes, controllers, models, and middleware to follow clean architecture and separation of concerns.”

---

Now test question 👀

Why should `controllers` NOT directly define routes using `app.get()`?

Think carefully. This is architectural understanding.
