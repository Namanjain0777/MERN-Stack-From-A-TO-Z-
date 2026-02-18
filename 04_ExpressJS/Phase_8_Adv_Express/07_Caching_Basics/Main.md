Now entering **performance engineering level**.

Caching is what makes:

❌ Slow APIs
→
✅ Lightning-fast APIs

Let’s understand it properly.

---

# 🚀 What is Caching?

Caching means:

> Store frequently requested data temporarily
> So you don’t hit database every time.

Instead of:

```
Client → Server → DB → Server → Client
```

You do:

```
Client → Server → Cache → Client
```

Much faster.

---

# 🧠 Why Caching is Important

Without caching:

* Every request hits DB
* High latency
* DB overload
* Expensive cloud bills

With caching:

* Faster response
* Reduced DB load
* Better scalability

---

# 🚀 1️⃣ Simple In-Memory Caching (Basic Level)

We store data in memory inside server.

Example:

```js
let cache = {};

app.get("/products", async (req, res) => {
  if (cache.products) {
    console.log("Serving from cache");
    return res.json(cache.products);
  }

  const products = await Product.find();

  cache.products = products;

  res.json(products);
});
```

---

# 🧠 What Happens?

First request:

* Fetch from DB
* Store in memory

Next request:

* Return cached data
* No DB call

---

# 🚀 Add Expiration (TTL)

Better version:

```js
let cache = {};

app.get("/products", async (req, res) => {
  const now = Date.now();

  if (cache.products && cache.expiry > now) {
    return res.json(cache.products);
  }

  const products = await Product.find();

  cache.products = products;
  cache.expiry = now + 60 * 1000; // 1 minute

  res.json(products);
});
```

Now cache expires after 1 minute.

---

# 🚨 Problem with In-Memory Cache

❌ Lost when server restarts
❌ Not shared across multiple servers
❌ Not scalable
❌ Memory usage risk

Good for learning, not for production scaling.

---

# 🚀 2️⃣ Redis (Production-Ready Cache)

![Image](https://images.openai.com/static-rsc-3/W41E-28LXrMP8sL9Rs7X2aNW7enLrcgFFTcSGaajoaHHJydYcp1EIxzY7fwzkYn5vxn6PDZFb2z5SSNOm2JsqO_zI1uQLqlWmkcBTR5642M?purpose=fullsize\&v=1)

![Image](https://substackcdn.com/image/fetch/%24s_%21OsiQ%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F778a7e21-455b-45f6-8487-63f9eb41e88b_2000x1414.jpeg)

![Image](https://redis.io/docs/latest/images/csc/CSCWithCache.drawio.svg)

![Image](https://substackcdn.com/image/fetch/%24s_%21lZd6%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F903484b2-8c0c-4ce9-b4ab-e967538aeb78_1972x1197.jpeg)

Redis is:

* In-memory data store
* Extremely fast
* Distributed
* Production-grade

---

# 🧠 How Redis Works

```
Client → Server → Redis → (If miss) → DB
```

Redis stores:

* Strings
* JSON
* Counters
* Sessions
* Tokens

---

# 🚀 Example Redis Pattern

```js
const redis = require("redis");
const client = redis.createClient();

app.get("/products", async (req, res) => {
  const cachedData = await client.get("products");

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  const products = await Product.find();

  await client.setEx("products", 60, JSON.stringify(products));

  res.json(products);
});
```

Now:

* First request → DB
* Next requests → Redis

Super fast.

---

# 🧠 When Should You Cache?

✔ GET requests
✔ Frequently accessed data
✔ Rarely changing data

Don’t cache:

❌ Sensitive data
❌ Highly dynamic data
❌ POST/PUT requests

---

# 🔥 Production Caching Strategy

* Cache product lists
* Cache homepage data
* Cache search results
* Cache analytics

---

# 🧠 Important Concept: Cache Invalidation

If product updates:

You must clear cache.

Otherwise:
User sees old data.

Example:

```js
await client.del("products");
```

Cache invalidation is hardest problem in caching.

---

# 🎯 Interview-Level Answer

“Caching stores frequently accessed data temporarily to reduce database load and improve performance, commonly implemented using in-memory storage or Redis.”

---

# 🧠 Now Think Carefully

If you have 5 server instances behind a load balancer…

Will in-memory cache work properly?

Why or why not?
