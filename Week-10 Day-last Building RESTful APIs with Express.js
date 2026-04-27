-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 WEEK 10 – FINAL DAY 🌐 Building RESTful APIs with Express.js

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Goal of Final Day

✔ Understand **RESTful API principles**
✔ Build **structured APIs with Express**
✔ Implement **CRUD operations**
✔ Use **MVC architecture**
✔ Create **production-ready backend**

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 What is a RESTful API?

A **RESTful API** is:

👉 A standardized way to build APIs using HTTP methods

✔ Uses URLs (endpoints)
✔ Uses HTTP methods (GET, POST, PUT, DELETE)
✔ Returns data in JSON

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 REST Principles

✔ Stateless → No session stored on server
✔ Client-Server → Separate frontend & backend
✔ Uniform Interface → Standard endpoints
✔ Cacheable → Improve performance

---

🔷 HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Create data |
| PUT    | Update data |
| DELETE | Remove data |

---

🔷 Example REST Endpoints

```text
GET     /api/users
GET     /api/users/:id
POST    /api/users
PUT     /api/users/:id
DELETE  /api/users/:id
```

---

🔷 Project Setup

```bash
npm init -y
npm install express mongoose dotenv
```

---

🔷 Basic Server Setup

```javascript
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running");
});
```

---

🔷 MVC Architecture ⭐

```text
Model → Data (MongoDB)
View → Response (JSON)
Controller → Logic
```

---

🔷 Folder Structure

```text
Backend/
│
├── models/
│   └── userModel.js
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── middleware/
│   └── auth.js
├── config/
│   └── db.js
├── server.js
└── package.json
```

---

🔷 Model (Mongoose)

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
```

---

🔷 Controller

```javascript
const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
```

---

🔷 Routes

```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

module.exports = router;
```

---

🔷 Use Routes in Server

```javascript
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 CRUD Operations

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GET

```javascript
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

---

POST

```javascript
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});
```

---

PUT

```javascript
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
});
```

---

DELETE

```javascript
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Middleware Usage

```javascript
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

---

🔷 Error Handling

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
```

---

🔷 Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 404  | Not Found    |
| 500  | Server Error |

---

🔷 API Testing

✔ Postman
✔ Thunder Client
✔ Browser (GET)

---

🔷 Real-World Flow

```text
Frontend (React)
        ↓
API (Express)
        ↓
MongoDB Database
        ↓
JSON Response
```

---

🔷 Best Practices ⭐

✔ Use MVC structure
✔ Use async/await
✔ Validate input
✔ Use proper status codes
✔ Secure APIs

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚠️ Common Mistakes

❌ No validation
❌ No error handling
❌ Mixing logic in routes
❌ Not using middleware

---

🧠 Real-World Use Cases

✔ E-commerce backend
✔ User management systems
✔ Blog APIs
✔ Authentication systems

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✅ FINAL DAY Summary (Week-10)

* RESTful API concepts
* CRUD operations
* MVC architecture
* Express routing
* Best practices

