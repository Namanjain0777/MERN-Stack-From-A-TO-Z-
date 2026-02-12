# 🌊 What Are Streams (Quick Recap)

A stream processes data:

> Chunk by chunk instead of loading everything into memory.

Example:

Instead of:

```js
fs.readFile("5GBfile.mp4")
```

We use:

```js
fs.createReadStream("5GBfile.mp4")
```

Because:

* Memory efficient
* Faster
* Scalable

---

# 🧠 Types of Streams (Node)

1️⃣ Readable
2️⃣ Writable
3️⃣ Duplex
4️⃣ Transform

Today we focus on performance aspects.

---

# 🚀 Why Streams Matter for Large Files

Imagine:

* 5GB CSV export
* 2GB video streaming
* Huge log files
* Large API responses

If you use `readFile()`:

❌ Loads entire file into RAM
❌ High memory usage
❌ Server crash risk

If you use streams:

✅ Reads small chunks
✅ Sends gradually
✅ Low memory usage
✅ Handles many users

---

# 🔥 Large File Handling Example

## ❌ Bad Way

```js
import fs from "fs";

fs.readFile("bigfile.txt", (err, data) => {
  res.end(data);
});
```

Loads entire file in memory.

---

## ✅ Correct Way (Streaming)

```js
import fs from "fs";
import http from "http";

http.createServer((req, res) => {
  const readStream = fs.createReadStream("bigfile.txt");

  readStream.pipe(res);
}).listen(3000);
```

🔥 Memory efficient
🔥 Scalable

---

# 🧠 What is Backpressure?

This is VERY IMPORTANT.

Backpressure happens when:

> Writable stream is slower than readable stream.

Example:

* Reading file very fast
* Writing to network slowly

If we don’t control it:

🚨 Memory builds up
🚨 Server crash
🚨 Performance drops

---

# 🧠 How Node Handles Backpressure

Node streams automatically handle backpressure using:

* Internal buffering
* `.write()` return value
* `drain` event

---

# 🔬 Manual Backpressure Example

```js
const readStream = fs.createReadStream("bigfile.txt");
const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
  const canWrite = writeStream.write(chunk);

  if (!canWrite) {
    readStream.pause();   // Stop reading
  }
});

writeStream.on("drain", () => {
  readStream.resume();    // Resume when ready
});
```

🔥 This prevents memory overflow.

---

# 🚀 Why pipe() Is Powerful

Instead of manually handling pause/resume:

```js
readStream.pipe(writeStream);
```

Node internally:

* Manages backpressure
* Pauses readable when writable is slow
* Resumes automatically

🔥 That’s why `.pipe()` is best practice.

---

# 🧠 HighWaterMark (Advanced)

Streams use internal buffer size called:

> highWaterMark

Default:

* 64KB for files
* 16KB for network

You can control it:

```js
fs.createReadStream("bigfile.txt", {
  highWaterMark: 1024 * 1024 // 1MB
});
```

Used in performance tuning.

---

# 🌍 Real Backend Example (Video Streaming)

```js
app.get("/video", (req, res) => {
  const stream = fs.createReadStream("video.mp4");
  stream.pipe(res);
});
```

Browser starts playing immediately
No full load required.

---

# 🧠 Why Streams Are Core to Node

Streams power:

* HTTP responses
* File uploads
* Compression
* Database drivers
* Real-time data

Node is built around streams.

---

# 📊 readFile vs Stream Comparison

| Feature      | readFile | Stream |
| ------------ | -------- | ------ |
| Memory usage | High     | Low    |
| Large files  | Risky    | Safe   |
| Performance  | Slower   | Faster |
| Backpressure | No       | Yes    |

---

# 🧠 Interview Questions

### ❓ What is backpressure?

When writable stream is slower than readable stream.

### ❓ How does Node handle backpressure?

Using internal buffering and drain event.

### ❓ Why use pipe()?

Automatically manages backpressure.

### ❓ Why are streams important?

Memory efficient large data handling.

---

# 🔥 Production Level Understanding

When handling:

* CSV export APIs
* File upload APIs
* Video streaming
* Huge database exports

Streams are mandatory.

Without streams → your server won’t scale.

---

# 🏆 You Are Now Advanced Level Node

You now understand:

✅ Event Loop
✅ Microtasks / Macrotasks
✅ HTTP module
✅ Error handling
✅ Streams
✅ Backpressure
✅ Large file handling

You’re moving from student → backend engineer 🔥

---
