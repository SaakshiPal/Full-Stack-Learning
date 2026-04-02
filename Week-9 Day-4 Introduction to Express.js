-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 WEEK 9 – DAY 4 🚀 Introduction to Express.js

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Goal of Day 4

✔ Understand **what Express.js is**
✔ Learn **why Express is used**
✔ Create a **basic Express server**
✔ Understand **routing & middleware basics**
✔ Build simple backend apps

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 What is Express.js?

**Express.js** is a **fast, minimal web framework for Node.js**.

👉 It helps you build:

* Web servers
* APIs
* Backend applications

📌 Built on top of Node.js

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Why Use Express.js?

Without Express:

❌ Complex HTTP module code
❌ Manual routing
❌ Hard to manage

With Express:

✔ Simple syntax
✔ Easy routing
✔ Middleware support
✔ Faster development

---

🔷 Install Express

```bash
npm install express
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Create Basic Express Server

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Open:

```text
http://localhost:3000
```

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Understanding req & res

| Object | Meaning              |
| ------ | -------------------- |
| req    | Request from client  |
| res    | Response from server |

Example:

```javascript
app.get("/", (req, res) => {
  res.send("Hello User");
});
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Routing in Express

Routing defines how app responds to requests.

```javascript
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 HTTP Methods in Express

| Method | Use         |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Create data |
| PUT    | Update data |
| DELETE | Delete data |

Example:

```javascript
app.post("/user", (req, res) => {
  res.send("User created");
});
```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Middleware (Basic Concept ⭐)

Middleware runs between request and response.

```javascript
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

✔ Can modify request/response
✔ Must call `next()`

---

🔷 Built-in Middleware

```javascript
app.use(express.json());
```

✔ Parses JSON request body

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Sending Different Responses

Text

```javascript
res.send("Hello");
```

---

JSON

```javascript
res.json({ name: "Saakshi" });
```

---

Status Code

```javascript
res.status(200).send("Success");
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Example Simple API

```javascript
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(3000);
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Project Structure (Basic)

```text
ExpressApp/
│
├── server.js
├── routes/
├── controllers/
└── package.json
```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Express vs Node HTTP

| Feature     | HTTP Module | Express |
| ----------- | ----------- | ------- |
| Routing     | Manual      | Easy    |
| Code        | Long        | Short   |
| Middleware  | No          | Yes     |
| Scalability | Low         | High    |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Real-World Flow

```text
Frontend (React)
        ↓
Express Server
        ↓
Database
        ↓
Response
```

---

  ⚠️ Common Mistakes

❌ Forgetting `res.send()`
❌ Not using middleware
❌ Not handling errors
❌ Hardcoding routes

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

💡 Best Practices

✔ Use middleware
✔ Organize routes properly
✔ Use proper HTTP methods
✔ Handle errors

---

🧠 Real-World Use Cases

✔ REST APIs
✔ Authentication systems
✔ E-commerce backend
✔ Dashboard apps

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🏷️ Suggested GitHub Topics

```text
express
nodejs
backend
api
javascript
web-development
learning
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✅ DAY-4 Summary (Week-9)

* What Express.js is
* Basic server creation
* Routing
* Middleware basics
* API creation
