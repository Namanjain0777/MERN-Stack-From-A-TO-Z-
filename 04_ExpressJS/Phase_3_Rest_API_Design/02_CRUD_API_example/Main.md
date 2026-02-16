

# 🚀 What We’re Building

| Method | Route      | Purpose         |
| ------ | ---------- | --------------- |
| GET    | /tasks     | Get all tasks   |
| GET    | /tasks/:id | Get single task |
| POST   | /tasks     | Create task     |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |

---

# 🧱 Full Working CRUD Example

```js
const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Express", completed: false },
    { id: 2, title: "Build API", completed: false }
];

// GET all tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

// GET single task
app.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
});

// POST create task
app.post("/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT update task
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.status(200).json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

# 🧠 What You Just Practiced

* Route parameters (`req.params`)
* JSON body (`req.body`)
* Status codes
* RESTful naming
* Validation
* Error handling
* Array methods (`find`, `findIndex`, `splice`)

---

# 🔥 Why This Is Important

This is EXACT structure used in:

* MERN stack
* Real APIs
* Microservices
* Production backend

Only difference later:
Instead of array → MongoDB.

---

# 🚀 Next Level Upgrade

If you want to level up:

* Add filtering using `req.query`
* Add pagination
* Separate routes into Router file
* Add middleware
* Connect MongoDB

---

Now let me test your backend brain 🧠🔥

If I send:

```
PUT /tasks/1
Body:
{}
```

Will the task change or stay same?

Explain why.
