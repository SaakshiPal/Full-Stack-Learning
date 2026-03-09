------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 WEEK 7 – DAY 6 🟢 Introduction to Node.js

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Goal of Day 6

✔ Understand **what Node.js is**
✔ Learn **how Node.js works**
✔ Create a **basic Node server**
✔ Understand **modules & npm**
✔ Prepare for backend development

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 What is Node.js?

**Node.js** is a **JavaScript runtime environment** that allows you to run JavaScript **outside the browser**.

Before Node.js:

```id="f4mkw8"
JavaScript → Browser only
```

After Node.js:

```id="o37ngj"
JavaScript → Browser + Server
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Why Node.js is Popular?

✔ Same language for frontend & backend
✔ Fast execution (V8 engine)
✔ Non-blocking architecture
✔ Huge ecosystem (npm)
✔ Used in real-world apps

Companies using Node.js:

* Netflix
* PayPal
* Uber
* LinkedIn
* Walmart

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚙️ How Node.js Works

Node.js uses:

✔ **Event-driven architecture**
✔ **Non-blocking I/O**
✔ **Single-threaded event loop**

Flow:

```id="xhe72l"
Client Request → Event Loop → Callback → Response
```

This makes Node.js very fast for handling multiple requests.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Node.js Architecture

Main components:

1️⃣ V8 JavaScript Engine
2️⃣ Event Loop
3️⃣ Node APIs
4️⃣ Callback Queue

Example flow:

```id="u95dzz"
Request → Event Loop → Task Queue → Response
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Installing Node.js

Download from:

[https://nodejs.org](https://nodejs.org)

Check installation:

```bash id="19nhfy"
node -v
npm -v
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 First Node.js Program

Create file:

```id="k3p70c"
app.js
```

Code:

```javascript id="jv7rxk"
console.log("Hello from Node.js");
```

Run:

```bash id="g9m07b"
node app.js
```

Output:

```id="24l8ai"
Hello from Node.js
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Creating a Simple Server

```javascript id="3fp8bb"
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run server:

```bash id="py3x69"
node app.js
```

Visit:

```id="rf22pm"
http://localhost:3000
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Node.js Modules

Node uses **modules** to organize code.

Types:

1️⃣ Core Modules
2️⃣ Local Modules
3️⃣ Third-party Modules

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Example Core Module

```javascript id="flhks8"
const os = require("os");

console.log(os.platform());
```

---

🔷 NPM (Node Package Manager)

NPM is the **largest package manager for JavaScript**.

Install package:

```bash id="s3tma1"
npm install express
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 package.json

This file stores:

✔ Project info
✔ Dependencies
✔ Scripts

Example:

```json id="p1sn9k"
{
  "name": "node-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Node.js vs Browser JavaScript

| Browser JS         | Node.js            |
| ------------------ | ------------------ |
| Runs in browser    | Runs on server     |
| Uses DOM           | No DOM             |
| Uses window object | Uses global object |

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Node.js Use Cases

✔ REST APIs
✔ Real-time chat apps
✔ Streaming apps
✔ Backend services
✔ Microservices

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Example Backend Architecture

```id="tnt1k8"
Frontend (React)
        ↓
Backend (Node.js + Express)
        ↓
Database (MongoDB)
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚠️ Common Beginner Mistakes

❌ Forgetting async nature
❌ Blocking event loop
❌ Not handling errors
❌ Installing unnecessary packages

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

💡 Best Practices

✔ Use async/await
✔ Keep modules small
✔ Use environment variables
✔ Handle errors properly
✔ Use frameworks like Express

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📂 Example Project Structure

```id="zw9js8"
NodeJS/
│
├── app.js
├── package.json
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
└── README.md
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 Real-World Example

Full stack app:

```id="ke1nmo"
React → Node.js API → MongoDB
```

Example apps:

* Chat applications
* Online stores
* Social media platforms

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🏷️ Suggested GitHub Topics

```id="4tsh9p"
nodejs
backend
javascript
server
web-development
learning
```

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📢 Suggested LinkedIn Post

🚀 Started learning **Node.js for backend development**

Today I learned:

✔ Node.js architecture
✔ Event loop
✔ Creating a server
✔ Using npm packages

Excited to build full stack applications!

#NodeJS #Backend #WebDevelopment #JavaScript

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✅ DAY-6 Summary (Week-7)

* What Node.js is
* Node.js architecture
* Creating a server
* Modules and npm
* Backend development basics

