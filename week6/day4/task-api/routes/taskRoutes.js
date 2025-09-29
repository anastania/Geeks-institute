const express = require("express");
const fs = require("fs");
const router = express.Router();

const TASKS_FILE = "./tasks.json";

// Helper: read tasks
const readTasks = () => {
  try {
    const data = fs.readFileSync(TASKS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper: write tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

// ✅ GET all tasks
router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// ✅ GET task by ID
router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  task ? res.json(task) : res.status(404).json({ error: "Task not found" });
});

// ✅ POST create new task
router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || "",
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// ✅ PUT update task
router.put("/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  if (!title) return res.status(400).json({ error: "Title is required" });

  tasks[index] = {
    ...tasks[index],
    title,
    description: description || tasks[index].description,
    completed: completed ?? tasks[index].completed,
  };

  writeTasks(tasks);
  res.json(tasks[index]);
});

// ✅ DELETE task
router.delete("/:id", (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const deleted = tasks.splice(index, 1);
  writeTasks(tasks);
  res.json(deleted[0]);
});

module.exports = router;
