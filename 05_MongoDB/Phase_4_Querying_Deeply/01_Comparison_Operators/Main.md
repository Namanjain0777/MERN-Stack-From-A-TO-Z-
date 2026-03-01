# Comparison Operators in MongoDB

These operators allow filtering based on numeric/date conditions.

---

# 🔼 `$gt` — Greater Than

```js
db.users.find({ age: { $gt: 21 } })
```

Meaning:

Return users where age > 21

---

# 🔽 `$lt` — Less Than

```js
db.users.find({ age: { $lt: 30 } })
```

Return users where age < 30

---

# 🔼 `$gte` — Greater Than or Equal

```js
db.users.find({ age: { $gte: 21 } })
```

Return users where age ≥ 21

---

# 🔽 `$lte` — Less Than or Equal

```js
db.users.find({ age: { $lte: 30 } })
```

Return users where age ≤ 30

---

# ❌ `$ne` — Not Equal

```js
db.users.find({ role: { $ne: "admin" } })
```

Return users who are NOT admin.

---

# 🧠 Combine Operators

Example:

Users between 18 and 25:

```js
db.users.find({
  age: { $gte: 18, $lte: 25 }
})
```

---

# 🧠 Works with Dates Too

Example:

```js
db.orders.find({
  createdAt: { $gte: new Date("2024-01-01") }
})
```

Very useful for:

* Reports
* Analytics
* Dashboards

---

# 🚀 Real Backend Example

API request:

```
GET /products?minPrice=1000&maxPrice=5000
```

Controller logic:

```js
const query = {};

if (req.query.minPrice || req.query.maxPrice) {
  query.price = {};

  if (req.query.minPrice)
    query.price.$gte = Number(req.query.minPrice);

  if (req.query.maxPrice)
    query.price.$lte = Number(req.query.maxPrice);
}
```

This is real-world usage.

---

# 🧠 Equivalent in Mongoose

```js
await User.find({ age: { $gt: 21 } });
```

Same syntax.

---

# 🔥 Why This Separates Beginners

Beginners only know:

```js
db.users.find({ age: 21 })
```

Real devs use:

* Range queries
* Combined filters
* Date filters
* Conditional logic

---

# 🎯 Interview-Level Answer

“MongoDB comparison operators like $gt, $lt, $gte, $lte, and $ne allow filtering documents based on value comparisons.”

---

# 🧠 Now Think Carefully

If you run:

```js
db.users.find({ age: { $gt: "21" } })
```

(Notice 21 is a string)

Will MongoDB behave correctly?

Why is data type important in queries?
