# 1️⃣ What is npm?

👉 **npm = Node Package Manager**

It helps you:

* Install libraries
* Manage dependencies
* Run scripts
* Share projects

Example:

```bash
npm install express
```

---

# 2️⃣ `npm init`

When starting a new project:

```bash
npm init
```

It asks questions:

* project name
* version
* description
* entry point
* author

If you want shortcut:

```bash
npm init -y
```

This creates:

```
package.json
```

This file is VERY IMPORTANT.

---

# 3️⃣ What is package.json?

👉 It is the heart of every Node project.

It stores:

* Project info
* Installed packages
* Scripts
* Version control info

---

## Example package.json structure

```json
{
  "name": "backend-project",
  "version": "1.0.0",
  "description": "My Node backend",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"   // "if i do npm run dev, it will run nodemon app.js"
  },
  "author": "Naman Jain",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## Important Fields Explained

### 🔹 name

Project name

### 🔹 version

Current version (used in production apps)

### 🔹 main

Entry file

### 🔹 scripts

Custom commands

Example:

```bash
npm run dev
```

### 🔹 dependencies

Packages needed in production

### 🔹 devDependencies

Packages needed only in development

---

# 4️⃣ Dependencies vs devDependencies

This is IMPORTANT for interviews ⚠️

## ✅ Dependencies

Installed using:

```bash
npm install express
```

Used in:

* Production
* Server runtime

Examples:

* express
* mongoose
* cors
* dotenv

---

## ✅ devDependencies

Installed using:

```bash
npm install nodemon --save-dev
```

Used only in development.

Examples:

* nodemon
* eslint
* jest
* prettier

---

### 🔥 Interview Answer

> Dependencies are required to run the application in production, while devDependencies are required only during development.

---

# 5️⃣ node_modules

When you install a package:

```bash
npm install express
```

Node creates:

```
node_modules/
```

This folder contains:

* All installed packages
* Their internal dependencies

⚠️ Important:

You NEVER push node_modules to GitHub.

Instead, push:

```
package.json
package-lock.json
```

Other person can just run:

```bash
npm install
```

And node_modules will be recreated.

---

# 6️⃣ package-lock.json

This file:

* Locks exact versions of installed packages
* Ensures same dependency tree on every machine
* Improves install speed

Example:
Even if package.json says:

```
"express": "^4.18.2"
```

Lock file ensures:

```
4.18.2 exactly
```

So production won’t break.

---

### 🔥 Interview Answer

> package-lock.json ensures consistent dependency versions across environments.

---

# 7️⃣ Global vs Local Packages

## 🔹 Local Installation (Recommended)

```bash
npm install express
```

Installed inside:

```
node_modules/
```

Used only in that project.

---

## 🔹 Global Installation

```bash
npm install -g nodemon
```

Installed globally on your system.

Used from anywhere.

Example:

```bash
nodemon app.js
```

---

### 🔥 When to Install Globally?

Install globally only:

* CLI tools
* Development tools

Examples:

* nodemon
* typescript
* create-react-app

---

### ⚠️ Professional Practice

Better approach:
Install everything locally and use:

```bash
npx nodemon app.js
```

OR inside package.json scripts:

```json
"dev": "nodemon app.js"
```

Then:

```bash
npm run dev
```

---

# 🔥 Real Backend Folder Structure (Professional)

Since you're backend-focused:

```
project/
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
├── app.js
├── config/
├── controllers/
├── routes/
├── models/
└── middleware/
```

And `.gitignore` must include:

```
node_modules/
.env
```

---

# 🧠 Quick Interview Recap

If interviewer rapid fires:

### ❓ What is npm?

Package manager for Node.js.

### ❓ What is package.json?

Project metadata and dependency manager.

### ❓ Difference between dependency & devDependency?

Production vs development use.

### ❓ What is node_modules?

Folder containing installed packages.

### ❓ What is package-lock.json?

Locks exact dependency versions.

### ❓ Global vs Local?

Global = system-wide
Local = project-specific (recommended)
