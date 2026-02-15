# 📦 Path Module

Built-in module → No install needed.

```js
import path from "path";
```

Helps us:

* Handle file paths properly
* Avoid OS issues (Windows vs Linux)
* Build safe absolute paths

---

# 1️⃣ `__dirname`

👉 Gives current folder path of the file.

Example:

```js
console.log(__dirname);
```

Output (example):

```
C:\Users\Naman\my-backend
```

---

## 🔥 Why Important?

If you do this:

```js
fs.readFile("data.txt")
```

It depends on where you run the command.

But this is safer:

```js
fs.readFile(path.join(__dirname, "data.txt"));
```

Now file always loads from correct directory.

---

# 2️⃣ `__filename`

👉 Gives full file path including file name.

Example:

```js
console.log(__filename);
```

Output:

```
C:\Users\Naman\my-backend\app.js
```

---

## 🧠 Difference

| Variable     | Meaning        |
| ------------ | -------------- |
| `__dirname`  | Folder path    |
| `__filename` | Full file path |

---

# ⚠️ IMPORTANT (ES Modules)

If using:

```json
"type": "module"
```

Then `__dirname` and `__filename` DO NOT work directly.

You must do this:

```js
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

🔥 Interview favorite question.

---

# 3️⃣ `path.join()`

👉 Safely joins multiple path parts.

Example:

```js
const filePath = path.join(__dirname, "folder", "data.txt");

console.log(filePath);
```

Automatically handles:

* Windows `\`
* Linux `/`

---

## 🔥 Why Use join?

Instead of:

```js
__dirname + "/folder/data.txt" ❌
```

Use:

```js
path.join(__dirname, "folder", "data.txt") ✅
```

Safer + cross-platform.

---

# 4️⃣ `path.resolve()`

👉 Returns absolute path.

Difference from join:

* `join()` → simply joins
* `resolve()` → resolves to full absolute path

---

## 🔹 Example

```js
console.log(path.resolve("data.txt"));
```

Output:

```
C:\Users\Naman\my-backend\data.txt
```

---

## 🔥 Difference Between join & resolve

| Feature               | join         | resolve  |
| --------------------- | ------------ | -------- |
| Creates path          | ✅ Yes        | ✅ Yes    |
| Returns absolute path | ❌ Not always | ✅ Always |
| Handles ".."          | ✅ Yes        | ✅ Yes    |

---

Example:

```js
path.resolve("folder", "../data.txt");
```

It resolves correctly to absolute path.

---

# 5️⃣ `path.extname()`

👉 Returns file extension.

```js
path.extname("app.js"); 
```

Output:

```
.js
```

---

More examples:

```js
path.extname("image.png"); // .png
path.extname("file.txt");  // .txt
```

---

# 🔥 Real Backend Example (Express Static)

```js
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
```

This is very common in real backend.

---

# 🧠 Interview Questions

### ❓ What is __dirname?

Returns directory path of current file.

### ❓ Does __dirname work in ES Modules?

No, need workaround using `import.meta.url`.

### ❓ Difference between path.join and path.resolve?

resolve returns absolute path; join just combines.

### ❓ What does path.extname do?

Returns file extension.

---

# 💡 For You (Backend Dev Tip)

Always use:

```js
path.join(__dirname, ...)
```

When:

* Reading files
* Writing logs
* Serving static files
* Upload handling

Never hardcode paths.

---
