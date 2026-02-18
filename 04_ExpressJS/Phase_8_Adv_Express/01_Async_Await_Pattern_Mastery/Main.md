
# 🚀 Why Async/Await Exists

Old Node style (callback hell):

```js
getUser(id, (err, user) => {
  if (err) return handleError(err);

  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);

    getPayment(orders[0].id, (err, payment) => {
      if (err) return handleError(err);

      console.log(payment);
    });
  });
});
```

This is:

* Nested
* Hard to debug
* Ugly
* Error-prone

---

# 🧠 Promise Version (Better but still messy)

```js
getUser(id)
  .then(user => getOrders(user.id))
  .then(orders => getPayment(orders[0].id))
  .then(payment => console.log(payment))
  .catch(err => handleError(err));
```

Better, but chaining becomes large in big apps.

---

# 🚀 Async/Await Version (Clean & Professional)

```js
try {
  const user = await getUser(id);
  const orders = await getOrders(user.id);
  const payment = await getPayment(orders[0].id);

  console.log(payment);
} catch (err) {
  handleError(err);
}
```

Readable like synchronous code.

This is production style.

---

# 🧠 Async/Await in Express (Correct Pattern)

### ❌ Wrong Way

```js
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
```

If error happens → unhandled.

---

### ✅ Correct Way (try/catch)

```js
app.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});
```

---

### 🚀 BEST WAY (Async Wrapper)

Create utility:

```js
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

Use it:

```js
app.get("/tasks", asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
}));
```

Clean. Reusable. Scalable.

---

# 🔥 Why Async/Await is Powerful in Express

Because real backend includes:

* DB calls
* API calls
* File operations
* Authentication
* External services

All async.

---

# 🧠 Common Async Mistakes

## 1️⃣ Forgetting await

```js
const user = User.findById(id);
```

This returns a Promise, not user.

Correct:

```js
const user = await User.findById(id);
```

---

## 2️⃣ Mixing await and .then()

Bad practice:

```js
await User.find().then(...)
```

Choose one style. Prefer async/await.

---

## 3️⃣ Not Returning After Response

```js
if (!user) {
  res.status(404).json({ message: "Not found" });
}
```

Should be:

```js
if (!user) {
  return res.status(404).json({ message: "Not found" });
}
```

Otherwise execution continues.

---

# 🚀 Real Production Controller Pattern

```js
exports.getTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new AppError("Task not found", 404));
  }

  res.status(200).json(task);
});
```

Clean. Safe. Professional.

---

# 🧠 Async/Await Mental Model

```
await = pause function execution
not block entire server
only pause inside that async function
```

Node remains non-blocking.

---

# 🎯 Interview-Level Answer

“Async/await simplifies asynchronous code in Node.js by allowing promise-based logic to be written in a synchronous style, improving readability and maintainability.”

---

# 🧠 Advanced Thinking Question

If you write:

```js
const users = await User.find();
const orders = await Order.find();
```

Are these queries running:

1️⃣ In parallel
2️⃣ Sequentially

How can you optimize this?
