# 1️⃣ Install Node.js

## 🔹 Step 1: Download Node

Go to official website:

👉 [https://nodejs.org](https://nodejs.org)

You’ll see two versions:

* ✅ **LTS (Recommended)** → Stable version (Use this)
* ❌ Current → Latest experimental

Since you're building real projects → **Install LTS**

---

## 🔹 Step 2: Install

* Download installer
* Click Next → Next → Install
* Make sure:

  * ✅ “Add to PATH” is selected

After installation, restart terminal.

---

# 2️⃣ Check Installation

Open terminal / cmd and run:

```bash
node -v
```

Example output:

```
v20.10.0
```

This means Node is installed ✅

---

Now check npm:

```bash
npm -v
```

Example:

```
10.2.3
```

---

### 🔹 What is npm?

👉 npm = Node Package Manager

It allows you to:

* Install libraries
* Manage dependencies
* Run scripts

Example:

```bash
npm install express
```

---

# 3️⃣ Run a File with Node

Create a file:

```
app.js
```

Add this inside:

```js
console.log("Hello Naman 🚀");
```

Now in terminal:

```bash
node app.js
```

Output:

```
Hello Naman 🚀
```

That’s it 🎉

You just ran JavaScript outside browser.

---

# 4️⃣ Node REPL

REPL =

> Read → Eval → Print → Loop

It is like a mini JavaScript playground inside terminal.

---

## 🔹 Start REPL

Just type:

```bash
node
```

You’ll see:

```
>
```

Now you can write JavaScript directly:

```js
> 2 + 3
5

> let a = 10
undefined

> a * 2
20
```

To exit:

```bash
.exit
```

OR press:

```
Ctrl + C (twice)
```

---

# 5️⃣ When to Use REPL?

REPL is useful for:

* Testing small JS code
* Practicing logic
* Quick debugging
* Interview practice

---

# 🔥 Interview Ready Summary

If interviewer asks:

### ❓ How do you check Node installation?

Answer:

> Using `node -v` and `npm -v`

---

### ❓ What is npm?

Answer:

> npm is Node Package Manager used to install and manage dependencies.

---

### ❓ How to run a Node file?

Answer:

> Using `node filename.js`

---

### ❓ What is REPL?

Answer:

> REPL is interactive Node environment where we can execute JavaScript line by line.

---

# 💡 Extra (Pro Tip for You)

Since you upload backend projects on GitHub:

Always initialize project like this:

```bash
npm init -y
```

It creates:

```
package.json
```

This is very important for real backend projects.

