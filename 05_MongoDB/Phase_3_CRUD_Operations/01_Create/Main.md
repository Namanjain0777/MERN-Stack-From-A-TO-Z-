# Create (Insert) in MongoDB

## 🧱 insertOne()

Used to insert **one document** into a collection.

Example:

```js
db.users.insertOne({ name: "Naman", age: 21 })
```

What happens:

* MongoDB creates document
* Automatically adds `_id`
* Stores inside `users` collection

Stored document looks like:

```json
{
  "_id": ObjectId("65fabc123abc..."),
  "name": "Naman",
  "age": 21
}
```

---

# 🧠 Return Result of insertOne()

It returns something like:

```json
{
  "acknowledged": true,
  "insertedId": ObjectId("65fabc123abc...")
}
```

Meaning:

* Insert successful
* Document ID generated

---

# 🚀 insertMany()

Used to insert **multiple documents at once**.

Example:

```js
db.users.insertMany([
  { name: "Rahul", age: 25 },
  { name: "Aman", age: 23 },
  { name: "Priya", age: 22 }
])
```

Now 3 documents inserted.

---

# 🧠 insertMany() Return Value

```json
{
  "acknowledged": true,
  "insertedIds": {
    "0": ObjectId("..."),
    "1": ObjectId("..."),
    "2": ObjectId("...")
  }
}
```

---

# 🚀 What If Collection Doesn't Exist?

MongoDB automatically:

* Creates collection
* Inserts document

No manual table creation required.

This is schema flexibility advantage.

---

# 🧠 Difference Between insertOne & insertMany

| insertOne                    | insertMany             |
| ---------------------------- | ---------------------- |
| Single document              | Multiple documents     |
| Simpler                      | Faster for bulk insert |
| Less efficient for many docs | Optimized for batch    |

---

# 🚀 Equivalent in Mongoose

Shell:

```js
db.users.insertOne({ name: "Naman" })
```

Mongoose:

```js
await User.create({ name: "Naman" });
```

Or:

```js
await User.insertMany([
  { name: "Rahul" },
  { name: "Aman" }
]);
```

---

# 🧠 Important Concept

MongoDB does NOT enforce structure.

You can do:

```js
db.users.insertOne({ randomField: 123 })
```

Unless you use Mongoose schema.

---

# 🎯 Interview-Level Answer

“insertOne inserts a single document into a collection, while insertMany inserts multiple documents in a single operation.”

---

# 🧠 Now Think Carefully

If you insert a document with the same `_id` twice…

Will MongoDB allow it?

Why or why not?
