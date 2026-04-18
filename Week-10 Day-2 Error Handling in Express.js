-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 WEEK 10 – DAY 2 ⚠️ Error Handling in Express.js

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Goal of Day 2

✔ Understand **types of errors in Express**
✔ Learn **error handling techniques**
✔ Use **try-catch & async handling**
✔ Create **global error middleware**
✔ Build robust APIs

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 What is Error Handling?

Error handling means:

👉 Detecting and managing errors in your application

```text id="0qk7m3"
Error → Handle → Respond → Continue
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Types of Errors in Express

1️⃣ Synchronous Errors
2️⃣ Asynchronous Errors
3️⃣ Custom Errors
4️⃣ System Errors

---

🔷 Handling Synchronous Errors

```javascript id="7h4k2p"
app.get("/", (req, res) => {
  try {
    throw new Error("Something went wrong");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
```

---

🔷 Handling Asynchronous Errors

```javascript id="3k8p1m"
app.get("/async", async (req, res) => {
  try {
    throw new Error("Async error");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
```

---

🔷 Using next() for Errors

```javascript id="5p2k8m"
app.get("/error", (req, res, next) => {
  const err = new Error("Error occurred");
  next(err);
});
```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Global Error Middleware (Very Important ⭐)

```javascript id="6k9p3m"
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

📌 Must have **4 parameters**

---

🔷 Example Full Flow

```javascript id="8p4k2m"
app.get("/", (req, res, next) => {
  try {
    throw new Error("Test error");
  } catch (err) {
    next(err);
  }
});
```

---

🔷 Custom Error Handling

```javascript id="9k3p1m"
app.get("/user", (req, res, next) => {
  const user = null;

  if (!user) {
    return next(new Error("User not found"));
  }

  res.send(user);
});
```

---

🔷 Proper Status Codes

```javascript id="1p7k3m"
res.status(404).json({ message: "Not Found" });
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Async Wrapper Function (Best Practice ⭐)

```javascript id="2k8p4m"
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

Usage:

```javascript id="3p9k2m"
app.get("/data", asyncHandler(async (req, res) => {
  throw new Error("Async error");
}));
```

---

🔷 Structured Error Response

```javascript id="4k2p8m"
res.status(500).json({
  success: false,
  message: "Internal Server Error"
});
```

---

🔷 Error Handling Flow

```text id="5k9p3m"
Request
  ↓
Route Handler
  ↓
Error Occurs
  ↓
next(err)
  ↓
Error Middleware
  ↓
Response
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔷 Handling 404 Errors

```javascript id="6p2k8m"
app.use((req, res) => {
  res.status(404).send("Route not found");
});
```

---

🔷 Logging Errors

```javascript id="7k4p1m"
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

🔷 Real-World Error Example

```text id="8k2p4m"
User Request → Invalid Data → Error → Middleware → Response
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚠️ Common Mistakes

❌ Not using global error handler
❌ Forgetting next(err)
❌ Not handling async errors
❌ Sending sensitive data

---

💡 Best Practices

✔ Use global error middleware
✔ Use proper status codes
✔ Use asyncHandler
✔ Log errors properly
✔ Send user-friendly messages

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 Real-World Use Cases

✔ Authentication errors
✔ API validation errors
✔ Database errors
✔ Payment failures


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📢 Suggested LinkedIn Post

🚀 Learning **Error Handling in Express.js**

Today I explored:

✔ try-catch in APIs
✔ Global error middleware
✔ Handling async errors
✔ Proper status codes

Error handling is key to building **robust backend systems** 🔥

#NodeJS #ExpressJS #Backend #ErrorHandling #WebDevelopment

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✅ DAY-2 Summary (Week-10)

* Types of errors
* try-catch handling
* next(err) usage
* Global error middleware
* Best practices
