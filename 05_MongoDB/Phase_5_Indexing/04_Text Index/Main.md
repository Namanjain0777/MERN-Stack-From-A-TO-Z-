

# 🚀 What is a Text Index?

A **Text Index** allows MongoDB to perform **full-text search on string fields**.

Instead of searching exact matches:

```js
db.posts.find({ title: "Node.js tutorial" })
```

You can search keywords:

```js
db.posts.find({ $text: { $search: "Node tutorial" } })
```

---

# 🧠 Example Data

Collection:

```json
{
  "title": "Learn Node.js",
  "content": "Node.js is a backend runtime"
}
```

```json
{
  "title": "MongoDB Tutorial",
  "content": "MongoDB is a NoSQL database"
}
```

---

# 🚀 Create Text Index

Example:

```js
db.posts.createIndex({ title: "text", content: "text" })
```

Now MongoDB builds a **text index** on both fields.

---

# 🔎 Search Using Text Index

Example:

```js
db.posts.find({
  $text: { $search: "Node" }
})
```

Returns documents containing the word **Node**.

---

# 🧠 Multiple Keyword Search

Example:

```js
db.posts.find({
  $text: { $search: "Node MongoDB" }
})
```

MongoDB searches documents containing **either keyword**.

---

# 🚀 Phrase Search

Use quotes:

```js
db.posts.find({
  $text: { $search: "\"Node.js runtime\"" }
})
```

Search exact phrase.

---

# 🚀 Exclude Words

Example:

```js
db.posts.find({
  $text: { $search: "Node -MongoDB" }
})
```

Find documents containing **Node but not MongoDB**.

---

# 🧠 Sort by Relevance Score

MongoDB gives **text relevance score**.

Example:

```js
db.posts.find(
  { $text: { $search: "Node" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })
```

Results ranked by relevance.

---

# ⚠️ Important Limit

MongoDB allows **only ONE text index per collection**.

But that index can include multiple fields.

Example:

```js
db.posts.createIndex({
  title: "text",
  description: "text",
  content: "text"
})
```

---

# 🚀 Text Index in Mongoose

Example schema:

```js
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

postSchema.index({ title: "text", content: "text" });
```

Search:

```js
await Post.find({
  $text: { $search: "Node" }
});
```

---

# 🧠 When to Use Text Index

Use when building:

* Blog search
* Product search
* Article search
* Documentation search
* Content management systems

---

# 🎯 Interview-Level Answer

“A text index enables full-text search on string fields in MongoDB using the $text operator.”

---

# 🧠 Now Think Carefully

If you create a text index on:

```js
{ title: "text", content: "text" }
```

And search:

```js
$search: "Node MongoDB"
```

Will MongoDB return documents that contain:

1️⃣ Both words
2️⃣ Either word

Why?
