const db = require("../config/db");

const Book = {
  getAll: () => db("books").select("*"),
  getById: (id) => db("books").where({ id }).first(),
  create: (book) => db("books").insert(book).returning("*"),
  update: (id, book) => db("books").where({ id }).update(book).returning("*"),
  delete: (id) => db("books").where({ id }).del()
};

module.exports = Book;
