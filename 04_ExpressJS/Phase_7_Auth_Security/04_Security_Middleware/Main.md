Secure production API

Let’s break each security middleware properly.

# 🛡 1️⃣ Helmet

### What is Helmet?

Helmet helps secure Express apps by setting various **HTTP security headers**.

---

## Install

```bash
npm install helmet
```

---

## Use

```js
const helmet = require("helmet");

app.use(helmet());
```

---

## What It Protects Against

Helmet sets headers like:

* `X-Content-Type-Options`
* `X-Frame-Options`
* `Strict-Transport-Security`
* `Content-Security-Policy`

Prevents:

* Clickjacking
* XSS attacks
* MIME sniffing
* Some injection attacks

---

# 🌍 2️⃣ CORS

### What is CORS?

CORS = Cross-Origin Resource Sharing

Controls which frontend domains can access your API.

---

## Install

```bash
npm install cors
```

---

## Basic Usage

```js
const cors = require("cors");

app.use(cors());
```

---

## Restrict to Specific Domain (Production Style)

```js
app.use(cors({
  origin: "https://yourfrontend.com",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
```

Prevents unknown websites from calling your API.

---

# 🚦 3️⃣ Rate Limiting

Prevents:

* Brute-force attacks
* Spam requests
* DDoS attempts

---

## Install

```bash
npm install express-rate-limit
```

---

## Use

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: "Too many requests, please try again later"
});

app.use(limiter);
```

Production apps often limit login routes more strictly.

---

# 🧪 4️⃣ Input Validation

NEVER trust user input.

Prevent:

* Injection attacks
* Invalid data
* Broken database entries

---

## Option 1 — Joi

### Install

```bash
npm install joi
```

### Example

```js
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const { error } = schema.validate(req.body);

if (error) {
  return res.status(400).json({ message: error.details[0].message });
}
```

---

## Option 2 — express-validator

### Install

```bash
npm install express-validator
```

### Example

```js
const { body, validationResult } = require("express-validator");

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Valid Input");
  }
);
```

---

# 🧠 Why Input Validation is Critical

Without validation:

```
POST /users
{
  "email": "hacker",
  "password": {}
}
```

Can crash your server.

Validation = First line of defense.

---

# 🔐 Professional Security Stack Example

```js
app.use(helmet());
app.use(cors({ origin: "https://frontend.com" }));
app.use(express.json());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));
```

Then validation inside routes.

---

# 🚀 Real Production Security Checklist

✔ Use HTTPS
✔ Use Helmet
✔ Use CORS properly
✔ Rate limit login
✔ Validate input
✔ Hash passwords
✔ Use JWT expiry
✔ Don’t expose stack traces

---

# 🎯 Interview-Level Summary

“Security middleware like helmet, cors, rate limiting, and input validation protects Express applications from common web vulnerabilities and abuse.”

---

# 🧠 Now Think Carefully

Which route should have stricter rate limiting?

1️⃣ GET /products
2️⃣ POST /login

And why?
