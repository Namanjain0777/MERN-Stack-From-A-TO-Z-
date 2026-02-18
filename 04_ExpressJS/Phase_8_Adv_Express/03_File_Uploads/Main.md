

# 🚀 What is Multer?

**Multer** is a middleware for handling:

```
multipart/form-data
```

Used for uploading files in Express.

---

# 🚀 Step 1 — Install Multer

```bash
npm install multer
```

---

# 🚀 Step 2 — Basic Setup

Create folder:

```
uploads/
```

---

# 🧱 Simple Image Upload Example

```js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// File filter (only images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

// Route
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded successfully",
    file: req.file
  });
});

app.listen(3000);
```

---

# 🧠 What Is Happening?

### `upload.single("image")`

* Accepts ONE file
* Field name must be `image`

Form example:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="image" />
  <button type="submit">Upload</button>
</form>
```

---

# 🚀 Multiple Files

```js
upload.array("images", 5);
```

Max 5 images.

---

# 🚀 Access Uploaded File

Inside controller:

```js
req.file
```

Contains:

* filename
* path
* size
* mimetype

---

# 🧠 Serve Uploaded Images

Add:

```js
app.use("/uploads", express.static("uploads"));
```

Now access image via:

```
http://localhost:3000/uploads/filename.jpg
```

---

# 🔥 Production Improvements

### 1️⃣ Store image path in MongoDB

```js
const newUser = await User.create({
  name: req.body.name,
  image: req.file.filename
});
```

---

### 2️⃣ Use Cloud Storage (Advanced)

Instead of local disk:

* Cloudinary
* AWS S3
* Firebase Storage

Better for production scalability.

---

# 🚨 Security Considerations

✔ Limit file size
✔ Restrict file types
✔ Validate MIME type
✔ Sanitize filename
✔ Don’t trust original filename

---

# 🧠 Local vs Cloud Storage

| Local Storage | Cloud Storage |
| ------------- | ------------- |
| Easy          | Scalable      |
| Good for dev  | Good for prod |
| Not scalable  | CDN supported |

---

# 🎯 Interview-Level Answer

“Multer is a middleware for handling multipart/form-data in Express, primarily used for uploading files such as images.”

---

# 🧠 Now Think Carefully

If you allow file uploads without size limits…

What type of attack can happen?

And how would you prevent it professionally?
