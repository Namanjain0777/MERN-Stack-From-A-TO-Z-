
# Embedding vs Referencing in MongoDB

## 1️⃣ Embedding (Nested Documents)

Embedding means **storing related data inside the same document**.

### Example: Blog with Comments (Embedded)

```json
{
  "_id": "blog1",
  "title": "Learn Node.js",
  "content": "Node.js is powerful",
  "comments": [
    {
      "user": "Naman",
      "text": "Great article!"
    },
    {
      "user": "Rahul",
      "text": "Very helpful"
    }
  ]
}
```

Here:

```
Blog
 └── comments (embedded array)
```

Everything lives in **one document**.

---

## Advantages of Embedding

✔ Faster reads (single query)
✔ No joins required
✔ Simpler data structure
✔ Good for small related data

---

## Disadvantages

❌ Document size grows
❌ Harder to update nested arrays
❌ Not good for very large datasets

MongoDB document limit:

```
16 MB per document
```

---

# 2️⃣ Referencing (Relationships)

Referencing means **storing related documents in separate collections** and linking them using IDs.

### Example: Blog with Comments (Referenced)

**blogs collection**

```json
{
  "_id": "blog1",
  "title": "Learn Node.js"
}
```

**comments collection**

```json
{
  "_id": "comment1",
  "blogId": "blog1",
  "text": "Great article!"
}
```

Relationship:

```
Blog → Comments
```

Linked using:

```
blogId
```

---

## Advantages of Referencing

✔ Better for large datasets
✔ Avoids large documents
✔ Easier to scale
✔ Supports complex relationships

---

## Disadvantages

❌ Requires multiple queries
❌ Slightly slower reads
❌ More complex logic

---

# Example 1: Blog with Comments

Usually **embed comments** when:

* Comments are limited
* Always shown with blog
* Not reused elsewhere

Example:

```
Blog → embedded comments
```

---

# Example 2: Orders with Users

Better to **reference**.

Users collection:

```json
{
  "_id": "user123",
  "name": "Naman"
}
```

Orders collection:

```json
{
  "_id": "order1",
  "userId": "user123",
  "total": 500
}
```

Reason:

* Users have many orders
* Orders grow indefinitely
* Referencing keeps documents small

---

# Real-World Rule of Thumb

## Use Embedding when

* One-to-few relationships
* Data is always accessed together
* Small datasets
* Example:

  * blog + comments
  * product + reviews

---

## Use Referencing when

* One-to-many relationships
* Data grows large
* Data accessed independently
* Example:

  * users + orders
  * students + courses
  * posts + likes

---

# Quick Comparison

| Feature       | Embedding          | Referencing          |
| ------------- | ------------------ | -------------------- |
| Data location | Same document      | Separate collections |
| Query speed   | Faster             | Slightly slower      |
| Scalability   | Limited            | Highly scalable      |
| Best for      | Small related data | Large relationships  |

---

# In Mongoose (Reference Example)

```javascript
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: Number
});
```

Populate:

```javascript
Order.find().populate("user")
```

---

# Interview-Level Answer

**Embedding stores related data within the same document, while referencing stores data in separate collections and links them using IDs.**

---

💡 Quick thinking test (important for system design):

You are building **Instagram**.

Posts have **thousands of comments**.

Would you **embed comments inside posts** or **store comments separately**?

Why?
