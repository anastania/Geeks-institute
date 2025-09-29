const express = require("express");
const router = express.Router();

let todos = [];

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post("/", (req, res) => {
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index !== -1) {
    todos[index] = { id, ...req.body };
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Delete a todo by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
