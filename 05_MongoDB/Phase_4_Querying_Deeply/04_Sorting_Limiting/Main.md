

# 🚀 Sorting & Limiting in MongoDB

Example:

```js
db.users.find().sort({ age: -1 }).limit(5)
```

This means:

1️⃣ Get users
2️⃣ Sort by age (descending)
3️⃣ Return only first 5 results

---

# 🔹 Sorting with `sort()`

Syntax:

```js
db.collection.find().sort({ field: order })
```

Where:

```
1  = ascending
-1 = descending
```

---

## 🔼 Ascending Order

```js
db.users.find().sort({ age: 1 })
```

Result:

```
18
20
22
25
30
```

Smallest → largest.

---

## 🔽 Descending Order

```js
db.users.find().sort({ age: -1 })
```

Result:

```
30
25
22
20
18
```

Largest → smallest.

---

# 🧠 Sorting by Multiple Fields

```js
db.users.find().sort({ age: 1, name: 1 })
```

Meaning:

1️⃣ Sort by age
2️⃣ If age same → sort by name

---

# 🔹 Limiting Results with `limit()`

Syntax:

```js
db.users.find().limit(5)
```

Returns only **5 documents**.

Useful when:

* Showing top items
* Reducing data transfer
* Improving performance

---

# 🚀 Combine Sort + Limit

Example:

Top 5 oldest users:

```js
db.users.find().sort({ age: -1 }).limit(5)
```

---

# 🧠 Real Backend Example

API request:

```
GET /products?sort=price&limit=10
```

Controller:

```js
const limit = Number(req.query.limit) || 10;

const products = await Product.find()
  .sort({ price: 1 })
  .limit(limit);
```

---

# 🔥 Combine with Pagination

```js
db.users.find()
  .sort({ createdAt: -1 })
  .skip(10)
  .limit(10)
```

Meaning:

* Skip first 10 users
* Return next 10 users
* Sorted by newest

This powers infinite scroll.

---

# 🧠 Equivalent in Mongoose

```js
await User.find()
  .sort({ age: -1 })
  .limit(5);
```

---

# 🎯 Interview-Level Answer

“sort() orders query results based on a field, while limit() restricts the number of documents returned.”

---

# 🧠 Now Think Carefully

If you write:

```js
db.users.find().limit(5).sort({ age: -1 })
```

Will the result be the same as:

```js
db.users.find().sort({ age: -1 }).limit(5)
```

Why or why not?
