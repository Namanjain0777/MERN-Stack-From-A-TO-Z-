---

# 🗑 1️⃣ `fs.unlink()` → Delete File

👉 Used to delete a file
👉 Asynchronous (non-blocking ✅ recommended)

---

## 🔹 Syntax

```js
fs.unlink(path, callback)
```

---

## 🔹 Example (ES Modules)

```js
import fs from "fs";

fs.unlink("data.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }

  console.log("File deleted successfully 🚀");
});
```

---

### 🔥 What Happens?

* If file exists → deleted
* If file doesn’t exist → error thrown

---

## ⚠️ Always Handle Errors

If file is missing:

```
ENOENT: no such file or directory
```

So always use proper error handling.

---

# 🗑 Sync Version (Blocking ❌)

```js
fs.unlinkSync("data.txt");
```

Blocks event loop → avoid in production.

---

# ✏️ 2️⃣ `fs.rename()` → Rename / Move File

👉 Used to rename a file
👉 Can also move file to another folder

---

## 🔹 Syntax

```js
fs.rename(oldPath, newPath, callback)
```

---

## 🔹 Example

```js
import fs from "fs";

fs.rename("data.txt", "newData.txt", (err) => {
  if (err) {
    console.error("Rename failed:", err);
    return;
  }

  console.log("File renamed successfully 🚀");
});
```

---

## 🔥 Move File Example

```js
fs.rename("data.txt", "backup/data.txt", (err) => {
  if (err) throw err;
  console.log("File moved successfully");
});
```

If `backup` folder exists → file moves there.

---

# 🧠 Difference Between unlink & rename

| Function      | Purpose               |
| ------------- | --------------------- |
| `fs.unlink()` | Deletes file          |
| `fs.rename()` | Renames or moves file |

---

# 🚀 Modern Promise Version (Recommended for You)

Since you're learning modern backend:

```js
import fs from "fs/promises";

await fs.unlink("data.txt");
await fs.rename("old.txt", "new.txt");
```

Use inside async function.

---

# 🔥 Real Backend Example (File Upload Cleanup)

Imagine user deletes profile image:

```js
import fs from "fs";

app.delete("/delete-avatar", (req, res) => {
  fs.unlink("uploads/avatar.png", (err) => {
    if (err) return res.status(500).send("Delete failed");

    res.send("Avatar deleted");
  });
});
```

This is common in real-world apps.

---

# 🧠 Interview Questions

### ❓ What does fs.unlink do?

Deletes a file.

### ❓ What does fs.rename do?

Renames or moves a file.

### ❓ Why avoid sync versions?

They block the event loop.

### ❓ What error occurs if file doesn’t exist?

ENOENT (no such file or directory)

---

# 💡 Pro Backend Tip

Before deleting file, you can check if it exists:

```js
fs.access("data.txt", fs.constants.F_OK, (err) => {
  if (!err) {
    fs.unlink("data.txt", () => {});
  }
});
```

---

