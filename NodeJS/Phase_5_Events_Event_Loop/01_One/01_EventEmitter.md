# 📦 What is EventEmitter?

Node has a built-in module:

```js
import EventEmitter from "events";
```

👉 `EventEmitter` allows us to:

* Create custom events
* Emit events
* Listen to events

It follows this pattern:

```
Emit → Listen → Execute
```

---

# 1️⃣ Create an Emitter

First, create an instance.

```js
import EventEmitter from "events";

const emitter = new EventEmitter();
```

Now `emitter` can:

* emit events
* listen to events

---

# 2️⃣ Listen to an Event (`on()`)

👉 `on()` is used to listen for events.

```js
emitter.on("greet", () => {
  console.log("Hello Naman 🚀");
});
```

Here:

* "greet" is event name
* Callback runs when event is triggered

---

# 3️⃣ Emit an Event (`emit()`)

👉 `emit()` triggers the event.

```js
emitter.emit("greet");
```

Output:

```
Hello Naman 🚀
```

🔥 That’s it.

---

# 4️⃣ Passing Data with Events

You can pass arguments.

```js
emitter.on("welcome", (name) => {
  console.log(`Welcome ${name}`);
});

emitter.emit("welcome", "Naman");
```

Output:

```
Welcome Naman
```

---

# 🧠 How It Works Internally

When you do:

```js
emitter.on("event", callback)
```

Node stores callback in memory.

When you do:

```js
emitter.emit("event")
```

Node:

* Finds stored listeners
* Executes them

---

# 5️⃣ Multiple Listeners for Same Event

```js
emitter.on("login", () => {
  console.log("User logged in");
});

emitter.on("login", () => {
  console.log("Send welcome email");
});

emitter.emit("login");
```

Output:

```
User logged in
Send welcome email
```

🔥 Powerful for backend logic.

---

# 6️⃣ Run Listener Only Once → `once()`

```js
emitter.once("start", () => {
  console.log("Server started");
});

emitter.emit("start");
emitter.emit("start");
```

Output:

```
Server started
```

Runs only one time.

---

# 🏗 Custom Event System Example (Real Backend Style)

Imagine:

When user registers:

* Save user
* Send email
* Log activity

Instead of writing all logic in one place ❌

We use events ✅

---

## userEvents.js

```js
import EventEmitter from "events";

const userEmitter = new EventEmitter();

export default userEmitter;
```

---

## app.js

```js
import userEmitter from "./userEvents.js";

userEmitter.on("userRegistered", (user) => {
  console.log(`Sending welcome email to ${user}`);
});

userEmitter.on("userRegistered", (user) => {
  console.log(`Logging registration of ${user}`);
});

function registerUser(name) {
  console.log("User saved to DB");
  userEmitter.emit("userRegistered", name);
}

registerUser("Naman");
```

---

🔥 Output:

```
User saved to DB
Sending welcome email to Naman
Logging registration of Naman
```

This is CLEAN backend architecture.

---

# 🧠 Why EventEmitter Matters

Used in:

* Streams
* HTTP module
* Express
* Database drivers
* Real-time apps
* Microservices

Node internally is event-driven.

---

# 🧠 Interview Questions

### ❓ What is EventEmitter?

A Node class used to create and manage custom events.

### ❓ Difference between on() and once()?

on → runs every time
once → runs only once

### ❓ Can multiple listeners exist for one event?

Yes.

### ❓ Why is Node event-driven?

To support non-blocking asynchronous architecture.

---

# 🚀 Advanced (For You)

There is also:

```js
emitter.removeListener()
emitter.off()
emitter.listenerCount()
```

Used in larger apps.

---

