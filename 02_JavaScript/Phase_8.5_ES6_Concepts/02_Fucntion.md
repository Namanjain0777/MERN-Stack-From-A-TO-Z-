
# 🚀 Why Functions Matter in Backend

Example Express route:

```js
app.get("/users", (req, res) => {
    res.send("All Users");
});
```

Ye jo `(req, res) => {}` hai —
👉 Ye ek function hai
👉 Express internally isko call karta hai

Middleware:

```js
app.use((req, res, next) => {
    console.log("Middleware running");
    next();
});
```

Ye bhi function hai.

Isliye functions samjhe bina backend weak rahega.

---

# 🧠 1️⃣ First-Class Functions

JavaScript me functions are **first-class citizens**.

Matlab:

* Variable me store kar sakte ho
* Argument me pass kar sakte ho
* Return kar sakte ho

---

## Example

```js
const greet = function() {
    console.log("Hello");
};

greet();
```

Function ko variable me store kiya.

---

# 🧠 2️⃣ Functions as Arguments

Backend me bahut common.

```js
function processUser(callback) {
    console.log("Processing...");
    callback();
}

processUser(function() {
    console.log("Done!");
});
```

Ye hi concept Express me hota hai.

---

## Express Example

```js
app.get("/home", function(req, res) {
    res.send("Home Page");
});
```

Yaha:

* `app.get()` ek function hai
* Second argument = callback function

---

# 🧠 3️⃣ Higher-Order Functions (HOF)

Definition:

> Function that accepts another function OR returns a function.

---

## Accepting function

```js
function execute(fn) {
    fn();
}

execute(() => console.log("Running"));
```

---

## Returning function

```js
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## Backend Example (Middleware Pattern)

```js
function logger(message) {
    return function(req, res, next) {
        console.log(message);
        next();
    };
}

app.use(logger("Server hit"));
```

Ye real HOF example hai 🔥

---

# 🧠 4️⃣ Callback Patterns

Backend me common:

### Pattern 1: Success callback

```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data mil gaya");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

---

### Pattern 2: Error-first callback (Node Style)

VERY IMPORTANT FOR BACKEND 🔥

```js
function getUser(id, callback) {

    if (!id) {
        callback("User ID missing", null);
    } else {
        callback(null, { name: "Naman" });
    }

}

getUser(1, (err, user) => {

    if (err) {
        console.log("Error:", err);
    } else {
        console.log(user);
    }

});
```

Rule:

```
callback(error, result)
```

Node.js ka standard pattern hai.

---

# 🔥 Real Express Flow Samjho

When user hits:

```
GET /users
```

Internally Express karta hai:

```
1. Middleware 1 run
2. Middleware 2 run
3. Route handler run
```

Sab functions chain me run hote hain.

---

# 🧠 Backend Mental Model

```
Server = function manager
Routes = functions
Middleware = functions
Database calls = callbacks
```

---

# 🎯 Interview Perfect Answers

### What are first-class functions?

> Functions that can be treated like variables (stored, passed, returned).

### What is a higher-order function?

> A function that takes another function as argument or returns one.

### What is callback pattern?

> Passing a function to handle result after an operation completes.

---

# 🔥 Why This is VERY IMPORTANT for MERN

Because:

* Express → route handlers
* Middleware → functions with next()
* Mongoose → callbacks/promises
* React → event handlers

---

# 🧠 Golden Rule

```
Backend = functions talking to functions
```

