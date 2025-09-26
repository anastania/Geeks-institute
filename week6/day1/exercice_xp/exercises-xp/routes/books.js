const express = require("express");
const router = express.Router();

let books = [];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index !== -1) {
    books[index] = { id, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
