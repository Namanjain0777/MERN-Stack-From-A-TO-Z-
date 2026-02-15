# 🧠 First Understand: Node Event Loop Phases

Node’s event loop has phases like:

1️⃣ Timers
2️⃣ Pending callbacks
3️⃣ Poll
4️⃣ Check
5️⃣ Close callbacks

Important for us:

* `setTimeout` → **Timers phase**
* `setImmediate` → **Check phase**
* `process.nextTick` → Special (runs before event loop continues)

---

# 1️⃣ `setTimeout()`

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);
```

👉 Goes to **Timers phase**
👉 Minimum delay, not exact delay

Even if delay = 0
It waits until stack is empty.

---

# 2️⃣ `setImmediate()`

```js
setImmediate(() => {
  console.log("Immediate");
});
```

👉 Runs in **Check phase**
👉 Executes after Poll phase

Mostly used in:

* I/O callbacks
* Post-processing after async work

---

# 3️⃣ `process.nextTick()` (VERY SPECIAL)

```js
process.nextTick(() => {
  console.log("NextTick");
});
```

👉 Runs **IMMEDIATELY after current operation**
👉 BEFORE event loop continues
👉 BEFORE microtasks
👉 Before timers
👉 Before setImmediate

⚠️ It is NOT part of event loop phases.

It has **highest priority in Node**.

---

# 🔥 Priority Order (Node)

Inside one cycle:

```
1. Current stack
2. process.nextTick()
3. Promise microtasks
4. Timers (setTimeout)
5. Poll
6. Check (setImmediate)
```

🔥 process.nextTick > Promise > setTimeout > setImmediate

---

# 🧪 Example 1 (Basic)

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("NextTick");
});

console.log("End");
```

---

### Execution:

1️⃣ Start
2️⃣ End
3️⃣ nextTick
4️⃣ Timeout or Immediate (depends on context)

Output (usually):

```
Start
End
NextTick
Timeout
Immediate
```

---

# 🧪 Example 2 (Inside I/O - Important)

```js
import fs from "fs";

fs.readFile("data.txt", () => {
  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate"));
});
```

🔥 In I/O callback:

Output:

```
Immediate
Timeout
```

Why?

Because:

* After I/O → Node goes to **Check phase first**
* setImmediate runs before setTimeout

---

# 🧠 Key Difference

| Function         | Runs In                 | Priority |
| ---------------- | ----------------------- | -------- |
| process.nextTick | After current operation | Highest  |
| Promise.then     | Microtask queue         | High     |
| setTimeout       | Timers phase            | Medium   |
| setImmediate     | Check phase             | Medium   |

---

# ⚠️ Important Warning

Too many `process.nextTick()` calls can:

🚨 Block event loop
🚨 Starve I/O

Because they execute before loop continues.

---

# 🧠 Real Use Cases

### ✅ process.nextTick

* Fix async ordering
* Defer execution safely

### ✅ setImmediate

* After I/O operations
* Heavy post-processing

### ✅ setTimeout

* Delay tasks
* Scheduling

---

# 🧠 Interview Questions

### ❓ Which runs first: nextTick or Promise?

👉 nextTick

### ❓ Difference between setTimeout(0) and setImmediate?

Depends on context.
Inside I/O → setImmediate runs first.

### ❓ Is nextTick part of event loop?

No. It runs before next loop iteration.

---

# 🔥 Ultimate Output Test

What will this print?

```js
console.log("1");

process.nextTick(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

setTimeout(() => {
  console.log("4");
}, 0);

setImmediate(() => {
  console.log("5");
});

console.log("6");
```
