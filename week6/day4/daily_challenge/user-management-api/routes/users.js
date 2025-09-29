const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const router = express.Router();
const filePath = path.join(__dirname, "../data/users.json");

// Helper: Read users
function readUsers() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Helper: Write users
function writeUsers(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// POST /register
router.post("/register", async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: "❌ All fields are required" });
  }

  let users = readUsers();
  const existingUser = users.find(
    (u) => u.username === username || u.email === email
  );
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "⚠️ Username or Email already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.json({ message: `✅ User ${username} registered successfully!` });
});

// POST /login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let users = readUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "❌ User not registered!" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "❌ Incorrect password!" });
  }

  res.json({ message: `✅ Welcome back, ${username}!` });
});

// GET /users
router.get("/users", (req, res) => {
  let users = readUsers();
  res.json(users);
});

// GET /users/:id
router.get("/users/:id", (req, res) => {
  let users = readUsers();
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: "❌ User not found" });
  }
  res.json(user);
});

// PUT /users/:id
router.put("/users/:id", (req, res) => {
  let users = readUsers();
  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "❌ User not found" });
  }

  users[userIndex] = { ...users[userIndex], ...req.body };
  writeUsers(users);

  res.json({ message: "✅ User updated successfully!" });
});

module.exports = router;
