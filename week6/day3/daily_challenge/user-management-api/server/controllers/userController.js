const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.createUser(
      { email, username, first_name, last_name },
      hashedPassword
    );

    res.status(201).json({ msg: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userHash = await User.getPasswordByUsername(username);
    if (!userHash) return res.status(400).json({ error: "Invalid credentials" });

    const isValid = await bcrypt.compare(password, userHash.password);
    if (!isValid) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.getById(req.params.id);
    user ? res.json(user) : res.status(404).json({ msg: "User not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.updateUser(req.params.id, req.body);
    updated ? res.json(updated) : res.status(404).json({ msg: "User not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
