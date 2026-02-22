

# 🚀 1️⃣ Install MongoDB Community Edition

### What is MongoDB Community Edition?

It is:

> Free, open-source version of MongoDB.

Perfect for:

* Development
* Learning
* Small projects

---

## 🔹 Windows Installation

1. Go to:
   👉 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

2. Choose:

   * Version (latest)
   * Platform (Windows)
   * Package (.msi)

3. Run installer

4. Choose:

   * Complete Setup
   * Install as a Service (IMPORTANT)

After installation, MongoDB runs automatically as background service.

---

## 🔹 Mac Installation (Using Homebrew)

```bash
brew tap mongodb/brew
brew install mongodb-community
```

Start MongoDB:

```bash
brew services start mongodb-community
```

---

# 🚀 2️⃣ Verify Installation

Open terminal:

```bash
mongod --version
```

Or check if service running.

---

# 🚀 3️⃣ MongoDB Tools You Should Know

---

# 🧰 MongoDB Compass (GUI Tool)


Compass is:

> Official MongoDB GUI tool.

You can:

* View databases
* Create collections
* Insert documents
* Run queries
* Edit documents

Much easier than terminal.

---

# 🧰 MongoDB Shell (mongosh)

Command line tool to interact with MongoDB.

Open:

```bash
mongosh
```

Basic commands:

```bash
show dbs
use myAppDB
show collections
db.users.find()
```

---

# 🚀 4️⃣ Folder Structure in Local MongoDB

Default data location:

Windows:

```
C:\Program Files\MongoDB\Server\...\data
```

Mac:

```
/usr/local/var/mongodb
```

---

# 🚀 5️⃣ Alternative: MongoDB Atlas (Cloud)


Atlas is:

> Cloud-hosted MongoDB.

Advantages:

* No local setup
* Accessible anywhere
* Production-ready
* Free tier available

Used in:

* Real deployments
* Production apps
* MERN projects

---

# 🧠 Local vs Atlas

| Local MongoDB        | Atlas            |
| -------------------- | ---------------- |
| Runs on your machine | Cloud hosted     |
| Good for dev         | Good for prod    |
| Manual backup        | Managed backup   |
| Single system        | Scalable cluster |

---

# 🎯 Interview-Level Answer

“MongoDB Community Edition is the free version used for development, while tools like MongoDB Compass and mongosh help interact with the database.”

---

# 🧠 Now Think Carefully

For production deployment on a cloud platform (like Render or AWS)…

Would you use local MongoDB installation or MongoDB Atlas?

Why?
