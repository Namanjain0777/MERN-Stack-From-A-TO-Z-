
# 🚀 What is Express Router?

`express.Router()` is a mini Express application.

It allows you to:

* Group related routes
* Separate route logic
* Keep `app.js` clean
* Scale project easily

---

# 🧱 Basic Example

```js
const router = require("express").Router();
const controller = require("../controllers/taskController");

router.get("/", controller.getTasks);

module.exports = router;
```

This defines routes for one resource.

---

# 🧠 How It Connects to app.js

In `app.js`:

```js
const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// Mount router
app.use("/tasks", taskRoutes);

module.exports = app;
```

Now this route:

```js
router.get("/");
```

Becomes:

```
GET /tasks
```

Because of:

```js
app.use("/tasks", taskRoutes);
```

---

# 🔥 Full Example (Professional Setup)

## 📂 routes/taskRoutes.js

```js
const router = require("express").Router();
const controller = require("../controllers/taskController");

router.get("/", controller.getTasks);
router.get("/:id", controller.getTaskById);
router.post("/", controller.createTask);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;
```

---

## 📂 controllers/taskController.js

```js
let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ message: "Not found" });
    res.json(task);
};

exports.createTask = (req, res) => {
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ message: "Not found" });

    Object.assign(task, req.body);
    res.json(task);
};

exports.deleteTask = (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.status(204).send();
};
```

---

# 🧠 Why Router is Important

Without router:

```js
app.get("/tasks", ...)
app.get("/tasks/:id", ...)
app.post("/tasks", ...)
```

Everything inside `app.js` = messy.

With router:

```
app.js → only configuration
routes → route definitions
controllers → business logic
```

Clean architecture.

---

# 🔥 Real-World Example

Large apps use multiple routers:

```js
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
```

Each router handles its own resource.

---

# 🎯 Interview-Level Answer

“Express Router allows us to modularize route handling by grouping related endpoints into separate files.”

---

# 🧠 Important Concept

When you write:

```js
app.use("/tasks", taskRoutes);
```

`/tasks` is called a **mount path**.

So inside router, you don’t repeat `/tasks`.

---

# 🚀 Next Level

Next you should learn:

* Route-level middleware
* Router-level middleware
* Modular error handling
* API versioning

---

Now test your thinking 👀

If inside router you define:

```js
router.get("/hello");
```

And in app.js:

```js
app.use("/api/v1/tasks", taskRoutes);
```

What will be the final URL?

Answer carefully.
