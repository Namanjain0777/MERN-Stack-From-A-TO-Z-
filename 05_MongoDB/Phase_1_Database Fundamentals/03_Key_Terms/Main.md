

# 🗄 1️⃣ Database

A **Database** is:

> A container that holds collections.

Think of it like a folder that contains multiple collections.

Example:

```
myAppDB
```

Inside it:

```
users
products
orders
```

---

# 📂 2️⃣ Collection

A **Collection** is:

> A group of related documents.

Equivalent to a table in SQL.

Example:

```
users (collection)
```

Contains:

```json
{ "_id": 1, "name": "Naman" }
{ "_id": 2, "name": "Rahul" }
```

---

# 📄 3️⃣ Document

A **Document** is:

> A single record stored in a collection.

Equivalent to a row in SQL.

Example document:

```json
{
  "_id": "652abc123",
  "name": "Naman",
  "email": "naman@gmail.com"
}
```

Documents are stored in BSON format internally.

---

# 🏷 4️⃣ Field

A **Field** is:

> A key-value pair inside a document.

Example:

```json
{
  "name": "Naman",
  "age": 22
}
```

Here:

* `name` → field
* `age` → field

Value can be:

* String
* Number
* Boolean
* Array
* Object
* Date

---

# 🧬 5️⃣ BSON

BSON = **Binary JSON**

MongoDB stores documents in BSON format.

Why BSON?

* Faster processing
* More data types than JSON
* Efficient storage

Example extra types supported:

* Date
* ObjectId
* Decimal128
* Binary data

---

# 🆔 6️⃣ _id

Every document automatically gets:

```json
"_id": ObjectId("652abc123abc...")
```

`_id` is:

* Unique identifier
* Primary key
* Automatically created (if not provided)

You can also manually define `_id`.

Example:

```json
{
  "_id": 101,
  "name": "Naman"
}
```

---

# 🧠 Complete Structure Example

```
Database: myAppDB
   ↓
Collection: users
   ↓
Document:
{
  _id: ObjectId("abc123"),
  name: "Naman",
  role: "admin"
}
   ↓
Fields:
  _id
  name
  role
```

---

# 🎯 Interview One-Liner

“MongoDB organizes data into databases, which contain collections of documents made up of key-value fields stored internally as BSON.”

---

# 🧠 Now Think Carefully

If you insert two documents without specifying `_id`…

Will MongoDB allow it?

Why or why not?
