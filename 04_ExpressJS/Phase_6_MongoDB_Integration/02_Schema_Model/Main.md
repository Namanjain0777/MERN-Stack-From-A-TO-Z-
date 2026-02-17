# 🚀 What is a Schema?

A **Schema** defines:

* Structure of documents
* Data types
* Validation rules
* Default values
* Constraints

Think of it like:

👉 Blueprint of your data.

---

# 🧱 Your Code

```js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
```

This is correct ✅
But we can improve it to production level.

---

# 🧠 What Happens Internally?

```js
mongoose.model("Task", taskSchema);
```

This creates:

* A collection named: **tasks** (plural, lowercase)
* A model named: **Task**
* Linked to `taskSchema`

MongoDB naming rule:

```
Task → tasks
User → users
Product → products
```

---

# 🧠 What Does `{ timestamps: true }` Do?

Automatically adds:

```json
{
  createdAt: "2026-02-15T10:00:00Z",
  updatedAt: "2026-02-15T10:05:00Z"
}
```

You don’t need to manage them manually.

Very important in production.

---

# 🔥 Upgrade It to Professional Level

Your current schema is basic.

Better version:

```js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: 3
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

# 🧠 Why This Is Better?

### required

Prevents empty titles

### trim

Removes extra spaces

### minlength

Validation rule

### default

Auto-sets completed = false

This prevents bad data in database.

---

# 🚀 Schema vs Model (Very Important)

| Schema            | Model                    |
| ----------------- | ------------------------ |
| Defines structure | Used to interact with DB |
| Blueprint         | Interface                |
| No DB operations  | Has DB methods           |

---

# 🧠 Model Methods You’ll Use

```js
Task.find()
Task.findById()
Task.create()
Task.findByIdAndUpdate()
Task.findByIdAndDelete()
```

These interact directly with MongoDB.

---

# 🔥 Real Backend Flow

```
Route
 ↓
Controller
 ↓
Model (Task)
 ↓
MongoDB
```

Model is bridge between Express & MongoDB.

---

# 🎯 Interview-Level Answer

“A Mongoose schema defines the structure and validation rules of documents, while a model provides an interface to perform CRUD operations on the MongoDB collection.”

---

# 🧠 Advanced Question for You

If you change the schema after data already exists in MongoDB…

Will old documents automatically update?

Think carefully before answering.
