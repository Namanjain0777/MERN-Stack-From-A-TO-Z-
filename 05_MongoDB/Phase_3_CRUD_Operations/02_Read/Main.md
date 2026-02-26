
# 🚀 8️⃣ Read (Find)

MongoDB provides:

```
find()
findOne()
```

---

# 🧱 1️⃣ find()

Returns **all matching documents**.

Example:

```js
db.users.find()
```

Returns:

```json
[
  { "_id": 1, "name": "Naman", "age": 21 },
  { "_id": 2, "name": "Rahul", "age": 25 }
]
```

Even if only one match → returns array.

---

# 🧱 2️⃣ findOne()

Returns **first matching document only**.

Example:

```js
db.users.findOne({ name: "Naman" })
```

Returns:

```json
{ "_id": 1, "name": "Naman", "age": 21 }
```

Not an array.

---

# 🔎 Filtering (Query Conditions)

Filtering means selecting documents based on condition.

---

## 🔹 Basic Filter

```js
db.users.find({ age: 21 })
```

Returns users with age 21.

---

## 🔹 Multiple Conditions

```js
db.users.find({ age: 21, name: "Naman" })
```

AND condition.

---

## 🔹 Comparison Operators

| Operator | Meaning          |
| -------- | ---------------- |
| `$gt`    | Greater than     |
| `$lt`    | Less than        |
| `$gte`   | Greater or equal |
| `$lte`   | Less or equal    |
| `$ne`    | Not equal        |

Example:

```js
db.users.find({ age: { $gt: 20 } })
```

Users older than 20.

---

## 🔹 Logical Operators

```js
db.users.find({
  $or: [
    { age: 21 },
    { name: "Rahul" }
  ]
})
```

---

# 🎯 Projection (Select Specific Fields)

Projection controls which fields to return.

---

## 🔹 Include Specific Fields

```js
db.users.find({}, { name: 1, age: 1 })
```

Returns only name & age.

---

## 🔹 Exclude Fields

```js
db.users.find({}, { age: 0 })
```

Removes age from result.

---

⚠ Important rule:

You cannot mix include & exclude
(except `_id`).

Example:

```js
db.users.find({}, { name: 1, _id: 0 })
```

Valid.

---

# 🚀 Real Example Combined

```js
db.users.find(
  { age: { $gte: 21 } },
  { name: 1, _id: 0 }
)
```

Meaning:

* Age >= 21
* Return only name
* Hide _id

---

# 🧠 Equivalent in Mongoose

Shell:

```js
db.users.find({ age: { $gt: 20 } })
```

Mongoose:

```js
await User.find({ age: { $gt: 20 } });
```

Projection:

```js
await User.find({}, "name age -_id");
```

---

# 🎯 Interview-Level Answer

“find returns all matching documents as an array, while findOne returns a single document. Filtering allows selecting documents based on conditions, and projection controls which fields are returned.”

---

# 🧠 Now Think Carefully

If no documents match your filter:

What does `find()` return?

What does `findOne()` return?

Think carefully.
