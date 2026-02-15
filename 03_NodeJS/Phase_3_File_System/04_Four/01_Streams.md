# 🚀 What Are Streams?

A **stream** is a way to handle large data **chunk by chunk** instead of loading everything into memory.

Instead of:

❌ Load entire file (1GB) into RAM
We do:
✅ Read small chunks and process gradually

---

# 🧠 Why Streams Matter

Imagine:

* 2GB video file
* 500MB CSV
* Live video streaming
* Real-time logs

If you use `readFile()`:

🚨 Entire file loads into memory → crash risk

If you use Streams:

⚡ Process small pieces → memory efficient
⚡ Faster
⚡ Scalable

That’s why:

> Netflix, YouTube, large APIs use streams.

---

# 📦 Types of Streams in Node

There are 4 types:

1. Readable
2. Writable
3. Duplex
4. Transform

Today we focus on:

✔ Readable
✔ Writable
✔ Piping

---

# 1️⃣ Readable Streams

👉 Used to read data in chunks.

Import:

```js
import fs from "fs";
```

---

## 🔹 Example: Read File Using Stream

```js
const readStream = fs.createReadStream("bigfile.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file 🚀");
});
```

---

### 🔥 What Happens?

Instead of loading full file:

Node reads:

```
Chunk 1
Chunk 2
Chunk 3
...
```

---

# 2️⃣ Writable Streams

👉 Used to write data in chunks.

---

## 🔹 Example

```js
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello ");
writeStream.write("Naman 🚀");

writeStream.end();
```

This writes data gradually.

---

# 3️⃣ Piping (MOST IMPORTANT)

🔥 This is where streams become powerful.

Piping connects:

Readable → Writable

Without storing full data in memory.

---

## 🔹 Example: Copy Large File

```js
const readStream = fs.createReadStream("bigfile.txt");
const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream);
```

🔥 That’s it.

No manual chunk handling needed.

---

# 🧠 Why pipe() is Powerful?

Instead of:

```js
fs.readFile()
fs.writeFile()
```

Which loads everything into memory,

pipe():

* Reads chunk
* Sends to destination
* Reads next chunk
* Memory efficient

---

# 📊 readFile vs Stream Comparison

| Feature             | readFile | Streams |
| ------------------- | -------- | ------- |
| Memory usage        | High     | Low     |
| Large files         | Risky    | Safe    |
| Performance         | Slower   | Faster  |
| Real-time streaming | No       | Yes     |

---

# 🚀 Real Backend Use Cases

Streams are used in:

* File uploads
* Video streaming
* Sending large CSV exports
* Logging systems
* HTTP responses

---

# 🌍 HTTP + Streams Example

```js
import http from "http";
import fs from "fs";

http.createServer((req, res) => {
  const readStream = fs.createReadStream("video.mp4");
  readStream.pipe(res);
}).listen(3000);
```

🔥 This streams video directly to browser.

No memory crash.

---

# 🧠 Interview Questions

### ❓ What is a stream?

A method of processing data in chunks instead of loading it fully into memory.

### ❓ Why are streams important?

They improve memory efficiency and performance for large data.

### ❓ What is pipe()?

Method to connect readable stream to writable stream.

### ❓ Difference between readFile & createReadStream?

readFile loads entire file; stream reads in chunks.

---

# 🧠 Deep Understanding (Event Loop Connection)

Streams:

* Work with event-driven model
* Emit events like:

  * data
  * end
  * error

Node’s architecture is built around streams.

---

