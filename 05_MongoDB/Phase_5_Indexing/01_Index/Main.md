

# 🚀 What is an Index?

An **Index** is a special data structure that improves the speed of data retrieval.

Instead of scanning the entire collection, MongoDB uses the index to find data quickly.

Think of it like a **book index**.

Example:

```
Book without index → search every page
Book with index → jump directly to page
```

Same concept in databases.

---

# 🧠 Without Index (Slow Search)

Example query:

```js
db.users.find({ email: "naman@gmail.com" })
```

If there are:

```
1,000,000 users
```

MongoDB must check every document.

This is called:

```
Collection Scan (COLLSCAN)
```

Very slow.

---

# ⚡ With Index (Fast Search)

Create index:

```js
db.users.createIndex({ email: 1 })
```

Now MongoDB builds an index like:

```
email → document location
```

Query becomes extremely fast.

This is called:

```
Index Scan (IXSCAN)
```

---

# 🚀 How to Create an Index

Example:

```js
db.users.createIndex({ email: 1 })
```

Where:

```
1  → ascending index
-1 → descending index
```

For search, both work similarly.

---

# 🧠 Check Existing Indexes

```js
db.users.getIndexes()
```

You’ll always see default index:

```
_id index
```

MongoDB automatically indexes `_id`.

---

# 🚀 Unique Index (Very Important)

Prevent duplicate values.

Example:

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

Now two users cannot have same email.

Very useful for:

* Email
* Username
* Phone number

---

# 🚀 Compound Index

Index multiple fields.

Example:

```js
db.orders.createIndex({ userId: 1, createdAt: -1 })
```

Useful for queries like:

```
Find orders of a user sorted by date
```

---

# 🧠 How Index Improves Search

Without index:

```
O(n) time
```

With index:

```
O(log n) time
```

Huge performance improvement.

---

# 🚀 Example Performance Difference

Collection size:

```
10 million users
```

Query without index:

```
~5 seconds
```

With index:

```
~10 milliseconds
```

Massive difference.

---

# 🧠 When to Use Index

Index fields that are frequently used in:

* Search queries
* Filters
* Sorting
* Joins (lookup)

Example:

```
email
username
createdAt
userId
productId
```

---

# ⚠️ Index Trade-Off

Indexes are powerful but:

* Use extra memory
* Slow down insert/update operations

Because MongoDB must update index too.

So don’t index everything.

---

# 🎯 Interview-Level Answer

“An index is a data structure that improves query performance by allowing MongoDB to quickly locate documents without scanning the entire collection.”

---

# 🧠 Now Think Carefully

If you create **too many indexes** on a collection…

What negative impact will it have on:

1️⃣ Insert performance
2️⃣ Storage usage

Why?
