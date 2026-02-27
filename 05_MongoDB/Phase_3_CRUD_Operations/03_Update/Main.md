# 🚀 9️⃣ Update in MongoDB

Main methods:

```js
db.users.updateOne()
db.users.updateMany()
```

---

# 🧱 1️⃣ updateOne()

Updates the **first matching document**.

Example:

```js
db.users.updateOne(
  { name: "Naman" },
  { $set: { age: 22 } }
)
```

Meaning:

* Find user with name Naman
* Set age to 22

---

# 🧠 Important: Always Use Update Operators

❌ Wrong:

```js
db.users.updateOne(
  { name: "Naman" },
  { age: 22 }
)
```

This replaces whole document (dangerous).

✅ Correct:

```js
{ $set: { age: 22 } }
```

---

# 🔥 Common Update Operators

---

# 🧩 1️⃣ `$set`

Updates specific field.

```js
db.users.updateOne(
  { name: "Naman" },
  { $set: { age: 23 } }
)
```

If field doesn’t exist → creates it.

---

# ➕ 2️⃣ `$inc`

Increments numeric field.

```js
db.users.updateOne(
  { name: "Naman" },
  { $inc: { age: 1 } }
)
```

If age = 23 → becomes 24.

Very useful for:

* Counters
* Likes
* View count

---

# 📥 3️⃣ `$push`

Adds value to array field.

Example document:

```json
{
  "name": "Naman",
  "skills": ["Node"]
}
```

Push:

```js
db.users.updateOne(
  { name: "Naman" },
  { $push: { skills: "MongoDB" } }
)
```

Result:

```json
"skills": ["Node", "MongoDB"]
```

---

# ❌ 4️⃣ `$pull`

Removes value from array.

```js
db.users.updateOne(
  { name: "Naman" },
  { $pull: { skills: "Node" } }
)
```

Removes "Node" from skills array.

---

# 🚀 updateMany()

Updates all matching documents.

```js
db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: "minor" } }
)
```

---

# 🧠 Return Value of updateOne()

Returns:

```json
{
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}
```

---

# 🚀 Equivalent in Mongoose

Shell:

```js
db.users.updateOne({ name: "Naman" }, { $set: { age: 22 } })
```

Mongoose:

```js
await User.updateOne({ name: "Naman" }, { $set: { age: 22 } });
```

Or better:

```js
await User.findByIdAndUpdate(id, { age: 22 }, { new: true });
```

---

# 🎯 Interview-Level Answer

“updateOne modifies a single matching document using update operators like $set, $inc, $push, and $pull.”

---

# 🧠 Now Think Carefully

If you run:

```js
db.users.updateOne(
  { name: "Unknown" },
  { $set: { age: 30 } }
)
```

And no user matches…

Will MongoDB throw an error?

Or just return matchedCount = 0?

Think carefully.
