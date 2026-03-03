

# Array Queries in MongoDB

Main operators:

```
$in
$nin
$elemMatch
```

---

# 🧠 Example Data

```json
{
  "_id": 1,
  "name": "Naman",
  "skills": ["Node", "MongoDB", "React"],
  "orders": [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 1000 }
  ]
}
```

---

# 🔹 1️⃣ `$in` — Match Any Value in Array

Returns documents where field matches ANY value in list.

Example:

```js
db.users.find({
  skills: { $in: ["React"] }
})
```

Returns users who have "React" in skills.

---

### Multiple Values

```js
db.users.find({
  skills: { $in: ["React", "Python"] }
})
```

Match if at least one exists.

---

# 🔹 2️⃣ `$nin` — Not In

Returns documents where field does NOT match values.

```js
db.users.find({
  skills: { $nin: ["React"] }
})
```

Returns users who do NOT have React.

---

# 🔹 3️⃣ `$elemMatch` — Match Object Inside Array

Used when array contains objects.

Example:

```json
"orders": [
  { "product": "Laptop", "price": 50000 },
  { "product": "Mouse", "price": 1000 }
]
```

Find users who bought item price > 10000:

```js
db.users.find({
  orders: {
    $elemMatch: { price: { $gt: 10000 } }
  }
})
```

This checks inside array of objects.

---

# 🧠 Why `$elemMatch` Is Important

Without it, conditions might match across different array elements incorrectly.

Example problem:

```js
db.users.find({
  "orders.product": "Laptop",
  "orders.price": { $gt: 10000 }
})
```

This could match different objects inside array.

`$elemMatch` ensures both conditions apply to SAME object.

---

# 🚀 Real Backend Example

API:

```
GET /products?tags=mobile,electronics
```

Controller:

```js
const tags = req.query.tags.split(",");

const products = await Product.find({
  tags: { $in: tags }
});
```

---

# 🧠 Mongoose Example

```js
await User.find({
  skills: { $in: ["Node"] }
});
```

For object array:

```js
await User.find({
  orders: {
    $elemMatch: { price: { $gt: 10000 } }
  }
});
```

---

# 🎯 Interview-Level Answer

“$in matches any value in a list, $nin excludes values, and $elemMatch is used to apply multiple conditions to elements within an array of objects.”

---

# 🧠 Now Think Carefully

If a document has:

```json
"skills": ["Node", "React"]
```

And you run:

```js
db.users.find({
  skills: ["Node", "React"]
})
```

Will it match?

Why or why not?
