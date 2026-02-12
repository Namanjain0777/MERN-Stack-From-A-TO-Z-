You already know:

* Node is single-threaded
* Event loop handles concurrency

But here’s the problem 👇

👉 Node runs on **one CPU core by default**

So if your machine has:

```
8 CPU cores
```

Node uses only:

```
1 core ❌
```

That’s where **Cluster Module** comes in 💪

---

# 🧠 What is Cluster Module?

Cluster module allows you to:

> Create multiple Node processes (workers)
> Each running on a different CPU core

So instead of:

```
1 process → 1 core
```

You get:

```
1 master + multiple workers → multiple cores
```

---

# 🔥 Why Multi-Core Matters?

If 1000 users hit your API:

* Single core = limited CPU power
* Multi-core = better performance

Especially useful for:

* CPU-heavy tasks
* High-traffic APIs
* Production servers

---

# 🏗 How Cluster Works

There are two types of processes:

1️⃣ Primary (Master)
2️⃣ Workers

Primary:

* Spawns workers
* Manages them

Workers:

* Handle incoming requests

---

# 🚀 Basic Cluster Example

```js
import cluster from "cluster";
import os from "os";
import http from "http";

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });

} else {
  // Workers create server
  http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

---

# 🔥 What Happens Here?

1️⃣ Primary process starts
2️⃣ It creates workers equal to CPU cores
3️⃣ Each worker runs the HTTP server
4️⃣ OS distributes incoming requests

Now all cores are used 🚀

---

# 🧠 Why Not Just Use Threads?

Node is:

* Single-threaded (event loop)
* Uses processes for scaling (cluster)
* Not multi-threaded by default

Cluster uses:

> Multiple processes, not threads

Each worker:

* Has its own memory
* Own event loop

---

# 📊 Without vs With Cluster

| Feature         | Without Cluster  | With Cluster            |
| --------------- | ---------------- | ----------------------- |
| CPU usage       | 1 core           | All cores               |
| Performance     | Limited          | Scalable                |
| Fault tolerance | Crash = app down | Worker restart possible |

---

# 🧠 Real Production Usage

In production, instead of cluster, many people use:

* PM2 (process manager)
* Docker scaling
* Kubernetes
* Load balancers (NGINX)

But cluster teaches the core concept.

---

# 🔥 Important Note

Cluster is good for:

✅ CPU-intensive apps
✅ High traffic APIs

Not necessary for:

❌ Small personal apps
❌ Low traffic apps

---

# 🧠 Interview Questions

### ❓ Why does Node need cluster?

Because Node runs on single core by default.

### ❓ Does cluster use threads?

No, it uses multiple processes.

### ❓ What happens if a worker crashes?

Primary can restart it.

### ❓ How do we get CPU count?

`os.cpus().length`

---

# ⚠️ Limitation of Cluster

Each worker:

* Has separate memory
* No shared state

So if you store:

```js
let count = 0;
```

Each worker has its own `count`.

For shared state → use:

* Redis
* Database
* External storage

---

# 🧠 Cluster vs Worker Threads

| Cluster                  | Worker Threads             |
| ------------------------ | -------------------------- |
| Multiple processes       | Multiple threads           |
| Separate memory          | Shared memory              |
| Used for scaling servers | Used for heavy computation |

---

# 🏆 You Now Understand:

✅ Multi-core scaling
✅ Primary vs Worker
✅ CPU usage
✅ Process-based scaling
✅ Production considerations

You’re thinking like backend infrastructure dev now 😎🔥

---
