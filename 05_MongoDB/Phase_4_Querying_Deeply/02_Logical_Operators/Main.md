
# Logical Operators in MongoDB

Main operators:

```
$and
$or
$not
```

---

# 🧠 1️⃣ `$and` — All Conditions Must Be True

MongoDB automatically uses `$and` when you write multiple conditions.

### Example:

```js
db.users.find({
  age: { $gte: 18 },
  role: "user"
})
```

This is same as:

```js
db.users.find({
  $and: [
    { age: { $gte: 18 } },
    { role: "user" }
  ]
})
```

Return users who:

* Age ≥ 18
* AND role = user

---

# 🧠 2️⃣ `$or` — At Least One Condition True

Example:

```js
db.users.find({
  $or: [
    { role: "admin" },
    { age: { $lt: 18 } }
  ]
})
```

Return users who:

* Are admin
* OR under 18

---

# 🧠 3️⃣ `$not` — Negates Condition

Used with another operator.

Example:

```js
db.users.find({
  age: { $not: { $gt: 30 } }
})
```

Return users where age is NOT greater than 30
Meaning age ≤ 30

---

# 🔥 Combine Logical + Comparison Operators

Example:

Users who:

* Age between 18–30
* AND (role is admin OR user)

```js
db.users.find({
  age: { $gte: 18, $lte: 30 },
  $or: [
    { role: "admin" },
    { role: "user" }
  ]
})
```

This is real-world filtering logic.

---

# 🚀 Real API Example

```
GET /users?role=admin&minAge=18
```

Controller:

```js
const query = {};

if (req.query.role) {
  query.role = req.query.role;
}

if (req.query.minAge) {
  query.age = { $gte: Number(req.query.minAge) };
}

const users = await User.find(query);
```

Logical operators help build dynamic queries.

---

# 🧠 Important Concept

MongoDB evaluates logical operators in structured format.

You cannot write:

```js
{ role: "admin" || age: 20 }
```

Must use:

```js
{ $or: [...] }
```

---

# 🧠 Mongoose Example

```js
await User.find({
  $or: [
    { role: "admin" },
    { age: { $lt: 18 } }
  ]
});
```

---

# 🎯 Interview-Level Answer

“Logical operators like $and, $or, and $not allow combining multiple conditions in MongoDB queries to filter documents based on complex logic.”

---

# 🧠 Now Think Carefully

If you write:

```js
db.users.find({
  age: { $gt: 18 },
  age: { $lt: 30 }
})
```

Will this work correctly?

Why or why not?
