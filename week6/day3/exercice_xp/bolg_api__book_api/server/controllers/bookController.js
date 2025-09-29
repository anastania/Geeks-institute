const Book = require("../models/bookModel");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.getById(req.params.bookId);
    book ? res.json(book) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const [newBook] = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const [updated] = await Book.update(req.params.bookId, req.body);
    updated ? res.json(updated) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.delete(req.params.bookId);
    deleted ? res.json({ msg: "Deleted" }) : res.status(404).json({ msg: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
