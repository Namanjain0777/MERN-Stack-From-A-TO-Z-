
Now think like someone building **scalable APIs**.

Pagination + filtering are mandatory when:

* You have 10,000+ records
* You want performance
* You want clean frontend UX

Let’s master this properly.

---

# 🚀 Why Pagination is Important

Without pagination:

```js
GET /products
```

Returns 50,000 products 💀

Problems:

* Slow response
* High memory usage
* Bad performance
* Frontend lag

Pagination solves this.

---

# 🧠 Example Request

```
GET /products?page=2&limit=10
```

Meaning:

* Page 2
* 10 products per page

---

# 🧱 Basic Pagination Logic (MongoDB + Mongoose)

```js
app.get("/products", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const products = await Product.find()
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments();

  res.json({
    total,
    page,
    totalPages: Math.ceil(total / limit),
    data: products
  });
});
```

---

# 🧠 What Is Happening?

```
skip = (page - 1) * limit
```

Example:

Page 2, limit 10:

```
skip = (2 - 1) * 10 = 10
```

So:

* Skip first 10
* Return next 10

---

# 🚀 Filtering Example

Now add filtering:

```
GET /products?category=mobile
```

Controller:

```js
app.get("/products", async (req, res) => {
  const { page = 1, limit = 10, category } = req.query;

  const query = {};

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(products);
});
```

---

# 🔥 Combine Pagination + Filtering

```
GET /products?category=mobile&page=1&limit=5
```

This is real production style.

---

# 🧠 Advanced Filtering Example

Multiple filters:

```
GET /products?minPrice=1000&maxPrice=5000
```

```js
if (req.query.minPrice || req.query.maxPrice) {
  query.price = {};

  if (req.query.minPrice)
    query.price.$gte = Number(req.query.minPrice);

  if (req.query.maxPrice)
    query.price.$lte = Number(req.query.maxPrice);
}
```

---

# 🚀 Sorting

```
GET /products?sort=price
GET /products?sort=-price
```

```js
const sort = req.query.sort || "createdAt";

Product.find(query)
  .sort(sort)
  .skip(...)
  .limit(...);
```

---

# 🧠 Real Production Response Format

```json
{
  "success": true,
  "total": 120,
  "page": 2,
  "limit": 10,
  "totalPages": 12,
  "data": [...]
}
```

Frontend loves this structure.

---

# 🔥 Performance Note

For very large datasets:

* Use indexes
* Avoid high skip values
* Consider cursor-based pagination (advanced)

---

# 🎯 Interview-Level Answer

“Pagination improves performance by limiting the number of records returned per request, while filtering allows querying data based on specific conditions using query parameters.”

---

# 🧠 Now Think Carefully

If you request:

```
?page=10000&limit=10
```

Why can `.skip()` become slow in MongoDB?

What is the better alternative for very large datasets?
