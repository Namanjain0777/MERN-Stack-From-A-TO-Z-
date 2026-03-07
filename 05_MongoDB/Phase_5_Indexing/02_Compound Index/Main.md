

# 🚀 What is a Compound Index?

A **Compound Index** is an index created on **multiple fields**.

Instead of indexing one field:

```js
db.users.createIndex({ email: 1 })
```

You index multiple fields:

```js
db.users.createIndex({ name: 1, age: -1 })
```

This improves queries that filter using **both fields together**.

---

# 🧠 Example Data

```json
{
  "name": "Naman",
  "age": 21,
  "city": "Delhi"
}
```

---

# 🚀 Create Compound Index

Example:

```js
db.users.createIndex({ name: 1, age: 1 })
```

Now MongoDB builds index like:

```
(name, age)
```

---

# ⚡ Query That Uses This Index

```js
db.users.find({
  name: "Naman",
  age: 21
})
```

Very fast because index already sorted by both fields.

---

# 🧠 Important Rule (Index Order)

Order of fields matters.

Example index:

```js
db.users.createIndex({ name: 1, age: 1 })
```

MongoDB can efficiently run:

```js
db.users.find({ name: "Naman" })
```

OR

```js
db.users.find({ name: "Naman", age: 21 })
```

But NOT efficiently:

```js
db.users.find({ age: 21 })
```

Because `age` is second field.

This is called **Prefix Rule**.

---

# 🚀 Sorting with Compound Index

Example index:

```js
db.orders.createIndex({ userId: 1, createdAt: -1 })
```

Now query:

```js
db.orders.find({ userId: 10 }).sort({ createdAt: -1 })
```

Extremely fast.

This pattern is used a lot in:

* timelines
* dashboards
* analytics

---

# 🧠 Real Backend Example

Orders collection:

```json
{
  "userId": 1001,
  "createdAt": "2024-01-10",
  "total": 500
}
```

Create index:

```js
db.orders.createIndex({ userId: 1, createdAt: -1 })
```

Now you can quickly fetch:

```
Latest orders of a user
```

---

# 🚀 Compound Unique Index

Example:

Prevent duplicate combination.

```js
db.orders.createIndex(
  { userId: 1, productId: 1 },
  { unique: true }
)
```

Now same user cannot buy same product twice (if required).

---

# 🧠 When to Use Compound Index

Use when queries frequently include multiple fields:

Example queries:

```
find user by email + status
find orders by userId + date
find products by category + price
```

---

# 🎯 Interview-Level Answer

“A compound index is an index that includes multiple fields and improves performance for queries that filter or sort by those fields together.”

---

# 🧠 Now Think Carefully

If you create index:

```js
db.users.createIndex({ name: 1, age: 1, city: 1 })
```

Which queries will use this index efficiently?

1️⃣ `{ name: "Naman" }`
2️⃣ `{ name: "Naman", age: 21 }`
3️⃣ `{ age: 21 }`

Explain why.
