

# 🚀 What is a Unique Index?

A **Unique Index** ensures that:

> No two documents in a collection can have the same value for a specific field.

If a duplicate value is inserted → MongoDB throws an error.

---

# 🧠 Example Without Unique Index

Collection:

```json
{ "email": "naman@gmail.com" }
{ "email": "naman@gmail.com" }
```

MongoDB allows duplicates by default.

This can break:

* Login systems
* User identity
* Business logic

---

# 🚀 Create Unique Index

Example:

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

Now MongoDB prevents duplicate emails.

---

# ⚡ What Happens on Duplicate Insert

Example:

```js
db.users.insertOne({ email: "naman@gmail.com" })
```

If email already exists:

MongoDB throws error:

```
E11000 duplicate key error
```

This protects your database.

---

# 🧠 Real Backend Example

User collection:

```json
{
  "name": "Naman",
  "email": "naman@gmail.com",
  "password": "hashed_password"
}
```

Unique index on email ensures:

```
Each user has unique email
```

---

# 🚀 Unique Index with Multiple Fields (Compound Unique)

Example:

```js
db.orders.createIndex(
  { userId: 1, productId: 1 },
  { unique: true }
)
```

Now same user cannot add same product twice.

---

# 🧠 Unique Index in Mongoose

Schema example:

```js
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  }
});
```

Mongoose will create unique index in MongoDB.

---

# ⚠️ Important Note

`unique: true` in Mongoose is **not validation**.

It just creates an index.

Duplicate errors still come from MongoDB.

---

# 🚀 Check Existing Indexes

```js
db.users.getIndexes()
```

You will see something like:

```json
{
  "key": { "email": 1 },
  "unique": true
}
```

---

# 🧠 When to Use Unique Index

Use for fields like:

* email
* username
* phone number
* national ID
* order number

---

# 🎯 Interview-Level Answer

“A unique index ensures that the indexed field contains only unique values across the collection, preventing duplicate entries.”

---

# 🧠 Now Think Carefully

If you already have duplicate emails in a collection and then run:

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

Will MongoDB create the index successfully?

Why or why not?
